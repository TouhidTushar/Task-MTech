SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `b0voafdqk3ocxz0h335g`
--

CREATE SCHEMA `mtechtasklocal` ;
USE `mtechtasklocal`;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `category` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`category`) VALUES
('all'),
('kids'),
('men'),
('women');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `orderId` int NOT NULL,
  `customerName` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `contact` varchar(255) NOT NULL,
  `productId` int NOT NULL,
  `orderQuantity` int NOT NULL,
  `totalPayable` decimal(19,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `productId` int NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `price` decimal(19,2) DEFAULT NULL,
  `offer` int DEFAULT '0',
  `imageRef` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`productId`, `title`, `category`, `quantity`, `price`, `offer`, `imageRef`) VALUES
(1000, 'Men\'s T-Shirt Black', 'men', 15, '11.99', 5, 'https://firebasestorage.googleapis.com/v0/b/mtechtask.appspot.com/o/t-shirt.png?alt=media&token=25586e62-a6ed-428c-b350-22c09748012d'),
(1001, 'Men\'s T-Shirt White', 'men', 5, '12.99', 0, 'https://firebasestorage.googleapis.com/v0/b/mtechtask.appspot.com/o/t-shirt.png?alt=media&token=25586e62-a6ed-428c-b350-22c09748012d'),
(1002, 'Men\'s T-Shirt Grey', 'men', 8, '13.99', 10, 'https://firebasestorage.googleapis.com/v0/b/mtechtask.appspot.com/o/t-shirt.png?alt=media&token=25586e62-a6ed-428c-b350-22c09748012d'),
(1003, 'Men\'s T-Shirt Red', 'men', 0, '10.99', 0, 'https://firebasestorage.googleapis.com/v0/b/mtechtask.appspot.com/o/t-shirt.png?alt=media&token=25586e62-a6ed-428c-b350-22c09748012d'),
(1004, 'Men\'s T-Shirt Blue', 'men', 10, '9.99', 0, 'https://firebasestorage.googleapis.com/v0/b/mtechtask.appspot.com/o/t-shirt.png?alt=media&token=25586e62-a6ed-428c-b350-22c09748012d'),
(1005, 'Women\'s Checked Kurti', 'women', 12, '16.99', 15, 'https://firebasestorage.googleapis.com/v0/b/mtechtask.appspot.com/o/kurti.png?alt=media&token=0088cd68-a473-4b27-ad4d-e6a065e4a18b'),
(1006, 'Women\'s Plane Kurti', 'women', 0, '11.99', 0, 'https://firebasestorage.googleapis.com/v0/b/mtechtask.appspot.com/o/kurti.png?alt=media&token=0088cd68-a473-4b27-ad4d-e6a065e4a18b'),
(1007, 'Women\'s Kurti Blue', 'women', 10, '14.99', 10, 'https://firebasestorage.googleapis.com/v0/b/mtechtask.appspot.com/o/kurti.png?alt=media&token=0088cd68-a473-4b27-ad4d-e6a065e4a18b'),
(1008, 'Kids Sneakers Blue', 'kids', 6, '11.99', 0, 'https://firebasestorage.googleapis.com/v0/b/mtechtask.appspot.com/o/sneakers.png?alt=media&token=3e98d130-fa94-492a-a98b-b0443eb6bc9b'),
(1009, 'Kids Sneakers Green', 'kids', 10, '14.99', 10, 'https://firebasestorage.googleapis.com/v0/b/mtechtask.appspot.com/o/sneakers.png?alt=media&token=3e98d130-fa94-492a-a98b-b0443eb6bc9b');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`category`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`orderId`,`productId`),
  ADD KEY `productId` (`productId`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`productId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `productId` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1010;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`productId`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
