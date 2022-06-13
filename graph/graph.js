let myChart = document.getElementById('myChart').getContext('2d');
        let prices = [];
        let things = [];

        Chart.defaults.global.defaultFontFamily = 'Lato';
        Chart.defaults.global.defaultFontSize = 20;
        Chart.defaults.global.defaultFontColor = '#777';

        prices.push(200)
        things.push('car')
        
        prices.push(2000)
        things.push('컴퓨터')

        prices.push(9000)
        things.push('집')

        prices.push(900)
        things.push('음식')

        prices.push(2500)
        things.push('옷')

        import {historyList} from './expenditure/expenditure.js';
        console.log(historyList)

        let massPriceChart = new Chart(myChart, {
            type:'bar', // 다양한 모양의 그래프 ex) horizontal, bar, pie, line, doughnut, radar
            data:{
                labels: things,
                datasets: [{
                    labels: ["Price"],
                    data: prices,
                    backgroundColor:[
                        '#40E0D0',
                        '#48D1CC',
                        '#00CED1',
                        '#20B2AA',
                        '#5F9EA0',
                        '#008B8B',
                        '#008080',
                        '#00FFFF',
                        '#7FFFD4',
                        '#66CDAA',
                        '#87CEFA',
                        '#00BFFF',
                    ],
                    borderWidth: 2,
                    borderColor: '#777',
                    hoverBorderColor: '#000',
                    hoverBorderWidth: 3,
                }],
            },
            options: {
                legend: { 
                    position: 'right',
                    labels:{
                        fontColor: '#000',
                    }
                },
                title: {
                display: true,
                text: 'Price Graph',
                fontSize: 25,
                },
                layout:{
                    padding:{
                        top: 0,
                        left: 50,
                        right: 0,
                        bottom: 0,
                    }
                }
            }
        });
        console.log(massPriceChart.data.datasets[0].data)
        console.log(massPriceChart.data.labels)