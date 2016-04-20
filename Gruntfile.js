module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		compass: {
			compile: {
				options: {
					relativeAssets: true,
					sassDir: 'src/scss',
					cssDir: 'src/css',
					fontsDir: 'asset/fonts',
					importPath: [
						'bower_components/bootstrap-sass/assets/stylesheets/',
						'bower_components/font-awesome-sass/assets/stylesheets/'
					],
					outputStyle: 'nested', // nested, expanded, compact, compressed.
					noLineComments: true
				}
			}
		},
		coffee: {
			compile: {
				files: {
					'src/js/app.js': 'src/coffee/*.coffee'
				}
			}
		},
		concat: {
			// options: {
			// 	separator: ';',
			// },
			css: {
				files: {
					'asset/css/styles.css': [
						'src/css/*.css'
					]
				}
			},
			js: {
				files: {
					'asset/js/script.js': [
						'bower_components/jquery/dist/jquery.js',
						'bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
						'src/js/*.js'
					]
				}
			}
		},
		cssmin: {
			options: {
				keepSpecialComments: 0
			},
			css: {
				files: {
					'asset/css/styles.min.css': 'asset/css/styles.css'
				}
			}
		},
		uglify: {
			js: {
				files: {
					'asset/js/script.min.js': 'asset/js/script.js'
				}
			}
		},
		watch: {
			options: {
				livereload: true
			},
			css: {
				files: ['src/scss/*.scss'],
				tasks: ['compass', 'concat:css', 'cssmin:css']
			},
			js: {
				files: ['src/coffee/*.coffee'],
				tasks: ['coffee', 'concat:js', 'uglify:js']
			},
			html: {
				files: ['**/*.html']
			}
		},
		copy: {
			bootstrapFonts: {
				expand: true,
				cwd: 'bower_components/bootstrap-sass/assets/fonts/',
				src: '**',
				dest: 'asset/fonts/'
			},
			fontAwesomeFonts: {
				expand: true,
				cwd: 'bower_components/font-awesome-sass/assets/fonts/',
				src: '**',
				dest: 'asset/fonts/'
			}
		},
	});

	// Load the plugins.
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');

	// Default task(s).
	grunt.registerTask('default', ['copy', 'compass', 'coffee', 'concat', 'cssmin', 'uglify']);
};
