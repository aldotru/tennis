$(document).ready(function () {

    // Adding rotation effect to hamburguer icon
    // and toggleing mobile menu
    $('.hamburguer__icon').on('click', function() {

        $(this).toggleClass('rotate');
        $('.hamburguer__nav').toggleClass('show');

    })

});