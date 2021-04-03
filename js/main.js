$(document).ready(function() {
    var descNom = $('#descriptionNom').text();
    var propos = $('#propos').text();
    var competences = $('#competences').text();
    var experiences = $('#experiences').text();
    var contact = $('#contact').text();
    ecris('descriptionNom', descNom);
    ecris('propos',propos);
    ecris('competences',competences);
    ecris('experiences',experiences);
    ecris('contact',contact);

    function ecris(idEcris,text){

        var item = text;
        $('#'+idEcris).text('');
        var tabItem = item.split('');
        var a = 0;
        var intervalItem = setInterval(function(){
            var textItem = $('#'+idEcris).text();
            $('#'+idEcris).text(textItem + tabItem[a]);
            a = a + 1;
            if (a == tabItem.length){
                stopIntervalItem();
            }
        },100)

        function stopIntervalItem(){
            clearInterval(intervalItem);
        }
    }
    function effacer(idEffacer){
        var item = $('#'+idEffacer).text();
        var tabItem = item.split('');
        var x = 0;
        var intervalItem = setInterval(function(){
            var i = tabItem.length;
            tabItem.splice(i-1);
            var newItem = tabItem.join('');
            $('#'+idEffacer).text(newItem);
            x = x + 1;
            if (tabItem.length < 1){
                stopIntervalItem();
            }
        },100)

        function stopIntervalItem(){
            clearInterval(intervalItem);
        }
    } 
    
    $('#menuBurger').click(function(){
        var menuActif = $('#menuBurger').hasClass('actif');
        console.log(menuActif);
        if (menuActif === false){
            $('#propos').show();
            ecris('propos',propos);
            setTimeout(function(){ $('#competences').show(); ecris('competences',competences); }, 200);
            setTimeout(function(){ $('#experiences').show(); ecris('experiences',experiences); }, 400);
            setTimeout(function(){ $('#contact').show(); ecris('contact',contact); }, 600);
            $('#menuBurger').addClass('actif');
        } else {
            effacer('propos');
            effacer('competences');
            effacer('experiences');
            effacer('contact');
            $('#menuBurger').removeClass('actif');
        }
    })
});