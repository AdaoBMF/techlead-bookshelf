package br.com.bmfsolutions.bookshelf.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.bmfsolutions.bookshelf.domain.Category;

public interface CategoryRepository extends JpaRepository<Category, Integer> {

}
