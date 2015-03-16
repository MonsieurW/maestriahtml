///////////////données toutes pages/////////////////////////////
//Valeur par défaut
IDeval=111;
IDclasse=32;
results={};

evals={111:{
		"nom":'Puissance',//ID,titre,,note,niveau taxo,conn,comp
		1:[1234,"Définition puissance",2,2,"la puissance est une énergie par unité de temps","Savoir s'exprimer à l'aide du langage scientifique"],
		2:[1235,"Calcul Puissance",3,3,"la puissance est une énergie par unité de temps","Savoir utiliser une calculatrice"],
		3:[1236,"Diagramme énergétique",3,5,"L'énergie se transforme","Schématiser selon les conventions"]},
	222:{
		"nom":'Découpage',
		1:[9876,"Nommer les ciseaux",2,1,"Savoir qu'on parle d'une paire de ciseaux","Savoir nommer les objets de la classe"],
		2:[9877,"Placement main",3,2,"","Mettre le pouce vers la lumière quand on découpe"],
		3:[9878,"Adresse courbe",3,2,"","Savoir découper une courbe avec des ciseaux"],
		4:[9879,"Adresse droite",3,2,"","Savoir découper une ligne droite avec des ciseaux"],
		5:[9880,"Adresse",3,1,"","Savoir comment reconnaître les ciseaux gauchers"],
		6:[9881,"Respect",4,3,"","Ne pas planter les ciseaux dans ses camarades"],
		7:[9882,"Capillotracté",3,4,"","Savoir découper une frange avec des ciseaux"]
		}
	};
	
taxos=["",
	["Connaître","&#xf02d;"],
	["Comprendre","&#xf0e2;"],
	["Appliquer","&#xf0ad;"],
	["Analyser","&#xf005;"]];	
	

classes={
	31:{                                                             //ID classe
			'nom':'3<sup>1</sup>',
			1:[3101,'Allan Wauters de Besterfeld',80,90,30,95,20,50],//position:[ID,nom,taxo1,taxo2,taxo3,taxo4,pourcentage couleur,pourcentage chiffre
			2:[3102,'Nana Cerise',10,20,80,100,30,69],
			3:[3103,'Nicolas',90,100,40,100,30,60]		
		},
	32:{
		'nom':'3<sup>2</sup>',
		1:[3201,'Nicolass',90,100,40,100,30,60],
		2:[3202,'Allann Wauters de Besterfeld',80,90,30,95,20,50],
		3:[3203,'Nanana Cerise',90,100,40,100,30,60],
		4:[3204,'Bertrand',90,100,40,100,30,60],
		5:[3205,'Alizé',80,90,30,95,20,50],
		6:[3206,'Massilia',90,100,40,100,30,60],
		7:[3207,'Ernest',90,100,40,100,30,60],
		8:[3209,'Biroute',80,90,30,95,20,50],
		9:[3210,'Julien',90,100,40,100,30,60],
		10:[3211,'Maxime',90,100,40,100,30,60],
		11:[3212,'Laurent',80,90,30,95,20,50],
		12:[3213,'Catherine',90,100,40,100,30,60],
		13:[3214,'Le Suisse',00,20,30,40,30,20],
		14:[3215,'Berthe aux grands pieds',80,90,30,95,20,50],
		15:[3216,'Bruno',90,100,40,100,30,60],
		16:[3217,'Phillipe',2,3,4,5,8,10],
		17:[3218,'Kuntakinté',80,90,30,95,20,50],
		18:[3219,'Zoubida',90,100,40,100,30,60]	
		},
	33:{
		'nom':'3<sup>3</sup>',
		1:[331,'Mohammed',90,100,40,100,30,60],
		2:[332,'Bachibouzouk',80,90,30,95,20,50],
		3:[333,'Cunégonde',90,100,40,100,30,60]}
};	
//Chaque domaine a un ID,on rajoute deux chiffres à cet ID pr avoir celui d'un theme fils et encore 2 pr un item
items={
	1:['Physique'],
	2:['Chimie'],
	3:['Savoir-faire',{01:'Réaliser Test'},
					{02:"Interpreter test","items":["Associer les grandeurs aux unités correspondantes","Verifier la cohérence des résultats obtenus","Avoir l'esprit critique vis-à-vis de ses résultats","Utiliser du vocabulaire de la métrologie","Percevoir la différence entre réalité et simulation"]},
					{03:"Démarche déductive"}
	
	],
	4:["Attitude"]};

ic_list='<span class="awsm del">&#xf1f8;</span><span class="awsm edit">&#xf040;</span>';

	
	
	
	
//////////////////////////////Génération pop up
fixepopup =['<section class="titre ','"><div class="awsm exit">&#xf00d;</div><h3>','</h3></section><section class="contenu ','</section>'];

function genererpopup(clas,titr,clas2,contenu){
	$('#inpopup').html(fixepopup[0]+ clas +fixepopup[1]+ titr +fixepopup[2]+clas2+contenu+fixepopup[3]);	
	$('#popup').slideToggle();
}	
	
	
	
	
	

function couleur(y){
	if(y<50){
		vert=Math.round(y*5.1);rouge=255;
	}
	else{
		vert=255;rouge=Math.round(255-(y-50)*5.1);
		}
	rgetvert=rouge+','+vert;	
	return rgetvert	;
}


/////////////////Correction

//Items utilisé lors de l'évaluation
savoirs=["Le feu ça brule","L'eau, ça mouille","Tous les oiseaux volent dans le ciel","Ta soeur bat le beurre à 300 à l'heure sur le cyclo du facteur!"];
sf_att=["Utiliser une fourchette","Savoir lécher son coude","Pouvoir écrire son nom dans la neige","Savoir quand se taire et quand parler à très bon escient ;-)"];
//cette liste ne devra pas comporter les élèves n'ayant pas été évalués
//nom,note,graphe connaitre,note connaîte, graphe comprendre,note,graphe appliquer, note, graphe analyse, note
correc=[
	['Nicolas',2,'graphe1','graphe2','graphe3','graphe4',20,20,20,20,'l','l','l','l','l','l','l','l'],
	['Allann Wauters de Besterfeld',18,'graphe1','graphe2','graphe3','graphe4',50,70,50,90,'l','l','l','l','l','l','l','l'],
	['Nanana Cerise',18,'graphe1','graphe2','graphe3','graphe4',90,50,80,40,'l','l','l','l','l','l','l','l'],
	['Bertrand',18,'graphe1','graphe2','graphe3','graphe4',80,70,60,90,'l','l','l','l','l','l','l','l'],
	['Massilia',18,'graphe1','graphe2','graphe3','graphe4',80,70,60,90,'l','l','l','l','l','l','l','l'],
	['Ernest',18,'graphe1','graphe2','graphe3','graphe4',80,70,60,90,'l','l','l','l','l','l','l','l'],
	['Biroute',18,'graphe1','graphe2','graphe3','graphe4',80,70,60,90,'l','l','l','l','l','l','l','l'],
	['Julien',18,'graphe1','graphe2','graphe3','graphe4',80,70,60,90,'l','l','l','l','l','l','l','l'],
	['Maxime',18,'graphe1','graphe2','graphe3','graphe4',80,70,60,90,'l','l','l','l','l','l','l','l'],
	['Laurent',18,'graphe1','graphe2','graphe3','graphe4',80,70,60,90,'l','l','l','l','l','l','l','l'],
	['Catherine',18,'graphe1','graphe2','graphe3','graphe4',80,70,60,90,'l','l','l','l','l','l','l','l'],
	['Le Suisse',18,'graphe1','graphe2','graphe3','graphe4',80,70,60,90,'l','l','l','l','l','l','l','l'],
	['Berthe aux grands pieds',18,'graphe1','graphe2','graphe3','graphe4',80,70,60,90,'l','l','l','l','l','l','l','l'],
	['Bruno',18,'graphe1','graphe2','graphe3','graphe4',80,70,60,90,'l','l','l','l','l','l','l','l'],
	['Philippe',18,'graphe1','graphe2','graphe3','graphe4',80,70,60,90,'l','l','l','l','l','l','l','l'],
	['Kuntakinté',18,'graphe1','graphe2','graphe3','graphe4',80,70,60,90,'l','l','l','l','l','l','l','l'],
	['Zoubida',18,'graphe1','graphe2','graphe3','graphe4',80,70,60,90,'l','l','l','l','l','l','l','l']];
	

//générer la liste des items en lui donnant la balise de destination
function list_item(destination,add){
list='';//var c=Object.keys(items).length	//console.log(values(items[3][1]))
for(var i in items){
	list+='<li data-id="'+i+'">'+items[i][0]+ic_list+'</li>';
	var c=items[i].length;
	if(c>1){list+='<ul>';
		for(var j=1;j<c;j++){
			for(var k in items[i][j]){
				if(k=='items'){
					list+='<ul>';
					itemm=items[i][j][k];
					var d=itemm.length;
					for(var l=0;l<c;l++){
						list+='<li data-id="'+idtheme+l+'">'+itemm[l]+ic_list+'</li>';
					}
					if(add){list+='<span class="awsm add" title="Ajouter item">&#xf0fe;</span>';}
					list+='</ul>';	
				}
				else{
				idtheme=i+k;
				list+='<li data-id="'+idtheme+'">'+items[i][j][k]+ic_list+'</li>';
				}
			}
			
		}
		if(add){list+='<span class="awsm add" title="Ajouter thème">&#xf0fe;</span>';}
		list+='</ul>';
	}
			
}
if(add){list+='<span class="awsm add" title="Ajouter domaine">&#xf0fe;</span>';}	
$(destination).html(list); 
}


