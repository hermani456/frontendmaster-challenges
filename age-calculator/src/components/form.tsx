import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import icon from "../assets/icon-arrow.svg";

export interface FormFields {
  day: string;
  month: string;
  year: string;
}

export interface FormProps {
  onCalculateAge: (day: number, month: number, year: number) => void;
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
    }, "Must be a valid day"),
  month: z
    .string()
    .refine(
      (val) => val !== "" && !isNaN(parseInt(val)),
      "This field is required"
    )
    .refine((val) => {
      const num = parseInt(val);
      return num >= 1 && num <= 12;
    }, "Must be a valid month"),
  year: z
    .string()
    .refine(
      (val) => val !== "" && !isNaN(parseInt(val)),
      "This field is required"
    )
    .refine((val) => {
      const num = parseInt(val);
      return num >= 1900 && num <= new Date().getFullYear();
    }, `Must be a valid year`),
});

const Form = ({ onCalculateAge }: FormProps) => {
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

    onCalculateAge(numericData.day, numericData.month, numericData.year);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mb-1">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="day"
            className={`tracking-[0.2em] text-[#716f6f] font-bold text-xs ${
              errors.day ? "text-red-500" : ""
            }`}
          >
            DAY
          </label>
          <input
            {...register("day")}
            type="text"
            inputMode="numeric"
            id="day"
            placeholder="DD"
            className={`border rounded-lg py-3 px-4 w-full font-bold text-xl md:text-2xl focus:outline-none focus:border-[#854dff] ${
              errors.day ? "border-red-500" : "border-[#dbdbdb]"
            }`}
          />
          {errors.day && (
            <span className="text-red-500 text-xs italic mt-1">
              {errors.day.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="month"
            className={`tracking-[0.2em] text-[#716f6f] font-bold text-xs ${
              errors.month ? "text-red-500" : ""
            }`}
          >
            MONTH
          </label>
          <input
            {...register("month")}
            type="text"
            inputMode="numeric"
            id="month"
            placeholder="MM"
            className={`border rounded-lg py-3 px-4 w-full font-bold text-xl md:text-2xl focus:outline-none focus:border-[#854dff] ${
              errors.month ? "border-red-500" : "border-[#dbdbdb]"
            }`}
          />
          {errors.month && (
            <span className="text-red-500 text-xs italic mt-1">
              {errors.month.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="year"
            className={`tracking-[0.2em] text-[#716f6f] font-bold text-xs ${
              errors.year ? "text-red-500" : ""
            }`}
          >
            YEAR
          </label>
          <input
            {...register("year")}
            type="text"
            inputMode="numeric"
            id="year"
            placeholder="YYYY"
            className={`border rounded-lg py-3 pl-4 w-full font-bold text-xl md:text-2xl focus:outline-none focus:border-[#854dff] ${
              errors.year ? "border-red-500" : "border-[#dbdbdb]"
            }`}
          />
          {errors.year && (
            <span className="text-red-500 text-xs italic mt-1">
              {errors.year.message}
            </span>
          )}
        </div>
      </div>
      
      <div className="relative py-1">
        <div className="absolute left-0 right-0 h-[1px] top-1/2 bg-[#dbdbdb]"></div>
        <div className="flex justify-center md:justify-end">
          <button type="submit" className="relative z-10 cursor-pointer">
            <img
              src={icon}
              alt="Submit"
              className="size-[65px] md:size-[75px] bg-[#854dff] rounded-full p-4 hover:bg-black transition-colors duration-300"
            />
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
