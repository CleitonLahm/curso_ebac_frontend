module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      development: {
        files: {
          'dist/styles/main.css': 'src/styles/*.less'
        }
      }
    },
    uglify: {
      options: {
        compress: true
      },
      target: {
        files: {
          'dist/scripts/main.min.js': 'src/scripts/*.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['less', 'uglify']);
};
