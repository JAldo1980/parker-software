import "./App.css";
import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px]">
        <h1 className="text-3xl font-bold text-center">Welcome to My Site</h1>
        <section className="my-8">
          <p className="text-center">
            This is the content inside the main container. All components will
            be contained within this space.
          </p>
        </section>

        {/* Add more components here */}
      </main>
    </div>
  );
}
export default App;
