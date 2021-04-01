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

export default function FormSix({ partnerForm, onHandleClick, onHandleBack }) {

  const [website, setWebsite] = useState(partnerForm.website || null);
  const handleWebsite = (input) => {
    const val = input.target.value;
    setWebsite(val);
  }

  const [blog, setBlog] = useState(partnerForm.blog || null);
  const handleBlog = (input) => {
    const val = input.target.value;
    setBlog(val);
  }

  const [telegramGroup, setTelegramGroup] = useState(partnerForm.telegramGroup || null);
  const handleTelegramGroup = (input) => {
    const val = input.target.value;
    setTelegramGroup(val);
  }

  const [telegramHandle, setTelegramHandle] = useState(partnerForm.telegramHandle || null);
  const handleTelegramHandle = (input) => {
    const val = input.target.value;
    setTelegramHandle(val);
  }

  const handleClick = () => {
    if (!website || !blog || !telegramGroup || !telegramHandle) return;
    onHandleClick({ website, blog, telegramGroup, telegramHandle })
  }

  const handleBack = () => {
    onHandleBack();
  }

  return (<>
      <FormLabel>Website URL:</FormLabel>
      <input
        className="input"
        type="text"
        placeholder="Website"
        onChange={handleWebsite}
        value={website}
      />
      <FormLabel>Blog URL:</FormLabel>
      <input
        className="input"
        type="text"
        placeholder="Blog"
        onChange={handleBlog}
        value={blog}
      />
      <FormLabel>Telegram Group:</FormLabel>
      <input
        className="input"
        type="text"
        placeholder="Telegram group"
        onChange={handleTelegramGroup}
        value={partnerForm.telegramGroup}
      />
      <FormLabel>Your Telegram Handle:</FormLabel>
      <input
        className="input"
        type="text"
        placeholder="@myTelegram"
        onChange={handleTelegramHandle}
        value={partnerForm.telegramHandle}
      />
      <div style={{ display: 'flex', flexDirection: 'row' }} className="mt-6">
        <button className="button is-outline purple" onClick={() => handleBack()}>Back</button>
        <button className="button is-gradient is-next" onClick={() => handleClick()}>Next</button>
      </div>
    </>)
}
