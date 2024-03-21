import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegCommentAlt } from "react-icons/fa";
import { GoShareAndroid } from "react-icons/go";

export const Forum = () => {
  return (
    <section className="shadow-lg shadow-gray-400 w-[700px] h-[120px] mt-10 ml-[200px]">
        <div className="mt-2 relative  "> <img src="../avatar2.jpg" alt="avatar"  className="w-10 rounded"/> 
        <p className="absolute left-[50px] bottom-[5px] font-semibold">Lorem Ipsum</p> 
        <button className="bg-blue-500 w-[100px]  absolute left-[160px] bottom-[5px] rounded-lg"><p className="text-white">Sector 2</p></button>
        <p className="absolute left-[280px] bottom-[5px] text-blue-600 text-sm">2 min ago</p>
        <p className="absolute w-[430px]"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus saepe</p>
        <CiHeart  className="absolute top-[90px]"/> <p className="absolute top-[88px] left-6 text-sm font-semibold">2k</p>
        <IoEyeOutline className="absolute top-[90px] left-[80px]"/> <p className="absolute top-[88px] left-[110px] text-sm font-semibold">2k</p>
        <FaRegCommentAlt className="absolute top-[90px]  left-[180px]" />  <p className="absolute top-[88px] left-[200px] text-sm font-semibold">2k Comments</p>
        <GoShareAndroid className="absolute top-[90px]  left-[320px]" /> <p className="absolute top-[88px] left-[350px] text-sm font-semibold">Share</p>
        </div>
    </section>
  )
}
