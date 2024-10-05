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

      normal:
        files:
          'ki.min.js': ['ki.js']

    committers:
      options:
        email: true
        output: 'CONTRIBUTORS.md'

  @loadNpmTasks 'grunt-contrib-uglify'
  @loadNpmTasks 'grunt-git-committers'

  @registerTask 'default', ['uglify:normal']
