package com.suraj.taskmanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.suraj.taskmanagement.entity.Task;

public interface TaskRepository
        extends JpaRepository<Task, Long> {
}