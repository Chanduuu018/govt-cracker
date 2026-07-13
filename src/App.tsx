import MainLayout from "./layouts/MainLayout";
import Hero from "./components/home/Hero";
import PopularExams from "./components/home/PopularExams";

const App = () => {
  return (
    <MainLayout>
      <Hero />
      <PopularExams />
    </MainLayout>
  );
};

export default App;