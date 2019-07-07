import { connect } from 'react-redux';
import UserViewComponent from './user-view.component';
import * as selectors from '../../../../../store/reducers';
import { logout } from '../../../../../common/modules/auth/store/actions/actions';
var mapStateToProps = function (state) { return ({
    auth: selectors.getAuth(state)
}); };
var mapDispatchToProps = function (dispatch) { return ({
    logout: function () { return dispatch(logout()); }
}); };
export default connect(mapStateToProps, mapDispatchToProps)(UserViewComponent);
//# sourceMappingURL=user-view.container.js.map