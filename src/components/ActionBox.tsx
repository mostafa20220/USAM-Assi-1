type ActionBoxProps = {
  title: string;
  description?: string;
  icon?: string;
  iconStyle?: string;
  className?: string;
  children?: React.ReactNode;
  cv?: boolean;
};

export default function ActionBox({
  title,
  description,
  icon,
  iconStyle,
  className,
  children,
  cv=false,
}: Readonly<ActionBoxProps>) {
  return (
    <div
      className={` pb-4 sm:pt-1 ${cv ? "p-1  sm-p-1" : "sm:py-6"}  px-3  sm:px-3 rounded-2xl flex gap-2 sm:gap-4 justify-center ${cv ? "items-start h-fit" : "items-center"} shadow-md ${className} `}
    >
      {icon && (
        <img
          className={` w-6 sm:w-8 h-auto  ${iconStyle} `}
          src={icon}
          alt="❔"
        />
      )}
      <div
        className={`flex w-full flex-col gap-1 sm:gap-2 ${
          icon || cv ? "text-left" : "text-center"
        } `}
      >
        <h3 className={` ${cv ? "text-xs" : ""} ${icon || cv ? "font-semibold  sm:text-start" : ""}`}> {title} </h3>
        {description && (
          <p className={`${cv ? "text-stone-600" : ""}  font-light mb-1 sm:mb-2  ${icon ? "font-light mb-[0] sm:mb-[0] " : ""}`}>
            {description}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}
