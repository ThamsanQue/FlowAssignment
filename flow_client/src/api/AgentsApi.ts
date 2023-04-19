import axios from "axios"



export const AgentsApi = {
    getAllAgents: async () => {
        try {
            return await axios.get('https://flow-server-ruby.vercel.app/agents');

        } catch (error) {
            console.error(error)
        }
    },

    getAgentById: async (id: string | undefined) => {
        try {
            return await axios.get(`https://flow-server-ruby.vercel.app/agents/${id}`);
        } catch (error) {
            console.error(error)
        }
    }
}