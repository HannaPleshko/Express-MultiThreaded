const ExceptionType = {
  DB_COURSE_NOT_FOUND: { id: 1, message: 'DB not found course.' },
  DB_COURSES_NOT_FOUND: { id: 2, message: 'DB not found courses.' },
};

const SuccessType = {
  COURSE_CREATE_SUCCESS: { id: 1, message: 'Course created successfully.' },
  COURSE_UPDATE_SUCCESS: { id: 1, message: 'Course updated successfully.' },
  COURSE_DELETE_SUCCESS: { id: 1, message: 'Course deleted successfully.' },
};

module.exports = { ExceptionType, SuccessType };
