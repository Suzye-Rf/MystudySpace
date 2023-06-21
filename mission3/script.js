import {data} from './data.js'

window.onload = () => {

    data.forEach( (keys) => {
        if (parseInt(keys.item_code) % 10000 === 0){
            let opt = document.createElement("option");
            opt.value = keys.item_code;
            opt.innerHTML = keys.item_name;
            document.getElementById("province").appendChild(opt);
        }
    });

    document.getElementById("province").onchange  = function () {
        $("#city").empty();
        let newopt = document.createElement("option");
        newopt.value = "0";
        newopt.innerHTML = "请选择城市";
        document.getElementById("city").appendChild(newopt);

        $("#district").empty();
        let newopt1 = document.createElement("option");
        newopt1.value = "0";
        newopt1.innerHTML = "请选择区/县";
        document.getElementById("district").appendChild(newopt1);

        let ind = document.getElementById("province").selectedIndex;
        let value = document.getElementById("province").options[ind].value;
        data.forEach( (keys) => {
            let codestr = keys.item_code;
            if(codestr.slice(0,2) === value.slice(0,2) && codestr.slice(2,4) !== value.slice(2,4) && codestr.slice(4,6) === value.slice(4,6)) {
                let opt = document.createElement("option");
                opt.value = keys.item_code;
                opt.innerHTML = keys.item_name;
                document.getElementById("city").appendChild(opt);
            }
        });
    }

    document.getElementById("city").onchange = function (){
        $("#district").empty();
        let newopt = document.createElement("option");
        newopt.value = "0";
        newopt.innerHTML = "请选择区/县";
        document.getElementById("district").appendChild(newopt);
        let ind = document.getElementById("city").selectedIndex;
        let value = document.getElementById("city").options[ind].value;
        data.forEach((keys) => {
            let codestr = keys.item_code;
            if(codestr.slice(0,4) === value.slice(0,4) && codestr.slice(4,6) !== value.slice(4,6)){
                let opt = document.createElement("option");
                opt.value = keys.item_code;
                opt.innerHTML = keys.item_name;
                document.getElementById("district").appendChild(opt);
            }
        });
    }


}

