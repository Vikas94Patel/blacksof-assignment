import Form from "@/components/Form";

interface InfoCardDataModel {
  title: string;
  value: string;
}

const InfoCardsData = [
  { title: "50+", value: "clients" },
  { title: "80+", value: "Projects successfully completed" },
  {
    title: "60%",
    value: "of the clients converted into long term engagement partner",
  },
];

const InfoCard = ({ title, value }: InfoCardDataModel) => {
  return (
    <div
      className={
        "p-[12px] border-2 border-white rounded-[8px] mb-[12px] flex flex-col items-center justify-center sm:w-[36%] sm:first:w-[32%] sm:border-none sm:items-start sm:justify-start sm:p-[0]"
      }
    >
      <div className={"text-[38px] font-[700]"}>{title}</div>
      <div className={"text-[14px]"}>{value}</div>
    </div>
  );
};

const SectionContent = () => {
  return (
    <div
      className={
        "flex flex-col items-center justify-between p-[20px] sm:p-[60px] sm:flex-row"
      }
    >
      <div className={"sm:w-[46%]"}>
        <h1 className={"text-[24px] sm:text-[40px]"}>
          Searching for <b>Augmented Development</b> Teams to steer your product
          towards triumph?"
        </h1>
        <div
          className={
            "mt-[20px] mb-[40px] sm:flex sm:justified-between sm:mt-[60px] sm:mb-[0]"
          }
        >
          {InfoCardsData.map((cardData) => (
            <InfoCard
              key={cardData.title}
              title={cardData.title}
              value={cardData.value}
            />
          ))}
        </div>
      </div>
      <div className={"sm:w-[46%]"}>
        <Form />
      </div>
    </div>
  );
};

export default SectionContent;
