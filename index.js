let nome = "superHeroiFelipeDio";
let qtdeExperiencia = 11000;

let nivel;

nivel = "Avançado";

switch (qtdeExperiencia) {
    case 1000:
        nivel = "Ferro";
        break;
    case 1001 <= qtdeExperiencia <= 2000:
        nivel = "Bronze";
        break;
    case 2001 <= qtdeExperiencia <= 5000:
        nivel = "Prata";
        break;
    case 6001 <= qtdeExperiencia <= 7000:
        nivel = "Ouro";
        break;
    case 7001 <= qtdeExperiencia <= 8000:
        nivel = "Platina";
        break;
    case 8001 <= qtdeExperiencia <= 9000:
        nivel = "Ascendente";
        break;
    case 9001 <= qtdeExperiencia <= 10000:
        nivel = "Imortal";
        break;
    case qtdeExperiencia >= 10001:
        nivel = "Radiante";
        break;
}

console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
