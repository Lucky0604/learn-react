'use strict';

import keyMirror from 'react/lib/keyMirror';

const actionType = keyMirror({
    INITIALIZE: null,
    CREATE_AUTHOR: null,
    UPDATE_AUTHOR: null,
    DELETE_AUTHOR: null
});

export default actionType;
