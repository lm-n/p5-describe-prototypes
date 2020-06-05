const FALLBACK = 0, LABEL = 1, canvasID = 'defaultCanvas0';
function describe(text,display) {
  if (document.getElementById(canvasID+'Description') == undefined) {
    document.getElementById(canvasID).innerHTML = '<div id="'+canvasID+'Description" role="region" aria-label="Canvas Description"><p id="'+canvasID+'desc"></p></div>';
  } else if (document.getElementById(canvasID+'desc') == undefined) {
    document.getElementById(canvasID+'elDes').insertAdjacentHTML('beforebegin', '<p id="'+canvasID+'desc"></p>');
  }
  if (document.getElementById(canvasID+'desc').innerHTML != text) {
    document.getElementById(canvasID+'desc').innerHTML = text;
  }
  if (display == 1) {
    if (document.getElementById(canvasID+'Label') == undefined) {
      document.getElementById(canvasID).insertAdjacentHTML('afterend', '<div id="'+canvasID+'Label"><p id='+canvasID+'dLbl></p></div>');
    } else if (document.getElementById(canvasID+'dLbl') == undefined) {
      document.getElementById(canvasID+'eLbl').insertAdjacentHTML('beforebegin', '<p id='+canvasID+'dLbl></p>');
    }
    if (document.getElementById(canvasID+'dLbl').innerHTML != text) {
      document.getElementById(canvasID+'dLbl').innerHTML = text;
    }
  }
}
function describeElement(name, text, display) {
  if (document.getElementById(canvasID+'Description') == undefined) {
    document.getElementById(canvasID).innerHTML = '<div id="'+canvasID+'Description" role="region" aria-label="Canvas Description"><table id="'+canvasID+'elDes"></table></div>';
  } else if (document.getElementById(canvasID+'elDes') == undefined) {
    document.getElementById(canvasID+'desc').insertAdjacentHTML('afterend', '<table id="'+canvasID+'elDes"></table>');
  }
  if (document.getElementById(canvasID+name) == undefined) {
    let tr = document.createElement("tr");
    tr.id = canvasID+name;
    document.getElementById(canvasID+'elDes').appendChild(tr);
  }
  if (document.getElementById(canvasID+name).innerHTML != '<td>' + name + '</td><td>' + text + '</td>') {
    document.getElementById(canvasID+name).innerHTML = '<td>' + name + '</td><td>' + text + '</td>';
  }
  if (display == 1) {
    if (document.getElementById(canvasID+'Label') == undefined) {
      document.getElementById(canvasID).insertAdjacentHTML('afterend', '<div id="'+canvasID+'Label"><table id="'+canvasID+'eLbl"></table></div>');
    } else if (document.getElementById(canvasID+'eLbl') == undefined) {
      document.getElementById(canvasID+'dLbl').insertAdjacentHTML('afterend', '<table id="'+canvasID+'eLbl"></table>');
    }
    if (document.getElementById(canvasID+name + 'Lbl') == undefined) {
      let tr = document.createElement("tr");
      tr.id = canvasID+name + 'Lbl';
      document.getElementById(canvasID+'eLbl').appendChild(tr);
    }
    if (document.getElementById(canvasID+name + 'Lbl').innerHTML != '<td>' + name + '</td><td>' + text + '</td>') {
      document.getElementById(canvasID+name + 'Lbl').innerHTML = '<td>' + name + '</td><td>' + text + '</td>';
    }
  }
}