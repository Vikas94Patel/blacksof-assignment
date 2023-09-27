const FooterItemData = [
  { id: "footer-item-1", image: "./images/footer-item.webp" },
  { id: "footer-item-2", image: "./images/footer-item.webp" },
  { id: "footer-item-3", image: "./images/footer-item.webp" },
  { id: "footer-item-4", image: "./images/footer-item.webp" },
  { id: "footer-item-5", image: "./images/footer-item.webp" },
  { id: "footer-item-6", image: "./images/footer-item.webp" },
  { id: "footer-item-7", image: "./images/footer-item.webp" },
  { id: "footer-item-8", image: "./images/footer-item.webp" },
  { id: "footer-item-9", image: "./images/footer-item.webp" },
  { id: "footer-item-10", image: "./images/footer-item.webp" },
  { id: "footer-item-11", image: "./images/footer-item.webp" },
  { id: "footer-item-12", image: "./images/footer-item.webp" },
  { id: "footer-item-13", image: "./images/footer-item.webp" },
];

const Footer = () => {
  return (
    <div className={"flex flex-col items-center "}>
      <p>Leading the charge for Industries!</p>
      <div
        className={
          "flex items-center justify-center w-full mt-[30px] overflow-scroll"
        }
      >
        {FooterItemData.map((item) => (
          <img
            key={item.id}
            src={item.image}
            alt={"Footer-item"}
            width={100}
            height={32}
            className={"mr-[20px] cursor-pointer"}
          />
        ))}
      </div>
    </div>
  );
};

export default Footer;
