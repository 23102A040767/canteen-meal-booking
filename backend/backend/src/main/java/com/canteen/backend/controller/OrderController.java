 package com.canteen.backend.controller;

import com.canteen.backend.dto.OrderDTO;
import com.canteen.backend.entity.Meal;
import com.canteen.backend.entity.Order;
import com.canteen.backend.repository.MealRepository;
import com.canteen.backend.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/orders")
@CrossOrigin(origins = "*")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private MealRepository mealRepository;

    @PostMapping("/place")
    public String placeOrder(@RequestBody OrderDTO orderDTO) {

        Optional<Meal> optionalMeal = mealRepository.findById(orderDTO.getMealId());

        if (optionalMeal.isEmpty()) {
            return "Meal not found!";
        }

        Meal meal = optionalMeal.get();

        if (meal.getQuantity() < orderDTO.getQuantity()) {
            return "Not enough meal quantity available!";
        }

        // reduce stock
        meal.setQuantity(meal.getQuantity() - orderDTO.getQuantity());
        mealRepository.save(meal);

        // save order
        Order order = new Order();
        order.setUsername(orderDTO.getUsername());
        order.setMealId(orderDTO.getMealId());
        order.setQuantity(orderDTO.getQuantity());

        orderRepository.save(order);

        return "Order placed successfully!";
    }

    @GetMapping("/all")
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }
}