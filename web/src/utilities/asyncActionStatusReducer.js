// app/reducers/asyncActionStatusReducer.ts
import { AsyncActionStatus } from './asyncActions';
export var initialState = AsyncActionStatus.UNSTARTED;
export function reduceAsyncActionStatusOf(type) {
    return function (state, action) {
        if (state === void 0) { state = initialState; }
        if (action.type === type) {
            return action.status;
        }
        return state;
    };
}
//# sourceMappingURL=asyncActionStatusReducer.js.map