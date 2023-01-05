var gcmq = require('gulp-group-css-media-queries');

module.exports = function () {
  $.gulp.task('styles:dev', () => {
    return $.gulp.src('./dev/static/styles/main.scss')
      .pipe($.gp.changed('./build/static/css/'))
      .pipe($.gp.plumber())
      .pipe($.gp.sass())
      .pipe($.gp.autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false
      }))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gp.concat('main.min.css'))
      .pipe($.gulp.dest('./build/static/css/'))
      .pipe($.browserSync.reload({
        stream: true
      }));
  });

  $.gulp.task('styles:build', () => {
    return $.gulp.src('./dev/static/styles/main.scss')
      .pipe($.gp.sass())
      .pipe($.gp.autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false
      }))
      .pipe($.gp.concat('main.css'))
      .pipe($.gulp.dest('./build/static/css/'))
      .pipe($.gp.filesize())
      .pipe(gcmq())
      .pipe($.gp.csscomb())
      .pipe($.gp.csso())
      .pipe($.gp.concat('main.min.css'))
      .pipe($.gulp.dest('./build/static/css/'))
      .pipe($.gp.filesize())
  });

  // Scss libs (only scss)
  $.gulp.task('styles:libs', () => {
    return $.gulp.src('./dev/static/styles/libs.scss')
      .pipe($.gp.sass())
      .pipe($.gp.autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false
      }))
      .pipe($.gp.concat('libs.css'))
      .pipe($.gulp.dest('./build/static/css/'))
      .pipe($.gp.filesize())
      .pipe($.gp.csscomb())
      .pipe($.gp.csso())
      .pipe($.gp.concat('libs.min.css'))
      .pipe($.gulp.dest('./build/static/css/'))
      .pipe($.gp.filesize())
  });

  // Stylus libs (support css)
  // $.gulp.task('styles:libs', () => {
  //   return $.gulp.src('./dev/static/styles/libs.scss')
  //     .pipe($.gp.stylus({
  //       'include css': true
  //     }))
  //     .pipe($.gp.autoprefixer({
  //       overrideBrowserslist: ['last 2 versions'],
  //       cascade: false
  //     }))
  //     .pipe($.gp.concat('libs.css'))
  //     .pipe($.gulp.dest('./build/static/css/'))
  //     .pipe($.gp.filesize())
  //     .pipe($.gp.csscomb())
  //     .pipe($.gp.csso())
  //     .pipe($.gp.concat('libs.min.css'))
  //     .pipe($.gulp.dest('./build/static/css/'))
  //     .pipe($.gp.filesize())
  // });

};

