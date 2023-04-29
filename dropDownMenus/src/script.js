import dropDownMenu from "./dropDownMenu";
// function myFunction() {
    //     document.getElementById("myDropDown").classList.toggle("show");
    // }

    // window.onclick = function(event) {
    //     if (!event.target.matches('.dropbtn')) {
    //         var dropdowns = document.getElementsByClassName('dropdown-content')[0];
    //         // var i;
    //         // for (i = 0; i < dropdowns.length; i++) {
    //         // var openDropdown = dropdowns[i];
    //         if (dropdowns.classList.contains('show')) {
    //             dropdowns.classList.remove('show');
    //         }
    //         // }
    //         console.log(dropdowns.classList);
    //     }
    // }


const dropDownBtn = document.querySelector('.dropDownBtn');
const dropDownContent = document.querySelector('.dropDownContent');
dropDownMenu(dropDownBtn, dropDownContent);


// showMenuContentOnButtonAction(dropDownBtn, dropDownContent);
// hideMenuContentOnWindowClick(dropDownBtn, dropDownContent);


// function showMenuContentOnButtonAction(btn, content) {
//     btn.addEventListener('click', function(e) {
//         content.classList.toggle('visible');
//     })
// }


// function hideMenuContentOnWindowClick(btn, content) {
//     window.addEventListener('click', function(e) {
//         if(!(e.target == btn )) {
//             if(content.classList.contains('visible')) {
//                 content.classList.remove('visible');
//             }
//         }
//     })
// }
//