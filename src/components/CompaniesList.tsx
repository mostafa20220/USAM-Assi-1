import H2 from "./H2";

type CompaniesProps = {
  title: string;
  children: React.ReactNode;
};

export default function CompaniesList({ title, children }: Readonly<CompaniesProps>) {
  return (
    <div>
      <H2>{title}</H2>
      <ul className=" grid grid-cols-2  md:flex md:flex-wrap px-8 py-8 justify-around items-center bg-[var(--color-brand-primary)] gap-14 gap-y-6 md:gap-y-14">
        {children} 
      </ul>
    </div>
  );
}
