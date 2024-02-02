import Button from "./Button";

type LogoProps = {
  style?: string;
  type?: "primary" | "secondary";
};

export default function Logo({ style, type = "primary" }: Readonly<LogoProps>) {
  return (
    <Button
      className={`w-14 
    sm:w-20 
    mdd:w-32
     h-auto flex items-start justify-center pr-2 ${style}`}
      type="secondary"
      to="/"
    >
      <img
        className="w-full h-auto"
        src={`/logo-${type == "primary" ? "green" : "white"}.svg`}
        alt="logo"
      />{" "}
    </Button>
  );
}
