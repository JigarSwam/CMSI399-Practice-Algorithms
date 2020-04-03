/**
 * Practice Algorithm for Thursday, April 2nd.
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let letterMap = {};
    let result = '';
    let stringArray = s.split('');

    for(let i = 0; i < stringArray.length; i++){
    	letterMap[stringArray[i]] = letterMap[stringArray[i]] + 1 || 1;
    }

    Object.keys(letterMap).sort((a,b)=>letterMap[b]-letterMap[a]).forEach((v) => {
    	for(let j = 0; j < letterMap[v]; j++){
    		result += v;
    	}
    });
    
    return result;
};