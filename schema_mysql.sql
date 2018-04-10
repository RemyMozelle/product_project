SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema product_project
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `product_project` DEFAULT CHARACTER SET utf8 ;
USE `product_project` ;

  `phone` TINYINT NOT NULL,
  `email` VARCHAR(150) NOT NULL,
  `lastName` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `product_project`.`CART`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `product_project`.`CART` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `USERS_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_CART_USERS1_idx` (`USERS_id` ASC),
  CONSTRAINT `fk_CART_USERS1`
    FOREIGN KEY (`USERS_id`)
    REFERENCES `product_project`.`USER` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `product_project`.`CATEGORY`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `product_project`.`CATEGORY` (
  `isActive` TINYINT(1) NULL DEFAULT '',
  `isActive` TINYINT(1) NOT NULL DEFAULT 0,
>>>>>>> 31c5e73869d1dd73ff2f40a6f0d2ab53ac46e2f9
  `parent_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_CATEGORY_CATEGORY1_idx` (`parent_id` ASC),
  CONSTRAINT `fk_CATEGORY_CATEGORY1`
    FOREIGN KEY (`parent_id`)
    REFERENCES `product_project`.`CATEGORY` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `product_project`.`PRODUCT`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `product_project`.`PRODUCT` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `price` INT NULL,
  `nbComment` INT NULL,
  `CATEGORY_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_PRODUCTS_CATEGORY1_idx` (`CATEGORY_id` ASC),
  CONSTRAINT `fk_PRODUCTS_CATEGORY1`
    FOREIGN KEY (`CATEGORY_id`)
    REFERENCES `product_project`.`CATEGORY` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `product_project`.`COMMENT`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `product_project`.`COMMENT` (
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
    REFERENCES `product_project`.`PRODUCT` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_COMMENTS_USERS1`
    FOREIGN KEY (`USERS_id`)
    REFERENCES `product_project`.`USER` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `product_project`.`CART_ITEM`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `product_project`.`CART_ITEM` (
  `CART_id` INT NOT NULL,
  `PRODUCTS_id` INT NOT NULL,
  `quantity` INT NOT NULL,
  INDEX `fk_CART_has_PRODUCTS_PRODUCTS1_idx` (`PRODUCTS_id` ASC),
  INDEX `fk_CART_has_PRODUCTS_CART1_idx` (`CART_id` ASC),
  PRIMARY KEY (`CART_id`, `PRODUCTS_id`),
  CONSTRAINT `fk_CART_has_PRODUCTS_CART1`
    FOREIGN KEY (`CART_id`)
    REFERENCES `product_project`.`CART` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_CART_has_PRODUCTS_PRODUCTS1`
    FOREIGN KEY (`PRODUCTS_id`)
    REFERENCES `product_project`.`PRODUCT` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
