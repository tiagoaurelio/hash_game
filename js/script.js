var player = 'x';
var step = 0;

function verifySrc(id){
    var src = document.getElementById(id).src;
    return src.substring(src.length - 10, src.length);
}

function verifySrcX(id){
    var src = document.getElementById(id).src;
    return src.substring(src.length - 5, src.length);
}

function playGame(id){
    var src = verifySrc(id);
    if(src == "branco.png"){
        document.getElementById(id).src = "img/" + player + ".png";
        step ++;
        if(step > 4 && winner() == true){
            alert('Fim do jogo!\n Vit\u00f3ria do ' + player);
            window.location.reload(true);
        }
        if(step >= 9 && winner() == false){
            alert('Fim do jogo!\n Empate!');
            window.location.reload(true);
        }
        if(player == 'x'){
            player = 'o';
        } else {
            player = 'x';
        }
    }
    if(player == 'o' && winner() == '' && step <= 7){
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
    } else if((verifySrcX('cel1') == 'x.png') && (verifySrcX('cel1') == verifySrcX('cel2')) && (verifySrc('cel3') == 'branco.png')){
        return 'cel3';
    } else if((verifySrcX('cel1') == 'x.png') && (verifySrcX('cel1') == verifySrcX('cel3')) && (verifySrc('cel2') == 'branco.png')){
        return 'cel2';
    } else if((verifySrcX('cel2') == 'x.png') && (verifySrcX('cel2') == verifySrcX('cel3')) && (verifySrc('cel1') == 'branco.png')){
        return 'cel1';
    } else if((verifySrcX('cel4') == 'x.png') && (verifySrcX('cel4') == verifySrcX('cel5')) && (verifySrc('cel6') == 'branco.png')){
        return 'cel6';
    } else if((verifySrcX('cel4') == 'x.png') && (verifySrcX('cel4') == verifySrcX('cel6')) && (verifySrc('cel5') == 'branco.png')){
        return 'cel5';
    } else if((verifySrcX('cel5') == 'x.png') && (verifySrcX('cel5') == verifySrcX('cel6')) && (verifySrc('cel4') == 'branco.png')){
        return 'cel4';
    } else if((verifySrcX('cel7') == 'x.png') && (verifySrcX('cel7') == verifySrcX('cel8')) && (verifySrc('cel9') == 'branco.png')){
        return 'cel9';
    } else if((verifySrcX('cel7') == 'x.png') && (verifySrcX('cel7') == verifySrcX('cel9')) && (verifySrc('cel8') == 'branco.png')){
        return 'cel8';
    } else if((verifySrcX('cel8') == 'x.png') && (verifySrcX('cel8') == verifySrcX('cel9')) && (verifySrc('cel7') == 'branco.png')){
        return 'cel7';
    } else if((verifySrcX('cel1') == 'x.png') && (verifySrcX('cel1') == verifySrcX('cel4')) && (verifySrc('cel7') == 'branco.png')){
        return 'cel7';
    } else if((verifySrcX('cel1') == 'x.png') && (verifySrcX('cel1') == verifySrcX('cel7')) && (verifySrc('cel4') == 'branco.png')){
        return 'cel4';
    } else if((verifySrcX('cel4') == 'x.png') && (verifySrcX('cel4') == verifySrcX('cel7')) && (verifySrc('cel1') == 'branco.png')){
        return 'cel1';
    } else if((verifySrcX('cel2') == 'x.png') && (verifySrcX('cel2') == verifySrcX('cel5')) && (verifySrc('cel8') == 'branco.png')){
        return 'cel8';
    } else if((verifySrcX('cel2') == 'x.png') && (verifySrcX('cel2') == verifySrcX('cel8')) && (verifySrc('cel5') == 'branco.png')){
        return 'cel5';
    } else if((verifySrcX('cel5') == 'x.png') && (verifySrcX('cel5') == verifySrcX('cel8')) && (verifySrc('cel2') == 'branco.png')){
        return 'cel2';
    } else if((verifySrcX('cel3') == 'x.png') && (verifySrcX('cel3') == verifySrcX('cel6')) && (verifySrc('cel9') == 'branco.png')){
        return 'cel9';
    } else if((verifySrcX('cel3') == 'x.png') && (verifySrcX('cel3') == verifySrcX('cel9')) && (verifySrc('cel6') == 'branco.png')){
        return 'cel6';
    } else if((verifySrcX('cel6') == 'x.png') && (verifySrcX('cel3') == verifySrcX('cel9')) && (verifySrc('cel3') == 'branco.png')){
        return 'cel3';
    } else if((verifySrcX('cel1') == 'x.png') && (verifySrcX('cel1') == verifySrcX('cel5')) && (verifySrc('cel9') == 'branco.png')){
        return 'cel9';
    } else if((verifySrcX('cel1') == 'x.png') && (verifySrcX('cel1') == verifySrcX('cel9')) && (verifySrc('cel5') == 'branco.png')){
        return 'cel5';
    } else if((verifySrcX('cel5') == 'x.png') && (verifySrcX('cel5') == verifySrcX('cel9')) && (verifySrc('cel1') == 'branco.png')){
        return 'cel1';
    } else if((verifySrcX('cel3') == 'x.png') && (verifySrcX('cel3') == verifySrcX('cel5')) && (verifySrc('cel7') == 'branco.png')){
        return 'cel7';
    } else if((verifySrcX('cel3') == 'x.png') && (verifySrcX('cel3') == verifySrcX('cel7')) && (verifySrc('cel5') == 'branco.png')){
        return 'cel5';
    } else if((verifySrcX('cel5') == 'x.png') && (verifySrcX('cel5') == verifySrcX('cel7')) && (verifySrc('cel3') == 'branco.png')){
        return 'cel3';
    } else {
        return 'cel' + Math.floor((Math.random() * 9) + 1 );
    }
}