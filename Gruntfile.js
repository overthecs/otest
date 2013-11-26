module.exports = function(grunt) {

  grunt.initConfig({
    compass: {
      dev: {
        options: {
          cssDir: 'static',
          sassDir: 'static',
          environment: 'development'
        }
      },
      pub: {
        options: {
          cssDir: 'static',
          sassDir: 'static',
          environment: 'production'
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      css: {
        files: ['static/*.scss'],
        tasks: ['compass']
      }
    },
    connect: {
      site1: {
        options: {
          port: 9001,
          hostname: '0.0.0.0'
          //Note that if this option is enabled, any tasks specified after this task will never run.
          //see there https://github.com/gruntjs/grunt-contrib-connect#keepalive
          //so use `grunt server:keepalive`
          //keepalive: true
        }
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', 'compass:pub');
  grunt.registerTask('server', ['connect', 'watch']);
}
