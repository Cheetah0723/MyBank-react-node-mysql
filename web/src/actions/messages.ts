import { getMyMessages, toggleMessageRead, removeMessage } from 'api/messages';
import * as actionTypes from './actionTypes';

// Fetch messages
export const fetchMessages = () => async dispatch => {
   try {
      // Set status to false on every start, so it can be reusable
      dispatch(fetchMessagesStatus(false));

      const data = await getMyMessages();

      if (!data) {
         dispatch(fetchMessagesStatus(false));
         return;
      }

      dispatch({ type: actionTypes.FETCH_MESSAGES, data });
   } catch (err) {
      dispatch(fetchMessagesStatus(false));
   }
};

export const fetchMessagesStatus = status => ({
   type: actionTypes.FETCH_MESSAGES_STATUS,
   status
});

// Toggle message read
export const messageToggle = id => async dispatch => {
   try {
      const message = await toggleMessageRead(id);

      if (!message) {
         return;
      }

      dispatch({ type: actionTypes.MESSAGE_TOGGLE, id });
   } catch (err) {}
};

// Remove message
export const messageRemove = id => async dispatch => {
   try {
      const message = await removeMessage(id);

      if (!message) {
         return;
      }

      dispatch({ type: actionTypes.MESSAGE_REMOVE, id });
   } catch (err) {}
};
