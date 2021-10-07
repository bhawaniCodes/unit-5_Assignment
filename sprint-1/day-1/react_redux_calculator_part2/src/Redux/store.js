import { createStore} from 'redux'
import { reducerFn } from './reducer';

const initState = {
    counter: 0
}

export const store = createStore(reducerFn, initState);