import axios from "axios"



export const AgentsApi = {
    getAllAgents: async () => {
        try {
            return await axios.get('http://localhost:3000/agents');

        } catch (error) {
            console.error(error)
        }
    },

    getAgentById: async (id: string | undefined) => {
        try {
            return await axios.get(`http://localhost:3000/agents/${id}`);
        } catch (error) {
            console.error(error)
        }
    }
}