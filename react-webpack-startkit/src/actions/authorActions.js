'use strict';

import Dispatcher from '../dispatcher/appDispatcher';
import AuthorApi from '../api/authorApi';
import ActionType from '../constants/actionType';

export default {
    createAuthor(author) {
        const newAuthor = AuthorApi.saveAuthor(author);
        Dispatcher.dispatch({
            actionType: ActionType.CREATE_AUTHOR,
            author: newAuthor
        });
    },

    updateAuthor(author) {
        const updatedAuthor = AuthorApi.saveAuthor(author);
        Dispatcher.dispatch({
            actionType: ActionType.UPDATE_AUTHOR,
            author: updatedAuthor
        });
    },

    deleteAuthor(id) {
        AuthorApi.deleteAuthor(id);
        Dispatcher.dispatch({
            actionType: ActionType.DELETE_AUTHOR,
            id: id
        })
    }
}
