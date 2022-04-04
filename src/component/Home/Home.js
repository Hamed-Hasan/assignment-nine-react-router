import React from 'react';
import hero from '../../assest/image/hero.png'
import CustomersReviews from '../CustomersReviews/CustomersReviews';
const Home = () => {
    return (
        <section className="text-gray-600 body-font">
        <div className=" mx-auto flex px-20 pt-20 lg:pt-0  md:flex-row flex-col items-center bg-slate-600">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              <p className="text-4xl lg:text-8xl text-sky-300">Don't Miss Amazing  </p>
              <p>Shopping Deals</p>
            </div>
            <p className="mb-8 leading-relaxed text-white text-xl">We're continually pushing to reduce our footprint by choosing recycled or natural fibers and non-toxic dye proceeding</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-14 focus:outline-none hover:bg-indigo-600 rounded text-lg ">Buy Now</button>
              
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded w-full" alt="hero" src={hero}/>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#475569" fillOpacity="1" d="M0,192L34.3,197.3C68.6,203,137,213,206,229.3C274.3,245,343,267,411,266.7C480,267,549,245,617,218.7C685.7,192,754,160,823,165.3C891.4,171,960,213,1029,197.3C1097.1,181,1166,107,1234,96C1302.9,85,1371,139,1406,165.3L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
</svg>

<div>
    <CustomersReviews/>
</div>

      </section>
    );
};

export default Home;