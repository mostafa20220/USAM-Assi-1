type SearchBarProps = {
  text?: string;
  icon?: string;
  width?: "small" | "medium" | "large";
  className?: string;
};

export default function SearchBar({
  text,
  icon,
  className,
  width = "small",
}: Readonly<SearchBarProps>) {
  const style =
    width === "small" ? "w-44" : width === "medium" ? "w-60" : "w-96";

  return (
    <div className={`mb-2 relative w-full min-w-28 ${className}`}>
      <input
        className={` bg-[url("${icon}")] bg-no-repeat bg-[center_right_0.5rem]  bg-[length:20px_20px] px-4 py-2 drop-shadow-lg w-full rounded-2xl ${style}`}
        type="search"
        placeholder={text}
      />
      <img className="w-4 md:w-5 h-auto absolute z-10 top-1.5 md:top-1 right-1.5" src={icon} alt="❔" />
    </div>
  );
}
