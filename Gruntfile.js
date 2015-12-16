module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      server: {
        files: [{
          expand: true,
          cwd: 'src/styles',
          src: ['{,*/}*.scss'],
          dest: 'tmp/styles',
          ext: '.css'
        }]
      }
    },
    browserSync: {
      options: {
        background: true
      },
      server: {
        options: {
          server: {
            baseDir: [
              'docs',
              'tmp'
            ],
          },
          port: 9000
        }
      }
    },
    watch: {
      sass: {
        files: ['src/styles/{,*/}*.scss'],
        tasks: ['sass:server']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('server', [
    'sass:server',
    'browserSync:server',
    'watch'
  ]);

  grunt.registerTask('default', 'server');
};
