const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./Data/categories.json');
const courses = require('./Data/courses.json');

app.get('/', (req, res) => {
    res.send('Codeamy is Running');
});

app.get('/courses-categories', (req, res) => {
    res.send(categories)
});

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const categoryCourses = courses.filter(course => course.category_id === id);
    res.send(categoryCourses);
})

app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/course/:id', (req, res) => {
    const id = (req.params.id);
    const selectedCourse = courses.find(course => course._id === id)
    res.send(selectedCourse)
})

app.get('/latest-course/', (req, res) => {
    const selectedCourse = courses.filter(course => course.rating === '5.00')
    res.send(selectedCourse)
})

app.listen(port, () => {
    console.log('Codeamy Server running on port', port);
})

module.exports = app;