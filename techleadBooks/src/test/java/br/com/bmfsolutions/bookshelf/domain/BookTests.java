package br.com.bmfsolutions.bookshelf.domain;

import java.time.LocalDate;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class BookTests {

	@SuppressWarnings("unused")
	@Test
	void criar() {
		User testUser = new User(1,"TestUser", "test@mail.com", "123456");
		Book b = new Book(
				null, 
				"The godFather", 
				"Mario Puzzo",
				LocalDate.now(),
				testUser
				);
	}
}
