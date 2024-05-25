package com.bank.app.service;

import com.bank.app.payload.LoginUser;
import com.bank.app.payload.RegisterUserDto;

public interface UserService {

    public boolean registerUser(RegisterUserDto userDto);
    public boolean loginUser(LoginUser loginUser);
    public boolean changePassword();

}
