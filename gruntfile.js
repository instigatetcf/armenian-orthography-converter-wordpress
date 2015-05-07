module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-replace');

    var uglify = {
        main: {
            files: {
                'dest/armspelling/armspelling.min.js': [
                    'bower_components/armenian-orthography-converter/src/mashtots.js',
                    'bower_components/armenian-orthography-converter/src/mashtots-dom.js',
                    'src/armspelling/armspelling.js'
                ]
            }
        }
    };

    var concat = {
        main: {
            src: [
                'bower_components/armenian-orthography-converter/src/mashtots.js',
                'bower_components/armenian-orthography-converter/src/mashtots-dom.js',
                'src/armspelling/armspelling.js'
            ],
            dest: 'dest/armspelling/armspelling.js',
        }
    };

    var replace = {
        main: {
            options: {
                patterns: [
                    {
                        match: 'file',
                        replacement: 'armspelling.min.js'
                    }
                ]
            },
            files: [
                {
                    expand: true,
                    src: ['dest/armspelling/armspelling.php'],
                    dest: ''
                }
            ]
        },
        dev: {
            options: {
                patterns: [
                    {
                        match: 'file',
                        replacement: 'armspelling.js'
                    }
                ]
            },
            files: [
                {
                    expand: true,
                    src: ['dest/armspelling/armspelling.php'],
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
                    src: ['armspelling/armspelling.php'],
                    dest: 'dest/'
                },
                {
                    expand: true,
                    cwd: 'src',
                    src: ['armspelling/css/*'],
                    dest: 'dest/'
                }
            ]
        }
    };

    var clean = {
        dest: "dest/"
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
