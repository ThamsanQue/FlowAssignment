import { useQuery } from "react-query";
import { ListingApi } from "../api/ListingsApi";
import { useParams } from "react-router-dom";
import { useState } from "react";
import bathroom from "../assets/bathroom.svg";
import bed from "../assets/bed.svg";
import parking from "../assets/parking.svg";
import logo from "../assets/flowLogo.svg";
import { listingSchema } from "../utils/schemas/Lisitings";

const ListingDetails = () => {
  const { listingDetailsId } = useParams();
  const [details, setDetails] = useState<listingSchema>();
  const [readMore, setReadMore] = useState(false);

  const handleReadMore = () => {
    setReadMore((prev) => !prev);
  };

  useQuery({
    queryKey: ["listing", listingDetailsId],
    queryFn: () =>
      ListingApi.getListingById(listingDetailsId).then((res) =>
        setDetails(res?.data)
      ),
  });

  return (
    <div className="px-10">
      <div className="flex justify-center mt-4">
        <img src={logo} alt="Flow Logo" />
      </div>
      <div className="relative mt-4">
        <img
          src={details?.images[0]}
          alt="banner"
          className=" shadow-md rounded-2xl h-[500px] w-full object-cover"
        />
        <div className="absolute bottom-10 right-10 backdrop-blur-md">
          <img
            src={details?.images[1]}
            alt="property"
            className="shadow-md rounded-2xl h-24 w-34 object-cover blur-[1px] hover:blur-none"
          />
          <p className="top-1/2 right-1/2 -translate-x-30 -translate-y-14 text-center text-white font-semibold ">
            View all <span>{details?.images.length}</span> images
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="p-4 w-2/3 ">
          <h1 className="text-3xl font-semibold text-secondary">
            {details?.title}
          </h1>
          <div className="w-3/4">
            <p className={` ${readMore === true ? "" : "line-clamp-3"} mt-3`}>
              <span className="font-semibold text-secondary">
                Description:{" "}
              </span>
              {details?.description}
            </p>
            <span onClick={handleReadMore} className="text-primary font-medium">
              {readMore === true ? "Read less" : "Read More"}
            </span>
            <div className="flex space-x-6 mt-3">
              <img
                src={details?.images[1]}
                alt="property"
                className="shadow-md rounded-2xl h-20 w-32 object-cover"
              />
              <img
                src={details?.images[2]}
                alt="property"
                className="shadow-md rounded-2xl h-20 w-32 object-cover"
              />
              <img
                src={details?.images[3]}
                alt="property"
                className="shadow-md rounded-2xl h-20 w-32 object-cover"
              />
              <img
                src={details?.images[4]}
                alt="property"
                className="shadow-md rounded-2xl h-20 w-32 object-cover"
              />
            </div>
            <div className="mt-4">
              <span className="text-md text-secondary font-semibold">
                Property Overview
              </span>
              <div className="mt-2 flex justify-between ">
                <span>Property Type</span>
                <span>{details?.listingSector}</span>
              </div>
              <div className="mt-2 flex justify-between ">
                <span>Property Title</span>
                <span>{details?.listingType}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3  m-4">
          <h1 className="text-secondary font-semibold p-2">
            brief information
          </h1>
          <span className="font-semibold text-secondary mt-4 p-2">
            Owner: <span className="text-black">Real Estate Agent</span>{" "}
          </span>
          <div className="flex space-x-2 m-3 justify-center">
            <div className="flex space-x-4">
              <img src={bed} alt="Bed" className="w-7 h-7" />
              <span>{details?.unit.bedrooms}</span>
            </div>
            <div className="flex space-x-4">
              <img src={bathroom} alt="Bed" className="w-7 h-7" />
              <span>{details?.unit.bathrooms}</span>
            </div>
            <div className="flex space-x-4">
              <img src={parking} alt="Bed" className="w-7 h-7" />
              <span>{details?.unit.parking}</span>
            </div>
          </div>

          <div className="flex justify-center">
            <h1 className="text-2xl font-semibold text-secondary m-3">
              Sale Price: R{details?.unit.price}
            </h1>
          </div>
          <button className="px-6   py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-lg hover:bg-orange-400 focus:outline-none focus:ring focus:ring-orange-400 focus:ring-opacity-80 m-3 w-full">
            Contact Agent
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;
