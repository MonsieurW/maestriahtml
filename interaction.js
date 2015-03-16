//ouverture sous parties pages items pedas et classes
$('body').on('click','ul li', function(){
//petit coup d'ajax pour générer sous parties
$(this).next('ul').slideToggle();
});



//Génération du pop-up: choix évaluation
$('#evalchx').on('click', function(){
	var liste="";
		for(var i in evals){
			liste+='<h6 data-ideval="'+i+'">'+evals[i]['nom']+'</h6>';
		}
	genererpopup("eval","CHOIX DE L'EVALUATION",'evalchx">',liste);
});

//Au click dans le pop-up choix de l'évaluation
$('#popup').on('click','.evalchx h6', function(){
	IDeval=$(this).data('ideval');
	$('#evalchx').html($(this).html());
//changer l'information évaluation remplie ou pas	
	$('#popup').slideToggle();
});




//Génération du pop-up: choix classe
$('.classe').on('click', function(){
	liste="";
		for(var i in classes){
			liste+='<h6 data-idclasse="'+i+'">'+classes[i]['nom']+'</h6>';
		}
	genererpopup("classe","CHOIX DE LA CLASSE",'classechx">',liste);
});
//Au click dans le pop-up choix classe
$('#popup').on('click','.classechx h6', function(){
	IDclasse=$(this).data('idclasse');
	
	$('#titre .classe').html($(this).html());
	$('#cases').empty();
	if($('#corps').hasClass('evaluer')){gen_case_eleves(IDclasse);}
	
//changer l'information évaluation remplie ou pas	
	$('#popup').slideToggle();
});

input={2:'A',1:'B',0:'C'};

//générer pop-up pour évaluer un élève
$('#cases').on('click','article', function(){

	IDeleve=parseInt($(this).data('idelv'));
	results[IDeleve]={};
	nom_elv=$(this).children('.nom').html();
	
	var liste="";
	e=evals[IDeval];
//remettre résultat précédement entré
	var c=Object.keys(e).length;
		for(i=1;i<c;i++){taxo=e[i][2];
			liste+='<article data-idque="'+e[i][0]+'"><aside><h5>'+i+')'+e[i][1]+'</h5><div><span class="awsm">'+taxos[taxo][1]+'</span> '+taxos[taxo][0]+'<span class="note">/'+e[i][3]+'</span></div><div><span class="awsm">&#xf19d;</span> '+e[i][4]+'</div><div><span class="awsm">&#xf085;</span> '+e[i][5]+'</div></aside><div class="input">';
			idq=parseInt(e[i][0]);
			//console.log(IDeleve);console.log(idq);
			//console.log(results[IDeleve][idq]); <- Indéfini, bordel!
			//results[3202][1234];console.log(results[3202][1234])
			for(key in input){
				liste+='<div data-val="'+key+'"';
				if(results[IDeleve][idq]==parseInt(key)){
					liste+=' class="actif"';
				}	
				liste+='>'+input[key]+'</div>';	
			}	
			liste+='</article>';
		}
	genererpopup("eval","EVALUER "+nom_elv+" SUR "+e['nom'],'inputresult">',liste);
	
});

$('#popup').on('click','.input div', function(){
	$(this).siblings().removeClass('actif');
	$(this).addClass('actif');
	var val=parseInt($(this).data('val'));
	IDque=parseInt($(this).parents('article').data('idque'));
	results[IDeleve][IDque]=val;
	
	//console.log(results);

//Exemple de tableau de résultats
//results={IDeleve:{IDquestion1:valeur,IDquestion2:valeur}};

});







//ferme les fenètre pop-up en cas d'erreur de clic
$('#popup').on('click',' .exit', function(){
	$('#popup').slideToggle();
});
