
package com.canteen.backend.controller;

import com.canteen.backend.dto.MealDTO;
import com.canteen.backend.entity.Meal;
import com.canteen.backend.repository.MealRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/meals")
@CrossOrigin(origins = "*")
public class MealController {

    @Autowired
    private MealRepository mealRepository;

    // Add Meal
    @PostMapping("/add")
    public String addMeal(@RequestBody MealDTO mealDTO) {

        Meal meal = new Meal();
        meal.setName(mealDTO.getName());
        meal.setPrice(mealDTO.getPrice());
        meal.setQuantity(mealDTO.getQuantity());

        mealRepository.save(meal);

        return "Meal added successfully!";
    }

    // View All Meals
    @GetMapping("/all")
    public List<Meal> getAllMeals() {
        return mealRepository.findAll();
    }

    // Update Meal
    @PutMapping("/{id}")
    public String updateMeal(@PathVariable Long id,
                             @RequestBody MealDTO mealDTO) {

        Meal meal = mealRepository.findById(id).orElse(null);

        if (meal == null) {
            return "Meal not found!";
        }

        meal.setName(mealDTO.getName());
        meal.setPrice(mealDTO.getPrice());
        meal.setQuantity(mealDTO.getQuantity());

        mealRepository.save(meal);

        return "Meal updated successfully!";
    }

    // Delete Meal
    @DeleteMapping("/{id}")
    public String deleteMeal(@PathVariable Long id) {

        if (!mealRepository.existsById(id)) {
            return "Meal not found!";
        }

        mealRepository.deleteById(id);

        return "Meal deleted successfully!";
    
}
}

