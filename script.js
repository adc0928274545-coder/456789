
// ==============================
// Future Path v2
// ==============================

const splash = document.getElementById("splash");
const home = document.getElementById("home");
const loading = document.getElementById("loading");
const result = document.getElementById("result");
const path1 = document.getElementById("path1");
const path2 = document.getElementById("path2");

const typing = document.getElementById("typing");
const startBtn = document.getElementById("startBtn");

const progressBar = document.getElementById("progressBar");
const percent = document.getElementById("percent");

const text =
"Application นี้สามารถแสดงเส้นทางในอนาคตของคุณได้ทั้งหมด 2 เส้นทาง คุณสามารถรับชมได้ทั้ง 2 เส้นทาง แต่สามารถเลือกได้เพียง 1 เส้นทางเท่านั้น ";

let index = 0;

// ==============================
// เปิดแอป
// ==============================
function startInstall(){

    let progress = 0;

    installText.innerHTML = "";

    installBar.style.width = "0%";

    installPercent.innerHTML = "0%";

    const timer = setInterval(()=>{

        progress++;

        installBar.style.width = progress + "%";

        installPercent.innerHTML = progress + "%";

        if(progress >= 100){

            clearInterval(timer);

            installTitle.innerHTML = "INSTALLATION COMPLETE ✓";

            installText.innerHTML = "";

            installPercent.innerHTML = "";

            setTimeout(()=>{

                installScreen.classList.add("hidden");

                splash.classList.remove("hidden");

                splash.classList.add("fadeIn");

                setTimeout(typeWriter,1200);

            },7000);

        }

    },75);

}

window.onload = function () {

    installTitle.innerHTML = "นี่คือโอกาสของคุณ";

    installText.innerHTML = "";

    installPercent.innerHTML = "";

    installBar.style.width = "0%";

    installTitle.style.opacity = "1";

    setTimeout(() => {

        installTitle.style.transition = "1s";

        installTitle.style.opacity = "0";

        setTimeout(() => {

            installTitle.innerHTML = "INSTALLING...";

            installTitle.style.opacity = "1";

            startInstall();

        },1000);

    },3000);

}
// ==============================
// พิมพ์ข้อความ
// ==============================

function typeWriter(){

    if(index < text.length){

        typing.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter,40);

    }

    else{

        startBtn.style.opacity="1";
        startBtn.style.pointerEvents="auto";

    }

}

// ==============================
// ไปหน้ากรอกข้อมูล
// ==============================

function showHome(){

    splash.classList.add("hidden");

    home.classList.remove("hidden");

    home.classList.add("fadeIn");

}

// ==============================
// เริ่มวิเคราะห์
// ==============================

function startScan(){

    const name=document.getElementById("fullname").value;
    const birth=document.getElementById("birthday").value;

    if(name=="" || birth==""){

        alert("กรุณากรอกข้อมูลให้ครบ");

        return;

    }

    home.classList.add("hidden");

    loading.classList.remove("hidden");

    loading.classList.add("fadeIn");

    let p=0;

    progressBar.style.width="0%";

    const timer=setInterval(()=>{

        p++;

        percent.innerHTML=p+"%";

        progressBar.style.width=p+"%";

        if(p>=100){

            clearInterval(timer);

            setTimeout(()=>{

                loading.classList.add("hidden");

                result.classList.remove("hidden");

                result.classList.add("fadeIn");

            },500);

        }

    },35);

}

// ==============================
// ดูเส้นทาง
// ==============================

function viewPath(num){

    result.classList.add("hidden");

    if(num===1){

        path1.classList.remove("hidden");
        path1.classList.add("fadeIn");

    }

    else{

        path2.classList.remove("hidden");
        path2.classList.add("fadeIn");

    }

}

// ==============================
// กลับ
// ==============================

function backResult(){

    path1.classList.add("hidden");

    path2.classList.add("hidden");

    result.classList.remove("hidden");

    result.classList.add("fadeIn");

}

// ==============================
// เลือกเส้นทาง
// ==============================

let selectedPath = 0;

function choosePath(num){

    selectedPath = num;

    document.getElementById("popupText").innerHTML =
    `คุณกำลังจะเลือก <b>เส้นทางที่ ${num}</b><br><br>
    เมื่อเลือกแล้วจะไม่สามารถเปลี่ยนแปลงได้อีก<br><br>
    <b>ตกลงจะเลือกเส้นทางนี้หรือไม่?</b>`;

    document.getElementById("confirmPopup").classList.remove("hidden");

}

// ปิด Popup

function closePopup(){

    document.getElementById("confirmPopup").classList.add("hidden");

}

// กดยืนยัน

function confirmChoose(){

    document.getElementById("confirmPopup").classList.add("hidden");

    alert("เลือกเส้นทางที่ " + selectedPath + " สำเร็จ");

    // ตัวอย่าง
    // window.location.href = "ending.html";

}
