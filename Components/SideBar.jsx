'use client'
import { IoPersonSharp } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";
import { TfiControlPlay } from "react-icons/tfi";
import { useState } from "react";
import { GoCommentDiscussion } from "react-icons/go";
import { AiOutlineDollar } from "react-icons/ai";


export const SideBar = () => {
   const [boolean,setBoolean]= useState(true);
  const [side,setSide] =useState(false);
   const setValue = ()=>
   {
    setBoolean(false);
   }
   const setValue1 = ()=>
   {
      setSide(true);
   }
   console.log(boolean);
  return (
    <section  className="relative">
        {boolean && (
           <button className="bg-blue-500 w-[30px] h-[120px] absolute bottom-[1500px]" onClick={()=>{setValue();setValue1()}}><TfiControlPlay  color="white"/>
           </button>
        )}
        {
          side && (
            <div className="relative bg-red-400">
            <IoPersonSharp className="absolute bottom-[1845px]" />
            <p  className="absolute bottom-[1840px] left-[30px]" >Hello,User</p>
            <CiBellOn className="absolute bottom-[1840px] left-[120px]" />
            <GoCommentDiscussion  className="absolute bottom-[1820px]" /> 
            <p  className="absolute bottom-[1815px] left-[25px]" >Discussion Fourm</p>
            <AiOutlineDollar className="absolute bottom-[1800px]" />
             <p className="absolute bottom-[1795px] left-6" >Market Stories</p>
            <p className="absolute bottom-[1775px] ">Sentiment</p>
            <p className="absolute bottom-[1755px] ">Market</p>
            <p className="absolute bottom-[1735px] ">Sector</p>
            <p className="absolutebottom-[1730px] ">Watchlist</p>
            <p className="absolute bottom-[1720px] ">Events</p>
            <p className="absolute bottom-[1705px]">News/Interview</p>
            </div>
          )
        }
    </section>
  )
}
