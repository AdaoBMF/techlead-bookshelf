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

import br.com.bmfsolutions.bookshelf.domain.Book;
import br.com.bmfsolutions.bookshelf.exception.TargetNotFoundException;
import br.com.bmfsolutions.bookshelf.service.BookService;

@RestController
@CrossOrigin(origins = "http://localhost:333")
@RequestMapping("/books")
public class BookController {

	@Autowired
	private BookService bookService;	
	
	@GetMapping
	public List<Book> listar() {
		return bookService.list();
	}

	@GetMapping("/{id}")
	public Book searchCod(@PathVariable Integer id) {
		try {
			return bookService.searchId(id);			
		}catch(TargetNotFoundException e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Livro não encontrado", e);
		}
	}
	
	@PostMapping
	public Book insert(@RequestBody Book book) {
		return bookService.insert(book);
	}
	
	@DeleteMapping("/{id}")
	public Book deleteBook(@PathVariable Integer id) {
		try {
			return bookService.deleteBook(id);
		}catch(TargetNotFoundException e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Livro não encontrado", e);
		}
	}
	@CrossOrigin(origins = "http://localhost:333")
	@PutMapping 
	public Book editBook(@RequestBody Book book ) {
		return bookService.editBook(book);
	}
}
