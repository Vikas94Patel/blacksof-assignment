const Button = ({
  text,
  bgColor,
  showArrow,
  onClick,
  className,
}: {
  text: string;
  onClick: () => void;
  bgColor?: string;
  showArrow?: boolean;
  className?: string;
}) => {
  return (
    <div className={`flex items-center ${className}`} onClick={onClick}>
      <button
        className={`${bgColor} transition duration-300 inline-block px-[32px] rounded-[48px] h-[40px] hover:bg-white hover:text-black`}
      >
        {text}
      </button>
      {showArrow && (
        <div
          className={`${bgColor} transition duration-300 rounded-full w-[40px] h-[40px] flex items-center justified-center ml-[4px] hover:border-2 hover:border-white`}
        >
          <img
            src={"/images/arrow.png"}
            width={16}
            height={16}
            alt={"Arrow"}
            className={"m-auto"}
          />
        </div>
      )}
    </div>
  );
};

export default Button;
