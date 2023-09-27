"use client";
import Button from "@/components/Button";

const Input = ({
  required,
  type,
  placeholder,
  onChange,
  className,
}: {
  onChange?: () => void;
  placeholder?: string;
  className?: string;
  required?: boolean;
  type?: string;
}) => {
  return (
    <input
      required
      type={type || "text"}
      placeholder={placeholder}
      className={`bg-transparent border-b-2 border-[#3A3D45] border-solid placeholder-[#3A3D45] mt-[44px] text-black focus:outline-none ${className}`}
      onChange={onChange}
    />
  );
};

const Form = () => {
  const HandleFormSubmit = () => {};

  return (
    <form
      className={
        "flex flex-col w-full min-h-full bg-grey-gradient rounded-[20px] py-[50px] px-[28px]"
      }
    >
      <div className={"text-black font-bold"}>Fill out the form.</div>
      <div className={"text-black"}>
        Our team will touch base with you within 24 hours.
      </div>
      <div className={"flex justify-between flex-wrap mb-[44px]"}>
        <Input
          required
          type={"text"}
          placeholder={"Full Name*"}
          className={"w-[48%] pb-[6px]"}
        />
        <Input
          required
          type={"email"}
          placeholder={"Email ID*"}
          className={"w-[48%] pb-[6px]"}
        />
        <Input
          type={"text"}
          placeholder={"Country"}
          className={"w-[48%] pb-[6px]"}
        />
        <Input
          type={"number"}
          placeholder={"Contact Number"}
          className={"w-[48%] pb-[6px]"}
        />
        <Input
          required
          type={"text"}
          placeholder={"Tell us your requirement*"}
          className={"w-full pb-[6px]"}
        />
      </div>
      <Button
        text={"Submit"}
        bgColor={"bg-black"}
        showArrow
        className={"cursor-pointer hover:"}
        onClick={HandleFormSubmit}
      />
    </form>
  );
};

export default Form;
