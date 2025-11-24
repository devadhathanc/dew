import { useEffect, useState } from "react";
import { useParams, Navigate, NavLink } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function ProductPage(){
    
    const { slug } = useParams<{ slug: string }>();
    if (!slug) return <Navigate to="/" replace />;

    const [product, setProduct] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const fetchProduct = async () => {
            const formatted = slug.replace(/-/g, " ");
            const { data, error } = await supabase
                .from("products")
                .select("*")
                .ilike("name", formatted);

            if (error || !data || data.length === 0) {
                setProduct(null);
            } else {
                setProduct(data[0]);
            }
            setLoading(false);
        };
        fetchProduct();
    }, [slug]);

    if (loading) return <div className="min-h-screen flex items-center justify-center"><img src="../public/strainer.png" className="animate-spin w-20 h-20"/></div>;

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center p-8">
                <div className="max-w-2xl text-center">
                    <h2 className="text-2xl font-bold">Product not found</h2>
                    <p className="mt-2">We couldn't find the product: <span className="font-mono">{slug}</span></p>
                </div>
            </div>
        );
    }

    const images: string[] = product && Array.isArray(product.image_urls)
        ? product.image_urls
        : [];
    const title = product ? product.name : "";
    const description = product ? product.description : "";
    const tds = [
        { parameter: "Material", value: product.material },
        { parameter: "Finish", value: product.finish },
        { parameter: "Size Ranges", value: product.size_ranges },
        { parameter: "Pressure", value: product.pressure },
        { parameter: "Thickness", value: product.thickness },
        { parameter: "Flange Standard", value: product.flange_std },
        { parameter: "Usage", value: product.usage },
        { parameter: "End Connections", value: product.end_connections },
        { parameter: "Pipe Thickness", value: product.pipe_thickness },
        { parameter: "Hole Diameter", value: product.hole_dia },
    ].filter(row => row.value && row.value !== "");



    const handleMainClick = () => setIndex((prev) => (prev + 1) % images.length);

    return (
        <div className="min-h-screen pt-12 md:pt-20 lg:pt-24">
        <Header />
        <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="flex flex-col lg:flex-row gap-8">

            <div className="w-full lg:w-1/2">
                <div className="relative border border-orange-300 rounded-xl overflow-hidden bg-white">
                {/* Main image */}
                <button
                    onClick={handleMainClick}
                    aria-label="Next image"
                    className="block w-full h-[28rem] md:h-[32rem] focus:outline-none"
                    title="Click image to go to next"
                >
                    <img
                    src={images[index]}
                    alt={`${title} ${index + 1}`}
                    className="w-full h-full object-contain"
                    />
                </button>

                {/* Prev / Next overlays (optional) */}
                <div className="absolute inset-y-0 left-0 flex items-center">
                    <button
                    onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
                    className="p-3 m-2 rounded-full bg-black/40 text-white hover:bg-black/60"
                    aria-label="Previous image"
                    >
                    ‹
                    </button>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center">
                    <button
                    onClick={() => setIndex((i) => (i + 1) % images.length)}
                    className="p-3 m-2 rounded-full bg-black/40 text-white hover:bg-black/60"
                    aria-label="Next image"
                    >
                    ›
                    </button>
                </div>
                </div>

                <div className="mt-4 flex gap-3 overflow-x-auto">
                {images.map((src, i) => (
                    <button
                    key={src + i}
                    onClick={() => setIndex(i)}
                    className={`flex-shrink-0 w-20 h-16 rounded-md border-2 ${i === index ? "border-orange-300" : "border-gray-200"} overflow-hidden bg-white `}
                    aria-label={`Show image ${i + 1}`}
                    >
                    <img src={src} alt={`${title} thumb ${i + 1}`} className="w-full h-full object-cover"/>
                    </button>
                ))}
                </div>
            </div>

            {/* RIGHT: Product details + TDS */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <div className="bg-white rounded-xl p-6 shadow border border-orange-300">
                <h1 className="text-2xl font-bold">{title}</h1>
                {description && <p className="mt-4 text-gray-700">{description}</p>}
                </div>

                <div className="bg-white rounded-xl p-6 shadow border border-orange-300">
                <h2 className="text-lg font-semibold mb-3">Technical Data Sheet</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                    <tbody>
                        {tds.map((row) => (
                        <tr key={row.parameter} className="border-b last:border-b-0">
                            <td className="py-3 px-2 font-mono text-gray-700 w-1/3">{row.parameter}</td>
                            <td className="py-3 px-2 text-gray-800">{row.value}</td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow border border-orange-300 flex flex-col sm:flex-row items-center gap-4">
                <div className="flex-1">
                    <p className="font-semibold">Need this product?</p>
                    <p className="text-sm text-gray-600">Contact us for pricing, lead time, and customization.</p>
                </div>
                <div className="flex gap-3">
                    <NavLink to={`/contact?product=${slug}`} className="px-4 py-2 bg-orange-400 text-white rounded-md shadow">Get Quote</NavLink>
                    <a href="mailto:orders.deva@gmail.com" className="px-4 py-2 border rounded-md">Email</a>
                </div>
                </div>
            </div>
            </div> {/* flex */}
        </div>
        <Footer/>
        </div>
    );
}

export default ProductPage;