import Logo from "/logo.png"
function footer(){
    return(
        <>
        <div className="flex flex-col bg-black/90">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start flex-wrap">
                <img src={Logo} alt="logo" className="h-10 md:h-20 self-center m-5"/>
                <div className="flex flex-col md:flex-row lg:justify-between font-mono text-white gap-10 m-5">
                    <div className="hidden lg:flex flex-col">
                        <h1 className="text-orange-500 font-bold pb-2">LINKS</h1>
                        <ul>
                            <li>Home</li>
                            <li>Gallery</li>
                            <li>Products</li>
                            <li>Contact</li>
                            <li>About</li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center md:items-start text-center md:text-start">
                        <h1 className="font-bold text-orange-500 pb-2">REGISTERED ADDRESS</h1>
                        <p className="md:text-wrap md:max-w-[10rem]">15/159, Balaji Nagar 1st Street, 
                            Periya koluthuvancherry Iyyappanthangal Chennai 600 122.
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        <h1 className="font-bold text-orange-500 pb-2">CONTACTS</h1>
                        <p><a href="tel:+919790986959">+91 97909 86959</a></p>
                        <p><a href="tel:+919841281221">+91 98412 81221</a></p>
                        <p><a href="tel:+917358193249">+91 73581 93249</a></p>
                        <p className="pt-4"><a href="mailto:orders.deva@gmail.com">orders.deva@gmail.com</a></p>
                    </div>

                </div>

            </div>
            <p className="text-white text-[12px] m-4 text-center">&copy;2025 Deva Engineering Works. All rights reserved.</p>
        </div> 
        </>
    )
}
export default footer;