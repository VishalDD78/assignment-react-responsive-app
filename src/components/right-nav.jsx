"use client"

import { X } from "lucide-react";
import { Button } from "./ui/button";

const RightNav = ({isOpen, onClose})=>{
    return(
        <>
            {isOpen && <div className="fixed inset-0 bg-black/20 z-40 md:hidden" onClick={onClose} aria-hidden="true"/>}

            <div className={`fixed md:relative right-0 top-0 h-full bg-background border-l z-50 transition-all duration-300 ease-in-out overflow-y-auto ${isOpen ? "w-[90%] sm:w-[60%] md:w-[15%] translate-x-0" : "w-0 translate-x-full md:w-0 md:translate-x-0"}`}>
                <div className={`flex p-4 ${!isOpen && "hidden md:hidden"}`}>
                    <h2 className="text-xl font-bold">Right Content</h2>
                    <Button variant="ghost" size="icon" onClick={onClose}>
                        <X className="h-5 w-5"/>
                    </Button>
                </div>

                <div className="space-y-4">
                    <div className="p-3 rounded-md">
                        <h3>Information</h3>
                        <p className="text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet veniam, est distinctio error consectetur necessitatibus facilis laboriosam esse ut dignissimos repellendus rem minima officia adipisci incidunt doloribus magnam nesciunt perferendis?</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RightNav;