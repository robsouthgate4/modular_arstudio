

export default class DataUtils {

    sort(prop, arr) {
        prop = prop.split('.');
        var len = prop.length;
        
        arr.sort(function (a, b) {
            var i = 0;
            while( i < len ) {
                a = a[prop[i]];
                b = b[prop[i]];
                i++;
            }
            if (a < b) {
                return -1;
            } else if (a > b) {
                return 1;
            } else {
                return 0;
            }
        });
        return arr;
    }
    
    static getLatestByDate(item, property){
        return item.sort(function(a, b) {
            const one = a[property]
            const two = b[property]
            const d1 = new Date(one)
            const d2 = new Date(two)
            return d2 - d1;
        })[0]
    }

    
}