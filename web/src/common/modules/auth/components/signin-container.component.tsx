import * as React from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import {signIn} from '../store/actions/actions';
import {UserAuthenticationFields} from '../schema/models';

import SignInComponent from './signin.component';
import * as selectors from '../../../../store/reducers';

import {History} from 'history';

interface OwnContainerProps {
    history: History
}
const mapStateToProps = (state: any) => ({
    taskStatuses: selectors.getAuthAsyncStatuses(state),
    auth: selectors.getAuth(state)
});

const mapDispatchToProps = (dispatch: any, ownProps: OwnContainerProps) => ({
    signIn: (user: UserAuthenticationFields) =>
        dispatch(signIn(user))
});

export default withRouter<any>(connect(mapStateToProps, mapDispatchToProps)(SignInComponent));

