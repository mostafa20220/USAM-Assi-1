import H2 from "./H2";

type CountriesListProps = {
  title: string;
  children: React.ReactNode;
};

export default function CountriesList({ title, children }: Readonly<CountriesListProps>) {
  return (
    <>
      <H2>{title}</H2>
      <ul className="grid grid-cols-3 gap-y-8 px-8">
        {children} 
      </ul>
    </>
  );
}