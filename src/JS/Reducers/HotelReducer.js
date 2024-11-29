import { ADD_HOTEL_FAIL, ADD_HOTEL_LOAD, ADD_HOTEL_SUCCESS, DELETE_HOTEL_FAIL, DELETE_HOTEL_LOAD, DELETE_HOTEL_SUCCESS, EDIT_HOTEL_FAIL, EDIT_HOTEL_LOAD, EDIT_HOTEL_SUCCESS, GET_HOTELS_FAIL, GET_HOTELS_LOAD, GET_HOTELS_SUCCESS, GET_HOTEL_BYID_FAIL, GET_HOTEL_BYID_LOAD, GET_HOTEL_BYID_SUCCESS, GET_MY_HOTELS_FAIL, GET_MY_HOTELS_LOAD, GET_MY_HOTELS_SUCCESS } from "../ActionsTypes/HotelActionTypes"


const initialState = {
    load: false,
    success: null,
    error: null,
    hotels: [],
    myHotels: [],
    hotel: {}
}

const HotelReducer = (state=initialState, {type, payload}) => {
    switch (type) {
      case GET_HOTELS_LOAD:
        return { ...state, load: true };

      case GET_HOTELS_SUCCESS:
        return { ...state, load: false, hotels: payload, success: true };

      case GET_HOTELS_FAIL:
        return { ...state, success: false, load: false, error: payload };

      case ADD_HOTEL_LOAD:
        return { ...state, load: true };

      case ADD_HOTEL_SUCCESS:
        return { ...state, load: false, success: true };

      case ADD_HOTEL_FAIL:
        return { ...state, load: false, success: false, error: payload };

      case GET_HOTEL_BYID_LOAD:
        return { ...state, load: true };

      case GET_HOTEL_BYID_SUCCESS:
        return { ...state, load: false, hotel: payload.foundHotel, success: true };

      case GET_HOTEL_BYID_FAIL:
        return { ...state, success: false, load: false, error: payload };

      case DELETE_HOTEL_LOAD:
        return { ...state, load: true };

      case DELETE_HOTEL_SUCCESS:
        return { ...state, load: false, success: true };

      case DELETE_HOTEL_FAIL:
        return { ...state, load: false, success: false, error: payload };

      case EDIT_HOTEL_LOAD:
        return { ...state, load: true };

      case EDIT_HOTEL_SUCCESS:
        return { ...state, load: false, success: true };

      case EDIT_HOTEL_FAIL:
        return { ...state, load: false, success: false, error: payload };

      case GET_MY_HOTELS_LOAD:
        return { ...state, load: true };

      case GET_MY_HOTELS_SUCCESS:
        return { ...state, load: false, myHotels: payload, success: true };

      case GET_MY_HOTELS_FAIL:
        return { ...state, success: false, load: false, error: payload };

      default:
        return state;
    }
}


export default HotelReducer