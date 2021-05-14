-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th5 31, 2020 lúc 03:47 PM
-- Phiên bản máy phục vụ: 10.4.11-MariaDB
-- Phiên bản PHP: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `doanwed`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `admin`
--

CREATE TABLE `admin` (
  `Tendangnhap` char(20) COLLATE utf8_unicode_ci NOT NULL,
  `password` char(40) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `admin`
--

INSERT INTO `admin` (`Tendangnhap`, `password`) VALUES
('tranvanbo', '12345678');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chitiethoadon`
--

CREATE TABLE `chitiethoadon` (
  `mahd` char(10) COLLATE utf8_unicode_ci NOT NULL,
  `madh` char(10) COLLATE utf8_unicode_ci NOT NULL,
  `dongiact` float(6,2) NOT NULL,
  `soluongct` int(10) UNSIGNED NOT NULL,
  `thanhtienct` float(6,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `dongho`
--

CREATE TABLE `dongho` (
  `madh` char(10) COLLATE utf8_unicode_ci NOT NULL,
  `maloai` char(10) COLLATE utf8_unicode_ci NOT NULL,
  `mansx` char(10) COLLATE utf8_unicode_ci NOT NULL,
  `tendh` varchar(225) COLLATE utf8_unicode_ci NOT NULL,
  `dongdh` varchar(225) COLLATE utf8_unicode_ci NOT NULL,
  `dongia` float(6,2) NOT NULL,
  `bspdk` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `ddkt` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `ctdd` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `mota` text COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `dongho`
--

INSERT INTO `dongho` (`madh`, `maloai`, `mansx`, `tendh`, `dongdh`, `dongia`, `bspdk`, `ddkt`, `ctdd`, `mota`) VALUES
('GG1', 'LOAI001', 'NSX001', 'VENTURA VENTURA XXL AUTO', '', 29.79, 'Fullbox đồng hồ, hộp đựng\r\nThẻ bảo hành chính hãng Hamlinton\r\nTem chống hãng giả Hamlinton sau nắp lưng đồng hồ.\r\nSách hướng dẫn sử dụng', 'kích thước : H-10\r\nVật liệu vỏ : Thép không gỉ\r\nhạt đính : Sapphire\r\nAuto\r\nDự trữ năng lượng :80 giờ\r\nKhông thấm nước : Chống nước 5 bar (50 m) / 73 psi (164 ft)\r\n', 'Màu dây đeo : Đen\r\nBề ngang dây :Chiều rộng lug 23,5mm\r\nLoại khóa:Chốt khóa\r\nLoại dây đeo: Cao su\r\nBộ sưu tập :Ventura', 'Chiếc Ventura ra mắt đầu tiên vào năm 1957 , và là chiếc đồng hồ chạy bằng pin, điện đầu tiên trên thế giới .\r\n\r\nTỷ lệ XXL của mô hình này là táo bạo như họ đang rạng ngời. Và các điểm nhấn màu đỏ trên mặt số và kim giây thêm phần hoàn thiện bốc lửa\r\n\r\nMột chuyển động ba tay có hoặc không có chức năng ngày và tự hào với khả năng dự trữ năng lượng vượt trội là 80 giờ. H-10 xuất hiện với những con ốc tương phản phức tạp và hoa văn hình quả lê\r\n'),
('GG2', 'LOAI002', 'NSX002', 'KHAKI NAVY SCUBA AUTO', '', 16.17, 'Fullbox đồng hồ, hộp đựng\r\nThẻ bảo hành chính hãng Hamlinton\r\nTem chống hãng giả Hamlinton sau nắp lưng đồng hồ.\r\nSách hướng dẫn sử dụng', 'kích thước : H-10\r\nVật liệu vỏ : Thép không gỉ\r\nhạt đính : Sapphire\r\nAuto\r\nDự trữ năng lượng :80 giờ\r\nKhông thấm nước : Chống nước 10 bar (100 m) / 145 psi (328 ft)\r\n', 'Màu dây đeo : Đen\r\nBề ngang dây :Chiều rộng lug 20mm\r\nLoại khóa:Chốt khóa\r\nLoại dây đeo: Vải dệt may\r\nBộ sưu tập : KHAKI NAVY', 'Bên bờ biển hoặc là hồ sâu Khaki Navy Scuba sẽ tạo nên sự nổi bật với vô số phong cách .Đối với những người đi biển , lặn biển nó sẽ thực hiện đầy đủ chức năng. Cho dù bạn đang hẹn giờ bơi, chạy hay thời gian dưới ánh mặt trời, điều đó sẽ đảm bảo bạn giữ được sự mát mẻ, ngay cả khi nhiệt độ tăng cao\r\n\r\nKhaki Navy Scuba có khả năng dự trữ năng lượng vượt trội là 80 giờ\r\n\r\nH-10 xuất hiện với những con ốc tương phản phức tạp và hoa văn hình quả lê.');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hoadon`
--

CREATE TABLE `hoadon` (
  `mahd` char(10) COLLATE utf8_unicode_ci NOT NULL,
  `makh` char(10) COLLATE utf8_unicode_ci NOT NULL,
  `ngayxuat` date NOT NULL,
  `thanhtien` float(6,2) DEFAULT NULL,
  `tenship` varchar(225) COLLATE utf8_unicode_ci NOT NULL,
  `diachiship` varchar(225) COLLATE utf8_unicode_ci NOT NULL,
  `sdtship` char(10) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `khachhang`
--

CREATE TABLE `khachhang` (
  `makh` char(10) COLLATE utf8_unicode_ci NOT NULL,
  `tenkh` varchar(225) COLLATE utf8_unicode_ci NOT NULL,
  `diachikh` varchar(225) COLLATE utf8_unicode_ci NOT NULL,
  `sdtkh` char(10) COLLATE utf8_unicode_ci NOT NULL,
  `gioitinhkh` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `khachhang`
--

INSERT INTO `khachhang` (`makh`, `tenkh`, `diachikh`, `sdtkh`, `gioitinhkh`) VALUES
('KH01', 'lê thu hương', 'tân bình,tp hcm', '0352941584', 'nữ');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `loai`
--

CREATE TABLE `loai` (
  `maloai` char(10) COLLATE utf8_unicode_ci NOT NULL,
  `tenloai` varchar(225) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `loai`
--

INSERT INTO `loai` (`maloai`, `tenloai`) VALUES
('LOAI001', 'Hamlinton'),
('LOAI002', 'Hamlinton'),
('LOAI003', 'Hamlinton'),
('LOAI004', 'Hamlinton'),
('LOAI005', 'Hamlinton');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nsx`
--

CREATE TABLE `nsx` (
  `mansx` char(10) COLLATE utf8_unicode_ci NOT NULL,
  `tennsx` varchar(225) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `nsx`
--

INSERT INTO `nsx` (`mansx`, `tennsx`) VALUES
('NSX001', 'Hamlinton'),
('NSX002', 'Hamlinton');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`Tendangnhap`);
ALTER TABLE `admin` ADD FULLTEXT KEY `Tendangnhap` (`Tendangnhap`,`password`);

--
-- Chỉ mục cho bảng `chitiethoadon`
--
ALTER TABLE `chitiethoadon`
  ADD PRIMARY KEY (`mahd`),
  ADD KEY `madh` (`madh`);

--
-- Chỉ mục cho bảng `dongho`
--
ALTER TABLE `dongho`
  ADD PRIMARY KEY (`madh`),
  ADD KEY `maloai` (`maloai`),
  ADD KEY `mansx` (`mansx`);

--
-- Chỉ mục cho bảng `hoadon`
--
ALTER TABLE `hoadon`
  ADD PRIMARY KEY (`mahd`),
  ADD KEY `makh` (`makh`);

--
-- Chỉ mục cho bảng `khachhang`
--
ALTER TABLE `khachhang`
  ADD PRIMARY KEY (`makh`);

--
-- Chỉ mục cho bảng `loai`
--
ALTER TABLE `loai`
  ADD PRIMARY KEY (`maloai`),
  ADD KEY `tenloai` (`tenloai`);

--
-- Chỉ mục cho bảng `nsx`
--
ALTER TABLE `nsx`
  ADD PRIMARY KEY (`mansx`);

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `chitiethoadon`
--
ALTER TABLE `chitiethoadon`
  ADD CONSTRAINT `chitiethoadon_ibfk_1` FOREIGN KEY (`madh`) REFERENCES `dongho` (`madh`),
  ADD CONSTRAINT `chitiethoadon_ibfk_2` FOREIGN KEY (`mahd`) REFERENCES `hoadon` (`mahd`);

--
-- Các ràng buộc cho bảng `dongho`
--
ALTER TABLE `dongho`
  ADD CONSTRAINT `dongho_ibfk_1` FOREIGN KEY (`maloai`) REFERENCES `loai` (`maloai`),
  ADD CONSTRAINT `dongho_ibfk_2` FOREIGN KEY (`mansx`) REFERENCES `nsx` (`mansx`);

--
-- Các ràng buộc cho bảng `hoadon`
--
ALTER TABLE `hoadon`
  ADD CONSTRAINT `hoadon_ibfk_1` FOREIGN KEY (`makh`) REFERENCES `khachhang` (`makh`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
