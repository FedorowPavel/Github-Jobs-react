import React from 'react';
import styled from 'styled-components'

import image from '../assets/images/skyscrapers.png'
import HeaderSearchForm from "./HeaderSearchForm";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 138px;
  width: 100%;
  border-radius: 8px;
  background-image: url("${image}");
  background-position: center center;
  
  & form {
    width: 65%;
    position: relative;
  }
`

function HeaderSearch() {
    return (
        <Wrapper>
            <HeaderSearchForm placeholder={"Title, companies, expertise or benefits"}/>
        </Wrapper>
    );
}

export default HeaderSearch;
