package com.example.marketplace.repository;

import com.example.marketplace.model.Product;
import com.example.marketplace.model.Role;
import com.example.marketplace.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    @Query(value = "from User u where u.role = :role")
    List<User> findUsersByRole(Role role);

    @Query(value = "from User u where u.username = :username")
    User findUsersByUsername(String username);

    @Query(value = "from User u where u.id = :id")
    User findUsersById(Long id);

    @Query(value = "select u.favoriteList from User u where u.id = :userId")
    List<Product> getFavoriteList(Long userId);

    @Query(value = "select u.blacklist from User u where u.id = :userId")
    List<User> getBlacklist(Long userId);

    @Modifying
    @Query(value = "delete from User u where u.id = :id")
    void deleteById(Long id);

}
