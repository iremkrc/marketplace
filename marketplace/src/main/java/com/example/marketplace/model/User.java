package com.example.marketplace.model;

import lombok.*;
import lombok.experimental.SuperBuilder;
import org.hibernate.validator.constraints.UniqueElements;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.List;

@Getter
@Setter
@SuperBuilder
@NoArgsConstructor
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 50, min = 4)
    private String username;

    @NotBlank
    @Size(max = 500, min = 4)
    private String password;

    private Role role;

    @ManyToMany
    private List<Product> productList;
    @ManyToMany
    private List<User> blacklist;
    @ManyToMany
    private List<Product> favoriteList;

}
