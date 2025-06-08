// function parent(){
//     let num = 10;
//     function child(){
//         let num = 50;
//         console.log(this.num);
//     }
//     child();
// }
//   parent();


function parent() {
    let num = 10;  // primitive value

    function child() {
        num = 50;  // modifying parent's variable
    }

    child();
    console.log(num);  // ???
}

parent();
