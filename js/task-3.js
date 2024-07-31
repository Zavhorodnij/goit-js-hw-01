'use strict' ;
function getElementWidth(content, padding, border) {
    
    const contentWidth = parseFloat(content.slice(0, -2));
    const paddingValue = parseFloat(padding.slice(0, -2));
    const borderValue = parseFloat(border.slice(0, -2));
  
    const totalWidth = contentWidth + 2 * paddingValue + 2 * borderValue;
    return totalWidth;
  }
  
  console.log(getElementWidth("50px", "8px", "4px"));
  console.log(getElementWidth("60px", "12px", "8.5px"));
  console.log(getElementWidth("200px", "0px", "0px"));