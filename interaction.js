//ouverture sous parties pages items pedas et classes
$('body').on('click','ul li', function(){
if(!$(this).is('ul ul ul li')){
	$(this).toggleClass('actif').next('ul').slideToggle();
}
});



//Génération du pop-up: choix évaluation
$('#evalchx').on('click', function(){
	var liste="";
		for(var i in evals2){
			liste+='<h6 data-ideval="'+i+'">'+evals2[i][0]+'</h6>';
		}
	genererpopup("eval","CHOIX DE L'EVALUATION",'evalchx">',liste);
});

//Au click dans le pop-up choix de l'évaluation
$('#popup').on('click','.evalchx h6', function(){
	IDeval_general=$(this).data('ideval');
	$('#evalchx').html($(this).html());
//changer l'information évaluation remplie ou pas	
	$('#popup').slideToggle();
	
});




//Génération du pop-up: choix classe
$('#classe').on('click', function(){
	liste="";
		for(var i in ttes_classes){
			liste+='<h6 data-idclasse="'+i+'">'+ttes_classes[i]+'</h6>';
		}
	genererpopup("classe","CHOIX DE LA CLASSE",'classechx">',liste);
});
//Au click dans le pop-up choix classe
$('#popup').on('click','.classechx h6', function(){
	IDclasse_general=$(this).data('idclasse');
	
	$('#classe').html($(this).html());
	$('#cases').empty();
	if($('#corps').hasClass('evaluer')){
		gen_case_eleves(IDclasse_general);}
	else if( $('#corps').hasClass('synthese')){
		//bdd: actualiser synthese_domaine,theme et item
		afficher_domaine();
	}
	else{//dans le cas de la page correction
		//bdd :actualiser tableaux savoirs,sf_att,correc
		start(savoirs,sf_att,correc);
		
	}
//changer l'information évaluation remplie ou pas	
	$('#popup').slideToggle();
});







//ferme les fenètre pop-up en cas d'erreur de clic
$('#popup').on('click',' .exit', function(){
	$('#popup').slideToggle();
});