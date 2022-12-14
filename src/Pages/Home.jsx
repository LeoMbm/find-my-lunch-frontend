import React from "react";
import { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Tooltip from '@mui/material/Tooltip';
import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from "@geoapify/react-geocoder-autocomplete";
import "@geoapify/geocoder-autocomplete/styles/minimal.css";

import ModalOrder from "../Components/ModalOrder";


const Home = ({ Resto, LocationMarker, Latitude, Longitude, Logged }) => {
  const [OpenModal, setOpenModal] = useState(false);
  const [isClicked, setIsClicked] = useState([]);
  const [Value, setValue] = useState("Rue Melsens, Brussels")



  const handleOpen = (lon) => {
    setIsClicked(Resto.find((r) => r.properties.lon === lon));
    setOpenModal(true);
    console.log(isClicked);
  };

  const handleClose = () => {
    setOpenModal(false);
    setIsClicked([]);
  };

  return (
    <div className="container-fluid flex">
      {OpenModal && (
        <ModalOrder
          Resto={Resto}
          isClicked={isClicked}
          CloseModal={handleClose}
        />
      )}

      <section className="left-side w-6/12 h-screen">
        <MapContainer
          center={[Latitude, Longitude]}
          zoom={20}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[Latitude, Longitude]}>
            <Popup>
              Default Position <br /> Hey Brussels !.
            </Popup>
          </Marker>
          {Resto.map((r) =>(
            <Marker key={r.properties.lon} position={[r.properties.lat, r.properties.lon]}>
            <Popup>
            {r.properties.address_line1} <br /> {r.properties.address_line2}.
            </Popup>
          </Marker>
          ))}
          <LocationMarker />
        </MapContainer>
      </section>

      <section className="right-side w-6/12 h-screen overflow-y-auto">
        <form className="flex mt-4 mx-4 items-center">
          <div className="relative w-full">
            {/* CODE HERE */}
              {/* <GeoapifyContext apiKey="284a2a00975a44d3898454f392083147">
                <GeoapifyGeocoderAutocomplete
                  // className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter address here"
                  value={Value}
                  type={"street"}
                  lang={"fr"}
                  biasByLocation={[Latitude, Longitude]}
                  limit={15}
                  filterByCountryCode={["be"]}
                  placeSelect={onPlaceSelect}
                  biasByProximity={[Latitude, Longitude]}
                  suggestionsChange={onSuggectionChange}
                />
              </GeoapifyContext> */}
            </div>

            <div className="flex absolute  inset-y-0 left-0 items-center pl-3 pointer-events-none ">
              {/* <svg
                ariaHidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg> */}
            </div>
        </form>

        <div
          id="card-container"
          className="container-fluid grid grid-cols-3 gap-4 mt-4 mx-4"
        >
          {Resto.map((r) => (
            <article
              key={r.properties.lon}
              className="overflow-hidden h-4/12 w-full rounded-lg shadow transition hover:shadow-lg"
            >
              <img
                className="h-56 w-full object-cover"
                src={`https://source.unsplash.com/random?${r.properties.name}`}
                alt="Random"
              />
              <div className="bg-white p-4 sm:p-6">
                <p className="block text-xs text-gray-500">
                  {r.properties.address_line1}
                </p>
                <h3 className="mt-0.5 text-lg text-gray-900">
                  {r.properties.address_line2}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3"></p>
                {Logged &&
                <button
                  onClick={() => handleOpen(r.properties.lon)}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    ariaHidden="true"
                    className="mr-2 -ml-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                  </svg>
                  Buy now
                </button>
                }
                {!Logged &&
                <Tooltip title="You need to login for order food" arrow>
                  <span>
                <button
                 disabled
                  className="text-white bg-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-gray-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    ariaHidden="true"
                    className="mr-2 -ml-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                  </svg>
                  Buy now
                </button>
                </span>
                </Tooltip>
                }
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
