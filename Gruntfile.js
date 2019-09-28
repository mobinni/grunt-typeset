/*
 * grunt-typeset
 * https://github.com/mobinni/grunt-typeset
 *
 * Copyright (c) 2019 Mo Binni
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

    grunt.initConfig({

        clean: {
            tests: ['dist']
        },

        typeset: {
            default_options: {
                options: {
                    only: '.process-this', // string of a CSS selector to only apply typeset,                    
                },
                src: [
                    'test/*.html',
                    'test/**/*.html'
                ]
            },

            custom_options: {
                options: {
                    only: '.process-this', // string of a CSS selector to only apply typeset,
                    ignore: '.skip-this', // string of a CSS selector to skip,
                    dest: 'dist2/',
                },
                src: [
                    'test/*.html',
                    'test/**/*.html'
                ]
            },
        },

    });

    grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('test', ['clean', 'typeset']);
    grunt.registerTask('default', ['clean', 'typeset']);
};
