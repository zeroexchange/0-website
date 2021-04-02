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

export default function FormSeven({ partnerForm, onHandleClick, onHandleBack }) {

  const [contactName, setContactName] = useState(partnerForm.contactName || '');
  const handleContactName = (input) => {
    const val = input.target.value;
    setContactName(val);
  }

  const [contactEmail, setContactEmail] = useState(partnerForm.contactEmail || '');
  const handleContactEmail = (input) => {
    const val = input.target.value;
    setContactEmail(val);
  }

  const handleClick = () => {
    if (contactName.length === 0 || contactEmail.length === 0) return;
    onHandleClick({ contactName, contactEmail })
  }

  const handleBack = () => {
    onHandleBack();
  }

  return (<>
      <FormLabel>Your name:</FormLabel>
      <input
        className="input"
        type="text"
        placeholder="Enter your name"
        onChange={handleContactName}
        value={contactName}
      />
      <FormLabel>Your email:</FormLabel>
      <input
        className="input"
        type="text"
        placeholder="Enter your email"
        onChange={handleContactEmail}
        value={contactEmail}
      />
      <div style={{ display: 'flex', flexDirection: 'row' }} className="mt-6">
        <button className="button is-outline purple" onClick={() => handleBack()}>Back</button>
        <button className="button is-gradient is-next" onClick={() => handleClick()}>Submit</button>
      </div>
    </>)
}
