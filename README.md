# Project Amankay - Adonis.js (Backend)

## Commands to execute the application
- Duplicate and rename .env.example to .env
- Run migrations: node ace migration:run
- If you got some error with the root user, execute these commands on MySQL database
  - ALTER USER 'root'@localhost IDENTIFIED WITH mysql_native_password BY 'root'
  - FLUSH privileges

## Create container with MySQL database
```
docker run --name mysql -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -d mysql
```

## Endpoints Availables
* /api/user/register => Create new user on database sending (email, password) with POST method
* /api/auth => Get token sending (email, password) with POST method

