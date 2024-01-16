let hex, rgb, cmyk, hsl;

function getcolor(color) {
    if (color.id == 'Red') { hex = '#FF0000'; rgb = '255, 0, 0'; cmyk = '0%, 100%, 100%, 1%'; hsl = '0, 100%, 50%';}
    if (color.id == 'Pink') { hex = '#FF00BC'; rgb = '255, 0, 188'; cmyk = '0%, 100%, 26%, 1%'; hsl = '316, 100%, 50%';}
    if (color.id == 'Purple') { hex = '#AA00FF'; rgb = '170, 0, 255'; cmyk = '33%, 100%, 0%, 1%'; hsl = '280, 100%, 50%';}
    if (color.id == 'Dark Blue') { hex = '#2119FF'; rgb = '33, 25, 255'; cmyk = '87%, 90%, 0%, 1%'; hsl = '242, 100%, 55%'; }
    if (color.id == 'Blue') { hex = '#00D2FF'; rgb = '0, 210, 255'; cmyk = '100%, 18%, 0%, 1%'; hsl = '191, 100%, 50%';}
    if (color.id == 'Turquoise') { hex = '#30D5C8'; rgb = '48, 213, 200'; cmyk = '77%, 0%, 6%, 16%'; hsl = '175, 66%, 51%';}
    if (color.id == 'Green') { hex = '#00FF00'; rgb = '0, 255, 0'; cmyk = '100%, 0%, 100%, 1%'; hsl = '120, 100%, 50%';}
    if (color.id == 'Lime') { hex = '#A3FA00'; rgb = '163, 250, 0'; cmyk = '35%, 0%, 100%, 2%'; hsl = '81, 100%, 49%';}
    if (color.id == 'Yellow') { hex = '#FFF600'; rgb = '255, 246, 0'; cmyk = '0%, 4%, 100%, 1%'; hsl = '58, 100%, 50%';}
    if (color.id == 'Orange') { hex = '#FF9000'; rgb = '255, 144, 0'; cmyk = '0%, 44%, 100%, 1%'; hsl = '34, 100%, 50%';}
    document.querySelector('.selected-color p:last-child').innerHTML = color.id;
    document.querySelector('.selected-color p:last-child').style.color = hex;
    document.querySelector('.logo').style.color = hex;
    document.querySelector('.color-circle').style.backgroundColor = hex;
    document.querySelector('.field-color').innerHTML = color.id;
    document.querySelector('.field-hex').innerHTML = hex;
    document.querySelector('.field-rgb').innerHTML = rgb;
    document.querySelector('.field-cmyk').innerHTML = cmyk;
    document.querySelector('.field-hsl').innerHTML = hsl;
}