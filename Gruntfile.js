module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        less: {
            style: {
                options: { cleancss: true },
                src: "less/master.less",
                dest: "css/master.css"
            }
        },
        watch: {
            less: {
                files: ["less/*.less"],
                tasks: ["less"]
            }
        }
    });

    grunt.registerTask('default', ["less", "watch"]);
};
