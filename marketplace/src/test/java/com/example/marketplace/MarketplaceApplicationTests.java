package com.example.marketplace;

import com.example.marketplace.model.*;
import com.example.marketplace.repository.ProductRepository;
import com.example.marketplace.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
class MarketplaceApplicationTests {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProductRepository productRepository;


    @Test
    void contextLoads() {


        User admin = User.builder().username("irem").password("12345").role(Role.ADMIN).build();
        final User adminSaved = userRepository.save(admin);



        User seller = User.builder().username("damla").password("heyo").role(Role.SELLER).build();
        final User sellerSaved = userRepository.save(seller);

        Product p = Product.builder().name("bike").price(500).seller(sellerSaved).build();
        final Product ps = productRepository.save(p);

        User seller2 = User.builder().username("alice").password("aliali").role(Role.SELLER).build();
        final User sellerSaved2 = userRepository.save(seller2);
        Product p2 = Product.builder().name("computer").price(800).seller(sellerSaved2).build();
        final Product ps2 = productRepository.save(p2);

        Product p3 = Product.builder().name("pencil").price(10).seller(sellerSaved2).build();
        final Product ps3 = productRepository.save(p3);

        User user = User.builder().username("kayra").password("asdfg").role(Role.END_USER).blacklist(List.of(sellerSaved, sellerSaved2)).favoriteList(List.of(ps3)).build();
        final User userSaved = userRepository.save(user);
    }

}
