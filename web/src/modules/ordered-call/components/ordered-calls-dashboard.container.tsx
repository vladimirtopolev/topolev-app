import {connect} from 'react-redux';
import OrderedCallsDashboard from './ordered-calls-dashboard.component';
import {getOrderedCalls} from '../store/actions/actions';
import {OrderedCall} from '../schema/orderedCall';
import {AVAILABLE_STATUSES} from '../schema/statuses';
import * as selectors from '../store/reducers';


type TasksGroupedByStatus = {
    [K in AVAILABLE_STATUSES]?: OrderedCall[]
}

export interface OrderedCallsDashboardContainer {
    groupedOrderedCalls: TasksGroupedByStatus,
    getOrderedCalls: () => void,
}


const mapStateToProps = (state: OrderedCall[]) => {
    return {
        groupedOrderedCalls: selectors.getGroupedOrderedCalls(state)
    }
};

const mapDispatchToProps = (disptach: any) => {
    return {
        getOrderedCalls: disptach(getOrderedCalls())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderedCallsDashboard);
