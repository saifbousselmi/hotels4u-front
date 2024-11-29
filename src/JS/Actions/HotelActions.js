import { ADD_HOTEL_FAIL, ADD_HOTEL_LOAD, ADD_HOTEL_SUCCESS, DELETE_HOTEL_FAIL, DELETE_HOTEL_LOAD, DELETE_HOTEL_SUCCESS, EDIT_HOTEL_FAIL, EDIT_HOTEL_LOAD, EDIT_HOTEL_SUCCESS, GET_HOTEL_BYID_FAIL, GET_HOTEL_BYID_LOAD, GET_HOTEL_BYID_SUCCESS, GET_HOTELS_FAIL, GET_HOTELS_LOAD, GET_HOTELS_SUCCESS, GET_MY_HOTELS_FAIL, GET_MY_HOTELS_LOAD, GET_MY_HOTELS_SUCCESS } from "../ActionsTypes/HotelActionTypes";  
import axios from "axios";
import { toast } from 'react-toastify';

// Get all hotels
export const getHotels = () => async (dispatch) => {
    dispatch({ type: GET_HOTELS_LOAD });
    try {
        const result = await axios.get("http://localhost:5000/api/hotels/get-Hotels");
        if (result && result.data) {
          dispatch({type: GET_HOTELS_SUCCESS, payload: result.data.foundHotels});
        } else {
          console.error("API response is empty or malformed", result);
        }
      } catch (error) {
        console.error("Error fetching hotels", error);
        dispatch({type: GET_HOTELS_FAIL, payload: error.response?.data?.error || error.message});
      }
};

// Get hotel by id action
export const getHotelById = (id) => async (dispatch) => {
    dispatch({ type: GET_HOTEL_BYID_LOAD });
    try {
        const result = await axios.get(`http://localhost:5000/api/hotels/get-Hotel/${id}`);
        dispatch({ type: GET_HOTEL_BYID_SUCCESS, payload: result.data });
    } catch (error) {
        dispatch({ type: GET_HOTEL_BYID_FAIL, payload: error.response?.data?.error || "Error fetching hotel details" });
    }
};

// Add a new hotel
export const addHotel = (newHotel) => async (dispatch) => {
    dispatch({ type: ADD_HOTEL_LOAD });

    const token = localStorage.getItem("token"); // Retrieve the token from localStorage
    try {
        const config = {
            headers: {
                Authorization: token, // Send the token as "Bearer <token>"
            },
        };

        const result = await axios.post("http://localhost:5000/api/hotels/add-Hotel", newHotel, config);
        dispatch({ type: ADD_HOTEL_SUCCESS, payload: result.data });
        dispatch(getHotels());  // Fetch hotels again to update the list
    } catch (error) {
        console.error("Error while adding hotel:", error.response?.data || error.message);
        dispatch({ type: ADD_HOTEL_FAIL, payload: error.response?.data?.msg || "Error adding hotel" });
    }
};

// Delete hotel
export const deleteHotelAction = (hotelId) => async (dispatch) => {
    try {
        const result = await axios.delete(`http://localhost:5000/api/hotels/delete-Hotel/${hotelId}`);
        dispatch({ type: DELETE_HOTEL_SUCCESS, payload: hotelId });
        toast.success('Hotel deleted successfully');
        dispatch(getHotels()); // Fetch hotels again to update the list
    } catch (error) {
        toast.error(error.response?.data?.message || 'Error deleting hotel');
        dispatch({ type: DELETE_HOTEL_FAIL, payload: error.response?.data?.message || "Error deleting hotel" });
    }
};

// Edit hotel
export const editHotel = (hotelId, hotelData) => async (dispatch) => {
    dispatch({ type: EDIT_HOTEL_LOAD });
    try {
      const response = await axios.put(`/api/hotels/edit-Hotel/${hotelId}`, hotelData);
      dispatch({ type: EDIT_HOTEL_SUCCESS, payload: response.data });
      dispatch(getHotels()); // Fetch hotels again to update the list
    } catch (error) {
      dispatch({ type: EDIT_HOTEL_FAIL, payload: error.response?.data?.error || "Error editing hotel" });
    }
  };
  

// Get my hotels
export const getMyHotels = () => async (dispatch) => {
    dispatch({ type: GET_MY_HOTELS_LOAD });
    try {
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        };
        const result = await axios.get("http://localhost:5000/api/hotels/get-my-Hotels", config);
        dispatch({ type: GET_MY_HOTELS_SUCCESS, payload: result.data.foundMyHotels });
    } catch (error) {
        dispatch({ type: GET_MY_HOTELS_FAIL, payload: error.response?.data?.error || "Error fetching your hotels" });
    }
};
