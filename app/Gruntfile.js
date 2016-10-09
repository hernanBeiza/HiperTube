module.exports = function(grunt){
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
 
		watch:{
			//files:['./*','views/**'],
			files:['./*'],
			tasks:''
		},

  		express:{
  			all:{
  				options:{
  					port:4000,
  					hostname:'localhost',
  					bases:['./','./**/*.*'],
  					livereload:true	
  				}
  			}
  		}
	    	
	});
 
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-express');	
	grunt.registerTask('server',['express','watch']);
	grunt.registerTask('default',['server']);
};