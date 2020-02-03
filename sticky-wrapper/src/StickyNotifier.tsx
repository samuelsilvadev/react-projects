import React, { FC, createElement, Fragment, useRef, useEffect, createContext, useState, useContext } from 'react';

import './StickyNotifier.css';

interface IStickyContextProps {
    rootRef: HTMLElement | null;
    setRootRef: (value: any) => any;
}

interface IProps {
    as: string;
    className?: string;
}

interface IStickyNotifierProps {
    as: string;
    className?: string;
    rootRef?: HTMLElement;
}

const StickyContext = createContext<Partial<IStickyContextProps>>({});

const StickyContextProvider: FC = ({ children }) => {
    const [rootRef, setRootRef] = useState(null);

    return <StickyContext.Provider value={{ rootRef, setRootRef }}>{children}</StickyContext.Provider>;
};

const useStickyContext = () => {
    const context = useContext(StickyContext);

    if (Object.keys(context).length === 0) {
        throw new TypeError('It is necessary to use a `StickyRoot` as a wrapper');
    }

    return context;
};

const StickyRoot: FC<IProps> = ({ as, ...remainingProps }) => {
    return (
        <StickyContextProvider>
            <StickyContext.Consumer>{({ setRootRef }) => createElement(as, { ref: setRootRef, ...remainingProps })}</StickyContext.Consumer>
        </StickyContextProvider>
    );
};

const StickyWrapper: FC<IProps> = ({ as, className = '', ...remainingProps }) => {
    return createElement(as, { className: `sticky__wrapper ${className}`, ...remainingProps });
};

const StickyNotifier: FC<IStickyNotifierProps> = ({ as, className, ...remainingProps }) => {
    const { rootRef } = useStickyContext();

    const topSentinel = useRef<HTMLDivElement>(null);
    const bottomSentinel = useRef<HTMLDivElement>(null);
    const stickyRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!topSentinel.current || !bottomSentinel.current || !rootRef) {
            return;
        }

        const topSentinelObserver = new IntersectionObserver(
            ([entry]) => {
                const { rootBounds, boundingClientRect } = entry;

                if (boundingClientRect && rootBounds) {
                    if (boundingClientRect.bottom < rootBounds.top) {
                        console.log('sticky activated');
                    }

                    if (boundingClientRect.bottom >= rootBounds.top && boundingClientRect.bottom < rootBounds.bottom) {
                        console.log('sticky deactivated');
                    }
                }
            },
            {
                threshold: [0],
                // root: rootRef
            },
        );

        const bottomSentinelObserver = new IntersectionObserver(
            ([entry]) => {
                const { boundingClientRect, rootBounds, intersectionRatio } = entry;

                if (!boundingClientRect || !rootBounds) {
                    return;
                }

                if (boundingClientRect.bottom > rootBounds.top && intersectionRatio === 1) {
                    console.log('sticky activated by bottom sentinel');
                }

                if (boundingClientRect.top < rootBounds.top && boundingClientRect.bottom < rootBounds.bottom) {
                    console.log('sticky deactivated by bottom sentinel');
                }
            },
            { threshold: [1], root: rootRef },
        );

        topSentinelObserver.observe(topSentinel.current);
        bottomSentinelObserver.observe(bottomSentinel.current);

        return () => {
            topSentinelObserver.disconnect();
            bottomSentinelObserver.disconnect();
        };
    }, [rootRef]);

    return (
        <Fragment>
            <div ref={topSentinel} className="sticky__top__sentinel"></div>
            {createElement(as, { ref: stickyRef, className: `sticky ${className}`, ...remainingProps })}
            <div ref={bottomSentinel} className="sticky__bottom__sentinel"></div>
        </Fragment>
    );
};

export default { StickyRoot, StickyNotifier, StickyWrapper };
