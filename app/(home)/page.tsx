import Link from "next/link";
import Slider from "@/app/(home)/_components/slider/Slider";
import Testimonials from "@/app/(home)/_components/Testimonials";
import GalleryPage from "./_components/gallery/Gallery";
import Intro from "./_components/Intro";
import BackgroundImg from "./_components/backgroundimg/BackgroundImg";


export default function Home() {
  return (
    <main>
      <Slider/>
      <Intro/>
      <GalleryPage/>
      <BackgroundImg/>
      {/* <Testimonials/> */}
    </main>
  );
}
