function randomPalette() {
    const saturation = 1;
    const lightness = 0.5;
    const maxDegrees = 360;
    const numColors = 5;
    const steps = maxDegrees/numColors;
    var seed = Math.random() * maxDegrees;
    
    var h_1 = seed;
    var h_2 = h_1 + steps < maxDegrees ? h_1 + steps : h_1 + steps - maxDegrees;
    var h_3 = h_2 + steps < maxDegrees ? h_2 + steps : h_2 + steps - maxDegrees;
    var h_4 = h_3 + steps < maxDegrees ? h_3 + steps : h_3 + steps - maxDegrees;
    var h_5 = h_4 + steps < maxDegrees ? h_4 + steps : h_4 + steps - maxDegrees;
    
    var hsl_color_1 = hslToRgb(h_1/maxDegrees, saturation, lightness);
    var hsl_color_2 = hslToRgb(h_2/maxDegrees, saturation, lightness);
    var hsl_color_3 = hslToRgb(h_3/maxDegrees, saturation, lightness);
    var hsl_color_4 = hslToRgb(h_4/maxDegrees, saturation, lightness);
    var hsl_color_5 = hslToRgb(h_5/maxDegrees, saturation, lightness);
    
    var color_1 = RGB2Color(hsl_color_1[0],hsl_color_1[1], hsl_color_1[2]);
    var color_2 = RGB2Color(hsl_color_2[0],hsl_color_2[1], hsl_color_2[2]);
    var color_3 = RGB2Color(hsl_color_3[0],hsl_color_3[1], hsl_color_3[2]);
    var color_4 = RGB2Color(hsl_color_4[0],hsl_color_4[1], hsl_color_4[2]);
    var color_5 = RGB2Color(hsl_color_5[0],hsl_color_5[1], hsl_color_5[2]);
    
    $("#color1").css("background-color",color_1);
    $("#color2").css("background-color",color_2);
    $("#color3").css("background-color",color_3);
    $("#color4").css("background-color",color_4);
    $("#color5").css("background-color",color_5);
    
    generateRules(color_1, color_2, color_3, color_4, color_5);
  }
  
  function generateRules(color_1, color_2, color_3, color_4, color_5) {
    document.getElementById("css-rules").value =
      ".website-background{ color: " + color_1 + ";}\n\n.element-text{ color: " + color_2 + ";}\n\n.element-border{ border-color: " + color_3 + ";}\n\n.element-background{ background-color: " + color_4 + ";}\n\n.header{ color: " + color_4 + ";}";
  }

  function clearPalette(){
    document.getElementById("css-rules").value =
      ".website-background{ color: #FFFFFF;}\n\n.element-text{ color: #FFFFFF;}\n\n.element-border{ border-color: #FFFFFF;}\n\n.element-background{ background-color: #FFFFFF;}\n\n.header{ color: #FFFFFF;}";
    $("#color1").removeAttr( 'style' );
    $("#color2").removeAttr( 'style' );
    $("#color3").removeAttr( 'style' );
    $("#color4").removeAttr( 'style' );
    $("#color5").removeAttr( 'style' );
  }
  
  function RGB2Color(r,g,b)
  {
    return '#' + this.byte2Hex(r) + this.byte2Hex(g) + this.byte2Hex(b);
  }
  
  function byte2Hex (n)
  {
    var nybHexString = "0123456789ABCDEF";
    return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
  }
  