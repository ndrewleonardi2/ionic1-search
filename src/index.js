if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function component() {
  var element = document.createElement('pre');


  element.innerHTML = [
    'Hello webpack!'
  ].join('\n\n');



  return element;
}
let element = component();
document.body.appendChild(element); 