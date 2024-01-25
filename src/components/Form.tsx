type FormProps = {
  children: React.ReactNode,
  className?:string,
};

export default function Form({children, className}:Readonly<FormProps>) {
  return (
    <form className={` h-[60%] sm:h-full flex flex-col justify-center items-center gap-4 px-8 py-6 text-[0.5rem] ${className}`}>
      {children}
    </form>
  );
}
