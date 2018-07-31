import React from 'react';
import './App.pcss';
import {ArticleContainer} from '../article/Article.container';

class App extends React.Component {
    public render() {
        return (
            <div className="app">
                <ArticleContainer />
            </div>
        );
    }
}

export default App;
