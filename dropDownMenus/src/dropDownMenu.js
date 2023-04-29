function showMenuContentOnButtonAction(btn, content) {
    btn.addEventListener('click', function(e) {
        content.classList.toggle('visible');
    })
}


function hideMenuContentOnWindowClick(btn, content) {
    window.addEventListener('click', function(e) {
        if(!(e.target == btn )) {
            if(content.classList.contains('visible')) {
                content.classList.remove('visible');
            }
        }
    })
}

export default function dropDownMenu(btn, content) {
    showMenuContentOnButtonAction(btn, content);
    hideMenuContentOnWindowClick(btn, content)
}