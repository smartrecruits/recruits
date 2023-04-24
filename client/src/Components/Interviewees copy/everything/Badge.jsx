import React from 'react'
import styled from 'styled-components'
import { themeColor } from '../../utils/Interview';


function Badge({content}) {
  return (
    <Div>{content}</Div>
  )
}

const Div = styled.div `
  
  padding: 0.3rem 1rem;
  border-radius: 1rem;
  font-weight: 500;
  color: white;
  background-color: ${themeColor};
  cursor: pointer;
  `;

export default Badge