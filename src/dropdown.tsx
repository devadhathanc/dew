import { NavLink } from "react-router-dom";

function Dropdown({ mobileOpen }: { mobileOpen: boolean }) {
    return (
        <>
        <div className={`fixed right-0 flex justify-center items-center h-full w-[40%] md:hidden bg-white shadow-md pb-4 z-40
              transition-transform duration-500
              ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>
            <ul className="flex flex-col space-y-4 gap-4 text-center font-mono tracking-widest pt-4">
                {["HOME", "GALLERY", "PRODUCTS", "ABOUT", "CONTACT"].map((item) => (
                    <li key={item} className="relative group px-4">
                        <NavLink
                            to={item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`}
                            className={({ isActive }) =>
                                isActive
                                    ? "relative pb-1 border-y-2 border-orange-500"
                                    : "group relative pb-1"
                            }
                        >
                            {item}
                            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-[130%] h-[45%] bg-orange-300 -z-10 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}
export default Dropdown;