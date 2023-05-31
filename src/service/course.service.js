const { ExceptionType } = require('../exceptions/exceptions.type');
const HttpException = require('../exceptions/HttpException');
const { readFileSync, writeFileSync } = require('fs')
const uuid = require('uuid');

const path = './storage/storage.json'

function getCourses() {
    const storage = JSON.parse(readFileSync(path));
    if (!storage.length) throw new HttpException(404, ExceptionType.DB_COURSES_NOT_FOUND);
    return storage;
}

function getCourseById(id) {
    const storage = JSON.parse(readFileSync(path));
    const found = storage.find(el => el.id === id) ?? null;
    if (!found) throw new HttpException(404, ExceptionType.DB_COURSE_NOT_FOUND);
    return found
}

function createCourse(course) {
    const storage = JSON.parse(readFileSync(path));
    storage.push({ id: uuid.v1(), ...course });
    writeFileSync(path, JSON.stringify(storage));
}

function updateCourse(id, course) {
    const storage = JSON.parse(readFileSync(path));

    const foundIndex = storage.findIndex(el => el.id === id) ?? null;
    if (foundIndex === -1) throw new HttpException(404, ExceptionType.DB_COURSE_NOT_FOUND);

    storage[foundIndex] = { id, ...course }
    writeFileSync(path, JSON.stringify(storage));
}

function deleteCourse(id) {
    const storage = JSON.parse(readFileSync(path));

    const filtered = storage.filter(el => el.id !== id);
    if (storage.length === filtered.length) throw new HttpException(404, ExceptionType.DB_COURSE_NOT_FOUND);

    writeFileSync(path, JSON.stringify(filtered));
}

module.exports = { getCourseById, getCourses, createCourse, updateCourse, deleteCourse }