type CompanyProps = {
  name: string;
  logo: string;
  jobs: number;
};

export default function Company({name, logo, jobs}: Readonly<CompanyProps>) {
  return (
    <div className="flex flex-col md:grid grid-cols-[1fr_2fr] items-center justify-center rounded-[30px] gap-1 p-2 bg-white">
      <img className="row-span-full w-20 h-auto " src={logo} alt={name} />
      <div className="flex flex-col justify-center md:items-start gap-3">
        <h3 className="font-bold md:text-base text-sm">{name}</h3>
        <p className="text-gray-600 text-sm">{jobs} Jobs</p>
      </div>
    </div>
  )
}