package com.example.marketplace.dto;

import com.example.marketplace.model.User;
import lombok.*;

import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ProductDto {
    @NotNull
    private String name;
    @NotNull
    private Double price;
    @NotNull
    private Long sellerId;
}
