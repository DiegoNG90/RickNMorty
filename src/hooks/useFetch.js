import { useEffect, useReducer, useCallback } from 'react';
import axiosClient from '../api';
import {
  initialState,
  axiosReducer,
  SET_DATA,
  SET_ERROR,
  SET_LOADING,
} from '../reducers/axios';

export const useFetch = (endpoint = '') => {
  const [state, dispatch] = useReducer(axiosReducer, initialState);

  const getData = useCallback(async () => {
    try {
      dispatch({ type: SET_LOADING });
      const res = await axiosClient(endpoint);
      dispatch({ type: SET_DATA, payload: res.data });
    } catch (err) {
      dispatch({ type: SET_ERROR, payload: err.message });
    }
  }, [endpoint]);

  useEffect(() => {
    getData();
  }, [endpoint, getData]);

  return state;
};
