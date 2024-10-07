import Image from "next/image";
import Link from "next/link";
import Mobilenav from "./Mobilenav";


const NavbarPage = () => {
  return ( 
 <header className="h-[80px] z-50 p-4 content-center text-white sticky top-0 bg-[#003B65]">
  <nav className="flex items-center content-center justify-between">
    <div className="flex content-center items-center gap-3 my-auto sm:gap-4">
    <Image className="rounded-full w-8 h-8 " src={'/danlogo2.png'} width={24} height={24} alt="navlog"/>
      <h1 className="text-xl sm:text-3xl font-bold">Danglobal Petroleum</h1>
    </div>
    <div className="hidden sm:flex items-center content-center gap-6 uppercase mr-14 ">
      <Link  href={'/'}>
         <h1 className="">Home</h1>
      </Link>
      <Link href={'/about'}>
         <h1>About</h1>
      </Link>
      <Link href={'/career'}>
         <h1>Careers</h1>
      </Link>
      <Link href={'/sign-in'}>
         <h1>Login</h1>
      </Link>
    </div>
    <Mobilenav/>    
   </nav>
 </header>
);
}
 
export default NavbarPage;