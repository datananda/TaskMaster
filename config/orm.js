const connection = require("./connection.js");

const orm = {
    selectAll: function(table, cb) {
        connection.query("SELECT * FROM ??", [table], (err, data) => {
            if (err) throw err;
            cb(data);
        });
    },
    insertOne: function(table, columns, values, cb) {
        connection.query("INSERT INTO ?? (??) VALUES (?)", [table, columns, values], (err, res) => {
          if (err) throw err;
          cb(res);
        });
    },
    updateOne: function(table, objColVals, condition, cb) {
        const query = connection.query("UPDATE ?? SET ? WHERE ?", [table, objColVals, condition], (err, res) => {
            if (err) throw err;
            cb(res);
        })
        console.log(query.sql);
    }
}

module.exports = orm;