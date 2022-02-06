package br.com.bmfsolutions.bookshelf.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.bmfsolutions.bookshelf.domain.Book;
import br.com.bmfsolutions.bookshelf.exception.TargetNotFoundException;
import br.com.bmfsolutions.bookshelf.repository.BookRepository;

@Service
public class BookService {

	@Autowired
	private BookRepository bookRepository;
	
	public Book searchId(Integer id) {
		Optional<Book> book = bookRepository.findById(id);
		if(book.isEmpty()) {
			throw new TargetNotFoundException();
		}
		return book.get();
	}

	public List<Book> list(){
		return bookRepository.findAll();
	}

	public Book insert(Book book) {
		return bookRepository.save(book);
	}
	
	public Book deleteBook(Integer id) {
		Optional<Book> bookOptional = bookRepository.findById(id);
		if(bookOptional.isEmpty()) {
			throw new TargetNotFoundException();
		}
		Book book = bookOptional.get();
		bookRepository.delete(book);			
		return book;
	}
	
	public Book editBook(Book book) {
		return bookRepository.save(book);
	}

}
