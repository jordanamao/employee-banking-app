package com.buckets.bankingapp;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.*;

import com.buckets.bankingapp.controllers.TodoController;
import com.buckets.bankingapp.repositories.TodoRepository;
import com.buckets.bankingapp.services.TodoService;

@RunWith(MockitoJUnitRunner.class)
public class TestTodoController {
	
	private MockMvc mvc;
	
	@Autowired
	private TodoService todoService;
	
	
	@Before
	public void setup() {
		final TodoController todoController = new TodoController();
		mvc = MockMvcBuilders.standaloneSetup(todoController).build();
		
	}
	
	
	
	@Test
	public void testGet() throws Exception {
		
		mvc.perform(get("/api/todos").contentType("application/json"))
				.andExpect(status().isOk());
		
	}

}
