import Image from "next/image";
import ParticlesContainer from "../../components/ParticlesContainer";
const Services = () => {
  return (
    <div className="min-h-screen bg-[#171717]">
      <p

        className="text-4xl text-[#f3004b] fancy text-center pt-5 pb-1 w-48 mx-auto border-b-4 border-[#f3004b]  border-double rounded-full mb-8 hover:bg-white ">Skills</p>
              {/* <ParticlesContainer></ParticlesContainer> */}

      <p className="text-white text-xl font-serif text-center mb-8">This are the technologies I have worked with</p>

      <div className="grid grid-cols-3 container mx-auto gap-6">
        {/* HTML */}
        <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-orange-500 hover:shadow-lg hover:shadow-red-600 flex flex-col items-center">
          <figure className="px-10 pt-10">
            <Image
              src={'/ht.png'} width={60} height={60}
              alt="html"
              className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">HTML</h2>
          </div>
        </div>
        {/* CSS */}
        <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-500 flex flex-col items-center hover:shadow-lg hover:shadow-red-600">
          <figure className="px-10 pt-10">
            <Image
              src={'/CS.png'} width={60} height={60}
              alt="css"
              className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">CSS</h2>
          </div>
        </div>
        {/* Botstarp */}

        <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-purple-500 flex flex-col items-center hover:shadow-lg hover:shadow-red-600">
          <figure className="px-10 pt-10">
            <Image
              src={'/boots.png'} width={60} height={60}
              alt="bootsstrap"
              className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Bootstrap</h2>
          </div>
        </div>
        {/* Tailwind */}
        <div class="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-sky-500 flex flex-col items-center hover:shadow-lg hover:shadow-red-600">
          <figure className="px-10 pt-10">
            <Image
              src={'/tailwind.png'} width={60} height={60}
              alt="tailwind"
              className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Tailwind</h2>
          </div>
        </div>

        {/* jAVA */}
        <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-yellow-500 flex flex-col items-center hover:shadow-lg hover:shadow-red-600">
          <figure className="px-10 pt-10">
            <Image
              src={'/JAVA.png'} width={60} height={60}
              alt="Shoes"
              className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">JavaScript</h2>
          </div>
        </div>
        {/* react */}
        <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-500 flex flex-col items-center hover:shadow-lg hover:shadow-red-600">
          <figure className="px-10 pt-10">
            <Image
              src={'/react.png'} width={60} height={60}
              alt="react"
              className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">React Js</h2>
          </div>
        </div>
        {/* node */}
        <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-lime-500 flex flex-col items-center hover:shadow-lg hover:shadow-red-600">
          <figure className="px-10 pt-10">
            <Image
              src={'/Node.png'} width={60} height={60}
              alt="Shoes"
              className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Node.JS</h2>
          </div>
        </div>
        {/* express */}
        <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-gray-500 flex flex-col items-center hover:shadow-lg hover:shadow-red-600">
          <figure className="px-10 pt-10">
            <Image
              src={'/ex.png'} width={60} height={60}
              alt="Shoes"
              className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Express.Js</h2>
          </div>
        </div>
        {/* mongodb */}
        <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-green-500 flex flex-col items-center hover:shadow-lg hover:shadow-red-600">
          <figure className="px-10 pt-10">
            <Image
              src={'/mongo.png'} width={60} height={60}
              alt="Shoes"
              className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">MongoDB</h2>
          </div>
        </div>
        {/* github */}
        <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-gray-500 flex flex-col items-center hover:shadow-lg hover:shadow-red-600">
          <figure className="px-10 pt-10">
            <Image
              src={'/github.png'} width={60} height={60}
              alt="github"
              className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">GitHub</h2>
          </div>
        </div>
        {/* firebase */}
        <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-orange-500 flex flex-col items-center hover:shadow-lg hover:shadow-red-600">
          <figure className="px-10 pt-10">
            <Image
              src={'/firebase.png'} width={60} height={60}
              alt="firebase"
              className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Firebase</h2>
          </div>
        </div>
        {/* figma */}
        <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-red-500 flex flex-col items-center hover:shadow-lg hover:shadow-red-600">
          <figure className="px-10 pt-10">
            <Image
              src={'/figma.png'} width={60} height={60}
              alt="figma"
              className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Figma</h2>
          </div>
        </div>

      </div>
    </div>


  )


};

export default Services;
