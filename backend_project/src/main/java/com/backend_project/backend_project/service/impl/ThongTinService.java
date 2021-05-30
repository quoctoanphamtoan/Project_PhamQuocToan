package com.backend_project.backend_project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend_project.backend_project.entity.ThongTin;
import com.backend_project.backend_project.repository.IThongTinReponsitory;
import com.backend_project.backend_project.service.IThongTinService;

@Service
public class ThongTinService implements IThongTinService {
	@Autowired
	private IThongTinReponsitory thongTinReponsitory;

	@Override
	public ThongTin save(ThongTin thongTin) {
		return thongTinReponsitory.save(thongTin);
	}

	@Override
	public void remove(int id) {
		thongTinReponsitory.deleteById(id);

	}

	@Override
	public void edit(int id, ThongTin thongTinDto) {
		ThongTin thongTinEdit = thongTinReponsitory.findById(id).orElse(null);

		thongTinEdit.setDiaChi(thongTinDto.getDiaChi());
		thongTinEdit.setDiaDiemNoiChuaPhan(thongTinDto.getDiaDiemNoiChuaPhan());
		thongTinEdit.setDoiTuong(thongTinDto.getDoiTuong());
		thongTinEdit.setDuDieuKien(thongTinDto.isDuDieuKien());
		thongTinEdit.setEmail(thongTinDto.getEmail());
		thongTinEdit.setFax(thongTinDto.getFax());
		thongTinEdit.setFaxChuQuan(thongTinDto.getFaxChuQuan());
		thongTinEdit.setHoTenChuSohuu(thongTinDto.getHoTenChuSohuu());
		thongTinEdit.setLanCapLai(thongTinDto.getLanCapLai());
		thongTinEdit.setNgayCapCu(thongTinDto.getNgayCapCu());
		thongTinEdit.setNgayCapMoi(thongTinDto.getNgayCapMoi());
		thongTinEdit.setNgayCapSoCanCuoc(thongTinDto.getNgayCapSoCanCuoc());
		thongTinEdit.setNgayCapSoDoanhNghiep(thongTinDto.getNgayCapSoDoanhNghiep());
		thongTinEdit.setNoiCapSoCanCuoc(thongTinDto.getNoiCapSoCanCuoc());
		thongTinEdit.setNoiCapSoDanhNghiep(thongTinDto.getNoiCapSoDanhNghiep());
		thongTinEdit.setSoCanCuoc(thongTinDto.getSoCanCuoc());
		thongTinEdit.setSoDangKiDoanhNghiep(thongTinDto.getSoDangKiDoanhNghiep());
		thongTinEdit.setSoDienThoai(thongTinDto.getSoDienThoai());
		thongTinEdit.setSoDienThoaiChuQuan(thongTinDto.getSoDienThoaiChuQuan());
		thongTinEdit.setSoGiayChungNhanCu(thongTinDto.getSoGiayChungNhanCu());
		thongTinEdit.setSoGiayChungNhanMoi(thongTinDto.getSoGiayChungNhanMoi());
		thongTinEdit.setTenCoSo(thongTinDto.getTenCoSo());
		thongTinEdit.setTenDonViChuQuan(thongTinDto.getTenDonViChuQuan());
		thongTinEdit.setTinhTrang(thongTinDto.isTinhTrang());
		thongTinReponsitory.save(thongTinEdit);
	}

	@Override
	public List<ThongTin> list() {
		return thongTinReponsitory.findAll();
	}

	@Override
	public ThongTin getById(int id) {
		return thongTinReponsitory.findById(id).orElse(null);
	}

}
