package br.com.bmfsolutions.bookshelf.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.bmfsolutions.bookshelf.domain.Book;

public interface BookRepository extends JpaRepository<Book, Integer> {

}
