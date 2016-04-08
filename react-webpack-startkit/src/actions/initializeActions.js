'use strict';

import Dispatcher from '../dispatcher/appDispatcher';
import AuthorApi from '../api/authorApi';
import ActionType from '../constants/actionType';

export default {
    initApp() {
        Dispatcher.dispatch({
            actionType: ActionType.INITIALIZE,
            initialData: {
                authors: AuthorApi.getAllAuthors()
            }
        })
    }
}
