$.getJSON(
    'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json',
    function (result) {
        var labels = result.map(function (e) {
                return e.data;
            }),
            source1 = result.map(function (e) {
                return e.ricoverati_con_sintomi;
            }),
            source2 = result.map(function (e) {
                return e.terapia_intensiva;
            }),
            source3 = result.map(function (e) {
                return e.totale_ospedalizzati;
            });
            source4 = result.map(function (e) {
                return e.totale_attualmente_positivi;
            });
            source5 = result.map(function (e) {
                return e.isolamento_domiciliare;
            });
            source6 = result.map(function (e) {
                return e.nuovi_attualmente_positivi;
            });
            source7 = result.map(function (e) {
                return e.dimessi_guariti;
            });
            source8 = result.map(function (e) {
                return e.deceduti;
            });
            source9 = result.map(function (e) {
                return e.totale_casi;
            });
            source10 = result.map(function (e) {
                return e.tamponi;
            });

        var ctx = document.getElementById("myChart").getContext("2d");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: "Hospitalized with sympthoms",
                    data: source1,
                    borderWidth: 2,
                    backgroundColor: "rgba(6, 167, 125, 0.1)",
                    borderColor: "rgba(6, 167, 125, 1)",
                    pointBackgroundColor: "rgba(225, 225, 225, 1)",
                    pointBorderColor: "rgba(6, 167, 125, 1)",
                    pointHoverBackgroundColor: "rgba(6, 167, 125, 1)",
                    pointHoverBorderColor: "#fff"
                }, {
                    label: "High Dependency Unit",
                    data: source2,
                    borderWidth: 2,
                    backgroundColor: "rgba(246, 71, 64, 0.1)",
                    borderColor: "rgba(246, 71, 64, 1)",
                    pointBackgroundColor: "rgba(225, 225, 225, 1)",
                    pointBorderColor: "rgba(246, 71, 64, 1)",
                    pointHoverBackgroundColor: "rgba(246, 71, 64, 1)",
                    pointHoverBorderColor: "#fff"
                }, {
                    label: "Total Hospitalized",
                    data: source3,
                    borderWidth: 2,
                    backgroundColor: "rgba(26, 143, 227, 0.1)",
                    borderColor: "rgba(26, 143, 227, 1)",
                    pointBackgroundColor: "rgba(225, 225, 225, 1)",
                    pointBorderColor: "rgba(26, 143, 227, 1)",
                    pointHoverBackgroundColor: "rgba(26, 143, 227, 1)",
                    pointHoverBorderColor: "#fff"
                }, {
                    label: "Total Actually Positive",
                    data: source4,
                    borderWidth: 2,
                    backgroundColor: "rgba(274, 143, 227, 0.1)",
                    borderColor: "rgba(276, 143, 227, 1)",
                    pointBackgroundColor: "rgba(225, 225, 225, 1)",
                    pointBorderColor: "rgba(276, 143, 227, 1)",
                    pointHoverBackgroundColor: "rgba(26, 143, 227, 1)",
                    pointHoverBorderColor: "#fff"
                }, {
                    label: "Home Isoled",
                    data: source5,
                    borderWidth: 2,
                    backgroundColor: "rgba(283, 143, 242, 0.1)",
                    borderColor: "rgba(285, 143, 227, 1)",
                    pointBackgroundColor: "rgba(285, 225, 225, 1)",
                    pointBorderColor: "rgba(285, 143, 227, 1)",
                    pointHoverBackgroundColor: "rgba(285, 143, 227, 1)",
                    pointHoverBorderColor: "#fff"
                }, {
                    label: "New Positive",
                    data: source6,
                    borderWidth: 2,
                    backgroundColor: "rgba(139, 135, 236, 0.1)",
                    borderColor: "rgba(38, 32, 207, 1)",
                    pointBackgroundColor: "rgba(139, 135, 236)",
                    pointBorderColor: "rgba(139, 135, 236)",
                    pointHoverBackgroundColor: "rgba(139, 135, 236)",
                    pointHoverBorderColor: "#fff"
                }, {
                    label: "Recovered",
                    data: source7,
                    borderWidth: 2,
                    backgroundColor: "rgba(74, 240, 252, 0.1)",
                    borderColor: "rgba(5, 142, 152, 1)",
                    pointBackgroundColor: "rgba(74, 240, 252, 1)",
                    pointBorderColor: "rgba(74, 240, 252, 1)",
                    pointHoverBackgroundColor: "rgba(74, 240, 252, 1)",
                    pointHoverBorderColor: "#fff"
                }, {
                    label: "Death",
                    data: source8,
                    borderWidth: 2,
                    backgroundColor: "rgba(59, 57, 58, 0.1)",
                    borderColor: "rgba(13, 2, 11, 0.8)",
                    pointBackgroundColor: "rgba(13, 2, 11, 0.8)",
                    pointBorderColor: "rgba(13, 2, 11, 0.8)",
                    pointHoverBackgroundColor: "rgba(13, 2, 11, 0.8)",
                    pointHoverBorderColor: "#fff"
                }, {
                    label: "Total Cases",
                    data: source9,
                    borderWidth: 2,
                    backgroundColor: "rgba(221, 73, 28, 0.1)",
                    borderColor: "rgba(198, 54, 10, 0.8)",
                    pointBackgroundColor: "rgba(198, 54, 10, 0.8)",
                    pointBorderColor: "rgba(198, 54, 10, 0.8)",
                    pointHoverBackgroundColor: "rgba(198, 54, 10, 0.8)",
                    pointHoverBorderColor: "#fff"
                }, {
                    label: "Tests",
                    data: source10,
                    borderWidth: 2,
                    backgroundColor: "rgba(231, 235, 9, 0.1)",
                    borderColor: "rgba(163, 166, 22, 0.8)",
                    pointBackgroundColor: "rgba(163, 166, 22, 0.8)",
                    pointBorderColor: "rgba(163, 166, 22, 0.8)",
                    pointHoverBackgroundColor: "rgba(163, 166, 22, 0.8)",
                    pointHoverBorderColor: "#fff"
                }]
            }
        });
    });