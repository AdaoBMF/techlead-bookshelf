package br.com.bmfsolutions.bookshelf.repository;

import java.time.LocalDate;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import br.com.bmfsolutions.bookshelf.domain.Book;
import br.com.bmfsolutions.bookshelf.domain.User;

@SpringBootTest
public class BookRepositoryTests {

	@Autowired
	private BookRepository bookRepository;
	
	User testUser = new User(1,"TestUser", "test@mail.com", "123456");
	
	@Test
	public void inserir() {
		Book bT = new Book(
				1, 
				"The godFather", 
				"Mario Puzzo",
				LocalDate.now(),
				testUser
				);
		
		bookRepository.save(bT);
	}
}
