import { useQuery } from "react-query";
import Listing from "../components/Listing";
import ListingsHero from "../components/ListingsHero";
import { ListingApi } from "../api/ListingsApi";
import { useParams } from "react-router-dom";
import { listingSchema } from "../utils/schemas/Lisitings";
import logo from "../assets/flowLogo.svg";

const Listings = () => {
  const { listingId } = useParams();

  const { data } = useQuery({
    queryKey: ["AgentListings", listingId],
    queryFn: () => ListingApi.getListingsByAgentId(listingId),
  });

  return (
    <>
      <div className="flex justify-center mt-4">
        <img src={logo} alt="Flow Logo" />
      </div>
      <ListingsHero />
      <div className="grid grid-flow-row gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.data.map((listing: listingSchema) => (
          <Listing {...listing} key={listing._id} />
        ))}
      </div>
    </>
  );
};

export default Listings;
