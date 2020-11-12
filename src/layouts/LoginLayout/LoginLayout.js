import React from 'react';
import { StyledLogin } from '../../utility/layout/styledLoginLayout';

function LoginLayout(props) {
    return (
        <>
            <StyledLogin>
                {props.children}
            </StyledLogin>
        </>
    );
}

export default LoginLayout;