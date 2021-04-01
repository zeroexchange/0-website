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

export default function FormFive({ partnerForm, onHandleClick, onHandleBack }) {

  const [blockchains, setBlockchains] = useState(partnerForm.blockchains || []);
  const onSetBlockchains = (val) => {
    let exists = blockchains.find(x => x === val);
    if (!exists) {
      blockchains.push(val);
      setBlockchains([...blockchains])
    } else {
      let x = blockchains.filter(y => y !== val);
      setBlockchains([...x]);
    }
  }

  const [futureChains, setFutureChains] = useState(partnerForm.futureChains || null);

  const handleBack = () => {
    onHandleBack();
  }

  const handleClick = () => {
    if (blockchains.length === 0 || !futureChains ) return;
    onHandleClick({ blockchains, futureChains })
  }

  return (<>
    <FormLabel>Which blockchain(s) do you want to be on?</FormLabel>
    <ul className="radio-list">
      <li style={{ maxWidth: '200px' }}
        className={`radio-item check ${blockchains.includes('Ethereum') ? 'active' : ''}`}
        onClick={() => { onSetBlockchains('Ethereum')}}
      >
        Ethereum
      </li>
      <li style={{ maxWidth: '200px' }}
        className={`radio-item check ${blockchains.includes('Avalanche') ? 'active' : ''}`}
        onClick={() => { onSetBlockchains('Avalanche')}}
      >
        Avalanche
      </li>
      <li style={{ maxWidth: '200px' }}
        className={`radio-item check ${blockchains.includes('Binance Smart Chain') ? 'active' : ''}`}
        onClick={() => { onSetBlockchains('Binance Smart Chain')}}
      >
        Binance Smart Chain
      </li>
    </ul>
      <FormLabel>Include your token in future ZERO chain launches?</FormLabel>
      <ul className="radio-list">
        <li style={{ maxWidth: '200px' }}
          className={`radio-item ${futureChains === 'Yes' ? 'active' : ''}`}
          onClick={() => { setFutureChains('Yes')}}
        >
          Yes
        </li>
        <li style={{ maxWidth: '200px' }}
          className={`radio-item ${futureChains === 'No' ? 'active' : ''}`}
          onClick={() => { setFutureChains('No')}}
        >
          No
        </li>
      </ul>
      <div style={{ display: 'flex', flexDirection: 'row' }} className="mt-6">
        <button className="button is-outline purple" onClick={() => handleBack()}>Back</button>
        <button className="button is-gradient is-next" onClick={() => handleClick()}>Next</button>
      </div>
    </>)
}
