function sum (ovdeMoguStaHocuDaStavimJerSamDoleDodelioVrednost) {
	
	var rezultat = 0;  
  
  	rezultat = mojNovac / iznosRacuna;
  
  return Math.floor(rezultat);
}



var mojNovac = prompt("Unesite koliko imate para na raspolaganju?");

var iznosRacuna = prompt("Unesite cenu zeljenog proizvoda?"); 

if (isNaN(mojNovac) == false) {
	var rezultat = sum(mojNovac / iznosRacuna);
	document.write("Za iznos od " + mojNovac + "rsd mozete kupiti " + rezultat + " proizvoda po ceni od " + iznosRacuna + "rsd" +"<br>");
} 
else {
	alert("Molim vas ispravno unesite broj. Rifresujte stranicu!");
}
