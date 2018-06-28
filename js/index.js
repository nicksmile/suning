window.onload=function(){
	// 导航栏
	let mianl=document.getElementsByClassName("mianl")[0];
	let a=mianl.getElementsByTagName("a");
	let wzbox=mianl.getElementsByClassName("wzbox")[0];
	let sjbox=mianl.getElementsByClassName("sjbox")[0];
	let kfbox=mianl.getElementsByClassName("kfbox")[0];
	let ddbox=mianl.getElementsByClassName("ddbox")[0];
	let ygbox=mianl.getElementsByClassName("ygbox")[0];
	let yanbox=mianl.getElementsByClassName("yanbox")[0];
	let snbox=mianl.getElementsByClassName("snbox")[0];
	// console.log(a,wzbox,sjbox,kfbox,ddbox,ygbox,yanbox,snbox);
		// 网站
		a[0].onmouseenter=function(){
			wzbox.style.height="240px";
			a[0].style.background="#fffffff";

		}
		a[0].onmouseleave=function(){
			wzbox.style.height="0";
			a[0].style.background="none";
		}
		// 商家
		a[1].onmouseenter=function(){
			sjbox.style.height="124px";
		}
		a[1].onmouseleave=function(){
			sjbox.style.height="0";
		}
		// 客服
		a[2].onmouseenter=function(){
			kfbox.style.height="124px";
		}
		a[2].onmouseleave=function(){
			kfbox.style.height="0";
		}
		// 我的订单
		a[6].onmouseenter=function(){
			ddbox.style.height="126px";
		}
		a[6].onmouseleave=function(){
			ddbox.style.height="0";
		}
		// 我的易购
		a[7].onmouseenter=function(){
			ygbox.style.height="162px";
		}
		a[7].onmouseleave=function(){
			ygbox.style.height="0";
		}
		// 购物车
		a[9].onmouseenter=function(){
			yanbox.style.height="402px";
		}
		a[9].onmouseleave=function(){
			yanbox.style.height="0";
		}
		// 手机苏宁
		a[12].onmouseenter=function(){
			snbox.style.height="242px";
		}
		a[12].onmouseleave=function(){
			snbox.style.height="0";
		}
	//
	//
	//侧导航栏
	let bal=document.getElementsByClassName("bal")[0];
	let lis=bal.getElementsByTagName("li");
	let balbox=bal.getElementsByClassName("balbox");
	// console.log(lis,balbox);
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseenter=function(){
			for(let j=0;j<lis.length;j++){
				balbox[j].style.width="0";
			}
			balbox[i].style.width="1000px";
		}
		lis[i].onmouseleave=function(){
			balbox[i].style.width="0";
		}
	}
	//轮播图
    let btpbox=document.querySelector(".btpbox");
	let btp=btpbox.querySelector(".btp");
	let img=btp.querySelectorAll("ul li");
	let btd=document.querySelector(".btd");
	let btdd=btd.querySelectorAll(".btdd");
    let jianl=document.querySelector(".jianl");
    let jianr=document.querySelector(".jianr");
    let width=parseInt(getComputedStyle(btpbox,null).width);
    console.log(img,btpbox,btdd,jianl,jianr,width);
    let current=0,next=0;
    img[0].style.left="0";
    btdd[0].classList.add("hot");
    let t=setInterval(move,2000);
    let flag=true;
    btpbox.onmouseenter=function () {
        clearInterval(t);
    };
    btpbox.onmouseleave=function () {
        t=setInterval(move,2000);
    };
    jianr.onclick=function () {
        if(!flag){
            return;
        }
        flag=false;
        move();
    };
    jianl.onclick=function () {
        if(!flag){
            return;
        }
        flag=false;
        movel();
    };
    function move() {
        next++;
        if(next==img.length){
            next=0;
        }
        btdd[current].classList.remove("hot");
        btdd[next].classList.add("hot");
        img[next].style.left=`${width}px`;
        animate(img[current],{left:-width});
        animate(img[next],{left:0},function () {
            flag=true;
        });
        //自己没懂
        current=next;
    }
    function movel() {
        next--;
        if(next<0){
            next=img.length-1;
        }
        btdd[current].classList.remove("hot");
        btdd[next].classList.add("hot");
        img[next].style.left=`${-width}px`;
        animate(img[current],{left:width});
        animate(img[next],{left:0},function () {
            flag=true;
        });
        current=next
    }
    btdd.forEach(function (element, index, listObj) {
        btdd[index].onclick=function () {
            btdd[current].classList.remove("hot");
            btdd[index].classList.add("hot");
            if(current<index){
                img[index].style.left=`${width}px`;
                animate(img[current],{left:-width});
                animate(img[index],{left:0});
            }
            if (current>index){
                img[index].style.left=`${-width}px`;
                animate(img[current],{left:width});
                animate(img[index],{left:0});
            }
            next=current=index;
        }
    })
}