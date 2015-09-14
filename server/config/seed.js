/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

// var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Category = require('../api/category/category.model')
var Product = require('../api/product/product.model')
// Thing.find({}).remove(function() {
//   Thing.create({
//     name : 'Development Tools',
//     info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
//   }, {
//     name : 'Server and Client integration',
//     info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
//   }, {
//     name : 'Smart Build System',
//     info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
//   },  {
//     name : 'Modular Structure',
//     info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
//   },  {
//     name : 'Optimized Build',
//     info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
//   },{
//     name : 'Deployment Ready',
//     info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
//   });
// });

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});

Category.find({}).remove(function() {
  Category.create({
    name : 'Laptops',
    info : 'Laptops',
    imageUrl: 'http://www.ftp-sgpartners.net/tdceu/uploads/uploaded/Laptops-tablets.jpg'
  }, {
    name : 'cellPhones',
    info : 'cellphones',
    imageUrl: 'http://www.boutique-concept.com/boutique/images/categories/Cell-Phone-Protective-Covers.jpg'
  }, {
    name : 'Tablets',
    info : 'Tablets',
    imageUrl: 'http://cdn.vrworld.com/wp-content/uploads/2015/02/tablets4.jpg'
  });
});

Product.find({}).remove(function() {
  Product.create({'category':'cellphone', 'name': 'nexus 6', 'imageUrl':'http://www.androidpolice.com/wp-content/uploads/2014/09/nexus2cee_n6lf3.png', 'manufacturer':'Motorola', 
                            'technicalDetails':{'microProcessor':'Qualcomm Snapdragon 805', 'screenDimension':'5.96 inches (~74.1% screen-to-body ratio)',
                            'battery':'Non-removable Li-Po 3220 mAh battery', 'camera':'13 MP, 4128 x 3096 pixels, autofocus, optical image stabilization, dual-LED (ring) flash'}}, 
                            {'category':'cellphone', 'name': 'nexus 6', 'imageUrl':'http://www.androidpolice.com/wp-content/uploads/2014/09/nexus2cee_n6lf3.png', 'manufacturer':'Motorola', 
                            'technicalDetails':{'microProcessor':'Qualcomm Snapdragon 805', 'screenDimension':'5.96 inches (~74.1% screen-to-body ratio)',
                            'battery':'Non-removable Li-Po 3220 mAh battery', 'camera':'13 MP, 4128 x 3096 pixels, autofocus, optical image stabilization, dual-LED (ring) flash'}}, 
                            {'category':'cellphone', 'name': 'nexus 6', 'imageUrl':'http://www.androidpolice.com/wp-content/uploads/2014/09/nexus2cee_n6lf3.png', 'manufacturer':'Motorola', 
                            'technicalDetails':{'microProcessor':'Qualcomm Snapdragon 805', 'screenDimension':'5.96 inches (~74.1% screen-to-body ratio)',
                            'battery':'Non-removable Li-Po 3220 mAh battery', 'camera':'13 MP, 4128 x 3096 pixels, autofocus, optical image stabilization, dual-LED (ring) flash'}},
                            {'category': 'laptop', 'name': 'Chromebook Pixel', 'imageUrl':'http://core0.staticworld.net/images/article/2014/08/chromebook-pixel-revisited-18-months-c-100410647-large.idge.jpg', 'manufacturer':'Google', 
                            'technicalDetails':{'microProcessor':'Intel® Core™ i7 processor, 2.4GHz, 16GB memory', 'screenDimension':'12.85" display with a media-friendly 3:2 aspect ratio',
                            'battery':'6 Cell Battery'}},
                            {'category': 'laptop', 'name': 'Chromebook Pixel', 'imageUrl':'http://core0.staticworld.net/images/article/2014/08/chromebook-pixel-revisited-18-months-c-100410647-large.idge.jpg', 'manufacturer':'Google', 
                            'technicalDetails':{'microProcessor':'Intel® Core™ i7 processor, 2.4GHz, 16GB memory', 'screenDimension':'12.85" display with a media-friendly 3:2 aspect ratio',
                            'battery':'6 Cell Battery'}},
                            {'category': 'laptop', 'name': 'Chromebook Pixel', 'imageUrl':'http://core0.staticworld.net/images/article/2014/08/chromebook-pixel-revisited-18-months-c-100410647-large.idge.jpg', 'manufacturer':'Google', 
                            'technicalDetails':{'microProcessor':'Intel® Core™ i7 processor, 2.4GHz, 16GB memory', 'screenDimension':'12.85" display with a media-friendly 3:2 aspect ratio',
                            'battery':'6 Cell Battery'}},
                            {'category': 'laptop', 'name': 'Chromebook Pixel', 'imageUrl':'http://core0.staticworld.net/images/article/2014/08/chromebook-pixel-revisited-18-months-c-100410647-large.idge.jpg', 'manufacturer':'Google', 
                            'technicalDetails':{'microProcessor':'Intel® Core™ i7 processor, 2.4GHz, 16GB memory', 'screenDimension':'12.85" display with a media-friendly 3:2 aspect ratio',
                            'battery':'6 Cell Battery'}},
                            {'category': 'laptop', 'name': 'Chromebook Pixel', 'imageUrl':'http://core0.staticworld.net/images/article/2014/08/chromebook-pixel-revisited-18-months-c-100410647-large.idge.jpg', 'manufacturer':'Google', 
                            'technicalDetails':{'microProcessor':'Intel® Core™ i7 processor, 2.4GHz, 16GB memory', 'screenDimension':'12.85" display with a media-friendly 3:2 aspect ratio',
                            'battery':'6 Cell Battery'}},
                            {'category': 'tablet', 'name': 'Nexus 9', 'imageUrl':'http://cdn.gottabemobile.com/wp-content/uploads/2013/08/Nexus-7-2013.jpg', 'manufacturer':'Google', 
                            'technicalDetails':{'microProcessor':'CPU: 64-bit NVIDIA Tegra K1 processor', 'screenDimension':'8.9" IPS LCD',
                            'battery':'6700 mAh', 'camera':'8MP rear camera, 1.6MP front camera'}},
                            {'category': 'tablet', 'name': 'Nexus 9', 'imageUrl':'http://cdn.gottabemobile.com/wp-content/uploads/2013/08/Nexus-7-2013.jpg', 'manufacturer':'Google', 
                            'technicalDetails':{'microProcessor':'CPU: 64-bit NVIDIA Tegra K1 processor', 'screenDimension':'8.9" IPS LCD',
                            'battery':'6700 mAh', 'camera':'8MP rear camera, 1.6MP front camera'}},
                            {'category': 'tablet', 'name': 'Nexus 9', 'imageUrl':'http://cdn.gottabemobile.com/wp-content/uploads/2013/08/Nexus-7-2013.jpg', 'manufacturer':'Google', 
                            'technicalDetails':{'microProcessor':'CPU: 64-bit NVIDIA Tegra K1 processor', 'screenDimension':'8.9" IPS LCD',
                            'battery':'6700 mAh', 'camera':'8MP rear camera, 1.6MP front camera'}}
  );
});


