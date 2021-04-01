import './styles.scss';

import React, { useState } from 'react';

import FormEnd from './components/FormEnd';
import FormFive from './components/FormFive';
import FormFour from './components/FormFour';
import FormOne from './components/FormOne';
import FormSeven from './components/FormSeven';
import FormSix from './components/FormSix';
import FormThree from './components/FormThree';
import FormTwo from './components/FormTwo';
import Layout from '../../layout/MainLayout';
import ProgressBar from './components/ProgressBar';
import styled from 'styled-components'

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 500px;
  max-width: 94%;
  border: 2px solid #6752F7;
  border-radius: 30px;
  margin: 1rem auto;
  background: black;
  margin-bottom: 3rem;
  transition: all .3s ease-in-out;
  &.done {
    border: 2px solid #1EF7E7;
  }
`
export default function PartnersPage() {

  const [formStep, setFormStep] = useState(0);
  const [partnerForm, setPartnerForm] = useState({});

  const handleClick = async (e) => {
    const update = {
      ...partnerForm,
      ...e
    }
    setPartnerForm(update);
    const step = formStep + 1;
    setFormStep(step);
  }

  const handleBack = () => {
    const step = formStep - 1;
    setFormStep(step);
  }

  if (formStep === 7) {
    //
  }

  return (
    <Layout hasSnow={false}>
      <div className="container partners-container">
        <h1>Partner with ZERO to launch your token project on multiple blockchains</h1>
        <FormContainer className={ formStep === 7 ? 'done' : '' }>
          <ProgressBar formStep={formStep} />
          { formStep === 0 &&
            <FormOne partnerForm={partnerForm} onHandleClick={handleClick} />
          }
          { formStep === 1 &&
            <FormTwo partnerForm={partnerForm} onHandleClick={handleClick} onHandleBack={handleBack} />
          }
          { formStep === 2 &&
            <FormThree partnerForm={partnerForm} onHandleClick={handleClick} onHandleBack={handleBack} />
          }
          { formStep === 3 &&
            <FormFour partnerForm={partnerForm} onHandleClick={handleClick} onHandleBack={handleBack} />
          }
          { formStep === 4 &&
            <FormFive partnerForm={partnerForm} onHandleClick={handleClick} onHandleBack={handleBack} />
          }
          { formStep === 5 &&
            <FormSix partnerForm={partnerForm} onHandleClick={handleClick} onHandleBack={handleBack} />
          }
          { formStep === 6 &&
            <FormSeven partnerForm={partnerForm} onHandleClick={handleClick} onHandleBack={handleBack} />
          }
          { formStep === 7 &&
            <FormEnd partnerForm={partnerForm} />
          }
        </FormContainer>
      </div>
    </Layout >
  )
}
