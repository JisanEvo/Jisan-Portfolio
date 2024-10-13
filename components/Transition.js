// framer motion
import {animate, section,motion} from 'framer-motion'
// variants
const transitionsVariants={
  initial:{
    x: '100%',
    width:'100%'

  },
  animate:{
    x:'0%',
    width:'0%'
  },
  exit:{
    x:['0%','100%',],
    width:['0%','100%',]
  }
}

 const Transition = () => {
  return (
    <>
      <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#f1f1f2]' variants={transitionsVariants} initial="initial" animate='animate' exit='exit' transition={{delay:0.2,duration:0.6,ease:'easeInOut'}}> </motion.div>
      <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#f2f2f2]' variants={transitionsVariants} initial="initial" animate='animate' exit='exit' transition={{delay:0.4,duration:0.6,ease:'easeInOut'}}></motion.div>
      <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#e3e2e4]' variants={transitionsVariants} initial="initial" animate='animate' exit='exit' transition={{delay:0.6,duration:0.6,ease:'easeInOut'}}></motion.div>

    </>
  );
};

export default Transition;
