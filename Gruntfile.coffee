module.exports = ->

  @initConfig
    pkg: @file.readJSON 'package.json'

    uglify:
      options:
        banner: '/*!\n' +
          ' * <%= pkg.name %> v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
          ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %> (<%= pkg.author.url %>)\n' +
          ' * Released under <%= _.pluck(pkg.licenses, "type").join(", ") %> license\n' +
          ' */\n'

      ie:
        files:
          'ki.ie8.min.js': ['ki.ie8.js']

      normal:
        files:
          'ki.min.js': ['ki.js']

    committers:
      options:
        email: true
        output: 'CONTRIBUTORS.md'

  @loadNpmTasks 'grunt-contrib-uglify'
  @loadNpmTasks 'grunt-git-committers'

  @registerTask 'ie', ['uglify:ie']
  @registerTask 'default', ['uglify:normal']
