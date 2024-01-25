type CountryProps = {
  name: string;
  jobs: number;
  flag: string;
};

export default function Country({ name, jobs, flag }: Readonly<CountryProps>) {
  return (
    <a href="#" className="relative min-h-20 rounded-3xl flex items-center justify-center">
      <img
        src={flag}
        className={`absolute h-20 w-36 rounded-3xl opacity-35`}
        alt={name}
      />
      <div
        className={`flex flex-col items-center justify-center opacity-100 space-y-2`}
      >
        <h3 className=" text-sm font-black">{name}</h3>
        <p className="text-gray-600  font-semibold text-xs">{jobs} Jobs</p>
      </div>
    </a>
  );
}
