$(document).ready(function () {
    const url = 'http://localhost:5000/api/countries';
    fetch(url)
        .then(resp => resp.json())
        .then(data => postDataToChat(data))
        .catch(error => {
            console.log(error);
        });
    const postDataToChat = (data) => {
        Highcharts.mapChart('container', {
            chart: {
                map: 'countries/ug/ug-all'
            },
            title: {
                text: 'Highmaps basic demo'
            },
            subtitle: {
                text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/ug/ug-all.js">Uganda</a>'
            },
            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
            },
            colorAxis: {
                min: 0
            },
            series: [{
                data: data,
                name: 'Random data',
                states: {
                    hover: {
                        color: '#bada55'
                    }
                },
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }]
        });

    }

});
