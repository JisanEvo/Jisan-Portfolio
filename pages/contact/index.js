// import { FaPhoneSquareAlt, FaPhoneVolume } from "react-icons/fa";
// import { MdMarkEmailUnread } from "react-icons/md";
// import { FaLocationPinLock } from "react-icons/fa6";

// const Contact = () => {
//   return (
//     <div>
//       <section className="min-h-screen bg-cover" style={{ backgroundImage: "url('https://i.postimg.cc/CMNPgJ2c/f.gif')" }}>
//         <div className="flex flex-col min-h-screen bg-black/60">
//           <div className="container flex flex-col flex-1 px-6 py-12 mx-auto bg-primary/40">
//             <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
//               <div className="text-white lg:w-1/2 lg:mx-6">
//                 <h1 className="text-2xl font-bold capitalize lg:text-3xl">Hire <span className="text-accent "> Us</span> <span>,,,</span></h1>
//                 <p className="max-w-xl mt-6 text-white text-xl">
//                   Connect with us today! Your inquiries are important, and we aim to provide you with the best assistance. Drop us a message using the form below.


//                 </p>
//             <div className="">

//             <div className="mt-2 xl:mt-12">
//             <button className=" rounded-lg p-2 ml-24 text-white  hover:bg-accent transition-all duration-300">Quickly Access </button>
//             <div className="flex">   <MdMarkEmailUnread className="text-3xl text-white" />  <p className="text-xl ml-2 text-white">jesanmahmud6@gmail.com</p></div>
//                   <div className="flex mt-2">   <FaPhoneSquareAlt className="text-3xl text-white" />       <p className="text-xl ml-2 text-white">+8801303-552174</p></div>
//                   <div className="flex mt-2">
//                     <FaLocationPinLock className="text-3xl text-white" /> <p className="text-xl ml-2 text-white">Pabna , Bangladesh.</p>

//                   </div>

//                 </div>
//             </div>
//                 {/* <button className="px-8 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
//             get in touch
//           </button> */}
//                 <div className="mt-6 md:mt-8">

//                 </div>
//               </div>
//               <div className="mt-8 lg:w-1/2 lg:mx-6">
//                 <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
//                   <h1 className="text-xl font-medium text-gray-700 dark:text-gray-200">Contact form</h1>
//                   <p className="mt-2 text-gray-500 dark:text-gray-400">Ask us everything and we would love to hear from you</p>
//                   <form className="mt-6">
//                     <div className="flex-1">
//                       <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
//                       <input type="text" placeholder="Your Name" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-none focus:ring-red-500 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
//                     </div>
//                     <div className="flex-1 mt-6">
//                       <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
//                       <input type="email" placeholder="Please Enter Your Email" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-none  focus:ring-red-500 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
//                     </div>
//                     <div className="w-full mt-6">
//                       <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
//                       <textarea className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-none focus:ring-red-600 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" placeholder="Message"></textarea>
//                     </div>
//                     <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:border-none focus:ring-opacity-50">
//                       send message
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>


//     </div>
//   )
// };

// export default Contact;


import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { FaFacebookSquare, FaWhatsappSquare } from 'react-icons/fa';
import toast from 'react-hot-toast';
import Socials from '../../components/Socials';
import Link from 'next/link';
import ParticlesContainer from '../../components/ParticlesContainer';
// import { Link } from 'react-router-dom';

const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tjpck49', 'template_0ijpvfb', form.current, 'y11XAK6fAtK_MPyA4')
            .then((result) => {

                if (result.status === 200) {
                    console.log(result.status)
                    toast('Message send successful.')
                }
                e.target.reset()

            }, (error) => {
                console.log(error.text);
            });

    };

    return (
      <div className='bg-[#171717] min-h-screen '>
                 {/* <ParticlesContainer></ParticlesContainer> */}

          <div className="py-20 bg-[#171717] min-h-screen px-7"  id="contact " >

        <h2 className="text-5xl text-[#f3004b] fancy text-center pt-5 pb-1 mx-auto">Contact Me</h2>
        <div className='flex justify-center items-center '>
        <Socials></Socials>
       </div>
        <div data-aos="fade-right" className="flex flex-col lg:flex-row justify-center  h-full my-20 aos-init aos-animate">
            <div className="text-white flex flex-col gap-5 lg:w-[30%]">
                <div className="bg-[#131313] text-center p-5 rounded text-lg w-3/4  mx-auto h-60  flex flex-col justify-center items-center">
                    {/* <a href="https://www.facebook.com/JisanEvo" className="inline-block text-4xl"><FaFacebookSquare /></a> */}
                    <h3>Resume Adding Soon</h3>

                </div>
                <div className="bg-[#131313] text-center p-5 rounded text-lg w-3/4  mx-auto h-60 flex flex-col justify-center items-center">
                    <p className="inline-block text-4xl">
                        <a href="https://wa.link/hh02xx" target="_blank" rel="noopener noreferrer">
                            <FaWhatsappSquare />
                        </a>
                    </p>
                    <a href="https://wa.link/hh02xx" target="_blank" rel="noopener noreferrer">
                        <h3>WhatsApp</h3>
                    </a>
                    <a href="https://wa.link/hh02xx" target="_blank" rel="noopener noreferrer">
                        <p>+8801303-552174</p>
                    </a>
                    <a href="https://wa.link/hh02xx" target="_blank" rel="noopener noreferrer">
                        <h3 className="text-[#f3004b] font-bold">send message</h3>
                    </a>
                </div>
            </div>
            <div className="lg:w-[60%] mt-10 lg:mt-0 aos-init aos-animate">
                <form ref={form} onSubmit={sendEmail} className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12'>
                    <input
                        className="p-3 text-xl bg-transparent border-2 rounded border-[#f3004b]"
                        type="text"
                        name="from_name"
                        placeholder="Enter your name"
                        required
                    />

                    <input
                        className="p-3 text-xl bg-transparent border-2 rounded border-[#f3004b]"
                        type="email"
                        name="from_email"
                        placeholder="Enter your email"
                        required
                    />

                    <input
                        className='sm:col-span-2 w-full px-6 py-[18px] p-3 text-xl bg-transparent border-2 rounded border-[#f3004b]'
                        type="text"
                        name="subject"
                        placeholder="Type your subject"
                        required
                    />

                    <textarea
                        className='sm:col-span-2 w-full p-3 text-xl bg-transparent border-2 rounded border-[#f3004b]'
                        name="message"
                        rows="6"
                        placeholder='Write your message'></textarea>

                  <button type='submit' className='text-dark hover:text-white px-5 py-[18px]  border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20 w-full inline-block sm:col-span-2 text-xl bg-transparent border-2 rounded border-[#f3004b]'>Send message</button>
                </form>
            </div>
        </div>
    </div>
      </div>
    );
};

export default Contact;