define([],function  () {
	return function  () {
		this.name="jone";
		this.mySub=function  (str) {
			if(typeof(str)!="undefined")
			return str.substring(2);
		}
	}
});