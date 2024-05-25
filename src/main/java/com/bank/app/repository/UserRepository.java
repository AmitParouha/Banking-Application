package com.bank.app.repository;

import com.bank.app.entity.RegisterUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<RegisterUser, Long> {

    Optional<RegisterUser> findByUsernameOrEmail(String username, String email);

    public Optional<RegisterUser> findByEmail(String email);
    public Optional<RegisterUser> findByUsername(String username);
    public Optional<RegisterUser> findByEmailOrUsername(String email, String username);
    public boolean existsByUsername(String username);
    public boolean existsByEmail(String email);
    public boolean existsByUsernameOrEmail(String username, String email);
}
