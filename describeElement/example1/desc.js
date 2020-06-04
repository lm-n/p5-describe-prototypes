const FALLBACK = 0, LABEL = 1;

function describe(text, display) {
  if (document.getElementById('canvasDescription') == undefined) {
    document.getElementById('defaultCanvas0').innerHTML = '<div id="canvasDescription" role="region" aria-label="Canvas Description"><p id="description"></p></div>';
  } else if (document.getElementById('description') == undefined) {
    document.getElementById('elementsDescription').insertAdjacentHTML('beforebegin', '<p id="description"></p>');
  }
  if (document.getElementById('description').innerHTML != text) {
    document.getElementById('description').innerHTML = text;
  }
  if (display == 1) {
    if (document.getElementById('canvasLabel') == undefined) {
      document.getElementById('defaultCanvas0').insertAdjacentHTML('afterend', '<div id="canvasLabel"><p id=dLbl></p></div>');
    } else if (document.getElementById('dLbl') == undefined) {
      document.getElementById('elementsLbl').insertAdjacentHTML('beforebegin', '<p id=dLbl></p>');
    }
    if (document.getElementById('dLbl').innerHTML != text) {
      document.getElementById('dLbl').innerHTML = text;
    }
  }
}

function describeElement(name, text, display) {
  if (document.getElementById('canvasDescription') == undefined) {
    document.getElementById('defaultCanvas0').innerHTML = '<div id="canvasDescription" role="region" aria-label="Canvas Description"><table id="elementsDescription"></table></div>';
  } else if (document.getElementById('elementsDescription') == undefined) {
    document.getElementById('description').insertAdjacentHTML('afterend', '<table id="elementsDescription"></table>');
  }
  if (document.getElementById(name) == undefined) {
    let tr = document.createElement("tr");
    tr.id = name;
    document.getElementById('elementsDescription').appendChild(tr);
  }
  if (document.getElementById(name).innerHTML != '<td>' + name + '</td><td>' + text + '</td>') {
    document.getElementById(name).innerHTML = '<td>' + name + '</td><td>' + text + '</td>';
  }
  if (display == 1) {
    displayx(name, text);
  }
}

function displayx(name, text) {
  if (document.getElementById('canvasLabel') == undefined) {
    document.getElementById('defaultCanvas0').insertAdjacentHTML('afterend', '<div id="canvasLabel"><table id="elementsLbl"></table></div>');
  } else if (document.getElementById('elementsLbl') == undefined) {
    document.getElementById('dLbl').insertAdjacentHTML('afterend', '<table id="elementsLbl"></table>');
  }
  if (document.getElementById(name + 'Lbl') == undefined) {
    let tr = document.createElement("tr");
    tr.id = name + 'Lbl';
    document.getElementById('elementsLbl').appendChild(tr);
  }
  if (document.getElementById(name + 'Lbl').innerHTML != '<td>' + name + '</td><td>' + text + '</td>') {
    document.getElementById(name + 'Lbl').innerHTML = '<td>' + name + '</td><td>' + text + '</td>';
  }
}