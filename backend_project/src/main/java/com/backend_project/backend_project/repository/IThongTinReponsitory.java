package com.backend_project.backend_project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend_project.backend_project.entity.ThongTin;

public interface IThongTinReponsitory extends JpaRepository<ThongTin, Integer> {

}
