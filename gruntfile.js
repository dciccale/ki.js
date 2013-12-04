module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      banner: '/*!\n * <%= pkg.name %> - <%= pkg.description %>\n' +
      ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %> (<%= pkg.author.url %>)\n' +
      ' * Released under <%= _.pluck(pkg.licenses, "type").join(", ") %> license\n */\n'
    },
    uglify: {
      update: {
        options: {
          banner: '<%= meta.banner %>',
          beautify: true,
          preserveComments: 'all'
        },
        files: {
          'ki.js': ['ki.js'],
          'ki.ie8.js': ['ki.ie8.js']
        }
      },
      ie: {
        files: {
          'ki.ie8.min.js': ['ki.ie8.js']
        }
      },
      normal: {
        files: {
          'ki.min.js': ['ki.js']
        }
      },
      all: {
        files: {
          'ki.all.min.js': ['ki.js', 'ki.ie8.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify:normal']);
};