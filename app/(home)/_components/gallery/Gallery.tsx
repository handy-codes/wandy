import "./gallery.css"

const GalleryPage = () => {
    return ( 
      <div className="py-8">
         <div className="gallery-cover h-[50vh] p-2"> 
      <div className="levels ">
        <div className="flex flex-col" >
        <h2 className=" text-[16px] max-sm:ml-0">DANGLOBAL ATLANTIC PETROLEUM (NIG.) LTD</h2>
        <p className="deliver text-[18px] font-bold max-sm:ml-0 text-[#1DBF73]">DELIVERING</p>
        {/* <h1 className="font-bold deliver max-sm:ml-0">DELIVERING</h1> */}
        <h4 className=" text-[16px]">Products | Importation | Leasing | Exploration | Labor Services</h4>
        </div>
      </div>
      <div className="one p-0">
        <div className="two unit"><img src="https://media.istockphoto.com/id/1199749863/photo/retail-gasoline-station-and-convenience-store-reworked.jpg?b=1&s=612x612&w=0&k=20&c=IjBfbwGYFQDwB_CyruOQy4NJ-MjVq96YWnnu8b_jEGk=" alt=""/>
        </div>
        <div className="three unit"><img src="https://images.pexels.com/photos/6005876/pexels-photo-6005876.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/></div>
        <div className="four unit"><img src="https://media.istockphoto.com/id/155356841/photo/tanker-truck-on-a-highway.jpg?b=1&s=612x612&w=0&k=20&c=efmyl1gHQGFd38WPYxbDmkpxUCjAkcHpQQSysD47ZT4=" alt=""/></div>
        <div className="four unit"><img src="https://media.istockphoto.com/id/1199749863/photo/retail-gasoline-station-and-convenience-store-reworked.jpg?b=1&s=612x612&w=0&k=20&c=IjBfbwGYFQDwB_CyruOQy4NJ-MjVq96YWnnu8b_jEGk=" alt=""/></div>
        <div className="five unit"><img src="https://images.pexels.com/photos/327041/pexels-photo-327041.jpeg?auto=compress&cs=tinysrgb&w=600" alt="somethin"/></div>
        <div className="seven unit"><img src="https://images.pexels.com/photos/7932921/pexels-photo-7932921.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/></div>

      </div>
         </div>
      </div>
);
}
 
export default GalleryPage;

