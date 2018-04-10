-- MySQL Script generated by MySQL Workbench
-- Tue Apr 10 16:12:59 2018
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema product_project
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema product_project
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `product_project` DEFAULT CHARACTER SET utf8 ;
USE `product_project` ;

-- -----------------------------------------------------
-- Table `product_project`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `product_project`.`users` (
  `id` INT NOT NULL,
  `phone` TINYINT NOT NULL,
  `email` VARCHAR(150) NOT NULL,
  `firstName` VARCHAR(200) NOT NULL,
  `lastName` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `product_project`.`carts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `product_project`.`carts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `USERS_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_CART_USERS1_idx` (`USERS_id` ASC),
  CONSTRAINT `fk_CART_USERS1`
    FOREIGN KEY (`USERS_id`)
    REFERENCES `product_project`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `product_project`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `product_project`.`categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(150) NOT NULL,
  `isActive` TINYINT(1) NULL DEFAULT 0,
  `parent_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_CATEGORY_CATEGORY1_idx` (`parent_id` ASC),
  CONSTRAINT `fk_CATEGORY_CATEGORY1`
    FOREIGN KEY (`parent_id`)
    REFERENCES `product_project`.`categories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `product_project`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `product_project`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `price` INT NULL,
  `nbComment` INT NULL,
  `CATEGORY_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_PRODUCTS_CATEGORY1_idx` (`CATEGORY_id` ASC),
  CONSTRAINT `fk_PRODUCTS_CATEGORY1`
    FOREIGN KEY (`CATEGORY_id`)
    REFERENCES `product_project`.`categories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `product_project`.`comments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `product_project`.`comments` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `length` TINYINT NOT NULL,
  `product` VARCHAR(200) NOT NULL,
  `PRODUCTS_id` INT NOT NULL,
  `USERS_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_COMMENTS_PRODUCTS1_idx` (`PRODUCTS_id` ASC),
  INDEX `fk_COMMENTS_USERS1_idx` (`USERS_id` ASC),
  CONSTRAINT `fk_COMMENTS_PRODUCTS1`
    FOREIGN KEY (`PRODUCTS_id`)
    REFERENCES `product_project`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_COMMENTS_USERS1`
    FOREIGN KEY (`USERS_id`)
    REFERENCES `product_project`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `product_project`.`cart_items`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `product_project`.`cart_items` (
  `CART_id` INT NOT NULL,
  `PRODUCTS_id` INT NOT NULL,
  `quantity` INT NOT NULL,
  INDEX `fk_CART_has_PRODUCTS_PRODUCTS1_idx` (`PRODUCTS_id` ASC),
  INDEX `fk_CART_has_PRODUCTS_CART1_idx` (`CART_id` ASC),
  PRIMARY KEY (`CART_id`, `PRODUCTS_id`),
  CONSTRAINT `fk_CART_has_PRODUCTS_CART1`
    FOREIGN KEY (`CART_id`)
    REFERENCES `product_project`.`carts` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_CART_has_PRODUCTS_PRODUCTS1`
    FOREIGN KEY (`PRODUCTS_id`)
    REFERENCES `product_project`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
