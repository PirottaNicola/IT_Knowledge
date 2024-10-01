package main.artifact_id.entity;

import java.sql.Timestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

// Lombok annotations to generate getters, setters, constructors, and toString methods
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
// This annotation is used to define the entity, which is a class that is mapped
// to a database table
@Entity
public class Employee {
  @Id // This annotation is used to define the primary key
  @GeneratedValue(strategy = GenerationType.AUTO) // This annotation is used to define the generation strategy for the
                                                  // primary key, in this case, it is AUTO, which means that the
                                                  // persistence provider will automatically choose the generation
                                                  // strategy
  private Long id;

  private String firstName, lastName;
  private String email;
  private boolean active;

  private Timestamp createdDate;

}
