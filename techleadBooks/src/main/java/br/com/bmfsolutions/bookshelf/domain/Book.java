package br.com.bmfsolutions.bookshelf.domain;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Book {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(length = 64, nullable = false, unique = true)
	private String title;
			
	@Column(length = 64 ,nullable = false)
	private String author;
	
	@Column
	private LocalDate uploadDate = LocalDate.now();
	
	@ManyToOne
	@JoinColumn(name= "user_id",nullable = false)
	private User user;
}
