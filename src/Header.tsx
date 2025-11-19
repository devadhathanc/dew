import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Dropdown from "./dropdown";

function Header() {
    const [scrollY, setScrollY] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
      <>
        <header className={`fixed w-full top-0 bg-white z-50 ${scrollY ? "shadow-md" : ""} transition-all duration-700`}>
            <div className="flex flex-row justify-between items-center pr-2">
                {/* LOGO */}
                <div className="flex flex-row items-center justify-start">
                    <img
                        src="/logo.svg"
                        alt="Logo"
                        className={`${scrollY ? "lg:h-[4rem] md:h-[3rem] h-[2rem]": "lg:h-[6rem] md:h-[4rem] h-[3rem]"} transition-all duration-700`}
                    />
                    <h1 className={`font-copper text-start text-1xl md:text-1xl lg:text-1xl w-[50%] text-wrap ${scrollY ?  "hidden": ""}`}>DEVA ENGINEERING WORKS</h1>
                </div>
                

                {/* DESKTOP NAV */}
                <ul className="hidden lg:flex space-x-7 font-mono tracking-widest">
                    {["HOME", "GALLERY", "PRODUCTS", "ABOUT", "CONTACT"].map((item) => (
                        <li key={item} className="relative group px-2">
                            <NavLink
                                to={item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`}
                                className={({ isActive }) =>
                                    isActive ? "relative pb-1 border-y-2 border-orange-400" : "group relative pb-1"
                                }
                            >
                                {item}
                                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-[130%] h-[45%] bg-orange-300 -z-10 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* HAMBURGER (mobile only) */}
                <button
                    className="lg:hidden relative w-10 h-10 p-2 ml-auto flex justify-center items-center"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >

                    <img
                        src="strainer.png"
                        className={`absolute transition-all duration-500 p-1
                            ${mobileOpen ? "rotate-180" : "rotate-0"}`}
                        alt="Menu"
                    />
                    {/* <img
                        src="close.png"
                        className={`absolute transition-all duration-500
                            ${mobileOpen ? "opacity-100 rotate-90" : "hidden -rotate-90"}`}
                        alt="Close"
                    /> */}
                </button>
            </div>
        </header>
        <Dropdown mobileOpen={mobileOpen} />
      </>
    );
}

export default Header;