import styled from 'styled-components'

const Button = styled.button`
  height: 48px;
  width: 146px;
  position: absolute;
  right: 4px;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  border-radius: 4px;
  background-color: #1E86FF;
  border: none;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #3992ff;
  }
`

export default Button;