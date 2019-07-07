import * as React from 'react';
import {connect} from 'react-redux';
import UserViewComponent from './user-view.component';
import * as selectors from '../../../../../store/reducers'
import {logout} from '../../../../../common/modules/auth/store/actions/actions';

const mapStateToProps = (state: any)=> ({
    auth: selectors.getAuth(state)
});

const mapDispatchToProps = (dispatch: any) => ({
    logout: () =>  dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserViewComponent);
