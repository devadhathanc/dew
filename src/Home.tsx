import Header from "./Header";
import Footer from "./Footer";
function Home(){
    return(
        <>
        <Header />
        <main className="pt-32 md:pt-36 lg:pt-40">
            <div className="flex relative  min-h-[50rem] w-full">
                <div className="absolute flex flex-col z-0 top-[10rem] md:top-32 items-start justify-center bg-orange-500 h-[40rem] mx-5 md:justify-around">
                    <h1 className="font-sans text-5xl font-bold text-wrap text-white px-3 md:w-[50%]">Engineering Precision for Industrial Fabrications</h1>
                    <p className="text-1xl text-start text-white p-5 lg:w-[50%]">Manufacturers of Puddle Flanges, Vortex Inhibitors, Industrial Strainers, Vessel Tanks & Fabricated Components.</p>
                    <div className="group">
                        <a href="./products" className="bg-white text-orange-500 font-mono font-bold px-5 py-3 mx-5 my-5 group-hover:bg-black border-orange-400 transition">Explore Products</a>
                    </div>
                    
                </div>
                <img src="cover1.jpeg" className="absolute grayscale right-0 md:w-[60%] w-[80%]"/>
            </div>
            <div className="min-h-[60rem]">
                <h2 className="text-3xl font-mono font-bold text-center my-10">CORE PRODUCTS</h2>
                <div className="grid grid-flows-row md:grid-cols-3 grid-cols-2 gap-5 md:gap-10 justify-center items-center mx-10 my-10">
                    <a href="./products/vortex-inhibitor">
                    <div className="group relative overflow-hidden h-[18rem] md:h-[22rem] lg:h-[26rem]" >
                        <img src="bg1.png" className="w-[22rem] absolute inset-0 m-auto max-w-full object-contain"/>
                        <h1 className="hidden group-hover:flex absolute inset-0 z-10 items-center justify-center px-5 py-2 text-center font-bold text-1xl md:texl-2xl lg:text-3xl font-mono">
                            <span className="bg-white">Vortex Inhibitor</span>
                        </h1>
                        <img
                          src="vortex-clear.png"
                          className="absolute inset-0 m-auto w-[10rem] md:w-[13rem] lg:w-[15rem] max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                    </div>
                    </a>
                    <a href="./products/puddle-flange">
                        <div className="group relative overflow-hidden h-[18rem] md:h-[22rem] lg:h-[26rem]">
                            <img src="bg2.png" className="w-[22rem] absolute inset-0 m-auto max-w-full object-contain"/>
                            <div className="hidden group-hover:flex absolute inset-0 z-10 items-center justify-center px-5 py-2 text-center font-bold text-1xl md:texl-2xl lg:text-3xl font-mono">
                                <span className="bg-white">Puddle Flanges</span>
                            </div>
                            <img
                            src="puddle.png"
                            className="absolute inset-0 m-auto w-[10rem] md:w-[13rem] lg:w-[15rem] max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                    </a>
                    <a href="/products/anti-vortex-plate">
                    <div className="group relative overflow-hidden h-[18rem] md:h-[22rem] lg:h-[26rem]">
                        <img src="bg3.png" className="w-[22rem] absolute inset-0 m-auto max-w-full object-contain"/>
                        <div className="hidden group-hover:flex absolute inset-0 z-10 items-center justify-center px-5 py-2 text-center font-bold text-1xl md:texl-2xl lg:text-3xl font-mono">
                            <span className="bg-white">Anti Vortex Plate</span>
                        </div>
                        <img
                          src="vortex-plate-clear.png"
                          className="absolute inset-0 m-auto w-[10rem] md:w-[13rem] lg:w-[15rem] max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                    </div>
                    </a>
                    <a href="./products/pressure-vessels">
                    <div className=" group relative overflow-hidden h-[18rem] md:h-[22rem] lg:h-[26rem] ">
                        <img src="bg4.png" className="w-[22rem] absolute inset-0 m-auto max-w-full object-contain"/>
                        <h1 className="hidden group-hover:flex absolute inset-0 z-10 items-center justify-center px-5 py-2 text-center font-bold text-1xl md:texl-2xl lg:text-3xl font-mono">
                            <span className="bg-white">Pressure Vessels / Tanks</span>
                        </h1>
                        <img
                          src="vessel.png"
                          className="absolute inset-0 m-auto w-[10rem] md:w-[13rem] lg:w-[25rem] max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                    </div>
                    </a>
                    <a href="./products/filters">
                    <div className="group relative overflow-hidden h-[18rem] md:h-[22rem] lg:h-[26rem]">
                        <img src="bg5.png" className="w-[22rem] absolute inset-0 m-auto max-w-full object-contain"/>
                        <div className="hidden group-hover:flex absolute inset-0 z-10 items-center justify-center px-5 py-2 text-center font-bold text-1xl md:texl-2xl lg:text-3xl font-mono">
                            <span className="bg-white">Filters</span>
                        </div>
                        <img
                          src="filter1.png"
                          className="absolute inset-0 m-auto w-[11rem] md:w-[15rem] lg:w-[17rem] max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                    </div>
                    </a>
                    <a href="products/pipe-bending-services">
                    <div className="group relative overflow-hidden h-[18rem] md:h-[22rem] lg:h-[26rem]">
                        <img src="bg6.png" className="w-[22rem] absolute inset-0 m-auto max-w-full object-contain"/>
                        <div className="hidden group-hover:flex absolute inset-0 z-10 items-center justify-center px-5 py-2 text-center font-bold text-1xl md:texl-2xl lg:text-3xl font-mono">
                            <span className="bg-white">Pipe Bending</span>
                        </div>
                        <img
                          src="pipebends.png"
                          className="absolute inset-0 m-auto w-[10rem] md:w-[13rem] lg:w-[15rem] max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                    </div>
                    </a>
                </div>
                {/* <div className="flex flex-col gap-10"> */}
                    {/* <div className="flex flex-wrap justify-center items-center">
                        <div className="group relative">
                            <img src="bg1.png" className="mx-5 my-5 w-[22rem]"/>
                            <h1 className="hidden group-hover:flex absolute inset-0 z-10 items-center justify-center px-5 py-2 text-center font-bold text-3xl font-mono">
                                <span className="bg-white">Vortex Inhibitor</span>
                            </h1>
                            <img src="vortex.png" className="absolute top-7 left-8 mx-5 z-5 my-5 w-[15rem] group-hover:w-[17rem]"/>
                        </div>
                        <div className="group relative">
                            <img src="bg5.png" className="mx-5 my-5 w-[22rem]"/>
                            <div className="hidden group-hover:flex absolute inset-0 z-10 items-center justify-center px-5 py-2 text-center font-bold text-3xl font-mono">
                                <span className="bg-white">Anti Vortex Plate</span>
                            </div>
                            <img src="vortexPlate.png" className="absolute top-7 left-8 mx-5 z-5 my-5 w-[15rem] group-hover:w-[17rem]"/>
                        </div>
                        <div className="group relative">
                            <img src="bg3.png" className="mx-5 my-5 w-[22rem]"/>
                            <div className="hidden group-hover:flex absolute inset-0 z-10 items-center justify-center px-5 py-2 text-center font-bold text-3xl font-mono">
                                <span className="bg-white">Anti Vortex Plate</span>
                            </div>
                            <img src="vortexPlate.png" className="absolute top-7 left-8 mx-5 z-5 my-5 w-[15rem] group-hover:w-[17rem]"/>
                        </div>
                    </div> */}
                    
                {/* </div> */}
                
            </div>


            <div className="min-h-[30rem]">

                <h2 className="text-3xl font-mono font-bold text-center my-20">CERTIFICATIONS</h2>
                <div className="flex flex-wrap justify-center items-center w-full">
                    <img src="zed-bronze.png" className="mx-5 my-5 w-[15rem] h-[15rem] drop-shadow-2xl border-2"/>
                    <img src="trustseal.png" className="mx-5 my-5  h-[15rem] drop-shadow-2xl border-2 bg-white"/>
                </div>

            </div>
        </main>
        <Footer />
        </>
    )   
}

export default Home;