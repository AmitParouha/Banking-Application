package com.bank.app.payload;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegisterUserDto {
//    private long userId;
    private String name;
    private String username;
    private String mobile;
    private String email;
    private String password;
//    private String role;
//    private LocalDateTime createdAt;
}
