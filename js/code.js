/**
 * Created by Mist on 2016-03-19.
 */
$(function(){

    //Skrypt na zatrzymwanie tła jako nagłówka, wciaż do dopracowania
    var body = $('body');
    var w = $(window);
    var fixedBG = $('.fixed-background');
    var fixedTitle = $('.fixed-title');
    w.scroll(function(){
        var y = parseInt(w.scrollTop());
        if (y > 495){
            fixedBG.css('display','block');
            fixedTitle.css('display','block');
            body.css('padding-top','130px');
        }else{
            fixedBG.css('display','none');
            fixedTitle.css('display','none');
            body.css('padding-top','0');
        }
    });

    //Ykrycie wyników
    $('#zle').hide();
    $('#dobrze').hide();

    //Dźwięki wyników
    var fail = document.createElement("AUDIO");
    fail.setAttribute('src', 'fail.mp3');
    var success = document.createElement("AUDIO");
    success.setAttribute('src', 'success.mp3');

    // Zmiana koloru domków przy wyborze koloru w formularzu, na 100% da się to ładnie skompresować jeszcze
    var kolor1 = $('#kolor1');
    var kolor2 = $('#kolor2');
    var kolor3 = $('#kolor3');
    var kolor4 = $('#kolor4');
    var kolor5 = $('#kolor5');

    var house1 = $('#house1');
    var house2 = $('#house2');
    var house3 = $('#house3');
    var house4 = $('#house4');
    var house5 = $('#house5');

    var roof1 = $('#roof1');
    var roof2 = $('#roof2');
    var roof3 = $('#roof3');
    var roof4 = $('#roof4');
    var roof5 = $('#roof5');

    var chimney1 = $('#chimney1');
    var chimney2 = $('#chimney2');
    var chimney3 = $('#chimney3');
    var chimney4 = $('#chimney4');
    var chimney5 = $('#chimney5');


    kolor1.on('change', function(){
        if (event.target.value === 'bialy') {
            house1.css('border-bottom-color', 'white');
            roof1.css('background','white');
            chimney1.css('background','white');
        }
        else if (event.target.value === 'czerwony') {
            house1.css('border-bottom-color', 'red');
            roof1.css('background','red');
            chimney1.css('background','red');
        }
        else if (event.target.value === 'niebieski') {
            house1.css('border-bottom-color', '#00c9fc');
            roof1.css('background','#00c9fc');
            chimney1.css('background','#00c9fc');
        }
        else if (event.target.value === 'zielony') {
            house1.css('border-bottom-color', '#1dfc00');
            roof1.css('background','#1dfc00');
            chimney1.css('background','#1dfc00');
        }
        else if (event.target.value === 'zolty') {
            house1.css('border-bottom-color', '#eeff00');
            roof1.css('background','#eeff00');
            chimney1.css('background','#eeff00');
        }
        else if (event.target.value === 'szary') {
            house1.css('border-bottom-color', '#AAC');
            roof1.css('background','#AAC');
            chimney1.css('background','#AAC');
        }
    });
    kolor2.on('change', function(){
        if (event.target.value === 'bialy') {
            house2.css('border-bottom-color', 'white');
            roof2.css('background','white');
            chimney2.css('background','white');
        }
        else if (event.target.value === 'czerwony') {
            house2.css('border-bottom-color', 'red');
            roof2.css('background','red');
            chimney2.css('background','red');
        }
        else if (event.target.value === 'niebieski') {
            house2.css('border-bottom-color', '#00c9fc');
            roof2.css('background','#00c9fc');
            chimney2.css('background','#00c9fc');
        }
        else if (event.target.value === 'zielony') {
            house2.css('border-bottom-color', '#1dfc00');
            roof2.css('background','#1dfc00');
            chimney2.css('background','#1dfc00');
        }
        else if (event.target.value === 'zolty') {
            house2.css('border-bottom-color', '#eeff00');
            roof2.css('background','#eeff00');
            chimney2.css('background','#eeff00');
        }
        else if (event.target.value === 'szary') {
            house2.css('border-bottom-color', '#AAC');
            roof2.css('background','#AAC');
            chimney2.css('background','#AAC');
        }
    });
    kolor3.on('change', function(){
        if (event.target.value === 'bialy') {
            house3.css('border-bottom-color', 'white');
            roof3.css('background','white');
            chimney3.css('background','white');
        }
        else if (event.target.value === 'czerwony') {
            house3.css('border-bottom-color', 'red');
            roof3.css('background','red');
            chimney3.css('background','red');
        }
        else if (event.target.value === 'niebieski') {
            house3.css('border-bottom-color', '#00c9fc');
            roof3.css('background','#00c9fc');
            chimney3.css('background','#00c9fc');
        }
        else if (event.target.value === 'zielony') {
            house3.css('border-bottom-color', '#1dfc00');
            roof3.css('background','#1dfc00');
            chimney3.css('background','#1dfc00');
        }
        else if (event.target.value === 'zolty') {
            house3.css('border-bottom-color', '#eeff00');
            roof3.css('background','#eeff00');
            chimney3.css('background','#eeff00');
        }
        else if (event.target.value === 'szary') {
            house3.css('border-bottom-color', '#AAC');
            roof3.css('background','#AAC');
            chimney3.css('background','#AAC');
        }
    });
    kolor4.on('change', function(){
        if (event.target.value === 'bialy') {
            house4.css('border-bottom-color', 'white');
            roof4.css('background','white');
            chimney4.css('background','white');
        }
        else if (event.target.value === 'czerwony') {
            house4.css('border-bottom-color', 'red');
            roof4.css('background','red');
            chimney4.css('background','red');
        }
        else if (event.target.value === 'niebieski') {
            house4.css('border-bottom-color', '#00c9fc');
            roof4.css('background','#00c9fc');
            chimney4.css('background','#00c9fc');
        }
        else if (event.target.value === 'zielony') {
            house4.css('border-bottom-color', '#1dfc00');
            roof4.css('background','#1dfc00');
            chimney4.css('background','#1dfc00');
        }
        else if (event.target.value === 'zolty') {
            house4.css('border-bottom-color', '#eeff00');
            roof4.css('background','#eeff00');
            chimney4.css('background','#eeff00');
        }
        else if (event.target.value === 'szary') {
            house4.css('border-bottom-color', '#AAC');
            roof4.css('background','#AAC');
            chimney4.css('background','#AAC');
        }
    });
    kolor5.on('change', function(){
        if (event.target.value === 'bialy') {
            house5.css('border-bottom-color', 'white');
            roof5.css('background','white');
            chimney5.css('background','white');
        }
        else if (event.target.value === 'czerwony') {
            house5.css('border-bottom-color', 'red');
            roof5.css('background','red');
            chimney5.css('background','red');
        }
        else if (event.target.value === 'niebieski') {
            house5.css('border-bottom-color', '#00c9fc');
            roof5.css('background','#00c9fc');
            chimney5.css('background','#00c9fc');
        }
        else if (event.target.value === 'zielony') {
            house5.css('border-bottom-color', '#1dfc00');
            roof5.css('background','#1dfc00');
            chimney5.css('background','#1dfc00');
        }
        else if (event.target.value === 'zolty') {
            house5.css('border-bottom-color', '#eeff00');
            roof5.css('background','#eeff00');
            chimney5.css('background','#eeff00');
        }
        else if (event.target.value === 'szary') {
            house5.css('border-bottom-color', '#AAC');
            roof5.css('background','#AAC');
            chimney5.css('background','#AAC');
        }
    });

    // Walidacja formularza czyli sprawdzenie odpowiedzi
    $('#form').on('submit',function(event){

        event.preventDefault();

        if( $('#narodowosc1').val()==='norweg' &&
            $('#narodowosc2').val()==='dunczyk' &&
            $('#narodowosc3').val()==='anglik' &&
            $('#narodowosc4').val()==='niemiec' &&
            $('#narodowosc5').val()==='szwed' &&
            $('#kolor1').val()==='zolty' &&
            $('#kolor2').val()==='niebieski' &&
            $('#kolor3').val()==='czerwony' &&
            $('#kolor4').val()==='zielony' &&
            $('#kolor5').val()==='bialy' &&
            $('#zwierze1').val()==='koty' &&
            $('#zwierze2').val()==='konie' &&
            $('#zwierze3').val()==='ptaki' &&
            $('#zwierze4').val()==='rybki' &&
            $('#zwierze5').val()==='psy' &&
            $('#napoj1').val()==='woda' &&
            $('#napoj2').val()==='herbata' &&
            $('#napoj3').val()==='mleko' &&
            $('#napoj4').val()==='kawa' &&
            $('#napoj5').val()==='piwo' &&
            $('#papierosy1').val()==='cygara' &&
            $('#papierosy2').val()==='light' &&
            $('#papierosy3').val()==='bez' &&
            $('#papierosy4').val()==='fajka' &&
            $('#papierosy5').val()==='mentol'
        ){
            $('#zle').fadeOut();
            $('#dobrze').fadeOut();
            $('#dobrze').fadeIn('slow');
            success.play();
        }else{
            $('#zle').fadeOut();
            $('#dobrze').fadeOut();
            $('#zle').fadeIn('slow');
            fail.play();
        }

        });

});