package com.example.marketplace.model;

import lombok.*;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;

@Setter
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private double price;

    @ManyToOne
    private User seller;

    public Product(String name, double price, User seller) {
        this.name = name;
        this.price = price;
        this.seller = seller;
    }
}
