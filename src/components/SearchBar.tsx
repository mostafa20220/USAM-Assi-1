type SearchBarProps = {
  text?: string;
  icon?: string;
  width?: "small" | "medium" | "large";
};

export default function SearchBar({ text, icon, width="small"}: 
Readonly<SearchBarProps>) {

  const style = width === "small" ? "w-44" : width === "medium" ? "w-60" : "w-96" 
    
  return (

    <div className="mb-2">
      <input className={` bg-[url("${icon}")] bg-no-repeat bg-[center_right_0.5rem]  bg-[length:20px_20px] px-4 py-2 drop-shadow-lg rounded-2xl ${style}`} type="search" placeholder={text} />
    </div>
    
  );
}
