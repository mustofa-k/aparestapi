'use strict';

exports.oke = function (message, data, res) {
    var response = {
        'status': 200,
        'message': message,
        'data': data
    };

    res.status(200).json(response);
};

exports.error = function (message, res) {
    var response = {
        'status': 500,
        'message': message
    };

    res.status(500).json(response);
};

exports.okNested = function (message, values, res) {
    const hasil = values.reduce((akumulasi, item) => {
        if (akumulasi[item.nama]) {
            const group = akumulasi[item.nama];
            if (Array.isArray(group.matakuliah)) {
                group.matakuliah.push(item.matakuliah);
            } else {
                group.matakuliah = [group.matakuliah, item.matakuliah];
            }
        } else {
            akumulasi[item.nama] = item;
        }
        return akumulasi;
    }, {});
    var response = {
        'status': 200,
        'message': message,
        'data': hasil
    };

    res.json(response);
    res.end();
};
