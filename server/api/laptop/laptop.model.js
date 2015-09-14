'use strict';

var mongoose = require('mongoose')
 ,   Schema = mongoose.Schema;

var LaptopSchema = new Schema({
	name: {type: String}, 
	manufacturer: {type: String}, 
	category: {type: String, default: 'Laptop'},
	purpose:  { type: String, enum: ['Entertainment', 'Work', 'Game', 'Custom'] },
	width: {type: String},
	weight: {type: String},
	height: {type: String},
	length: {type: String},
	colorOptions: {type: Array}, 
	ASIN: {type: Array},
	UPC: {type: Array},   
	EAN: {type: Array}, 
	createDate: {type: Date},   
	releaseDate: {type: Date},
	originalProductPageURL: {type: String},
	features: {
		display: {
			size: {type: String},  
			resolution: {type: String}, 
			type: {type: String},
		  graphicCardManufacturer: {type: String},   
			graphicCardModel: {type: String},
		  graphicMemoryAccesibility: {type: String},  
	    extraFeatures: {type: String} },
	 	processor: {
	   	processorManufacturer: {type: String},
			processorModel: {type: String},  
			processorSpeed: {type: String}, 
	    processorCore: {type: String},  
	    extraFeatures: {type: String} },
	 	battery: {
			cellCount: {type: String},
			chemistry: {type: String},
			capacity: {type: String},
	    maxPower: {type: String},
	    extraFeatures: {type: String} },
	  memory: {
			ram: {type: String},  
	    ramCapacity: {type: String},   
	    ramSpeed: {type: String},  
	    ramType: {type: String},  
	    ramMaxCapacity: {type: String},  
			ramHomeCount: {type: String},  
	    extraFeatures: {type: String} },
	 	storage: {
	    capacity: {type: String},
	    opticDriverType: {type: String},  
	    extraFeatures: {type: String} },
	 	connectivity: {
			wifi: {type: String},
			bluetooth: {type: String},
	    ethernetTechnology: {type: String},   
			hdmi: {type: String},  
			vga: {type: String},  
			usb2: {type: String},  
			usb3: {type: String},  
			extraFeatures: {type: String} },
		platform: {
			operatingSystem: {type: String},  
			operatingSystemBits: {type: String},
			extraFeatures: {type: String}  },
		other: {
			includedAccesories: {type: String},
			sound: {type: String},
			webcam: {type: String}, 
			microphone: {type: String},  
			extraFeatures: {type: String} }
	},
});

module.exports = mongoose.model('Laptop', LaptopSchema);