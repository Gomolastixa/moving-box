const css_color_names = [
    "AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige",
    "Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown",
    "BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue",
    "Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod",
    "DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen",
    "DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen",
    "DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet",
    "DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick",
    "FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite",
    "Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew",
    "HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush",
    "LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan",
    "LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink",
    "LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray",
    "LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen",
    "Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid",
    "MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen",
    "MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream",
    "MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive",
    "OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen",
    "PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru",
    "Pink","Plum","PowderBlue","Purple","RebeccaPurple","Red","RosyBrown",
    "RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell",
    "Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow",
    "SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise",
    "Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"
  ];

  var box_left = 343 ;
  var box_top = 280 ;

  for ( i in css_color_names)
  {
    document.getElementById(colors).innerHTML += "<option value=\"css_color_names[i]\" onclick=\"changeBackgroundColor(this.id)\">" + css_color_names[i] + "</option>" ;
  }

  function changeBackgroundColor()
  {

  }

  function moveBoxUp()
  {
    box_top -= 4 ;
    document.getElementById("box").style.top = box_top + "px" ;
  }

  function moveBoxDown()
  {
    box_top += 4 ;
    document.getElementById("box").style.top = box_top + "px" ;
  }

  function moveBoxLeft()
  {
    box_left -= 4 ;
    document.getElementById("box").style.left = box_left + "px" ;
  }
  
  function moveBoxRight()
  {
    box_left += 4;
    document.getElementById("box").style.left = box_left + "px" ;
  }