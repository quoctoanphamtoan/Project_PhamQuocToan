import * as actionTypes from "./../constant/index";

const initialReducer = {
  loading: false,
  data: null,
  err: null,
};

const thongTinReducer = (state = initialReducer, action) => {
  switch (action.type) {
    case actionTypes.FETCH_THONGTIN_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };

    case actionTypes.FETCH_THONGTIN_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };
    case actionTypes.FETCH_THONGTIN_FAILED:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };
    case actionTypes.DELETE_THONGTIN_REQUEST:
      state.loading = true;
      return { ...state };
    case actionTypes.DELETE_THONGTIN_SUCCESS:
      state.loading = false;
      const { data, id } = action.payload;
      let datatemp = state.data.filter((item) => item.id !== id);
      state.data = datatemp;
      return { ...state };
    case actionTypes.EDIT_THONGTIN_REQUEST:
      state.loading = true;
      return { ...state };
    case actionTypes.EDIT_THONGTIN_SUCCESS:
      state.loading = false;
      const { mess, dataEdit } = action.payload;
      let index = state.data.findIndex((item) => item.id === dataEdit.id);
      state.data[index] = dataEdit;

      return { ...state };

    default:
      return { ...state };
  }
};
export default thongTinReducer;
