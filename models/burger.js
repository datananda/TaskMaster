const orm = require("../config/orm.js");

const burger = {
    all: (cb) => {
        orm.selectAll("burgers", (data) => {
            cb(data);
        });
    },
    insert: (values, cb) => {
        orm.insertOne("burgers", ["burger_name", "devoured"], values, (res) => {
            cb(res);
        });
    },
    update: (objColVals, condition, cb) => {
        orm.updateOne("burgers", objColVals, condition, (res) => {
            cb(res);
        });
    },
};

module.exports = burger;
