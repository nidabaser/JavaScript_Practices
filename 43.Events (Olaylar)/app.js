//* Events (Olaylar)

//? onClick() examples

/**
 *  <a href="#" onclick="alert('Hello!')" id="todoClearButton" 
 *  class="btn btn-primary btn-sm mt-3">Tüm Todoları Temizle</a>
 */

/**
 *  <a href="#" onclick="this.textContent = 'Button content changed'"
 *  id="todoClearButton"  class="btn btn-primary btn-sm mt-3">Tüm Todoları Temizle</a>
 */

/**
 *  <a href="#" onclick = " document.querySelectorAll('.card-title')[1].textContent='Title changed' "
 *  id="todoClearButton"  class="btn btn-primary btn-sm mt-3">Tüm Todoları Temizle</a>
 */


//* using function
// function changeTitle(){
//     onClick = document.querySelectorAll('.card-title')[1].textContent='Title changed';
//     console.log("Başlık değişti");
// }

//* addEventListener()
// const clearButton = document.querySelector("#todoClearButton");
// clearButton.addEventListener("click", function(){
//     document.querySelectorAll('.card-title')[1].textContent='Title changed';
// });

//* Best practice of addEventListener is using it with a function

const clearButton = document.querySelector("#todoClearButton");

clearButton.addEventListener("click", changeTitle);

function changeTitle(e){ // e, is event object

        onClick = document.querySelectorAll('.card-title')[1].textContent='Title changed';

        console.log(e.type); // Event Type
        console.log(e.target); // triggered HTML element
        console.log(e.target.textContent);
        console.log(e.target.className);
    }