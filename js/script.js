var possible = null;

//add numbers to the variable 'possible' 
function select_numb(){
    var check = document.getElementById("numb");
    if (check.checked && possible==null){
        possible = "0123456789";
    }
    else if(check.checked && possible!=null){
        possible += "0123456789";
    }

}

//add letters to the variable 'possible' 
function select_letters(){
    var check = document.getElementById("letters");
    if(check.checked && possible==null){
        possible = "abcdefghijklmnopqrstuvwxyz";
    }
    else if(check.checked && possible!=null){
        possible += "abcdefghijklmnopqrstuvwxyz";
    }
}

//add capital letters to the variable 'possible' 
function select_cletters(){
    var check = document.getElementById("cLetters");
    if(check.checked && possible==null){
        possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    }
    else if(check.checked && possible !=null){
        possible += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
    }
}

//add symbols to the variable 'possible' 
function select_symbols(){
    var check = document.getElementById("symbols");
    if(check.checked && possible == null){
        possible = "!@#$%^&";
    
    }
    else if(check.checked && possible != null){
        possible += "!@#$%^&"; 
    }
}

//call the functions 
function select(){
    select_numb();
    select_letters();
    select_cletters();
    select_symbols();
}

//get the HTML element
var $btn = document.getElementById('btn');

//vinculate the event to the HMLT element
$btn.addEventListener("click", function(){
    select();

    //get the quantity of characters
    var cont = document.getElementById('txt').value;
    var text = "";
    
    //generate the random characteres 
    for (var i = 0; i < cont; i++){
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    //Checks if the passwords options are selected
    if (possible == null){
        alert('Check the password options!');
    }

    //insert the random characteres into the textearea 
    document.getElementById('txtArea').value = text;
    possible = null;
});