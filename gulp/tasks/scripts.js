module.exports = function () {
    $.gulp.task('scripts:lib', function () {
        return $.gulp.src([
            'node_modules/jquery/dist/jquery.js',
            'dev/source/color-thief/src/color-thief.js',
            'node_modules/slick-carousel/slick/slick.js',
            'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',
            'node_modules/chosen-js/chosen.jquery.js',
            'node_modules/select2/dist/js/select2.full.js',
            'node_modules/moment/moment.js',
            'node_modules/fullcalendar/dist/fullcalendar.js',
            'node_modules/fullcalendar/dist/locale/uk.js',
            // 'node_modules/lottie-web/build/player/lottie.js',
            // 'node_modules/lottie-web/build/player/lottie_light.js',
            // 'node_modules/jquery.maskedinput/src/jquery.maskedinput.js',
            'node_modules/bowser/bowser.js',
            // 'node_modules/flatpickr/dist/flatpickr.js',
            // 'node_modules/aos/dist/aos.js',
            // 'node_modules/bootstrap/dist/js/bootstrap.bundle.js',
            // 'app/source/fontawesome-free-5.0.6/svg-with-js/js/fontawesome-all.js',

            // 'node_modules/nouislider/distribute/nouislider.js',
            // 'node_modules/wnumb/wNumb.js',

        ])
            .pipe($.concat('vendor.js'))
            .pipe($.gulp.dest('app/js'))
            .pipe($.browserSync.reload({
                'stream': true
            }))
    });

    $.gulp.task('scripts', function () {
        return $.gulp.src([
            // 'app/scripts/rew.accordion.js',
            // 'app/scripts/rew.tabs.js',
            'dev/scripts/dev.js',
            // 'app/scripts/mail.js'
        ])
            .pipe($.concat('scripts.js'))
            .pipe($.gulp.dest('app/js'))
            .pipe($.browserSync.reload({
                'stream': true
            }))
    });

    $.gulp.task('scripts:build', function () {
        return $.gulp.src('app/js/*.js')
            .pipe($.sourcemaps.init())
            .pipe($.strip.text())
            .pipe($.uglify())
            .pipe($.sourcemaps.write())
            .pipe($.gulp.dest('dist/js'))
    });
}