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

export default function FormFour({ partnerForm, onHandleClick, onHandleBack }) {

  const [mintStatus, setMintStatus] = useState(partnerForm.mintStatus || null);
  const onSetMintStatus = (val) => {
    setMintStatus(val)
  }

  const [liquidityLock, setLiquidityLock] = useState(partnerForm.liquidityLock || null);
  const onSetLiquidityLock = (val) => {
    setLiquidityLock(val)
  }

  const handleBack = () => {
    onHandleBack();
  }

  const handleClick = () => {
    if (!mintStatus || !liquidityLock ) return;
    onHandleClick({ mintStatus, liquidityLock })
  }

  return (<>
    <FormLabel>Is there a mint function on your token?</FormLabel>
    <ul className="radio-list">
      <li style={{ maxWidth: '200px' }}
        className={`radio-item ${mintStatus === 'Yes - Timelocked' ? 'active' : ''}`}
        onClick={() => { onSetMintStatus('Yes - Timelocked')}}
      >
        Yes - Timelocked
      </li>
      <li style={{ maxWidth: '200px' }}
        className={`radio-item ${mintStatus === 'Yes - Renounced' ? 'active' : ''}`}
        onClick={() => { onSetMintStatus('Yes - Renounced')}}
      >
        Yes - Renounced
      </li>
      <li style={{ maxWidth: '200px' }}
        className={`radio-item ${mintStatus === 'No' ? 'active' : ''}`}
        onClick={() => { onSetMintStatus('No')}}
      >
        No
      </li>
    </ul>
      <FormLabel>Do you agree to lock your listing liquidity for a minimum of 3 months?</FormLabel>
      <ul className="radio-list">
        <li style={{ maxWidth: '300px' }}
          className={`radio-item ${liquidityLock === 'Yes - we will lock liquidity' ? 'active' : ''}`}
          onClick={() => { onSetLiquidityLock('Yes - we will lock liquidity')}}
        >
          Yes - we will lock liquidity
        </li>
        <li style={{ maxWidth: '300px' }}
          className={`radio-item ${liquidityLock === 'No - we will dump' ? 'active' : ''}`}
          onClick={() => { onSetLiquidityLock('No - we will dump')}}
        >
          No - we will dump
        </li>
      </ul>
      <div style={{ display: 'flex', flexDirection: 'row' }} className="mt-6">
        <button className="button is-outline purple" onClick={() => handleBack()}>Back</button>
        <button className="button is-gradient is-next" onClick={() => handleClick()}>Next</button>
      </div>
    </>)
}
