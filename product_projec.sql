SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;

SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;

SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';



-- -----------------------------------------------------

-- Schema product_project

-- -----------------------------------------------------

CREATE SCHEMA IF NOT EXISTS `product_project` DEFAULT CHARACTER SET utf8 ;

USE `product_project` ;



-- -----------------------------------------------------

-- Table `product_project`.`users`

-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `product_project`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `phone` INT NOT NULL,
  `email` VARCHAR(150) NOT NULL,

  `firstName` VARCHAR(200) NOT NULL,

  `lastName` VARCHAR(200) NOT NULL,

  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------

-- Table `product_project`.`carts`

-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `product_project`.`carts` (

  `id` INT NOT NULL AUTO_INCREMENT,
  `users_id` INT NOT NULL,
  PRIMARY KEY (`id`, `users_id`),
  INDEX `fk_carts_users1_idx` (`users_id` ASC),
  CONSTRAINT `fk_carts_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `product_project`.`users` (`id`)

    ON DELETE NO ACTION

    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------

-- Table `product_project`.`categories`

-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `product_project`.`categories` (

  `id` INT NOT NULL AUTO_INCREMENT,

  `name` VARCHAR(150) NOT NULL,
  `isActive` TINYINT(1) NOT NULL DEFAULT 0,
  `categoryId` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_CATEGORY_CATEGORY1_idx` (`categoryId` ASC),
  CONSTRAINT `fk_CATEGORY_CATEGORY1`
    FOREIGN KEY (`categoryId`)
    REFERENCES `product_project`.`categories` (`id`)

    ON DELETE NO ACTION

    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------

-- Table `product_project`.`products`

-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `product_project`.`products` (

  `id` INT NOT NULL AUTO_INCREMENT,

  `name` VARCHAR(45) NOT NULL,
  `price` INT NOT NULL,
  `categories_id` INT NOT NULL,
  PRIMARY KEY (`id`, `categories_id`),
  INDEX `fk_products_categories1_idx` (`categories_id` ASC),
  CONSTRAINT `fk_products_categories1`
    FOREIGN KEY (`categories_id`)
    REFERENCES `product_project`.`categories` (`id`)

    ON DELETE NO ACTION

    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------

-- Table `product_project`.`comments`

-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `product_project`.`comments` (

  `id` INT NOT NULL AUTO_INCREMENT,

  `date` DATE NOT NULL,
  `message` TEXT NOT NULL,
  `products_id` INT NOT NULL,
  `users_id` INT NOT NULL,
  PRIMARY KEY (`id`, `products_id`, `users_id`),
  INDEX `fk_comments_products1_idx` (`products_id` ASC),
  INDEX `fk_comments_users1_idx` (`users_id` ASC),
  CONSTRAINT `fk_comments_products1`
    FOREIGN KEY (`products_id`)
    REFERENCES `product_project`.`products` (`id`)

    ON DELETE NO ACTION

    ON UPDATE NO ACTION,
  CONSTRAINT `fk_comments_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `product_project`.`users` (`id`)

    ON DELETE NO ACTION

    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `product_project`.`carts_items`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `product_project`.`carts_items` (
  `carts_id` INT NOT NULL,
  `products_id` INT NOT NULL,
  `quantity` INT NOT NULL,
  PRIMARY KEY (`carts_id`, `products_id`),
  INDEX `fk_carts_has_products_products1_idx` (`products_id` ASC),
  INDEX `fk_carts_has_products_carts1_idx` (`carts_id` ASC),
  CONSTRAINT `fk_carts_has_products_carts1`
    FOREIGN KEY (`carts_id`)
    REFERENCES `product_project`.`carts` (`id`)

    ON DELETE NO ACTION

    ON UPDATE NO ACTION,
  CONSTRAINT `fk_carts_has_products_products1`
    FOREIGN KEY (`products_id`)
    REFERENCES `product_project`.`products` (`id`)

    ON DELETE NO ACTION

    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;

SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;

SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;