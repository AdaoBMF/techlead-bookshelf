package br.com.bmfsolutions.bookshelf.domain;

public class LoginCredentials {

	private String mail;
	private String password;
	
	public LoginCredentials() {}
	
	public String getMail() {
		return mail;
	}
	public void setMail(String mail) {
		this.mail = mail;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
}
