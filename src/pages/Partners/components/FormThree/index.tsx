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

export default function FormThree({ partnerForm, onHandleClick, onHandleBack }) {

  const [projectStatus, setProjectStatus] = useState(partnerForm.projectStatus || '');
  const onSetProjectStatus = (val) => {
    setProjectStatus(val)
  }

  const [teamStatus, setTeamStatus] = useState(partnerForm.teamStatus || '');
  const onSetTeamStatus = (val) => {
    setTeamStatus(val)
  }

  const [auditStatus, setAuditStatus] = useState(partnerForm.auditStatus || '');
  const onSetAuditStatus = (val) => {
    setAuditStatus(val)
  }

  const handleBack = () => {
    onHandleBack();
  }

  const handleClick = () => {
    if (teamStatus.length === 0 || projectStatus.length === 0 || auditStatus.length === 0 ) return;
    onHandleClick({ teamStatus, projectStatus, auditStatus })
  }

  return (<>
    <FormLabel>Is Your Team Anonymous or Public?</FormLabel>
    <ul className="radio-list">
      <li style={{ maxWidth: '200px' }}
        className={`radio-item ${teamStatus === 'Public' ? 'active' : ''}`}
        onClick={() => { onSetTeamStatus('Public')}}
      >
        Public
      </li>
      <li style={{ maxWidth: '200px' }}
        className={`radio-item ${teamStatus === 'Anonymous' ? 'active' : ''}`}
        onClick={() => { onSetTeamStatus('Anonymous')}}
      >
        Anonymous
      </li>
      <li style={{ maxWidth: '200px' }}
        className={`radio-item ${teamStatus === 'Mixed' ? 'active' : ''}`}
        onClick={() => { onSetTeamStatus('Mixed')}}
      >
        Mixed
      </li>
    </ul>
      <FormLabel>What is the project status?</FormLabel>
      <ul className="radio-list">
        <li style={{ maxWidth: '200px' }}
          className={`radio-item ${projectStatus === 'Idea Stage' ? 'active' : ''}`}
          onClick={() => { onSetProjectStatus('Idea Stage')}}
        >
          Idea stage
        </li>
        <li style={{ maxWidth: '200px' }}
          className={`radio-item ${projectStatus === 'Development Stage' ? 'active' : ''}`}
          onClick={() => { onSetProjectStatus('Development Stage')}}
        >
          Development stage
        </li>
        <li style={{ maxWidth: '200px' }}
          className={`radio-item ${projectStatus === 'Launch Stage' ? 'active' : ''}`}
          onClick={() => { onSetProjectStatus('Launch Stage')}}
        >
          Launch stage
        </li>
        <li style={{ maxWidth: '200px' }}
          className={`radio-item ${projectStatus === 'Post-Launch Stage' ? 'active' : ''}`}
          onClick={() => { onSetProjectStatus('Post-Launch Stage')}}
        >
          Post-Launch stage
        </li>
      </ul>
      <FormLabel>Are your token contracts audited?</FormLabel>
      <ul className="radio-list">
        <li style={{ maxWidth: '200px' }}
          className={`radio-item ${auditStatus === 'Yes' ? 'active' : ''}`}
          onClick={() => { onSetAuditStatus('Yes')}}
        >
          Yes
        </li>
        <li style={{ maxWidth: '200px' }}
          className={`radio-item ${auditStatus === 'No' ? 'active' : ''}`}
          onClick={() => { onSetAuditStatus('No')}}
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
