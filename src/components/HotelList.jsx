'use client';

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHotels, deleteHotelAction } from "../JS/Actions/HotelActions";
import { Carousel } from "flowbite-react";
import EditHotel from "./EditHotel";
import Spinner from "./Spinner";
import HotelDetails from "./HotelDetails";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";

export default function HotelList() {
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.HotelReducer.hotels);
  const load = useSelector((state) => state.HotelReducer.load);
  const error = useSelector((state) => state.HotelReducer.error);

  const user = useSelector((state) => state.AuthReducer.user);
  const isAdmin = user?.role === "admin";
  const isOwner = user?.role === "owner";

  console.log(isAdmin, isOwner);

  useEffect(() => {
    dispatch(getHotels());
  }, [dispatch]);

  // Delete hotel
  const handleDelete = (hotelId) => {
    if (window.confirm("Are you sure you want to delete this hotel?")) {
      dispatch(deleteHotelAction(hotelId)); // Call delete action
    }
  };

  // Open edit modal
  const handleEdit = (hotel) => {
    setSelectedHotel(hotel);
    setIsEditModalVisible(true); // Open the edit modal
  };

  // Show hotel details in modal
  const handleDetails = (hotel) => {
    setSelectedHotel(hotel);
    setIsDetailsVisible(true);
  };

  // Render hotel images
  const renderHotelImages = (photos) => {
    return (
      <Carousel>
        {photos?.slice(0, 4).map((image, index) => (
          <div key={index} className="flex h-full items-center justify-center">
            <img
              src={image}
              alt={`Hotel ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Carousel>
    );
  };

  return (
    <div className="bg-white">
      <div className="mx-auto  max-w-2xl px-4 py-20 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 style={{marginLeft:"-5px"}} className="text-3xl text-gray-600 font-bold tracking-tight mt-7">Hotels:</h2>

        {load ? (
          <div className="flex justify-center items-center py-8">
            <Spinner />
          </div>
        ) : error ? (
          <div className="text-red-500">Error: {error}</div>
        ) : (
          <div className="grid mt-6 grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {hotels.map((hotel) => (
              <div key={hotel._id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  {hotel.photos && renderHotelImages(hotel.photos)}
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">{hotel.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{hotel.location}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-700">${hotel.pricePerNight}</h3>
                    <p className="mt-1 text-sm text-gray-500">{hotel.region}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-4 flex justify-between items-center">
                  <button
                    onClick={() => handleDetails(hotel)}
                    className="text-[#990000] hover:text-[#cc0000]"
                  >
                    <FaEye size={18} color="" />
                  </button>
                 

                  {isAdmin  || hotel.owner === user._id ?  (
                    <div className="flex gap-4">
                       <button
                    onClick={() => handleEdit(hotel)} // Show the Edit modal
                    className="text-[#990000] hover:text-[#cc0000]"
                  >
                    <FaEdit size={18} />
                  </button>
                      <button
                        onClick={() => handleDelete(hotel._id)} // Delete the hotel
                        className="text-[#990000] hover:text-[#cc0000]"
                        >
                        <FaTrash size={18} />
                      </button>
                    </div>
                  )
                : null}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Hotel Details Modal */}
      {isDetailsVisible && selectedHotel && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={() => setIsDetailsVisible(false)}
        >
          <div
            className="bg-white p-6 rounded-lg overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="text-red-500 float-right"
              onClick={() => setIsDetailsVisible(false)}
            >
              ✕
            </button>
            <HotelDetails selectedHotel={selectedHotel} />
          </div>
        </div>
      )}

      {/* Edit Hotel Modal */}
      {isEditModalVisible && selectedHotel && (
        <EditHotel
          hotel={selectedHotel} // Pass selectedHotel directly to the modal
          onClose={() => setIsEditModalVisible(false)} // Close modal function
        />
      )}
    </div>
  );
}
