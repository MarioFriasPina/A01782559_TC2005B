//Este código agrega un evento de escucha al documento que se activa cada vez que el mouse se mueve. La función de devolución de llamada asociada al evento actualiza el contenido del elemento HTML con el ID “mousePosition” con la posición actual del mouse.
document.addEventListener('mousemove', function(event) {
    let mousePosition = document.getElementById('mousePosition');
    mousePosition.innerHTML = 'Posición del mouse: ' + event.clientX + ', ' + event.clientY;
  });

//Este código agrega un evento de escucha al botón “Submit” que se activa cuando se hace clic en él. La función de devolución de llamada asociada al evento obtiene los valores de las cajas de texto “First name” y “Last name”, concatena los valores en una cadena que representa el nombre completo y crea un nuevo elemento HTML con la etiqueta “p” que contiene el nombre completo. Finalmente, el código agrega el nuevo elemento al final del cuerpo del documento.
document.getElementById('form1-submit').addEventListener('click', function(event) {
    event.preventDefault();
    let fname = document.getElementById('form-fname').value;
    let lname = document.getElementById('form-lname').value;
    let fullName = fname + ' ' + lname;
    let nameElement = document.createElement('p');
    nameElement.innerHTML = fullName;
    document.getElementById('form1-submit').insertAdjacentElement('afterend', nameElement);
});

document.getElementById('btn-insert-r').addEventListener('click', function(event) {
    // Get the table element
    let table = document.getElementById("sampleTable");
    // Insert a new row at the beginning of the table
    let newRow = table.insertRow(-1);
    //Get number of columns of a table
    let countCols = table.rows[1].cells.length;
    for(let i = 0; i < countCols; i++) {
        // Insert a new cell in the row at index 0
        let newCell = newRow.insertCell(i);
        // Add some text to the new cell
        let newText = document.createTextNode("Column " + (i + 1));
        newCell.appendChild(newText);
    }
});

//To add a new row or column to an HTML table using JavaScript, you can use the insertRow() method to insert a new row at the specified position in the table and then use the insertCell() method to insert a new cell into the row. Here is an example of how to add a new row to an HTML table using JavaScript:
document.getElementById('btn-insert-c').addEventListener('click', function(event) {
    // Get the table element
    let table = document.getElementById("sampleTable");
    // Loop through each row in the table
    for (let i = 0; i < table.rows.length; i++) {
        // Insert a new cell into the current row
        let newCell = table.rows[i].insertCell(-1);
        // Add some text to the new cell
        let newText = document.createTextNode("New column text");
        newCell.appendChild(newText);
    }
});

//To update the content of a table cell in JavaScript, you can use the innerHTML property of the cell element. Here is an example of how to change the content of a table cell based on user input:
document.getElementById('btn-change').addEventListener('click', function(event) {
    // Get the table element
    let table = document.getElementById("myTable");

    // Get the row and column indices from user input
    let rowIndex = document.getElementById("rowIndex").value;
    let colIndex = document.getElementById("colIndex").value;

    // Get the new value from user input
    let newValue = document.getElementById("newValue").value;

    // Update the content of the specified cell
    table.rows[rowIndex - 1].cells[colIndex - 1].innerHTML = newValue;
});

//Remove options from select
document.getElementById('btn-rmv-color').addEventListener('click', function(event) {
    // Get the select element
    let select = document.getElementById("colorSelect");
    // Remove the selected color option
    select.remove(select.selectedIndex);
});

//Add new options to a select
document.getElementById('btn-add-color').addEventListener('click', function(event) {
     // Get the select element
    let select = document.getElementById("colorSelect");
    // Create a new option element
    let option = document.createElement("option");
    // Add some random color text and value to the option
    option.value = "#"+Math.floor(Math.random()*16777215).toString(16);
    option.text = "#"+Math.floor(Math.random()*16777215).toString(16);
     // Add the new option to the end of the list
    select.appendChild(option);
});

//When you hover over the following image, generate two random numbers between 300 and 600 for the width and height of an image. Replace the placeholder image with a similar one with the random size you generated. The event is only triggered when the mouse enters the image.
document.addEventListener("mouseover", e => {
    if (e.target === document.getElementById('imagenGato')) {
        document.getElementById('imagenGato').insertAdjacentElement('afterend', new Image());
        //Random number between 300 and 600
        let w = Math.floor(Math.random() * 300 + 300);
        let h = Math.floor(Math.random() * 300 + 300);
        let page = "http://placekitten.com/" + w + '/' + h;
        console.log(page);
        document.getElementById('imagenGato').nextElementSibling.src = page;
        document.getElementById('imagenGato').nextElementSibling.insertAdjacentElement('beforebegin', document.getElementById('imagenGato'));
    }
});
