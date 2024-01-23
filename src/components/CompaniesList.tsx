import H2 from "./H2";

type CompaniesProps = {
  title: string;
  children: React.ReactNode;
};

export default function CompaniesList({ title, children }: Readonly<CompaniesProps>) {
  return (
    <div>
      <H2>{title}</H2>
      <ul className=" flex px-8 py-8 justify-around items-center bg-[var(--color-brand-primary)] gap-x-14">
        {children} 
      </ul>
    </div>
  );
}
