package com.buckets.bankingapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.buckets.bankingapp.models.Todo;


@Repository
@CrossOrigin("*")
public interface TodoRepository extends JpaRepository<Todo, Long>{
}
