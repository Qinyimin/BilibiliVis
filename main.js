mainEcharts={

    "mainFunction" :function(d) {
        var myChart=echarts.init(document.getElementById("mainDiv"));
        option = {
            title: {
                text: "各分区信息统计条形堆叠图",
                textStyle:{
                    //文字颜色
                    color:'black'
                    /*        //字体风格,'normal','italic','oblique'
                            fontStyle:'normal',
                            //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                            fontWeight:'bold',
                            //字体系列
                            fontFamily:'sans-serif'
                            //字体大小
                            fontSize:18*/
                }
            },
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['播放量', '评论数','硬币数','弹幕数','收藏数','分享数']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis:  {
                type: 'value'
            },
            yAxis: {
                type: 'category',
                data: ['动画','番剧','国创','音乐','舞蹈','游戏','科技','生活','鬼畜','时尚','广告','娱乐','影视','电视剧','电影','纪录片']
            },
            series: [
                {
                    name: '播放量',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: false,
                            position: 'insideRight'
                        }
                    },
                    data: [151260705, 8125125, 24977931, 108017474, 32172546,858944578, 200359825, 686221029, 51698075, 67303701,1925825, 352171340, 322147291, 63619,130888,4183954]
                },
                {
                    name: '评论数',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: false,
                            position: 'insideRight'
                        }
                    },
                    data: [1065327	, 61831	, 186719	, 747984	, 181318	,5384889	, 1729263	, 3380339	, 182133	, 403346	,9908	, 1404215	, 1200214	, 295	,560	,16780	]
                },
                {
                    name: '硬币数',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: false,
                            position: 'insideRight'
                        }
                    },
                    data: [3141676	, 84976	, 335326	, 1565829	, 519548	,7105017	, 1118004	, 3829184	, 2037962	,685111	, 14229	, 1331818	, 1333431	, 215	,797	,28927	]
                },
                {
                    name: '弹幕数',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: false,
                            position: 'insideRight'
                        }
                    },
                    data: [1312765, 99643, 271747, 967770, 182061, 11327747, 1334771, 3835914, 324793, 670675, 16612, 3511038,  1720955,841	, 4301, 85949	]
                },
                {
                    name: '收藏数',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: false,
                            position: 'insideRight'
                        }
                    },
                    data: [6174814	, 302098	, 711193	, 3383098	, 1147546	,6376278	, 2577325	, 7545221	, 1591847	, 1749673	,32874	, 8405936	, 3401511	, 2530	,3389	,178994	]
                },
				{
                    name: '分享数',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: false,
                            position: 'insideRight'
                        }
                    },
                    data: [469559, 37762, 112771, 428229, 109943,2338251, 438762, 1586714, 541790, 157515,12413, 850277, 586937, 88,736,17309]
                },
            ]
        };


        myChart.setOption(option);
        myChart.on('click',function(params) {
            itemEcharts.itemFunction(params.name)
        });
        
    }
}

/*
mainEcharts={
	"mainFunction" : function() {
		//指定图表的配置项和数据
		//异步加载数据
		$.ajax({
			url: "json/main.json",
			dataType: 'json',
			success: function(d) {
				mainEcharts.main(d.data);
			},
			error: function(d) {
				alert("数据加载失败");
			}
		});
	},
	"main" :function(d) {
		var myChart=echarts.init(document.getElementById("mainDiv"));
		option = {
			title : {
				text: '近三年学科总开设期数统计',
				subtext: '纯属虚构',
				x:'center'
			},
			tooltip : {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
		legend: {
			orient: 'vertical',
			left: 'left',
			data: ['java','php','ui','web','bigdata']
		},
		series : [{
				name: '总开设期数',
				type: 'pie',
				radius : '55%',
				center: ['50%', '60%'],
				data: d,
				itemStyle: {
					emphasis: {
						shadowBlur: 10,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)'
					}
				}
			}
		]
	};
	myChart.setOption(option);
	myChart.on('click',function(params) {
		itemEcharts.itemFunction(params.name)
	});
	}
}
*/