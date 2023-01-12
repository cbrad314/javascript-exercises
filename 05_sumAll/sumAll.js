const sumAll = function(beginningInteger,endingInteger) {
    if (!Number.isInteger(beginningInteger) || !Number.isInteger(endingInteger)){
        return 'ERROR';
    }
    else if (beginningInteger <0 || endingInteger <0){
        return 'ERROR';
    }
    min = Math.min(beginningInteger,endingInteger);
    max = Math.max(beginningInteger,endingInteger)
    sum = min;
    for (i = min+1;i<=max;i++){
        sum +=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
