package com.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.model.User;



public interface UserRepository extends JpaRepository<User,Long> {

    // The naming convetion is very important ,camel case naming is important.
    public User findByEmail(String email);
    
} 
