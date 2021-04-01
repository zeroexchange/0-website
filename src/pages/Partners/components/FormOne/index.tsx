import React, { useState } from 'react'

import styled from 'styled-components'

const FormLabel = styled.div`
  display: block;
  color: #fff;
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 1rem;
`

export default function FormOne({ partnerForm, onHandleClick }) {

  const [inputState, setInputState] = useState(partnerForm.projectName || '');

  const handleClick = () => {
    if (inputState.length === 0) return;
    onHandleClick({ projectName: inputState})
  }

  const handleInput = (input) => {
    const val = input.target.value;
    setInputState(val);
  }

  return (<>
    <FormLabel>What is your project name?</FormLabel>
      <input
        className="input"
        type="text"
        placeholder="Name"
        onChange={handleInput}
        value={inputState}
      />
      <button className="button is-gradient mt-6" onClick={() => handleClick()}>Next</button>
    </>)
}
