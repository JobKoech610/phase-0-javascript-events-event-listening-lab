function addingEventListener() {
  //select by id button
    const input = document.getElementById('button');
    input.addEventListener('click', function() {
      alert('I was clicked!');
    });
}

// call the function
addingEventListener();



  