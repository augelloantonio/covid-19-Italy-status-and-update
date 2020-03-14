// Trends Chart
function getTrendData() {
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
                }),
                source4 = result.map(function (e) {
                    return e.totale_attualmente_positivi;
                }),
                source5 = result.map(function (e) {
                    return e.isolamento_domiciliare;
                }),
                source6 = result.map(function (e) {
                    return e.nuovi_attualmente_positivi;
                }),
                source7 = result.map(function (e) {
                    return e.dimessi_guariti;
                }),
                source8 = result.map(function (e) {
                    return e.deceduti;
                }),
                source9 = result.map(function (e) {
                    return e.totale_casi;
                }),
                source10 = result.map(function (e) {
                    return e.tamponi;
                });

            var ctx = document.getElementById("trends_chart").getContext("2d");
            Chart.defaults.global.responsive = true;

            var trends_chart = new Chart(ctx, {
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
                        label: "Intensive Care Unit",
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
                        pointBackgroundColor: "rgba(26, 143, 227, 1)",
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
                        backgroundColor: "rgba(219, 178, 137, 0.1)",
                        borderColor: "rgba(123, 71, 19)",
                        pointBackgroundColor: "rgba(178, 96, 15, 1)",
                        pointBorderColor: "rgba(178, 96, 15, 1)",
                        pointHoverBackgroundColor: "rgba(178, 96, 15, 1)",
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
                },
                options: {
                    scales: {
                        xAxes: [{
                            ticks: {
                                fontSize: 10,
                            }
                        }]
                    }
                }
            });
        });
}

// Analysis of the spread between regions 

// Get Selection Value
function select_region() {
    var selected_region = document.getElementById("region_selection");
    region = selected_region.options[selected_region.selectedIndex].text;
    console.log(region)
    return region
}

region = select_region()

function getRegionData() {
    $.getJSON(
        'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json',
        function (result) {

            /*         
            // to unify results
            console.log(result);
                    grouped = _.indexBy(result, 'denominazione_regione');

                    console.log(grouped[region].) */

            var labels = result.map(function (e) {
                    if (e.denominazione_regione == region) {
                        date = e.data
                        console.log(e.data.lenght)
                        console.log(e.data)
                    }
                    return date
                }),
                source1 = result.map(function (e) {
                    if (e.denominazione_regione == region) {
                        return e.ricoverati_con_sintomi;
                    }
                }),
                source2 = result.map(function (e) {
                    if (e.denominazione_regione == region) {
                        return e.terapia_intensiva;
                    }
                }),
                source3 = result.map(function (e) {
                    if (e.denominazione_regione == region) {
                        return e.totale_ospedalizzati;
                    }
                }),
                source4 = result.map(function (e) {
                    if (e.denominazione_regione == region) {
                        return e.totale_attualmente_positivi;
                    }
                }),
                source5 = result.map(function (e) {
                    if (e.denominazione_regione == region) {
                        return e.isolamento_domiciliare;
                    }
                }),
                source6 = result.map(function (e) {
                    if (e.denominazione_regione == region) {
                        return e.nuovi_attualmente_positivi;
                    }
                }),
                source7 = result.map(function (e) {
                    if (e.denominazione_regione == region) {
                        return e.dimessi_guariti;
                    }
                }),
                source8 = result.map(function (e) {
                    if (e.denominazione_regione == region) {
                        return e.deceduti;
                    }
                }),
                source9 = result.map(function (e) {
                    if (e.denominazione_regione == region) {
                        return e.totale_casi;
                    }
                }),
                source10 = result.map(function (e) {
                    if (e.denominazione_regione == region) {
                        return e.tamponi;
                    }
                });


            var ctx2 = document.getElementById("regions_chart").getContext("2d");
            var regions_chart = new Chart(ctx2, {
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
                        pointHoverBorderColor: "#fff",
                        spanGaps: true,
                    }, {
                        label: "Intensive Care Unit",
                        data: source2,
                        borderWidth: 2,
                        backgroundColor: "rgba(246, 71, 64, 0.1)",
                        borderColor: "rgba(246, 71, 64, 1)",
                        pointBackgroundColor: "rgba(225, 225, 225, 1)",
                        pointBorderColor: "rgba(246, 71, 64, 1)",
                        pointHoverBackgroundColor: "rgba(246, 71, 64, 1)",
                        pointHoverBorderColor: "#fff",
                        spanGaps: true,
                    }, {
                        label: "Total Hospitalized",
                        data: source3,
                        borderWidth: 2,
                        backgroundColor: "rgba(26, 143, 227, 0.1)",
                        borderColor: "rgba(26, 143, 227, 1)",
                        pointBackgroundColor: "rgba(26, 143, 227, 1)",
                        pointBorderColor: "rgba(26, 143, 227, 1)",
                        pointHoverBackgroundColor: "rgba(26, 143, 227, 1)",
                        pointHoverBorderColor: "#fff",
                        spanGaps: true,
                    }, {
                        label: "Total Actually Positive",
                        data: source4,
                        borderWidth: 2,
                        backgroundColor: "rgba(274, 143, 227, 0.1)",
                        borderColor: "rgba(276, 143, 227, 1)",
                        pointBackgroundColor: "rgba(225, 225, 225, 1)",
                        pointBorderColor: "rgba(276, 143, 227, 1)",
                        pointHoverBackgroundColor: "rgba(26, 143, 227, 1)",
                        pointHoverBorderColor: "#fff",
                        spanGaps: true,
                    }, {
                        label: "Home Isoled",
                        data: source5,
                        borderWidth: 2,
                        backgroundColor: "rgba(219, 178, 137, 0.1)",
                        borderColor: "rgba(123, 71, 19)",
                        pointBackgroundColor: "rgba(178, 96, 15, 1)",
                        pointBorderColor: "rgba(178, 96, 15, 1)",
                        pointHoverBackgroundColor: "rgba(178, 96, 15, 1)",
                        pointHoverBorderColor: "#fff",
                        spanGaps: true,
                    }, {
                        label: "New Positive",
                        data: source6,
                        borderWidth: 2,
                        backgroundColor: "rgba(139, 135, 236, 0.1)",
                        borderColor: "rgba(38, 32, 207, 1)",
                        pointBackgroundColor: "rgba(139, 135, 236)",
                        pointBorderColor: "rgba(139, 135, 236)",
                        pointHoverBackgroundColor: "rgba(139, 135, 236)",
                        pointHoverBorderColor: "#fff",
                        spanGaps: true,
                    }, {
                        label: "Recovered",
                        data: source7,
                        borderWidth: 2,
                        backgroundColor: "rgba(74, 240, 252, 0.1)",
                        borderColor: "rgba(5, 142, 152, 1)",
                        pointBackgroundColor: "rgba(74, 240, 252, 1)",
                        pointBorderColor: "rgba(74, 240, 252, 1)",
                        pointHoverBackgroundColor: "rgba(74, 240, 252, 1)",
                        pointHoverBorderColor: "#fff",
                        spanGaps: true,
                    }, {
                        label: "Death",
                        data: source8,
                        borderWidth: 2,
                        backgroundColor: "rgba(59, 57, 58, 0.1)",
                        borderColor: "rgba(13, 2, 11, 0.8)",
                        pointBackgroundColor: "rgba(13, 2, 11, 0.8)",
                        pointBorderColor: "rgba(13, 2, 11, 0.8)",
                        pointHoverBackgroundColor: "rgba(13, 2, 11, 0.8)",
                        pointHoverBorderColor: "#fff",
                        spanGaps: true,
                    }, {
                        label: "Total Cases",
                        data: source9,
                        borderWidth: 2,
                        backgroundColor: "rgba(221, 73, 28, 0.1)",
                        borderColor: "rgba(198, 54, 10, 0.8)",
                        pointBackgroundColor: "rgba(198, 54, 10, 0.8)",
                        pointBorderColor: "rgba(198, 54, 10, 0.8)",
                        pointHoverBackgroundColor: "rgba(198, 54, 10, 0.8)",
                        pointHoverBorderColor: "#fff",
                        spanGaps: true,
                    }, {
                        label: "Tests",
                        data: source10,
                        borderWidth: 2,
                        backgroundColor: "rgba(231, 235, 9, 0.1)",
                        borderColor: "rgba(163, 166, 22, 0.8)",
                        pointBackgroundColor: "rgba(163, 166, 22, 0.8)",
                        pointBorderColor: "rgba(163, 166, 22, 0.8)",
                        pointHoverBackgroundColor: "rgba(163, 166, 22, 0.8)",
                        pointHoverBorderColor: "#fff",
                        spanGaps: true,
                    }]
                },
                options: {
                    scales: {
                        xAxes: [{
                            ticks: {
                                fontSize: 10,
                            },
                            gridLines: {
                                offsetGridLines: true,
                                drawOnChartArea: true
                            }
                        }]
                    }
                }
            });

        });
}

getTrendData();
getRegionData();

// Auto refresh the json to check if there are new data
var previous = null;
var current = null;

setInterval(function () {
    $.getJSON('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json', function (json) {
        current = JSON.stringify(json);
        if (previous && current && previous !== current) {
            console.log('refresh');
            location.reload();
        }
        previous = current;
    });
}, 2000);

setInterval(getTrendData());