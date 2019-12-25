document.getElementById('expmenu').onmouseover = function(event){
    var target=event.target;
    if ( target.ClassName == 'menu'){
        var s=target.getElementsByClassName('submenu');
        closeMenu();
        s[0].style.display='block';   
    }
    
}
document.onmouseover = function(event){
    var target = event.target;
    console.log(event.target);

    if ( target.className != 'menu' && target.className!= 'submenu'){
        var s=target.getElementsByClassName('submenu');
        closeMenu(); 
    }
}
function closeMenu(){
    var menu= document.getElementById('expmenu');
    var subm=document.getElementsByClassName('submenu');
    for (var i=0; i<subm.lenght; i++) {
        subm[i].style.display='none';
    }
}