import MainLayout from "../layouts/MainLayout";
import Hero from "../components/home/Hero";
import PopularExams from "../components/home/PopularExams";
import Features from "../components/home/Features";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <PopularExams />
      <Features />
    </MainLayout>
  );
};

export default Home;