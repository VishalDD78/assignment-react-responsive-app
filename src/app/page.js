"use client"

import { useState } from "react";

import LeftNav from "@/components/left-nav";
import RightNav from "@/components/right-nav";
import MainContent from "@/components/main-content";


const Home = () => {

  const [isLeftNavOpen, setIsLeftNavOpen] = useState(false);
  const [isRightNavOpen, setIsRightNavOpen] = useState(false);

  const toggleRightNav = ()=>{
    setIsRightNavOpen(!isRightNavOpen)
  }

  const toggleLeftNav = ()=>{
    setIsLeftNavOpen(!isLeftNavOpen)
  }

  return (
    <main className="flex min-h-screen flex-col md:flex-row">
      <LeftNav isOpen={isLeftNavOpen} onClose={()=>setIsLeftNavOpen(false)}/>
      <MainContent toggleRightNav={toggleRightNav} toggleLeftNav={toggleLeftNav} isRightNavOpen={isRightNavOpen}/>
      <RightNav isOpen={isRightNavOpen} onClose={()=>setIsRightNavOpen(false)}/>
    </main>
  );
}

export default Home;