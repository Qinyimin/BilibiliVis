/*
$(document).ready(function(){
    var danmukuDensityChart = document.getElementById('danmuku_density_chart');
    var chartData = echarts.init(danmukuDensityChart);

    chartData.setOption({
        title: {
            text: '弹幕密度图'
        },
        tooltip: {},
        legend: {
            data:['弹幕']
        },
        xAxis: {
            data: []
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'line',
            areaStyle: {},
            data: []
        }]
    });

    $.get('json/av23094684.json').done(function (data) {

        console.dir(data);
        // 填入数据
        chartData.setOption({
            xAxis: {
                data: []
            },
            series: [{
                name: '弹幕',
                data: data
            }]
        });
    });

    function eConsole(param)
    {
        console.dir(param);
    }

    chartData.on("click",eConsole);
});*/

dmflowEcharts={
    "dmflowFunction" : function(n) {
        //指定图表的配置项和数据
        //异步加载数据
        $.ajax({
            url: "json/dmflow.json",
            dataType: 'json',
            success: function(data) {
                var d=data.data;
                $.each(d, function(index, p) {
                    if(n == p.name) {
                        dmflowEcharts.dmflow(p.value, p.name,n);
                    }
                })
            },
            error: function(data) {
                alert("数据加载失败");
            }
        });
    },
    "dmflow" :function(valueArr,nameArr, n) {
        var myDMflow=echarts.init(document.getElementById("danmuku_density_chart"));

        option = {
            title: {
                text: '弹幕密度图'
            },
            tooltip: {},
            legend: {
                data:['弹幕']
            },
            xAxis: {
                data: []
            },
            yAxis: {},
            series: [{
                name: nameArr+'的弹幕',
                type: 'line',
                areaStyle: {},
                data: valueArr
            }]
        };

        myDMflow.setOption(option);
    }
}
