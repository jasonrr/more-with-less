function isBackgroundDark(rgba) {
    var isDark = true;
    var rgbColor = rgba.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    var perceivedLuminance = 1 - (0.299 * 
                                  rgbColor[1] + 0.587 * 
                                  rgbColor[2] + 0.114 * 
                                  rgbColor[3]) / 255;
    
    if (perceivedLuminance < 0.30) isDark = false;
    return isDark;
}

$(function() {
    if (!isBackgroundDark($('body').css('background-color'))) {
        $('a.inset-button').removeClass('dark').addClass('light');
    }
});