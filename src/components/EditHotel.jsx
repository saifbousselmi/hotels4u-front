import { Button, Modal, Input, InputNumber } from 'antd';
import React, { useState, useEffect } from 'react';
import { FaEdit } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { editHotel } from '../JS/Actions/HotelActions';

const EditHotel = ({ hotel, onClose }) => {
  const dispatch = useDispatch();
  const [newHotel, setNewHotel] = useState(hotel);

  useEffect(() => {
    setNewHotel(hotel); // Reset newHotel when hotel prop changes
  }, [hotel]);

  const handleChange = (e) => {
    setNewHotel({ ...newHotel, [e.target.name]: e.target.value });
  };

  const handleNumberChange = (name, value) => {
    setNewHotel({ ...newHotel, [name]: value });
  };

  const handleEdit = () => {
    dispatch(editHotel(hotel._id, newHotel));
    onClose(); // Close the modal after editing
  };

  return (
    <Modal
      title="Edit Hotel"
      visible={true}
      onOk={handleEdit}
      onCancel={onClose}
      okButtonProps={{
        style: {
          backgroundColor: '#990000', // Replace this with your register button color
          color: '#fff', // Text color
          border: 'none',
          
        },
      
      }}
      cancelButtonProps={{
        style: {
          color: 'black', // Text color
          border: 'none',
        },  }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleEdit();
        }}
        className="p-4 md:p-5"
      >
        {/* Hotel Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Hotel Name
          </label>
          <Input
            type="text"
            id="name"
            name="name"
            value={newHotel.name}
            onChange={handleChange}
            placeholder="Enter hotel name"
          />
        </div>

        {/* Location */}
        <div className="mb-4">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <Input
            type="text"
            id="location"
            name="location"
            value={newHotel.location}
            onChange={handleChange}
            placeholder="Enter location"
          />
        </div>

        {/* Region */}
        <div className="mb-4">
          <label htmlFor="region" className="block text-sm font-medium text-gray-700">
            Region
          </label>
          <Input
            type="text"
            id="region"
            name="region"
            value={newHotel.region}
            onChange={handleChange}
            placeholder="Enter region"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <Input.TextArea
            id="description"
            name="description"
            value={newHotel.description}
            onChange={handleChange}
            placeholder="Enter description"
            rows={4}
          />
        </div>

        {/* Price Per Night */}
        <div className="mb-4">
          <label htmlFor="pricePerNight" className="block text-sm font-medium text-gray-700">
            Price Per Night
          </label>
          <InputNumber
            id="pricePerNight"
            name="pricePerNight"
            value={newHotel.pricePerNight}
            onChange={(value) => handleNumberChange('pricePerNight', value)}
            placeholder="Enter price per night"
            style={{ width: '100%' }}
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <Input
            type="text"
            id="phone"
            name="phone"
            value={newHotel.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            value={newHotel.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </div>

        {/* Number of Rooms */}
        <div className="mb-4">
          <label htmlFor="numberOfRooms" className="block text-sm font-medium text-gray-700">
            Number of Rooms
          </label>
          <InputNumber
            id="numberOfRooms"
            name="numberOfRooms"
            value={newHotel.numberOfRooms}
            onChange={(value) => handleNumberChange('numberOfRooms', value)}
            placeholder="Enter number of rooms"
            style={{ width: '100%' }}
          />
        </div>

        {/* Photos */}
        <div className="mb-4">
          <label htmlFor="photos" className="block text-sm font-medium text-gray-700">
            Photos (comma-separated URLs)
          </label>
          <Input
            type="text"
            id="photos"
            name="photos"
            value={newHotel.photos?.join(', ')}
            onChange={(e) =>
              setNewHotel({ ...newHotel, photos: e.target.value.split(',').map((url) => url.trim()) })
            }
            placeholder="Enter photo URLs, separated by commas"
          />
        </div>
      </form>
    </Modal>
  );
};

export default EditHotel;
