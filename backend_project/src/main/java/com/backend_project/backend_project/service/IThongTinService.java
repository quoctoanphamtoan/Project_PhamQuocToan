package com.backend_project.backend_project.service;

import java.util.List;

import com.backend_project.backend_project.entity.ThongTin;

public interface IThongTinService {
	ThongTin save(ThongTin thongTinDto);
	void remove(int id);
	void edit(int id,ThongTin thongTinDto);
	List<ThongTin> list();
	ThongTin getById(int id);
}
