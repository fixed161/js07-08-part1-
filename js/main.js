$(function() {

    $('.tooltip-items').hover(function(e) {

        var titleText = $(this).attr('title');
        $(this)
            .data('tiptext', titleText)
            .removeAttr('title');

        $('<div class="tooltip"></div>')
            .text(titleText)
            .appendTo('body')
            .css('top', (e.pageY - 10) + 'px')
            .css('left', (e.pageX + 20) + 'px')
            .fadeIn('slow');

    }, function() {

        $(this).attr('title', $(this).data('tiptext'));
        $('.tooltip').remove();

    }).mousemove(function(e) { 

        $('.tooltip')
            .css('top', (e.pageY - 10) + 'px')
            .css('left', (e.pageX + 20) + 'px');

    });

});
