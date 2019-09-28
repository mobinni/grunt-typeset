/*
 * grunt-typeset
 * https://github.com/mobinni/grunt-typeset
 *
 * Copyright (c) 2019 Mo Binni
 * Licensed under the MIT license.
 */

'use strict';

const typeset = require('typeset');
const fs = require('fs');

module.exports = grunt => {

    function save(output, dest, path) {
        const pathArr = path.split('/');
        pathArr[0] = dest;
        const savePath = pathArr.join('/');
        grunt.file.write(savePath, output);
    }

    function processFile(path, {
        ignore,
        only,
        disable,
        dest
    }) {
        const file = fs.readFileSync(path);
        const output = typeset(file, {
            ignore,
            only,
            disable,
        });
        save(output, dest, path);
    }

    function process(isDir, path, options) {
        if (isDir) {
            const files = fs.readdirSync(path);
            console.log(files);
        } else {
            processFile(path, options);
        }
    }

    grunt.registerMultiTask('typeset', 'A Grunt wrapper for Typeset.js', function() {
        const options = this.options({
            ignore: '',
            only: '',
            disable: '',
            dest: 'dist'
        });

        const src = this.files[0].orig.src;

        grunt.file.expand(src).forEach(path => {
            const isDir = grunt.file.isDir(path);
            process(isDir, path, options);
        });
    });
};