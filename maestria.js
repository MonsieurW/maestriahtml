
///////////////donn�es toutes pages/////////////////////////////
//Valeurs par d�faut
IDeval_gl=111;
IDclasse_gl=32;
results={};
check='<span class="awsm">&#xf00c;</span>';


//Sert � chaque fois qu'on peut changer de classe
ttes_classes={31:'3<sup>1</sup>',32:'3<sup>2</sup>',33:'3<sup>3</sup>'};
//Sert � chaque fois qu'on peut changer d'�valuation
evals2={111:['Puissance','07/03/2015'],222:['D�coupage','14/03/2015']};
//Sert pour la page correction et	index
taxos=["",
	["Conna�tre","&#xf02d;"],
	["Comprendre","&#xf0e2;"],
	["Appliquer","&#xf0ad;"],
	["Analyser","&#xf005;"]];	
	
	
//sert pour la page neweval (en mode modification) et la page index	
	evals={111:{
		"nom":'Puissance',
		"date":'1986-03-14',
		//ID,titre,,note,niveau taxo,conn,comp
		1:[1234,"D�finition puissance",2,2,"la puissance est une �nergie par unit� de temps","Savoir s'exprimer � l'aide du langage scientifique"],
		2:[1235,"Calcul Puissance",3,3,"la puissance est une �nergie par unit� de temps","Savoir utiliser une calculatrice"],
		3:[1236,"Diagramme �nerg�tique",3,5,"L'�nergie se transforme","Sch�matiser selon les conventions"]},
	222:{
		"nom":'D�coupage',
		"date":'1984-04-20',
		1:[9876,"Nommer les ciseaux",2,1,"Savoir qu'on parle d'une paire de ciseaux","Savoir nommer les objets de la classe"],
		2:[9877,"Placement main",3,2,"","Mettre le pouce vers la lumi�re quand on d�coupe"],
		3:[9878,"Adresse courbe",3,2,"","Savoir d�couper une courbe avec des ciseaux"],
		4:[9879,"Adresse droite",3,2,"","Savoir d�couper une ligne droite avec des ciseaux"],
		5:[9880,"Adresse",3,1,"","Savoir comment reconna�tre les ciseaux gauchers"],
		6:[9881,"Respect",4,3,"","Ne pas planter les ciseaux dans ses camarades"],
		7:[9882,"Capillotract�",3,4,"","Savoir d�couper une frange avec des ciseaux"]
		}
	};
	

//Chaque domaine a un ID de deux chiffre,on rajoute deux chiffres � cet ID pr avoir celui d'un theme fils et encore 1 pr un item
items={
	1:{"nom":'Physique'},
	2:{"nom":'Chimie',
			01:["Corps pur",["Un corps pur est constitu� d'un seul type de mol�cule"]]
	},
	3:{"nom":'Savoir-faire',
		01:['R�aliser Test'],
		02:["Interpreter test",
			["Associer les grandeurs aux unit�s correspondantes","Verifier la coh�rence des r�sultats obtenus","Avoir l'esprit critique vis-�-vis de ses r�sultats","Utiliser du vocabulaire de la m�trologie","Percevoir la diff�rence entre r�alit� et simulation"]
			],
		03:["D�marche d�ductive"]
	},
	4:{"nom":"Attitude"}};




	
//////////////////////////////G�n�ration pop up
fixepopup =['<section class="titre ','"><div class="awsm exit">&#xf00d;</div><h3>','</h3></section><section class="contenu ','</section>'];

function genererpopup(clas,titr,clas2,contenu){
	$('#inpopup').html(fixepopup[0]+ clas +fixepopup[1]+ titr +fixepopup[2]+clas2+contenu+fixepopup[3]);	
	$('#popup').slideDown();
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

function finditem(id){
console.log(id);
	if(id!=""){id=id.toString();
		split=id.split('-');}
	else{return '';}
	console.log(split[0]+'/'+split[1]+'/'+split[2]);
	if(split[2]!=undefined){
		return items[split[0]][split[1]][1][split[2]];
	}
	else{
		if(split[1]==undefined){
		return items[split[0]]['nom'];
		}
		return items[split[0]][split[1]][0];
	}
}

/////////////////Correction


	
ic_list1='<span class="awsm del">&#xf1f8;</span><span class="awsm edit">&#xf040;</span>';


//g�n�rer la liste des items en lui donnant la balise de destination
function list_item(destination,add,ic_list,itemprio){
console.log(itemprio);
if(itemprio!=false){
split=itemprio.toString().split('-');}
else{split=['','',''];}
list='';
	//console.log(values(items[3][1]))
for(var i in items){
	list+='<li data-id="'+i+'"';
	list+=(split[0]==i)?' class="actif"' :'';
	list+='><span>'+items[i]['nom']+'</span>'+ic_list+'</li>';
	var c=Object.keys(items[i]).length;
	if(c>1){
		list+=(split[0]==i)?'<ul style="display:block">' :'<ul>';
		for(var j in items[i]){
			if(j!="nom"){
				list+='<li data-id="'+i+'-'+j+'"';
						list+=(split[1]==j)?' class="actif"' :'';
						list+='><span>'+items[i][j][0]+'</span>'+ic_list+'</li>';
				d=items[i][j][1];
				if(d!=undefined){
					list+=(split[1]==j)?'<ul style="display:block">' :'<ul>';
					dl=d.length;
					for(var k=0;k<dl;k++){
						list+='<li data-id="'+i+'-'+j+'-'+k+'"';
						list+=(parseInt(split[2])===k)?' class="actif"' :'';
						list+='><span>'+d[k]+'</span>'+ic_list+'</li>';
					}
					if(add){list+='<span class="awsm add" title="Ajouter item">&#xf0fe;</span>';}
					list+='</ul>';
				}
				
			}
		}
		if(add){
		list+='<span class="awsm add" title="Ajouter th�me">&#xf0fe;</span>';}
		list+='</ul>';
	}	
}			
if(add){list+='<span class="awsm add" title="Ajouter domaine">&#xf0fe;</span>';}
$(destination).html(list); 
}


