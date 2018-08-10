// methode pour permuter les images et repositionner le resumé

var titre = "";

var tabDate = [
    "Publi&eacute; le 28/07/2018",
    "Publi&eacute; le 30/07/2018",
    "Publi&eacute; le 01/08/2018",
    "Publi&eacute; le 03/08/2018"
]

var tabTitre = [
    "L'agrume, le fruit mythique",
    "Le raisin, le fruit de la vigne",
    "La pomme, le fruit aim&eacute de tous",
    "La cerise, le fruit du cerisier"
]

var tabResume = [
    "Les agrumes sont les fruits et par extension les plantes des genres Citrus, Fortunella, et Poncirus de la famille des Rutaceae, sous famille des Aurantioideae, tribu des Citreae, sous-tribu Citrinae. Les agrumes se caract&eacute;risent et distinguent de la plupart des autres fruits par leur structure en quartiers, issus des carpelles.",
    "Le raisin de la vigne est un des fruits les plus cultiv&eacute;s au monde, avec 68 millions de tonnes produites en 2010, derri&egrave;re les agrumes (124 millions), les bananes (102 millions) et les pommes (70 millions). Il se pr&eacute;sente sous la forme de grappes compos&eacute;es de nombreux grains, qui sont sur le plan botanique des baies, de petite taille et de couleur claire, ...",
    "La pomme est un fruit comestible &agrave; p&eacute;pins d'un goût sucr&eacute; et acidul&eacute; et à la propri&eacute;t&eacute; plus ou moins astringente selon les vari&eacute;t&eacute;s. D'un point de vue botanique, il s'agit d'un fruit complexe, car elle d&eacute;rive de la fleur enti&egrave;re et de son r&eacute;ceptacle, Contrairement aux fruits simples qui d&eacute;rivent uniquement de l'ovaire. Elle est produite par les pommiers, des arbres du genre Malus.",
    "Il s'agit d'une drupe (fruit charnu &agrave; noyau), de forme sph&eacute;rique, de couleur g&eacute;n&eacute;ralement rouge plus ou moins fonc&eacute; jusque noire, plus rarement jaune. Ce petit fruit compte environ 50 calories pour 100 grammes. La fleur est g&eacute;n&eacute;ralement blanche. Il en existe plus de 600 vari&eacute;t&eacute;s, dont les plus connues sont la Burlat et la Bigarreau. Les cerises se r&eacute;coltent de fin mai &agrave; mi-ao&ucirc;t."
]

for (i = 1; i <= document.images.length; i++) {

    document.images[i].onclick = function afficher() {
        var indiceImage = this.id; // numéro de l'imagette survolée

        // si l'indice de l'image est paire ou non 
        // on repositionne le resumDiv qui contien un seul enfant div transparent
        if (indiceImage%2 == 0) {
            document.getElementById("resumDiv").style.flexDirection = "row-reverse";
        } else {
            document.getElementById("resumDiv").style.flexDirection = "row";
        }

        // affichage de la grande image 
        document.getElementById("mainImage").src = "images/image" + indiceImage + ".jpg";

        // changement de la date du resumé
        document.getElementById("resumDate").innerHTML = tabDate[indiceImage - 1];

        // changement du titre du sesumé
        document.getElementById("resumTitle").innerHTML = tabTitre[indiceImage - 1];
        
        // changement du contenu du resumé
        document.getElementById("resumParagraph").innerHTML = tabResume[indiceImage - 1];
    };
};