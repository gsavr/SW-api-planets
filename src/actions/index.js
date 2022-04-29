import swapi from "../api/swapi";
import {
  FETCH_PLANETS,
  FETCH_SINGLE_PLANET,
  FETCH_FILM,
  FETCH_RESIDENT,
} from "./types";

export const fetchPlanets = (page) => async (dispatch) => {
  const response = await swapi.get(`/planets/?page=${page}`);

  dispatch({ type: FETCH_PLANETS, payload: response.data });
};

export const fetchSinglePlanet = (id) => async (dispatch) => {
  const response = await swapi.get(`/planets/${id}`);

  dispatch({ type: FETCH_SINGLE_PLANET, payload: response.data });
};

export const fetchFilm = (id) => async (dispatch) => {
  const response = await swapi.get(`/films/${id}`);

  dispatch({ type: FETCH_FILM, payload: response.data });
};

export const fetchResident = (id) => async (dispatch) => {
  const response = await swapi.get(`/people/${id}`);

  dispatch({ type: FETCH_RESIDENT, payload: response.data });
};
