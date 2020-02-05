import React, { Fragment } from 'react';
import Sticky from './StickyNotifier';

import './App.css';

type TargetType = HTMLElement | undefined | null;

const Article = () => (
    <Sticky.StickyWrapper as="article">
        <Sticky.StickyNotifier as="header" className="article__header">
            Lorem ipsum dolor
        </Sticky.StickyNotifier>
        <p className="article__content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur voluptatibus natus
            necessitatibus esse deserunt, dicta nulla. Tempore recusandae culpa illum vitae soluta
            iste. Veniam dolores perferendis dolorem magni consectetur fugiat. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Aspernatur voluptatibus natus necessitatibus esse
            deserunt, dicta nulla. Tempore recusandae culpa illum vitae soluta iste. Veniam dolores
            perferendis dolorem magni consectetur fugiat. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Aspernatur voluptatibus natus necessitatibus esse deserunt, dicta
            nulla. Tempore recusandae culpa illum vitae soluta iste. Veniam dolores perferendis
            dolorem magni consectetur fugiat. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Aspernatur voluptatibus natus necessitatibus esse deserunt, dicta nulla. Tempore
            recusandae culpa illum vitae soluta iste. Veniam dolores perferendis dolorem magni
            consectetur fugiat.
        </p>
    </Sticky.StickyWrapper>
);

function App() {
    const handleOnSticky = (target: TargetType) => {
        if (target && target.style) {
            target.style.backgroundColor = 'hotpink';
        }
    };

    const handleOnUnSticky = (target: TargetType) => {
        if (target && target.style) {
            target.style.backgroundColor = 'blueviolet';
        }
    };

    return (
        <Fragment>
            <h1 className="title">Scroll to see the magic happening</h1>
            <Sticky.StickyRoot
                onSticky={handleOnSticky}
                onUnSticky={handleOnUnSticky}
                as="main"
                className="main"
            >
                <Article />
                <Article />
                <Article />
                <Article />
            </Sticky.StickyRoot>
        </Fragment>
    );
}

export default App;
