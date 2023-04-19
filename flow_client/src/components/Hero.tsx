import banner from "../assets/banner.jpg";

const Hero = () => {
  return (
    <div className="px-10 relative mt-4">
      <img
        src={banner}
        alt="banner"
        className=" shadow-md rounded-2xl h-[500px] w-full object-cover"
      />
      <h1 className="absolute text-5xl text-transparent  font-bold bg-clip-text bg-gradient-to-r from-[#f7b733] to-primary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center shadow">
        Find and choose where you will live !
      </h1>
    </div>
  );
};

export default Hero;
