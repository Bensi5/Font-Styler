user_text = "";
arrayfontlist = ["Lato", "Dancing Script"];
function font(){
    user_text = document.getElementById('user_text').value;
    document.getElementById("font_list1").innerHTML = user_text+" - Dancing Script ";
    document.getElementById("font_list1").style.fontFamily='Dancing Script';

    document.getElementById("font_list3").innerHTML = user_text+" - Praise ";
    document.getElementById("font_list3").style.fontFamily='Praise';

    document.getElementById("font_list2").innerHTML = user_text+" - Comforter Brush";
    document.getElementById("font_list2").style.fontFamily= 'Comforter Brush';

    document.getElementById("font_list7").innerHTML = user_text+" - Lato ";
    document.getElementById("font_list7").style.fontFamily='Lato'; 

    document.getElementById("font_list10").innerHTML = user_text+" - Cinzel Decorative ";
    document.getElementById("font_list10").style.fontFamily= 'Cinzel Decorative';

    document.getElementById("font_list8").innerHTML = user_text+" - Outfit ";
    document.getElementById("font_list8").style.fontFamily= 'Outfit ';

    document.getElementById("font_list4").innerHTML = user_text+" - Estonia ";
    document.getElementById("font_list4").style.fontFamily= 'Estonia ';

    document.getElementById("font_list5").innerHTML = user_text+" - YellowTail ";
    document.getElementById("font_list5").style.fontFamily= 'Yellowtail ';

    document.getElementById("font_list9").innerHTML = user_text+" - Abril Fatface ";
    document.getElementById("font_list9").style.fontFamily= 'Abril Fatface ';

    document.getElementById("font_list6").innerHTML = user_text+" - Genos ";
    document.getElementById("font_list6").style.fontFamily= 'Genos ';

}