radarEcharts={
    "radarFunction" : function(n) {
        //指定图表的配置项和数据
        //异步加载数据
        $.ajax({
            url: "json/radar.json",
            dataType: 'json',
            success: function(data) {
                var d=data.data;
                $.each(d, function(index, p) {
                    if(n == p.name) {
                        radarEcharts.radar(p.value, p.name,n);
                    }
                })
            },
            error: function(data) {
                alert("数据加载失败");
            }
        });
    },
    "radar" :function(valueArr,nameArr, n) {
        var myRadar=echarts.init(document.getElementById("radarDiv"));
        /*option = {
            color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '10%',   //距离容器左侧的距离
                right: '12%',	//
                bottom: '3%',
                containLabel: true	 //区域是否包含坐标轴的刻度标签
            },
            xAxis : [
                {
                    type : 'category',
                    name : '开课年份',
                    data : dataArr,
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    name : n+'开课期数'
                }
            ],
            series : [
                {
                    name:n,
                    type:'bar',
                    barWidth: '50%',
                    data:seriesArr
                }
            ]
        };*/
        option = {
            title: {
                text: '基础雷达图'
            },
            tooltip: {},
            /*
            legend: {
                data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
            },
            */
            radar: {
                // shape: 'circle',
                name: {
                    textStyle: {
                        color: '#fff',
                        backgroundColor: '#999',
                        borderRadius: 3,
                        padding: [3, 5]
                    }
                },
                //triggerEvent:true,
                indicator: [
                    { name: '播放量', max: 2725692},
                    { name: '弹幕数', max: 167271},
                    { name: '评论数', max: 45579},
                    { name: '收藏数', max: 98313},
                    { name: '硬币数', max: 270340},
                    { name: '分享数', max: 47340}
                ]
            },
            series: [{
                //name: '预算 vs 开销（Budget vs spending）',
                type: 'radar',
                // areaStyle: {normal: {}},
                data :
                    [{
                        value : valueArr,
                        name : nameArr
                    }]
            }]
        };



        myRadar.setOption(option);
/*
        myRadar.on('click', function (params) {
            //console.log(params)
            if(params.name=="播放量"){
                alert("aaa")
            }
        });*/
    }
}
