let data;
let isSorted = false;
window.onload = function () {

    function ChooseSort(length){
        let cnt = 0;
        for (let i = 0; i < length; i++) {
            let element_i = document.getElementById("case" + i);
                for (let j = i + 1 ; j < length; j++) {
                    let element_j = document.getElementById("case" + j);
                    setTimeout(function (){
                        element_j.animate([{
                            background: "yellow"
                        }, {
                            background: "#0dcaf0"
                        }], {
                            duration: 300
                        })
                        element_i.animate([{
                            background: "orange"
                        },{
                            background: "#0dcaf0"
                        }],{
                            duration: 300
                        })
                        if (parseInt(element_i.innerHTML) > parseInt(element_j.innerHTML)){
                            element_j.animate([{
                                background: "red"
                            }, {
                                background: "#0dcaf0"
                            }], {
                                duration: 200
                            })
                            let t = element_i.innerHTML;
                            element_i.innerHTML = element_j.innerHTML;
                            element_j.innerHTML = t;
                            let h = element_i.style.height;
                            element_i.style.height = element_j.style.height;
                            element_j.style.height = h;
                        }
                    },10*cnt);
                    cnt++;
                }
        }
        let ans = 0;
        setTimeout(function (){
            for (let i = 0; i < length; i++) {
                setTimeout(function (){
                    document.getElementById("case" + i).animate([{
                        background: "green"
                    },{
                        background: "#0dcaf0"
                    }],{
                        duration:200
                    })
                },10*ans);
                ans++;
            }
        },10*cnt);
        isSorted = true;
    }
    // ---------------------------------------------------------------------------------
    function BubbleSort(length){
        let cnt = 0;
        for (let i = 0; i < length; i++) {
            for (let j = 0 ; j < length - i; j++) {
                let element_j_1 = document.getElementById("case" + (j+1));
                let element_j = document.getElementById("case" + j);
                setTimeout(function (){
                    element_j.animate([{
                        background: "yellow"
                    }, {
                        background: "#0dcaf0"
                    }], {
                        duration: 300
                    })
                    element_j_1.animate([{
                        background: "orange"
                    },{
                        background: "#0dcaf0"
                    }],{
                        duration: 300
                    })
                    if (parseInt(element_j.innerHTML) > parseInt(element_j_1.innerHTML)){
                        element_j.animate([{
                            background: "red"
                        }, {
                            background: "#0dcaf0"
                        }], {
                            duration: 200
                        })
                        let t = element_j_1.innerHTML;
                        element_j_1.innerHTML = element_j.innerHTML;
                        element_j.innerHTML = t;
                        let h = element_j_1.style.height;
                        element_j_1.style.height = element_j.style.height;
                        element_j.style.height = h;
                    }
                },10*cnt);
                cnt++;
            }
        }
        let ans = 0;
        setTimeout(function (){
            for (let i = 0; i < length; i++) {
                setTimeout(function (){
                    document.getElementById("case" + i).animate([{
                        background: "green"
                    },{
                        background: "#0dcaf0"
                    }],{
                        duration:200
                    })
                },10*ans);
                ans++;
            }
        },10*cnt);
        isSorted = true;
    }
    // ---------------------------------------------------------------
    function InsertSort(length){
        let cnt = 0;
        for (let i = 1; i < length; i++) {
            for (let j = i; j >= 0 ; j--) {
                let element_j_1 = document.getElementById("case" + (j-1));
                let element_j = document.getElementById("case" + j);
                setTimeout(function (){
                    element_j_1.animate([{
                        background: "yellow"
                    }, {
                        background: "#0dcaf0"
                    }], {
                        duration: 300
                    })
                    element_j.animate([{
                        background: "orange"
                    },{
                        background: "#0dcaf0"
                    }],{
                        duration: 300
                    })
                    if (parseInt(element_j.innerHTML) < parseInt(element_j_1.innerHTML)){
                        element_j_1.animate([{
                            background: "red"
                        }, {
                            background: "#0dcaf0"
                        }], {
                            duration: 200
                        })
                        let t = element_j_1.innerHTML;
                        element_j_1.innerHTML = element_j.innerHTML;
                        element_j.innerHTML = t;
                        let h = element_j_1.style.height;
                        element_j_1.style.height = element_j.style.height;
                        element_j.style.height = h;
                    }
                },10*cnt)
                cnt++;
            }
        }
        let ans = 0;
        setTimeout(function (){
            for (let i = 0; i < length; i++) {
                setTimeout(function (){
                    document.getElementById("case" + i).animate([{
                        background: "green"
                    },{
                        background: "#0dcaf0"
                    }],{
                        duration:200
                    })
                },10*ans);
                ans++;
            }
        },10*cnt);
        isSorted = true;
    }



    document.getElementById("sub-btn").addEventListener('click',function (){
        isSorted = false;
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
                    let rand = Math.ceil(Math.random() * 25);
                    element.innerHTML = rand.toString();
                    element.style.height = rand * 15 + "px";
                }

            }
            else    alert("请输入数字！！");
        }
    });
    document.getElementById("choose-btn").addEventListener('click',function (){
        if(!isSorted)
            ChooseSort(data);
        else alert("已经排序完成！");
    });
    document.getElementById("bubble-btn").addEventListener('click',function (){
        if(!isSorted)
            BubbleSort(data);
        else alert("已经排序完成！");
    });
    document.getElementById("Ins-btn").addEventListener('click',function (){
        if(!isSorted)
            InsertSort(data);
        else alert("已经排序完成！");
    });
}



