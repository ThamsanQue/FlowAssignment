import { Link } from "react-router-dom";
import { listingSchema } from "../utils/schemas/Lisitings";

const Listing = (listing: listingSchema) => {
  return (
    <div key={listing._id} className="px-10 mt-4 relative">
      <img
        src={listing.images[0]}
        alt="Listing"
        className="shadow-md rounded-2xl h-56 w-72 object-cover "
      />
      <div className="absolute bottom-2 left-16 w-72">
        <p className="text-sm text-white font-semibold">{listing.title}</p>
        <Link to={`/listing-details/${listing._id}`}>
          <button className=" p-2 inline-flex font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-lg hover:bg-orange-400 focus:outline-none focus:ring focus:ring-orange-400 focus:ring-opacity-80">
            View
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Listing;
