let textArea = document.getElementById('textInput');
let Container = document.getElementById('container');
let backBtn = document.getElementById('button');

textArea.addEventListener('focus', changeBg);

function changeBg(){
    textArea.style.boxShadow = "5px 5px 5px 5px gray";
}
function backImg(){
    if(Container.style.backgroundColor == "red"){
        Container.style.backgroundColor = "white"
        Container.style.backgroundImage="url('https://img.kr.news.samsung.com/kr/wp-content/uploads/2014/10/0138.jpg')";
        backBtn.textContent = "빨강으로"
    } else{
        Container.style.backgroundImage="inherit"
        Container.style.backgroundColor = "red";
        backBtn.textContent = "노트로"
    }
}

function clearPage(){
    if(textArea.value == ""){
        alert('이미 지웠잖아')
    } else{
        textArea.value = "";
    }
}

function submit(){
    if(textArea.value == ""){
        alert('작성하고 올리라고')
    } else{
        alert('제출 완료!')
        textArea.value = "";
    }
}
