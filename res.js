'use strict';

exports.oke = function(message, data, res) {
    var response = {
        'status': 200,
        'message': message,
        'data': data
    };

    res.status(200).json(response);
};

exports.error = function(message, res) {
    var response = {
        'status': 500,
        'message': message
    };

    res.status(500).json(response);
};
