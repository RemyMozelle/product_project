-- PRODUCTS
  -- Display all products
  SELECT `id`, `name`, `price`, `categories_id` FROM `products` AS `products`
  -- Create a product
  INSERT INTO `products` (`id`,`name`,`price`,`categories_id`) VALUES (DEFAULT,'Collier en DIAMANT',100000,1);
  -- Display all products by ascending
  SELECT `id`, `name`, `price`, `categories_id` FROM `products` AS `products` ORDER BY `price`;
  -- Display all products by descending
  SELECT `id`, `name`, `price`, `categories_id` FROM `products` AS `products` ORDER BY `products`.`price` DESC;
  -- Display all products from a particular category 
   SELECT `id`, `name`, `price`, `categories_id` FROM `products` AS `products` WHERE `products`.`categories_id` = 1;
   -- Display sorted by ascending price product from a particular category
   SELECT `id`, `name`, `price`, `categories_id` FROM `products` AS `products` WHERE `products`.`categories_id` = 1 ORDER BY `price`;

    SELECT `id`, `categoryId`, `name`, `isActive` FROM `categories` AS `categories`;

SELECT `id`, `categoryId`, `name`, `isActive` FROM `categories` AS `categories` WHERE `categories`.`isActive` = 0;

SELECT `id`, `categoryId`, `name`, `isActive` FROM `categories` AS `categories` WHERE `categories`.`isActive` = 1;

INSERT INTO `categories` (`id`,`categoryId`,`name`,`isActive`) VALUES (DEFAULT,1,'Casserole',true);


-- COMMENTS
  -- SHOW ALL COMMENTS PER PRODUCT
  SELECT `id`, `date`, `message`, `productId`, `userId` FROM `comments` AS `comments` WHERE `comments`.`productId` = '2'
  -- UPDATE A COMMENT
  UPDATE `comments` SET `date`='2018-04-11 10:03:02',`message`='nice product' WHERE `id` = '3'
  -- DELETE ONE COMMENT
  DELETE FROM `comments` WHERE `id` = '26'
  -- DELETE ALL COMMENTS FOR 1 USER
  DELETE FROM `comments` WHERE `userId` = '1'

-- USERS  
  -- SHOW ALL USERS
  SELECT `id`, `phone`, `email`, `firstName`, `lastName` FROM `users` AS `users`;
  -- INSERT 1 USER
  INSERT INTO `users` (`id`,`phone`,`email`,`firstName`,`lastName`) VALUES (DEFAULT,408191919,'roberto@gmail.com','jeanbob','maurane');