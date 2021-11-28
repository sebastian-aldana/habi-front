import { handleAction } from "redux-actions";
import { Actions } from "./buy-apartments.actions";

const initialState = {};

const setBuyApartment = handleAction(
  Actions.setVolumeData,
  (state, { payload }) => ({
    ...state,
    [payload.id]: payload.data,
  }),
  initialState
);

const buyApartmentReducer = (state = initialState, action) => {
  let currentState = setBuyApartment(state, action);
  return currentState;
};

export default buyApartmentReducer;
