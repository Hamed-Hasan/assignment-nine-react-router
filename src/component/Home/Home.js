import React from 'react';
import { Link } from 'react-router-dom';

import hero from '../../assest/image/hero.png'
import CustomersReviews from '../CustomersReviews/CustomersReviews';
const Home = () => {

    return (
        <section className="text-gray-600 body-font">
        <div className=" mx-auto flex px-20  pt-40  md:flex-row flex-col items-center bg-slate-600">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              <p className="text-4xl lg:text-8xl text-sky-300">Don't Miss Amazing  </p>
              <p>Shopping Deals</p>
            </div>
            <p className="mb-8 leading-relaxed text-white text-xl">We're continually pushing to reduce our footprint by choosing recycled or natural fibers and non-toxic dye proceeding</p>
            <div className="flex justify-center">
             
              <button type="button" className="text-white bg-gradient-to-r flex from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-7 py-2.5 text-center mr-2 mb-2"> 
              <svg className="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg> Buy Now</button>
             
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

<div className='flex justify-center py-9'>
<Link to='/reviews' type="button" className="text-white flex bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2 "> See All Reviews <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
</Link> 
</div>
      </section>
    );
};

export default Home;