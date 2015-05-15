app.factory("ngService", function(){
	var m = {
		vetor: 0,
		state: "dead",
		arr : new Array(length || 0)
	};

	m.createArray = function(vetor){
		var i = length;

	    if (arguments.length > 1) {
	        var args = Array.prototype.slice.call(arguments, 1);
	        while(i--) arr[length-1 - i] = createArray.apply(this, args);
	    }

	    return arr;
	};

	m.dead_alive = function(array){
		
		var newArray = Array();

		for(i=0;i<=m.arr.length;i++){

			newArray.push();

			for(j=0;j<=m.arr.length;j++){
				var count = 0;

				if(i<1)
					if(arr[i-1][j] == true)
						count++;
					if(arr[i-1][j+1] == true)
						count++;	
				if(j<1)
					if(arr[i][j-1] == true)
						count++;
					if(arr[i+1][j-1] == true)
						count++;
				if(j<1 && i<1)
					if(arr[i-1][j-1] == true)
						count++;
				if(arr[i][j+1] == true)
					count++;
				if(arr[i+1][j] == true)
					count++;
				if(arr[i+1][j+1] == true)
					count++;

				if(count == 2 || count == 3)
					newArray[i].push(true);
				else
					newArray[i].push(false);
			}
		}
		return newArray;
	}

	return m;
});