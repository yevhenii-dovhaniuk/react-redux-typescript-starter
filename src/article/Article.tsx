import React from 'react';
import {ArticleState} from './Article.reducer';
import './Article.pcss';

export interface ArticleProps extends ArticleState {
    onCheck: () => void;
}

export const Article = ({text, selected, onCheck}: ArticleProps) => (
    <article className="article">
        <div className="article__text">
            {text}
        </div>
        <div className="article__check">
            <input type="checkbox" checked={selected} onChange={onCheck}/>
        </div>
    </article>
);