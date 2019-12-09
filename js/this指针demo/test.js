$().ready(function(){
	/**
	 *自调用，为全局变量创建一个类的构造函数
	 *
	 */
	(function(jquery){
		MyFrame=function(){
			console.log("window.MyFrame is called...")
			this.attr01='name';
			this.method01=function(){
				alert('hello');
			}
			this.method02=function(){
				alert(mid);
			}
			var mid='this is local variable';
			//下面的console测试this指针的对象
			console.log('要输出test的值');
			console.log(this.test);
		    return this;
		   }

	})($);

	function getMyself(){
		return this;
	}

	/**
	 * 下面是执行逻辑
	 */
/*	 //demo 01理解this的指向，和变量的作用域
	 var frameItn=MyFrame();
	 console.log(frameItn);			//window
	 console.log(frameItn.attr01);	//name
	 frameItn.method01();			//hello
	 frameItn.method02();			// this is  local variable
	 console.log(frameItn.mid);		//undefined
*/



 /*	//demo 01理解this的指向，和变量的作用域
	 var obj={
		 frameItn:MyFrame()
	 };

	 console.log(obj.frameItn);			//window
	 console.log(obj.frameItn.attr01);	//name
	 obj.frameItn.method01();			//hello
	 obj.frameItn.method02();			// this is  local variable
	 console.log(obj.frameItn.mid);		//undefined
*/

	document.MyFrame=function(){
		console.log("document.MyFrame is called...")
		return this;
	}

	var obj2={
		MyFrame:function(){
			console.log('obj2.MyFrame is called...');
			return 'this is obj2.MyFrame';
		},
		test:'这是给this指针测试用的变量',		//对象成员方法和全局方法同名，测试对象里的方法调用哪个
		MyFrame2:MyFrame,
		member:{
			frameItn:MyFrame()
		},
		member2:{
			frameItn:this.MyFrame()
		},
		member3:{
			 // frameItn:this.MyFrame2()				  //不注释这句会报错
		},
	}

	console.log(obj2.member);
	console.log(obj2.member2);


	var temp=getMyself();
	console.log(temp);
	console.log(this);
})
