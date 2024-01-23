import Logo from "./Logo";

type AsideProps = {
  children: React.ReactNode;
};

export default function Aside({ children }: Readonly<AsideProps>) {
  return (
    <aside className=" h-full flex flex-col bg-[var(--color-brand-primary)]">
      <Logo style="w-24 h-auto mx-4 my-2" type="secondary" />
      {children}
    </aside>
  );
}
