import { createAction } from "redux-actions";

export const ActionTypes = {
  setNewApartment: "BUY_APARTMENTS/SET_APARTMENT_DATA",
};

const setVolumeData = createAction(ActionTypes.setNewApartment);

export const Actions = { setVolumeData };
