interface AgeDisplayProps {
  age: {
    years: number | string;
    months: number | string;
    days: number | string;
  };
}

const AgeDisplay = ({ age }: AgeDisplayProps) => {
  return (
    <div className="flex flex-col justify-center">
      <div className="text-5xl md:text-8xl font-extrabold italic">
        <p className="flex items-baseline">
          <span className="text-[#854dff]">{age.years}</span>
          <span className="ml-2">years</span>
        </p>
        <p className="flex items-baseline">
          <span className="text-[#854dff]">{age.months}</span>
          <span className="ml-2">months</span>
        </p>
        <p className="flex items-baseline">
          <span className="text-[#854dff]">{age.days}</span>
          <span className="ml-2">days</span>
        </p>
      </div>
    </div>
  );
};

export default AgeDisplay;
