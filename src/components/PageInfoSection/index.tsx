const PageInfoSection = ({ title }: { title: string }) => {
  return (
    <div
      className={
        "flex items-center justify-center w-full min-h-[calc(100vh-100px)]"
      }
    >
      <h1 className={"text-[40px] bg-black "}>{title}</h1>
    </div>
  );
};

export default PageInfoSection;
