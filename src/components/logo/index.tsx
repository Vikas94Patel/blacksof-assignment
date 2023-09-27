import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className={"flex items-center"}>
      <img src={"/images/logo.png"} width={40} height={40} alt={"Logo"} />
      <p className={"text-white text-lg font-bold"}>TECH</p>
    </Link>
  );
};

export default Logo;
