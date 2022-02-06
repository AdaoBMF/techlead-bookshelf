package br.com.bmfsolutions.bookshelf.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.com.bmfsolutions.bookshelf.domain.User;

public interface UserRepository extends JpaRepository<User, Integer> {

	@Query("SELECT u FROM User u WHERE u.mail = :mail")
	public Optional<User> findByMail(String mail);
	
}
