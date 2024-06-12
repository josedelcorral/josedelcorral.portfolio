import React from "react";
import config from "./index.json";

const Hero = () => {
  const hero = config.hero;

  return (

  <body className='text-black'>
    <section className="h-screen bg-white overflow-x-hidden">
      <div className="px-8 lg:px-32 flex flex-col justify-center align-between">
        <h1 className="text-6xl mt-64 font-bold">
          Hi, I'm  
          <span className="ml-3 whitespace-nowrap bg-gradient-to-r from-red-600 via-black-600 to-blue-600 bg-clip-text text-transparent">
            {hero.name}
          </span>
        </h1>
        <h2 className="text-4xl font-bold mt-2">{hero.subtitle}</h2>
        
        <span className="pt-5 bg-white inline-block">
          
        <a href="https://www.linkedin.com/in/josedelcorral/" className="text-xl py-0.5 pr-2 font-semibold bg-white font-bold bg-gradient-to-r from-red-400 via-black-500 to-blue-500 bg-clip-text text-transparent">Linkedin</a>     
        <a href="https://github.com/josedelcorral" className="text-xl py-0.5 px-2 font-semibold bg-white font-bold bg-gradient-to-r from-red-400 via-black-500 to-blue-500 bg-clip-text text-transparent">Github</a>     
        <a href="https://twitter.com/j0se" className="text-xl py-0.5 px-2 font-semibold bg-white font-bold bg-gradient-to-r from-red-400 via-black-500 to-blue-500 bg-clip-text text-transparent">X</a>
        <a href="mailto:jose@josedelcorral.com" className="text-xl py-0.5 px-2 font-semibold bg-white font-bold bg-gradient-to-r from-red-400 via-black-500 to-blue-500 bg-clip-text text-transparent">Contact</a></span>

      </div>
    </section>
  </body>
  );
};

export default Hero;