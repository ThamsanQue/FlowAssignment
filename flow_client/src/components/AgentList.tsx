import { useQuery } from "react-query";
import Agent from "./Agent";
import { AgentsApi } from "../api/AgentsApi";
import { AgentSchema } from "../utils/schemas/Agents";

const AgentList = () => {
  const { data } = useQuery({
    queryKey: ["AllAgents"],
    queryFn: AgentsApi.getAllAgents,
  });

  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-2xl text-primary font-semibold mt-4">
          Agents of the Future
        </h1>
      </div>
      <div className="m-4 px-10 grid grid-flow-row gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.data.map((agent: AgentSchema) => (
          <>
            <Agent {...agent} />
          </>
        ))}
      </div>
    </>
  );
};

export default AgentList;
