package com.bank.app.service.impl;

import com.bank.app.entity.RegisterUser;
import com.bank.app.payload.LoginUser;
import com.bank.app.payload.RegisterUserDto;
import com.bank.app.repository.UserRepository;
import com.bank.app.service.UserService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;
    private BCryptPasswordEncoder passwordEncoder;
    private ModelMapper mapper;

    @Override
    public boolean registerUser(RegisterUserDto userDto) {
        boolean emailExisted = userRepository.existsByUsername(userDto.getEmail());
        boolean usernameExisted = userRepository.existsByUsername(userDto.getEmail());
        if(emailExisted || usernameExisted){
            throw new BadCredentialsException("username or email already existed!");
        }

        RegisterUser registerUser = mapToRegisterUser(userDto);
        registerUser.setCreatedAt(LocalDateTime.now());
        registerUser.setRole("ROLE_USER");
        String hashPassword = passwordEncoder.encode(registerUser.getPassword());
        registerUser.setPassword(hashPassword);

        RegisterUser createdUser = userRepository.save(registerUser);
        if(createdUser == null){
            return false;
        }
        return true;
    }

    @Override
    public boolean loginUser(LoginUser loginUser) {
        String username = loginUser.getUserName();
        boolean userExisted = userRepository.existsByUsernameOrEmail(username, username);
        if(userExisted){

        }

        return false;
    }

    @Override
    public boolean changePassword() {
        return false;
    }



    public RegisterUser mapToRegisterUser(RegisterUserDto userDto){
        return mapper.map(userDto, RegisterUser.class);
    }

    public RegisterUserDto mapToRegisterUserDto(RegisterUser user){
        return mapper.map(user, RegisterUserDto.class);
    }
}
