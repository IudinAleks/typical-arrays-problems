exports.min = function min(array) {
    if (array == undefined) return 0;
    if (array.length == 0) return 0;
    return array.reduce((prevItem, currentItem) => {
        return prevItem > currentItem ? currentItem : prevItem;
    });
};

exports.max = function max(array) {
    if (array == undefined) return 0;
    if (array.length == 0) return 0;
    return array.reduce((prevItem, currentItem) => {
        return prevItem > currentItem ? prevItem : currentItem;
    });
};

exports.avg = function avg(array) {
    if (array == undefined) return 0;
    if (array.length == 0) return 0;
    let sum = array.reduce((prevItem, currentItem) => {
        return prevItem + currentItem;
    });
    return sum / array.length;
};
