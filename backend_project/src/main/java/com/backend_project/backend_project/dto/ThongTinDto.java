package com.backend_project.backend_project.dto;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ThongTinDto {

	private int id;
	private String soGiayChungNhanCu;
	private Date ngayCapCu;
	private String soGiayChungNhanMoi;
	private Date ngayCapMoi;
	private String doiTuong;
	private String soDangKiDoanhNghiep;
	private Date ngayCapSoDoanhNghiep;
	private String noiCapSoDanhNghiep;
	private String tenCoSo;
	private String diaChi;
	private String soDienThoai;
	private String fax;
	private String email;
	private String soCanCuoc;
	private Date ngayCapSoCanCuoc;
	private String noiCapSoCanCuoc;
	private String hoTenChuSohuu;
	private String tenDonViChuQuan;
	private String soDienThoaiChuQuan;
	private String faxChuQuan;
	private String diaDiemNoiChuaPhan;
	private boolean tinhTrang;
	private int lanCapLai;
	private boolean duDieuKien;

	 

}
