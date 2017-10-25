var player = 'x';
var step = 0;

function verifySrc(id){
    var src = document.getElementById(id).src;
    return src.substring(src.length - 10, src.length);
}

function playGame(id){
    var src = verifySrc(id);
    if(src == "branco.png"){
        document.getElementById(id).src = "img/" + player + ".png";
        step ++;
        if(winner()){
            alert('Fim do jogo!\n Vit\u00f3ria do ' + player);
            location.reload();
        }
        if(step >= 9){
            alert('Fim do jogo!\n Empate!');
            location.reload();
        }
        if(player == 'x'){
            player = 'o';
        } else {
            player = 'x';
        }
    }
    if(player == 'o' && winner() == ''){
        playGame(playcpu());
    }
}

function winner(){
    if((verifySrc('cel1') == verifySrc('cel2')) && (verifySrc('cel1') ==
    verifySrc('cel3')) && (verifySrc('cel1') != 'branco.png')){
        return true;
    }
    if((verifySrc('cel4') == verifySrc('cel5')) && (verifySrc('cel4') ==
    verifySrc('cel6')) && (verifySrc('cel4') != 'branco.png')){
        return true;
    }
    if((verifySrc('cel7') == verifySrc('cel8')) && (verifySrc('cel7') ==
    verifySrc('cel9')) && (verifySrc('cel7') != 'branco.png')){
        return true;
    }
    if((verifySrc('cel1') == verifySrc('cel4')) && (verifySrc('cel1') ==
    verifySrc('cel7')) && (verifySrc('cel1') != 'branco.png')){
        return true;
    }
    if((verifySrc('cel2') == verifySrc('cel5')) && (verifySrc('cel2') ==
    verifySrc('cel8')) && (verifySrc('cel2') != 'branco.png')){
        return true;
    }
    if((verifySrc('cel3')  == verifySrc('cel6')) && (verifySrc('cel3') ==
    verifySrc('cel9')) && (verifySrc('cel3') != 'branco.png')){
        return true;
    }
    if((verifySrc('cel1') == verifySrc('cel5')) && (verifySrc('cel1') ==
    verifySrc('cel9')) && (verifySrc('cel1') != 'branco.png')){
        return true;
    }
    if((verifySrc('cel3') == verifySrc('cel5')) && (verifySrc('cel3') ==
    verifySrc('cel7')) && (verifySrc('cel3') != 'branco.png')){
        return true;
    }
    return false;
}

function playcpu(){
    if(verifySrc('cel5') == 'branco.png'){
        return 'cel5';
    }
    return 'cel' + Math.floor((Math.random() * 9) + 1 );
}