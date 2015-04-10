var datas = require('./data/data').datas;
var _ = require('lodash');
var fs = require('fs');
// {
//         "type"    : "view",
//         "name"    : "db_view_1",
//         "depends" : [
//             "db_table_15",
//             "db_table_14",
//             "db_table_1"
//         ]
// }
// 

var edges = _.map(datas.edges, function(edge) {
	var obj = {};
	obj.name = edge.label;
	obj.source = edge.source;
	obj.target = edge.target;
	return obj;
})

var nodes = _.map(datas.nodes, function(node) {
	var obj = {};
	obj.name = node.label;
	obj.id = node.id;
	return obj;
})
// _.forEach({ 'a': 12, 'b': 21 }, function(n, key) {
//   console.log(n, key);
// });


// console.log(edges);
// console.log(nodes);
var arr  = [];
var newarr = []

for(var i = 0; i<datas.edges.length; i++) {
	for(var j = 0; j < datas.nodes.length; j++) {
		var source = datas.edges[i].source,
			target = datas.edges[i].target,
			obj = {};
		obj.type = datas.edges[i].label;
		obj.depends = [];

		if(datas.nodes[j].id == source) {
			obj.depends.push(datas.nodes[j].label);
			obj.target = target;
			arr.push(obj);
		}
	}
}

for(var i =0; i<arr.length; i++) {

	for(var k = 0; k<datas.nodes.length; k++) {

		if(datas.nodes[k].id == arr[i].target) {
			arr[i].name = datas.nodes[k].label;
			newarr.push(_.omit(arr[i], 'target'));
		}
	}
}
console.log(newarr);

fs.open("gongsi.json","w",function(err,fd){
		//	turn to string
	    var buf = new Buffer(JSON.stringify(newarr));
	    fs.writeSync(fd,buf,0,buf.length,0);
	})


