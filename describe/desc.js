const FALLBACK = 0, LABEL = 1;
function describe(canvasID,text,display){
  if (document.getElementById(canvasID+'Description')==undefined){
    document.getElementById(canvasID).innerHTML = '<div id="'+canvasID+'Description" role="region" aria-label="Canvas Description"></div>'; 
  }
  document.getElementById(canvasID+'Description').innerHTML = '<p id="description">'+text+'</p>';
  if (display == 1){
    if (document.getElementById(canvasID+'Label')==undefined){
      document.getElementById(canvasID).insertAdjacentHTML('afterend','<div id="'+canvasID+'Label"><p>'+text+'</p></div>');
    }else{
      document.getElementById(canvasID+'Label').innerHTML = '<p>'+text+'</p>';
    }
  }
}