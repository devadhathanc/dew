import { useState } from "react";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useRef } from "react";



function Contact(){
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const [productName, setProductName] = useState(query.get("product") || "");
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formRef.current) return;

        emailjs
            .sendForm(
                "service_jsy02d9",
                "template_szpmc08",
                formRef.current,
                "ieDiUL3iDJGmCwjD7"
            )
            .then(
                () => {
                    alert("Email sent successfully!");
                },
                (error) => {
                    alert("Failed to send email.");
                    console.error(error);
                }
            );
        // Send to customer
        emailjs
            .sendForm(
                "service_jsy02d9",
                "template_9etpbco",
                formRef.current,
                "ieDiUL3iDJGmCwjD7"
            )
            .then(
                () => {},
                (error) => {
                    console.error(error);
                }
            );
    };

    return(
        <>
        <Header/>
        <main className="pt-32 md:pt-36 lg:pt-40">
            <div className="flex justify-center items-start p-4 bg-[url('../public/bg-1.png')] bg-cover bg-center">
                <div className="flex flex-col md:flex-row gap-10 p-3 w-full justify-center">
                    <div className="rounded-xl flex flex-col md:gap-7 gap-3">
                        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-orange-500">Contact Us</h2>
                        <div className="flex flex-col">
                            <span className="font-semibold text-xl texxt-justify">Address</span>
                            <p className="text-gray-700">
                                15/159, Balaji Nagar 1st Street, <br/>
                                Periya koluthuvancherry,<br/>
                                Iyyappanthangal,<br/>
                                Chennai 600 122.
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold text-xl">Phone Numbers</span>
                            <p className="text-gray-700"><a href="tel:+919790986959">+91 97909 86959</a></p>
                            <p className="text-gray-700"><a href="tel:+919841281221">+91 98412 81221</a></p>
                            <p className="text-gray-700"><a href="tel:+917358193249">+91 73581 93249</a></p>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold text-xl">Email</span>
                            <p className="text-gray-700">
                               <a href="mailto:orders.deva@gmail.com">orders.deva@gmail.com</a>
                            </p>
                        </div>
                    </div>
                    <form ref={formRef} onSubmit={handleSubmit} className="w-full max-w-lg flex flex-col gap-4 border p-5 rounded-xl shadow bg-white/90">
                        <label className="flex flex-col">
                            <span className="font-semibold">Company Name *</span>
                            <input name="companyName" type="text" className="border p-2 rounded" placeholder="Enter company name" required/>
                        </label>
                        <label className="flex flex-col">
                            <span className="font-semibold">Email ID *</span>
                            <input name="email" type="email" className="border p-2 rounded" placeholder="Enter your email" required />
                        </label>

                        <label className="flex flex-col">
                            <span className="font-semibold">Product Name *</span>
                            <input name="requestedProduct" type="text" className="border p-2 rounded" placeholder="Enter product name" defaultValue={productName} onChange={e => setProductName(e.target.value)} required/>
                        </label>

                        <label className="flex flex-col">
                            <span className="font-semibold">Message</span>
                            <textarea name="message" className="border p-2 rounded" value={`I would like to request the quote and delivery for ${productName}`}></textarea>
                        </label>

                        <button type="submit" className="bg-orange-400 text-white py-2 rounded">Submit</button>
                    </form>
                </div>
            </div>
            <div className="flex flex-col items-center my-10 p-6 bg-white/90 rounded-xl">
                <h2 className="text-xl font-bold text-orange-500 mb-4">Location</h2>
                <iframe
                    className="lg:w-[60%] w-full h-96 rounded-xl border border-orange-500"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.895603627162!2d80.1410911!3d13.0331771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261006d3a1b75%3A0x2dd066a6e7ecd7b3!2sDeva%20Engineering%20Works!5e0!3m2!1sen!2sin!4v1709912345678"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </main>
        {/* <Footer/> */}
        </>
    )
}
export default Contact;