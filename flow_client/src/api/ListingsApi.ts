import axios from "axios"


export const ListingApi = {
    getListingsByAgentId: async (id: string | undefined) => {
        try {
            return await axios.get(`http://localhost:3000/listings/agent/${id}`);
        } catch (error) {
            console.error(error)
        }
    },
    getListingById: async (id: string | undefined) => {
        try {
            return await axios.get(`http://localhost:3000/listings/${id}`);
        } catch (error) {
            console.error(error)
        }
    }
}