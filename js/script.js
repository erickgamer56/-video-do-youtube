var inp = ""
document.getElementById("btn").addEventListener("click",function(){
    inp = document.getElementById("inp").value
    if (inp != ""){
        document.getElementById("janela").style.opacity="1"
        document.getElementById("janela").style.zIndex="1"
        setTimeout(() => {
            document.getElementById("janela").style.opacity="0"
            document.getElementById("janela").style.zIndex="-1"
        }, 3000);
        setTimeout(() => {
            var btnb = document.getElementById("btnb")
            btnb.innerHTML ="fazer download"
            document.getElementById("bem").innerHTML="Link Gerado Com Sucesso"
            var re= inp.replace("watch?v=","embed/")
            var re2= inp.replace("youtube","yout")
            var play = document.getElementById("play")
            play.setAttribute("src",re)
            document.getElementById("write").innerHTML = re2
            btnb.setAttribute("href",re2)
        }, 1000);
    }
})
document.getElementById("ver").addEventListener("click",function(){
    inp = document.getElementById("inp").value
    var re= inp.replace("watch?v=","embed/")
    window.location.href=re
})