package com.buckets.bankingapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import com.buckets.bankingapp.exceptions.ResourceNotFoundException;

import com.buckets.bankingapp.models.User;
import com.buckets.bankingapp.repositories.UserRepository;

@Service
@Primary
public class UserService{
	
	@Autowired
	UserRepository userRepo;
	
	//return all users
	public List<User> lisAllUsers()
	{
		return userRepo.findAll();
	}
	
	
	public User getUser(Long user_id) 
	{
		Optional<User> tempTodo = userRepo.findById(user_id);
		
		if(tempTodo.isPresent())
		{
			return tempTodo.get();
		}
		else
		{
			return new User();
		}
			
		
	}
	
	public Optional<User> getUserByName(String name) {
		return userRepo.findByUsername(name);
	}
	
	//add user to list
	public User createUser(User user)
	{
		return userRepo.save(user);
		
	}
	

	
	//update a user in the list
	public User editUser(Long userId, User userDetails){
		
		User user = userRepo.findById(userId)
    			.orElseThrow( ()-> new ResourceNotFoundException("user", "id", userId));
    	
    	// update everything except ID.
    	user.setUsername(userDetails.getUsername());
		
    	user.setPassword(userDetails.getPassword());
    	
    	User updatedUser = userRepo.save(user);
    	
    	return updatedUser;
	}

	/***** Delete a user *****/
	public User deleteUser(Long userId)
	{
		User user = userRepo.findById(userId)
    			.orElseThrow( ()-> new ResourceNotFoundException("User", "id", userId));
    	
		
		User deletedUser = user;
		
		userRepo.delete(user);

    	
    	return deletedUser;
	}
		
	
}
