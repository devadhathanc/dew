import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Dropdown from "./dropdown";
import Logo from "/logo.png"
import Menu from "/strainer.png"

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
        <header className={`fixed w-full top-0 bg-white z-50 ${scrollY ? "border-b-[0.1rem] border-orange-400" : ""} transition-all duration-700`}>
            <div className="flex flex-row justify-between items-center pr-2 py-1">
                {/* LOGO */}
                <div className="flex flex-row items-center justify-start m-2 mx-5 gap-3">
                    <img
                        src={Logo}
                        alt="Logo"
                        className={`${scrollY ? "lg:h-[3rem] md:h-[2.5rem] h-[2rem]": "lg:h-[5rem] md:h-[3rem] h-[2.5rem]"} transition-all duration-700`}
                    />
                    <h1 className={`font-copper text-start text-1xl md:text-2xl lg:text-3xl text-wrap ${scrollY ?  "hidden": ""}`}>DEVA <br/> ENGINEERING WORKS</h1>
                </div>
                

                {/* DESKTOP NAV */}
                <ul className="hidden lg:flex space-x-7 font-mono tracking-widest">
                    {["HOME", "GALLERY", "PRODUCTS", "CONTACT", "ABOUT"].map((item) => (
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


                <button
                    className="lg:hidden relative w-10 h-10 p-2 ml-auto flex justify-center items-center"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >

                    <img
                        src={Menu}
                        className={`absolute transition-all duration-500 p-1
                            ${mobileOpen ? "rotate-180" : "rotate-0"}`}
                        alt="Menu"
                    />
                </button>
            </div>
        </header>
        <Dropdown mobileOpen={mobileOpen} />
      </>
    );
}

export default Header;