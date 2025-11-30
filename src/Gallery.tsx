import { useEffect } from "react"
import Header from "./Header"
import Footer from "./Footer"
function Gallery() {
    useEffect(() => {
        document.title = "Gallery";
    }, []);
    return(
        <>
        <Header />
        <main className="pt-32 md:pt-36 lg:pt-40">
            <div className="hidden md:grid grid-flows-row grid-cols-3 gap-2 justify-center items-center mx-10 my-10">
                <div className="relative lg:h-[20rem] md:h-[16rem] w-full overflow-hidden rounded-xl group">
                    <img src="/photos/product_images/img8.jpg" className="h-full w-full object-cover " />
                    <h1 className="hidden group-hover:flex absolute inset-0 self-end text-white text-2xl font-bold p-3">Y Strainer</h1>
                </div>

                <div className="relative lg:h-[20rem] md:h-[16rem] w-full overflow-hidden rounded-xl group">
                    <img src="/photos/product_images/img2.jpg" className="h-full w-full object-cover" />
                    <h1 className="hidden group-hover:flex absolute inset-0 self-end text-white text-2xl font-bold p-3">Vortex Inhibitor</h1>
                </div>
                <div className="relative lg:h-[42rem] md:h-[33rem] w-full overflow-hidden rounded-xl row-span-2 group">
                    <img src="/photos/product_images/img6.jpg" className="h-full w-full object-cover"/>
                    <h1 className="hidden group-hover:flex absolute inset-0 self-end text-white text-2xl font-bold p-3">Basket Strainer</h1>
                </div>
                <div className="relative lg:h-[44rem] md:h-[34rem] w-full overflow-hidden rounded-xl row-span-2 col-span-2 group">
                    <img src="/photos/product_images/img14.jpg" className="h-full w-full object-cover"/>
                    <h1 className="hidden group-hover:flex absolute inset-0 self-start text-white text-2xl font-bold p-3">Tee Strainer</h1>
                </div>
                <div className="relative lg:h-[42rem] md:h-[33rem] w-full overflow-hidden rounded-xl row-span-2 group">
                    <img src="/photos/product_images/img7.jpg" className="h-full w-full object-cover"/>
                    <h1 className="hidden group-hover:flex absolute inset-0 self-end text-white text-2xl font-bold p-3">Puddle Flange</h1>
                </div>
                <div className="relative lg:h-[42.5rem] md:h-[32rem] w-full overflow-hidden rounded-xl row-span-2 group">
                    <img src="/photos/product_images/img3.png" className="h-full w-full object-cover"/>
                    <h1 className="hidden group-hover:flex absolute inset-0 self-end text-white text-2xl font-bold p-3">Junction Box</h1>
                </div>
                <div className="relative lg:h-[20rem] md:h-[16rem] w-full overflow-hidden rounded-xl group">
                    <img src="/photos/product_images/img22.jpg" className="h-full w-full object-cover"/>
                    <h1 className="hidden group-hover:flex absolute inset-0 self-end justify-end text-white text-2xl font-bold p-3">Conical Filter</h1>
                </div>
                <div className="relative lg:h-[22rem] md:h-[15.5rem] w-full overflow-hidden rounded-xl col-span-2 group">
                    <img src="/photos/product_images/img4.jpg" className="h-full w-full object-cover"/>
                    <h1 className="hidden group-hover:flex absolute inset-0 self-start justify-end text-white text-2xl font-bold p-3">Y Strainer</h1>
                </div>
                <div className="relative lg:h-[20rem] md:h-[17rem] w-full overflow-hidden rounded-xl group">
                    <img src="/photos/product_images/img24.jpg" className="h-full w-full object-cover"/>
                    <h1 className="hidden group-hover:flex absolute inset-0 self-start text-black text-2xl font-bold p-3">Cooler Unit</h1>
                </div>
                <div className="relative lg:h-[42rem] md:h-[33.5rem] w-full overflow-hidden rounded-xl row-span-2 group">
                    <img src="/photos/product_images/img16.jpg" className="h-full w-full object-cover"/>
                    <h1 className="hidden group-hover:flex absolute inset-0 self-end text-white text-2xl font-bold p-3">Tanks</h1>
                </div>
                <div className="relative lg:h-[20rem] md:h-[17rem] w-full overflow-hidden rounded-xl group">
                    <img src="/photos/product_images/img25.jpg" className="h-full w-full object-cover"/>
                    <h1 className="hidden group-hover:flex absolute inset-0 self-end text-white text-2xl font-bold p-3">Anti-Vortex Plate</h1>
                </div>
                <div className="relative lg:h-[21.5rem] md:h-[16rem] w-full overflow-hidden rounded-xl group">
                    <img src="/photos/product_images/img26.jpg" className="h-full w-full object-cover"/>
                    <h1 className="hidden group-hover:flex absolute inset-0 self-end text-white text-2xl font-bold p-3">Pipe Bends</h1>
                </div>
                <div className="relative lg:h-[21.5rem] md:h-[16rem] w-full overflow-hidden rounded-xl group">
                    <img src="/photos/product_images/img27.jpg" className="h-full w-full object-cover"/>
                    <h1 className="hidden group-hover:flex absolute inset-0 self-end text-white text-2xl font-bold p-3">Strum Box</h1>
                </div>
                <div className="relative lg:h-[42rem] md:h-[33rem] w-full overflow-hidden rounded-xl row-span-2 group">
                    <img src="/photos/product_images/img11.jpg" className="h-full w-full object-cover"/>
                    <h1 className="hidden group-hover:flex absolute inset-0 self-end text-white text-2xl font-bold p-3">GI Puddle Flange</h1>
                </div>
                <div className="relative lg:h-[20rem] md:h-[16rem] w-full overflow-hidden rounded-xl col-span-2 group">
                    <img src="/photos/product_images/img29.jpg" className="h-full w-full object-cover"/>
                    <h1 className="hidden group-hover:flex absolute inset-0 self-end text-white text-2xl font-bold p-3">SS Puddle Flange</h1>
                </div>
                <div className="relative lg:h-[21.5rem] md:h-[16rem] w-full overflow-hidden rounded-xl group">
                    <img src="/photos/product_images/img17.jpg" className="h-full w-full object-cover"/>
                    <h1 className="hidden group-hover:flex absolute inset-0 self-end text-white text-2xl font-bold p-3">Header Units</h1>
                </div>
                <div className="relative lg:h-[42rem] md:h-[33rem] w-full overflow-hidden rounded-xl row-span-2 group">
                    <img src="/photos/product_images/img31.jpg" className="h-full w-full object-cover"/>
                    <h1 className="hidden group-hover:flex absolute inset-0 self-start text-white text-2xl font-bold p-3">Basket Strainer</h1>
                </div>
                <div className="relative lg:h-[20rem] md:h-[16rem] w-full overflow-hidden rounded-xl col-span-2 group">
                    <img src="/photos/product_images/img5.jpg" className="h-full w-full object-cover"/>
                    <h1 className="hidden group-hover:flex absolute inset-0 self-end text-white text-2xl font-bold p-3">Pipe Spools</h1>
                </div>
                <div className="relative lg:h-[20rem] md:h-[16rem] w-full overflow-hidden rounded-xl group">
                    <img src="/photos/product_images/img21.jpg" className="h-full w-full object-cover"/>
                    <h1 className="hidden group-hover:flex absolute inset-0 self-end text-white text-2xl font-bold p-3">GI Puddle Flange</h1>
                </div>
                <div className="relative lg:h-[20rem] md:h-[16rem] w-full overflow-hidden rounded-xl group">
                    <img src="/photos/product_images/img32.jpg" className="h-full w-full object-cover"/>
                    <h1 className="hidden group-hover:flex absolute inset-0 self-end text-black text-2xl font-bold p-3">Vortex Plate</h1>
                </div>
                <div className="relative lg:h-[42rem] md:h-[33rem] w-full overflow-hidden rounded-xl row-span-2 group">
                    <img src="/photos/product_images/img1.jpg" className="h-full w-full object-cover"/>
                    <h1 className="hidden group-hover:flex absolute inset-0 self-end text-white text-2xl font-bold p-3">Vortex Inhibitor</h1>
                </div>
                <div className="relative lg:h-[21rem] md:h-[16rem] w-full overflow-hidden rounded-xl group">
                    <img src="/photos/product_images/img33.jpg" className="h-full w-full object-cover"/>
                    <h1 className="hidden group-hover:flex absolute inset-0 self-end justify-end text-white text-2xl font-bold p-3">Pipes</h1>
                </div>
                <div className="relative lg:h-[21rem] md:h-[16rem] w-full overflow-hidden rounded-xl group">
                    <img src="/photos/product_images/img34.jpg" className="h-full w-full object-cover"/>
                    <h1 className="hidden group-hover:flex absolute inset-0 self-end text-white text-2xl font-bold p-3">Filters</h1>
                </div>
            </div>

            <div className="md:hidden grid grid-flows-row grid-cols-2 gap-2 justify-center items-center mx-3 my-10">
                <div className="relative group h-[12rem] w-full overflow-hidden rounded-xl ">
                    <img src="/photos/product_images/img8.jpg" className="h-full w-full object-cover" />
                    <h1 className="hidden group-hover:flex absolute inset-0 self-end text-white text-lg font-bold p-2">Y Strainer</h1>
                </div>

                <div className="relative group h-[24.5rem] w-full overflow-hidden rounded-xl row-span-2">
                    <img src="/photos/product_images/img6.jpg" className="h-full w-full object-cover"/>
                    <h1 className="hidden group-hover:flex absolute inset-0 self-end text-white text-lg font-bold p-2">Basket Strainer</h1>
                </div>
                <div className="relative group h-[12rem] w-full overflow-hidden rounded-xl">
                    <img src="/photos/product_images/img2.jpg" className="h-full w-full object-cover" />
                    <h1 className="hidden group-hover:flex absolute inset-0 self-end text-white text-lg font-bold p-2">Vortex Inhibitor</h1>
                </div>
                
                <div className="relative group h-[24rem] w-full overflow-hidden rounded-xl row-span-2 col-span-2">
                    <img src="/photos/product_images/img14.jpg" className="h-full w-full object-cover"/>
                    <h1 className="hidden group-hover:flex absolute inset-0 self-end text-white text-lg font-bold p-2">Tee Strainer</h1>
                </div>
                <div className="relative group h-[24rem] w-full overflow-hidden rounded-xl row-span-2">
                    <img src="/photos/product_images/img7.jpg" className="h-full w-full object-cover"/>
                    <h1 className="hidden group-hover:flex absolute inset-0 self-end text-white text-lg font-bold p-2">Puddle Flange</h1>
                </div>
                <div className="relative group h-[12rem] w-full overflow-hidden rounded-xl">
                    <img src="/photos/product_images/img22.jpg" className="h-full w-full object-cover"/>
                    <h1 className="hidden group-hover:flex absolute inset-0 self-end justify-end text-white text-lg font-bold p-2">Conical Filter</h1>
                </div>
                <div className="relative group h-[24rem] w-full overflow-hidden rounded-xl row-span-2">
                    <img src="/photos/product_images/img3.png" className="h-full w-full object-cover"/>
                    <h1 className="hidden group-hover:flex absolute inset-0 self-end text-white text-lg font-bold p-2">Junction Box</h1>
                </div>
                <div className="relative group h-[12rem] w-full overflow-hidden rounded-xl">
                    <img src="/photos/product_images/img25.jpg" className="h-full w-full object-cover"/>
                    <h1 className="hidden group-hover:flex absolute inset-0 self-end text-white text-lg font-bold p-2">Anti-Vortex Plate</h1>
                </div>
                
                <div className="relative group h-[12rem] w-full overflow-hidden rounded-xl col-span-2">
                    <img src="/photos/product_images/img4.jpg" className="h-full w-full object-cover"/>
                    <h1 className="hidden group-hover:flex absolute inset-0 self-start justify-end text-white text-lg font-bold p-2">Y Strainer</h1>
                </div>
                <div className="relative group h-[12rem] w-full overflow-hidden rounded-xl">
                    <img src="/photos/product_images/img24.jpg" className="h-full w-full object-cover"/>
                    <h1 className="hidden group-hover:flex absolute inset-0 self-start text-black text-lg font-bold p-2">Cooler Unit</h1>
                </div>
                <div className="relative group h-[24.5rem] w-full overflow-hidden rounded-xl row-span-2">
                    <img src="/photos/product_images/img16.jpg" className="h-full w-full object-cover"/>
                    <h1 className="hidden group-hover:flex absolute inset-0 self-end text-white text-lg font-bold p-2">Tanks</h1>
                </div>
                <div className="relative group h-[12rem] w-full overflow-hidden rounded-xl">
                    <img src="/photos/product_images/img26.jpg" className="h-full w-full object-cover"/>
                    <h1 className="hidden group-hover:flex absolute inset-0 self-end text-white text-lg font-bold p-2">Pipe Bends</h1>
                </div>
                <div className="relative group h-[12rem] w-full overflow-hidden rounded-xl">
                    <img src="/photos/product_images/img27.jpg" className="h-full w-full object-cover"/>
                    <h1 className="hidden group-hover:flex absolute inset-0 self-end text-white text-lg font-bold p-2">Strum Box</h1>
                </div>
                <div className="relative group h-[12rem] w-full overflow-hidden rounded-xl row-span-2">
                    <img src="/photos/product_images/img28.jpg" className="h-full w-full object-cover"/>
                    <h1 className="hidden group-hover:flex absolute inset-0 self-end text-white text-lg font-bold p-2">GI Puddle Flange</h1>
                </div>
                <div className="relative group h-[12rem] w-full overflow-hidden rounded-xl col-span-2">
                    <img src="/photos/product_images/img29.jpg" className="h-full w-full object-cover"/>
                    <h1 className="hidden group-hover:flex absolute inset-0 self-end text-white text-lg font-bold p-2">SS Puddle Flange</h1>
                </div>
                <div className="relative group h-[12rem] w-full overflow-hidden rounded-xl">
                    <img src="/photos/product_images/img17.jpg" className="h-full w-full object-cover"/>
                    <h1 className="hidden group-hover:flex absolute inset-0 self-end text-white text-lg font-bold p-2">Header Units</h1>
                </div>
                <div className="relative group h-[24rem] w-full overflow-hidden rounded-xl row-span-2">
                    <img src="/photos/product_images/img31.jpg" className="h-full w-full object-cover"/>
                    <h1 className="hidden group-hover:flex absolute inset-0 self-end text-white text-lg font-bold p-2">Basket Strainer</h1>
                </div>
                
                <div className="relative group h-[24rem] w-full overflow-hidden rounded-xl row-span-2">
                    <img src="/photos/product_images/img10.jpg" className="h-full w-full object-cover"/>
                    <h1 className="hidden group-hover:flex absolute inset-0 self-end text-white text-lg font-bold p-2">Puddle Fange</h1>
                </div>
                <div className="relative group h-[12rem] w-full overflow-hidden rounded-xl">
                    <img src="/photos/product_images/img9.jpg" className="h-full w-full object-cover"/>
                    <h1 className="hidden group-hover:flex absolute inset-0 self-end text-white text-lg font-bold p-2">Strum Box</h1>
                </div>
                <div className="relative group h-[12rem] w-full overflow-hidden rounded-xl col-span-2 ">
                    <img src="/photos/product_images/img5.jpg" className="h-full w-full object-cover"/>
                    <h1 className="hidden group-hover:flex absolute inset-0 self-end text-white text-lg font-bold p-2">Pipe Spools</h1>
                </div>
                <div className="relative group h-[12rem] w-full overflow-hidden rounded-xl">
                    <img src="/photos/product_images/img21.jpg" className="h-full w-full object-cover"/>
                    <h1 className="hidden group-hover:flex absolute inset-0 self-end text-white text-lg font-bold p-2">GI Puddle Flange</h1>
                </div>
                <div className="relative group h-[12rem] w-full overflow-hidden rounded-xl">
                    <img src="/photos/product_images/img32.jpg" className="h-full w-full object-cover"/>
                    <h1 className="hidden group-hover:flex absolute inset-0 self-end text-black text-lg font-bold p-2">Vortex Plate</h1>
                </div>
                <div className="relative group h-[24rem] w-full overflow-hidden rounded-xl row-span-2">
                    <img src="/photos/product_images/img1.jpg" className="h-full w-full object-cover"/>
                    <h1 className="hidden group-hover:flex absolute inset-0 self-end text-white text-lg font-bold p-2">Vortex Inhibitor</h1>
                </div>
                <div className="relative group h-[12rem] w-full overflow-hidden rounded-xl">
                    <img src="/photos/product_images/img33.jpg" className="h-full w-full object-cover"/>
                    <h1 className="hidden group-hover:flex absolute inset-0 self-end justify-end text-white text-lg font-bold p-2">Pipes</h1>
                </div>
                <div className="relative group h-[12rem] w-full overflow-hidden rounded-xl">
                    <img src="/photos/product_images/img34.jpg" className="h-full w-full object-cover"/>
                    <h1 className="hidden group-hover:flex absolute inset-0 self-end text-white text-lg font-bold p-2">Filters</h1>
                </div>
            </div>
        </main>
        <Footer />
        </>
    )
}
export default Gallery;