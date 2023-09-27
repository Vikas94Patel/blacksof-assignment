import Navbar from "/src/components/Navbar";
import SectionContent from "@/components/SectionContent";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className={"bg-black w-screen h-screen overflow-x-hidden"}>
      <Navbar />
      <SectionContent />
      <Footer />
    </div>
  );
};

export default Home;
