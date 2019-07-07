import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { signIn } from '../store/actions/actions';
import SignInComponent from './signin.component';
import * as selectors from '../../../../store/reducers';
var mapStateToProps = function (state) { return ({
    taskStatuses: selectors.getAuthAsyncStatuses(state),
    auth: selectors.getAuth(state)
}); };
var mapDispatchToProps = function (dispatch, ownProps) { return ({
    signIn: function (user) {
        return dispatch(signIn(user));
    }
}); };
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignInComponent));
//# sourceMappingURL=signin-container.component.js.map