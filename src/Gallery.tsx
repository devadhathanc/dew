import Header from "./Header"
function Gallery() {
    return(
        <>
        <Header />
        <main className="pt-32 md:pt-36 lg:pt-40">
            <div className="grid grid-flows-row md:grid-cols-3 gap-4 justify-center items-center mx-10 my-10">

                <img src="cover1.jpeg" className="w-full h-auto row-span-2 col-span-2"/>
                <div className="h-50px"><img src="vortex.png"/></div>
                <img src="vortexPlate.png" />
            </div>
        </main>
        </>
    )
}
export default Gallery;