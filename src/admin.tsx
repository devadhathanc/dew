import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
);

function admin(){
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

    return(
        <>
        <div className="w-1/2 p-3">
            <form className="flex gap-3 flex-wrap" onSubmit={handleSubmit}>
                
                <label className="flex flex-col">
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

                <label className="flex flex-col">
                    <span className="font-semibold">Material</span>
                    <input className="border p-2 rounded" value={material} onChange={(e)=>setMaterial(e.target.value)}  />
                </label>

                <label className="flex flex-col">
                    <span className="font-semibold">Finish</span>
                    <input className="border p-2 rounded" value={finish} onChange={(e)=>setFinish(e.target.value) }  />
                </label>

                <label className="flex flex-col">
                    <span className="font-semibold">Size Ranges</span>
                    <input className="border p-2 rounded" value={sizeRanges} onChange={(e)=>setSizeRanges(e.target.value)}  />
                </label>

                <label className="flex flex-col">
                    <span className="font-semibold">Pressure</span>
                    <input className="border p-2 rounded" value={pressure} onChange={(e)=>setPressure(e.target.value)}  />
                </label>

                <label className="flex flex-col">
                    <span className="font-semibold">Thickness</span>
                    <input className="border p-2 rounded" value={thickness} onChange={(e)=>setThickness(e.target.value)}  />
                </label>

                <label className="flex flex-col">
                    <span className="font-semibold">Flange Standard</span>
                    <input className="border p-2 rounded" value={flangeStd} onChange={(e)=>setFlangeStd(e.target.value)}  />
                </label>

                <label className="flex flex-col">
                    <span className="font-semibold">Usage</span>
                    <input className="border p-2 rounded" value={usage} onChange={(e)=>setUsage(e.target.value)}  />
                </label>

                <label className="flex flex-col">
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

                <label className="flex flex-col">
                    <span className="font-semibold">Description</span>
                    <textarea 
                        className="border p-2 rounded h-24"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter product description"
                    />
                </label>
                <label className="flex flex-col">
                    <span className="font-semibold">Types</span>
                    <input 
                        className="border p-2 rounded"
                        value={types}
                        onChange={(e) => setTypes(e.target.value)}
                    />
                </label>

                <label className="flex flex-col">
                    <span className="font-semibold">Product Image</span>
                    <input 
                        type="file" 
                        accept="image/*"
                        multiple
                        className="border p-2 rounded"
                        onChange={handleFileChange}
                    />
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
                                    ×
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

export default admin;