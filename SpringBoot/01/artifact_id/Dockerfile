# Use the official maven image to create a build artifact
FROM maven:3.8.4-openjdk-17 AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

# Use the official OpenJDK image for a lean production stage
FROM openjdk:17-alpine
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar

# Run the Spring Boot application
ENTRYPOINT ["java", "-jar", "app.jar"]

# in order to build the image, run the following command from the root directory of the project where the Dockerfile is located
# docker build -t spring-boot-docker .
# in order to run the image, run the following command
# docker run -p 8080:8080 spring-boot-docker, where -p 8080:8080 maps the port 8080 of the host machine to the port 8080 of the container
