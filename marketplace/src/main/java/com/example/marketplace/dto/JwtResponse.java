package com.example.marketplace.dto;

import com.example.marketplace.model.Role;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
@Builder
public class JwtResponse {
    private String token;

    @Builder.Default
    private String type = "Bearer";

    private Long id;

    private String username;

    private List<String> roles;
}
