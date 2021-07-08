function openmovie(flag){
    document.getElementById("av").className="movie";
    var a = document.getElementById("av1");
    a.className = "action";
    var x = document.createElement("nav");
    x.className="chacha";
    a.appendChild(x);
    x.onclick=function (){
        document.getElementById("av").className="n";
        document.getElementById("av1").className="n";
        speed.className="bujian";
        video.remove();
        x.remove();
    }
    var video = document.createElement("video");
    var v_src = "vide/";
    v_src += flag;
    v_src += ".mp4";
    video.src = v_src;
    video.setAttribute("width","70%");
    video.setAttribute("height","70%");
    video.setAttribute("controls","controls");
    a.appendChild(video);
    var speed = document.getElementById("111");
    speed.className="speed";
    var xuanze = document.getElementById("select");
    xuanze.addEventListener('change', function () {
        video.playbackRate = this.value;
    });
}