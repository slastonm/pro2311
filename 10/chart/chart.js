window.onload=function(){
    let chartContainer = document.querySelector('.container');
    let data = [130, 100, 30, 80, 40, 10, 80, 10, 20, 30,40, 50, 10];

    function createChart(data, width, heiht, color){
        let chart = document.createElement('div');
        chart.style.width = width +'px';
        chart.style.height = heiht + 'px';
        chart.style.position = 'relative';

        let max = Number.NEGATIVE_INFINITY;
        for( let i=0; i<data.length; i++){
            if(max < data[i] ){
                max = data[i];
            }
        }
        let scale = heiht/ max;
        let barWidth = Math.floor(width/data.length);
        for(let i=0; i<data.length; i++){
            let bar = document.createElement('div');
            bar.style.height = data[i]*scale +'px';
            bar.style.width = barWidth -3 +'px';
            bar.style.position = 'absolute';
            bar.style.margin = '3px';
            bar.style.bottom = '0px';
            bar.style.left = barWidth*i +'px'
            bar.style.backgroundColor = color;
            chart.appendChild(bar);
        }

        return chart;

        
    }
    let chart = createChart(data, 900, 500, 'red');
    chartContainer.appendChild(chart);
}