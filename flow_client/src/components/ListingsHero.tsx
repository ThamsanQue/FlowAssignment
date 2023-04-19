import { useQuery } from "react-query";
import banner from "../assets/listingsBanner.jpg";
import { useParams } from "react-router-dom";
import { AgentsApi } from "../api/AgentsApi";
import { useState } from "react";
import { AgentSchema } from "../utils/schemas/Agents";

const ListingsHero = () => {
  const { listingId } = useParams();
  const [agent, setAgent] = useState<AgentSchema>();

  useQuery({
    queryKey: ["agent", listingId],
    queryFn: () =>
      AgentsApi.getAgentById(listingId).then((res) => setAgent(res?.data)),
  });

  return (
    <div className=" px-10 mt-4 relative">
      <img
        className="shadow-md rounded-2xl h-[500px] w-full object-cover"
        src={banner}
        alt="listings"
      />

      <div className="absolute top-20 right-20">
        <div className="flex justify-center">
          <img
            className="object-cover w-40 h-40 border-2 border-primary rounded-xl justify-center"
            src={agent?.profileImageUrl}
            alt="avatar"
          />
        </div>
        <div className="bg-primary rounded-xl  bg-opacity-30  flex flex-col mt-2 p-2">
          <span className="text-lg font-semibold text-primary">
            {agent?.firstName + " " + agent?.lastName}
          </span>
          <span className="text-sm text-secondary font-medium">Your Agent</span>
        </div>
      </div>

      <div className="absolute  bottom-10 left-1/2 -translate-x-1/2">
        <h2 className="text-3xl font-semibold text-primary">
          Get in touch with your Agent
        </h2>
        <div className="flex justify-center space-x-10 mt-2">
          <div className="bg-primary  bg-opacity-25  rounded-md p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 stroke-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </div>
          <div className="bg-primary  bg-opacity-25  rounded-md p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 stroke-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingsHero;
