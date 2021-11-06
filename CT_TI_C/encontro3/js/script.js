$(document).ready(function() {
    $("body").on('click', '.topo', function() {
        $("nav.menu").toggleClass("exibe_menu");
    });
});


/* $("body").on('click', '.icone_exibir', function(event) {
    event.preventDefault();
    $(".barra_lateral").toggleClass("exibir_conteúdo");
        $(".icone_exibir").css('display','none');
    $(".icone_ocultar").css('display','none');
});

$("body").on('click', '.icone_ocultar', function(event) {
    event.preventDefault();
    $(".barra_lateral").toggleClass("exibir_conteúdo");
        $(".icone_exibir").css('display','block');
    $(".icone_ocultar").css('display','none');
}); */

