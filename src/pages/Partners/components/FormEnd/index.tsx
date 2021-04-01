import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

const H3 = styled.div`
  display: block;
  color: #fff;
  font-size: 2rem;
  text-align: center;
  padding: 2rem;
`

export default function FormEnd({ partnerForm }) {

  return (<>
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <FontAwesomeIcon
        icon="check"
        size="lg"
        style={{ fontSize: '6rem', color: '#1EF7E7', textAlign: 'center', marginTop: '1rem', marginBottom: '1rem' }}
      />
      <H3>Thank you for submitting, we'll be in touch</H3>
    </div>
    </>)
}
