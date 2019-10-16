# grunt-typeset
A Grunt wrapper for [Typeset](https://www.npmjs.com/package/typeset)

[![Demo](http://i.imgur.com/adsiz94.gif)](https://blot.im/typeset)

**[Typeset](https://typeset.lllllllllllllllll.com/)** is an html pre-proces­sor for web ty­pog­ra­phy. It uses no client-side JavaScript and gives you hang­ing punc­tu­a­tion, soft hy­phen in­ser­tion, op­ti­cal mar­gin out­dents, small-caps con­ver­sion and punctuation substitution.

---

Feel free to contribute to the code.

## Getting started

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:


## Installation
```javascript
npm install grunt-typeset --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```javascript
grunt.loadNpmTasks('grunt-typeset');
```

## CSS
Tweak or add the following CSS:

```css
/* Small caps */
/*.small-caps {font-variant: small-cap/*s;}*/

/* Double quote (") marks */
.pull-double{margin-left:-.46em}
.push-double{margin-right:.46em}

/* Single quote (') marks */
.pull-single{margin-left:-.27em}
.push-single{margin-right:.27em}

/* Optical margin alignment for particular letters */
.pull-T, .pull-V, .pull-W, .pull-Y {margin-left: -0.07em}
.push-T, .push-V, .push-W, .push-Y {margin-right: 0.07em}

.pull-O, .pull-C, .pull-o, .pull-c {margin-left: -0.04em}
.push-O, .push-C, .push-o, .push-c {margin-right: 0.04em}

.pull-A {margin-left: -0.03em}
.push-A {margin-right: 0.03em}
```

## Settings

### Options
You can pass the following options object:
```javascript
typeset: {
    options: {
        ignore: '.skip, #skip', // string of a CSS selector to skip
        only: '#only-typeset, .only-typeset', // string of a CSS selector to only apply typeset,
        disable: '', // [quotes, hyphenate, ligatures, smallCaps, punctuation, hangingPunctuation, spaces]
        dest: 'dist', // default destination folder
    }
}
```

### Example 1:

```javascript
// ! typeset options
module.exports = grunt => {
    grunt.initConfig({
        typeset: {
            options: {
                ignore: '.skip, #skip',
                only: '#only-typeset, .only-typeset',
                disable: 'smallCaps',
                dest: 'dist',
            },
            src: [
                'test/*.html',
                'test/**/*.html'
            ]
        }
    });
};
```

### Example 2:

```javascript
// ! custom tasks
module.exports = grunt => {
    grunt.initConfig({
        typeset: {

            // ! grunt typeset:custom_task1
            custom_task1: {
                options: {
                    only: '.only-typeset',
                    disable: 'smallCaps',
                    dest: 'dist',
                },
                src: ['test/task1.html']
            },

            // ! grunt typeset:custom_task2
            custom_task2: {
                options: {
                    ignore: '.skip, #skip',
                    only: '#only-typeset, .only-typeset',
                    dest: 'dist',
                },
                src: ['test/task2.html']
            },

        }
    });
};
```

### Disable features
The following features may be disabled:

- quotes
- hyphenate
- ligatures
- smallCaps
- punctuation
- hangingPunctuation
- spaces


## Info
This plugin is compatible with Grunt `^1.0.4`

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
- 0.0.1: Initial release
- 0.0.2: Documentation
- 0.0.3: Removed unnecessary files
- 0.0.4: Updated typeset v0.2.2
- 0.0.5: Improved functions, updated documentation
- 0.0.6: Updated test units, and MIT license
