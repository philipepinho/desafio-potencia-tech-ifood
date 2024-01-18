//Desafio Classificador de Herói
//Texto Inicial
console.log("Aqui veremos as classificações de níveis dos heróis Odin, Freyr, Frigga, Tyr, Vidar, Thor, Bragi, Njord e Freya");
//Variáveis em Matriz definindo heróis e seus níveis
var herois = [["Odin", 900], ["Freyr", 1800], ["Frigga", 2350], ["Tyr", 5999], ["Vidar", 7050], ["Thor", 8002], ["Bragi", 9500], ["Njord", 10] , ["Freya", 15000]]
if(herois[0][1] < 1000){
  nivelFerro = "Ferro"
} else{};
if(herois[1][1] > 1000 <= 2000){
  nivelBronze = "Bronze"
} else{};
if(herois[2][1] > 2000 <=5000){
  nivelPrata = "Prata"
} else{};
if(herois[3][1] > 5000 <= 7000){
  nivelOuro = "Ouro"
} else{};
if(herois[4][1] > 7000 <= 8000){
  nivelPlatina = "Platina"
} else{};
if(herois[5][1] > 8000 <= 9000){
  nivelAscendente = "Ascendente"
} else{};
if(herois[6][1] > 9000 <=10000){
  nivelImortal = "Imortal"
} else{};
if(herois[7][1] > 10000 <Infinity){
  nivelRadiante = "Radiante"
} else{};
//Usando If... Else para definir no nomes dos níveis de herós conforme a XP
console.log("O Herói de nome " + (herois[0][0]) + " está no nível de " +  (nivelFerro));
console.log("O Herói de nome " + (herois[1][0]) + " está no nível de " +  (nivelBronze));
console.log("O Herói de nome " + (herois[2][0]) + " está no nível de " +  (nivelPrata));
console.log("O Herói de nome " + (herois[3][0]) + " está no nível de " +  (nivelOuro));
console.log("O Herói de nome " + (herois[4][0]) + " está no nível de " +  (nivelPlatina));
console.log("O Herói de nome " + (herois[5][0]) + " está no nível de " +  (nivelAscendente));
console.log("O Herói de nome " + (herois[6][0]) + " está no nível de " +  (nivelImortal));
console.log("O Herói de nome " + (herois[7][0]) + " está no nível de " +  (nivelRadiante));
console.log("O Herói de nome " + (herois[8][0]) + " está no nível de " +  (nivelFerro));



//// feito pelo chatGPT, após eu submeter meu código par ele analisar e corrigir
console.log("Aqui veremos as classificações de níveis dos heróis Odin, Freyr, Frigga, Tyr, Vidar, Thor, Bragi, Njord e Freya");
var herois = [["Odin", 900], ["Freyr", 1800], ["Frigga", 2350], ["Tyr", 5999], ["Vidar", 7050], ["Thor", 8002], ["Bragi", 9500], ["Njord", 10] , ["Freya", 15000]];
// vejo que o chatGPT usou o "i" para simbolizar o 0, criar uma variável.lenght e estabelecer um contador
for (var i = 0; i < herois.length; i++) {
    //aqui vejo que ele deixou a variável nível sem dado, para depois estabelecer conforme os "ifs"
  var nivel = "";
  if (herois[i][1] < 1000) {
    nivel = "Ferro";
    //aqui vejo que poderia simplificar bem o código usando else if para dar uma nova resposta a variável
  } else if (herois[i][1] > 1000 && herois[i][1] <= 2000) {
    nivel = "Bronze";
    //além disso, observo que faltou o && para definir a análise dentro dos intervalos de maior e menor
  } else if (herois[i][1] > 2000 && herois[i][1] <= 5000) {
    nivel = "Prata";
  } else if (herois[i][1] > 5000 && herois[i][1] <= 7000) {
    nivel = "Ouro";
  } else if (herois[i][1] > 7000 && herois[i][1] <= 8000) {
    nivel = "Platina";
  } else if (herois[i][1] > 8000 && herois[i][1] <= 9000) {
    nivel = "Ascendente";
  } else if (herois[i][1] > 9000 && herois[i][1] <= 10000) {
    nivel = "Imortal";
  } else if (herois[i][1] > 10000) {
    nivel = "Radiante";
  }
  console.log("O Herói de nome " + herois[i][0] + " está no nível de " + nivel);
}
