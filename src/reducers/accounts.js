import {
   FETCH_ACCOUNTS,
   FETCH_ACCOUNTS_STATUS 
} from 'actions/accounts';

const initialState = {
   data: [],
   status: false
};

const accounts = (state = initialState, action) => {
   switch (action.type) {

      case FETCH_ACCOUNTS:
         return Object.assign({}, state, {
            data: [...action.data]
         });

      case FETCH_ACCOUNTS_STATUS:
         return Object.assign({}, state, {
            status: action.status
         });

      default: 
         return state;
   }
};

export default accounts;