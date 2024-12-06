import React from "react";
import TopNav from "./components/TopNav";
import ImageAside from "./components/ImageAside";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-6 sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px] border-2 border-black">
        <TopNav />
        <ImageAside />
      </main>
    </div>
  );
}
export default App;
