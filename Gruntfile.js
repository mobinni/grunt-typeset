/*
 * grunt-typeset
 * https://github.com/mobinni/grunt-typeset
 *
 * Copyright (c) 2019 Mo Binni
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
    grunt.initConfig({

    // ! clean
    clean: {
        tests: ['dist', 'dist1', 'dist2']
    },

    // ! jshint
    jshint: {
        all: [
            'Gruntfile.js',
            'tasks/*.js',
            '<%= nodeunit.tests %>'
        ],
        options: {
            jshintrc: '.jshintrc'
        }
    },

    // ! typeset
    typeset: {

        custom_task1: {
            options: {
                only: '.only-typeset',
                disable: 'smallCaps',
                dest: 'dist',
            },
            src: ['test/task1.html']
        },

        // ! custom options
        custom_task2: {
            options: {
                ignore: '.skip, #skip',
                only: '#only-typeset, .only-typeset',
                dest: 'dist',
            },
            src: ['test/task2.html']
        }
    },

    // ! nodeunit tests.
    nodeunit: {
        tests: ['test/*_test.js']
    }

    });

    // ! load tasks
    grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('default', ['jshint', 'test']);
    grunt.registerTask('test', ['clean', 'typeset', 'nodeunit']);

};