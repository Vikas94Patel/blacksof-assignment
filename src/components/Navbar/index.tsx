import Logo from "@/components/logo";
import NavLinks from "@/components/NavLinks";
import Button from "@/components/Button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div
      className={
        "flex justify-between items-center p-[20px] sm:px-[60px] sm:pt-[40px]"
      }
    >
      <Logo />
      <div className={"hidden sm:flex"}>
        <NavLinks />
      </div>
      <Link href={"/contact-us"}>
        <Button text={"Contact us"} bgColor={"bg-grey-light"} showArrow />
      </Link>
    </div>
  );
};

export default Navbar;
