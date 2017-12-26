package com.lukaklacar.bulkemail.repository;

import com.lukaklacar.bulkemail.domain.Email;
import org.springframework.stereotype.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the Email entity.
 */
@SuppressWarnings("unused")
@Repository
public interface EmailRepository extends MongoRepository<Email, String> {

}
