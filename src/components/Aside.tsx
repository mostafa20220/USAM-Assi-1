import Logo from "./Logo";

type AsideProps = {
  children: React.ReactNode;
};

export default function Aside({ children }: Readonly<AsideProps>) {
  return (
    <aside className=" sm:h-full h-[30%] flex flex-col bg-[var(--color-brand-primary)]">
      <Logo style="w-24 h-auto mx-4 my-2 sm:mb-0 mb-4 " type="secondary" />

      <div className="flex justify-center my-auto sm:flex-row pb-4">
        {children}
      </div>
    </aside>
  );
}
