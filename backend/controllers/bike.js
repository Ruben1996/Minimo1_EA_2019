'use strict';

const mongoose = require('mongoose');
const Station = require('../models/station');
const Bike = require('../models/bike');

/**
 * Add student from Students collection
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
async function postBike(req, res) {
    const bike = new Bike();
    bike.name = req.body.name;
    bike.kms = req.body.kms;
    bike.description = req.body.description;
    try {
        await bike.save();
        res.status(200).send({message: "BikeService created successfully"})
    } catch (err) {
        res.status(500).send(err);
        console.log(err);
    }
}

/**
 * Delete student from Students collection
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
async function deleteBike(req, res) {
    try {
        const _id = req.params.bikeId;

        let bike = await Bike.findByIdAndDelete(_id);
        if(!bike){
            return res.status(404).send({message: 'BikeService not found'})
        }else{
            mongoose.Types.ObjectId(_id);

            await Bike.update({}, {$pull: {bikes: _id}}, {multi: true});

            res.status(200).send({message:'BikeService deleted successfully'});
        }
    } catch (err) {
        res.status(500).send(err);
    }
}
/*
async function updateBike(req, res) {
    try{
        const _id = req.params.studentId;
        let student = await Bike.findByIdAndUpdate(_id, req.body, {runValidators: true});
        if(!student){
            return res.status(404).send({message: 'StudentService not found'})
        }else{
            res.status(200).send(student)
        }
    }catch(err){
        if (err.name === 'MongoError' && err.code === 11000) {
            res.status(409).send({err: err.message, code: err.code})
        }
        res.status(500).send(err)
    }
}
*/
async function getBikes(req, res) {
    try {
        let bikes = await Bike.find();
        res.status(200).send(bikes);
    } catch(err) {
        res.status(500).send(err)
    }
}

/**
 * Export the functions to use them anywhere
 * @type {{getStudents: getStudents, updateStudent: updateStudent, postStudent: postStudent, deleteStudent: deleteStudent}}
 */
module.exports = {
    postBike,
    deleteBike,
    getBikes
};
