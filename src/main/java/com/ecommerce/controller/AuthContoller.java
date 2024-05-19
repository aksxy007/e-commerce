package com.ecommerce.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.config.JwtProvider;
import com.ecommerce.exception.UserException;
import com.ecommerce.model.User;
import com.ecommerce.repository.UserRepository;
import com.ecommerce.request.LoginRequest;
import com.ecommerce.service.CustomUserServiceImplementation;

import org.springframework.web.bind.annotation.PostMapping;


// This enables to use the endpoint in front end to call this API
// The second line specifies that the api ending with /auth is only accessible by this api.
@RestController
@RequestMapping("/auth")
public class AuthContoller {

    private UserRepository userRepository;
    private JwtProvider jwtProvider;
    private PasswordEncoder passwordEncoder;
    private CustomUserServiceImplementation customUserService;

    public AuthContoller(UserRepository userRepository,PasswordEncoder passwordEncoder,CustomUserServiceImplementation customUserService){
        this.userRepository=userRepository;
        this.customUserService=customUserService;
        this.passwordEncoder=passwordEncoder;
    }
    
    @PostMapping("/signup")
    public ResponseEntity<AuthResponse> createUserHandler(@RequestBody User user) throws UserException{
        
        String email = user.getEmail();
        String password = user.getPassword();
        String firstName = user.getFirstName();
        String lastName = user.getLastName();

        User isEmailExists = userRepository.findByEmail(email);

        if (isEmailExists!=null)
        {
            throw new UserException("Account exists with this Email.");
        }
        


        User createdUser = new User();
        createdUser.setEmail(email);
        createdUser.setPassword(passwordEncoder.encode(password));
        createdUser.setFirstName(firstName);
        createdUser.setLastName(lastName);
         
        User savedUser = userRepository.save(createdUser);

        Authentication authentication =new UsernamePasswordAuthenticationToken(savedUser.getEmail(), savedUser.getPassword());
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = jwtProvider.generateToken(authentication);
        
        AuthResponse authResponse = new AuthResponse(token, "Signup Success");
        
        return new ResponseEntity<AuthResponse>(authResponse,HttpStatus.CREATED);
        

    }

    @PostMapping("/signin")
    public ResponseEntity<AuthResponse> loginUserHandler(LoginRequest loginRequest){
        

        String username =loginRequest.getEmail();
        String password = loginRequest.getPassword();

        Authentication authentication = authenticate(username,password);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = jwtProvider.generateToken(authentication);
        
        AuthResponse authResponse = new AuthResponse(token, "login Success");

        return new ResponseEntity<AuthResponse>(authResponse,HttpStatus.CREATED);

    }

    private Authentication authenticate(String username, String password) {
        // TODO Auto-generated method stub
        
        UserDetails userDetails=customUserService.loadUserByUsername(username);
        if (userDetails==null){
            throw new BadCredentialsException("Invalid Username...");
        }

        if(!passwordEncoder.matches(password, userDetails.getPassword())){
            throw new BadCredentialsException("Invalid Password...");
        }

        return new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());
    }
}
