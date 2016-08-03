module.exports = function( grunt ) {

    'use strict';

    grunt.initConfig({

        // Compile Sass
        compass: {
            dist: {
                options: {
                    sourcemap: true,
                    cssDir: 'source/css',
                    sassDir: 'source/sass',
                    outputStyle: 'compressed',
                    force: true
                }
            }
        },

        // Watch Files
        watch: {
            compass: {
                files: [
                    'source/sass/*.{scss,sass}',
                    'source/sass/**/**.{scss,sass}'
                ],
                tasks:['compass','reload']
            }
        },

        // Open Browser
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'source/*.html',
                        'source/css/{,*/}*.css'
                    ]
                },
                options: {
                    server: 'source',
                    open: true,
                    watchTask: true
                }
            }
        },

        // Live Reload
        reload: {
            liveReload: {port: 35728},
            proxy: {
                host: 'localhost',
                port: 35729
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks("grunt-reload");
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.registerTask('default', ['compass','browserSync','watch']);
};
