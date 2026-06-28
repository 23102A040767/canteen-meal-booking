 package com.canteen.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.canteen.backend.entity.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

    List<Order> findByUsername(String username);

}