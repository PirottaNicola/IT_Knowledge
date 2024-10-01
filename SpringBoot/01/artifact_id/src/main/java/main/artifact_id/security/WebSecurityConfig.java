package main.artifact_id.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

// This annotation is used to enable Spring Security
// It is used to secure the application by providing authentication and authorization mechanisms
// It is used to configure the security settings for the application
@Configuration
@EnableWebSecurity
public class WebSecurityConfig {

  @Bean
  SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    // This method is used to configure the security settings for the application
    // It is used to define the security rules for the application
    // It is used to define the security filters for the application
    // It is used to define the authentication and authorization mechanisms for the
    // application

    // mapping the /employees endpoint to permitAll() method
    // permitAll() method is used to allow all users to access the specified
    // endpoint
    http
        // disable CSRF protection for now (not recommended for production)
        .csrf(csrf -> csrf.disable()) // TODO: correctly configure CSRF in a real application
        // authorize all type of requests to any endpoint
        .authorizeHttpRequests(authorizeRequests -> authorizeRequests
            .anyRequest().permitAll());
    return http.build();

  }
}
