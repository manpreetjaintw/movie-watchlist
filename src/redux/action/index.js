import { fetchDataFromApi } from '../../services/fetchDataFromApi';

export const apiDataRequest = (request) => {

  return {
    type: "FETCH_DATA",
  };
};

export const apiDataSuccess = (data) => {
  return {
    type: "ADD_DATA",
    payload: data,
  };
};

export const apiDataNotFound = (data) => {
  return {
    type: 'REMOVE_DATA',
    payload: data
  }
}

export const apiDataFailure = (error) => {
  return {
    type: "ERROR",
    payload: error,
  };
};


export const watchListData = (watchData) => {
  return {
    type: "WATCH_DATA",
    payload: watchData,
  };
};

export const watchListRemove = (watchListRemove) => {
  return {
    type: "watch_List_Remove",
    payload: watchListRemove,
  };
};



export const fetchData = (search) => async (dispatch) => {
  dispatch(apiDataRequest("Fetching data..."));

  try {
    const data = await fetchDataFromApi(search);
    if (data?.Response === 'False') {
      dispatch(apiDataFailure(data?.Error))
      dispatch(apiDataNotFound([]))
    } else {
      dispatch(apiDataSuccess(data.Search));
    }

  } catch (error) {
    dispatch(apiDataFailure(error.response.data.Error))
  }
};

export const watchLogout = (watchLogout) => {
  return {
    type: "watch_Logout",
    payload: watchLogout
  }
};

