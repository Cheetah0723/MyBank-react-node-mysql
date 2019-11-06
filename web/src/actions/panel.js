import * as actionTypes from './actionTypes';
import getUserInitialData from 'tools/getUserInitialData';

export const setAuthStatus = (status, email = null) => ({
   type: actionTypes.SET_AUTH_STATUS,
   status,
   email
});

export const fetchInitialData = () => async dispatch => {
   try {
      const data = await getUserInitialData();

      if (!data) {
         dispatch(initialDataStatus(false));
         return;
      }

      dispatch({ type: actionTypes.FETCH_PROFILE, data: data.user });
      dispatch({ type: actionTypes.FETCH_ACCOUNTS, data: data.accounts });
      dispatch({ type: actionTypes.FETCH_TRANSFERS, data: data.transfers });
      dispatch({ type: actionTypes.FETCH_CARDS, data: data.cards });
      dispatch({ type: actionTypes.FETCH_MESSAGES, data: data.messages });
      dispatch(initialDataStatus(true));
   } catch (err) {
      dispatch(initialDataStatus(false));
   }
};

export const initialDataStatus = status => ({
   type: actionTypes.FETCH_INITIAL_DATA_STATUS,
   status
});
