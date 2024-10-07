import NavbarPage from "./_components/Navbar";
import FooterPage from "./_components/Footer";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <NavbarPage/>
      <div className="">{children}</div>
      <FooterPage/>
 </div>
  );
}