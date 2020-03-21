series = [[1, 2], [6, 9, 10]];
newInterval = [4, 5];

// Expected O/P: [[1,3], [4,9]]

overlaps = series.every((item, index) => {
    for (var i = item[0]; i <= item[1]; i++) {
        for (var j = newInterval[0]; j <= newInterval[1]; j++) {
            if (i === j) {
                series[index] = newInterval;
                return false;
            }
        }
    }
    return true;

});

if (!overlaps) {

}
console.log(`...overlaps: ${series}`);

