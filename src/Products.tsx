import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { useEffect, useState} from "react";
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
function Products(){
    type Product = {
        id: number;
        name: string;
        material?: string;
        finish?: string;
        size_ranges?: string;
        pressure?: string;
        thickness?: string;
        flange_std?: string;
        usage?: string;
        end_connections?: string;
        pipe_thickness?: string;
        hole_dia?: string;
        image_urls?: string[];
        };

    const navigate = useNavigate();
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const { data, error } = await supabase
                .from("products")
                .select("*")
                .order("id", { ascending: true });

            if (!error) setProducts(data || []);
        };
        fetchProducts();
    }, []);

    useEffect(() => {
        document.title = "Products";
    }, []);
    return(
        <>
        <Header />
        <main className="pt-32 md:pt-36 lg:pt-40">
            <div className="flex justify-center items-center flex-wrap pb-20">
                {products.map((p) => (
                    <div
                        key={p.id}
                        onClick={() => navigate(`/products/${p.name.toLowerCase().replace(/\s+/g, "-")}`)}
                        className="flex flex-col w-[20rem] border-2 border-orange-300 m-2 group relative cursor-pointer"
                    >
                        <img
                            src={p.image_urls?.[0]}
                            className="p-3 h-[20rem] object-contain"
                            alt={p.name}
                        />

                        <h1 className="text-center text-xl font-mono tracking-wider bg-orange-300 uppercase">
                            {p.name.toUpperCase()}
                        </h1>

                        <div className="absolute z-10 flex flex-col hidden group-hover:flex p-3 bg-white">
                            {p.material && (
                                <p className="font-mono">
                                    <span className="font-bold underline">Material:</span> {p.material}
                                </p>
                            )}
                            {p.finish && (
                                <p className="font-mono">
                                    <span className="font-bold underline">Finish:</span> {p.finish}
                                </p>
                            )}
                            {p.size_ranges && (
                                <p className="font-mono">
                                    <span className="font-bold underline">Size Ranges:</span> {p.size_ranges}
                                </p>
                            )}
                        </div>

                        <div className="absolute text-center hidden group-hover:flex inset-0 bg-white/80">
                            <h1 className="m-auto text-2xl font-mono">Click for details</h1>
                        </div>
                    </div>
                ))}
            </div>
        </main>
        <Footer />
        </>
    )
    
}
export default Products;