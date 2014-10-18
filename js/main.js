$(document).on('click', '.tab-menu-list li', function () {
    if ( $(this).hasClass('active') ) return;
    var className = $(this).attr('class');
    $(this).addClass('active').siblings().removeClass('active');

    $('.research-content').hide();
    $('div.' + className).show();
});