package com.example.marketplace.repository;

import com.example.marketplace.model.Product;
import com.example.marketplace.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query(value = "from Product p where p.name = :name")
    List<Product> findProductByName(String name);

    @Query(value = "from Product p where p.seller = :seller")
    List<Product> findProductBySeller(User seller);

    @Query(value = "from Product p")
    List<Product> getAllProducts();

    @Modifying
    @Query(value = "delete from Product p where p.id = :id")
    void deleteById(Long id);

    @Modifying
    @Query(value = "update Product p set p.name = :name, p.price = :price where p.id = :id")
    void updateById(Long id, String name, Double price);

    @Query(value = "select u.productList from User u where u =: seller")
    List<Product> getSellerProductList(User seller);
}
