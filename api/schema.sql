CREATE DATABASE posinventory;
USE posinventory;

CREATE TABLE accounts (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    price DECIMAL(10,2) NOT NULL,
    quantity DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO accounts (username, password) 
VALUES 
('admin', 'admin'),
('user1', 'user1'),
('user2', 'user2');

INSERT INTO products (name, description, quantity, price)
VALUES
('Product 1', 'Description 1', 25, 10.00),
('Product 2', 'Description 2', 48, 20.00),
('Product 3', 'Description 3', 30, 30.00)


-- CREATE TABLE cart (
--     id INT NOT NULL AUTO_INCREMENT,
--     product_id INT NOT NULL,
--     quantity INT NOT NULL,
--     PRIMARY KEY (id),
--     FOREIGN KEY (product_id) REFERENCES products(id)
-- );

-- CREATE TABLE orders (
--     id INT NOT NULL AUTO_INCREMENT,
--     account_id INT NOT NULL,
--     PRIMARY KEY (id),
--     FOREIGN KEY (account_id) REFERENCES accounts(id)
-- );