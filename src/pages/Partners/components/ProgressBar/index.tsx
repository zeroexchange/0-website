import React from 'react'
import styled from 'styled-components'

const BarContainer = styled.div`
  display: block;
  padding: 8px;
  border-radius: 100px;
  width: 100%;
  height: 42px;
  background: rgba(103, 82, 247, .1);
  border: 1px solid rgba(103, 82, 247, .5);
  position: relative;
  margin-bottom: 1.5rem;
  transition: all .3s ease-in-out;
  &.done {
    border: 1px solid rgba(30, 247, 231, .5);
  }
`
const Progress = styled.div`
  display: block;
  height: 100%;
  border-radius: 100px;
  background: #6752F7;
  transition: all .3s ease-in-out;
  &.done {
    background: #1EF7E7;
  }
`

export default function ProgressBar({ formStep }) {

  const returnWidth = () => {
    if (formStep === 0) {
      return '15%';
    }
    if (formStep === 1) {
      return '25%';
    }
    if (formStep === 2) {
      return '35%';
    }
    if (formStep === 3) {
      return '55%';
    }
    if (formStep === 4) {
      return '75%';
    }
    if (formStep === 5) {
      return '85%';
    }
    if (formStep === 6) {
      return '95%';
    }
    if (formStep === 7) {
      return '100%';
    }
  }

  return (
    <BarContainer className={ returnWidth() === '100%' ? 'done' : ''}>
      <Progress style={{ width: returnWidth() }} className={ returnWidth() === '100%' ? 'done' : ''} />
    </BarContainer>
  )
}
