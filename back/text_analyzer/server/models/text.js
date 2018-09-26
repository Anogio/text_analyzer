'use strict';

module.exports = function(Text) {
	Text.getStats = function(content){
		content = content.toLowerCase().replace(/\s/g, '')
		console.log(content)
		var alphabet = "abcdefghijklmnopqrstuvwxyz";
		var counts = {}

		var i
		for(i=0; i<alphabet.length; i++){
			counts[alphabet[i]] = 0
		}
		for(i=0; i<content.length; i++){
			counts[content[i]]++
		}
		return counts
	}

	Text.lettersStat = function(id,cb){
		Text.findOne({where: {id: id}}, function(err, text) { 
			if(text){
				console.log('Coucou')
				console.log(text)
	    		let cont = text.Content
	    		console.log(cont)
	   			//return only the location property of the dog
	    		cb(null, {err:0, stat:Text.getStats(cont)});
	    	}
	    	else{
	    		cb(null, {err:1})
	    	}
  });   

	Text.basic = function(cb){
		console.log('Enter function')
		cb(null, 'Hello')
	}

	}
	Text.remoteMethod(
    	'lettersStat', 
    	{
    	accepts: {arg: 'id', type: 'String', required: true},
        http: {path: '/:id/stats', verb: 'get'},
        returns: {arg: 'stats', type: 'Object'}
    	});

	Text.remoteMethod(
    	'basic', 
    	{
    	accepts: {},
        http: {path: '/basic', verb: 'get'},
        returns: {arg: 'base', type: 'String'}
    	});
};
