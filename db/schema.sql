USE burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(250) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT 0, 
    PRIMARY KEY (id)
)