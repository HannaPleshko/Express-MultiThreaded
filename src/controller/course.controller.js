const express = require('express')
const { getCourseById, getCourses, createCourse, updateCourse, deleteCourse } = require('../service/course.service')
const { SuccessType } = require('../exceptions/exceptions.type');

const route = express.Router()

route.get('/', (req, res) => {
    try {
        const courses = getCourses()
        res.send(courses)
    } catch (error) {
        res.send(error.message)
    }
})

route.get('/:id', (req, res) => {
    try {
        const courses = getCourseById(req.params)
        res.send(courses)
    } catch (error) {
        res.send(error.message)
    }
})

route.post('/', (req, res) => {
    try {
        createCourse(req.body)
        res.send(SuccessType.COURSE_CREATE_SUCCESS)
    } catch (error) {
        res.send(error.message)
    }
})

route.put('/:id', (req, res) => {
    try {
        updateCourse(req.params, req.body)
        res.send(SuccessType.COURSE_UPDATE_SUCCESS)
    } catch (error) {
        res.send(error.message)
    }
})

route.delete('/:id', (req, res) => {
    try {
        deleteCourse(req.params)
        res.send(SuccessType.COURSE_DELETE_SUCCESS)
    } catch (error) {
        res.send(error.message)
    }
})

module.exports = route