package main.artifact_id.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import main.artifact_id.entity.Employee;

// This interface extends the JpaRepository interface, which provides CRUD operations for the Employee entity
// we don't need to provide the implementation for these methods, Spring Data JPA will generate the implementation at runtime
// we don't need to add the @Repository annotation, because JpaRepository is already annotated with @Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

  // This method is used to find employees by their first name
  List<Employee> findByFirstName(String firstName);

  // This method is used to find employees by their last name
  List<Employee> findByLastName(String lastName);

  // This method is used to find employees by their email
  List<Employee> findByEmail(String email);

  // This method is used to find employees by their active status
  List<Employee> findByActive(boolean active);

  // findAll() method is inherited from the JpaRepository interface
  // It is used to find all employees and return them as a list

  // findAll() method with pagination and sorting
  Page<Employee> findAll(Pageable pageable);

  // if i want to add a custom query, i can use the @Query annotation
  @Query("SELECT e FROM Employee e WHERE e.firstName = :firstName AND e.email = :email")
  List<Employee> findEmployeesByFirstNameAndEmail(@Param("firstName") String firstName, @Param("email") String email);

}
