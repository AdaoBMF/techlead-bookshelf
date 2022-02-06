package br.com.bmfsolutions.bookshelf.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.bmfsolutions.bookshelf.domain.Category;
import br.com.bmfsolutions.bookshelf.exception.TargetNotFoundException;
import br.com.bmfsolutions.bookshelf.repository.CategoryRepository;

@Service
public class CategoryService {

	@Autowired
	private CategoryRepository categoryRepository;
	
	public Category searchId(Integer id) {
		Optional<Category> cat = categoryRepository.findById(id);
		if(cat.isEmpty()) {
			throw new TargetNotFoundException();
		}
		return cat.get();
	}
	
	public List<Category> list(){
		return categoryRepository.findAll();
	}
	
	public Category insert(Category cat) {
		return categoryRepository.save(cat);
	}
	
	public Category deleteCat(Integer id) {
		Optional<Category> catOptional = categoryRepository.findById(id);
		if(catOptional.isEmpty()) {
			throw new TargetNotFoundException();
		}
		Category cat = catOptional.get();
		categoryRepository.delete(cat);			
		return cat;
	}
	
	public Category editCat(Category cat) {
		return categoryRepository.save(cat);
	}
	
}
