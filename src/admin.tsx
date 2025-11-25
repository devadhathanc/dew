
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import type { Session } from "@supabase/supabase-js";

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);

export default function Admin() {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [session, setSession] = useState<Session | null>(null);
    const [authError, setAuthError] = useState<string | null>(null);

    useEffect(() => {
        // Check for existing session
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });

        // Listen for auth changes
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });

        return () => subscription.unsubscribe();
    }, []);

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setAuthError(null);

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setAuthError(error.message);
        } else {
            setEmail("");
            setPassword("");
        }
        setLoading(false);
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        setSession(null);
    };

    const [productName, setProductName] = useState("");
    const [material, setMaterial] = useState("MS / SS / Carbon Steel / GI Iron");
    const [finish, setFinish] = useState("Epoxy Painted / Hot-Dip Galvanized");
    const [sizeRanges, setSizeRanges] = useState("");
    const [pressure, setPressure] = useState("ANSI 150# / ANSI 300# / ANSI 600#");
    const [thickness, setThickness] = useState("");
    const [flangeStd, setFlangeStd] = useState("ANSI / ASME B16.5");
    const [usage, setUsage] = useState("");
    const [endConnections, setEndConnections] = useState("");
    const [pipeThickness, setPipeThickness] = useState("");
    const [holeDia, setHoleDia] = useState("");
    const [types, setTypes] = useState("");
    const [imageFiles, setImageFiles] = useState<File[]>([]);
    const [previewUrls, setPreviewUrls] = useState<string[]>([]);
    const [description, setDescription] = useState("");
    const [isDragging, setIsDragging] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        if (files.length === 0) return;

        const newFiles = [...imageFiles];
        const newUrls = [...previewUrls];

        for (const f of files) {
            newFiles.push(f);
            newUrls.push(URL.createObjectURL(f));
        }

        setImageFiles(newFiles);
        setPreviewUrls(newUrls);

        e.currentTarget.value = "";
    };

    const removeImage = (index: number) => {
        const urlToRevoke = previewUrls[index];
        if (urlToRevoke) URL.revokeObjectURL(urlToRevoke);

        const newFiles = [...imageFiles];
        newFiles.splice(index, 1);
        setImageFiles(newFiles);

        const newUrls = [...previewUrls];
        newUrls.splice(index, 1);
        setPreviewUrls(newUrls);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);

        const files = Array.from(e.dataTransfer.files || []);
        if (files.length === 0) return;

        const newFiles = [...imageFiles];
        const newUrls = [...previewUrls];

        for (const f of files) {
            newFiles.push(f);
            newUrls.push(URL.createObjectURL(f));
        }

        setImageFiles(newFiles);
        setPreviewUrls(newUrls);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => setIsDragging(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const uploadedUrls: string[] = [];
        const folderName = productName.trim();

        for (let i = 0; i < imageFiles.length; i++) {
            const file = imageFiles[i];
            const imageName = `${productName}_${i}`;

            const { error: imageError } = await supabase.storage
                .from("dew")
                .upload(`${folderName}/${imageName}`, file);

            if (imageError) {
                console.error(imageError);
                alert("Image upload failed");
                return;
            }

            const { data: publicUrl } = supabase.storage
                .from("dew")
                .getPublicUrl(`${folderName}/${imageName}`);

            uploadedUrls.push(publicUrl.publicUrl);
        }
        const { error: insertError } = await supabase
            .from("products")
            .insert([
                {
                    name: productName,
                    material: material,
                    finish: finish,
                    size_ranges: sizeRanges,
                    pressure: pressure,
                    thickness: thickness,
                    flange_std: flangeStd,
                    usage: usage,
                    end_connections: endConnections,
                    pipe_thickness: pipeThickness,
                    hole_dia: holeDia,
                    types: types,
                    description: description,
                    image_urls: uploadedUrls
                }
            ]);

        if (insertError) {
            console.error(insertError);
            alert("Saving product failed");
        } else {
            alert("Product saved successfully!");
            setProductName("");
            setMaterial("");
            setFinish("");
            setSizeRanges("");
            setPressure("");
            setThickness("");
            setFlangeStd("");
            setUsage("");
            setEndConnections("");
            setPipeThickness("");
            setHoleDia("");
            setTypes("");
            setDescription("");
            setImageFiles([]);
        }
    };
    // If user is logged in, show welcome screen
    if (session) {
        return (
            <>
                <div className="w-1/2 p-3 flex flex-col justify-around items-center w-full">
                    <button onClick={handleLogout} className="self-end text-white border-2 rounded-md p-3 w-[6rem] bg-black">Sign Out</button>
                    <form className="flex gap-3 flex-wrap justity-center " onSubmit={handleSubmit}>
                        
                        <label className="flex flex-col flex-1">
                            <span className="font-semibold">Product Name</span>
                            <input 
                                type="text"
                                className="border p-2 rounded"
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                                placeholder="Enter product name"
                                maxLength={21}
                            />
                        </label>

                        <label className="flex flex-col flex-1">
                            <span className="font-semibold">Material</span>
                            <input className="border p-2 rounded" value={material} onChange={(e)=>setMaterial(e.target.value)}  />
                        </label>

                        <label className="flex flex-col flex-1">
                            <span className="font-semibold">Finish</span>
                            <input className="border p-2 rounded" value={finish} onChange={(e)=>setFinish(e.target.value) }  />
                        </label>

                        <label className="flex flex-col">
                            <span className="font-semibold">Size Ranges</span>
                            <input className="border p-2 rounded" value={sizeRanges} onChange={(e)=>setSizeRanges(e.target.value)}  />
                        </label>

                        <label className="flex flex-col flex-1">
                            <span className="font-semibold">Pressure</span>
                            <input className="border p-2 rounded" value={pressure} onChange={(e)=>setPressure(e.target.value)}  />
                        </label>

                        <label className="flex flex-col">
                            <span className="font-semibold">Thickness</span>
                            <input className="border p-2 rounded" value={thickness} onChange={(e)=>setThickness(e.target.value)}  />
                        </label>

                        <label className="flex flex-col flex-1">
                            <span className="font-semibold">Flange Standard</span>
                            <input className="border p-2 rounded" value={flangeStd} onChange={(e)=>setFlangeStd(e.target.value)}  />
                        </label>

                        <label className="flex flex-col flex-1">
                            <span className="font-semibold">Usage</span>
                            <input className="border p-2 rounded" value={usage} onChange={(e)=>setUsage(e.target.value)}  />
                        </label>

                        <label className="flex flex-col flex-1">
                            <span className="font-semibold">End Connections</span>
                            <input className="border p-2 rounded" value={endConnections} onChange={(e)=>setEndConnections(e.target.value)}  />
                        </label>

                        <label className="flex flex-col">
                            <span className="font-semibold">Pipe Thickness</span>
                            <input className="border p-2 rounded" value={pipeThickness} onChange={(e)=>setPipeThickness(e.target.value)}  />
                        </label>

                        <label className="flex flex-col">
                            <span className="font-semibold">Hole Diameter</span>
                            <input className="border p-2 rounded" value={holeDia} onChange={(e)=>setHoleDia(e.target.value)}  />
                        </label>

                        <label className="flex flex-col flex-1">
                            <span className="font-semibold">Description</span>
                            <textarea 
                                className="border p-2 rounded h-24"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Enter product description"
                            />
                        </label>
                        <label className="flex flex-col flex-1">
                            <span className="font-semibold">Types</span>
                            <input 
                                className="border p-2 rounded"
                                value={types}
                                onChange={(e) => setTypes(e.target.value)}
                            />
                        </label>

                        <label className="flex flex-col w-full">
                            <span className="font-semibold">Product Image</span>

                            <div
                                className={`border-2 border-dashed rounded p-6 text-center relative transition 
                                    ${isDragging ? "bg-blue-100 border-blue-600" : "border-gray-400"}`}
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDrop}
                            >
                                <p className="mb-2">Drag & drop images here</p>
                                <p className="text-sm text-gray-500">or click to upload</p>

                                <input
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    className="opacity-0 absolute inset-0 cursor-pointer"
                                    onChange={handleFileChange}
                                />
                            </div>
                        </label>
                        {previewUrls.length > 0 && (
                            <div className="flex gap-2 items-center mt-2 w-full flex-wrap">
                                {previewUrls.map((url, idx) => (
                                    <div 
                                        key={idx} 
                                        className="relative w-28 h-20 border rounded overflow-hidden"
                                    >
                                        <img 
                                            src={url} 
                                            alt={`preview-${idx}`} 
                                            className="w-full h-full object-cover" 
                                        />

                                        <button
                                            type="button"
                                            onClick={() => removeImage(idx)}
                                            className="absolute top-0 right-0 bg-red-600 text-white rounded-bl px-2 py-1 text-xs"
                                        >
                                            x
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="bg-blue-600 text-white p-2 rounded font-semibold hover:bg-blue-700 active:bg-black"
                        >
                            Save Product
                        </button>

                    </form>
                </div>
            </>
        );
    }

    // Show login form
    return (
        <div className="flex flex-col items-center jutify-center">
            <h1 className="text-3xl">Auth*</h1>
            <p>enter credentials</p>
            {authError && (
                <p style={{ color: "red" }}>✗ {authError}</p>
            )}
            <form onSubmit={handleLogin} className="flex flex-col w-1/3 gap-4">
                <input
                    type="email"
                    placeholder="Your email"
                    className="border-2 p-1 rounded-md"
                    value={email}
                    required={true}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Your password"
                    className="border-2 p-1 rounded-md"
                    value={password}
                    required={true}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button disabled={loading} className={`text-white border-2 rounded-md w-[4rem] ${loading ? "bg-orange-500" : "bg-black"}`}>
                    {loading ? <span>Loading</span> : <span>Sign In</span>}
                </button>
            </form>
        </div>
    );
}