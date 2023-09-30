let jogador = ['Fox', 1.000, 2.000, 5.000, 8.000, 9.000, 10.000, 11.000]
let xp = [3]

if(xp <=1.000){
    console.log("Ferro")
}
else if(xp => 1.001 && xp<2.000){
    console.log("Bronze")
}
else if(xp =>2.001 && xp < 5.000){
console.log("Prata ouro")
} 
else if (xp > 5.001 && xp <8.000){
}
else if(xp > 8.001 && xp< 9.000){
console.log("Ascendente")
}
else if(xp >9.001 && xp <10.000){
console.log("Imortal")
}
else if(xp =>10.001){
    console.log("Radiante")
}

console.log(`O heroi ${jogador[0]} está no nivel ${xp}`)