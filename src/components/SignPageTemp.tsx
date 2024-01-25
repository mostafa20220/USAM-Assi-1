type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function SignPageTemp({ children, className }: Readonly<Props>) {
  return (
    <div
      className={`h-full sm:grid grid-cols-[5.2fr_6fr] gap-x-4 ${className}`}
    >
      {children}
    </div>
  );
}
