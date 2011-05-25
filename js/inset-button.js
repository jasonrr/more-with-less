function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? "rgba(" + parseInt(result["1"], 16) + ", " +
                              parseInt(result["2"], 16) + ", " +
                              parseInt(result["3"], 16) + ", 1)"
    : null;
}

function isBackgroundDark(rgba) {
    var isDark = true;
    var rgbColor = rgba.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    if (!rgbColor) return;
    var perceivedLuminance = 1 - (0.299 * rgbColor["1"] + 0.587 * rgbColor["2"] + 0.114 * rgbColor["3"]) / 255;
    
    if (perceivedLuminance < 0.30) isDark = false;
    return isDark;
}

$(function() {
    var rgba = $('body').css('background-color');
    if (rgba.length == 7) rgba = hexToRgb(rgba);
    if (!isBackgroundDark(rgba)) {
        $('.dark').removeClass('dark').addClass('light');
    }
});