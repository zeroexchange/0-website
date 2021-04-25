import "./styles.scss";

import BottomList from "./components/BottomList";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Layout from "../../layout/MainLayout";

export default function Home() {
  const goToSite = (str) => {
    window.open(str, "_blank");
  };

  return (
    <Layout hasSnow={true}>
      <div className="container">
        <Hero goToSite={goToSite} />
        <BottomList goToSite={goToSite} />
      </div>
      <Carousel />
      <Footer />
    </Layout>
  );
}
