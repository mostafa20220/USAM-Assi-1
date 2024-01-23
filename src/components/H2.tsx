type H2Props = {
  children: React.ReactNode;
  style?: string;
};

export default function H2({style, children }: Readonly<H2Props>) {
  return (
    <h2 className={`text-[var(--color-brand-primary)] text-2xl mb-8  ${style}`} >
      {children}
    </h2>
  )
}