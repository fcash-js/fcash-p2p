'use strict';

var gulp = require('gulp');
var fcoreTasks = require('fcash-build');

fcoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
