		//const btnPlay2=document.getElementById('play2');
		
		const btnPlay=document.getElementById('play');
		const btnPrecedent=document.getElementById('precedent');
		const btnSuivant=document.getElementById('suivant');
		
		const audio=document.getElementById('audio');
		const musiqueContenant=document.getElementById('musique-contenant');
		const titre=document.getElementById('titre');
		
		const chansonsArr=['Alma','Prayer','Articulate','Glissent les feuilles','I'];
		
		const titre1=document.getElementById('un');
		const titre2=document.getElementById('deux');
		const titre3=document.getElementById('trois');
		const titre4=document.getElementById('quatre');
		const titre5=document.getElementById('cinq');

		let ordreChanson=0;
		
		function telechargerChanson(chanson){
			titre.textContent=chanson;
			audio.src=`musique/${chanson}.mp3`;
		}

		
		telechargerChanson(chansonsArr[ordreChanson]);
		changeNom(nom[ordreChanson]);
		
		function playChanson(){
			musiqueContenant.classList.add('play');
			btnPlay.querySelector('i.fa').classList.remove('fa-play');
			btnPlay.querySelector('i.fa').classList.add('fa-pause');
			audio.play();
			
		}
		
		function pauseChanson(){
			musiqueContenant.classList.remove('play');
			audio.pause();
			
			btnPlay.querySelector('i.fa').classList.add('fa-play');
			btnPlay.querySelector('i.fa').classList.remove('fa-pause');
		}
		
		function chansonPrecedente(){
			ordreChanson--;
			if(ordreChanson<0)
				ordreChanson=0
			telechargerChanson(chansonsArr[ordreChanson]);
			changeNom(nom[ordreChanson]);
			playChanson();
		}
		
		function chansonSuivante(){
			ordreChanson++;
			if(ordreChanson>chansonsArr.length-1){
				ordreChanson=0
			}
			telechargerChanson(chansonsArr[ordreChanson]);
			changeNom(nom[ordreChanson]);
			playChanson();
		}
		
		
		
		function cliqueMusique1(){
			ordreChanson=0
			
			telechargerChanson(chansonsArr[ordreChanson]);
			changeNom(nom[ordreChanson]);
			playChanson();
		
		}
		function cliqueMusique2(){
			ordreChanson=1
			
			telechargerChanson(chansonsArr[ordreChanson]);
			changeNom(nom[ordreChanson]);
			playChanson();
		
		}
		function cliqueMusique3(){
			ordreChanson=2
			
			telechargerChanson(chansonsArr[ordreChanson]);
			changeNom(nom[ordreChanson]);
			playChanson();
		
		}
		function cliqueMusique4(){
			ordreChanson=3
			
			telechargerChanson(chansonsArr[ordreChanson]);
			changeNom(nom[ordreChanson]);
			playChanson();
		
		}
		function cliqueMusique5(){
			ordreChanson=4
			
			telechargerChanson(chansonsArr[ordreChanson]);
			changeNom(nom[ordreChanson]);
			playChanson();
		
		}
		
		//function cliqueMusiquex(){
		//	telechargerChanson("pluie d'oiseau");
		//	playChanson();
		
		//}
		
		
		btnPlay.addEventListener('click',() => {
			const enTrainDeJouer=musiqueContenant.classList.contains('play');
			
			if(enTrainDeJouer){
				pauseChanson();
			} else{
				playChanson();
				}
		});
		
		titre1.addEventListener('click',cliqueMusique1);
		titre2.addEventListener('click',cliqueMusique2);
		titre3.addEventListener('click',cliqueMusique3);
		titre4.addEventListener('click',cliqueMusique4);
		titre5.addEventListener('click',cliqueMusique5);
		
		//titrex.addEventListener('click',cliqueMusiquex);

		
		btnPrecedent.addEventListener('click',chansonPrecedente);
		btnSuivant.addEventListener('click',chansonSuivante);
		
		audio.addEventListener('ended',chansonSuivante);