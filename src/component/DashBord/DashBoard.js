import React from 'react';
import FirstChart from '../Chart/FirstChart';
import FourthChart from '../Chart/FourthChart';
import SecondChart from '../Chart/SecondChart';
import ThirdChart from '../Chart/ThirdChart';
import './DashBoard.css'
const DashBoard = () => {
    return (
        <div>
         <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">Using Four Categories Chart</h1>
  
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/2">
      <h2 className="title-font font-medium text-lg text-gray-900">ComposedChart</h2>
         
         
    <FirstChart/>

      </div>
      <div className="p-4 lg:w-1/2">
      <h2 className="title-font font-medium text-lg text-gray-900">PieChart</h2>
   <SecondChart/>

      </div>
      <div className="p-4 lg:w-1/2">
      <h2 className="title-font font-medium text-lg text-gray-900">LineChart</h2>
      <ThirdChart/>

      </div>
      <div className="p-4 lg:w-1/2">
      <h2 className="title-font font-medium text-lg text-gray-900">BarChart</h2>
      <FourthChart/>

      </div>
    </div>
  </div>
</section>
        </div>
    );
};

export default DashBoard;