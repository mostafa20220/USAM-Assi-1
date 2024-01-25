type LogoProps = {
  style?: string;
  type?: "primary" | "secondary";
};

export default function Logo({style,type="primary"}: Readonly<LogoProps>) {
  return (

    <a className={`w-14 md:w-32 h-auto flex items-start justify-center ${style}`} href="/">

      <img className="w-full h-auto" src={`/logo-${type=="primary" ? "green":"white"}.svg`} alt="logo" />{" "}
    </a>
  );
}
