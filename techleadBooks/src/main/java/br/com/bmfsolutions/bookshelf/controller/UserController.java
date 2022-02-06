package br.com.bmfsolutions.bookshelf.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import br.com.bmfsolutions.bookshelf.domain.User;
import br.com.bmfsolutions.bookshelf.exception.NotAllowedActionException;
import br.com.bmfsolutions.bookshelf.exception.TargetNotFoundException;
import br.com.bmfsolutions.bookshelf.exception.UserAlreadyExistsException;
import br.com.bmfsolutions.bookshelf.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:333")
@RequestMapping("users")
public class UserController {

	@Autowired
	private UserService userService;
	
	@GetMapping
	public List<User> listar() {
		return userService.list();		
	}

	@GetMapping("/{id}")
	public User searchId(@PathVariable Integer id) {
		try {
			return userService.searchId(id);			
		}catch(TargetNotFoundException e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Usuário não encontrado", e);
		}
	}
	
	@PostMapping
	public User insert(@RequestBody User user) {
		try {
			return userService.insert(user);			
		}catch(NotAllowedActionException e) {
			throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Tentativa de Registro Ilegal", e);
		}catch(UserAlreadyExistsException e) {
			throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Email já cadastrado", e);			
		}
	}
	
	@DeleteMapping("/{id}")
	public User deleteUser(@PathVariable Integer id) {
		try {
			return userService.deleteUser(id);
		}catch(TargetNotFoundException e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Usuário não encontrado", e);
		}
	}
	
	@PutMapping
	public User editUser(@RequestBody User user ) {
		try {
			return userService.editUser(user);
		}catch(NotAllowedActionException e) {
			throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Tentativa de Registro Ilegal", e);
		}
	}
}
