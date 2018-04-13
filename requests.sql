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
  SELECT `products`.`id`, `products`.`name`, `products`.`price`, `products`.`categoryId`, `category`.`id` AS `category.id`, `category`.`categoryId` AS `category.categoryId`, `category`.`name` AS `category.name`, `category`.`isActive` AS `category.isActive` FROM `products` AS `products` INNER JOIN `categories` AS `category` ON `products`.`categoryId` = `category`.`id` AND `category`.`name` = 'or';
   -- Display sorted by ascending price product from a particular category
   SELECT `products`.`id`, `products`.`name`, `products`.`price`, `products`.`categoryId`, `category`.`id` AS `category.id`, `category`.`categoryId` AS `category.categoryId`, `category`.`name` AS `category.name`, `category`.`isActive` AS `category.isActive` FROM `products` AS `products` INNER JOIN `categories` AS `category` ON `products`.`categoryId` = `category`.`id` AND `category`.`name` = 'bracelet' ORDER BY `price`;
  -- Display all categories
   SELECT `id`, `categoryId`, `name`, `isActive` FROM `categories` AS `categories`;
  -- Display all categories disabled
   SELECT `id`, `categoryId`, `name`, `isActive` FROM `categories` AS `categories` WHERE `categories`.`isActive` = 0;
  -- Display all categories enabled
   SELECT `id`, `categoryId`, `name`, `isActive` FROM `categories` AS `categories` WHERE `categories`.`isActive` = 1;
  -- Create a new category
   INSERT INTO `categories` (`id`,`categoryId`,`name`,`isActive`) VALUES (DEFAULT,1,'Casserole',true);