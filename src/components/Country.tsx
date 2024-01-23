type CountryProps = {
  name: string;
  jobs: number;
  flag: string;
};

export default function Country({ name, jobs, flag }: Readonly<CountryProps>) {
  return (
    <div className={`flex flex-col items-center justify-center space-y-4 bg-[url(${flag})]  rounded-2xl"`}>
      <h3 className="font-bold">{name}</h3>
      <p className="text-gray-600 text-sm">{jobs} Jobs</p>
    </div>
  );
}
