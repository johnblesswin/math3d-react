import React from 'react'
import styled from 'styled-components'
import SubtleButton from 'components/SubtleButton'
import { Icon } from 'antd'

const StyledDeleteButton = styled(SubtleButton)`
  padding:0px;
  margin-right: -4px;
  margin-top: -2px;
  min-width:25px;
  max-width:25px;
  height:25px;
  position:absolute;
  right:0;
  top:0;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size:133%;
  color: ${props => props.theme.medium};
`

export default function DeleteButton(props) {
  return (
    <StyledDeleteButton {...props} >
      <Icon
        type='close'
      />
    </StyledDeleteButton>
  )
}
