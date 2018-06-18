imageEcharts={
    "imageFunction" : function(n) {
        //指定图表的配置项和数据
        //异步加载数据
        $.ajax({
            url: "json/image.json",
            dataType: 'json',
            success: function(data) {
                var d=data.data;
                $.each(d, function(index, p) {
                    if(n == p.name) {
                        imageEcharts.imagef(p.url, p.name,n);
                    }
                })
            },
            error: function(data) {
                alert("数据加载失败");
            }
        });
    },
    "imagef" :function(urlArr,nameArr, n) {
        var myImage=echarts.init(document.getElementById("imgPre"));
        imageEcharts.preImg('imgPre',urlArr);

    },
    "preImg":function (targetId,urlArr) {
        //var url = getFileUrl(sourceId);
        var imgPre = document.getElementById(targetId);
        imgPre.src = urlArr;
    }
    /*,
    "getFileUrl":function (sourceId) {
        var url;
        if (navigator.userAgent.indexOf("MSIE")>=1) { // IE
            url = document.getElementById(sourceId).value;
        }
        else if(navigator.userAgent.indexOf("Firefox")>0) { // Firefox
            url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0));
        }
        else if(navigator.userAgent.indexOf("Chrome")>0) { // Chrome
            url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0));
        }
        return url;
    }
    */
}
