package com.example.marketplace.controller;

import com.example.marketplace.dto.ProductDto;
import com.example.marketplace.dto.UpdatedProductDto;
import com.example.marketplace.model.Product;
import com.example.marketplace.model.User;
import com.example.marketplace.service.ProductService;
import com.example.marketplace.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/admin")
@PreAuthorize("hasRole('ADMIN')")
public class AdminController {
    private final UserService userService;
    private final ProductService productService;

    @GetMapping("")
    public String welcome(String username){
        return "Welcome!";
    }

    @GetMapping("/products")
    public List<Product> products(){
        return productService.getAllProducts();
    }

    @PostMapping("/products/add")
    public void addProduct(@RequestBody @Valid ProductDto product){
        productService.addProduct(product);
    }

    @GetMapping("/users")
    public List<User> users(){
        return userService.getEndUserList();
    }

    @GetMapping("/sellers")
    public List<User> sellers(){
        return userService.getSellerList();
    }

    @GetMapping("/get-user")
    public User getUser(String username){
        return userService.findByUsername(username);
    }

    @DeleteMapping("/delete-product/{id}")
    public List<Product> deleteProduct(@PathVariable Long id){
        productService.deleteProductById(id);
        return productService.getAllProducts();
    }

    @PutMapping("/products/update")
    public void updateProduct(@RequestBody @Valid UpdatedProductDto p){
        productService.updateProduct(p.getProductId(), p.getName(), p.getPrice());
    }

    @DeleteMapping("/delete-enduser/{id}")
    public List<User> deleteEndUser(@PathVariable Long id){
        userService.deleteUserById(id);
        return userService.getEndUserList();
    }
    @DeleteMapping("/delete-seller/{id}")
    public List<User> deleteSeller(@PathVariable Long id){
        userService.deleteUserById(id);
        return userService.getSellerList();
    }


}
