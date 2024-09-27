// next image
import Image from 'next/image';
// next link
import Link from 'next/link'
// components
import Social from '../components/Socials'
const Header = () => {
  return (
    <header className="absolute z-30 w-full  flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className='container mx-auto'>
        <div className='flex items-center justify-between'>
          {/* logo */}
          <div className='hidden sm:block mt-10'>
            <Link href={'/'}> <Image className='avatar ring-primary ring-offset-base-100 w-16 rounded-full ring ring-offset-2   ' src={'/jlogo.jpeg'} width={220} height={48} alt='' priority={true}></Image></Link>
          </div>
          {/* social */}
          <div className='' >
            <Social></Social>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
