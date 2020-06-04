const FALLBACK = 0, LABEL = 1;
function describe(text,display){
  if (document.getElementById('canvasDescription')==undefined){
    document.getElementById('defaultCanvas0').innerHTML = '<div id="canvasDescription" role="region" aria-label="Canvas Description"></div>'; 
  }
  document.getElementById('canvasDescription').innerHTML = '<p id="description">'+text+'</p>';
  if (display == 1){
    if (document.getElementById('canvasLabel')==undefined){
      document.getElementById('defaultCanvas0').insertAdjacentHTML('afterend','<div id="canvasLabel"><p>'+text+'</p></div>');
    }else{
      document.getElementById('canvasLabel').innerHTML = '<p>'+text+'</p>';
    }
  }
}