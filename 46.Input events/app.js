// Input Events

/*
 * focus
 * blur
 * copy
 * paste
 * cut
 * select
 */

const todo = document.querySelector("#todoName");

todo.addEventListener("focus", run);
todo.addEventListener("blur", run);

function run(e) {
    console.log(e.type);
}