import { LuMenu } from "react-icons/lu";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Link from "next/link";
  

const Mobilenav = () => {
    return ( 
      
        <Sheet>
            <SheetTrigger asChild>
            <div className="sm:hidden">
                <LuMenu size={40} style={{color:'#E9B92F'}} />
                </div>
            </SheetTrigger>
            <SheetContent side="right" className="sm:hidden border-none bg-[#003B65] top[80px]" >
                <SheetHeader>
                <SheetDescription >
                <div className="flex flex-col items-center text-white text-lg mt-24 content-center  gap-12 uppercase ">
                    <Link href={'/'}>
                    <h1 className="">Home</h1>
                    </Link>
                    <Link href={'/about'}>
                    <h1>About</h1>
                    </Link>
                    <Link href={'/services'}>
                    <h1>Sevices</h1>
                    </Link>
                    <Link href={'/career'}>
                    <h1>Careers</h1>
                    </Link>
                </div>
                </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
     );
}
 
export default Mobilenav;



{/* <Sheet>
<SheetTrigger asChild>
  <Image
    src="/icons/hamburger.svg"
    width={36}
    height={36}
    alt="hamburger icon"
    className="cursor-pointer sm:hidden"
  />
</SheetTrigger>
<SheetContent side="left" className="border-none bg-dark-1">
  <Link href="/" className="flex items-center gap-1">
    <Image
      src="/icons/logo.svg"
      width={32}
      height={32}
      alt="xoom logo"
    />
    <p className="text-[26px] font-extrabold text-white">XOOM</p>
  </Link>
  <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
    <SheetClose asChild>
      <section className=" flex h-full flex-col gap-6 pt-16 text-white">
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route;

          return (
            <SheetClose asChild key={item.route}>
              <Link
                href={item.route}
                key={item.label}
                className={cn(
                  'flex gap-4 items-center p-4 rounded-lg w-full max-w-60',
                  {
                    'bg-blue-1': isActive,
                  }
                )}
              >
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  width={20}
                  height={20}
                />
                <p className="font-semibold">{item.label}</p>
              </Link>
            </SheetClose>
          );
        })}
      </section>
    </SheetClose>
  </div>
</SheetContent>
</Sheet> */}
