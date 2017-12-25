const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

gulp

    .task('start', () => {
        return require('./server');
    })

    .task('dev', () => {
        return nodemon({
            ext: 'js',
            script: 'server.js',
        });
    });
