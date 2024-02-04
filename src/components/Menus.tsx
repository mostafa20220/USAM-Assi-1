import { createContext, useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import useClickOutside from "../hooks/useClickOutside";

type PropsType = {
  children: React.ReactNode;
};

const MenusContext = createContext<{
  openList: string;
  open: (list: string) => void;
  close: () => void;
  position: DOMRect | null;
  setPosition: React.Dispatch<React.SetStateAction<DOMRect | null>>;
  el: HTMLElement | null;
  setEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
}>({
  openList: "",
  open: () => {},
  close: () => {},
  position: null,
  setPosition: () => {},
  el: null,
  setEl: () => {},
});

function Menus({ children }: Readonly<PropsType>) {
  const [openList, setOpenList] = useState<string>("");
  const [position, setPosition] = useState(null);

  const [el, setEl] = useState<HTMLElement | null>(null);

  const open = setOpenList;
  const close = () => setOpenList("");

  return (
    <MenusContext.Provider
      value={{ openList, open, close, position, setPosition, el, setEl }}
    >
      {children}
    </MenusContext.Provider>
  );
}

type TogglePropsType = {
  list: string;
  children: React.ReactNode;
};

function Toggle({ list, children }: Readonly<TogglePropsType>) {
  const { openList, open, close, setPosition, setEl } =
    useContext(MenusContext);

  const toggle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log("openList", openList, "list", list);
    if (openList && openList === list) close();
    else {
      const btnEl = (e.target as HTMLButtonElement).closest(
        "button"
      ) as HTMLButtonElement;
      open(list);
      setPosition(btnEl.getBoundingClientRect());

      setEl(btnEl);

      console.log(openList);
    }
  };

  return (
    <button
      className="bg-none border-none p-2 rounded-sm transform translate-x-2 transition-all duration-200 hover:bg-gray-100 hover:rounded-full mr-2 flex items-center content-center  relative pr-3 "
      onClick={toggle}
    >
      {children}
      <img
        className="absolute h-2 right-0"
        src="/down-icon.png"
        alt="down-icon"
      />
    </button>
  );
}

type ListPropsType = {
  children: React.ReactNode;
  name: string;
};

function List({ children, name }: ListPropsType) {
  const { openList, setPosition, position, close, el } =
    useContext(MenusContext);
  const ref = useClickOutside(close);

  const pos = {
    x: window.innerWidth - position?.right,
    y: position?.y + position?.height + 8,
  };

  //* 1 Solution: //? This solution is better because it will close the menu when the user scrolls
  useEffect(() => {
    document.addEventListener("scroll", close);

    return () => document.removeEventListener("scroll", close);
  }, []);

  //* 2 Solution: //? This solution is not good because it will re-render the component every time the scroll event is triggered
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setPosition(el?.getBoundingClientRect());
  //   };
  //   document.addEventListener("scroll", handleScroll);

  //   return () => document.removeEventListener("scroll", handleScroll);
  // }, [el, setPosition]);

  if (openList !== name) return null;

  return createPortal(
    <ul
      style={{ top: `${pos.y}px`, right: `${pos.x}px` }}
      className={`fixed  bg-gray-50 drop-shadow-lg rounded-b-3xl shadow-md z-50`}
      ref={ref}
    >
      {children}
    </ul>,
    document.body
  );
}

type ButtonProps = {
  children: React.ReactNode;
  icon?: string;
  onClick?: () => void;
};

function Button({ children, onClick, icon }: Readonly<ButtonProps>) {
  const { close } = useContext(MenusContext);

  const handleClick = () => {
    onClick?.();
    close();
  };

  return (
    <li>
      <button
        className="w-full text-left bg-none border-none sm:pr-20 p-4  text-xs transition-all duration-200 hover:bg-gray-200 flex items-center content-center relative pl-8 sm:pl-10 hover:overflow-hidden hover:rounded-3xl"
        onClick={handleClick}
      >
        {children}
        {icon && (
          <img className="absolute h-3 left-3 sm:left-5  " src={icon} alt="down-icon" />
        )}
      </button>
    </li>
  );
}

export default Menus;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;
