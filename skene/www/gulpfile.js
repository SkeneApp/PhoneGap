var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    fs = require('fs'),
    path = require('path'),
    sass = require('gulp-sass');

var paths = {
  watch : './source/**/*.js',
  templates : {
    src : './source/templates/',
    dest : './source/dist/templates.js'
  },
  build : './source/app.js',
  dest : './builds/',
  sass: {
    src : './styles/scss/**/*.scss',
    dest : './styles/css/'
  }
};

gulp.task('scripts', function () {
  gulp
    .src(paths.build)
    .pipe(browserify({ debug : false }))
    .pipe(gulp.dest(paths.dest));
});

gulp.task('templates', function () {

  function getFileContent(dir) {
    return fs.readFileSync(dir, 'utf8');
  }

  function processFilename(filename) {
    return filename.slice(0, filename.indexOf('.'));
  }

  fs.readdir(paths.templates.src, function (err, files) {
    if(err) {
      console.log(err);
      return;
    }

    var templates = {},
        dir, val, i, j;

    for(i = 0; i < files.length; i += 1) {
      var filename = files[i],
          subfiles;

      console.log(filename);

      if(filename.indexOf('.html') === -1) {
        // if folder
        templates[filename] = [];
        subfiles = fs.readdirSync(paths.templates.src + filename);

        for(j = 0; j < subfiles.length; j += 1) {
          var subfile = subfiles[i];

          console.log(subfile);

          if(subfile.indexOf('.html') !== -1) {
            // if file
            templates[filename][processFilename(subfile)] = getFileContent(path.join(paths.templates.src, filename, subfile));
          }
        }
      }
      // if file
      else {
        templates[processFilename(filename)] = getFileContent(path.join(paths.templates.src, filename));
      }
    }

    dir = path.normalize(paths.templates.dest);

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

gulp.task('sass', function () {
  gulp.src(paths.sass.src)
        .pipe(sass())
        .pipe(gulp.dest(paths.sass.dest));
});

gulp.task('w_sass', ['sass'], function () {
  var watcher = gulp.watch(paths.sass.dest, ['sass']);
  watcher.on('change', function (event) {
    console.log('File ' + event.path + ' was ' + event.type + ', building styles...');
  });
});
