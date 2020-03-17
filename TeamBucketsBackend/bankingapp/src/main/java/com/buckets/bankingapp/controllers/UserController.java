package com.buckets.bankingapp.controllers;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.buckets.bankingapp.models.Todo;
import com.buckets.bankingapp.models.User;
import com.buckets.bankingapp.repositories.UserRepository;
import com.buckets.bankingapp.services.TodoService;
import com.buckets.bankingapp.services.UserService;

@RestController
@RequestMapping("/api")
public class UserController {
	
	@Autowired
	UserService userService;
	TodoService todoService;
	
	@Autowired
	UserRepository userRepo;

	@PostMapping("/users")
    public User createUser(@Valid @RequestBody User user) {
    	return userService.createUser(user);
    }
	
	@GetMapping("/users")
	public List<User> getAllUsers(){
		return userService.lisAllUsers();
	}
	
/*	
	@GetMapping("/users/{id}")
	public EntityModel<User> getUser(@PathVariable("id") Long id) {
		
		Optional<User> user = userRepo.findById(id);
		if(!user.isPresent()) {
			System.out.println("Not present");
		}
		
		EntityModel<User> resource = new EntityModel<User>(user.get());
	    WebMvcLinkBuilder linkTo = WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(this.getClass()).getAllUsers());
		resource.add(linkTo.withRel("all"));
		return resource;
	}
*/	
	
	@GetMapping("/users/{name}")
	public EntityModel<User> getUserByName(@PathVariable("name") String name) {
		Optional<User> user = userService.getUserByName(name);
		EntityModel<User> resource = new EntityModel<User>(user.get());
	    WebMvcLinkBuilder linkTo = WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(this.getClass()).getAllUsers());
		resource.add(linkTo.withRel("all"));
		return resource;
	}
	
	
	@PostMapping("/users/{id}")
	public Todo plusTodo(Todo todo, @PathVariable("id") Long id) {
		//List<Todo> userTodos = userService.plusTodo(user);
		
		return todoService.addTodo(todo, id);
	}
	
	 @PutMapping("/users/{id}")
	public User updateUser(@PathVariable(value="id") Long userId, @Valid @RequestBody User userDetails) {
	    	
		 return userService.editUser(userId, userDetails);
		 
	}
	
	
	/***** Delete a user *****/
    @DeleteMapping("/users/{id}")
    public User deleteUser(@PathVariable(value="id") Long userId){
    	
    	return userService.deleteUser(userId);
    	
    }
}
