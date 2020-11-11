import React from 'react';
import { StyledLogin } from '../../utility/layout/styledLoginLayout';

function LoginLayout({ children }) {
    return (
        <>
            <StyledLogin>
                {children}
            </StyledLogin>
        </>
    );
}

export default LoginLayout;