"use client";
import { useState, ChangeEvent } from "react";

const AddProduct = () => {
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [deliveryInfo, setDeliveryInfo] = useState("");
  const [onSale, setOnSale] = useState("No");
  const [price, setPrice] = useState(0); // ✅ new state
  const [priceDrop, setPriceDrop] = useState(0);
  const [successMessage, setSuccessMessage] = useState("");

  // ✅ New state for fields
  const [fields, setFields] = useState<string[]>([]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const selectedFiles = Array.from(files);
      setImages(selectedFiles);

      const previews = selectedFiles.map((file) =>
        URL.createObjectURL(file)
      );
      setImagePreviews(previews);
    }
  };

  // ✅ Handle checkbox toggle
  const handleCheckboxChange = (field: string) => {
    setFields((prev) =>
      prev.includes(field) ? prev.filter((f) => f !== field) : [...prev, field]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const base64Images = await Promise.all(
      images.map((image) => {
        return new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(image);
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = (error) => reject(error);
        });
      })
    );

    const productData = {
      name,
      description,
      deliveryInfo,
      onSale,
      price, // ✅ include price
      priceDrop,
      fields,
      images: base64Images,
    };

    const res = await fetch("/api/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    });

    const result = await res.json();

    if (result.success) {
      setSuccessMessage("🎉 Product added successfully!");
      setImages([]);
      setImagePreviews([]);
      setName("");
      setDescription("");
      setDeliveryInfo("");
      setOnSale("No");
      setPrice(0); // ✅ reset
      setPriceDrop(0);
      setFields([]); // ✅ reset checkboxes

      setTimeout(() => setSuccessMessage(""), 4000);
    } else {
      setSuccessMessage("❌ Failed to add product. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen bg-[#f6cf92] text-black border border-[#4A1A11]">
      <div className="flex-1 p-6">
        <div className="max-w-4xl mx-auto text-[#4A1A11]">
          <h1 className="text-4xl font-bold mb-8">ADD PRODUCTS</h1>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 border p-6 rounded-md shadow-sm bg-white"
          >
            {/* Image Upload */}
            <div>
              <label className="block text-lg font-medium mb-2">
                Upload Product Images
              </label>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageChange}
                className="mb-4"
              />
              <div className="flex flex-wrap gap-4">
                {imagePreviews.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`preview-${index}`}
                    className="w-24 h-24 object-cover rounded-md border"
                  />
                ))}
              </div>
            </div>

            {/* Name */}
            <div>
              <label className="block text-lg font-medium mb-1">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
                className="w-full border px-4 py-2 rounded-md focus:outline-none"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-lg font-medium mb-1">
                Description
              </label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter description"
                className="w-full border px-4 py-2 rounded-md focus:outline-none"
              />
            </div>

            {/* ✅ New Checkboxes */}
            <div>
              <label className="block text-lg font-medium mb-2">
                Select Fields
              </label>
              <div className="flex gap-6">
                <label>
                  <input
                    type="checkbox"
                    checked={fields.includes("Reiki")}
                    onChange={() => handleCheckboxChange("Reiki")}
                    className="mr-2"
                  />
                  Reiki
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={fields.includes("Astrology")}
                    onChange={() => handleCheckboxChange("Astrology")}
                    className="mr-2"
                  />
                  Astrology
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={fields.includes("Yoga")}
                    onChange={() => handleCheckboxChange("Yoga")}
                    className="mr-2"
                  />
                  Yoga
                </label>
              </div>
            </div>

            {/* Delivery Info */}
            <div>
              <label className="block text-lg font-medium mb-1">
                Delivery Info
              </label>
              <input
                type="text"
                value={deliveryInfo}
                onChange={(e) => setDeliveryInfo(e.target.value)}
                placeholder="Enter delivery info"
                className="w-full border px-4 py-2 rounded-md"
              />
            </div>

            {/* On Sale */}
            <div>
              <label className="block text-lg font-medium mb-1">On Sale</label>
              <select
                value={onSale}
                onChange={(e) => setOnSale(e.target.value)}
                className="w-full border px-4 py-2 rounded-md"
              >
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>

            {/* ✅ Price */}
            <div>
              <label className="block text-lg font-medium mb-1">Price</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                placeholder="Enter product price"
                className="w-full border px-4 py-2 rounded-md"
              />
            </div>

            {/* Price Drop */}
            <div>
              <label className="block text-lg font-medium mb-1">
                Price Drop
              </label>
              <input
                type="number"
                value={priceDrop}
                onChange={(e) => setPriceDrop(Number(e.target.value))}
                placeholder="Enter discount (amount or %)"
                className="w-full border px-4 py-2 rounded-md"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md text-lg font-semibold hover:bg-gray-800"
            >
              ADD PRODUCT
            </button>
          </form>

          {/* Success / Error Message */}
          {successMessage && (
            <div
              className={`mt-6 p-4 rounded-lg shadow-md text-center border transition-all duration-300 ${
                successMessage.includes("successfully")
                  ? "bg-green-100 text-green-800 border-green-300"
                  : "bg-red-100 text-red-800 border-red-300"
              }`}
            >
              {successMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
