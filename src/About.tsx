import Header from "./Header";
import Footer from "./Footer";

function About(){
    return(
        <>
        <Header/>
        <main className="pt-20 md:pt-24 lg:pt-32">
            <div className="flex flex-col w-full items-center my-10 bg-[url('../public/bg-1.png')] bg-cover bg-center">
                <h1 className="text-3xl font-bold mb-4">About Us</h1>
                <div className="md:w-1/2 w-3/4 text-left md:text-justify">
                    <p className="text-lg leading-relaxed mb-4">
                        At Deva Engineering Works, we are driven by a commitment to precision, durability, and engineering excellence. What began nearly 30 years ago as a modest welding unit has evolved into a trusted fabrication powerhouse delivering solutions that stand strong in demanding industrial environments.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                        Over the decades, we have proudly partnered with more than 1000 clients, earning a reputation for reliability, craftsmanship, and the ability to convert complex engineering needs into practical, high‑performance outcomes. Our expertise has grown to include advanced metal fabrication, custom structural works, precision pipe bending, industrial strainers, filtration systems, air‑cooling units, and a diverse range of engineered components designed to elevate operational efficiency.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                        Beyond fabrication, we offer complete, end‑to‑end solutions in fire protection systems, industrial pipelines, flow‑control systems, valves, and specialized fittings, ensuring our clients receive comprehensive support from concept to installation. Every solution we deliver is crafted with modern technology, meticulous attention to detail, and the unmatched skill that has defined our legacy.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                        Strengthening our vision for responsible and future‑ready engineering, we have also attained ZED MSME certification, highlighting our commitment to sustainability, quality, and eco‑conscious manufacturing practices. This certification reinforces our promise to create long‑lasting solutions while minimizing environmental impact.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                        We have also successfully managed export orders to other countries, expanding our reach and demonstrating the global reliability of our engineering solutions.
                    </p>
                    <p className="text-lg leading-relaxed">
                        As a proudly registered MSME organization, we continue to innovate, adapt, and set new benchmarks in industrial engineering, ensuring every product we deliver stands for reliability, longevity, and superior performance.
                    </p>
                    
                </div>
                
            </div>
        </main>
        <Footer/>
        </>
    )
}
export default About;