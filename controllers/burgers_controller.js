const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", (req, res) => {
    burger.all((data) => {
        res.render("index", {
            burgers: data,
        });
    });
});

router.post("/burgers", (req, res) => {
    burger.insert([req.body.burger_name, req.body.devoured], (result) => {
        res.json({ id: result.insertId });
    });
});

router.put("/burgers/:id", (req, res) => {
    burger.update(req.body.objColVals, req.body.condition, (result) => {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        return res.status(200).end();
    });
});

module.exports = router;
