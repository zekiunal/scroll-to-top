module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            options: {
                banner: "/*! jQuery Scroll to Top Control script- (c) Dynamic Drive (http://www.dynamicdrive.com) */\n",
                mangle: false
            },
            build: {
                src: 'dist/scroll-to-top.js',
                dest: 'dist/scroll-to-top.min.js'
            }
        },
        copy: {
            main: {
                expand: true,
                cwd: 'src',
                src: '**',
                dest: 'dist/'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    // Default task(s).
    grunt.registerTask('default', ['copy','uglify']);

};