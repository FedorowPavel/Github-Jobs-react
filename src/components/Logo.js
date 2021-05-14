import React from 'react';
import styled from 'styled-components'

const LogoText = styled.div`
  font-size: 36px;
  padding: 32px 0;
`

function Logo() {
    return (
        <LogoText>
            <strong>GitHub</strong>
            <span> Jobs</span>
        </LogoText>
    );
}


export default Logo;