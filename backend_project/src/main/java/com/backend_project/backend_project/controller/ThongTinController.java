package com.backend_project.backend_project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend_project.backend_project.entity.ThongTin;
import com.backend_project.backend_project.service.IThongTinService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/thongtin")
public class ThongTinController {
	@Autowired
	private IThongTinService thongTinService;

	@PostMapping("")
	public Object addThongTin(@RequestBody ThongTin thongTin) {
		try {
			thongTinService.save(thongTin);
			return new ResponseEntity<Object>("Thêm thành công !", HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<Object>("Thêm Thất bại", HttpStatus.BAD_REQUEST);
		}

	}

	@GetMapping("")
	public Object list() {
		try {

			return new ResponseEntity<Object>(thongTinService.list(), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<Object>("Không dữ liệu", HttpStatus.BAD_REQUEST);
		}

	}

	@DeleteMapping("{id}")
	public Object remove(@PathVariable("id") int id) {
		try {
			thongTinService.remove(id);
			return new ResponseEntity<Object>("Xóa thành công!", HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<Object>("Không dữ liệu", HttpStatus.BAD_REQUEST);
		}

	}

	@PutMapping("{id}")
	public Object edit(@PathVariable("id") int id, @RequestBody ThongTin thongTin) {
		try {
			thongTinService.edit(id, thongTin);
			return new ResponseEntity<Object>("Sửa thành công!", HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<Object>("Không dữ liệu", HttpStatus.BAD_REQUEST);
		}
	}
}
