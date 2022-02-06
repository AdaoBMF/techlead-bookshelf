package br.com.bmfsolutions.bookshelf.controller;

import java.time.LocalDate;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import br.com.bmfsolutions.bookshelf.domain.Book;
import br.com.bmfsolutions.bookshelf.domain.User;
import br.com.bmfsolutions.bookshelf.service.BookService;

@SpringBootTest
public class BookControllerTests {

	@Autowired
	private BookService bookService;
	
	private Book testBook;
	
	@BeforeEach
	void initTestBook() {
		User testUser = new User(1,"TestUser", "test@mail.com", "123456");
		testBook = new Book(
				null,
				"TestName", 
				"TestAuthor",
				LocalDate.now(),
				testUser
				);
	}
	
	
	@Test
	private void insertTest() {
		
	}
	
	
	
}
