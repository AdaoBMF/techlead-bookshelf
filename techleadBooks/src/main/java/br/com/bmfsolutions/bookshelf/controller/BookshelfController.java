package br.com.bmfsolutions.bookshelf.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.bmfsolutions.bookshelf.domain.LoginCredentials;
import br.com.bmfsolutions.bookshelf.domain.User;
import br.com.bmfsolutions.bookshelf.exception.TargetNotFoundException;
import br.com.bmfsolutions.bookshelf.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:333")
@RequestMapping("authentication")
public class BookshelfController {

	@Autowired
	private UserService userService;
	
	@GetMapping("/{mail}")
	public User loggedUser(@PathVariable String mail) {
		try {
			return userService.getUserByMail(mail);
		}catch(TargetNotFoundException e) {
			System.out.println(e.toString());
			return null;
		}
	}
	
	@PostMapping
	public Integer isUser(@RequestBody LoginCredentials log) {
		try {
			return userService.checkUser(log);
		}catch(TargetNotFoundException e) {
			return 3;
		}
	}
}
