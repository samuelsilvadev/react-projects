import React from 'react';
import Sticky from './StickyNotifier';

import './App.css';

const Article = () => (
    <Sticky.StickyWrapper as="article">
        <Sticky.StickyNotifier as="header" className="article__header">
            Lorem ipsum dolor
        </Sticky.StickyNotifier>
        <p className="article__content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur voluptatibus natus necessitatibus esse deserunt, dicta
            nulla. Tempore recusandae culpa illum vitae soluta iste. Veniam dolores perferendis dolorem magni consectetur fugiat. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur voluptatibus natus necessitatibus esse deserunt, dicta nulla.
            Tempore recusandae culpa illum vitae soluta iste. Veniam dolores perferendis dolorem magni consectetur fugiat. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Aspernatur voluptatibus natus necessitatibus esse deserunt, dicta nulla. Tempore
            recusandae culpa illum vitae soluta iste. Veniam dolores perferendis dolorem magni consectetur fugiat. Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Aspernatur voluptatibus natus necessitatibus esse deserunt, dicta nulla. Tempore recusandae
            culpa illum vitae soluta iste. Veniam dolores perferendis dolorem magni consectetur fugiat.
        </p>
    </Sticky.StickyWrapper>
);

function App() {
    return (
        <Sticky.StickyRoot as="main" className="main">
            <Article />
            <Article />
            <Article />
            <Article />
        </Sticky.StickyRoot>
    );
}

export default App;
