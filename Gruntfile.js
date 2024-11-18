module.exports = function (grunt) {
    grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    less: {
        development: {
        options: {
            compress: false,
        },
        files: {
            'dist/styles.css': 'src/styles.less',
        },
        },
    },

    uglify: {
        build: {
        files: {
            'dist/scripts.min.js': ['src/scripts.js'],
        },
        },
    },
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less', 'uglify']);
};