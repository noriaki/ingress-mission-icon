(function($) {
    //// download first canvas image
    // dependent on 'eligrey/canvas-toBlob.js', 'eligrey/FileSaver.js'
    $.fn.saveAs = function(filename) {
        $elm = $(this).eq(0);
        if($elm.prop('tagName').toLowerCase() === 'canvas') {
            $elm.get(0).toBlob(function(blob) { saveAs(blob, filename); });
        }
    };
})(jQuery);

jQuery(function($) {
    $.stage.Glyph.on($.stage.Glyph.EVENT_HACKED, function(e) {
        $('#tool_container')
            .find('#icons').slideUp('fast').end()
            .find('#loader').delay(100).fadeIn('fast');
        setTimeout(function() {
            var icon_data = $.stage.stage.getCanvasImage('png');
            $('#icon_thumb, #icon_thumb_circle').attr('src', icon_data);
            $('#tool_container')
                .find('#loader').fadeOut('fast').end()
                .find('#icons').delay(100).slideDown('fast');
        }, 1500);
    });

    $('#download').on('click', function(e) {
        $.stage.stage.saveAs('mission-icon.png');
    });
});
