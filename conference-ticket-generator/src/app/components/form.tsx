"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";

const Form = () => {
  const router = useRouter();
  const [fileName, setFileName] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    github: "",
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFileName(file.name);
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setFileName("");
      setImagePreview(null);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGenerateTicket = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (imagePreview) {
      localStorage.setItem("ticketUserImage", imagePreview);
    } else {
      localStorage.removeItem("ticketUserImage");
    }
    
    router.push(
      `/success?name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(
        formData.email
      )}&github=${encodeURIComponent(formData.github)}`
    );
  };

  return (
    <div className="py-10 w-full px-4 sm:px-6 md:px-8">
      <form className="flex flex-col justify-center items-center gap-4 max-w-3xl mx-auto">
        <div className="flex flex-col gap-1 text-white w-full max-w-md">
          <label htmlFor="pic" className="mb-2">
            Upload Avatar
          </label>
          <div className="relative mb-4 p-2 rounded-lg border-white border-dashed border w-full h-30 flex items-center justify-center bg-white/10 backdrop-blur-md">
            <input
              type="file"
              id="pic"
              name="pic"
              accept="image/*"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              onChange={handleFileChange}
              ref={fileInputRef}
            />
            {imagePreview ? (
              <div className="w-24 h-24 rounded-full overflow-hidden">
                <img 
                  src={imagePreview} 
                  alt="Avatar preview" 
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="text-center text-gray-500 py-6">
                {fileName ? fileName : "Drag and drop or click to upload"}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2 text-white w-full max-w-md">
          <label htmlFor="name">Full name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="mb-4 w-full border border-gray-300 rounded-lg p-2 bg-white/10 backdrop-blur-md focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            value={formData.name}
            onChange={handleInputChange}
            required
            placeholder="Your full name"
          />
        </div>
        <div className="flex flex-col gap-2 text-white w-full max-w-md">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Example@email.com"
            className="mb-4 w-full border border-gray-300 rounded-lg p-2 bg-white/10 backdrop-blur-md focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2 text-white w-full max-w-md">
          <label htmlFor="github">GitHub UserName</label>
          <input
            type="text"
            id="github"
            name="github"
            placeholder="@githubusername"
            className="mb-4 w-full border border-gray-300 rounded-lg p-2 bg-white/10 backdrop-blur-md focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            value={formData.github}
            onChange={handleInputChange}
            required
          />
        </div>

        <button
          type="submit"
          onClick={handleGenerateTicket}
          disabled={!fileName || !formData.name || !formData.email || !formData.github}
          className="bg-[#85B79D] hover:bg-[#6B9A7E] disabled:bg-gray-400 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 w-full max-w-md"
        >
          Generate Ticket
        </button>
      </form>
    </div>
  );
};

export default Form;
