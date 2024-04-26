
const intialState = {
  data: [],
  loading: false,
  error: null,
  watchData: []
};

export const UserReducer = (state = intialState, action) => {
  switch (action.type) {
    case "FETCH_DATA": {
      return { ...state, loading: true };
    }
    case "ADD_DATA": {
      return { ...state, loading: false, data: action.payload };
    }
    case "ERROR": {
      
      return { ...state, loading: false, error: action.payload };
    }
    case "WATCH_DATA": {
      const { token, movieAdd } = action.payload;
      const updatedWatchData = { ...state.watchData };

      if (updatedWatchData[token]) {
        updatedWatchData[token].push(movieAdd);
      } else {
        updatedWatchData[token] = [movieAdd];
      }

      return { ...state, watchData: updatedWatchData }
    }
    case "watch_Logout": {
      return { ...state,  data:action.payload };
    }
    case "watch_List_Remove": {
      
      const updatedWatchData = { ...state.watchData };
      const tokenKeys = Object.keys(updatedWatchData);
      for (let key of tokenKeys) {
        updatedWatchData[key] = updatedWatchData[key].filter(
          item => item.imdbID.toLowerCase() !== action.payload
        );
      }
      return { ...state, watchData: updatedWatchData };
    }
    

    default:
      return state;
  }
};

export default UserReducer;

