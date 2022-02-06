package br.com.bmfsolutions.bookshelf.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.bmfsolutions.bookshelf.domain.LoginCredentials;
import br.com.bmfsolutions.bookshelf.domain.User;
import br.com.bmfsolutions.bookshelf.exception.NotAllowedActionException;
import br.com.bmfsolutions.bookshelf.exception.TargetNotFoundException;
import br.com.bmfsolutions.bookshelf.exception.UserAlreadyExistsException;
import br.com.bmfsolutions.bookshelf.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;
	
	public User searchId(Integer id) {
		Optional<User> user = userRepository.findById(id);
		if(user.isEmpty()) {
			throw new TargetNotFoundException();
		}
		return user.get();
	}
	
	public List<User> list(){
		return userRepository.findAll();
	}
	
	public User insert(User user) {
		Optional<User> userOptional = userRepository.findByMail(user.getMail());
		if(userOptional.isPresent()) {
			throw new UserAlreadyExistsException();
		}
		if(user.getAdmin()!= 0) {
			throw new NotAllowedActionException();
		}
		return userRepository.save(user);
	}
	
	public User deleteUser(Integer id) {
		Optional<User> userOptional = userRepository.findById(id);
		if(userOptional.isEmpty()) {
			throw new TargetNotFoundException();
		}else if (userOptional.get().getAdmin() == 1){
			throw new NotAllowedActionException();
		}
		User user = userOptional.get();
			userRepository.delete(user);			
			return user;
	}
	
	public User editUser(User user) {
		if(user.getAdmin() != 0) {
			throw new NotAllowedActionException();
		}
		return userRepository.save(user);
	}
	
	public Integer checkUser(LoginCredentials log) {
		Optional<User> userOptional = userRepository.findByMail(log.getMail());
		if(userOptional.isEmpty()) {
			throw new TargetNotFoundException();
		}		
		if(userOptional.get().getPassword().equals(log.getPassword())) {
			if(userOptional.get().getAdmin() == 1) return 1;
			return 2;
		}else return 0;
	}
	
	public User getUserByMail(String mail) {
		Optional<User> userOptional = userRepository.findByMail(mail);
		if(userOptional.isEmpty()) {
			throw new TargetNotFoundException();
		}
		User loggedUser = userOptional.get();
		loggedUser.setPassword("******");		
		
		return loggedUser;
	}
	
}
