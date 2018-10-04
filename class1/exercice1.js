var data = {
    series: [{
            name: "Serie1",
            values: [0.5, 0.3, 0.7, 0.2]
        },
        {
            name: "Serie2",
            values: [0.4, 0.2, 0.9, 0.3]
        },
        {
            name: "Serie3",
            values: [0.2, 0.1, 0.6, 0.4]
        },
        {
            name: "Serie4",
            values: [0.9, 0.7, 0.5, 0.8]
        }
		],
    colonnes: ["Colonne1", "Colonne2", "Colonne3", "Colonne4"]
};

var largeur = 1000;
var hauteur = 500;

var paper = Raphael("exemple", largeur + 30, hauteur);

paper.rect(0, 0, largeur + 30, hauteur, 5).attr({
    fill: "#66CCFF"
});

var nbCollon = data.colonnes.length;
var nbSeries = data.series.length;

var marge = 20;

var largGraph = largeur - 2 * marge;
var hautGraph = hauteur - 2 * marge;

var disColonne = largGraph / 4;
var disEti = hautGraph / 5;


/*var axe1 = paper.path("M" + marge + "," + (marge + hautGraph) + "L" + marge + "," + marge);*/
var xPos = [];

for (var i = 1; i <= nbCollon; i++) {
    xPos[i] = paper.path("M" + (marge + i * disColonne) + "," + (marge + hautGraph) + "L" + (marge + i * disColonne) + "," + marge);
}
/*${参数}, 不用引号，而是用顿号*/
for (i = 1; i <= nbCollon; i++) {
    xPos[i] = paper.text((marge + i * disColonne) + 5, (marge + hautGraph) + 10, data.colonnes[i - 1]).attr({
        "font-size": "12px"
    });
}

for (i = 0; i < nbSeries; i++) {
    paper.rect(marge, ((1 - data.series[i].values[0]) * hautGraph + 5), 100, 30, 5).attr({
        "fill": "hsl(" + i * 90 + ", 81, 79)"
    });
    paper.text(marge + 50, ((1 - data.series[i].values[0]) * hautGraph + 20), data.series[i].name).attr({
        "font-size": "12px"
    });
    
    
    paper.path("M" + (marge + 100) + "," + ((1 - data.series[i].values[0]) * hautGraph + 20) + "L" + (marge + disColonne) + "," + ((1 - data.series[i].values[0]) * hautGraph + 20)).attr({
        stroke: "hsl(" + i * 90 + ", 81, 79)",
        "stroke-width": "2px",
    });


    for (var j = 1; j <= 3; j++) {
        paper.path("M" + (marge + j * disColonne) + "," + ((1 - data.series[i].values[j - 1]) * hautGraph + 20) + "L" + (marge + (j + 1) * disColonne) + "," + ((1 - data.series[i].values[j]) * hautGraph + 20)).attr({
            stroke: "hsl(" + i * 90 + ", 81, 79)",
            "stroke-width": "2px",
        });
    }


    for (j = 1; j <= nbCollon; j++) {
        paper.circle((marge + j * disColonne), ((1 - data.series[i].values[j - 1]) * hautGraph + 20), 5).attr({
            "fill": "hsl(" + i * 90 + ", 81, 79)"
        });
    }
}
