import AgentList from "../components/AgentList";
import Hero from "../components/Hero";
import logo from "../assets/flowLogo.svg";

const Home = () => {
  return (
    <>
      <div className="flex justify-center mt-4">
        <img src={logo} alt="Flow Logo" />
      </div>
      <Hero />
      <AgentList />
    </>
  );
};

export default Home;
