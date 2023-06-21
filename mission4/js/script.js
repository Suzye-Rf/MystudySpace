let data;
window.onload = function () {
    function bubbleSort(len){
        for (let k = 0; k < len; k++) {
            let i = document.getElementById("case" + k);
            for (let l = k + 1; l < len; l++) {
                let j = document.getElementById("case" + l);
                if (parseInt(i.innerHTML) >= parseInt(j.innerHTML)){
                    i.before(j);
                    let t = i.id;
                    i.id = j.id;
                    j.id = t;
                }
            }
        }
    }
    document.getElementById("sub-btn").addEventListener('click',function (){
        let shit = document.getElementById("box1");
        if (shit.value !== ""){
            if (!isNaN(parseInt(shit.value))){
                data = parseInt(shit.value);
                let element1 = document.getElementById("b1");
                $("#b1").empty();
                for (let i = 0; i < data; i++) {
                    let bitch_1 = document.createElement("span");
                    bitch_1.className = "case";
                    bitch_1.id = "case" + i;
                    element1.appendChild(bitch_1);
                }
                for (let i = 0; i < data; i++) {
                    let element = document.getElementById("case" + i);
                    let rand =
                        Math.ceil(Math.random() * 10);
                    element.innerHTML = rand.toString();
                    element.style.height = rand * 15 + "px";
                }
            }
            else    alert("请输入数字！！");
        }
    });
    document.getElementById("start-btn").addEventListener('click',function (){
        bubbleSort(data);
    });
}



