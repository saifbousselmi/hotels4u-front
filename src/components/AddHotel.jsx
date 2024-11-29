import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addHotel } from '../JS/Actions/HotelActions';
import { Modal } from 'antd';

const AddHotel = () => {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newHotel, setNewHotel] = useState({
    name: '',
    location: '',
    region: '',
    description: '',
    pricePerNight: '',
    phone: '',
    email: '',
    photos: ['', '', '', '', ''], // Array for photo URLs
    rating: 0,
    documentUrl: '',
    numberOfRooms: '',
  });

  const [loading, setLoading] = useState(false); // Loading state
  const [errorMessage, setErrorMessage] = useState(''); // Error message state
  const [successMessage, setSuccessMessage] = useState(''); // Success message state

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewHotel((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle changes in photo URLs
  const handlePhotoChange = (e, index) => {
    const newPhotos = [...newHotel.photos];
    newPhotos[index] = e.target.value;
    setNewHotel((prev) => ({
      ...prev,
      photos: newPhotos,
    }));
  };

  // Handle adding the hotel
  const handleAdd = async () => {
    setLoading(true);
    setErrorMessage(''); // Reset error message
    setSuccessMessage(''); // Reset success message

    const requiredFields = [
      'name',
      'location',
      'region',
      'description',
      'pricePerNight',
      'phone',
      'email',
      'numberOfRooms',
    ];
    const token = localStorage.getItem("token"); // Retrieve token from localStorage
    const config = {
      headers: {
        Authorization: `Bearer ${token}`, // Add the token as Bearer token
      },
    };

    // Check if all required fields are filled
    const isValid = requiredFields.every((field) => newHotel[field]);

    if (!isValid) {
      setErrorMessage('Please fill in all required fields.');
      setLoading(false);
      return;
    }

    try {
      // Dispatch add hotel action
      await dispatch(addHotel(newHotel, config));

      // Reset the form and close the modal after submission
      setNewHotel({
        name: '',
        location: '',
        region: '',
        description: '',
        pricePerNight: '',
        phone: '',
        email: '',
        photos: ['', '', '', '', ''],
        rating: 0,
        documentUrl: '',
        numberOfRooms: '',
      });
      setLoading(false);
      setSuccessMessage('Hotel added successfully!');
      handleCancel(); // Close the modal
    } catch (error) {
      setLoading(false);
      setErrorMessage('An error occurred while adding the hotel.');
    }
  };

  // Show and hide the modal
  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  return (
    <div>
      {/* Button to trigger modal */}
      <button
        onClick={showModal}
        className="text-sm w-32 font-semibold text-gray-700 shadow-sm hover:from-[#4C6A7A] hover:to-[#243142] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#243142] leading-6 px-4 py-2 flex items-center justify-center"
      >
        Add Hotel
      </button>

      {/* Modal for adding hotel */}
      <Modal
        visible={isModalOpen}
        onCancel={handleCancel}
        footer={null} // Remove default footer buttons
        // Prevent modal close when clicking inside
      >
        <h2 className="text-xl font-semibold mb-4">Add New Hotel</h2>

        {/* Display success message if hotel added */}
        {successMessage && <div className="text-green-500 text-sm">{successMessage}</div>}

        {/* Display error message if there are any */}
        {errorMessage && <div className="text-red-500 text-sm">{errorMessage}</div>}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAdd();
          }}
        >
          <div className="grid grid-cols-2 gap-4">
            {[{ label: 'Hotel Name', name: 'name', type: 'text', placeholder: 'Hotel name' },
              { label: 'Location', name: 'location', type: 'text', placeholder: 'Hotel location' },
              { label: 'Region', name: 'region', type: 'text', placeholder: 'Hotel region' },
              { label: 'Description', name: 'description', type: 'textarea', placeholder: 'Description' },
              { label: 'Price per Night', name: 'pricePerNight', type: 'number', placeholder: '199' },
              { label: 'Phone', name: 'phone', type: 'text', placeholder: 'Phone number' },
              { label: 'Email', name: 'email', type: 'email', placeholder: 'Email address' },
              { label: 'Document URL', name: 'documentUrl', type: 'text', placeholder: 'Document URL' },
              { label: 'Number of Rooms', name: 'numberOfRooms', type: 'number', placeholder: 'Number of rooms' },
              { label: 'Rating', name: 'rating', type: 'number', placeholder: 'Rating (0-5)' }]
              .map((field, index) => (
                <div key={index} className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor={field.name}
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    {field.label}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      rows="3"
                      className="block w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder={field.placeholder}
                      onChange={handleChange}
                    />
                  ) : (
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      className="block w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder={field.placeholder}
                      onChange={handleChange}
                    />
                  )}
                </div>
              ))}

            {/* Photo Inputs */}
            {newHotel.photos.map((photo, index) => (
              <div key={index} className="col-span-2 sm:col-span-1">
                <label
                  htmlFor={`photo${index}`}
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Photo {index + 1} URL
                </label>
                <input
                  type="text"
                  id={`photo${index}`}
                  name={`photo${index}`}
                  className="block w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder={`Photo ${index + 1} URL`}
                  value={photo}
                  onChange={(e) => handlePhotoChange(e, index)}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800"
              disabled={loading}
            >
              {loading ? 'Adding Hotel...' : 'Add Hotel'}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddHotel;
