"use client"

import { Menu } from "lucide-react";
import { Button } from "./ui/button";

const MainContent = ({toggleRightNav, toggleLeftNav, isRightNavOpen})=>{
    return(
        <div className={`flex-1 transition-all duration-300 ease-in-out ${isRightNavOpen ? "md:w-[70%]" : "md:w-[85%]"}`}>
            <div className="p-4 md:p-6">
                <div className="flex space-x-3 mb-6 md:hidden">
                    <Button variant="outline" size="icon" onClick={toggleLeftNav}>
                        <Menu className="h-5 w-5"/>
                    </Button>
                    <h1 className="text-xl font-bold">Responsive-App</h1>
                </div>
                
                <div className="hidden md:block mb-6">
                    <h1 className="text-3xl font-bold">Responsive-App</h1>
                </div>

                <div className="space-y-6">  
                    <h2 className="text-2xl font-semibold text-center">Welcome to Dashboard</h2>
                    <p className="text-muted-foreground">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ut culpa nostrum eveniet odit? Distinctio harum atque blanditiis illo perferendis, quo maxime vel ullam incidunt, deserunt voluptates repellendus laborum? Eum.
                    </p>
                </div>

                <div>
                    <Button onClick={toggleRightNav} className="bg-amber-300 float-end">
                        {isRightNavOpen ? <span className="text-black">Hide Right Content</span> : <span className="text-black">View Right Content</span>}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default MainContent;