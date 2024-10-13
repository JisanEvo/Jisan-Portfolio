import React from 'react';
import Image from 'next/image';
const index = () => {
  return (
    <div className="bg-black min-h-screen"  >
      <div className="lg:mx-16 mx-5 ">
        <div
         className='flex gap-14 py-14'
        >
          <div className=" lg:w-[50%]">
            <div className="flex items-center">


            </div>
            <h2 className="text-4xl">Building Mangement System</h2>
            <p className="text-xl font-light">

            </p>
            <div>
              <h2 className="text-xl font-semibold text-[#f3004b] fancy mb-3">
                Uses Technology :
              </h2>
              <div className="flex gap-3 flex-wrap">
                <p className="bg-[#383838] py-1 px-6 rounded-full">HTML</p>
                <p className="bg-[#383838] py-1 px-6 rounded-full">CSS</p>
                <p className="bg-[#383838] py-1 px-6 rounded-full">Tailwind</p>
                <p className="bg-[#383838] py-1 px-6 rounded-full">
                  JavaScript
                </p>
                <p className="bg-[#383838] py-1 px-6 rounded-full">React. JS</p>
                <p className="bg-[#383838] py-1 px-6 rounded-full">Node. JS</p>
                <p className="bg-[#383838] py-1 px-6 rounded-full">
                  Express. Js
                </p>
                <p className="bg-[#383838] py-1 px-6 rounded-full">MongoDB</p>
              </div>
            </div>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/JisanEvo/Building-Management-Client"
            >
              <button className="lg:px-4 lg:py-1 px-3 py-1 mt-2 rounded-lg text-xl transition ease-in-out delay-150 bg-[#f3004b] hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#f3004b] duration-300">
                Clint Site
              </button>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/JisanEvo/Building-Management-Server"
            >
              <button className="lg:px-4 lg:py-1 px-3 py-1 mt-2 rounded-lg text-xl transition ease-in-out delay-150 bg-[#f3004b] hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#f3004b] duration-300 mx-2">
                Server Site
              </button>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://heaven-259e7.web.app/"
            >
              <button className="lg:px-4 lg:py-1 px-3 py-1 mt-2 rounded-lg text-xl transition ease-in-out delay-150 bg-[#f3004b] hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#f3004b] duration-300">
                Live Site
              </button>
            </a>
          </div>
          {/* <div className="lg:w-[30%] relative">
            <div className="w-full h-[300px] lg:h-[400px] overflow-hidden img-container ">
              <a
                href="https://fastidious-puppy-c88c07.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <Image width={100} height={100}
                  className="block w-full h-full object-cover object-top rounded hover:object-bottom transition-all duration-1000"
                  src={'/p1.png'}
                  alt=""
                />
              </a>
            </div>
          </div> */}
          <figure className="lg:w-[30%] relative w-full h-[300px] lg:h-[400px] overflow-hidden img-container">
            < Image
              src={'/p2.png'} width={200} height={200}
              alt="Shoes" />
          </figure>
        </div>
      </div>

{/* project2 */}

<div className="lg:mx-16 mx-5 ">
        <div
        className='flex gap-14 py-'
        >
          <div className=" lg:w-[50%]">
            <div className="flex items-center">

            </div>
            <h2 className="text-4xl">Food Donate Website </h2>

            <div>
              <h2 className="text-xl font-semibold text-[#f3004b] fancy mb-3">
                Uses Technology :
              </h2>
              <div className="flex gap-3 flex-wrap">
                <p className="bg-[#383838] py-1 px-6 rounded-full">HTML</p>
                <p className="bg-[#383838] py-1 px-6 rounded-full">CSS</p>
                <p className="bg-[#383838] py-1 px-6 rounded-full">Tailwind</p>
                <p className="bg-[#383838] py-1 px-6 rounded-full">
                  JavaScript
                </p>
                <p className="bg-[#383838] py-1 px-6 rounded-full">React. JS</p>
                <p className="bg-[#383838] py-1 px-6 rounded-full">Node. JS</p>
                <p className="bg-[#383838] py-1 px-6 rounded-full">
                  Express. Js
                </p>
                <p className="bg-[#383838] py-1 px-6 rounded-full">MongoDB</p>
              </div>
            </div>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/JisanEvo/Food-Donate-Client"
            >
              <button className="lg:px-4 lg:py-1 px-3 py-1 mt-2 rounded-lg text-xl transition ease-in-out delay-150 bg-[#f3004b] hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#f3004b] duration-300">
                Clint Site
              </button>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/JisanEvo/Food-Donate-Server"
            >
              <button className="lg:px-4 lg:py-1 px-3 py-1 mt-2 rounded-lg text-xl transition ease-in-out delay-150 bg-[#f3004b] hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#f3004b] duration-300 mx-2">
                Server Site
              </button>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://food-donate-44a06.web.app/"
            >
              <button className="lg:px-4 lg:py-1 px-3 py-1 mt-2 rounded-lg text-xl transition ease-in-out delay-150 bg-[#f3004b] hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#f3004b] duration-300">
                Live Site
              </button>
            </a>
          </div>
          {/* <div className="lg:w-[30%] relative">
            <div className="w-full h-[300px] lg:h-[400px] overflow-hidden img-container ">
              <a
                href="https://fastidious-puppy-c88c07.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <Image width={100} height={100}
                  className="block w-full h-full object-cover object-top rounded hover:object-bottom transition-all duration-1000"
                  src={'/p1.png'}
                  alt=""
                />
              </a>
            </div>
          </div> */}
          <figure className="lg:w-[30%] relative w-full h-[300px] lg:h-[400px] overflow-hidden img-container">
            < Image
              src={'/p1.png'} width={200} height={200}
              alt="Shoes" />
          </figure>
        </div>
      </div>

    </div>
  );
};

export default index;
