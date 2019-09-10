/*
Navicat MySQL Data Transfer

Source Server         : 2222
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : mogu

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2019-09-10 10:48:59
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `mogulist`
-- ----------------------------
DROP TABLE IF EXISTS `mogulist`;
CREATE TABLE `mogulist` (
  `sid` tinyint(3) unsigned NOT NULL AUTO_INCREMENT COMMENT '数据的编号',
  `imgurl` varchar(300) DEFAULT NULL COMMENT '图片的路径',
  `description` varchar(100) DEFAULT NULL COMMENT '标题',
  `price` float(10,2) DEFAULT NULL COMMENT '价格',
  `delprice` float(10,2) DEFAULT NULL COMMENT '删除的价格',
  `save` varchar(20) DEFAULT NULL,
  `saveurl` varchar(300) DEFAULT NULL COMMENT '星形图片',
  `urls` varchar(999) DEFAULT NULL COMMENT '小图的路径',
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mogulist
-- ----------------------------
INSERT INTO `mogulist` VALUES ('1', 'https://s5.mogucdn.com/mlcdn/c45406/180814_4h6lk2b25dj950kb7iagfh720djcf_640x960.jpg_440x587.v1cAC.40.webp', '2018新款复古多功能女士钱包女短款日韩版折叠多卡零钱位学生钱夹', '19.90', '28.50', '38', '//s18.mogucdn.com/p2/160908/upload_27g4f1ch6akie83hacb676j622b9l_32x30.png', 'https://s5.mogucdn.com/p1/160412/65845415_ie4dmzjzgrtdsmdfg4zdambqgiyde_640x960.jpg_468x468.jpg,https://s11.mogucdn.com/p1/160622/65845415_ifrtsnlbg44tszjuhezdambqhayde_640x960.jpg_468x468.jpg,https://s5.mogucdn.com/p1/160412/65845415_ie4dmzjzgrtdsmdfg4zdambqgiyde_640x960.jpg_468x468.jpg,https://s11.mogucdn.com/p1/160412/65845415_ifqtimjvhbtdsmdfg4zdambqgyyde_640x960.jpg_468x468.jpg,https://s11.mogucdn.com/p2/170322/65845415_6jgiki1jl3k3d25ajffiffghlh6jd_640x960.jpg_468x468.jpg,https://s5.mogucdn.com/p1/160412/65845415_ifrdsnjumftdsmdfg4zdambqmeyde_640x960.jpg_468x468.jpg');
INSERT INTO `mogulist` VALUES ('2', 'https://s5.mogucdn.com/mlcdn/c45406/190524_2g9lac7015d8f6l0k69f0cjigj8f4_640x960.jpg_440x587.v1cAC.40.webp', '呼吸泡泡面膜氧气女补水保湿黑竹炭深层清洁面膜排泡沫清洁毛孔', '39.90', '158.00', '149', '//s18.mogucdn.com/p2/160908/upload_27g4f1ch6akie83hacb676j622b9l_32x30.png', 'https://s11.mogucdn.com/mlcdn/c45406/190524_2g9lac7015d8f6l0k69f0cjigj8f4_640x960.jpg_468x468.jpg,https://s5.mogucdn.com/mlcdn/c45406/190524_24l80keg8g7c1a9e679fca9a22k04_800x800.jpg_468x468.jpg,https://s5.mogucdn.com/mlcdn/c45406/190524_508leh5lb6k1blk74143e1a4e676j_800x800.jpg_468x468.jpg,https://s5.mogucdn.com/mlcdn/c45406/190524_24l80keg8g7c1a9e679fca9a22k04_800x800.jpg_468x468.jpg');
INSERT INTO `mogulist` VALUES ('3', 'https://s5.mogucdn.com/mlcdn/c45406/190322_1ig0lc8hjkf2c94hllc2h9a65ci61_640x960.jpg_640x854.v1cAC.40.webp', '春季新款韩版清新甜美宽松减龄娃娃领长袖灯芯绒衬衫纯色打底衬显瘦铅笔小脚弹性牛仔九分裤子套装', '79.10', '113.00', '8560', '//s18.mogucdn.com/p2/160908/upload_27g4f1ch6akie83hacb676j622b9l_32x30.png', 'https://s5.mogucdn.com/mlcdn/c45406/190413_7ljejc9e8ejbg7738l1hk5965k4gd_640x960.jpg_468x468.jpg,https://s11.mogucdn.com/mlcdn/c45406/190413_595d1d7g8i0c6dgb8lbcii1h91flh_640x960.jpg_468x468.jpg,https://s11.mogucdn.com/mlcdn/c45406/190413_595d1d7g8i0c6dgb8lbcii1h91flh_640x960.jpg_468x468.jpg,https://s5.mogucdn.com/mlcdn/c45406/190413_56he69aifk6g92ceh90fb1j56a720_640x960.jpg_468x468.jpg');
INSERT INTO `mogulist` VALUES ('4', 'https://s5.mogucdn.com/mlcdn/c45406/190811_326057b5j8klgk1aeb4f9gfhb227d_640x960.jpg_640x854.v1cAC.40.webp', '春秋季女装上衣白色长袖t恤女修身纯色韩版简约打底衫体恤', '29.90', '42.72', '2241', '//s18.mogucdn.com/p2/160908/upload_27g4f1ch6akie83hacb676j622b9l_32x30.png', 'https://s11.mogucdn.com/mlcdn/c45406/190811_403ii4dcl7a04c7459ke4ki20j4bj_640x960.jpg_468x468.jpg,https://s11.mogucdn.com/mlcdn/c45406/190811_326057b5j8klgk1aeb4f9gfhb227d_640x960.jpg_468x468.jpg,https://s11.mogucdn.com/mlcdn/c45406/190811_16c6b5d1k77kll1ib1hfj4ag52204_640x960.jpg_468x468.jpg,https://s11.mogucdn.com/mlcdn/c45406/190811_7h6ki6728k4cdc1il0i655g7ife9g_640x960.jpg_468x468.jpg');
INSERT INTO `mogulist` VALUES ('5', 'https://s5.mogucdn.com/mlcdn/c45406/190812_2he1eded81idk29kd5a39127be032_640x960.jpg_640x854.v1cAC.40.webp', '高腰垂感牛仔阔腿裤女宽松薄款夏cec直筒小个子泫雅风春秋季', '65.00', '65.00', '2315', '//s18.mogucdn.com/p2/160908/upload_27g4f1ch6akie83hacb676j622b9l_32x30.png', 'https://s11.mogucdn.com/mlcdn/c45406/190812_2he1eded81idk29kd5a39127be032_640x960.jpg_468x468.jpg,https://s11.mogucdn.com/mlcdn/c45406/190812_0bl0747j1g5b06cbk10d64lh5381d_750x1000.jpg_468x468.jpg,https://s5.mogucdn.com/mlcdn/c45406/190812_4j11e2jeib98icah461kfe604944a_750x1000.jpg_468x468.jpg,https://s11.mogucdn.com/mlcdn/c45406/190812_1d2d85g7gehc3071i7fejlb42ib7h_750x1000.jpg_468x468.jpg,https://s11.mogucdn.com/mlcdn/c45406/190812_5ii1ae099dd91aejaag92jgbj6g1b_750x1000.jpg_468x468.jpg');
INSERT INTO `mogulist` VALUES ('6', 'https://s5.mogucdn.com/mlcdn/c45406/190811_403ii4dcl7a04c7459ke4ki20j4bj_640x960.jpg_640x854.v1cAC.40.webp', '阔腿裤女垂感高腰秋季新款韩版宽松休闲裤直筒西', '39.90', '69.00', '95', '//s18.mogucdn.com/p2/160908/upload_27g4f1ch6akie83hacb676j622b9l_32x30.png', 'https://s11.mogucdn.com/mlcdn/c45406/190424_351id26aj81l62c5g260j48h3g600_750x1000.jpg_468x468.jpg,https://s11.mogucdn.com/mlcdn/c45406/190424_54lf5h66j4ldij4hcl8951faihdb7_750x1000.jpg_468x468.jpg,https://s11.mogucdn.com/mlcdn/c45406/190424_1h010433532clk5h0ggi6k4lc123l_750x1000.jpg_468x468.jpg,https://s5.mogucdn.com/mlcdn/c45406/190424_0bc2h2568gfdbdh38c1eihfh4bdcg_750x1000.jpg_468x468.jpghttps://s11.mogucdn.com/mlcdn/c45406/190424_1gk88b4ad572ec3d9h90hedhi16a7_750x1000.jpg_468x468.jpg');
INSERT INTO `mogulist` VALUES ('7', 'https://s5.mogucdn.com/mlcdn/c45406/190418_46dbif36g9iaba5hga1dla4ii91kj_640x960.jpg_440x587.v1cAC.40.webp', '夏季韩范新款交叉V领五分袖纽扣收腰显瘦小心机白色衬衫上衣', '53.00', '75.72', '730', '//s18.mogucdn.com/p2/160908/upload_27g4f1ch6akie83hacb676j622b9l_32x30.png', 'https://s5.mogucdn.com/mlcdn/c45406/190418_46dbif36g9iaba5hga1dla4ii91kj_640x960.jpg_468x468.jpg,https://s11.mogucdn.com/mlcdn/c45406/190418_38g5jfadiaj1e5ag01kj14fka6g97_700x1200.png_468x468.jpg,https://s11.mogucdn.com/mlcdn/c45406/190418_5c4d5819l08d9g2483g5ei1lik8a6_700x1200.png_468x468.jpg');
INSERT INTO `mogulist` VALUES ('8', 'https://s5.mogucdn.com/mlcdn/c45406/190604_5h559c5k1dfikf25j0d8fcd97jic6_640x960.jpg_640x854.v1cAC.40.webp', '时尚套装女2019夏流行女装洋气减龄阔腿裤', '39.00', '55.72', '1.4w', '//s18.mogucdn.com/p2/160908/upload_27g4f1ch6akie83hacb676j622b9l_32x30.png', 'https://s5.mogucdn.com/mlcdn/c45406/190604_5h559c5k1dfikf25j0d8fcd97jic6_640x960.jpg_468x468.jpg,https://s5.mogucdn.com/mlcdn/c45406/190604_5h559c5k1dfikf25j0d8fcd97jic6_640x960.jpg_468x468.jpg,https://s11.mogucdn.com/mlcdn/c45406/190604_6i2lli5f5ehi8g8hbcj663ggg2864_838x864.jpg_468x468.jpg,https://s5.mogucdn.com/mlcdn/c45406/190604_3ehgfg2fj2hjdb5100ggcf7h214a4_838x928.jpg_468x468.jpg,https://s11.mogucdn.com/mlcdn/c45406/190604_0d376a2abgl6hkdj72hb4ek7j9h9j_800x800.jpg_468x468.jpg');
INSERT INTO `mogulist` VALUES ('9', 'https://s5.mogucdn.com/mlcdn/c45406/190514_049l7614360b3eah3b6kfed37h4ai_640x960.jpg_640x854.v1cAC.40.webp', '夏季新款韩版BF风印花炫彩短袖t恤女中长款半袖女', '45.00', '64.29', '119', '//s18.mogucdn.com/p2/160908/upload_27g4f1ch6akie83hacb676j622b9l_32x30.png', 'https://s11.mogucdn.com/mlcdn/c45406/190514_049l7614360b3eah3b6kfed37h4ai_640x960.jpg_468x468.jpg,https://s5.mogucdn.com/mlcdn/c45406/190514_42cj8f1138il4ihh18f2f0jka5jb9_640x960.jpg_468x468.jpg,https://s11.mogucdn.com/mlcdn/c45406/190514_631lgg15djljc2k45d49bj59a43kf_640x960.jpg_468x468.jpg,https://s11.mogucdn.com/mlcdn/c45406/190514_1a60gb1215k3bijaalj8db359fab9_640x960.jpg_468x468.jpg,https://s5.mogucdn.com/mlcdn/c45406/190514_42cj8f1138il4ihh18f2f0jka5jb9_640x960.jpg_468x468.jpg');
INSERT INTO `mogulist` VALUES ('10', 'https://s5.mogucdn.com/mlcdn/c45406/190829_329fbfja0g7ed3a32hl19bffcb059_640x960.jpg_440x587.v1cAC.40.webp', '秋季新款女装宽松设计抽绳初恋裙长袖衬衫连衣裙白色小清新仙女裙', '98.00', '140.00', '117', '//s18.mogucdn.com/p2/160908/upload_27g4f1ch6akie83hacb676j622b9l_32x30.png', 'https://s5.mogucdn.com/mlcdn/c45406/190829_329fbfja0g7ed3a32hl19bffcb059_640x960.jpg_468x468.jpg,https://s5.mogucdn.com/mlcdn/c45406/190829_018ik2a1c9lbl6l9jca3id6ee6kfl_640x960.jpg_468x468.jpg,https://s5.mogucdn.com/mlcdn/c45406/190829_6662dd7d0j2416242hi8f78lg693f_640x960.jpg_468x468.jpg');
INSERT INTO `mogulist` VALUES ('11', 'https://s5.mogucdn.com/mlcdn/c45406/190808_5bebhl0573k56fk51kg37ab11lf1a_640x960.jpg_440x587.v1cAC.40.webp', '【直播】抖音同款活氧净透泡泡面膜清洁毛孔祛痘保湿补水温和肌肤', '69.00', '69.00', '42', '//s18.mogucdn.com/p2/160908/upload_27g4f1ch6akie83hacb676j622b9l_32x30.png', null);
INSERT INTO `mogulist` VALUES ('12', 'https://s5.mogucdn.com/mlcdn/c45406/180717_3jl0jka715h0g48fg7cj9j65fi821_640x960.jpg_440x587.v1cAC.40.webp', '冰丝针织衫女秋季新款2018韩版宽松百搭彩虹条纹防晒衣拼色七分袖薄款防晒罩衫上衣', '39.90', '57.00', '1535', '//s18.mogucdn.com/p2/160908/upload_27g4f1ch6akie83hacb676j622b9l_32x30.png', null);
INSERT INTO `mogulist` VALUES ('13', 'https://s5.mogucdn.com/mlcdn/55cf19/190601_06192h82219bk81837hi0f8f5j5e1_640x960.jpg_440x587.v1cAC.40.webp', '新款夏季韩版时尚套装小个子T恤气质宽松休闲裤显瘦两件套裤子女', '49.00', '70.00', '2595', '//s18.mogucdn.com/p2/160908/upload_27g4f1ch6akie83hacb676j622b9l_32x30.png', null);
INSERT INTO `mogulist` VALUES ('14', 'https://s5.mogucdn.com/mlcdn/c45406/190607_0bhkeaj871879b1b6eeidbi4ckeh6_640x960.jpg_440x587.v1cAC.40.webp', '夏季韩版学院风宽松小清新短袖娃娃连衣裙中长款新款裙子女学生潮', '39.00', '55.71', '7637', '//s18.mogucdn.com/p2/160908/upload_27g4f1ch6akie83hacb676j622b9l_32x30.png', null);
INSERT INTO `mogulist` VALUES ('15', 'https://s5.mogucdn.com/mlcdn/c45406/180816_683a4db1cl2i2eaf69l6c5h3aii20_1080x1620.jpg_440x587.v1cAC.40.webp', '第二支0元 屈臣氏爆卖】粉色安琪按压口红不掉色保湿学生款正品', '39.00', '78.00', '9429', '//s18.mogucdn.com/p2/160908/upload_27g4f1ch6akie83hacb676j622b9l_32x30.png', null);

-- ----------------------------
-- Table structure for `usertable`
-- ----------------------------
DROP TABLE IF EXISTS `usertable`;
CREATE TABLE `usertable` (
  `sid` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(20) DEFAULT NULL,
  `password` varchar(40) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of usertable
-- ----------------------------
INSERT INTO `usertable` VALUES ('52', '13123456789', '123456@', '2019-09-07 21:58:20');
INSERT INTO `usertable` VALUES ('54', '15712345678', '123456@', '2019-09-07 22:01:36');
INSERT INTO `usertable` VALUES ('55', '18123456789', '123456！', '2019-09-09 22:01:24');
