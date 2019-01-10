/**
 * Created by irfan.maulana on 11/24/2015.
 */
var express = require('express');
var ProductModel = require('../models/product');

var router = express.Router();
router.route('/')

// GET ALL DATA
.get(function(req, res) {
    return ProductModel.find(function(err, products) {
        if (!err) {
            return res.send({ result: true, products: products });
        } else {
            return res.send({ result: false, errorDesc: "Failed get data from DB." });
        }
    });
})

// INSERT DATA
.post(function(req, res, text) {
    var product;
    var errorMessage = "";
    if (typeof req !== 'undefined') {
        if (req.body._id === null || req.body._id === "") {
            errorMessage = "name product is null or empty.";
            return res.send({ result: false, errorDesc: errorMessage });
        } else {
            product = new ProductModel({
                name: req.body.name,
                password: req.body.password
            });
            product.save(function(err) {
                if (!err) {
                    console.log("product : " + product.name + " has been created ");
                    return res.send({ result: true, product: product });
                } else {
                    return res.send({ result: false, errorDesc: err });
                }
            });

        }
    } else {
        errorMessage = "Request is null or empty.";
        return res.send({ result: false, errorDesc: errorMessage });
    }
});

router.route('/:_id')

// GET BY ID
.get(function(req, res) {
    return ProductModel.findById(req.params._id, function(err, product) {
        if (!err) {
            return res.send({ result: true, product: product });
        } else {
            return res.send({ result: false, errorDesc: 'error when get product ' + req.params._id });
        }
    });
})

// UPDATE DATA
.put(function(req, res) {
    return ProductModel.findById(req.params._id, function(err, product) {
        if (req.body._id !== null && req.body._id !== "") {
            product._id = req.body._id;
        }
        product.name = req.body.name;
        product.password = req.body.password;
        return product.save(function(err) {
            if (!err) {
                console.log("product has been updated " + req.params._id);
                return res.send({ result: true, product: product });
            } else {
                return res.send({ result: false, errorDesc: 'error when update product ' + req.params._id });
            }
        });
    });
})

// DELETE DATA
.delete(function(req, res) {
    return ProductModel.findById(req.params._id, function(err, product) {

        return product.remove(function(err) {
            if (!err) {
                console.log("product " + req.params._id + " removed !");
                return res.send({ result: true, message: 'product ' + req.params._id + ' has been removed' });
            } else {
                return res.send({ result: false, errorDesc: 'error when remove product ' + req.params._id });
            }
        });
    });
});
router.route('/')

// GET ALL DATA
.get(function(req, res) {
    return ProductModel.find(function(err, products) {
        if (!err) {
            return res.send({ result: true, products: products });
        } else {
            return res.send({ result: false, errorDesc: "Failed get data from DB." });
        }
    });
})

// INSERT DATA
.post(function(req, res, text) {
    var product;
    var errorMessage = "";
    if (typeof req !== 'undefined') {
        if (req.body._id === null || req.body._id === "") {
            errorMessage = "name product is null or empty.";
            return res.send({ result: false, errorDesc: errorMessage });
        } else {
            product = new ProductModel({
                name: req.body.name,
                password: req.body.password
            });
            product.save(function(err) {
                if (!err) {
                    console.log("product : " + product.name + " has been created ");
                    return res.send({ result: true, product: product });
                } else {
                    return res.send({ result: false, errorDesc: err });
                }
            });

        }
    } else {
        errorMessage = "Request is null or empty.";
        return res.send({ result: false, errorDesc: errorMessage });
    }
});

router.route('/:name')

// GET BY ID
.get(function(req, res) {
    return ProductModel.findById(req.params._id, function(err, product) {
        if (!err) {
            return res.send({ result: true, product: product });
        } else {
            return res.send({ result: false, errorDesc: 'error when get product ' + req.params._id });
        }
    });
})

// UPDATE DATA
.put(function(req, res) {
    return ProductModel.findById(req.params._id, function(err, product) {
        if (req.body._id !== null && req.body._id !== "") {
            product._id = req.body._id;
        }
        product.name = req.body.name;
        product.password = req.body.password;
        return product.save(function(err) {
            if (!err) {
                console.log("product has been updated " + req.params._id);
                return res.send({ result: true, product: product });
            } else {
                return res.send({ result: false, errorDesc: 'error when update product ' + req.params._id });
            }
        });
    });
})

// DELETE DATA
.delete(function(req, res) {
    return ProductModel.findById(req.params._id, function(err, product) {

        return product.remove(function(err) {
            if (!err) {
                console.log("product " + req.params._id + " removed !");
                return res.send({ result: true, message: 'product ' + req.params._id + ' has been removed' });
            } else {
                return res.send({ result: false, errorDesc: 'error when remove product ' + req.params._id });
            }
        });
    });
});

module.exports = router;