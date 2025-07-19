"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const Form = () => {
  const schema = z.object({
    name: z.string().min(1, "This field is required"),
    lastName: z.string().min(1, "This field is required"),
    email: z.email("Please enter a valid email address"),
    message: z.string().min(1, "This field is required"),
    agree: z.boolean().refine((val) => val === true, {
      message: "To submit this form, please consent to being contacted",
    }),
  });

  type formSchema = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<formSchema>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: formSchema) => {
    console.log(data);
    // Handle form submission logic here
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-3"
            >
              First Name
            </label>
            <input
              {...register("name")}
              type="text"
              id="name"
              className={`border border-gray-300 p-2 rounded-md w-full cursor-pointer focus:outline-none ${
                errors.name
                  ? "border-red-500"
                  : "hover:border-[#0c7d69] focus:border-[#0c7d69]"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700 mb-3"
            >
              Last Name
            </label>
            <input
              {...register("lastName")}
              type="text"
              id="lastName"
              className={`border border-gray-300 p-2 rounded-md w-full cursor-pointer focus:outline-none ${
                errors.lastName
                  ? "border-red-500"
                  : "hover:border-[#0c7d69] focus:border-[#0c7d69]"
              }`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>
        <div className="mt-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-3"
          >
            Email Address
          </label>
          <input
            {...register("email")}
            id="email"
            className={`border border-gray-300 p-2 rounded-md w-full cursor-pointer focus:outline-none ${
              errors.name
                ? "border-red-500"
                : "hover:border-[#0c7d69] focus:border-[#0c7d69]"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Query Type *
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-300 rounded-md p-3 hover:border-[#0c7d69] cursor-pointer">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="queryType"
                  value="general"
                  className="mr-3 accent-[#0c7d69]"
                />
                <span className="text-gray-700">General Enquiry</span>
              </label>
            </div>
            <div className="border border-gray-300 rounded-md p-3 hover:border-[#0c7d69] cursor-pointer">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="queryType"
                  value="support"
                  className="mr-3 accent-[#0c7d69]"
                />
                <span className="text-gray-700">Support Request</span>
              </label>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-3"
          >
            Message
          </label>
          <textarea
            {...register("message")}
            id="message"
            rows={4}
            className={`border border-gray-300 p-2 rounded-md w-full cursor-pointer focus:outline-none ${
              errors.message
                ? "border-red-500"
                : "hover:border-[#0c7d69] focus:border-[#0c7d69]"
            }`}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>
        <div>
          <div>
            <div className="flex items-center mt-4">
              <input
                {...register("agree")}
                type="checkbox"
                id="agree"
                className="mr-2 accent-[#0c7d69] cursor-pointer"
              />
              <label
                htmlFor="agree"
                className="text-sm text-gray-700 cursor-pointer"
              >
                I consent to being contacted by the team
              </label>
            </div>
            {errors.agree && (
              <p className="text-red-500 text-sm mt-1">
                {errors.agree.message}
              </p>
            )}
          </div>
        </div>
        <div className="mt-6">
          <button
            disabled={isSubmitting}
            type="submit"
            className="mt-6 bg-[#0c7d69] w-full text-white px-4 py-2 rounded-md hover:bg-[#0a5f54] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0c7d69] focus:ring-opacity-50"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
