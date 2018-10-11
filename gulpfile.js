'use strict';

var gulp = require('gulp');
var fcashBaseTasks = require('fcash-build');

fcashBaseTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
