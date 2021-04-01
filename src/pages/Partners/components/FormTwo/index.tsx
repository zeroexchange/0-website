import React, { useState } from 'react'

import styled from 'styled-components'

const FormLabel = styled.div`
  display: block;
  color: #fff;
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 1rem;
  margin-top: 1rem;
`

export default function FormTwo({ partnerForm, onHandleClick, onHandleBack }) {

  const [description, setDescription] = useState(partnerForm.description || '');
  const [useCase, setUseCase] = useState(partnerForm.useCase || '');

  const handleBack = () => {
    onHandleBack();
  }

  const handleClick = () => {
    if (description.length === 0 || useCase.length === 0) return;
    onHandleClick({ description, useCase })
  }

  const handleInput = (input) => {
    const val = input.target.value;
    setDescription(val);
  }

  const handleUseCase = (input) => {
    const val = input.target.value;
    setUseCase(val);
  }

  return (<>
    <FormLabel>Describe your project:</FormLabel>
      <textarea
        className="textarea"
        placeholder="Project description"
        onChange={handleInput}
        value={description}
      ></textarea>
      <FormLabel>Describe a use-case for your token:</FormLabel>
      <textarea
        className="textarea"
        placeholder="Token use-case"
        onChange={handleUseCase}
        value={useCase}
      ></textarea>
      <div style={{ display: 'flex', flexDirection: 'row' }} className="mt-6">
        <button className="button is-outline" onClick={() => handleBack()}>Back</button>
        <button className="button is-gradient is-next" onClick={() => handleClick()}>Next</button>
      </div>
    </>)
}
