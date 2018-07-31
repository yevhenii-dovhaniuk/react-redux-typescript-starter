import {connect} from 'react-redux';
import {Article} from './Article';
import {markArticle} from './Article.actions';

const mapStateToProps = (state: any) => ({
    selected: state.article.selected,
    text: state.article.text
});

export const ArticleContainer = connect(
    mapStateToProps,
    {
        onCheck: markArticle
    },
)(Article);