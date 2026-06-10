package com.suraj.taskmanagement.dto;

import com.suraj.taskmanagement.entity.Role;
import lombok.Data;

@Data
public class RegisterRequest {

    private String name;
    private String email;
    private String password;
    private Role role;
}