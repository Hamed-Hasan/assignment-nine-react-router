import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    return (
        <div>
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    <p className='pb-11'>
    Designing 404 pages might not be your first priority when you're creating a new website, and with a bit of luck your users won't often encounter them when browsing. But a stellar 404 page can be an effective tool for conveying your brand identity, entertaining visitors and keeping them on your site rather than clicking away in annoyance. Of course, you don't actually want visitors to find themselves there at all but adding some personality and clever design can add a silver lining to an error.
    </p>
    <Link to='/' type="button" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Back To Home
    <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
</Link>
      
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="https://webdeasy.de/wp-content/uploads/2020/06/404-pages.jpg"/>
    </div>
  </div>
</section>
        </div>
    );
};

export default NotFound;