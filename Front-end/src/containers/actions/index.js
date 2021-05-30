import apiCaller from "./../../utils/apiCaller";
import * as apiConfig from "./../constant/index";
export const actAdd = (data, history) => {
  let headers = new Headers();

  return (dispatch) => {
    console.log(data);
    apiCaller("thongtin", "POST", data)
      .then((res) => {
        console.log(res);
        dispatch(actFetchData());
        history.replace("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const actFetchData = () => {
  return (dispatch) => {
    // console.log(data);
    dispatch(fetchThongTinRequest());
    apiCaller("thongtin", "GET", null)
      .then((res) => {
        console.log(res);
        dispatch(fetchThongTinSuccess(res));
      })
      .catch((err) => {
        console.log(err);
        // dispatch(fetchThongTinFailed(err));
      });
  };
};
export const actDelete = (id) => {
  return (dispatch) => {
    // console.log(data);
    dispatch(deleteThongTinRequest());
    apiCaller(`thongtin/${id}`, "DELETE", null)
      .then((res) => {
        dispatch(deleteThongTinSuccess(res,id));
      })
      .catch((err) => {
        console.log(err);
        dispatch(deleteThongTinFailed(err))
      });
  };
};

export const actEdit = (data) => {
  return (dispatch) => { 
    dispatch(deleteThongTinRequest());
    apiCaller(`thongtin/${data.id}`, "PUT", data)
      .then((res) => {
        dispatch(editThongTinSuccess(res,data));
      })
      .catch((err) => {
        console.log(err);
        // dispatch(deleteThongTinFailed(err))
      });
  };
};



const fetchThongTinRequest = () => {
  return {
    type: apiConfig.FETCH_THONGTIN_REQUEST,
  };
};
const fetchThongTinSuccess = (res) => {
  return {
    type: apiConfig.FETCH_THONGTIN_SUCCESS,
    payload:res.data,
  };
};
const fetchThongTinFailed = (err) => {
  return {
    type: apiConfig.FETCH_THONGTIN_FAILED,
    payload: err,
  };
};


const deleteThongTinRequest = () => {
  return {
    type: apiConfig.DELETE_THONGTIN_REQUEST,
  };
};
const deleteThongTinSuccess = (res,id) => {
  return {
    type: apiConfig.DELETE_THONGTIN_SUCCESS,
    payload: {data:res.data,id:id},
  };
};
const deleteThongTinFailed = (err) => {
  return {
    type: apiConfig.DELETE_THONGTIN_FAILED,
    payload: err,
  };
};

const editThongTinRequest = () => {
  return {
    type: apiConfig.EDIT_THONGTIN_REQUEST,
  };
};
const editThongTinSuccess = (res,dataEdit) => {
  return {
    type: apiConfig.EDIT_THONGTIN_SUCCESS,
    payload: {data:res.data,dataEdit:dataEdit},
  };
};
const editThongTinFailed = (err) => {
  return {
    type: apiConfig.EDIT_THONGTIN_FAILED,
    payload: err,
  };
};
