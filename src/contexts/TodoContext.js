import {createContext} from 'react';

import {initialState} from '../reducers';

export const TodoContext = createContext(initialState);