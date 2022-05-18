/* 
        [1][2][3]
        [4][5][6]
        [7][8][9]

        [1, 2, 3]
        [4, 5, 6]
        [7, 8, 9]
        [1, 4, 7]
        [2, 5, 8]
        [3, 6, 9]
        [1, 5, 9]
        [3, 5, 7]
*/
function myFunction(){
    var c1, c2, c3, c4, c5, c6, c7, c8, c9;
    c1 = document.getElementById("c1").value;
    c2 = document.getElementById("c2").value;
    c3 = document.getElementById("c3").value;
    c4 = document.getElementById("c4").value;
    c5 = document.getElementById("c5").value;
    c6 = document.getElementById("c6").value;
    c7 = document.getElementById("c7").value;
    c8 = document.getElementById("c8").value;
    c9 = document.getElementById("c9").value;
play == 1;

    if ((c1 == 'x' ||  c1 == 'X') && (c2 == 'x' ||  c2 == 'X') && (c3 == 'x' ||  c3 == 'X')){
        document.getElementById('messaggio').innerHTML = "X vince!";
        document.getElementById("c4").disabled = true;
        document.getElementById("c5").disabled = true;
        document.getElementById("c6").disabled = true;
        document.getElementById("c7").disabled = true;
        document.getElementById("c8").disabled = true;
        document.getElementById("c9").disabled = true;
        window.alert('X vince');
        }
        else if ((c4 == 'x' ||  c4 == 'X') && (c5 == 'x' ||  c5 == 'X') && (c6 == 'x' ||  c6 == 'X')){
            document.getElementById('messaggio').innerHTML = "X vince!";
            document.getElementById("c1").disabled = true;
            document.getElementById("c2").disabled = true;
            document.getElementById("c3").disabled = true;
            document.getElementById("c7").disabled = true;
            document.getElementById("c8").disabled = true;
            document.getElementById("c9").disabled = true;
            window.alert('X vince');
            }
        else if ((c7 == 'x' ||  c7 == 'X') && (c8 == 'x' ||  c8 == 'X') && (c9 == 'x' ||  c9 == 'X')){
            document.getElementById('messaggio').innerHTML = "X vince!";
            document.getElementById("c1").disabled = true;
            document.getElementById("c2").disabled = true;
            document.getElementById("c3").disabled = true;
            document.getElementById("c4").disabled = true;
            document.getElementById("c5").disabled = true;
            document.getElementById("c6").disabled = true;
            window.alert('X vince');
            }
        else if ((c1 == 'x' ||  c1 == 'X') && (c4 == 'x' ||  c4 == 'X') && (c7 == 'x' ||  c7 == 'X')){
            document.getElementById('messaggio').innerHTML = "X vince!";
            document.getElementById("c2").disabled = true;
            document.getElementById("c3").disabled = true;
            document.getElementById("c5").disabled = true;
            document.getElementById("c6").disabled = true;
            document.getElementById("c8").disabled = true;
            document.getElementById("c9").disabled = true;
            window.alert('X vince');
        }
        else if ((c2 == 'x' ||  c2 == 'X') && (c5 == 'x' ||  c5 == 'X') && (c8 == 'x' ||  c8 == 'X')){
            document.getElementById('messaggio').innerHTML = "X vince!";
            document.getElementById("c1").disabled = true;
            document.getElementById("c3").disabled = true;
            document.getElementById("c4").disabled = true;
            document.getElementById("c6").disabled = true;
            document.getElementById("c7").disabled = true;
            document.getElementById("c9").disabled = true;
            window.alert('X vince');
            }
        else if ((c3 == 'x' ||  c3 == 'X') && (c6 == 'x' ||  c6 == 'X') && (c9 == 'x' ||  c9 == 'X')){
            document.getElementById('messaggio').innerHTML = "X vince!";
            document.getElementById("c1").disabled = true;
            document.getElementById("c2").disabled = true;
            document.getElementById("c4").disabled = true;
            document.getElementById("c5").disabled = true;
            document.getElementById("c7").disabled = true;
            document.getElementById("c8").disabled = true;
            window.alert('X vince');
        }
        else if ((c1 == 'x' ||  c1 == 'X') && (c5 == 'x' ||  c5 == 'X') && (c9 == 'x' ||  c9 == 'X')){
            document.getElementById('messaggio').innerHTML = "X vince!";
            document.getElementById("c2").disabled = true;
            document.getElementById("c3").disabled = true;
            document.getElementById("c4").disabled = true;
            document.getElementById("c6").disabled = true;
            document.getElementById("c7").disabled = true;
            document.getElementById("c8").disabled = true;
            window.alert('X vince');
            }
        else if ((c3 == 'x' ||  c3 == 'X') && (c5 == 'x' ||  c5 == 'X') && (c7 == 'x' ||  c7 == 'X')){
            document.getElementById('messaggio').innerHTML = "X vince!";
            document.getElementById("c1").disabled = true;
            document.getElementById("c2").disabled = true;
            document.getElementById("c4").disabled = true;
            document.getElementById("c6").disabled = true;
            document.getElementById("c8").disabled = true;
            document.getElementById("c9").disabled = true;
            window.alert('X vince');
            }
/*------------------------- VINCE O ----------------------------------*/        
           else if (c1 == 'O' && c2 == 'O' && c3 == 'O'){
                document.getElementById('messaggio').innerHTML = "O vince!";
                document.getElementById("c4").disabled = true;
                document.getElementById("c5").disabled = true;
                document.getElementById("c6").disabled = true;
                document.getElementById("c7").disabled = true;
                document.getElementById("c8").disabled = true;
                document.getElementById("c9").disabled = true;
                window.alert('O vince');
                }
            else if (c4 == 'O' && c5 == 'O' && c6 == 'O'){
                document.getElementById('messaggio').innerHTML = "O vince!";
                document.getElementById("c1").disabled = true;
                document.getElementById("c2").disabled = true;
                document.getElementById("c3").disabled = true;
                document.getElementById("c7").disabled = true;
                document.getElementById("c8").disabled = true;
                document.getElementById("c9").disabled = true;
                window.alert('O vince');
                }
            else if (c7 == 'O' && c8 == 'O' && c9 == 'O'){
                document.getElementById('messaggio').innerHTML = "O vince!";
                document.getElementById("c1").disabled = true;
                document.getElementById("c2").disabled = true;
                document.getElementById("c3").disabled = true;
                document.getElementById("c4").disabled = true;
                document.getElementById("c5").disabled = true;
                document.getElementById("c6").disabled = true;
                window.alert('O vince');
                }
            else if (c1 == 'O' && c4 == 'O' && c7 == 'O'){
                document.getElementById('messaggio').innerHTML = "O vince!";
                document.getElementById("c2").disabled = true;
                document.getElementById("c3").disabled = true;
                document.getElementById("c5").disabled = true;
                document.getElementById("c6").disabled = true;
                document.getElementById("c8").disabled = true;
                document.getElementById("c9").disabled = true;
                window.alert('O vince');
                }
            else if (c2 == 'O' && c5 == 'O' && c8 == 'O'){
                document.getElementById('messaggio').innerHTML = "O vince!";
                document.getElementById("c1").disabled = true;
                document.getElementById("c3").disabled = true;
                document.getElementById("c4").disabled = true;
                document.getElementById("c6").disabled = true;
                document.getElementById("c7").disabled = true;
                document.getElementById("c9").disabled = true;
                window.alert('O vince');
                }
            else if (c3 == 'O' && c6 == 'O' && c9 == 'O'){
                document.getElementById('messaggio').innerHTML = "O vince!";
                document.getElementById("c1").disabled = true;
                document.getElementById("c2").disabled = true;
                document.getElementById("c4").disabled = true;
                document.getElementById("c5").disabled = true;
                document.getElementById("c7").disabled = true;
                document.getElementById("c8").disabled = true;
                window.alert('O vince');
                }
            else if (c1 == 'O' && c5 == 'O' && c9 == 'O'){
                document.getElementById('messaggio').innerHTML = "O vince!";
                document.getElementById("c2").disabled = true;
                document.getElementById("c3").disabled = true;
                document.getElementById("c4").disabled = true;
                document.getElementById("c6").disabled = true;
                document.getElementById("c7").disabled = true;
                document.getElementById("c8").disabled = true;
                window.alert('O vince');
                }
            else if (c3 == 'O' && c5 == 'O' && c7 == 'O'){
                document.getElementById('messaggio').innerHTML = "O vince!";
                document.getElementById("c1").disabled = true;
                document.getElementById("c2").disabled = true;
                document.getElementById("c4").disabled = true;
                document.getElementById("c6").disabled = true;
                document.getElementById("c8").disabled = true;
                document.getElementById("c9").disabled = true;
                window.alert('O vince');
                }
            else if ((c1 == 'X' || c1 == 'O') && (c2 == 'X'|| c2 == 'O') 
                    && (c3 == 'X' || c3 == 'O') && (c4 == 'X' || c4 == 'O')
                    && (c5 == 'X' || c5 == 'O') && (c6 == 'X' || c6 == 'O') 
                    && (c7 == 'X' || c7 == 'O') && (c8 == 'X' || c8 == 'O') 
                    && (c9 == 'X' || c9 == 'O')){ 
                    document.getElementById('messaggio').innerHTML = "Pareggio!";
                    window.alert('Pareggio');
                }
        else{
            if (play == 1){
                document.getElementById('messaggio').innerHTML = "Turno di X";
            }
        else{
                document.getElementById('messaggio').innerHTML = "Turno di O";
        }
            }   
}

function myFunc_1(){
    if (play == 1){
        document.getElementById("c1").value = "X";
        document.getElementById("c1").disabled = true;
        play = 0;
    }
    else{
        document.getElementById("c1").value = "O";
        document.getElementById("c1").disabled = true;
        play = 1;
    }
}
function myFunc_2(){
    if (play == 1){
        document.getElementById("c2").value = "X";
        document.getElementById("c2").disabled = true;
        play = 0;
    }
    else{
        document.getElementById("c2").value = "O";
        document.getElementById("c2").disabled = true;
        play = 1;
    }
}
function myFunc_3(){
    if (play == 1){
        document.getElementById("c3").value = "X";
        document.getElementById("c3").disabled = true;
        play = 0;
    }
    else{
        document.getElementById("c3").value = "O";
        document.getElementById("c3").disabled = true;
        play = 1;
    }
}
function myFunc_4(){
    if (play == 1){
        document.getElementById("c4").value = "X";
        document.getElementById("c4").disabled = true;
        play = 0;
    }
    else{
        document.getElementById("c4").value = "O";
        document.getElementById("c4").disabled = true;
        play = 1;
    }
}
function myFunc_5(){
    if (play == 1){
        document.getElementById("c5").value = "X";
        document.getElementById("c5").disabled = true;
        play = 0;
    }
    else{
        document.getElementById("c5").value = "O";
        document.getElementById("c5").disabled = true;
        play = 1;
    }
}
function myFunc_6(){
    if (play == 1){
        document.getElementById("c6").value = "X";
        document.getElementById("c6").disabled = true;
        play = 0;
    }
    else{
        document.getElementById("c6").value = "O";
        document.getElementById("c6").disabled = true;
        play = 1;
    }
}
function myFunc_7(){
    if (play == 1){
        document.getElementById("c7").value = "X";
        document.getElementById("c7").disabled = true;
        play = 0;
    }
    else{
        document.getElementById("c7").value = "O";
        document.getElementById("c7").disabled = true;
        play = 1;
    }
}
function myFunc_8(){
    if (play == 1){
        document.getElementById("c8").value = "X";
        document.getElementById("c8").disabled = true;
        play = 0;
    }
    else{
        document.getElementById("c8").value = "O";
        document.getElementById("c8").disabled = true;
        play = 1;
    }
}
function myFunc_9(){
    if (play == 1){
        document.getElementById("c9").value = "X";
        document.getElementById("c9").disabled = true;
        play = 0;
    }
    else{
        document.getElementById("c9").value = "O";
        document.getElementById("c9").disabled = true;
        play = 1;
    }
}
/*function myFunc_C5(){
    if (play == 1){
        document.getElementById("c1").value = "X";
        document.getElementById("c2").value = "X";
        document.getElementById("c3").value = "X";
        document.getElementById("c4").value = "X";
        document.getElementById("c6").value = "X";
        document.getElementById("c7").value = "X";
        document.getElementById("c8").value = "X";
        document.getElementById("c9").value = "X";
        play = 0;
    }
    else if (play == 0){
        document.getElementById("c5").value = "O";
    }
    else{
        document.getElementById('messaggio').innerHTML = "Furbetto!";
    }
}*/
function myFunc_Reset(){
    location.reload();
    document.getElementById('c1').value = '';
    document.getElementById("c2").value = '';
    document.getElementById("c3").value = '';
    document.getElementById("c4").value = '';
    document.getElementById("c5").value = '';
    document.getElementById("c6").value = '';
    document.getElementById("c7").value = '';
    document.getElementById("c8").value = '';
    document.getElementById("c9").value = '';
 
}
