import { Link } from "react-router-dom";
import { AgentSchema } from "../utils/schemas/Agents";

const Agent = (agent: AgentSchema) => {
  return (
    <>
      <div
        key={agent._id}
        className="w-full max-w-xs overflow-hidden shadow-primary/20 rounded-lg shadow-lg"
      >
        <div className="flex justify-center my-2">
          <img
            className="object-cover w-20 h-20 border-2 border-primary rounded-full justify-center"
            src={agent.profileImageUrl}
            alt="avatar"
          />
        </div>

        <div className="text-center">
          <span className="block text-xl font-bold text-secondary ">
            {agent.firstName + " " + agent.lastName}
          </span>
          <div className="flex justify-center space-x-6 pt-2">
            <div className="bg-primary  bg-opacity-25  rounded-md p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 stroke-primary"
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
                className="w-6 h-6 stroke-primary"
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
        <div className="flex justify-center m-4">
          <Link to={`/listings/${agent._id}`}>
            <button className="px-6 inline-flex  py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-lg hover:bg-orange-400 focus:outline-none focus:ring focus:ring-orange-400 focus:ring-opacity-80">
              View Listings
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Agent;
