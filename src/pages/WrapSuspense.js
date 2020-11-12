import { Spin } from 'antd';
import React, { Suspense } from 'react';
import { WrapContent } from '../utility/_shareStyle';

function WrapSuspense(props) {
    return (
        <Suspense
            fallback={
                <WrapContent
                    height='calc(100vh - 135px)'
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                >
                    <Spin size="large" />
                </WrapContent>
            }
        >
            {props.children}
        </Suspense>
    );
}

export default WrapSuspense;