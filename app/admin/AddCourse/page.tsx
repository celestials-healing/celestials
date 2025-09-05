'use client';

import { useState, ChangeEvent, FormEvent } from 'react';

type CourseFormData = {
  title: string;
  description: string;
  bulletPoints: string[];
  originalPrice: string;
  discountedPrice: string;
  fields: string[]; // Add fields array
};

const CourseForm = () => {
  const [formData, setFormData] = useState<CourseFormData>({
    title: '',
    description: '',
    bulletPoints: [''],
    originalPrice: '',
    discountedPrice: '',
    fields: [], // Initialize empty fields array
  });

  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Available field options
  const fieldOptions = ['Reiki', 'Astrology', 'Yoga'];

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index?: number
  ) => {
    const { name, value } = e.target;

    if (name === 'bulletPoints' && index !== undefined) {
      const updatedPoints = [...formData.bulletPoints];
      updatedPoints[index] = value;
      setFormData({ ...formData, bulletPoints: updatedPoints });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle field selection (checkbox)
  const handleFieldChange = (field: string) => {
    const updatedFields = formData.fields.includes(field)
      ? formData.fields.filter(f => f !== field)
      : [...formData.fields, field];
    
    setFormData({ ...formData, fields: updatedFields });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const fileArray = Array.from(files);
    setImages(fileArray);

    const previews = fileArray.map(file => URL.createObjectURL(file));
    setImagePreviews(previews);
  };

  const addBulletPoint = () => {
    setFormData({ ...formData, bulletPoints: [...formData.bulletPoints, ''] });
  };

  const removeBulletPoint = (index: number) => {
    const updatedPoints = [...formData.bulletPoints];
    updatedPoints.splice(index, 1);
    setFormData({ ...formData, bulletPoints: updatedPoints });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessage(null); // Clear any previous messages

    try {
      const base64Images = await Promise.all(
        images.map((file) => {
          return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (err) => reject(err);
          });
        })
      );

      const courseData = {
        ...formData,
        images: base64Images,
      };

      const res = await fetch("/api/courses/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(courseData),
      });

      await res.json();

      if (res.ok) {
        setSuccessMessage("🎉 Course added successfully!");
        setFormData({
          title: '',
          description: '',
          bulletPoints: [''],
          originalPrice: '',
          discountedPrice: '',
          fields: [], // Reset fields
        });
        setImages([]);
        setImagePreviews([]);
      } else {
        setSuccessMessage("❌ Failed to add course. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting course:", err);
      setSuccessMessage("Something went wrong while submitting the course.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f6cf92] to-white py-10 px-4 text-[#4A1A11]">
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto p-6 rounded-lg shadow space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-[#4A1A11]">Add / Edit Course</h2>

        {/* Title */}
        <div className="text-[#4A1A11]">
          <label className="block font-semibold mb-1">Course Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        {/* Fields Section */}
        <div>
          <label className="block font-semibold mb-2">Course Categories</label>
          <div className="flex flex-wrap gap-4">
            {fieldOptions.map((field) => (
              <label key={field} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.fields.includes(field)}
                  onChange={() => handleFieldChange(field)}
                  className="w-4 h-4 text-[#4A1A11] border-gray-300 rounded focus:ring-[#4A1A11]"
                />
                <span className="text-sm font-medium">{field}</span>
              </label>
            ))}
          </div>
          {formData.fields.length > 0 && (
            <div className="mt-2">
              <span className="text-sm text-gray-600">
                Selected: {formData.fields.join(', ')}
              </span>
            </div>
          )}
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-lg font-medium mb-2">Upload Course Images</label>
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

        {/* Description */}
        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-2 rounded h-40"
            required
          />
        </div>

        {/* Bullet Points */}
        <div>
          <label className="block font-semibold mb-2">Key Learnings</label>
          {formData.bulletPoints.map((point, index) => (
            <div key={index} className="flex items-center space-x-2 mb-2">
              <input
                type="text"
                name="bulletPoints"
                value={point}
                onChange={(e) => handleChange(e, index)}
                className="w-full border p-2 rounded"
              />
              <button
                type="button"
                onClick={() => removeBulletPoint(index)}
                className="text-red-500 font-bold"
              >
                ✕
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addBulletPoint}
            className="mt-2 px-4 py-1 bg-[#4A1A11] text-white rounded"
          >
            + Add Point
          </button>
        </div>

        {/* Pricing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold mb-1">Original Price (₹)</label>
            <input
              type="number"
              name="originalPrice"
              value={formData.originalPrice}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Discounted Price (₹)</label>
            <input
              type="number"
              name="discountedPrice"
              value={formData.discountedPrice}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="mt-4 px-6 py-3 bg-[#4A1A11] text-white rounded hover:bg-gray-800 transition"
          >
            Save Course
          </button>
        </div>
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
  );
};

export default CourseForm;