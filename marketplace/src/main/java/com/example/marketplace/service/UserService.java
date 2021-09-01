package com.example.marketplace.service;

import com.example.marketplace.model.Product;
import com.example.marketplace.model.User;

import java.util.List;

public interface UserService {

    User findByUsername(String username);

    User findById(Long id);

    Boolean existsByUsername(String username);

    //Admin

    List<User> getEndUserList();

    List<User> getSellerList();


    //EndUser


    List<User> getBlacklist(Long userId);

    void addToBlacklist(Long userId, User seller);

    void removeFromBlacklist(Long userId, User seller);

    List<Product> getFavoriteList(Long userId);

    void addToFavoriteList(Long userId, Product product);

    void removeFromFavoriteList(Long userId, Product product);

    void deleteUserById(Long id);


}
