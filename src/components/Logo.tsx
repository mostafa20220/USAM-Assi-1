type LogoProps = {
  style?: string;
  type?: "primary" | "secondary";
};

export default function Logo({style,type="primary"}: Readonly<LogoProps>) {
  return (

    <a className={`w-14 h-auto inline-block ${style}`} href="/">

      <img src={`/logo-${type=="primary" ? "green":"white"}.svg`} alt="logo" />{" "}
    </a>
  );
}
