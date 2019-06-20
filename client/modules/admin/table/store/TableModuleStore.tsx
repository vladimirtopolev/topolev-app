import {createStore, IModuleStore, IModule} from "redux-dynamic-modules";
import {TableModuleState, rootReducer} from './reducers';

export function getUserModule(): IModule<TableModuleState> {
    return {
        id: 'tableModule',
        reducerMap: {
            adminTable: rootReducer
        }
    }
}

export const store: IModuleStore<TableModuleState> = createStore(
    {}, // initial state
    getUserModule()
);