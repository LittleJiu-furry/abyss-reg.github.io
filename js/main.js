var timer = new Array()
var timerIndex = 0;

function iconMove_in(){
    var ico = document.getElementById("icon");
    ico.style.left = "-30%";
}

function iconMove_out(){
    var ico = document.getElementById("icon");
    ico.style.left = "0";
}

function card_in(){
    var name_and_ico = document.getElementsByClassName("iconlip")[0];
    if(name_and_ico.childElementCount >= 2){
        //已经进行过了，可能是重复触发，所以本次返回
        return;
    }
    if(document.getElementById("dccard").offsetWidth < 450){
        name_and_ico.style.display = "block";
        name_and_ico.style["transition"] = "height 0.3s";
        name_and_ico.style.width = "auto";
        document.getElementById("icon").style.margin = "0 auto";
        var name = document.createElement("div");
        name.innerHTML = "<span>狐小九Little_Jiu</span>";
        name.id = "namebar";
        name.style.marginTop = "5px";
        name.style.fontSize = "28px";
        name.style.fontFamily = "SmileySans-Oblique"
        name.style.margin = "0 auto";
        name.style.textAlign = "center";
        name_and_ico.appendChild(name);
        name_and_ico.style.height = "150px";
    }
    else{
        name_and_ico.style.display = "flex";
        name_and_ico.style["transition"] = "width 0.3s"
        name_and_ico.style["justify-content"] = "center";
        name_and_ico.style["align-items"] = "center";
        name_and_ico.style.width = "400px";
        window.setTimeout(iconMove_in,300);
        var name = document.createElement("div");
        window.setTimeout(function(){        
            name.className = "name";
            name.id = "namebar";
            name.style.bottom = "-100%";
            name.innerHTML = "<span>狐小九Little_Jiu</span>";
            name_and_ico.appendChild(name);
        },300)
        window.setTimeout(function(){
            name.style.bottom = "calc(50px - 14px)";
        },600)
    }
}

function card_out(){
    var iconlip = document.getElementsByClassName("iconlip")[0];
    if(iconlip.childElementCount == 1){
        return;
    }
    if(document.getElementById("dccard").offsetWidth < 450){
        var rm = document.getElementById("namebar");
        iconlip.style.height = "100px";
        window.setTimeout(()=>{
            iconlip.style["transition"] = "unset";
            iconlip.style.width = "100px";
        },350)
        window.setTimeout(() => {
            iconlip.removeChild(rm);
            iconlip.style.display = "unset";
            document.getElementById("icon").style.margin = "unset";
        }, 400);
    }
    else{
        var rm = iconlip.getElementsByClassName("name")[0];
        rm.style.bottom = "-100%";
        window.setTimeout(function(){
            iconlip.removeChild(rm);
            var ico = document.getElementById("icon");
            ico.style.left = "0";
            window.setTimeout(function(){
                iconlip.style.width = "100px";
                iconlip.style.display = "unset";
                iconlip.style["transition"] = "unset"
                iconlip.style["justify-content"] = "unset";
                iconlip.style["align-items"] = "unset";
            },300)
        },300);
    }
     
}

function homec(){
    var dccard = document.getElementById("dccard");
    document.getElementById("flink").style.boxShadow = "unset";
    document.getElementById("home").style.backgroundColor = "rgba(255,255,255,.4)";
    document.getElementById("flink").style.backgroundColor = "unset";
    document.getElementById("home").style.boxShadow = "7px 5px 5px rgba(0,0,0,.8)";
    document.getElementById("flcard").style.zIndex = "-1";
    document.getElementById("flcard").style.opacity = "0";
    //删除所有定时器
    if(timerIndex != 0){
        for (let index = 0; index < timerIndex; index++) {
            clearInterval(timer[index]);
            timer.splice(index,1);
        }
    }
    window.setTimeout(function(){
        dccard.style.left = "0%";
    },200)
    window.setTimeout(function(){
        document.getElementById("som").style.opacity = "1";
    },700);
}

function flinkc(){
    var dccard = document.getElementById("dccard");
    document.getElementById("home").style.boxShadow = "unset";
    document.getElementById("home").style.backgroundColor = "unset";
    document.getElementById("flink").style.backgroundColor = "rgba(255,255,255,.4)";
    document.getElementById("flink").style.boxShadow = "7px 5px 5px rgba(0,0,0,.8)";
    dccard.style.left = "-100%";
    window.setTimeout(()=>{
        card_out();
    },300)
    window.setTimeout(function(){
        document.getElementById("som").style.opacity = "0";
    },700);
    window.setTimeout(function(){
        document.getElementById("flcard").style.opacity = "1";
    },200)
    window.setTimeout(function(){
        document.getElementById("flcard").style.zIndex = "1";
    },250)
    window.setTimeout(()=>{
        var textbox = document.getElementsByClassName("sitename")
            for (let index = 0; index < textbox.length; index++) {
                var inTextBox = textbox[index].getElementsByTagName("span")[0];
                if(inTextBox.offsetWidth>textbox[index].offsetWidth){
                    var co = false;
                    window.setTimeout(()=>{
                        timer.push(setInterval(() => {
                                if(co == false){
                                    window.setTimeout(()=>{co = true;},1000)
                                }
                                var scl = (textbox[index].scrollLeft)++;
                                if(scl == textbox[index].scrollLeft){
                                    window.setTimeout(() =>{
                                        textbox[index].scrollLeft = 0;
                                        co = false;
                                    },1000)
                                }
                            }, 20));
                        timerIndex++;
                    },1000)  
                }
            }
    },250)
}


