"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  github: z.string().min(1, "GitHub username is required"),
});

type FormSchema = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchema>({
    resolver: zodResolver(schema),
  });

  const router = useRouter();
  const [fileName, setFileName] = useState<string>("");
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

  const onSubmit: SubmitHandler<FormSchema> = (data) => {
    if (imagePreview) {
      localStorage.setItem("ticketUserImage", imagePreview);
    } else {
      localStorage.removeItem("ticketUserImage");
    }

    router.push(
      `/success?name=${encodeURIComponent(
        data.name
      )}&email=${encodeURIComponent(data.email)}&github=${encodeURIComponent(
        data.github
      )}`
    );
  };

  return (
    <div className="py-10 w-full px-4 sm:px-6 md:px-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center gap-4 max-w-3xl mx-auto"
      >
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
            {...register("name")}
            type="text"
            id="name"
            className={`w-full border rounded-lg p-2 bg-white/10 backdrop-blur-md focus:outline-none focus:ring-2 ${
              errors.name
                ? "border-yellow-500 focus:ring-yellow-500/50"
                : "border-gray-300 focus:border-purple-500 focus:ring-purple-500/50"
            }`}
            placeholder="Your full name"
          />
          {errors.name && (
            <p className="text-yellow-500 font-semibold text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2 text-white w-full max-w-md">
          <label htmlFor="email">Email Address</label>
          <input
            {...register("email")}
            type="text"
            id="email"
            placeholder="Example@email.com"
            className={`w-full border rounded-lg p-2 bg-white/10 backdrop-blur-md focus:outline-none focus:ring-2 ${
              errors.email
                ? "border-yellow-500 focus:ring-yellow-500/50"
                : "border-gray-300 focus:border-purple-500 focus:ring-purple-500/50"
            }`}
          />
          {errors.email && (
            <p className="text-yellow-500 font-semibold text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2 text-white w-full max-w-md">
          <label htmlFor="github">GitHub UserName</label>
          <input
            {...register("github")}
            type="text"
            id="github"
            placeholder="@githubusername"
            className={`w-full border rounded-lg p-2 bg-white/10 backdrop-blur-md focus:outline-none focus:ring-2 ${
              errors.github
                ? "border-yellow-500 focus:ring-yellow-500/50"
                : "border-gray-300 focus:border-purple-500 focus:ring-purple-500/50"
            }`}
          />
          {errors.github && (
            <p className="text-yellow-500 font-semibold text-sm mt-1">{errors.github.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#88c3a5] hover:bg-[#6B9A7E] disabled:bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 w-full max-w-md mt-4"
        >
          Generate Ticket
        </button>
      </form>
    </div>
  );
};

export default Form;
