'use strict';

import _ from 'lodash';
import EventEmitter from 'events';
import Dispatcher from '../dispatcher/appDispatcher';
import ActionType from '../constants/actionType';

const CHANGE_EVENT = 'change';
const authors = [];

class AuthorStore extends EventEmitter {
    constructor() {
        super();
    }

    addChangeListener = (callback) => {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener = (callback) => {
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange = () => {
        this.emit(CHANGE_EVENT);
    }

    getAllAuthors = () => {
        return authors;
    }

    getAuthorById = (id) => {
        return _.find(authors, {id: id});
    }
}

/* eslint disable */
const authorStoreInstance = new AuthorStore();
/* eslint enable */
authorStoreInstance.dispatchToken = Dispatcher.register((action) => {
    switch (action.actionType) {
        case ActionType.INITIALIZE:
            Array.prototype.unshift.apply(authors, action.initialData.authors);
            authorStoreInstance.emitChange();
            break;
        case ActionType.CREATE_AUTHOR:
            authors.push(action.author);
            authorStoreInstance.emitChange();
            break;
        case ActionType.UPDATE_AUTHOR:
            const existingAuthorIndex = _.findIndex(authors, {id: action.author.id});
            authors.splice(existingAuthorIndex, 1, action.author);
            authorStoreInstance.emitChange();
            break;
        case ActionType.DELETE_AUTHOR:
            _.remove(authors, function(author) {
                return action.id === author.id;
            });
            authorStoreInstance.emitChange();
            break;
        default:

    }
})

export default authorStoreInstance;
