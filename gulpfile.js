const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const eslint = require('gulp-eslint');

gulp

    .task('start', () => {
        return require('./server');
    })

    .task('dev', () => {
        return nodemon({
            ext: 'js',
            script: 'server.js',
        });
    })

    .task('lint', () => {
        return gulp.src(['**/*.js', '!node_modules/**'])
            .pipe(eslint())
            .pipe(eslint.format())
            .pipe(eslint.failAfterError());
    });
