package br.com.bmfsolutions.bookshelf.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import br.com.bmfsolutions.bookshelf.domain.Category;
import br.com.bmfsolutions.bookshelf.exception.TargetNotFoundException;
import br.com.bmfsolutions.bookshelf.service.CategoryService;

@RestController
@RequestMapping("categories")
public class CategoryController {

	@Autowired
	private CategoryService categoryService;
	
	@GetMapping
	public List<Category> listar() {
		List<Category> categorias = categoryService.list();
		return categorias;
	}

	@GetMapping("/{cod}")
	public Category searchCod(@PathVariable Integer cod) {
		try {
			return categoryService.searchId(cod);			
		}catch(TargetNotFoundException e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Categoria não encontrada", e);
		}
	}
	
	@PostMapping
	public Category insert(@RequestBody Category cat) {
		return categoryService.insert(cat);
	}
	
	@DeleteMapping("/{cod}")
	public Category deleteCat(@PathVariable Integer cod) {
		try {
			return categoryService.deleteCat(cod);
		}catch(TargetNotFoundException e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Categoria não encontrada", e);
		}
	}
	
	@PutMapping
	public Category editCat(@RequestBody Category cat ) {
		return categoryService.editCat(cat);
	}
}
