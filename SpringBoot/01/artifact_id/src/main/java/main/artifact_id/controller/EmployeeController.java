package main.artifact_id.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import main.artifact_id.entity.Employee;
import main.artifact_id.repository.EmployeeRepository;

// This annotation is used to define a controller that handles web requests
@RestController
public class EmployeeController {

  // the constructor is not needed, because Spring will automatically inject the
  // EmployeeRepository bean into this class using the @Autowired annotation.

  // This annotation is used to inject the EmployeeRepository bean into this class
  // The EmployeeRepository bean is automatically created by Spring Data JPA
  @Autowired
  private EmployeeRepository employeeRepository;

  // This method handles GET requests for the /employees endpoint
  // It returns a list of employees
  // The Pageable parameter is used to support pagination and sorting:
  // - The page parameter is used to specify the page number (starting from 0)
  // - The size parameter is used to specify the number of items per page
  // - The sort parameter is used to specify the sorting order (e.g.,
  // sort=firstName,asc)
  @GetMapping("/employees")
  public List<Employee> getEmployees(Pageable pageable) { // Pageable is used to support pagination and sorting
    System.out.println("getEmployees() called");
    Page<Employee> page = employeeRepository.findAll(pageable);
    return page.getContent(); // getContent() method is used to get the list of employees from the Page object
  }

  // This method handles GET requests for the /employees/active endpoint
  // It returns a list of active employees
  @GetMapping("/employees/active")
  public List<Employee> getActiveEmployees() {
    System.out.println("getActiveEmployees() called");
    return employeeRepository.findByActive(true);
  }

  // Post a new employee
  @PostMapping("/employees")
  // parse the json request body into an Employee object using the @RequestBody
  // annotation
  public Employee createEmployee(@RequestBody Employee employee) {
    System.out.println("createEmployee() called");
    return employeeRepository.save(employee); // save() method is inherited from the JpaRepository interface
  }

  // Modify an employee
  @PutMapping("/employees/{id}")
  public Employee updateEmployee(@PathVariable Long id, @RequestBody Employee employee) {
    System.out.println("updateEmployee() called");
    Employee existingEmployee = employeeRepository.findById(id).orElse(null); // findById() method is inherited from the
                                                                              // JpaRepository interface
    if (existingEmployee != null) {
      existingEmployee.setFirstName(employee.getFirstName());
      existingEmployee.setLastName(employee.getLastName());
      existingEmployee.setEmail(employee.getEmail());
      existingEmployee.setActive(employee.isActive());
      return employeeRepository.save(existingEmployee);
    } else {
      return null;
    }
  }

  // Delete an employee
  @DeleteMapping("/employees/{id}")
  public void deleteEmployee(@PathVariable Long id) {
    System.out.println("deleteEmployee() called");
    employeeRepository.deleteById(id); // deleteById() method is inherited from the JpaRepository interface
  }

}
