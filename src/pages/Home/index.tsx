import './styles.scss';

import BottomList from './components/BottomList';
import Hero from './components/Hero';
import Layout from '../../layout/MainLayout';
import LogosSection from './components/LogosSection';
import React from 'react'

export default function Home() {

  const goToSite = (str) => {
    window.open(str, "_blank");
  }

  return (
    <Layout hasSnow={true}>
      <div className="container">
        <Hero goToSite={goToSite} />
        <LogosSection />
        <BottomList goToSite={goToSite} />
      </div>
    </Layout >
  )
}
