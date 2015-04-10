var datas = require('./newdata').datas;
var _ = require('lodash');
var fs = require('fs');

var arr  = [];
var personarr = [];
var companyarr = [];
var persons = [];
var company = [];
// 得到人物名称
for(var i = 0; i<datas.length; i++) {
	persons.push(datas[i].person);
}
persons = _.uniq(persons);

// 得到公司
for(var i = 0; i<datas.length; i++) {
	company.push(datas[i].company);
}
company = _.uniq(company);

for(var i = 0; i < persons.length; i++) {
	var obj = {};
	obj.depends = [];
	obj.name = persons[i];
	for (var j = 0; j<datas.length; j++) {

		if (datas[j]['person'] == persons[i]) {
			obj.type = datas[j]["relation"];
			obj.depends.push(datas[j]["company"]);
		}
	}
	personarr.push(obj);
}

for(var i = 0; i<company.length; i++){
	var obj = {};
	obj["name"] = company[i];
	obj["depends"] = [];
	obj["type"] = '公司';
	companyarr.push(obj);
}

var unionarr = _.union(personarr, companyarr);
// console.log(unionarr);


fs.open("releation.json","w",function(err,fd){
		//	turn to string
	    var buf = new Buffer(JSON.stringify(unionarr));
	    fs.writeSync(fd,buf,0,buf.length,0);
	})