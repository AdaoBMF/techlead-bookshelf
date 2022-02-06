package br.com.bmfsolutions.bookshelf.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column(length = 64, nullable = false)
	private String userName;

	@Column(length = 128, nullable = false, unique = true)
	private String mail;

	@Column(length = 124, nullable = false)
	private String password;

	@Column(nullable = false, columnDefinition = "BIT", updatable = false)
	private final Integer admin = 0;

}
