$('.tab-title').click((e) => {
    $('.active').siblings('.tab-text').addClass('d-none');
    $('.active').removeClass('active');
    $(e.target).addClass('active');
    $(e.target).siblings('.tab-text').removeClass('d-none');
});