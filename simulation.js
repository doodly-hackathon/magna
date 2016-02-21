
var es = require("./esmodule");

console.log('Checking connection to elastic...');
//es.esConnectionOk(function(status){
//	if(status == true){
//		console.log('elastic is good.');
//		console.log('Checking for the elastic indices...');
//		/*If index already exists, delete and recreate the same and insert data.*/
//		es.deleteIndex('doodly', function(){
//			es.createDoodlyIndex(function(){
//				doodlyData();
//			});
//		});
//		
//		es.deleteIndex('package', function(){
//			es.createPackageIndex(function(){
//				
//			});
//		});
//		
//		es.deleteIndex('consumer', function(){
//			es.createConsumerIndex(function(){
//				
//			});
//		});
//		
//		es.deleteIndex('joint-mapping', function(){
//			es.createJointMappingIndex(function(){
//				
//			});
//		});
//	}else{
//		console.log('elastic health is bad, exiting.');
//		process.exit(1);
//	}		
//});



var getDoodlyJoints = function(id, type, nam, mob, addr, s, ms, currLat, curLon){
	return	{
		doodlyId: id,
		doodlyType: type,
		name: nam,
		mobile: mob,
		address: addr,
		sex: s,
		marital_status: ms,
		currLocation: {
			lat: currLat,
			lon: curLon
		},
		packageSet:[]
	};
}

var doodlyData = function(){
	/*es.indexInToDoodly(getDoodlyJoints('Dominos', 'JOINT', 'Dominos', '0000000000', 'addrJ1', 'm', 'single', 12.967439, 77.605845));
	es.indexInToDoodly(getDoodlyJoints('Fasoos', 'JOINT', 'Fasoos', '0000000000', 'addrJ2', 'm', 'single', 12.969875, 77.603227));
	es.indexInToDoodly(getDoodlyJoints('RoyalMart', 'JOINT', 'Royal Mart', '0000000000', 'addrJ3', 'm', 'single', 12.965568, 77.603399));
	es.indexInToDoodly(getDoodlyJoints('McDonald', 'JOINT', 'McDonald', '0000000000', 'addrJ4', 'm', 'single', 12.965170, 77.610276));
	es.indexInToDoodly(getDoodlyJoints('RelianceElectronics', 'JOINT', 'Reliance Electronics', '0000000000', 'addrJ5', 'm', 'single', 12.9646412, 77.5974017));
	es.indexInToDoodly(getDoodlyJoints('IyengarBakery', 'JOINT', 'Iyengar Bakery', '0000000000', 'addrJ6', 'm', 'single', 12.9766376, 77.6155769));
	*/
	/*es.indexInToDoodly(getDoodlyJoints('Raja', 'MOVING', 'Raja', '0000000000', 'addrM1', 'm', 'single', 12.9770265, 77.6013744));
	es.indexInToDoodly(getDoodlyJoints('Harry', 'MOVING', 'Harry', '0000000000', 'addrM2', 'm', 'single', 12.9739029, 77.6106031));
	es.indexInToDoodly(getDoodlyJoints('Jacob', 'MOVING', 'Jacob', '0000000000', 'addrM3', 'm', 'single', 12.9685373, 77.600468 ));
	es.indexInToDoodly(getDoodlyJoints('Martin', 'MOVING', 'Martin', '0000000000', 'addrM4', 'm', 'single', 12.9671572, 77.6094802 ));
	
	es.indexInToDoodly(getDoodlyJoints('doodlyM1', 'MOVING', 'doodlyM1', '0000000000', 'addrM1', 'm', 'single', 12.9742659, 77.613423));
	es.indexInToDoodly(getDoodlyJoints('doodlyM2', 'MOVING', 'doodlyM2', '0000000000', 'addrM2', 'm', 'single', 12.9645844, 77.5973297));
	es.indexInToDoodly(getDoodlyJoints('doodlyM3', 'MOVING', 'doodlyM3', '0000000000', 'addrM3', 'm', 'single', 12.9618572, 77.6001984 ));
	es.indexInToDoodly(getDoodlyJoints('doodlyM4', 'MOVING', 'doodlyM4', '0000000000', 'addrM4', 'm', 'single', 12.9671572, 77.6094802 ));*/
}

doodlyData();

/*setTimeout(function(){
	doodlyData();
}, 4000);*/



/*var getDoodlyJoints = function(id, type, name, mob, addr, s, ms, currLat, curLon){
return	{
	doodlyId: id,
	doodlyType: type,
	name: name,
	mobile: '0000000000',
	address: 'address of '+id,
	sex: 'm',
	marital_status: 'single',
	currLocation: {
		lat: latitude,
		lon: longitude
	},
	nextStop:{
		address: 'abc2',
		geoLocation: {
			lat: 0.0,
			lon: 0.0
		}
	},
	packageSet:[
	            {
	            	packageId: 'p1'+id,
	            	packageType: 'pt',
	            	size: '1.5',
	            	status: 'status',
	            	pickupLocation: {
	            		name: 'abc',
	            		mobile: '0000000000',
	            		address: 'abc1',
	            		geoLocation: {
	            			lat: 0.0,
	            			lon: 0.0
	            		}
	            	},
	            	dropLocation: {
	            		name: 'def',
	            		mobile: '0000000000',
	            		address: 'def',
	            		geoLocation: {
	            			lat: 0.0,
	            			lon: 0.0
	            		}
	            	}
	            },
	            {
	            	packageId: 'p2'+id,
	            	packageType: 'pt2',
	            	size: '1.5',
	            	status: 'status',
	            	pickupLocation: {
	            		name: 'abc',
	            		mobile: '0000000000',
	            		address: 'abc1',
	            		geoLocation: {
	            			lat: 0.0,
	            			lon: 0.0
	            		}
	            	},
	            	dropLocation: {
	            		name: 'def',
	            		mobile: '0000000000',
	            		address: 'def',
	            		geoLocation: {
	            			lat: 0.0,
	            			lon: 0.0
	            		}
	            	}
	            }
	            ]
};
}*/



