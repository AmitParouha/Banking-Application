package com.bank.app.controller;

import com.bank.app.payload.RegisterUserDto;
import com.bank.app.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody RegisterUserDto userDto){
        if(userService.registerUser(userDto)){
            return ResponseEntity.status(HttpStatus.CREATED).body(userDto.getEmail()+" registered.");
        }
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("something went worng!");
    }

}
