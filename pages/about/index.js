import React, { useState } from 'react'


// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key='html'/>,
          <FaCss3 key='css' />,
          <FaJs key='js'/>,
          <FaReact key='react'/>,
          // <SiNextdotjs />,
          <SiNodedotjs key='node'></SiNodedotjs>,
          <SiExpress key='express'/>,
          <SiMongodb key='mongodb'/>,
        ],
      },
      // {
      //   title: 'UI/UX Design',
      //   icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      // },
    ],
  },
  {
    title: 'education',
    info: [
      {
        title: 'Honours(running)',
        stage:  'I am currently studying my Honours,',
      },
      {
        title: 'HSC (2021)',
        stage:  'I successfully completed my Higher Secondary Certificate (HSC)',
      },
      {
        title: 'SSC (2019)',
        stage:  'I completed my Secondary School Certificate with G.P.A-5.00',

      },
    ],
  },
  {
    title: 'experience',
    info: [


      {
       title: 'Proficiency',
       stage:'Front-End Developer (2023) During this time, I focused on creating responsive and visually appealing user interfaces, ensuring a seamless user experience by utilizing my expertise in HTML, CSS, JavaScript, and React frameworks.',
      },
    ],
  },
  // {
  //   title: 'credentials',
  //   info: [
  //     {
  //       title: 'Web Development - ABC University, LA, CA',
  //       stage: '2011',
  //     },
  //     {
  //       title: 'Computer Science Diploma - AV Technical Institute',
  //       stage: '2009',
  //     },
  //     {
  //       title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
  //       stage: '2006',
  //     },
  //   ],
  // },
];

import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0)
  return <div className='h-full bg-black py-32 text-center xl:text-left'>
    <Circles></Circles>
    {/* avatar img */}
    <motion.div
     variants={fadeIn('right', 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className='hidden xl:flex absolute bottom-0 -left-[50px] '>
      <Avatar></Avatar>
    </motion.div>
    <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
      {/* text  */}
      <div className='flex-1 flex flex-col justify-center'>

        {/* <motion.h2
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className='h2'>  Captivating <span className='text-accent'>stories</span> birth magnificent design.</motion.h2> */}
          <motion.p
          variants={fadeIn('right', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-white font-sans'>
          My name is <span className='text-accent font-serif text-xl'>Jisan Mahmud</span> , I am junior MERN Stack web developer. I am from Pabna, Dhaka, Bangladesh. Currently I am completing undergraduate.
          My goal is to create websites and applications that are easy to use and helpful for users.

          I enjoy learning new things and always try to keep up with the latest web development trends. Over time, I have grown passionate about coding and believe that working hard is the key to success.

          I am now looking for an opportunity to start my career in web development and put my skills to good use.



        </motion.p>
        <motion.div
          variants={fadeIn('right', 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8 '>
          <div className='flex flex-1 xl:gap-x-6 mb-0 sm:mb-4'>
            {/* experience */}
            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2 '>
                <CountUp start={0} end={3} duration={5}> </CountUp>+
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'> Years of experience</div>
            </div>
            {/* clients */}
            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2 '>
                <CountUp start={0} end={120} duration={5}> </CountUp>+
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] font-sans'> Satisfied Clients</div>
            </div>
            {/* projects */}
            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2 '>
                <CountUp start={0} end={500} duration={5}> </CountUp>+
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] font-sans'> Project Completed</div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* info  */}
      <div className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
        <motion.div
         variants={fadeIn('left', 0.8)}
         initial="hidden"
         animate="show"
         exit="hidden"
        className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 font-sans'>
          {aboutData.map((item, itemIndex) => {
            return <div key={itemIndex}
              className={`cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white   mt-4  after:absolute after:-bottom-1 after:left-0 ${index === itemIndex ? 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300' : ''
                }`}
              onClick={() => setIndex(itemIndex)}
            >
              {item.title}
            </div>
          })}
        </motion.div>

        <motion.div
         variants={fadeIn('left', 0.10)}
         initial="hidden"
         animate="show"
         exit="hidden"

        className=' py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center  xl:items-start'>
          {aboutData[index].info?.map((item, itemIndex) => {
            return <div key={itemIndex} className='flex-1 flex flex-xol md:flex-row max-w-max gap-x- items-center text-white/60 '>
              {/* title */}
              <div className='font-light mb-2 md:mb-0 text-xl font-sora '>{item.title}</div>
              <div className='hidden md:flex'>-</div>
              <div className='text-white font-poppins'>{item.stage}</div>
              <div className='flex gap-x-4'>
                {/* icons  */}
                {item.icons?.map((icon, itemIndex) => {
                  return <div className='text-3xl text-white ' key={itemIndex}>{icon}</div>
                })}
              </div>
            </div>
          })}
        </motion.div>
      </div>

    </div>
  </div>;
};

export default About;
