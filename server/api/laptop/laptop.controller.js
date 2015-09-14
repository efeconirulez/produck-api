'use strict';
var async = require('async');
var _ = require('lodash');
var Laptop = require('./laptop.model');

// Get list of laptops
exports.index = function(req, res) {
  Laptop.find(function (err, laptops) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(laptops);
  });
};

// Get a single laptop
exports.show = function(req, res) {
  Laptop.findById(req.params.id, function (err, laptop) {
    if(err) { return handleError(res, err); }
    if(!laptop) { return res.status(404).send('Not Found'); }
    return res.json(laptop);
  });
};

// Creates a new laptop in the DB.
exports.create = function(req, res) {
  console.log(req.body);
  Laptop.create(req.body, function(err, laptop) {
    if(err) { return handleError(res, err); }
    return res.status(201).send('Efferim')
  });
};

exports.post = function(req, res, next) {
  console.log(req.body.features.display.size);
  async.auto ({
    checkIfLaptop: function (next) {
      Laptop.findOne({ 'name': req.body.name }, function (err, laptop) {
        if (err) return handleError(res, err);
        // if (laptop) return next('Laptop exists');
        return next()
      });
    },
    saveLaptop: ['checkIfLaptop', function (next) {
      var laptop = new Laptop();
      console.log(laptop);
      laptop.name = req.body.name ;
      laptop.manufacturer = req.body.manufacturer ;
      laptop.category = req.body.category ;
      laptop.width = req.body.width;
      laptop.weight = req.body.weight;
      laptop.height = req.body.height;
      laptop.length = req.body.length;
      laptop.colorOptions = req.body.colorOptions;
      laptop.ASIN = req.body.asin;
      laptop.UPC = req.body.upc;
      laptop.EAN = req.body.ean;
      laptop.createDate = req.body.createDate;
      laptop.releaseDate = req.body.releaseDate;
      laptop.originalProductPageURL = req.body.originalProductPageURL;
      laptop.features.display.size = req.body.features.display.size.toString();
      laptop.features.display.resolution = req.body.features.display.resolution;
      laptop.features.display.type = req.body.features.display.type;
      laptop.features.display.graphicCardManufacturer = req.body.features.display.graphicCardManufacturer;
      laptop.features.display.graphicCardModel = req.body.features.display.graphicCardModel;
      laptop.features.display.graphicMemoryAccesibility = req.body.features.display.graphicMemoryAccesibility;
      laptop.features.display.extraFeatures = req.body.features.display.extraFeatures;
      laptop.features.processor.processorManufacturer = req.body.features.processor.processorManufacturer;
      laptop.features.processor.processorModel = req.body.features.display.size.toString(); //req.body.features.processor.processorModel;
      laptop.features.processor.processorSpeed = req.body.features.processor.processorSpeed;
      laptop.features.processor.processorCore = req.body.features.processor.processorCore;
      laptop.features.processor.extraFeatures = req.body.features.processor.extraFeatures;
      laptop.features.battery.cellCount = req.body.features.battery.cellCount;
      laptop.features.battery.chemistry = req.body.features.battery.chemistry;
      laptop.features.battery.capacity = req.body.features.battery.capacity;
      laptop.features.battery.maxPower = req.body.features.battery.maxPower;
      laptop.features.battery.extraFeatures = req.body.features.battery.extraFeatures;
      laptop.features.memory.ram = req.body.features.memory.ram;
      laptop.features.memory.ramCapacity = req.body.features.memory.ramCapacity;
      laptop.features.memory.ramSpeed = req.body.features.memory.ramSpeed;
      laptop.features.memory.ramType = req.body.features.memory.ramType;
      laptop.features.memory.ramMaxCapacity = req.body.features.memory.ramMaxCapacity;
      laptop.features.memory.ramHomeCount = req.body.features.memory.ramHomeCount;
      laptop.features.memory.extraFeatures = req.body.features.memory.extraFeatures;
      laptop.features.storage.capacity = req.body.features.storage.capacity;
      laptop.features.storage.opticDriverType = req.body.features.storage.opticDriverType;
      laptop.features.storage.extraFeatures = req.body.features.storage.extraFeatures;
      laptop.features.connectivity.i = req.body.features.connectivity.i;
      laptop.features.connectivity.bluetooth = req.body.features.connectivity.bluetooth;
      laptop.features.connectivity.ethernetTechnology = req.body.features.connectivity.ethernetTechnology;
      laptop.features.connectivity.hdmi = req.body.features.connectivity.hdmi;
      laptop.features.connectivity.vga = req.body.features.connectivity.vga;
      laptop.features.connectivity.usb2 = req.body.features.connectivity.usb2;
      laptop.features.connectivity.usb3 = req.body.features.connectivity.usb3;
      laptop.features.connectivity.extraFeatures = req.body.features.connectivity.extraFeatures;
      laptop.features.platform.operatingSystem = req.body.features.platform.operatingSystem;
      laptop.features.platform.operatingSystemBits = req.body.features.platform.operatingSystemBits;
      laptop.features.platform.extraFeatures = req.body.features.platform.extraFeatures;
      laptop.features.other.includedAccesories = req.body.features.other.includedAccesories;
      laptop.features.other.sound = req.body.features.other.sound;
      laptop.features.other.webcam = req.body.features.other.webcam;
      laptop.features.other.microphone = req.body.features.other.microphone;
      laptop.features.other.extraFeatures = req.body.features.other.extraFeatures;
      laptop.save(function (err) {
        if (err) return next(err);
        return next(null, laptop);
      });
    }]
    },function (err, results) {
      if (err) return next(err);
      return res.status(201).json(results.saveLaptop);
    });  
  };


// Updates an existing laptop in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Laptop.findById(req.params.id, function (err, laptop) {
    if (err) { return handleError(res, err); }
    if(!laptop) { return res.status(404).send('Not Found'); }
    var updated = _.merge(laptop, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(laptop);
    });
  });
};

// Deletes a laptop from the DB.
exports.destroy = function(req, res) {
  Laptop.findById(req.params.id, function (err, laptop) {
    if(err) { return handleError(res, err); }
    if(!laptop) { return res.status(404).send('Not Found'); }
    laptop.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}