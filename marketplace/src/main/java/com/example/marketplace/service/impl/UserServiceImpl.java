package com.example.marketplace.service.impl;

import com.example.marketplace.model.Product;
import com.example.marketplace.model.Role;
import com.example.marketplace.model.User;
import com.example.marketplace.repository.ProductRepository;
import com.example.marketplace.repository.UserRepository;
import com.example.marketplace.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final ProductRepository productRepository;


    @Override
    public User findByUsername(String username) {
        return userRepository.findUsersByUsername(username);
    }

    @Override
    public User findById(Long id) {
        return userRepository.findUsersById(id);
    }

    @Override
    public Boolean existsByUsername(String username) {
        if(userRepository.findUsersByUsername(username) != null){
            return false;
        }else{
            return true;
        }
    }

//    //Brings all products for enduser except blacklisted sellers'
//    @Override
//    public List<Product> getProductList(Long userId) {
//        List<Product> productList = productRepository.getAllProducts();
//
//        List<User> blacklist = userRepository.getBlacklist(userId);
//        for(User u: blacklist){
//            for(Product p: u.getProductList()){
//                productList.remove(p);
//            }
//        }
//
//        return productList;
//    }


    @Override
    public List<User> getEndUserList() {
        return userRepository.findUsersByRole(Role.END_USER);
    }

    @Override
    public List<User> getSellerList() {
        return userRepository.findUsersByRole(Role.SELLER);
    }



    @Override
    public List<User> getBlacklist(Long userId) {
        return userRepository.getBlacklist(userId);
    }

    @Override
    public void addToBlacklist(Long userId, User seller) {
        userRepository.getBlacklist(userId).add(seller);

    }

    @Override
    public void removeFromBlacklist(Long userId, User seller) {
        userRepository.getBlacklist(userId).remove(seller);
    }

    @Override
    public List<Product> getFavoriteList(Long userId) {
        return userRepository.getFavoriteList(userId);
    }

    @Override
    public void addToFavoriteList(Long userId, Product product) {
        userRepository.getFavoriteList(userId).add(product);
    }

    @Override
    public void removeFromFavoriteList(Long userId, Product product) {
        userRepository.getFavoriteList(userId).remove(product);
    }

    @Override
    public void deleteUserById(Long id) {
        userRepository.deleteById(id);
    }
}
