import Header from "./Header";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
function Home(){
    const slides = [
        "photos/covers/cover.jpeg",
        "photos/covers/cover1.jpg",
        "photos/covers/puddle_cv.jpg",
        "photos/covers/ystrainer_cv.jpg",
        "photos/covers/vortex_plate_cv.jpg",
        "photos/covers/vortex_cv.jpg",
        "photos/covers/vessel_cv.jpg",
        "photos/covers/spool_cv.jpg",
        "photos/covers/ystrainer1_cv.jpg",
        "photos/covers/strum_cv.jpg",
        "photos/covers/antivortex_cv.jpg",
        "photos/covers/conical_cv.jpg"
    ];
    const [index, setIndex] = useState(0);
    const loopSlides = [...slides, slides[0]];
    useEffect(() => {
        document.title = "Home";
    }, []);
    useEffect(() => {
        const interval = setInterval(() => {
          setIndex(prev => {
            if (prev === slides.length) {
              return 0;
            }
            return prev + 1;
          });
        }, 6000);
        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        if (index === 0) {
            const slider = document.getElementById("carousel-track");
            if (slider) {
            slider.style.transition = "none";
            
            setTimeout(() => {
                slider.style.transform = `translateX(0%)`;
                slider.style.transition = "transform 1200ms ease-in-out";
            },50);
            }
        }
    }, [index]);
    return(
        <>
        <Header />
        <main className="pt-32 md:pt-36 lg:pt-40">
            <div className="flex relative  min-h-[50rem] w-full">
                <div className="absolute flex flex-col z-0 top-[10rem] md:top-32 items-start justify-center bg-orange-500 h-[40rem] mx-5 lg:justify-around">
                    <h1 className="font-sans text-5xl font-bold text-wrap text-white px-3 md:w-[50%]">Quality You Can Trust. Precision You Can See.</h1>
                    <p className="text-1xl text-start text-white p-5 lg:w-[40%]">
                        For Over 30 Years, We’ve Engineered Excellence. Delivering World-Class Industrial Fabrications Including Puddle Flanges, Vortex Inhibitors, Strainers, Pressure Vessels, Pipe Bends, and Custom Engineered Components.
                    </p>
                    <div className="group">
                        <NavLink to="/products" className="bg-white text-orange-500 font-mono font-bold px-5 py-3 mx-5 my-5 group-hover:bg-black border-orange-400 transition">Explore Products</NavLink>
                    </div>
                    
                </div>
                <div className="absolute right-0 md:w-[60%] w-[80%] lg:h-[40rem] md:h-[25rem] h-[18rem] overflow-hidden">
                    <div
                        id="carousel-track"
                        className="flex h-full transition-transform duration-[1200ms] ease-in-out"
                        style={{ transform: `translateX(-${index * 100}%)` }}
                    >
                        {loopSlides.map((src, i) => (
                          <img
                            key={i}
                            src={src}
                            className="w-full flex-shrink-0 h-full object-cover grayscale-[70%]"
                          />
                        ))}
                    </div>
                </div>
                {/* <img src="cover1.jpeg" className="absolute grayscale right-0 md:w-[60%] w-[80%]"/> */}
            </div>
            <div className="min-h-[60rem]">
                <h2 className="text-3xl font-mono font-bold text-center my-10">CORE PRODUCTS</h2>
                <div className="grid grid-flows-row md:grid-cols-3 grid-cols-2 gap-5 md:gap-10 justify-center items-center mx-10 my-10">
                    <NavLink to="/products/vortex-inhibitor">
                    <div className="group relative overflow-hidden h-[18rem] md:h-[22rem] lg:h-[26rem]" >
                        <img src="photos/image_bgs/bg1.png" className="w-[22rem] absolute inset-0 m-auto max-w-full object-contain"/>
                        <h1 className="hidden group-hover:flex absolute inset-0 z-10 items-center justify-center px-5 py-2 text-center font-bold text-1xl md:texl-2xl lg:text-3xl font-mono">
                            <span className="bg-white">Vortex Inhibitor</span>
                        </h1>
                        <img
                          src="/photos/product_images/vortex-clear.png"
                          className="absolute inset-0 m-auto w-[10rem] md:w-[13rem] lg:w-[15rem] max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                    </div>
                    </NavLink>
                    <NavLink to="/products/puddle-flange">
                        <div className="group relative overflow-hidden h-[18rem] md:h-[22rem] lg:h-[26rem]">
                            <img src="photos/image_bgs/bg2.png" className="w-[22rem] absolute inset-0 m-auto max-w-full object-contain"/>
                            <div className="hidden group-hover:flex absolute inset-0 z-10 items-center justify-center px-5 py-2 text-center font-bold text-1xl md:texl-2xl lg:text-3xl font-mono">
                                <span className="bg-white">Puddle Flanges</span>
                            </div>
                            <img
                            src="/photos/product_images/puddle.png"
                            className="absolute inset-0 m-auto w-[10rem] md:w-[13rem] lg:w-[15rem] max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                    </NavLink>
                    <NavLink to="/products/anti-vortex-plate">
                    <div className="group relative overflow-hidden h-[18rem] md:h-[22rem] lg:h-[26rem]">
                        <img src="photos/image_bgs/bg3.png" className="w-[22rem] absolute inset-0 m-auto max-w-full object-contain"/>
                        <div className="hidden group-hover:flex absolute inset-0 z-10 items-center justify-center px-5 py-2 text-center font-bold text-1xl md:texl-2xl lg:text-3xl font-mono">
                            <span className="bg-white">Anti Vortex Plate</span>
                        </div>
                        <img
                          src="/photos/product_images/vortex-plate-clear.png"
                          className="absolute inset-0 m-auto w-[10rem] md:w-[13rem] lg:w-[15rem] max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                    </div>
                    </NavLink>
                    <NavLink to="/products/pressure-vessels">
                    <div className=" group relative overflow-hidden h-[18rem] md:h-[22rem] lg:h-[26rem] ">
                        <img src="photos/image_bgs/bg4.png" className="w-[22rem] absolute inset-0 m-auto max-w-full object-contain"/>
                        <h1 className="hidden group-hover:flex absolute inset-0 z-10 items-center justify-center px-5 py-2 text-center font-bold text-1xl md:texl-2xl lg:text-3xl font-mono">
                            <span className="bg-white">Pressure Vessels / Tanks</span>
                        </h1>
                        <img
                          src="/photos/product_images/vessel.png"
                          className="absolute inset-0 m-auto w-[10rem] md:w-[13rem] lg:w-[25rem] max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                    </div>
                    </NavLink>
                    <NavLink to="/products/filters">
                    <div className="group relative overflow-hidden h-[18rem] md:h-[22rem] lg:h-[26rem]">
                        <img src="photos/image_bgs/bg5.png" className="w-[22rem] absolute inset-0 m-auto max-w-full object-contain"/>
                        <div className="hidden group-hover:flex absolute inset-0 z-10 items-center justify-center px-5 py-2 text-center font-bold text-1xl md:texl-2xl lg:text-3xl font-mono">
                            <span className="bg-white">Filters</span>
                        </div>
                        <img
                          src="/photos/product_images/filter.png"
                          className="absolute inset-0 m-auto w-[11rem] md:w-[15rem] lg:w-[17rem] max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                    </div>
                    </NavLink>
                    <NavLink to="/products/pipe-bending-services">
                    <div className="group relative overflow-hidden h-[18rem] md:h-[22rem] lg:h-[26rem]">
                        <img src="photos/image_bgs/bg6.png" className="w-[22rem] absolute inset-0 m-auto max-w-full object-contain"/>
                        <div className="hidden group-hover:flex absolute inset-0 z-10 items-center justify-center px-5 py-2 text-center font-bold text-1xl md:texl-2xl lg:text-3xl font-mono">
                            <span className="bg-white">Pipe Bending</span>
                        </div>
                        <img
                          src="/photos/product_images/pipebends.png"
                          className="absolute inset-0 m-auto w-[10rem] md:w-[13rem] lg:w-[15rem] max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                    </div>
                    </NavLink>
                </div>
            </div>


            <div className="min-h-[30rem]">

                <h2 className="text-3xl font-mono font-bold text-center my-20">CERTIFICATIONS</h2>
                <div className="flex flex-wrap justify-center items-center w-full">
                    <img src="/photos/certifications/zed-bronze.png" className="mx-5 my-5 w-[15rem] h-[15rem] drop-shadow-2xl border-2"/>
                    <a href="https://www.indiamart.com/devaengineeringworks-chennai/"><img src="/photos/certifications/trustseal.png" className="mx-5 my-5  h-[15rem] drop-shadow-2xl border-2 bg-white"/></a>
                </div>

            </div>
        </main>
        <Footer />
        </>
    )   
}

export default Home;