var one_proc_pris_1 = target_1_prised / 100;
var progress_pris_1 = prised_max / one_proc_pris_1;

var one_proc_pris_2 = target_2_prised / 100;
var progress_pris_2 = prised_max / one_proc_pris_2;

var one_proc_pris_3 = target_3_prised / 100;
var progress_pris_3 = prised_max / one_proc_pris_3;

var one_proc_pris_4 = target_4_prised / 100;
var progress_pris_4 = prised_max / one_proc_pris_4;




var one_proc_tjaga_1 = target_1_tjaga / 100;
var progress_tjaga_1 = tjaga_max / one_proc_tjaga_1;

var one_proc_tjaga_2 = target_2_tjaga / 100;
var progress_tjaga_2 = tjaga_max / one_proc_tjaga_2;

var one_proc_tjaga_3 = target_3_tjaga / 100;
var progress_tjaga_3 = tjaga_max / one_proc_tjaga_3;

var one_proc_tjaga_4 = target_4_tjaga / 100;
var progress_tjaga_4 = tjaga_max / one_proc_tjaga_4;



var one_proc_zhim_1 = target_1_zhim_lezha / 100;
var progress_zhim_1 = zhim_lezha_max / one_proc_zhim_1;

var one_proc_zhim_2 = target_2_zhim_lezha / 100;
var progress_zhim_2 = zhim_lezha_max / one_proc_zhim_2;

var one_proc_zhim_3 = target_3_zhim_lezha / 100;
var progress_zhim_3 = zhim_lezha_max / one_proc_zhim_3;

var one_proc_zhim_4 = target_4_zhim_lezha / 100;
var progress_zhim_4 = zhim_lezha_max / one_proc_zhim_4;


var one_proc_objom_bitseps = target_objom_bitseps / 100;
var one_proc_ves = target_ves_tela / 100;
var one_proc_objom_talii = target_objom_talii / 100;
var one_proc_objom_beder = target_objom_beder / 100;


// Функция для мужчин
var target_zv;

if ( prised_max <= target_1_prised && tjaga_max <= target_1_tjaga && zhim_lezha_max <= target_1_zhim_lezha && sex == "Мужчина") {
  target_zv = function() {
	  prised = prised_max;
	  tjaga = tjaga_max;
	  zhim_lezha = zhim_lezha_max;
	  objom_bitseps = objom_bitseps_now;
	  ves_tela = ves_tela_now;
	  var zv =  document.getElementById("stars_people");
	 zv.style.cssText="background-image: url(../../img/stars_fon_0.png);"; 
	  document.getElementById('prised').value = progress_pris_1;
	  document.getElementById('tjaga').value = progress_tjaga_1;
	  document.getElementById('zhim_lezha').value = progress_zhim_1;
	  if (pohudenie == "Да") {
      document.getElementById('ves_tela').value = target_ves_tela * 100 / ves_tela_now;
	  document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
} 
       else {
       document.getElementById('ves_tela').value = ves_tela_now / one_proc_ves;
	   document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
}
    
  }
}
 else if ( prised_max >= target_1_prised && tjaga_max <= target_1_tjaga && zhim_lezha_max <= target_1_zhim_lezha && sex == "Мужчина") {
  target_zv = function() {
	  prised = prised_max;
	  tjaga = tjaga_max;
	  zhim_lezha = zhim_lezha_max;
	  objom_bitseps = objom_bitseps_now;
	  ves_tela = ves_tela_now;
	  var zv =  document.getElementById("stars_people");
	 zv.style.cssText="background-image: url(../../img/stars_fon_0.png);"; 
	  document.getElementById('prised').value = progress_pris_1;
	  document.getElementById('tjaga').value = progress_tjaga_1;
	  document.getElementById('zhim_lezha').value = progress_zhim_1;
	  if (pohudenie == "Да") {
      document.getElementById('ves_tela').value = target_ves_tela * 100 / ves_tela_now;
	  document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
} 
       else {
       document.getElementById('ves_tela').value = ves_tela_now / one_proc_ves;
	   document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
}
    
  }
}
else if ( prised_max <= target_1_prised && tjaga_max >= target_1_tjaga && zhim_lezha_max <= target_1_zhim_lezha && sex == "Мужчина") {
  target_zv = function() {
	  prised = prised_max;
	  tjaga = tjaga_max;
	  zhim_lezha = zhim_lezha_max;
	  objom_bitseps = objom_bitseps_now;
	  ves_tela = ves_tela_now;
	  var zv =  document.getElementById("stars_people");
	 zv.style.cssText="background-image: url(../../img/stars_fon_0.png);"; 
	  document.getElementById('prised').value = progress_pris_1;
	  document.getElementById('tjaga').value = progress_tjaga_1;
	  document.getElementById('zhim_lezha').value = progress_zhim_1;
	  if (pohudenie == "Да") {
      document.getElementById('ves_tela').value = target_ves_tela * 100 / ves_tela_now;
	  document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
} 
       else {
       document.getElementById('ves_tela').value = ves_tela_now / one_proc_ves;
	   document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
}
    
  }
}
else if ( prised_max <= target_1_prised && tjaga_max <= target_1_tjaga && zhim_lezha_max >= target_1_zhim_lezha && sex == "Мужчина") {
  target_zv = function() {
	  prised = prised_max;
	  tjaga = tjaga_max;
	  zhim_lezha = zhim_lezha_max;
	  objom_bitseps = objom_bitseps_now;
	  ves_tela = ves_tela_now;
	  var zv =  document.getElementById("stars_people");
	 zv.style.cssText="background-image: url(../../img/stars_fon_0.png);"; 
	  document.getElementById('prised').value = progress_pris_1;
	  document.getElementById('tjaga').value = progress_tjaga_1;
	  document.getElementById('zhim_lezha').value = progress_zhim_1;
	  if (pohudenie == "Да") {
      document.getElementById('ves_tela').value = target_ves_tela * 100 / ves_tela_now;
	  document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
} 
       else {
       document.getElementById('ves_tela').value = ves_tela_now / one_proc_ves;
	   document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
}
    
  }
}
else if ( prised_max >= target_1_prised && tjaga_max >= target_1_tjaga && zhim_lezha_max <= target_1_zhim_lezha && sex == "Мужчина") {
  target_zv = function() {
	  prised = prised_max;
	  tjaga = tjaga_max;
	  zhim_lezha = zhim_lezha_max;
	  objom_bitseps = objom_bitseps_now;
	  ves_tela = ves_tela_now;
	  var zv =  document.getElementById("stars_people");
	 zv.style.cssText="background-image: url(../../img/stars_fon_0.png);"; 
	  document.getElementById('prised').value = progress_pris_1;
	  document.getElementById('tjaga').value = progress_tjaga_1;
	  document.getElementById('zhim_lezha').value = progress_zhim_1;
	  if (pohudenie == "Да") {
      document.getElementById('ves_tela').value = target_ves_tela * 100 / ves_tela_now;
	  document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
} 
       else {
       document.getElementById('ves_tela').value = ves_tela_now / one_proc_ves;
	   document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
}
    
  }
}
else if ( prised_max >= target_1_prised && tjaga_max <= target_1_tjaga && zhim_lezha_max >= target_1_zhim_lezha && sex == "Мужчина") {
  target_zv = function() {
	  prised = prised_max;
	  tjaga = tjaga_max;
	  zhim_lezha = zhim_lezha_max;
	  objom_bitseps = objom_bitseps_now;
	  ves_tela = ves_tela_now;
	  var zv =  document.getElementById("stars_people");
	 zv.style.cssText="background-image: url(../../img/stars_fon_0.png);"; 
	  document.getElementById('prised').value = progress_pris_1;
	  document.getElementById('tjaga').value = progress_tjaga_1;
	  document.getElementById('zhim_lezha').value = progress_zhim_1;
	  if (pohudenie == "Да") {
      document.getElementById('ves_tela').value = target_ves_tela * 100 / ves_tela_now;
	  document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
} 
       else {
       document.getElementById('ves_tela').value = ves_tela_now / one_proc_ves;
	   document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
}
    
  }
}
else if ( prised_max <= target_1_prised && tjaga_max >= target_1_tjaga && zhim_lezha_max >= target_1_zhim_lezha && sex == "Мужчина") {
  target_zv = function() {
	  prised = prised_max;
	  tjaga = tjaga_max;
	  zhim_lezha = zhim_lezha_max;
	  objom_bitseps = objom_bitseps_now;
	  ves_tela = ves_tela_now;
	  var zv =  document.getElementById("stars_people");
	 zv.style.cssText="background-image: url(../../img/stars_fon_0.png);"; 
	  document.getElementById('prised').value = progress_pris_1;
	  document.getElementById('tjaga').value = progress_tjaga_1;
	  document.getElementById('zhim_lezha').value = progress_zhim_1;
	  if (pohudenie == "Да") {
      document.getElementById('ves_tela').value = target_ves_tela * 100 / ves_tela_now;
	  document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
} 
       else {
       document.getElementById('ves_tela').value = ves_tela_now / one_proc_ves;
	   document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
}
    
  }
}

else if ( prised_max <= target_2_prised && tjaga_max <= target_2_tjaga && zhim_lezha_max <= target_2_zhim_lezha && sex == "Мужчина") {
  target_zv = function() {
	  prised = prised_max;
	  tjaga = tjaga_max;
	  zhim_lezha = zhim_lezha_max;
	  objom_bitseps = objom_bitseps_now;
	  ves_tela = ves_tela_now;
	  var zv =  document.getElementById("stars_people");
	 zv.style.cssText="background-image: url(../../img/stars_fon_1.png);"; 
	  document.getElementById('prised').value = progress_pris_2;
	  document.getElementById('tjaga').value = progress_tjaga_2;
	  document.getElementById('zhim_lezha').value = progress_zhim_2;
	  if (pohudenie == "Да") {
      document.getElementById('ves_tela').value = target_ves_tela * 100 / ves_tela_now;
	  document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
} 
       else {
       document.getElementById('ves_tela').value = ves_tela_now / one_proc_ves;
	   document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
}
    
  }
}
 else if ( prised_max >= target_2_prised && tjaga_max <= target_2_tjaga && zhim_lezha_max <= target_2_zhim_lezha && sex == "Мужчина") {
  target_zv = function() {
	  prised = prised_max;
	  tjaga = tjaga_max;
	  zhim_lezha = zhim_lezha_max;
	  objom_bitseps = objom_bitseps_now;
	  ves_tela = ves_tela_now;
	  var zv =  document.getElementById("stars_people");
	 zv.style.cssText="background-image: url(../../img/stars_fon_1.png);"; 
	  document.getElementById('prised').value = progress_pris_2;
	  document.getElementById('tjaga').value = progress_tjaga_2;
	  document.getElementById('zhim_lezha').value = progress_zhim_2;
	  if (pohudenie == "Да") {
      document.getElementById('ves_tela').value = target_ves_tela * 100 / ves_tela_now;
	  document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
} 
       else {
       document.getElementById('ves_tela').value = ves_tela_now / one_proc_ves;
	   document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
}
    
  }
}
else if ( prised_max <= target_2_prised && tjaga_max >= target_2_tjaga && zhim_lezha_max <= target_2_zhim_lezha && sex == "Мужчина") {
  target_zv = function() {
	  prised = prised_max;
	  tjaga = tjaga_max;
	  zhim_lezha = zhim_lezha_max;
	  objom_bitseps = objom_bitseps_now;
	  ves_tela = ves_tela_now;
	  var zv =  document.getElementById("stars_people");
	 zv.style.cssText="background-image: url(../../img/stars_fon_1.png);"; 
	  document.getElementById('prised').value = progress_pris_2;
	  document.getElementById('tjaga').value = progress_tjaga_2;
	  document.getElementById('zhim_lezha').value = progress_zhim_2;
	  if (pohudenie == "Да") {
      document.getElementById('ves_tela').value = target_ves_tela * 100 / ves_tela_now;
	  document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
} 
       else {
       document.getElementById('ves_tela').value = ves_tela_now / one_proc_ves;
	   document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
}
    
  }
}
else if ( prised_max <= target_2_prised && tjaga_max <= target_2_tjaga && zhim_lezha_max >= target_2_zhim_lezha && sex == "Мужчина") {
  target_zv = function() {
	  prised = prised_max;
	  tjaga = tjaga_max;
	  zhim_lezha = zhim_lezha_max;
	  objom_bitseps = objom_bitseps_now;
	  ves_tela = ves_tela_now;
	  var zv =  document.getElementById("stars_people");
	 zv.style.cssText="background-image: url(../../img/stars_fon_1.png);"; 
	  document.getElementById('prised').value = progress_pris_2;
	  document.getElementById('tjaga').value = progress_tjaga_2;
	  document.getElementById('zhim_lezha').value = progress_zhim_2;
	  if (pohudenie == "Да") {
      document.getElementById('ves_tela').value = target_ves_tela * 100 / ves_tela_now;
	  document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
} 
       else {
       document.getElementById('ves_tela').value = ves_tela_now / one_proc_ves;
	   document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
}
    
  }
}
else if ( prised_max >= target_2_prised && tjaga_max >= target_2_tjaga && zhim_lezha_max <= target_2_zhim_lezha && sex == "Мужчина") {
  target_zv = function() {
	  prised = prised_max;
	  tjaga = tjaga_max;
	  zhim_lezha = zhim_lezha_max;
	  objom_bitseps = objom_bitseps_now;
	  ves_tela = ves_tela_now;
	  var zv =  document.getElementById("stars_people");
	 zv.style.cssText="background-image: url(../../img/stars_fon_1.png);"; 
	  document.getElementById('prised').value = progress_pris_2;
	  document.getElementById('tjaga').value = progress_tjaga_2;
	  document.getElementById('zhim_lezha').value = progress_zhim_2;
	  if (pohudenie == "Да") {
      document.getElementById('ves_tela').value = target_ves_tela * 100 / ves_tela_now;
	  document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
} 
       else {
       document.getElementById('ves_tela').value = ves_tela_now / one_proc_ves;
	   document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
}
    
  }
}
else if ( prised_max >= target_2_prised && tjaga_max <= target_2_tjaga && zhim_lezha_max >= target_2_zhim_lezha && sex == "Мужчина") {
  target_zv = function() {
	  prised = prised_max;
	  tjaga = tjaga_max;
	  zhim_lezha = zhim_lezha_max;
	  objom_bitseps = objom_bitseps_now;
	  ves_tela = ves_tela_now;
	  var zv =  document.getElementById("stars_people");
	 zv.style.cssText="background-image: url(../../img/stars_fon_1.png);"; 
	  document.getElementById('prised').value = progress_pris_2;
	  document.getElementById('tjaga').value = progress_tjaga_2;
	  document.getElementById('zhim_lezha').value = progress_zhim_2;
	  if (pohudenie == "Да") {
      document.getElementById('ves_tela').value = target_ves_tela * 100 / ves_tela_now;
	  document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
} 
       else {
       document.getElementById('ves_tela').value = ves_tela_now / one_proc_ves;
	   document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
}
    
  }
}
else if ( prised_max <= target_2_prised && tjaga_max >= target_2_tjaga && zhim_lezha_max >= target_2_zhim_lezha && sex == "Мужчина") {
  target_zv = function() {
	  prised = prised_max;
	  tjaga = tjaga_max;
	  zhim_lezha = zhim_lezha_max;
	  objom_bitseps = objom_bitseps_now;
	  ves_tela = ves_tela_now;
	  var zv =  document.getElementById("stars_people");
	 zv.style.cssText="background-image: url(../../img/stars_fon_1.png);"; 
	  document.getElementById('prised').value = progress_pris_2;
	  document.getElementById('tjaga').value = progress_tjaga_2;
	  document.getElementById('zhim_lezha').value = progress_zhim_2;
	  if (pohudenie == "Да") {
      document.getElementById('ves_tela').value = target_ves_tela * 100 / ves_tela_now;
	  document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
} 
       else {
       document.getElementById('ves_tela').value = ves_tela_now / one_proc_ves;
	   document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
}
    
  }
}
else if ( prised_max <= target_3_prised && tjaga_max <= target_3_tjaga && zhim_lezha_max <= target_3_zhim_lezha && sex == "Мужчина") {
  target_zv = function() {
	  prised = prised_max;
	  tjaga = tjaga_max;
	  zhim_lezha = zhim_lezha_max;
	  objom_bitseps = objom_bitseps_now;
	  ves_tela = ves_tela_now;
	  var zv =  document.getElementById("stars_people");
	 zv.style.cssText="background-image: url(../../img/stars_fon_2.png);"; 
	  document.getElementById('prised').value = progress_pris_3;
	  document.getElementById('tjaga').value = progress_tjaga_3;
	  document.getElementById('zhim_lezha').value = progress_zhim_3;
	  if (pohudenie == "Да") {
      document.getElementById('ves_tela').value = target_ves_tela * 100 / ves_tela_now;
	  document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
} 
       else {
       document.getElementById('ves_tela').value = ves_tela_now / one_proc_ves;
	   document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
}
    
  }
}
 else if ( prised_max >= target_3_prised && tjaga_max <= target_3_tjaga && zhim_lezha_max <= target_3_zhim_lezha && sex == "Мужчина") {
  target_zv = function() {
	  prised = prised_max;
	  tjaga = tjaga_max;
	  zhim_lezha = zhim_lezha_max;
	  objom_bitseps = objom_bitseps_now;
	  ves_tela = ves_tela_now;
	  var zv =  document.getElementById("stars_people");
	 zv.style.cssText="background-image: url(../../img/stars_fon_2.png);"; 
	  document.getElementById('prised').value = progress_pris_3;
	  document.getElementById('tjaga').value = progress_tjaga_3;
	  document.getElementById('zhim_lezha').value = progress_zhim_3;
	  if (pohudenie == "Да") {
      document.getElementById('ves_tela').value = target_ves_tela * 100 / ves_tela_now;
	  document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
} 
       else {
       document.getElementById('ves_tela').value = ves_tela_now / one_proc_ves;
	   document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
}
    
  }
}
else if ( prised_max <= target_3_prised && tjaga_max >= target_3_tjaga && zhim_lezha_max <= target_3_zhim_lezha && sex == "Мужчина") {
  target_zv = function() {
	  prised = prised_max;
	  tjaga = tjaga_max;
	  zhim_lezha = zhim_lezha_max;
	  objom_bitseps = objom_bitseps_now;
	  ves_tela = ves_tela_now;
	  var zv =  document.getElementById("stars_people");
	 zv.style.cssText="background-image: url(../../img/stars_fon_2.png);"; 
	  document.getElementById('prised').value = progress_pris_3;
	  document.getElementById('tjaga').value = progress_tjaga_3;
	  document.getElementById('zhim_lezha').value = progress_zhim_3;
	  if (pohudenie == "Да") {
      document.getElementById('ves_tela').value = target_ves_tela * 100 / ves_tela_now;
	  document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
} 
       else {
       document.getElementById('ves_tela').value = ves_tela_now / one_proc_ves;
	   document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
}
    
  }
}
else if ( prised_max <= target_3_prised && tjaga_max <= target_3_tjaga && zhim_lezha_max >= target_3_zhim_lezha && sex == "Мужчина") {
  target_zv = function() {
	  prised = prised_max;
	  tjaga = tjaga_max;
	  zhim_lezha = zhim_lezha_max;
	  objom_bitseps = objom_bitseps_now;
	  ves_tela = ves_tela_now;
	  var zv =  document.getElementById("stars_people");
	 zv.style.cssText="background-image: url(../../img/stars_fon_2.png);"; 
	  document.getElementById('prised').value = progress_pris_3;
	  document.getElementById('tjaga').value = progress_tjaga_3;
	  document.getElementById('zhim_lezha').value = progress_zhim_3;
	  if (pohudenie == "Да") {
      document.getElementById('ves_tela').value = target_ves_tela * 100 / ves_tela_now;
	  document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
} 
       else {
       document.getElementById('ves_tela').value = ves_tela_now / one_proc_ves;
	   document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
}
    
  }
}
else if ( prised_max >= target_3_prised && tjaga_max >= target_3_tjaga && zhim_lezha_max <= target_3_zhim_lezha && sex == "Мужчина") {
  target_zv = function() {
	  prised = prised_max;
	  tjaga = tjaga_max;
	  zhim_lezha = zhim_lezha_max;
	  objom_bitseps = objom_bitseps_now;
	  ves_tela = ves_tela_now;
	  var zv =  document.getElementById("stars_people");
	 zv.style.cssText="background-image: url(../../img/stars_fon_2.png);"; 
	  document.getElementById('prised').value = progress_pris_3;
	  document.getElementById('tjaga').value = progress_tjaga_3;
	  document.getElementById('zhim_lezha').value = progress_zhim_3;
	  if (pohudenie == "Да") {
      document.getElementById('ves_tela').value = target_ves_tela * 100 / ves_tela_now;
	  document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
} 
       else {
       document.getElementById('ves_tela').value = ves_tela_now / one_proc_ves;
	   document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
}
    
  }
}
else if ( prised_max >= target_3_prised && tjaga_max <= target_3_tjaga && zhim_lezha_max >= target_3_zhim_lezha && sex == "Мужчина") {
  target_zv = function() {
	  prised = prised_max;
	  tjaga = tjaga_max;
	  zhim_lezha = zhim_lezha_max;
	  objom_bitseps = objom_bitseps_now;
	  ves_tela = ves_tela_now;
	  var zv =  document.getElementById("stars_people");
	 zv.style.cssText="background-image: url(../../img/stars_fon_2.png);"; 
	  document.getElementById('prised').value = progress_pris_3;
	  document.getElementById('tjaga').value = progress_tjaga_3;
	  document.getElementById('zhim_lezha').value = progress_zhim_3;
	  if (pohudenie == "Да") {
      document.getElementById('ves_tela').value = target_ves_tela * 100 / ves_tela_now;
	  document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
} 
       else {
       document.getElementById('ves_tela').value = ves_tela_now / one_proc_ves;
	   document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
}
    
  }
}
else if ( prised_max <= target_3_prised && tjaga_max >= target_3_tjaga && zhim_lezha_max >= target_3_zhim_lezha && sex == "Мужчина") {
  target_zv = function() {
	  prised = prised_max;
	  tjaga = tjaga_max;
	  zhim_lezha = zhim_lezha_max;
	  objom_bitseps = objom_bitseps_now;
	  ves_tela = ves_tela_now;
	  var zv =  document.getElementById("stars_people");
	 zv.style.cssText="background-image: url(../../img/stars_fon_2.png);"; 
	  document.getElementById('prised').value = progress_pris_3;
	  document.getElementById('tjaga').value = progress_tjaga_3;
	  document.getElementById('zhim_lezha').value = progress_zhim_3;
	  if (pohudenie == "Да") {
      document.getElementById('ves_tela').value = target_ves_tela * 100 / ves_tela_now;
	  document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
} 
       else {
       document.getElementById('ves_tela').value = ves_tela_now / one_proc_ves;
	   document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
}
    
  }
}
else if ( prised_max <= target_4_prised && tjaga_max <= target_4_tjaga && zhim_lezha_max <= target_4_zhim_lezha && sex == "Мужчина") {
  target_zv = function() {
	  prised = prised_max;
	  tjaga = tjaga_max;
	  zhim_lezha = zhim_lezha_max;
	  objom_bitseps = objom_bitseps_now;
	  ves_tela = ves_tela_now;
	  var zv =  document.getElementById("stars_people");
	 zv.style.cssText="background-image: url(../../img/stars_fon_3.png);"; 
	  document.getElementById('prised').value = progress_pris_4;
	  document.getElementById('tjaga').value = progress_tjaga_4;
	  document.getElementById('zhim_lezha').value = progress_zhim_4;
	  if (pohudenie == "Да") {
      document.getElementById('ves_tela').value = target_ves_tela * 100 / ves_tela_now;
	  document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
} 
       else {
       document.getElementById('ves_tela').value = ves_tela_now / one_proc_ves;
	   document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
}
    
  }
}
 else if ( prised_max >= target_4_prised && tjaga_max <= target_4_tjaga && zhim_lezha_max <= target_4_zhim_lezha && sex == "Мужчина") {
  target_zv = function() {
	  prised = prised_max;
	  tjaga = tjaga_max;
	  zhim_lezha = zhim_lezha_max;
	  objom_bitseps = objom_bitseps_now;
	  ves_tela = ves_tela_now;
	  var zv =  document.getElementById("stars_people");
	 zv.style.cssText="background-image: url(../../img/stars_fon_3.png);"; 
	  document.getElementById('prised').value = progress_pris_4;
	  document.getElementById('tjaga').value = progress_tjaga_4;
	  document.getElementById('zhim_lezha').value = progress_zhim_4;
	  if (pohudenie == "Да") {
      document.getElementById('ves_tela').value = target_ves_tela * 100 / ves_tela_now;
	  document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
} 
       else {
       document.getElementById('ves_tela').value = ves_tela_now / one_proc_ves;
	   document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
}
    
  }
}
else if ( prised_max <= target_4_prised && tjaga_max >= target_4_tjaga && zhim_lezha_max <= target_4_zhim_lezha && sex == "Мужчина") {
  target_zv = function() {
	  prised = prised_max;
	  tjaga = tjaga_max;
	  zhim_lezha = zhim_lezha_max;
	  objom_bitseps = objom_bitseps_now;
	  ves_tela = ves_tela_now;
	  var zv =  document.getElementById("stars_people");
	 zv.style.cssText="background-image: url(../../img/stars_fon_3.png);"; 
	  document.getElementById('prised').value = progress_pris_4;
	  document.getElementById('tjaga').value = progress_tjaga_4;
	  document.getElementById('zhim_lezha').value = progress_zhim_4;
	  if (pohudenie == "Да") {
      document.getElementById('ves_tela').value = target_ves_tela * 100 / ves_tela_now;
	  document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
} 
       else {
       document.getElementById('ves_tela').value = ves_tela_now / one_proc_ves;
	   document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
}
    
  }
}
else if ( prised_max <= target_4_prised && tjaga_max <= target_4_tjaga && zhim_lezha_max >= target_4_zhim_lezha && sex == "Мужчина") {
  target_zv = function() {
	  prised = prised_max;
	  tjaga = tjaga_max;
	  zhim_lezha = zhim_lezha_max;
	  objom_bitseps = objom_bitseps_now;
	  ves_tela = ves_tela_now;
	  var zv =  document.getElementById("stars_people");
	 zv.style.cssText="background-image: url(../../img/stars_fon_3.png);"; 
	  document.getElementById('prised').value = progress_pris_4;
	  document.getElementById('tjaga').value = progress_tjaga_4;
	  document.getElementById('zhim_lezha').value = progress_zhim_4;
	  if (pohudenie == "Да") {
      document.getElementById('ves_tela').value = target_ves_tela * 100 / ves_tela_now;
	  document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
} 
       else {
       document.getElementById('ves_tela').value = ves_tela_now / one_proc_ves;
	   document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
}
    
  }
}
else if ( prised_max >= target_4_prised && tjaga_max >= target_4_tjaga && zhim_lezha_max <= target_4_zhim_lezha && sex == "Мужчина") {
  target_zv = function() {
	  prised = prised_max;
	  tjaga = tjaga_max;
	  zhim_lezha = zhim_lezha_max;
	  objom_bitseps = objom_bitseps_now;
	  ves_tela = ves_tela_now;
	  var zv =  document.getElementById("stars_people");
	 zv.style.cssText="background-image: url(../../img/stars_fon_3.png);"; 
	  document.getElementById('prised').value = progress_pris_4;
	  document.getElementById('tjaga').value = progress_tjaga_4;
	  document.getElementById('zhim_lezha').value = progress_zhim_4;
	  if (pohudenie == "Да") {
      document.getElementById('ves_tela').value = target_ves_tela * 100 / ves_tela_now;
	  document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
} 
       else {
       document.getElementById('ves_tela').value = ves_tela_now / one_proc_ves;
	   document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
}
    
  }
}
else if ( prised_max >= target_4_prised && tjaga_max <= target_4_tjaga && zhim_lezha_max >= target_4_zhim_lezha && sex == "Мужчина") {
  target_zv = function() {
	  prised = prised_max;
	  tjaga = tjaga_max;
	  zhim_lezha = zhim_lezha_max;
	  objom_bitseps = objom_bitseps_now;
	  ves_tela = ves_tela_now;
	  var zv =  document.getElementById("stars_people");
	 zv.style.cssText="background-image: url(../../img/stars_fon_3.png);"; 
	  document.getElementById('prised').value = progress_pris_4;
	  document.getElementById('tjaga').value = progress_tjaga_4;
	  document.getElementById('zhim_lezha').value = progress_zhim_4;
	  if (pohudenie == "Да") {
      document.getElementById('ves_tela').value = target_ves_tela * 100 / ves_tela_now;
	  document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
} 
       else {
       document.getElementById('ves_tela').value = ves_tela_now / one_proc_ves;
	   document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
}
    
  }
}
else if ( prised_max <= target_4_prised && tjaga_max >= target_4_tjaga && zhim_lezha_max >= target_4_zhim_lezha && sex == "Мужчина") {
  target_zv = function() {
	  prised = prised_max;
	  tjaga = tjaga_max;
	  zhim_lezha = zhim_lezha_max;
	  objom_bitseps = objom_bitseps_now;
	  ves_tela = ves_tela_now;
	  var zv =  document.getElementById("stars_people");
	 zv.style.cssText="background-image: url(../../img/stars_fon_3.png);"; 
	  document.getElementById('prised').value = progress_pris_4;
	  document.getElementById('tjaga').value = progress_tjaga_4;
	  document.getElementById('zhim_lezha').value = progress_zhim_4;
	  if (pohudenie == "Да") {
      document.getElementById('ves_tela').value = target_ves_tela * 100 / ves_tela_now;
	  document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
} 
       else {
       document.getElementById('ves_tela').value = ves_tela_now / one_proc_ves;
	   document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
}
    
  }
}

else if ( prised_max >= target_4_prised && tjaga_max >= target_4_tjaga && zhim_lezha_max >= target_4_zhim_lezha && sex == "Мужчина") {
  target_zv = function() {
	  prised = prised_max;
	  tjaga = tjaga_max;
	  zhim_lezha = zhim_lezha_max;
	  objom_bitseps = objom_bitseps_now;
	  ves_tela = ves_tela_now;
	  var zv =  document.getElementById("stars_people");
	 zv.style.cssText="background-image: url(../../img/stars_fon_4.png);"; 
	  document.getElementById('prised').value = progress_pris_4;
	  document.getElementById('tjaga').value = progress_tjaga_4;
	  document.getElementById('zhim_lezha').value = progress_zhim_4;
	  if (pohudenie == "Да") {
      document.getElementById('ves_tela').value = target_ves_tela * 100 / ves_tela_now;
	  document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
} 
       else {
       document.getElementById('ves_tela').value = ves_tela_now / one_proc_ves;
	   document.getElementById('objom_bitseps').value = objom_bitseps_now / one_proc_objom_bitseps;
}
    
  }
}

 /* 
Для мужчин конец
Для девушек ниже начало
*/


else if ( prised_max <= target_1_prised && tjaga_max <= target_1_tjaga) {
  target_zv = function() {
	  prised = prised_max;
	  tjaga = tjaga_max;
	  ves_tela = ves_tela_now;
	  objom_talii = objom_talii_now;
	  objom_beder = objom_beder_now;
	  var zv =  document.getElementById("stars_people");
	 zv.style.cssText="background-image: url(../../img/stars_fon_0.png);"; 
	  document.getElementById('prised').value = progress_pris_1;
	  document.getElementById('tjaga').value = progress_tjaga_1;
	  if (pohudenie == "Да") {
      document.getElementById('zhim_lezha').value = target_ves_tela * 100 / ves_tela_now; // вес тела и жим лежа (замена с мужчин)
	  document.getElementById('objom_bitseps').value = target_objom_talii * 100 / objom_talii_now; // обьем талии и обьем бицепс (замена с мужчин)
	  document.getElementById('ves_tela').value = target_objom_beder * 100 / objom_beder_now; // обьем бедер и вес тела(замена с мужчин)
} 
       else {
       document.getElementById('zhim_lezha').value = ves_tela_now / one_proc_ves; // вес тела и жим лежа (замена с мужчин)
	   document.getElementById('objom_bitseps').value = objom_talii_now / one_proc_objom_talii; // обьем талии и обьем бицепс (замена с мужчин)
	   document.getElementById('ves_tela').value = objom_beder_now / one_proc_objom_beder; // обьем бедер и вес тела(замена с мужчин)
}
    
  }
}
 
else if ( prised_max >= target_1_prised && tjaga_max <= target_1_tjaga) {
  target_zv = function() {
	  prised = prised_max;
	  tjaga = tjaga_max;
	  ves_tela = ves_tela_now;
	  objom_talii = objom_talii_now;
	  objom_beder = objom_beder_now;
	  var zv =  document.getElementById("stars_people");
	 zv.style.cssText="background-image: url(../../img/stars_fon_0.png);"; 
	  document.getElementById('prised').value = progress_pris_1;
	  document.getElementById('tjaga').value = progress_tjaga_1;
	  if (pohudenie == "Да") {
      document.getElementById('zhim_lezha').value = target_ves_tela * 100 / ves_tela_now; // вес тела и жим лежа (замена с мужчин)
	  document.getElementById('objom_bitseps').value = target_objom_talii * 100 / objom_talii_now; // обьем талии и обьем бицепс (замена с мужчин)
	  document.getElementById('ves_tela').value = target_objom_beder * 100 / objom_beder_now; // обьем бедер и вес тела(замена с мужчин)
} 
       else {
       document.getElementById('zhim_lezha').value = ves_tela_now / one_proc_ves; // вес тела и жим лежа (замена с мужчин)
	   document.getElementById('objom_bitseps').value = objom_talii_now / one_proc_objom_talii; // обьем талии и обьем бицепс (замена с мужчин)
	   document.getElementById('ves_tela').value = objom_beder_now / one_proc_objom_beder; // обьем бедер и вес тела(замена с мужчин)
}
    
  }
}
else if ( prised_max <= target_1_prised && tjaga_max >= target_1_tjaga) {
  target_zv = function() {
	  prised = prised_max;
	  tjaga = tjaga_max;
	  ves_tela = ves_tela_now;
	  objom_talii = objom_talii_now;
	  objom_beder = objom_beder_now;
	  var zv =  document.getElementById("stars_people");
	 zv.style.cssText="background-image: url(../../img/stars_fon_0.png);"; 
	  document.getElementById('prised').value = progress_pris_1;
	  document.getElementById('tjaga').value = progress_tjaga_1;
	  if (pohudenie == "Да") {
      document.getElementById('zhim_lezha').value = target_ves_tela * 100 / ves_tela_now; // вес тела и жим лежа (замена с мужчин)
	  document.getElementById('objom_bitseps').value = target_objom_talii * 100 / objom_talii_now; // обьем талии и обьем бицепс (замена с мужчин)
	  document.getElementById('ves_tela').value = target_objom_beder * 100 / objom_beder_now; // обьем бедер и вес тела(замена с мужчин)
} 
       else {
       document.getElementById('zhim_lezha').value = ves_tela_now / one_proc_ves; // вес тела и жим лежа (замена с мужчин)
	   document.getElementById('objom_bitseps').value = objom_talii_now / one_proc_objom_talii; // обьем талии и обьем бицепс (замена с мужчин)
	   document.getElementById('ves_tela').value = objom_beder_now / one_proc_objom_beder; // обьем бедер и вес тела(замена с мужчин)
}
    
  }
}
else if ( prised_max <= target_2_prised && tjaga_max <= target_2_tjaga) {
  target_zv = function() {
	  prised = prised_max;
	  tjaga = tjaga_max;
	  ves_tela = ves_tela_now;
	  objom_talii = objom_talii_now;
	  objom_beder = objom_beder_now;
	  var zv =  document.getElementById("stars_people");
	 zv.style.cssText="background-image: url(../../img/stars_fon_1.png);"; 
	  document.getElementById('prised').value = progress_pris_2;
	  document.getElementById('tjaga').value = progress_tjaga_2;
	  if (pohudenie == "Да") {
      document.getElementById('zhim_lezha').value = target_ves_tela * 100 / ves_tela_now; // вес тела и жим лежа (замена с мужчин)
	  document.getElementById('objom_bitseps').value = target_objom_talii * 100 / objom_talii_now; // обьем талии и обьем бицепс (замена с мужчин)
	  document.getElementById('ves_tela').value = target_objom_beder * 100 / objom_beder_now; // обьем бедер и вес тела(замена с мужчин)
} 
       else {
       document.getElementById('zhim_lezha').value = ves_tela_now / one_proc_ves; // вес тела и жим лежа (замена с мужчин)
	   document.getElementById('objom_bitseps').value = objom_talii_now / one_proc_objom_talii; // обьем талии и обьем бицепс (замена с мужчин)
	   document.getElementById('ves_tela').value = objom_beder_now / one_proc_objom_beder; // обьем бедер и вес тела(замена с мужчин)
}
    
  }
}
else if ( prised_max >= target_2_prised && tjaga_max <= target_2_tjaga) {
  target_zv = function() {
	  prised = prised_max;
	  tjaga = tjaga_max;
	  ves_tela = ves_tela_now;
	  objom_talii = objom_talii_now;
	  objom_beder = objom_beder_now;
	  var zv =  document.getElementById("stars_people");
	 zv.style.cssText="background-image: url(../../img/stars_fon_1.png);"; 
	  document.getElementById('prised').value = progress_pris_2;
	  document.getElementById('tjaga').value = progress_tjaga_2;
	  if (pohudenie == "Да") {
      document.getElementById('zhim_lezha').value = target_ves_tela * 100 / ves_tela_now; // вес тела и жим лежа (замена с мужчин)
	  document.getElementById('objom_bitseps').value = target_objom_talii * 100 / objom_talii_now; // обьем талии и обьем бицепс (замена с мужчин)
	  document.getElementById('ves_tela').value = target_objom_beder * 100 / objom_beder_now; // обьем бедер и вес тела(замена с мужчин)
} 
       else {
       document.getElementById('zhim_lezha').value = ves_tela_now / one_proc_ves; // вес тела и жим лежа (замена с мужчин)
	   document.getElementById('objom_bitseps').value = objom_talii_now / one_proc_objom_talii; // обьем талии и обьем бицепс (замена с мужчин)
	   document.getElementById('ves_tela').value = objom_beder_now / one_proc_objom_beder; // обьем бедер и вес тела(замена с мужчин)
}
    
  }
}
else if ( prised_max <= target_2_prised && tjaga_max >= target_2_tjaga) {
  target_zv = function() {
	  prised = prised_max;
	  tjaga = tjaga_max;
	  ves_tela = ves_tela_now;
	  objom_talii = objom_talii_now;
	  objom_beder = objom_beder_now;
	  var zv =  document.getElementById("stars_people");
	 zv.style.cssText="background-image: url(../../img/stars_fon_1.png);"; 
	  document.getElementById('prised').value = progress_pris_2;
	  document.getElementById('tjaga').value = progress_tjaga_2;
	  if (pohudenie == "Да") {
      document.getElementById('zhim_lezha').value = target_ves_tela * 100 / ves_tela_now; // вес тела и жим лежа (замена с мужчин)
	  document.getElementById('objom_bitseps').value = target_objom_talii * 100 / objom_talii_now; // обьем талии и обьем бицепс (замена с мужчин)
	  document.getElementById('ves_tela').value = target_objom_beder * 100 / objom_beder_now; // обьем бедер и вес тела(замена с мужчин)
} 
       else {
       document.getElementById('zhim_lezha').value = ves_tela_now / one_proc_ves; // вес тела и жим лежа (замена с мужчин)
	   document.getElementById('objom_bitseps').value = objom_talii_now / one_proc_objom_talii; // обьем талии и обьем бицепс (замена с мужчин)
	   document.getElementById('ves_tela').value = objom_beder_now / one_proc_objom_beder; // обьем бедер и вес тела(замена с мужчин)
}
    
  }
}
else if ( prised_max <= target_3_prised && tjaga_max <= target_3_tjaga) {
  target_zv = function() {
	  prised = prised_max;
	  tjaga = tjaga_max;
	  ves_tela = ves_tela_now;
	  objom_talii = objom_talii_now;
	  objom_beder = objom_beder_now;
	  var zv =  document.getElementById("stars_people");
	 zv.style.cssText="background-image: url(../../img/stars_fon_2.png);"; 
	  document.getElementById('prised').value = progress_pris_3;
	  document.getElementById('tjaga').value = progress_tjaga_3;
	  if (pohudenie == "Да") {
      document.getElementById('zhim_lezha').value = target_ves_tela * 100 / ves_tela_now; // вес тела и жим лежа (замена с мужчин)
	  document.getElementById('objom_bitseps').value = target_objom_talii * 100 / objom_talii_now; // обьем талии и обьем бицепс (замена с мужчин)
	  document.getElementById('ves_tela').value = target_objom_beder * 100 / objom_beder_now; // обьем бедер и вес тела(замена с мужчин)
} 
       else {
       document.getElementById('zhim_lezha').value = ves_tela_now / one_proc_ves; // вес тела и жим лежа (замена с мужчин)
	   document.getElementById('objom_bitseps').value = objom_talii_now / one_proc_objom_talii; // обьем талии и обьем бицепс (замена с мужчин)
	   document.getElementById('ves_tela').value = objom_beder_now / one_proc_objom_beder; // обьем бедер и вес тела(замена с мужчин)
}
    
  }
}
else if ( prised_max >= target_3_prised && tjaga_max <= target_3_tjaga) {
  target_zv = function() {
	  prised = prised_max;
	  tjaga = tjaga_max;
	  ves_tela = ves_tela_now;
	  objom_talii = objom_talii_now;
	  objom_beder = objom_beder_now;
	  var zv =  document.getElementById("stars_people");
	 zv.style.cssText="background-image: url(../../img/stars_fon_2.png);"; 
	  document.getElementById('prised').value = progress_pris_3;
	  document.getElementById('tjaga').value = progress_tjaga_3;
	  if (pohudenie == "Да") {
      document.getElementById('zhim_lezha').value = target_ves_tela * 100 / ves_tela_now; // вес тела и жим лежа (замена с мужчин)
	  document.getElementById('objom_bitseps').value = target_objom_talii * 100 / objom_talii_now; // обьем талии и обьем бицепс (замена с мужчин)
	  document.getElementById('ves_tela').value = target_objom_beder * 100 / objom_beder_now; // обьем бедер и вес тела(замена с мужчин)
} 
       else {
       document.getElementById('zhim_lezha').value = ves_tela_now / one_proc_ves; // вес тела и жим лежа (замена с мужчин)
	   document.getElementById('objom_bitseps').value = objom_talii_now / one_proc_objom_talii; // обьем талии и обьем бицепс (замена с мужчин)
	   document.getElementById('ves_tela').value = objom_beder_now / one_proc_objom_beder; // обьем бедер и вес тела(замена с мужчин)
}
    
  }
}
else if ( prised_max <= target_3_prised && tjaga_max >= target_3_tjaga) {
  target_zv = function() {
	  prised = prised_max;
	  tjaga = tjaga_max;
	  ves_tela = ves_tela_now;
	  objom_talii = objom_talii_now;
	  objom_beder = objom_beder_now;
	  var zv =  document.getElementById("stars_people");
	 zv.style.cssText="background-image: url(../../img/stars_fon_2.png);"; 
	  document.getElementById('prised').value = progress_pris_3;
	  document.getElementById('tjaga').value = progress_tjaga_3;
	  if (pohudenie == "Да") {
      document.getElementById('zhim_lezha').value = target_ves_tela * 100 / ves_tela_now; // вес тела и жим лежа (замена с мужчин)
	  document.getElementById('objom_bitseps').value = target_objom_talii * 100 / objom_talii_now; // обьем талии и обьем бицепс (замена с мужчин)
	  document.getElementById('ves_tela').value = target_objom_beder * 100 / objom_beder_now; // обьем бедер и вес тела(замена с мужчин)
} 
       else {
       document.getElementById('zhim_lezha').value = ves_tela_now / one_proc_ves; // вес тела и жим лежа (замена с мужчин)
	   document.getElementById('objom_bitseps').value = objom_talii_now / one_proc_objom_talii; // обьем талии и обьем бицепс (замена с мужчин)
	   document.getElementById('ves_tela').value = objom_beder_now / one_proc_objom_beder; // обьем бедер и вес тела(замена с мужчин)
}
    
  }
}
else if ( prised_max <= target_4_prised && tjaga_max <= target_4_tjaga) {
  target_zv = function() {
	  prised = prised_max;
	  tjaga = tjaga_max;
	  ves_tela = ves_tela_now;
	  objom_talii = objom_talii_now;
	  objom_beder = objom_beder_now;
	  var zv =  document.getElementById("stars_people");
	 zv.style.cssText="background-image: url(../../img/stars_fon_3.png);"; 
	  document.getElementById('prised').value = progress_pris_4;
	  document.getElementById('tjaga').value = progress_tjaga_4;
	  if (pohudenie == "Да") {
      document.getElementById('zhim_lezha').value = target_ves_tela * 100 / ves_tela_now; // вес тела и жим лежа (замена с мужчин)
	  document.getElementById('objom_bitseps').value = target_objom_talii * 100 / objom_talii_now; // обьем талии и обьем бицепс (замена с мужчин)
	  document.getElementById('ves_tela').value = target_objom_beder * 100 / objom_beder_now; // обьем бедер и вес тела(замена с мужчин)
} 
       else {
       document.getElementById('zhim_lezha').value = ves_tela_now / one_proc_ves; // вес тела и жим лежа (замена с мужчин)
	   document.getElementById('objom_bitseps').value = objom_talii_now / one_proc_objom_talii; // обьем талии и обьем бицепс (замена с мужчин)
	   document.getElementById('ves_tela').value = objom_beder_now / one_proc_objom_beder; // обьем бедер и вес тела(замена с мужчин)
}
    
  }
}

else if ( prised_max >= target_4_prised && tjaga_max <= target_4_tjaga) {
  target_zv = function() {
	  prised = prised_max;
	  tjaga = tjaga_max;
	  ves_tela = ves_tela_now;
	  objom_talii = objom_talii_now;
	  objom_beder = objom_beder_now;
	  var zv =  document.getElementById("stars_people");
	 zv.style.cssText="background-image: url(../../img/stars_fon_3.png);"; 
	  document.getElementById('prised').value = progress_pris_4;
	  document.getElementById('tjaga').value = progress_tjaga_4;
	  if (pohudenie == "Да") {
      document.getElementById('zhim_lezha').value = target_ves_tela * 100 / ves_tela_now; // вес тела и жим лежа (замена с мужчин)
	  document.getElementById('objom_bitseps').value = target_objom_talii * 100 / objom_talii_now; // обьем талии и обьем бицепс (замена с мужчин)
	  document.getElementById('ves_tela').value = target_objom_beder * 100 / objom_beder_now; // обьем бедер и вес тела(замена с мужчин)
} 
       else {
       document.getElementById('zhim_lezha').value = ves_tela_now / one_proc_ves; // вес тела и жим лежа (замена с мужчин)
	   document.getElementById('objom_bitseps').value = objom_talii_now / one_proc_objom_talii; // обьем талии и обьем бицепс (замена с мужчин)
	   document.getElementById('ves_tela').value = objom_beder_now / one_proc_objom_beder; // обьем бедер и вес тела(замена с мужчин)
}
    
  }
}
else if ( prised_max <= target_4_prised && tjaga_max >= target_4_tjaga) {
  target_zv = function() {
	  prised = prised_max;
	  tjaga = tjaga_max;
	  ves_tela = ves_tela_now;
	  objom_talii = objom_talii_now;
	  objom_beder = objom_beder_now;
	  var zv =  document.getElementById("stars_people");
	 zv.style.cssText="background-image: url(../../img/stars_fon_3.png);"; 
	  document.getElementById('prised').value = progress_pris_4;
	  document.getElementById('tjaga').value = progress_tjaga_4;
	  if (pohudenie == "Да") {
      document.getElementById('zhim_lezha').value = target_ves_tela * 100 / ves_tela_now; // вес тела и жим лежа (замена с мужчин)
	  document.getElementById('objom_bitseps').value = target_objom_talii * 100 / objom_talii_now; // обьем талии и обьем бицепс (замена с мужчин)
	  document.getElementById('ves_tela').value = target_objom_beder * 100 / objom_beder_now; // обьем бедер и вес тела(замена с мужчин)
} 
       else {
       document.getElementById('zhim_lezha').value = ves_tela_now / one_proc_ves; // вес тела и жим лежа (замена с мужчин)
	   document.getElementById('objom_bitseps').value = objom_talii_now / one_proc_objom_talii; // обьем талии и обьем бицепс (замена с мужчин)
	   document.getElementById('ves_tela').value = objom_beder_now / one_proc_objom_beder; // обьем бедер и вес тела(замена с мужчин)
}
    
  }
}
else if ( prised_max >= target_4_prised && tjaga_max >= target_4_tjaga) {
  target_zv = function() {
	  prised = prised_max;
	  tjaga = tjaga_max;
	  ves_tela = ves_tela_now;
	  objom_talii = objom_talii_now;
	  objom_beder = objom_beder_now;
	  var zv =  document.getElementById("stars_people");
	 zv.style.cssText="background-image: url(../../img/stars_fon_4.png);"; 
	  document.getElementById('prised').value = progress_pris_4;
	  document.getElementById('tjaga').value = progress_tjaga_4;
	  if (pohudenie == "Да") {
      document.getElementById('zhim_lezha').value = target_ves_tela * 100 / ves_tela_now; // вес тела и жим лежа (замена с мужчин)
	  document.getElementById('objom_bitseps').value = target_objom_talii * 100 / objom_talii_now; // обьем талии и обьем бицепс (замена с мужчин)
	  document.getElementById('ves_tela').value = target_objom_beder * 100 / objom_beder_now; // обьем бедер и вес тела(замена с мужчин)
} 
       else {
       document.getElementById('zhim_lezha').value = ves_tela_now / one_proc_ves; // вес тела и жим лежа (замена с мужчин)
	   document.getElementById('objom_bitseps').value = objom_talii_now / one_proc_objom_talii; // обьем талии и обьем бицепс (замена с мужчин)
	   document.getElementById('ves_tela').value = objom_beder_now / one_proc_objom_beder; // обьем бедер и вес тела(замена с мужчин)
}
    
  }
}




target_zv();