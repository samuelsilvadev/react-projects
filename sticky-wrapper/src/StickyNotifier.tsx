import React, {
    FC,
    createElement,
    Fragment,
    useRef,
    useEffect,
    createContext,
    useState,
    useContext,
    ReactType,
} from 'react';

import './StickyNotifier.css';

type TargetType = HTMLElement | undefined | null;

interface IStickyContextProps {
    rootRef: HTMLElement | null;
    setRootRef: (value: any) => any;
    events: IAvailableEvents;
    setEvents: (events: IAvailableEvents) => void;
}

interface IAvailableEvents {
    onSticky?: (target: TargetType) => void;
    onUnSticky?: (target: TargetType) => void;
}

interface IProps extends IAvailableEvents {
    as: string;
    className?: string;
}

interface IStickyNotifierProps {
    as: string;
    className?: string;
    rootRef?: HTMLElement;
    events?: IAvailableEvents;
}

const STICKY_ELEMENT_CLASSNAME = 'sticky';

const StickyContext = createContext<Partial<IStickyContextProps>>({});

const StickyContextProvider: FC = ({ children }) => {
    const [rootRef, setRootRef] = useState(null);
    const [events, setEvents] = useState<IAvailableEvents>({});

    return (
        <StickyContext.Provider value={{ rootRef, setRootRef, events, setEvents }}>
            {children}
        </StickyContext.Provider>
    );
};

const useStickyContext = () => {
    const context = useContext(StickyContext);

    if (Object.keys(context).length === 0) {
        throw new TypeError('It is necessary to use a `StickyRoot` as a wrapper');
    }

    return context;
};

const withStickyContextProvider = (Component: ReactType) => {
    return function WithStickyContextProvider(props: IProps) {
        return (
            <StickyContextProvider>
                <Component {...props} />
            </StickyContextProvider>
        );
    };
};

const StickyRootWithStickyContextProvider: FC<IProps> = ({
    as,
    onSticky,
    onUnSticky,
    ...remainingProps
}) => {
    const { setEvents, setRootRef } = useContext(StickyContext);

    useEffect(() => {
        const events: IAvailableEvents = {};

        if (typeof onSticky === 'function') {
            events.onSticky = onSticky;
        }

        if (typeof onUnSticky === 'function') {
            events.onUnSticky = onUnSticky;
        }

        setEvents && setEvents(events);
    }, [onSticky, onUnSticky, setEvents]);

    return createElement(as, {
        ref: setRootRef,
        ...remainingProps,
    });
};

const StickyRoot: FC<IProps> = withStickyContextProvider(StickyRootWithStickyContextProvider);

const StickyWrapper: FC<IProps> = ({ as, className = '', ...remainingProps }) => {
    return createElement(as, { className: `sticky__wrapper ${className}`, ...remainingProps });
};

const StickyNotifier: FC<IStickyNotifierProps> = ({ as, className, ...remainingProps }) => {
    const {
        rootRef,
        events: { onSticky = undefined, onUnSticky = undefined } = {},
    } = useStickyContext();

    const topSentinel = useRef<HTMLDivElement>(null);
    const bottomSentinel = useRef<HTMLDivElement>(null);
    const [stickyRefHeight, setStickyRefHeight] = useState<number>(0);

    useEffect(() => {
        if (!topSentinel.current || !bottomSentinel.current || !rootRef) {
            return;
        }

        const topSentinelObserver = new IntersectionObserver(
            ([entry]) => {
                const { rootBounds, boundingClientRect, target } = entry;
                const $stickyElement = target.parentElement?.querySelector(
                    `.${STICKY_ELEMENT_CLASSNAME}`,
                ) as HTMLElement;

                if (boundingClientRect && rootBounds) {
                    if (boundingClientRect.bottom < rootBounds.top) {
                        onSticky && onSticky($stickyElement);
                    }

                    if (
                        boundingClientRect.bottom >= rootBounds.top &&
                        boundingClientRect.bottom < rootBounds.bottom
                    ) {
                        onUnSticky && onUnSticky($stickyElement);
                    }
                }
            },
            {
                threshold: [0],
                root: rootRef,
            },
        );

        const bottomSentinelObserver = new IntersectionObserver(
            ([entry]) => {
                const { boundingClientRect, rootBounds, intersectionRatio, target } = entry;
                const $stickyElement = target.parentElement?.querySelector(
                    `.${STICKY_ELEMENT_CLASSNAME}`,
                ) as HTMLElement;

                if (!boundingClientRect || !rootBounds) {
                    return;
                }

                if (boundingClientRect.bottom > rootBounds.top && intersectionRatio === 1) {
                    onSticky && onSticky($stickyElement);
                }

                if (
                    boundingClientRect.top < rootBounds.top &&
                    boundingClientRect.bottom < rootBounds.bottom
                ) {
                    onUnSticky && onUnSticky($stickyElement);
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
    }, [onSticky, onUnSticky, rootRef]);

    return (
        <Fragment>
            <div ref={topSentinel} className="sticky__top__sentinel"></div>
            {createElement(as, {
                ref: (node: HTMLElement) => node && setStickyRefHeight(node.offsetHeight),
                className: `sticky ${className}`,
                ...remainingProps,
            })}
            <div
                ref={bottomSentinel}
                className="sticky__bottom__sentinel"
                style={
                    stickyRefHeight
                        ? {
                              height: `${stickyRefHeight}px`,
                          }
                        : undefined
                }
            ></div>
        </Fragment>
    );
};

export default { StickyRoot, StickyNotifier, StickyWrapper };
