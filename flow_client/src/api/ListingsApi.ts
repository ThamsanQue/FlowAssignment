import axios from "axios"


export const ListingApi = {
    getListingsByAgentId: async (id: string | undefined) => {
        try {
            return await axios.get(`https://flow-server-ruby.vercel.app/listings/agent/${id}`);
        } catch (error) {
            console.error(error)
        }
    },
    getListingById: async (id: string | undefined) => {
        try {
            return await axios.get(`https://flow-server-ruby.vercel.app/listings/${id}`);
        } catch (error) {
            console.error(error)
        }
    }
}