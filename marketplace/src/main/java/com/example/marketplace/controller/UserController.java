package com.example.marketplace.controller;

import com.example.marketplace.model.Product;
import com.example.marketplace.model.User;
import com.example.marketplace.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/user")
@PreAuthorize("hasRole('END_USER')")
public class UserController {

    private final UserService userService;

    @GetMapping("")
    public String welcome(@RequestParam("username") String username) {
        return "Welcome " + username + "!";
    }

    //Every product page
    @GetMapping("/products/{productName}")
    public String productPage(@RequestParam("name") String productName) {
        return productName;
    }

    @GetMapping("/favorite-list")
    public List<Product> favorite(@RequestParam("userId") Long userId) {
        return userService.getFavoriteList(userId);
        //remove from favorite button next to the product name
        //product names are clickable
    }

    @GetMapping("/blacklist")
    public List<User> blacklist(@RequestParam("userId") Long userId) {
        return userService.getBlacklist(userId);
        //remove from blacklist button next to the seller name
        //seller names are not clickable
    }
}
