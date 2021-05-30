package com.backend_project.backend_project.entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "ThongTin")
@AllArgsConstructor
@NoArgsConstructor
@Data  
public class ThongTin {
	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	private int id;
	@Column(nullable = false,name = "soGiayChungNhanCu")
	private String soGiayChungNhanCu;
	@Column(nullable = false,name = "ngayCapCu")
	private Date ngayCapCu;
	@Column(nullable = false,name = "soGiayChungNhanMoi")
	private String soGiayChungNhanMoi;
	@Column(nullable = false,name = "ngayCapMoi")
	private Date ngayCapMoi;
	@Column(nullable = false,name = "doiTuong")
	private String doiTuong;
	@Column(nullable = false,name = "soDangKiDoanhNghiep")
	private String soDangKiDoanhNghiep;
	@Column(nullable = false,name = "ngayCapSoDoanhNghiep")
	private Date ngayCapSoDoanhNghiep;
	@Column(nullable = false,name = "noiCapSoDanhNghiep")
	private String noiCapSoDanhNghiep;
	@Column(nullable = false,name = "tenCoSo")
	private String tenCoSo;
	@Column(nullable = false,name = "diaChi")
	private String diaChi;
	@Column(nullable = false,name = "soDienThoai")
	private String soDienThoai;
	@Column(nullable = false,name = "fax")
	private String fax;
	@Column(nullable = false,name = "email")
	private String email;
	@Column(nullable = false,name = "soCanCuoc")
	private String soCanCuoc;
	@Column(nullable = false,name = "ngayCapSoCanCuoc")
	private Date ngayCapSoCanCuoc;
	@Column(nullable = false,name = "noiCapSoCanCuoc")
	private String noiCapSoCanCuoc;
	@Column(nullable = false,name = "hoTenChuSohuu")
	private String hoTenChuSohuu;
	@Column(nullable = false,name = "tenDonViChuQuan")
	private String tenDonViChuQuan;
	@Column(nullable = false,name = "soDienThoaiChuQuan")
	private String soDienThoaiChuQuan;
	@Column(nullable = false,name = "faxChuQuan")
	private String faxChuQuan;
	@Column(nullable = false,name = "diaDiemNoiChuaPhan")
	private String diaDiemNoiChuaPhan;
	@Column(nullable = false,name = "tinhTrang")
	private boolean tinhTrang;
	@Column(nullable = false,name = "lanCapLai")
	private int lanCapLai;
	@Column(nullable = false,name = "duDieuKien")
	private boolean duDieuKien;
}
