import React from 'react';
import { Link } from 'react-router-dom';
import './About'
const About = () => {
    return (
        <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Hi There's
              <br className="hidden lg:inline-block"/>
            </h1>
            <p className="mb-8 leading-relaxed">
I am Hamed Hasan. When I some Computing I agreed to learn Coding . It's Not easy but I Work hard when learning HTML CSS JavaScript and I fill proud happy but when start React Js its to complicated in other language . In this situation I trying to over come to my Weakness</p>
            <div className="flex justify-center">
            <Link to='/' type="button" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Back To Home
    <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
</Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="https://www.propatel.com/wp-content/uploads/2019/09/coding-and-testing-programming-of-software.jpg"/>
          </div>
        </div>
      </section>
    );
};

export default About;