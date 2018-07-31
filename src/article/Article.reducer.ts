import {Action} from 'redux';
import {MARK_ARTICLE} from './Article.actions';

export interface ArticleState {
    selected?: boolean;
    text: string;
}

export const articleInitialState: ArticleState  = {
    selected: true,
    text: 'Hello from article'
};

export const article = (state = articleInitialState, action: Action) => {
    switch (action.type) {
        case MARK_ARTICLE:
            return {...state, selected: !state.selected};
        default:
            return {...state};
    }
};