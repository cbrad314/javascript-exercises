const fibonacci = function(value) {
    if (!value)return 0;
    else if (value <0) return 'OOPS';
    else {
        const series = [];
        let n1Value = 1;
        let n2Value = 0;
       for (let index = 0; index < value; index++) {
            if (index ===0)
                {series[index] = n1Value;
                }
            
            else {
                series[index] = n1Value + n2Value;
                n2Value = n1Value;
                n1Value = series[index];
                }

    }
    return series[value-1];
};
}


// Do not edit below this line
module.exports = fibonacci;
