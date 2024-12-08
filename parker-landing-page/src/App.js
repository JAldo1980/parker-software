import React from "react";
import TopNav from "./components/TopNav";
import ImageAside from "./components/ImageAside";
import FlexElements from "./components/FlexElements";
import CardsProduct from "./components/CardsProduct";
import BannerSmall from "./components/BannerSmall";
import GridCards from "./components/GridCards";
import Footer from "./components/Footer";
import FlexImages from "./components/FlexImages";
import { ProblemsData } from "./data/problems";
import { ClientData } from "./data/clients";

function App() {
  return (
    <div
      className="min-h-screen bg-gray-100 bg-no-repeat bg-right-top"
      style={{ backgroundImage: "url(/circle-background.png)" }}
    >
      <TopNav />
      <main className="container mx-auto px-4 py-6 sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px]">
        <ImageAside />
        <FlexElements data={ProblemsData} />
        <CardsProduct />
        <FlexImages data={ClientData} />
        <BannerSmall />
        <GridCards />
        <BannerSmall />
      </main>
      <Footer />
    </div>
  );
}

export default App;
