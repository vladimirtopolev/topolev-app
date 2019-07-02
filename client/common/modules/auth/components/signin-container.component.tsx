import * as React from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import {signIn} from '../store/actions/actions';
import {UserAuthenticationFields} from '../schema/models';

import SignInComponent from './signin.component';

const mapDispatchToProps = (dispatch: any) => ({
    signIn: (user: UserAuthenticationFields) => dispatch(signIn(user))
});

export default withRouter<any>(connect(null, mapDispatchToProps)(SignInComponent));

