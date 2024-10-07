import Link from "next/link"

const AboutPage = () => {
    return ( 
        <Link href={'/'}>
        <div className="h-[60vh] p-8"><h1 className="text-blue-600 text-2xl font-bold "><br /><span className="text-2xl text-black font-bold">Careers Page is Under Production.</span> Click Here to back to home page</h1>
            <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatem, neque assumenda alias modi sed soluta amet dolorem molestias fugit, cum aperiam id aliquid atque facilis temporibus reprehenderit rerum. Culpa dolore, magnam alias libero aspernatur, quasi perferendis repudiandae tempore illo ipsam quod temporibus, velit incidunt enim quidem! Dignissimos, expedita error.</p>
        </div>
        </Link>
     );
}
 
export default AboutPage;