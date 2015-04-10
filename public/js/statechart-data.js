var skillsdata;

skillsdata = {
  "中新恒超投资": {
    "仓储物流业": {
      "物流业": {
        "通辽市金港物流集团有限公司": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 3990],
    }
	},
    "服务业": {
      /*"租赁和商业服务": {
        "房屋租赁": {
          "中新恒超实业有限公司": [0, 0, 10, 30, 60, 60, 40, 20, 20, 20, 20, 20, 20, 20, 3000],
          "北京兴地矿业投资有限公司": [0, 0, 0, 0, 0, 0, 10, 30, 70, 80, 90, 90, 90, 90, 15]
        }
		},*/
       "软件和信息技术服务": {
        "科技开发": {
          "北京汉华大地科技开发有限公司": [0, 0, 10, 30, 60, 60, 40, 20, 20, 20, 20, 20, 20, 20, 200],
          "菠萝海创新科技(北京)有限公司": [0, 0, 0, 0, 0, 0, 10, 30, 70, 80, 90, 90, 90, 90,100],
        }
		},
       "其他服务业": {
        "市场服务": {
          "通辽市金港市场有限公司": [0, 0, 10, 30, 60, 60, 40, 20, 20, 20, 20, 20, 20, 20, 90]
		  }
		},
    },
    "房地产业": {
      "住宅": {
       // "呼伦贝尔会英房地产开发有限公司": [0, 0, 0, 0, 0, 0, 20, 50, 70, 80, 90, 95, 95, 95, 800],
        "呼伦贝尔中超房地产开发有限公司": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 200],
        "内蒙古中景房地产开发有限公司": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 30, 2100]
      },
      "商业房地产": {
       //"通辽市金港房地产开发有限公司": [0, 0, 10, 30, 50, 50, 60, 60, 60, 80, 80, 60, 50, 50, 2000],
        "包头北方智德置业有限责任公司": [0, 0, 0, 0, 20, 20, 30, 30, 40, 30, 20, 20, 20, 20, 4950],
      },
    },
    "新材料业": {
      "阻燃新材料开发与生产": {
        "中鑫泰新材料科技有限公司": [0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 25, 20, 20, 3250.65],
      },
    },
	 "文化艺术": {
      "文化传播": {
        "北京吉辰达文化传播有限公司": [0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 25, 20, 20, 16],
      }
    },
	"矿业": {
      "有色金属": {
        "贵州省习水县龙涛矿业有限公司": [0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 25, 20, 20, 120],
        "习水县中新矿业有限公司": [0, 0, 0, 0, 0, 0, 0, 0, 5, 10, 5, 5, 15, 5, 1200]
      },
	  "煤炭": {
        "呼伦贝尔市顺新煤炭经销有限公司": [0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 25, 20, 20, 98],
      },
	  "石化（化学）": {
       //"满洲里基洛夫石化有限公司": [0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 25, 20, 20, 6500],
        "湛江开发区恒超石化有限公司": [0, 0, 0, 0, 0, 0, 0, 0, 5, 10, 5, 5, 15, 5, 200],
		"陈巴尔虎华实经贸有限公司":[0, 0, 0, 0, 0, 0, 0, 0, 5, 10, 5, 5, 15, 5, 1000],
        "黑龙江蒙龙经贸有限公司":[0, 0, 0, 0, 0, 0, 0, 0, 5, 10, 5, 5, 15, 5, 800],
      },
      "陵园墓碑石材":{
          "易县永安陵园有限公司": [0, 0, 0, 0, 0, 0, 10, 30, 70, 80, 90, 90, 90, 90,1800]
        }	  
	  },
	 "农林牧副渔业": {
      "农业": {
        //"呼和浩特市正大华兴农业生产资料有限责任公司": [0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 25, 20, 20, 30],
        "中草生态农业股份有限公司": [0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 25, 20, 20, 0.01],
      },
      "畜牧业": {
        "内蒙古英伦畜牧业科技发展有限公司": [0, 0, 0, 0, 0, 0, 0, 0, 5, 10, 5, 5, 15, 5, 350],
      }
	  },
	  "金融": {
        "投资": {
         // "中汇联国际投资有限公司": [0, 0, 0, 0, 0, 0, 40, 20, 20, 20, 20, 20, 20, 20, 0.05],
          "北京基洛夫投资有限公司": [0, 0, 0, 0, 0, 0, 10, 30, 70, 80, 90, 90, 90, 90, 339.01],
		  "中正天泰投资管理有限公司": [0, 0, 0, 0, 0, 0, 10, 30, 70, 80, 90, 90, 90, 90, 9990],
        },
	    "保理业务": {
          "中债商业保理有限公司": [0, 0, 0, 30, 60, 60, 40, 20, 20, 20, 20, 20, 20, 20, 10000],
		}
		},
    }
};