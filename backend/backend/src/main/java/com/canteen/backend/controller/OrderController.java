package com.canteen.backend.controller;

import com.canteen.backend.entity.Meal;
import com.canteen.backend.entity.Order;
import com.canteen.backend.repository.MealRepository;
import com.canteen.backend.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
@CrossOrigin(origins = "*")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private MealRepository mealRepository;

    // Place Order
    @PostMapping("/place")
    public Order placeOrder(@RequestBody Order order) {

        if (order.getMeal() != null && order.getMeal().getId() != null) {

            Meal meal = mealRepository.findById(order.getMeal().getId())
                    .orElseThrow(() -> new RuntimeException("Meal not found"));

            order.setMeal(meal);
        }

        return orderRepository.save(order);
    }

    // Consumer - My Orders
    @GetMapping("/myorders/{username}")
    public List<Order> getMyOrders(@PathVariable String username) {
        return orderRepository.findByUsername(username);
    }

    // Producer - All Orders
    @GetMapping("/all")
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }
}