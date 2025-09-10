# Fase di build
FROM eclipse-temurin:21-jdk AS build
WORKDIR /app
COPY . .
RUN ./mvnw -q -DskipTests package

# Fase di runtime
FROM eclipse-temurin:21-jre
WORKDIR /app
COPY --from=build /app/target/notes-backend-*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app/app.jar"]
