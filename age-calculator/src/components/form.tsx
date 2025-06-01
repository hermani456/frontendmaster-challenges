import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface FormFields {
  day: string;
  month: string;
  year: string;
}

const schema = z.object({
  day: z
    .string()
    .refine(
      (val) => val !== "" && !isNaN(parseInt(val)),
      "This field is required"
    )
    .refine((val) => {
      const num = parseInt(val);
      return num >= 1 && num <= 31;
    }, "Day must be between 1 and 31"),
  month: z
    .string()
    .refine(
      (val) => val !== "" && !isNaN(parseInt(val)),
      "This field is required"
    )
    .refine((val) => {
      const num = parseInt(val);
      return num >= 1 && num <= 12;
    }, "Month must be between 1 and 12"),
  year: z
    .string()
    .refine(
      (val) => val !== "" && !isNaN(parseInt(val)),
      "This field is required"
    )
    .refine((val) => {
      const num = parseInt(val);
      return num >= 1900 && num <= new Date().getFullYear();
    }, `Year must be between 1900 and ${new Date().getFullYear()}`),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormFields) => {
    const numericData = {
      day: parseInt(data.day),
      month: parseInt(data.month),
      year: parseInt(data.year),
    };
    console.log(numericData);
  };

  return (
    <form
      className="max-w-xl bg-white h-32 rounded-xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex gap-4 p-4">
        <div className="flex flex-col">
          <label
            htmlFor="day"
            className="tracking-widest text-gray-500 font-semibold"
          >
            DAY
          </label>
          <input
            {...register("day")}
            type="text"
            inputMode="numeric"
            id="day"
            placeholder="DD"
            className={`border rounded-md p-3 w-32 font-semibold text-xl${
              errors.day ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.day && (
            <span className="text-red-500 text-xs mt-1">{errors.day.message}</span>
          )}
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="month"
            className="tracking-widest text-gray-500 font-semibold"
          >
            MONTH
          </label>
          <input
            {...register("month")}
            type="text"
            inputMode="numeric"
            id="month"
            placeholder="MM"
            className={`border rounded-md p-3 w-32 font-semibold text-xl${
              errors.month ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.month && (
            <span className="text-red-500 text-xs mt-1">{errors.month.message}</span>
          )}
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="year"
            className="tracking-widest text-gray-500 font-semibold"
          >
            YEAR
          </label>
          <input
            {...register("year")}
            type="text"
            inputMode="numeric"
            id="year"
            placeholder="YYYY"
            className={`border rounded-md p-3 w-32 font-semibold text-xl ${
              errors.year ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.year && (
            <span className="text-red-500 text-xs mt-1">{errors.year.message}</span>
          )}
        </div>
      </div>
      <div className="flex justify-end p-4">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
