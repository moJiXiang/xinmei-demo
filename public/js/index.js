// 路径配置
require.config({
    paths: {
        echarts: 'http://echarts.baidu.com/build/dist'
    }
});

// 使用
require(
    [
        'echarts',
        'echarts/chart/eventRiver'
        // 使用柱状图就加载bar模块，按需加载
    ],

    function(ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('main'));
        var option = {
            title: {
                text: 'Event River',
                subtext: '纯属虚构'
            },
            tooltip: {
                trigger: 'item',
                enterable: true
            },
            legend: {
                data: ['王坚峰', '北京和风顺科技有限公司', '满洲里恒超经贸有限公司', '王玉光', '王忠明', '中新恒超实业有限公司']
            },
            toolbox: {
                show: true,
                feature: {
                    mark: {
                        show: true
                    },
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                }
            },
            xAxis: [{
                type: 'time',
                boundaryGap: [0.05, 0.1]
            }],
            series: [{
                "name": "王坚峰",
                "type": "eventRiver",
                "weight": 123,
                "data": [{
                    "name": "北京吉辰达文化传播有限公司",
                    "weight": 123,
                    "evolution": [{
                        "time": "2003-2-21",
                        "value": 16,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "投资16万元",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }, {
                        "time": "2007-1-10",
                        "value": 30,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "吊销",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }, {
                        "time": "2008-6-20",
                        "value": 10,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "注销",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }]
                }, {
                    "name": "湛江开发区恒超石化有限公司",
                    "weight": 123,
                    "evolution": [{
                        "time": "2006-4-6",
                        "value": 12.5,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "投资200万元",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }, {
                        "time": "2015-4-1",
                        "value": 10,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "在营",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }]
                }, {
                    "name": "北京兴地矿业投资有限公司",
                    "weight": 123,
                    "evolution": [{
                        "time": "2006-4-20",
                        "value": 0.75,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "投资15万元",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }, {
                        "time": "2015-4-1",
                        "value": 10,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "在营",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }]
                }, {
                    "name": "陈巴尔虎华实经贸有限公司",
                    "weight": 123,
                    "evolution": [{
                        "time": "2006-4-27",
                        "value": 49.5,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "投资1000万元",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }, {
                        "time": "2010-8-24",
                        "value": 10,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "注销",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }]
                }, {
                    "name": "北京汉华大地科技开发有限公司",
                    "weight": 123,
                    "evolution": [{
                        "time": "2006-8-25",
                        "value": 20,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "投资200万元",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }, {
                        "time": "2008-12-30",
                        "value": 30,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "吊销",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }, {
                        "time": "2009-1-13",
                        "value": 10,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "注销",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }]
                }, {
                    "name": "通辽市金港市场有限公司",
                    "weight": 123,
                    "evolution": [{
                        "time": "2006-12-1",
                        "value": 50,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "投资100万元",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }, {
                        "time": "2011-11-13",
                        "value": 10,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "注销",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }]
                }, {
                    "name": "呼伦贝尔中超房地产开发有限公司",
                    "weight": 123,
                    "evolution": [{
                        "time": "2007-9-17",
                        "value": 2,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "投资200万元",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }, {
                        "time": "2015-4-1",
                        "value": 10,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "在营",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }]
                }, {
                    "name": "黑龙江蒙龙经贸有限公司",
                    "weight": 123,
                    "evolution": [{
                        "time": "2009-4-23",
                        "value": 40,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "投资800万元",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }, {
                        "time": "2015-4-1",
                        "value": 10,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "在营",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }]
                }, {
                    "name": "通辽市金港物流集团有限公司",
                    "weight": 123,
                    "evolution": [{
                        "time": "2010-12-28",
                        "value": 49.87,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "投资3990万元",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }, {
                        "time": "2015-4-1",
                        "value": 10,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "在营",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }]
                }, {
                    "name": "易县永安陵园有限公司",
                    "weight": 123,
                    "evolution": [{
                        "time": "2011-1-14",
                        "value": 30,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "投资1800万元",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }, {
                        "time": "2015-4-1",
                        "value": 10,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "在营",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }]
                }, {
                    "name": "呼伦贝尔市顺新煤炭经销有限公司",
                    "weight": 123,
                    "evolution": [{
                        "time": "2011-1-17",
                        "value": 24.5,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "投资98万元",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }, {
                        "time": "2015-4-1",
                        "value": 10,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "在营",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }]
                }, {
                    "name": "内蒙古中景房地产开发有限公司",
                    "weight": 123,
                    "evolution": [{
                        "time": "2012-3-20",
                        "value": 25,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "投资2100万元",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }, {
                        "time": "2015-4-1",
                        "value": 10,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "在营",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }]
                }, {
                    "name": "内蒙古英伦畜牧业科技发展有限公司",
                    "weight": 123,
                    "evolution": [{
                        "time": "2012-9-24",
                        "value": 35,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "投资350万元",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }, {
                        "time": "2015-4-1",
                        "value": 10,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "在营",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }]
                }, {
                    "name": "中鑫泰新材料科技有限公司",
                    "weight": 123,
                    "evolution": [{
                        "time": "2014-4-10",
                        "value": 32.5,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "投资3250.65万元",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }, {
                        "time": "2015-4-1",
                        "value": 10,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "在营",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }]
                }, {

                    "name": "北京基洛夫投资有限公司",
                    "weight": 3.26,
                    "evolution": [{
                        "time": "2003-2-23",
                        "value": 16,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "投资339.01万元",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }, {
                        "time": "2015-4-1",
                        "value": 10,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "在营",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }]
                }]
            }, {
                "name": "王忠明",
                "type": "eventRiver",
                "weight": 123,
                "data": [{
                    "name": "呼和浩特市正大华兴农业生产资料有限责任公司",
                    "weight": 123,
                    "evolution": [{
                        "time": "2003-9-1",
                        "value": 30,
                        "detail": {
                            //"link": "www.baidu.com", 
                            "text": "已投资30万元",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }, {
                        "time": "2009-10-30",
                        "value": 30,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "吊销",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }]
                }, {
                    "name": "通辽市金港房地产开发有限公司",
                    "weight": 123,
                    "evolution": [{
                        "time": "2007-12-12",
                        "value": 20,
                        "detail": {
                            //"link": "www.baidu.com", 
                            "text": "已投资2000万元",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }, {
                        "time": "2015-4-1",
                        "value": 10,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "在营",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }]
                }, {
                    "name": "通辽市金港物业服务有限公司",
                    "weight": 123,
                    "evolution": [{
                        "time": "2010-8-30",
                        "value": 15,
                        "detail": {
                            //"link": "www.baidu.com", 
                            "text": "已投资90万元",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }, {
                        "time": "2015-4-1",
                        "value": 10,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "在营",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }]
                }, {
                    "name": "北京兴地矿业投资有限公司",
                    "weight": 123,
                    "evolution": [{
                        "time": "2006-4-20",
                        "value": 49.25,
                        "detail": {
                            //"link": "www.baidu.com", 
                            "text": "已投资985万元",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }, {
                        "time": "2015-4-1",
                        "value": 10,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "在营",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }]
                }]
            }, {
                "name": "王玉光",
                "type": "eventRiver",
                "weight": 123,
                "data": [{
                    "name": "呼伦贝尔中超房地产开发有限公司",
                    "weight": 123,
                    "evolution": [{
                        "time": "2007-9-17",
                        "value": 48,
                        "detail": {
                            //"link": "www.baidu.com", 
                            "text": "已投资4800万元",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }, {
                        "time": "2015-4-1",
                        "value": 10,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "在营",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }]
                }, {
                    "name": "易县永安陵园有限公司",
                    "weight": 123,
                    "evolution": [{
                        "time": "2011-1-14",
                        "value": 5,
                        "detail": {
                            //"link": "www.baidu.com", 
                            "text": "已投资300万元",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }, {
                        "time": "2015-4-1",
                        "value": 10,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "在营",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }]
                }, {
                    "name": "中汇联国际投资有限公司",
                    "weight": 123,
                    "evolution": [{
                        "time": "2011-9-2",
                        "value": 0.005,
                        "detail": {
                            //"link": "www.baidu.com", 
                            "text": "已投资0万元",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }, {
                        "time": "2015-4-1",
                        "value": 10,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "在营",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }]
                }]
            }, {
                "name": "北京和风顺科技有限公司",
                "type": "eventRiver",
                "weight": 123,
                "data": [{
                    "name": "满洲里基洛夫石化有限公司",
                    "weight": 123,
                    "evolution": [{
                        "time": "2004-11-22",
                        "value": 50,
                        "detail": {
                            //"link": "www.baidu.com", 
                            "text": "已投资6500万元",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }, {
                        "time": "2015-4-1",
                        "value": 10,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "在营",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }]
                }, {
                    "name": "中新恒超实业有限公司",
                    "weight": 123,
                    "evolution": [{
                        "time": "2006-6-5",
                        "value": 15,
                        "detail": {
                            //"link": "www.baidu.com", 
                            "text": "已投资3000万元",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }, {
                        "time": "2015-4-1",
                        "value": 10,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "在营",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }]
                }, {
                    "name": "中汇联国际投资有限公司",
                    "weight": 123,
                    "evolution": [{
                        "time": "2011-9-2",
                        "value": 0.005,
                        "detail": {
                            //"link": "www.baidu.com", 
                            "text": "已投资0万元",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }, {
                        "time": "2015-4-1",
                        "value": 10,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "在营",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }]
                }]
            }, {
                "name": "满洲里恒超经贸有限公司",
                "type": "eventRiver",
                "weight": 123,
                "data": [{
                    "name": "湛江开发区恒超石化有限公司",
                    "weight": 123,
                    "evolution": [{
                        "time": "2006-4-6",
                        "value": 37.5,
                        "detail": {
                            //"link": "www.baidu.com", 
                            "text": "已投资600万元",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }, {
                        "time": "2015-4-1",
                        "value": 10,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "在营",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }]
                }, {
                    "name": "呼伦贝尔会英房地产开发有限公司",
                    "weight": 123,
                    "evolution": [{
                        "time": "2008-5-21",
                        "value": 40,
                        "detail": {
                            //"link": "www.baidu.com", 
                            "text": "已投资800万元",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }, {
                        "time": "2015-4-1",
                        "value": 10,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "在营",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }]
                }]
            }, {
                "name": "中新恒超实业有限公司",
                "type": "eventRiver",
                "weight": 123,
                "data": [{
                    "name": "贵州省习水县龙涛矿业有限公司",
                    "weight": 123,
                    "evolution": [{
                        "time": "2005-1-10",
                        "value": 40,
                        "detail": {
                            //"link": "www.baidu.com", 
                            "text": "已投资120万元",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }, {
                        "time": "2015-4-1",
                        "value": 10,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "在营",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }]
                }, {
                    "name": "习水县中新矿业有限公司",
                    "weight": 123,
                    "evolution": [{
                        "time": "2008-7-16",
                        "value": 40,
                        "detail": {
                            //"link": "www.baidu.com", 
                            "text": "已投资1200万元",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }, {
                        "time": "2015-4-1",
                        "value": 10,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "在营",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }]
                }, {
                    "name": "包头北方智德置业有限责任公司",
                    "weight": 123,
                    "evolution": [{
                        "time": "2009-7-23",
                        "value": 49.5,
                        "detail": {
                            //"link": "www.baidu.com", 
                            "text": "已投资4950万元",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }, {
                        "time": "2015-4-1",
                        "value": 10,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "在营",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }]
                }, {
                    "name": "菠萝海创新科技(北京)有限公司",
                    "weight": 123,
                    "evolution": [{
                        "time": "2011-7-21",
                        "value": 50,
                        "detail": {
                            //"link": "www.baidu.com", 
                            "text": "已投资100万元",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }, {
                        "time": "2015-4-1",
                        "value": 10,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "在营",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }]
                }, {
                    "name": "中正天泰投资管理有限公司",
                    "weight": 123,
                    "evolution": [{
                        "time": "2014-5-9",
                        "value": 49.9,
                        "detail": {
                            //"link": "www.baidu.com", 
                            "text": "已投资9990万元",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }, {
                        "time": "2015-4-1",
                        "value": 10,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "在营",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }]
                }, {
                    "name": "中草生态农业股份有限公司",
                    "weight": 123,
                    "evolution": [{
                        "time": "2014-10-13",
                        "value": 0.005,
                        "detail": {
                            //"link": "www.baidu.com", 
                            "text": "已投资0万元",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }, {
                        "time": "2015-4-1",
                        "value": 10,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "在营",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }]
                }, {
                    "name": "中债商业保理有限公司",
                    "weight": 123,
                    "evolution": [{
                        "time": "2014-11-10",
                        "value": 50,
                        "detail": {
                            //"link": "www.baidu.com", 
                            "text": "已投资10000万元",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }, {
                        "time": "2015-4-1",
                        "value": 10,
                        "detail": {
                            //"link": "http://www.baidu.com", 
                            "text": "在营",
                            //"img": '../asset/ico/favicon.png'
                        }
                    }]
                }]
            }]
        };
        myChart.setOption(option);
    }
);