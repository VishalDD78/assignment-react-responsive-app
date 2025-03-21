"use client"

import { X } from "lucide-react";
import { Button } from "./ui/button";

const LeftNav = ({isOpen, onClose})=>{
    return(
        <>
        {isOpen && <div className="fixed insert-0 bg-black/20 z-40 md:hidden" onClick={onClose}/>}
        
        <div className={`fixed md:relative w-[80%] md:w-[15%] h-full bg-background border-r z-50 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
            <div className="p-4">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold">Navigation</h2>
                    <Button variant="ghost" size="icon" onClick={onClose} className="md:hidden">
                        <X className="h-5 w-5"/>
                    </Button>
                </div>

                <nav>
                    <a href="#" className="block p-2 hover:bg-muted roounded-md">
                        Home
                    </a>
                    <a href="#" className="block p-2 hover:bg-muted roounded-md">
                        Dashboard
                    </a>
                    <a href="#" className="block p-2 hover:bg-muted roounded-md">
                        About
                    </a>
                    <a href="#" className="block p-2 hover:bg-muted roounded-md">
                        Contact
                    </a>
                </nav>
            </div>
        </div>
        </>
    )
}

export default LeftNav;