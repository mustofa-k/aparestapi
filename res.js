'use strict';

exports.oke = function(values,res) {
    var data = {
        'status' : 200,
        'values' : values
    }

     res.json(data);
     res.end()

} 