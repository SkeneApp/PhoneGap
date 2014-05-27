var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    fs = require('fs'),
    path = require('path');

var paths = {
  watch : './source/**/*.js',
  templates : './source/templates/',
  build : './source/app.js',
  dest : './builds/'
};

gulp.task('scripts', function () {
  gulp
    .src(paths.build)
    .pipe(browserify({ debug : false }))
    .pipe(gulp.dest(paths.dest));
});

gulp.task('templates', function () {
  fs.readdir(paths.templates, function (err, files) {
    if(err) {
      console.log(err);
      return;
    }

    var templates = {},
        dir, val;

    files.forEach(function (filename) {
      if(filename.indexOf('.html') === -1) {
        // work with directory
        return;
      }

      dir = path.normalize(paths.templates + filename);
      val = fs.readFileSync(dir, 'utf8');
      templates[filename] = val;
    });

    dir = path.normalize(paths.dest + 'templates.js');

    fs.writeFileSync(dir, 'module.exports = ' + JSON.stringify(templates) + ';');
    console.log('templates file was built (' + dir +')');
  });
});

gulp.task('watch', ['scripts'], function () {
  var watcher = gulp.watch(paths.watch, ['scripts']);
  watcher.on('change', function (event) {
    console.log('File ' + event.path + ' was ' + event.type + ', building scripts...');
  });
});

gulp.task('default', ['scripts', 'watch']);
