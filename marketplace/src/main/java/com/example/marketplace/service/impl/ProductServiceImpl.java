package com.example.marketplace.service.impl;

import com.example.marketplace.dto.ProductDto;
import com.example.marketplace.model.Product;
import com.example.marketplace.model.User;
import com.example.marketplace.repository.ProductRepository;
import com.example.marketplace.service.ProductService;
import com.example.marketplace.service.UserService;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;
    private final UserService userService;

    public ProductServiceImpl(ProductRepository productRepository, UserService userService) {
        this.productRepository = productRepository;
        this.userService = userService;
    }

    @Override
    public List<Product> getAllProducts() {
        return productRepository.getAllProducts();
    }

    @Override
    public List<Product> searchProduct(String name) {
        return productRepository.findProductByName(name);
    }

    @Override
    public void addProduct(ProductDto p) {
        User seller = userService.findById(p.getSellerId());
        Product product = new Product(p.getName(), p.getPrice(), seller);
        productRepository.save(product);
    }

    @Transactional
    @Override
    public void updateProduct(Long id, String name, Double price) {
        productRepository.updateById(id, name, price);
    }

    @Override
    public void deleteProductById(Long id) {
        productRepository.deleteById(id);
    }

}
