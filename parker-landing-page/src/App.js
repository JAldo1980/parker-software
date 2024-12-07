import React from "react";
import TopNav from "./components/TopNav";
import ImageAside from "./components/ImageAside";
import FlexElements from "./components/FlexElements";
import CardsProduct from "./components/CardsProduct";
import BannerSmall from "./components/BannerSmall";
import GridCards from "./components/GridCards";
import Footer from "./components/Footer";

import { ProblemsData } from "./data/problems";

function App() {
  return (
    <div
      className="min-h-screen bg-gray-100 bg-no-repeat bg-right-top"
      style={{ backgroundImage: "url('/hex-background.png')" }}
    >
      <main className="container mx-auto px-4 py-6 sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px]">
        <TopNav />
        <ImageAside />
        <FlexElements data={ProblemsData} />
        <CardsProduct />

        <BannerSmall />
        <GridCards />
        <BannerSmall />
        <Footer />
      </main>
    </div>
  );
}

export default App;
