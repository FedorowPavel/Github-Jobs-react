import styled from 'styled-components'

const InputSearch = styled.input`
  height: 56px;
  border: none;
  border-radius: 4px;
  padding-right: -160px;
  width: 100%;
  padding-left: 18px;
  font-size: 14px;

  &:focus {
    outline: none;
    border: 2px solid #4799ff;
  }
`

export default InputSearch;