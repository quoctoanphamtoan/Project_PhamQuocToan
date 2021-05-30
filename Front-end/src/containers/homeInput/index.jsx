import {
  Button,
  Container,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { DataGrid } from "@material-ui/data-grid";
import { Formik } from "formik";
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { actAdd } from "../actions";
class HomeInput extends Component {
  render() {
    return (
      //   <Fragment>
      //     <CssBaseline />
      //     <Container fixed>
      //         <h1>hihihi</h1>
      //     </Container>
      //   </Fragment>
      <Container>
        <Grid container>
          <Grid item lg={12}>
            <Typography variant="h4" gutterBottom>
              NHẬP ĐẦU KÝ GIẤY XÁC NHẬN ĐỦ ĐIỀU KIỆN BUÔN BÁN PHÂN BÓN
            </Typography>
            <Typography variant="h6" gutterBottom>
              Thông tin chung:
            </Typography>
          </Grid>
          <Grid item lg={12}>
            <Formik
              initialValues={{
                soGiayChungNhanCu: "",
                ngayCapCu: "",
                soGiayChungNhanMoi: "",
                ngayCapMoi: "",
                doiTuong: 1,
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
                lanCapLai: 1,
                duDieuKien: true,
              }}
              //   validate={values => {
              //     // const errors = {};
              //     // if (!values.email) {
              //     //   errors.email = 'Required';
              //     // } else if (
              //     //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              //     // ) {
              //     //   errors.email = 'Invalid email address';
              //     // }
              //     // return errors;
              //   }}
              onSubmit={(values, { setSubmitting }) => {
                this.props.dispatch(actAdd(values, this.props.history));
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={1}>
                    <Grid item lg={3}>
                      <TextField
                        fullWidth={true}
                        name="soGiayChungNhanCu"
                        label="Số  giấy chứng nhận cũ"
                        variant="outlined"
                        onChange={handleChange}
                        value={values.soGiayChungNhanCu}
                      />
                      {/* {errors.email && touched.email && errors.email} */}
                      {/* {errors.password && touched.password && errors.password} */}
                    </Grid>
                    <Grid item lg={3}>
                      <TextField
                        fullWidth={true}
                        name="ngayCapCu"
                        label="Ngày cấp cũ"
                        variant="outlined"
                        onChange={handleChange}
                        value={values.ngayCapCu}
                      />
                    </Grid>
                    <Grid item lg={3}>
                      <TextField
                        fullWidth={true}
                        name="soGiayChungNhanMoi"
                        label="Số  giấy chứng nhận mới"
                        variant="outlined"
                        onChange={handleChange}
                        value={values.soGiayChungNhanMoi}
                      />
                    </Grid>
                    <Grid item lg={3}>
                      <TextField
                        fullWidth={true}
                        name="ngayCapMoi"
                        label="Ngày cấp mới"
                        variant="outlined"
                        onChange={handleChange}
                        value={values.ngayCapMoi}
                      />
                    </Grid>

                    <Grid item lg={3}>
                      <TextField
                        label="Đối tượng"
                        name="doiTuong"
                        fullWidth
                        value={values.doiTuong}
                        select
                        onChange={handleChange}
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
                        onChange={handleChange}
                        value={values.soDangKiDoanhNghiep}
                      />
                    </Grid>
                    <Grid item lg={3}>
                      <TextField
                        fullWidth={true}
                        name="ngayCapSoDoanhNghiep"
                        label="Ngày cấp"
                        variant="outlined"
                        onChange={handleChange}
                        value={values.ngayCapSoDoanhNghiep}
                      />
                    </Grid>
                    <Grid item lg={3}>
                      <TextField
                        fullWidth={true}
                        name="noiCapSoDanhNghiep"
                        label="Ngày cấp mới"
                        variant="outlined"
                        onChange={handleChange}
                        value={values.noiCapSoDanhNghiep}
                      />
                    </Grid>

                    <Grid item lg={12}>
                      <TextField
                        fullWidth={true}
                        name="tenCoSo"
                        label="Tên cơ sở cá nhân"
                        variant="outlined"
                        onChange={handleChange}
                        value={values.tenCoSo}
                      />
                    </Grid>

                    <Grid item lg={12}>
                      <TextField
                        fullWidth={true}
                        name="diaChi"
                        label="Địa chỉ"
                        variant="outlined"
                        onChange={handleChange}
                        value={values.diaChi}
                      />
                    </Grid>

                    <Grid item lg={3}>
                      <TextField
                        fullWidth={true}
                        name="soDienThoai"
                        label="Số điện thoại"
                        variant="outlined"
                        onChange={handleChange}
                        value={values.soDienThoai}
                      />
                    </Grid>
                    <Grid item lg={3}>
                      <TextField
                        fullWidth={true}
                        name="fax"
                        label="Fax"
                        variant="outlined"
                        onChange={handleChange}
                        value={values.fax}
                      />
                    </Grid>
                    <Grid item lg={6}>
                      <TextField
                        fullWidth={true}
                        name="email"
                        label="Ngày cấp mới"
                        variant="outlined"
                        onChange={handleChange}
                        value={values.email}
                      />
                    </Grid>

                    <Grid item lg={3}>
                      <TextField
                        fullWidth={true}
                        name="soCanCuoc"
                        label="Số căn cước "
                        variant="outlined"
                        onChange={handleChange}
                        value={values.soCanCuoc}
                      />
                      {/* {errors.email && touched.email && errors.email} */}
                      {/* {errors.password && touched.password && errors.password} */}
                    </Grid>
                    <Grid item lg={3}>
                      <TextField
                        fullWidth={true}
                        name="ngayCapSoCanCuoc"
                        label="Ngày cấp"
                        variant="outlined"
                        onChange={handleChange}
                        value={values.ngayCapSoCanCuoc}
                      />
                    </Grid>
                    <Grid item lg={3}>
                      <TextField
                        fullWidth={true}
                        name="noiCapSoCanCuoc"
                        label="Nơi cấp"
                        variant="outlined"
                        onChange={handleChange}
                        value={values.noiCapSoCanCuoc}
                      />
                    </Grid>
                    <Grid item lg={3}>
                      <TextField
                        fullWidth={true}
                        name="hoTenChuSohuu"
                        label="Họ tên chủ cơ sở"
                        variant="outlined"
                        onChange={handleChange}
                        value={values.hoTenChuSohuu}
                      />
                    </Grid>

                    <Grid item lg={6}>
                      <TextField
                        fullWidth={true}
                        name="tenDonViChuQuan"
                        label="Tên đơn vị chủ quản"
                        variant="outlined"
                        onChange={handleChange}
                        value={values.tenDonViChuQuan}
                      />
                    </Grid>
                    <Grid item lg={3}>
                      <TextField
                        fullWidth={true}
                        name="soDienThoaiChuQuan"
                        label="Số điện thoại"
                        variant="outlined"
                        onChange={handleChange}
                        value={values.soDienThoaiChuQuan}
                      />
                    </Grid>
                    <Grid item lg={3}>
                      <TextField
                        fullWidth={true}
                        name="faxChuQuan"
                        label="Fax"
                        variant="outlined"
                        onChange={handleChange}
                        value={values.faxChuQuan}
                      />
                    </Grid>
                    <Grid item lg={12}>
                      <TextField
                        fullWidth={true}
                        name="diaDiemNoiChuaPhan"
                        label="Địa điểm chứa(kho) phân bón(nếu có)"
                        variant="outlined"
                        onChange={handleChange}
                        value={values.diaDiemNoiChuaPhan}
                      />
                    </Grid>
                    <Grid item lg={3}>
                      <TextField
                        fullWidth={true}
                        name="tinhTrang"
                        label="Tình trạng"
                        variant="outlined"
                        select
                        onChange={handleChange}
                        value={values.tinhTrang}
                      >
                        <MenuItem value={1}>Còn hoạt động</MenuItem>
                        <MenuItem value={0}>Ngừng hoạt động</MenuItem>
                      </TextField>
                    </Grid>
                    <Grid item lg={3}>
                      <TextField
                        fullWidth={true}
                        name="lanCapLai"
                        label="Lần lập lại"
                        variant="outlined"
                        onChange={handleChange}
                        value={values.lanCapLai}
                      />
                    </Grid>
                    <Grid item lg={6}>
                      <TextField
                        fullWidth={true}
                        name="duDieuKien"
                        label="Đủ điều kiện"
                        variant="outlined"
                        select
                        onChange={handleChange}
                        value={values.duDieuKien}
                      >
                        <MenuItem value={true}>Đủ điều kiện</MenuItem>
                        <MenuItem value={false}>Không đủ điều kiện</MenuItem>
                      </TextField>
                    </Grid>
                    {/* tinhTrang: true,
                lanCapLai: "",
                duDieuKien: true, */}
                    <Grid item lg={12}>
                      <Button
                        variant="outlined"
                        size="large"
                        color="primary"
                        type="submit"
                      >
                        Nhập
                      </Button>
                      <Button
                        variant="outlined"
                        size="large"
                        color="primary"
                        type="submit"
                        onClick={() => {
                          this.props.history.replace("/home");
                        }}
                      >
                        Quay lại
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              )}
            </Formik>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default connect()(HomeInput);
