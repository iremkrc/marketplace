package com.example.marketplace.dto;

import javax.validation.constraints.NotNull;
import com.example.marketplace.model.User;
import lombok.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UpdatedProductDto {
    @NotNull
    private Long productId;
    @NotNull
    private String name;
    @NotNull
    private Double price;

}
