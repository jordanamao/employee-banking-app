package com.buckets.bankingapp.models;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;



@Entity
@Table(name = "user")
public class User implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long user_id;
	
	@Column(name="username")
	private String username;
	
	@Column(name="password")
	private String password;
	
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
	private List<Todo> todos;
	
	public User() {
		this(-1L,"N/A","N/A", new ArrayList<Todo>());
	}
	
	//test

	public User(Long user_id, String username, String password, List<Todo> todos) {
		super();
		this.user_id = user_id;
		this.username = username;
		this.password = password;
		this.todos = todos;
	}

	public Long getUser_id() {
		return user_id;
	}

	public void setUser_id(Long user_id) {
		this.user_id = user_id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	public List<Todo> getTodos() {
		return todos;
	}

	public void setTodos(List<Todo> todos) {
		for(int a = 0; a < todos.size(); a++) {
			addTodo(todos.get(a));
		}
	}
	
	public void addTodo(Todo todo) {
		todo.setUser(this);
		todos.add(todo);
	}
	
	public Todo getTodo(Long user_id) {
		for(int a = 0; a < todos.size(); a++) {
			if(todos.get(a).getId() == user_id) {
				return todos.get(a);
			}
		}
		return new Todo();
	}
	
	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "User [user_id=" + user_id + ", username=" + username + ", password=" + password + "]";
	}



//	public void updateTodo(Todo todo) {
//		Todo accToUpdate = getTodo(todo.getId());
//		if(accToUpdate.getId() != -1L) {
//			accToUpdate.setAmount(todo.getAmount());
//			accToUpdate.setType(todo.getType());
//		}
//	}

}
