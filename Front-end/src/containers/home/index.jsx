import {
  Backdrop,
  Button,
  CircularProgress,
  Container,

  Grid,
  MenuItem,

  TextField
} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { DataGrid } from "@material-ui/data-grid";
import { withStyles } from "@material-ui/styles";
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { actDelete, actEdit, actFetchData } from "../actions";
import styles from "./styles";
class Home extends Component {
  constructor(props) {
    super();
    this.state = {
      isEnableEditAndDelete: "none",
      isEnableCancel: "none",
      data: {
        id: 0,
        soGiayChungNhanCu: "",
        ngayCapCu: "",
        soGiayChungNhanMoi: "",
        ngayCapMoi: "",
        doiTuong: 2,
        soDangKiDoanhNghiep: "",
        ngayCapSoDoanhNghiep: "",
        noiCapSoDanhNghiep: "",
        tenCoSo: "",
        diaChi: "",
        soDienThoai: "",
        fax: "",
        email: "",
        soCanCuoc: "",
        ngayCapSoCanCuoc: "",
        noiCapSoCanCuoc: "",
        hoTenChuSohuu: "",
        tenDonViChuQuan: "",
        soDienThoaiChuQuan: "",
        faxChuQuan: "",
        diaDiemNoiChuaPhan: "",
        tinhTrang: true,
        lanCapLai: "",
        duDieuKien: true,
      },
    };
  }
  GridRowsProp = [{ id: "Chưa có ai đặt hàng" }];
  dataClick = (e) => {
    this.setState({ isEnableEditAndDelete: "block", isEnableCancel: "block" });
    this.setState(
      {
        data: e.row,
      },
      () => {
        console.log(this.state);
      }
    );
  };
  dataTest = [
    {
      id: 1,
      stt: 1,
      certificateNumber: "Số giấy chứng nhận",
      dayRange: "Ngày cấp",
      personalName: "Personal",
      address: "adress",
      owner: "Chủ sở hữu",
      object: "Đối tượng",
      status: "Tình trạng",
      manipulation: "Thao tác",
    },
  ];
  FormatData = (arr) => {
    return arr.map((item, index) => {
      return {
        ...item,
        stt: index + 1,
        // tinhTrang:
        //   item.tinhTrang == true ? "Đang hoạt động" : "Ngừng hoạt động",
      };
    });
  };
  GridColDef = [
    { field: "stt", headerName: "Stt", width: 150 },
    {
      field: "soGiayChungNhanMoi",
      headerName: "Số giấy chứng nhận",
      width: 200,
    },
    { field: "ngayCapMoi", headerName: "Ngày cấp", width: 150 },
    { field: "tenCoSo", headerName: "Tên cơ sở/Tên cá nhân", width: 200 },
    { field: "diaChi", headerName: "Địa chỉ", width: 200 },
    { field: "hoTenChuSohuu", headerName: "Chủ sở hữu", width: 200 },
    { field: "doiTuong", headerName: "Đối tượng", width: 150 },
    { field: "tinhTrang", headerName: "Tình trạng", width: 250 },
    // { field: "manipulation", headerName: "Thao tác", width: 200 },
  ];
  handelInput = () => {
    this.props.history.push("/add");
  };
  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      data: {
        ...this.state.data,
        [name]: value,
      },
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <CssBaseline />
        <Container fixed>
          <Backdrop
            className={classes.backdrop}
            open={this.props.loading ? true : false}
            // onClick={handleClose}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
          <Grid container spacing={2} style={{ marginTop: "10px" }}>
            <Grid container spacing={2}>
              <Grid item lg={3}>
                <TextField
                  fullWidth={true}
                  name="soGiayChungNhanMoi"
                  label="Số  giấy chứng nhận mới"
                  variant="outlined"
                  onChange={this.onChange}
                  value={this.state.data.soGiayChungNhanMoi}
                />
              </Grid>
              <Grid item lg={3}>
                <TextField
                  fullWidth={true}
                  name="ngayCapMoi"
                  label="Ngày cấp mới"
                  variant="outlined"
                  onChange={this.onChange}
                  value={this.state.data.ngayCapMoi}
                />
              </Grid>

              <Grid item lg={3}>
                <TextField
                  label="Đối tựng"
                  name="doiTuong"
                  fullWidth
                  value={this.state.data.doiTuong}
                  select
                  onChange={this.onChange}
                  // helperText="Please select your currency"
                >
                  <MenuItem key={0} value={0}></MenuItem>
                  <MenuItem value={1}>Cá nhân</MenuItem>
                  <MenuItem value={2}>Tổ chức</MenuItem>
                </TextField>
                {/* {errors.email && touched.email && errors.email} */}
                {/* {errors.password && touched.password && errors.password} */}
              </Grid>
              <Grid item lg={3}>
                <TextField
                  fullWidth={true}
                  name="soDangKiDoanhNghiep"
                  label="Số đăng kí doanh nghiệp"
                  variant="outlined"
                  onChange={this.onChange}
                  value={this.state.data.soDangKiDoanhNghiep}
                />
              </Grid>
              <Grid item lg={3}>
                <TextField
                  fullWidth={true}
                  name="ngayCapSoDoanhNghiep"
                  label="Ngày cấp"
                  variant="outlined"
                  onChange={this.onChange}
                  value={this.state.data.ngayCapSoDoanhNghiep}
                />
              </Grid>
              <Grid item lg={3}>
                <TextField
                  fullWidth={true}
                  name="noiCapSoDanhNghiep"
                  label="Nơi cấp "
                  variant="outlined"
                  onChange={this.onChange}
                  value={this.state.data.noiCapSoDanhNghiep}
                />
              </Grid>
              <Grid item lg={3}>
                <TextField
                  label="Tình trạng"
                  name="tinhTrang"
                  fullWidth
                  value={this.state.data.tinhTrang}
                  select
                  onChange={this.onChange}
                  // helperText="Please select your currency"
                >
                  <MenuItem  value={false}>Ngừng hoạt động</MenuItem>
                  <MenuItem value={true}>Hoạt động</MenuItem> 
                </TextField>
                {/* {errors.email && touched.email && errors.email} */}
                {/* {errors.password && touched.password && errors.password} */}
              </Grid>
              <Grid item lg={12}>
                <TextField
                  fullWidth={true}
                  name="tenCoSo"
                  label="Tên cơ sở cá nhân"
                  variant="outlined"
                  onChange={this.onChange}
                  value={this.state.data.tenCoSo}
                />
              </Grid>

              <Grid item lg={12}>
                <TextField
                  fullWidth={true}
                  name="diaChi"
                  label="Địa chỉ"
                  variant="outlined"
                  onChange={this.onChange}
                  value={this.state.data.diaChi}
                />
              </Grid>

              <Grid item lg={3}>
                <TextField
                  fullWidth={true}
                  name="soDienThoai"
                  label="Số điện thoại"
                  variant="outlined"
                  onChange={this.onChange}
                  value={this.state.data.soDienThoai}
                />
              </Grid>

              <Grid item lg={3}>
                <TextField
                  fullWidth={true}
                  name="soCanCuoc"
                  label="Số căn cước "
                  variant="outlined"
                  onChange={this.onChange}
                  value={this.state.data.soCanCuoc}
                />
                {/* {errors.email && touched.email && errors.email} */}
                {/* {errors.password && touched.password && errors.password} */}
              </Grid>

              <Grid item lg={3}>
                <TextField
                  fullWidth={true}
                  name="hoTenChuSohuu"
                  label="Họ tên chủ cơ sở"
                  variant="outlined"
                  onChange={this.onChange}
                  value={this.state.data.hoTenChuSohuu}
                />
              </Grid>

              <Grid container style={{margin:"10px"}}>
                <Button
                  style={{ margin:"5px",display: this.state.isEnableEditAndDelete }}
                  variant="outlined"
                  size="large"
                  color="primary"
                  type="submit"
                  onClick = {()=>{
                    this.props.dispatch(actEdit(this.state.data))
                    // console.log(this.state.data);
                  }}
                >
                  Chỉnh sửa
                </Button>
                <Button
                  style={{ margin:"5px",display: this.state.isEnableEditAndDelete }}
                  variant="outlined"
                  size="large"
                  color="primary"
                  type="submit"
                  onClick = {()=>{this.props.dispatch(actDelete(this.state.data.id))}}
                >
                 Xóa
                </Button>
                <Button
                  style={{ margin:"5px", display: this.state.isEnableCancel }}
                  variant="outlined"
                  // disabled ={this.state.isEnableCancel}
                  size="large"
                  color="primary"
                  type="submit"
                  onClick={() => {
                    this.setState({
                      isEnableEditAndDelete: "none",
                      isEnableCancel: "none",
                    });
                  }}
                >
                  Hũy
                </Button>
                <Button
                style= {{ margin:"5px"}}
                  variant="outlined"
                  size="large"
                  color="primary"
                  onClick={this.handelInput}
                >
                  Nhập đầu kỳ
                </Button>
              </Grid>
            </Grid>

            <Grid item lg={12} style={{ height: 500, width: "100%" }}>
              <DataGrid
                onRowDoubleClick={this.dataClick}
                pagination
                rows={
                  this.props.data
                    ? this.FormatData(this.props.data)
                    : this.dataTest
                }
                columns={this.GridColDef}
              />
            </Grid>
          </Grid>
        </Container>
      </Fragment>
    );
  }
  componentDidMount() {
    this.props.dispatch(actFetchData());
  }
}
const mapStateToProps = (state) => ({
  loading: state.thongTinReducer.loading,
  data: state.thongTinReducer.data,
  err: state.thongTinReducer.err,
});

export default withStyles(styles)(connect(mapStateToProps)(Home));
