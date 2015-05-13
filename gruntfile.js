module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-replace');

    var uglify = {
        main: {
            files: {
                'dest/armenian-orthography-converter/armenian-orthography-converter.min.js': [
                    'bower_components/armenian-orthography-converter/src/mashtots.js',
                    'bower_components/armenian-orthography-converter/src/mashtots-dom.js',
                    'src/armenian-orthography-converter/armenian-orthography-converter.js'
                ]
            }
        }
    };

    var concat = {
        main: {
            src: [
                'bower_components/armenian-orthography-converter/src/mashtots.js',
                'bower_components/armenian-orthography-converter/src/mashtots-dom.js',
                'src/armenian-orthography-converter/armenian-orthography-converter.js'
            ],
            dest: 'dest/armenian-orthography-converter/armenian-orthography-converter.js',
        }
    };

    var replace = {
        main: {
            options: {
                patterns: [
                    {
                        match: 'file',
                        replacement: 'armenian-orthography-converter.min.js'
                    }
                ]
            },
            files: [
                {
                    expand: true,
                    src: ['dest/armenian-orthography-converter/armenian-orthography-converter.php'],
                    dest: ''
                }
            ]
        },
        dev: {
            options: {
                patterns: [
                    {
                        match: 'file',
                        replacement: 'armenian-orthography-converter.js'
                    }
                ]
            },
            files: [
                {
                    expand: true,
                    src: ['dest/armenian-orthography-converter/armenian-orthography-converter.php'],
                    dest: ''
                }
            ]
        }
    };

    var copy = {
        main: {
            files: [
                {
                    expand: true,
                    cwd: 'src',
                    src: ['armenian-orthography-converter/armenian-orthography-converter.php'],
                    dest: 'dest/'
                },
                {
                    expand: true,
                    cwd: 'src',
                    src: ['armenian-orthography-converter/css/*'],
                    dest: 'dest/'
                }
            ]
        }
    };

    var clean = {
        dest: 'dest/'
    };

    grunt.initConfig({
        uglify: uglify,
        concat: concat,
        clean: clean,
        replace: replace,
        copy: copy
    });

    grunt.registerTask('build', ['clean:dest', 'copy:main', 'uglify:main', 'replace:main']);
    grunt.registerTask('build-dev', ['clean:dest', 'copy:main', 'concat:main', 'replace:dev']);
};
