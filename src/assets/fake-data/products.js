// all images imported from images directory
import product_01_image_01 from "../images/product_001.jpg";
import product_01_image_02 from "../images/product_001.1.jpg";
import product_02_image_01 from "../images/product_2.01.jpg";
import product_03_image_01 from "../images/product_3.01.jpg";
import product_03_image_02 from "../images/product_3.02.jpg";
import product_04_image_01 from "../images/product_4.01.jpg";
import product_05_image_01 from "../images/product_5.01.jpg";
import product_06_image_01 from "../images/product_6.01.jpg";
import product_07_image_01 from "../images/product_7.01.jpg";
import product_08_image_01 from "../images/product_8.01.jpg";
import product_09_image_01 from "../images/product_9.01.jpg";
import product_10_image_01 from "../images/product_10.1.jpg";
import product_11_image_01 from "../images/product_11.1.jpg";
import product_12_image_01 from "../images/product_12.1.jpg";
import product_13_image_01 from "../images/product_13.1.jpg";
import product_14_image_01 from "../images/product_14.1.jpg";
import product_15_image_01 from "../images/product_15.1.jpg";
import product_16_image_01 from "../images/product_16.1.jpg";
import product_17_image_01 from "../images/product_17.1.jpg";
import product_18_image_01 from "../images/product_18.1.jpg";
import product_19_image_01 from "../images/product_19.1.jpg";
import product_20_image_01 from "../images/product_20.1.jpg";
import product_21_image_01 from "../images/product_21.1.jpg";
import product_22_image_01 from "../images/product_22.1.jpg";
import product_23_image_01 from "../images/product_23.1.jpg";
import product_24_image_01 from "../images/product_24.1.jpg";
import product_25_image_01 from "../images/product_25.1.jpg";
import product_26_image_01 from "../images/product_26.1.png";
import product_27_image_01 from "../images/product_27.1.png";
import product_28_image_01 from "../images/product_28.1.png";
import product_29_image_01 from "../images/product_29.1.png";
import product_30_image_01 from "../images/product_30.1.png";
import product_31_image_01 from "../images/product_31.1.png";
import product_32_image_01 from "../images/product_32.1.png";
import product_33_image_01 from "../images/product_33.1.jpg";
import product_34_image_01 from "../images/product_34.1.jpg";









const products = [
  {
    id: "01",
    title: "Sinigang na Bangus",
    price: 440.0,
    image01: product_09_image_01,
    category: "Filipino Food",

    desc: "Our Yummy and Delicious Crispy Pata!",
  },

  {
    id: "02",
    title: "Bulalo",
    price: 495.0,
    image01: product_02_image_01,
    category: "Filipino Food",
    
    desc: "The Perfect Combination of Beefy Stock and Veggies.",
  },

  {
    id: "03",
    sub: "03",
    title: "Sinigang na Baboy",
    price: 280,
    image01: product_11_image_01,
    category: "Filipino Food",
    
    desc: "Spice up your meal with our Sizzling Sisig.",
  },

  {
    id: "04",
    title: "Beef Kare-Kare",
    price: 495.0,
    image01: product_04_image_01,
    category: "Filipino Food",
    
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "05",
    title: "Lechon Kawali",
    price: 24.0,
    image01: product_05_image_01,
    category: "Filipino Food",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "06",
    title: "Roasted Chicken",
    price: 24.0,
    image01: product_06_image_01,
    category: "Filipino Food",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "07",
    sub: "01",
    title: "Crispy Pata",
    price: 115.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    category: "Filipino Food",
    
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "08",
    title: "Sizzling Sisig",
    price: 110.0,
    image01: product_03_image_01,
    image02: product_03_image_02,
    category: "Filipino Food",
    
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "09",
    sub: "02",
    title: "Grilled Bangus",
    price: 110.0,
    image01: product_07_image_01,

    category: "Filipino Food",
    
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "10",
    title: "Shrimp Tofu Oriental",
    price: 24.0,
    image01: product_08_image_01,

    category: "Filipino Food",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "11",
    title: "Beef Kaldereta",
    price: 35.0,
    image01: product_10_image_01,
    
    category: "Filipino Food",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "12",
    title: "Pinakbet",
    sub: "04",
    price: 35.0,
    image01: product_12_image_01,
    
    category: "Filipino Food",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "13",
    title: "Pork Katsudon",
    price: 280,
    image01: product_13_image_01,
    
    category: "Japanese Food",
    
    desc: "Spice up your meal with our Sizzling Sisig.",
  },

  {
    id: "14",
    title: "Beef Ramen",
    price: 280,
    image01: product_14_image_01,
    
    category: "Japanese Food",
    
    desc: "Spice up your meal with our Sizzling Sisig.",
  },

  {
    id: "15",
    title: "Chicken Teriyaki",
    price: 280,
    image01: product_15_image_01,
    
    category: "Japanese Food",
    
    desc: "Spice up your meal with our Sizzling Sisig.",
  },

  {
    id: "16",
    title: "Gyudon",
    price: 280,
    image01: product_16_image_01,
    
    category: "Japanese Food",
    
    desc: "Spice up your meal with our Sizzling Sisig.",
  },

  {
    id: "17",
    title: "Prawn Tempura",
    price: 280,
    image01: product_17_image_01,
    
    category: "Japanese Food",
    
    desc: "Spice up your meal with our Sizzling Sisig.",
  },

  {
    id: "18",
    title: "Beef Yakiniku",
    price: 280,
    image01: product_18_image_01,
    
    category: "Japanese Food",
    
    desc: "Spice up your meal with our Sizzling Sisig.",
  },

  {
    id: "19",
    title: "Chicken Karaage",
    price: 280,
    image01: product_19_image_01,
    
    category: "Japanese Food",
    
    desc: "Spice up your meal with our Sizzling Sisig.",
  },

  {
    id: "20",
    title: "Togarashi Pork",
    price: 280,
    image01: product_20_image_01,
    
    category: "Japanese Food",
    
    desc: "Spice up your meal with our Sizzling Sisig.",
  },

  {
    id: "21",
    title: "Chicken Karaage Bento",
    price: 280,
    image01: product_21_image_01,
    
    category: "Japanese Food",
    
    desc: "Spice up your meal with our Sizzling Sisig.",
  },

  {
    id: "22",
    title: "Prawn Tempura Bento",
    price: 280,
    image01: product_22_image_01,
    
    category: "Japanese Food",
    
    desc: "Spice up your meal with our Sizzling Sisig.",
  },

  {
    id: "23",
    title: "Chicken Cacciatore",
    price: 280,
    image01: product_31_image_01,
    
    category: "Italian Food",
    
    desc: "Spice up your meal with our Sizzling Sisig.",
  },


  {
   id: "24",
    title: "Minestrone Bouillon",
    price: 280,
    image01: product_32_image_01,
    
    category: "Italian Food",
    
    desc: "Spice up your meal with our Sizzling Sisig.",
  },


  {
    id: "25",
    title: "Herb Chicken Milanese",
    price: 280,
    image01: product_30_image_01,
    
    category: "Italian Food",
    
    desc: "Spice up your meal with our Sizzling Sisig.",
  },


  {
    id: "26",
    title: "Toasted Ravioli",
    price: 280,
    image01: product_26_image_01,
    
    category: "Italian Food",
    
    desc: "Spice up your meal with our Sizzling Sisig.",
  },

  {
    id: "27",
    title: "Salmon Oreganato",
    price: 280,
    image01: product_27_image_01,
    
    category: "Italian Food",
    
    desc: "Spice up your meal with our Sizzling Sisig.",
  },

  {
    id: "28",
    title: "Mussels Lombardi",
    price: 280,
    image01: product_28_image_01,
    
    category: "Italian Food",
    
    desc: "Spice up your meal with our Sizzling Sisig.",
  },

  {
    id: "29",
    title: "Parmesan Crusted Fish Fillet",
    price: 280,
    image01: product_29_image_01,
    
    category: "Italian Food",
    
    desc: "Spice up your meal with our Sizzling Sisig.",
  },

  {
    id: "30",
    title: "Crispy Chicken Au Poivre",
    price: 280,
    image01: product_31_image_01,
    
    category: "Italian Food",
    
    desc: "Spice up your meal with our Sizzling Sisig.",
  },

  {
    id: "31",
    title: "Tuna Garganelli",
    price: 280,
    image01: product_27_image_01,
    
    category: "Italian Food",
    
    desc: "Spice up your meal with our Sizzling Sisig.",
  },

  {
    id: "32",
    title: "Spaghetti Meat balls",
    price: 280,
    image01: product_25_image_01,
    
    category: "Italian Food",
    
    desc: "Spice up your meal with our Sizzling Sisig.",
  },

  {
    id: "33",
    title: "Truffle Chicken Pasta",
    price: 280,
    image01: product_23_image_01,
    
    category: "Italian Food",
    
    desc: "Spice up your meal with our Sizzling Sisig.",
  },

  {
    id: "34",
    title: "Chicken Parmigiana",
    price: 280,
    image01: product_24_image_01,
    
    category: "Italian Food",
    
    desc: "Spice up your meal with our Sizzling Sisig.",
  },

  {
    id: "35",
    title: "Gyoza",
    price: 280,
    image01: product_33_image_01,
    
    category: "Japanese Food",
    
    desc: "Spice up your meal with our Sizzling Sisig.",
  },

  {
    id: "36",
    title: "Kani salad",
    price: 280,
    image01: product_34_image_01,
    
    category: "Japanese Food",
    
    desc: "Spice up your meal with our Sizzling Sisig.",
  },



];

export default products;
