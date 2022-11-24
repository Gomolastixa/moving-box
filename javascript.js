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

  const radio_buttons = document.querySelectorAll('input[name=box_color]') ;

  var box_side = 110 ;
  var box_left = 343 ;
  var box_top = 280 ;
  

  function changeBoxColor(element)
  {
    document.getElementById('box').style.background = element.value ;
  }

  function changeBackgroundColor()
  {
    for (const radio_button of radio_buttons)
    {
      if (radio_button.checked) // == true ειναι περιττο
      {
        document.getElementById('container').style.background = radio_button.value ;
        break ;
      }
    }
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

  function largerBox()
  {
    box_side += 4 ;
    document.getElementById('box').style.width = box_side + "px" ;
    document.getElementById('box').style.height = box_side + "px" ;
  }

  function smallerBox()
  {
    box_side -= 4 ;
    document.getElementById('box').style.width = box_side + "px" ;
    document.getElementById('box').style.height = box_side + "px" ;
  }

  function resetBox()
  {
    box_side = 110 ;
    document.getElementById('box').style.width = box_side + 'px' ;
    document.getElementById('box').style.height = box_side + 'px' ;
    document.getElementById('box').style.top = 280 + "px" ;
    document.getElementById('box').style.left = 343 + "px" ;
    document.getElementById('box').style.background = "antiquewhite" ;
    document.getElementById('container').style.background = "darkcyan" ;
  }