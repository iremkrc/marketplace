package com.example.marketplace.service;

import com.example.marketplace.dto.ProductDto;
import com.example.marketplace.model.Product;

import java.util.List;

public interface ProductService {

    List<Product> getAllProducts();

    List<Product> searchProduct(String name);

    void addProduct(ProductDto product);

    void updateProduct(Long id, String name, Double price);

    void deleteProductById(Long id);
}
