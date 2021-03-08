// Button-menu start
// $(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
		$('.btn-close').toggleClass('lock');
	});
// });


// const gulp = require('gulp');
// const autoprefixer = require('gulp-autoprefixer');
 
// exports.default = () => (
//     gulp.src('src/app.css')
//         .pipe(autoprefixer({
//             cascade: false
//         }))
//         .pipe(gulp.dest('dist'))
// );


// $(window).on("scroll", function() {
//     $(HTMLBodyElement.header).toggleClass("active", $(this).scrollTop() > $(window).height());
// });

// $(window).on("scroll", function() {
//     var scrollPos = $(window).scrollTop();
//     if (scrollPos <= 0) {
//         $('.nav').addClass('top-of-page');
//     } else {
//         $('.nav').removeClass('top-of-page');
//     }
// });


// function toggleScrollClass() {
//     var nav = document.querySelectorAll('nav')[0];
//     window.pageYOffset > 0 ? nav.classList.remove('fade') : nav.classList.add('bg')
//   }
//   window.addEventListener('scroll', function() {toggleScrollClass()});
//   toggleScrollClass();