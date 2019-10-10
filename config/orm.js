var connection = require("../config/connection");

var orm = {
    selectAll: function (table, cb) {
        connection.query("SELECT * FROM " + table + ";", function (err, result) {
            console.log(result);
            if (err) throw (err);
            cb(result);
        })
    },
    insertOne: function (table, val, cb) {
        connection.query("INSERT INTO " + table + " (name) VALUES ( \"" + val + "\"); ", function (err, result) {
            if (err) throw (err);
            cb(result);
        })
    },
    delete: function (table, val, cb) {
        connection.query("DELETE FROM " + table + " WHERE " + val, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    updateOne: function (table, condition, cb) {
        connection.query("UPDATE " + table + " SET devoured= 1 WHERE " + condition, function (err, result) {
                if (err) throw err;
                cb(result);
        })
        

    }
}

module.exports = orm;