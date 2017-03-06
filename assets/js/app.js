var global = "1";
var arrLbl = document.getElementsByTagName("label");
        
function marcarDiv(id){

    var resp = document.getElementById("stResult");
    var valorLabel = document.getElementById(id).textContent;

    if(valorLabel.length == 0){

        if(global == "1"){
            document.getElementById(id).innerHTML = "X";
            global = "2";
        }
        else if(global == "2"){
            document.getElementById(id).innerHTML = "O";
            global = "1";
        } 
        
    }else{
        //horizontal
        if(arrLbl[0].textContent == arrLbl[1].textContent && arrLbl[1].textContent == arrLbl[2].textContent){
            resp.innerHTML = "gana " + arrLbl[0].textContent;
        }else if(arrLbl[3].textContent == arrLbl[4].textContent && arrLbl[4].textContent == arrLbl[5].textContent){
            resp.innerHTML = "gana " + arrLbl[3].textContent;
        }else if(arrLbl[6].textContent == arrLbl[7].textContent && arrLbl[7].textContent == arrLbl[8].textContent){
            resp.innerHTML = "gana " + arrLbl[6].textContent;
        }
        //vertical
        else if(arrLbl[0].textContent == arrLbl[3].textContent && arrLbl[3].textContent == arrLbl[6].textContent){
            resp.innerHTM11L = "gana " + arrLbl[0].textContent;
        }else if(arrLbl[1].textContent == arrLbl[4].textContent && arrLbl[4].textContent == arrLbl[7].textContent){
            resp.innerHTML = "gana " + arrLbl[1].textContent;
        }else if(arrLbl[2].textContent == arrLbl[5].textContent && arrLbl[5].textContent == arrLbl[8].textContent){
            resp.innerHTML = "gana " + arrLbl[2].textContent;
        }
        //diagonal
        else if(arLbl[0].textContent == arrLbl[4].textContent && arrLbl[4].textContent == arrLbl[8].textContent){
            resp.innerHTML = "gana " + arrLbl[0].textContent;
        }else if(arrLbl[2].textContent == arrLbl[4].textContent && arrLbl[4].textContent == arrLbl[6].textContent){
            resp.innerHTML = "gana " + arrLbl[2].textContent;
        }
    }
}

function fnNewGame(){ 
    var ids;
    
    for(var i = 1;i <= arrLbl.length; i++){
        ids = 'lbl'+i;
        document.getElementById(ids).textContent = "";
    }
}
