let selectListIhave = document.getElementById('select_value1');
let selectListIwant = document.getElementById('select_value2');

let thatIhave = document.getElementById('thatIhave');
let thatIwant = document.getElementById('thatIwant');

let inputMoney = document.getElementById('inputbox');
let outputMoney = document.getElementById('outputbox');

let ChangeBtn = document.querySelector('button');

let nation2 = '';
let nation1 = '';
let input = 0;

selectListIhave.addEventListener('change', ChangeValue1);
selectListIwant.addEventListener('change', ChangeValue2);
ChangeBtn.addEventListener('click', changeMoney)

function ChangeValue1(){
    nation1 = (selectListIhave.options[selectListIhave.selectedIndex].text);
    if(nation1 == 'KOREA'){
        thatIhave.style.backgroundImage = "url('https://us.123rf.com/450wm/dvarg/dvarg1406/dvarg140601090/29186354-%EA%B4%91%ED%83%9D-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%9D%BC%EC%9A%B4%EB%93%9C%EB%A1%9C-%ED%95%9C%EA%B5%AD%EC%9D%98-%EA%B5%AD%EA%B8%B0%EC%9E%85%EB%8B%88%EB%8B%A4-%ED%95%9C%EA%B5%AD-%ED%94%8C%EB%9E%98%EA%B7%B8-%EB%8B%A8%EC%B6%94.jpg')";
    } else if(nation1 == "USA"){
        thatIhave.style.backgroundImage = "url('https://static9.depositphotos.com/1055089/1108/v/450/depositphotos_11088772-stock-illustration-vector-badge-with-american-flag.jpg')"
    } else if(nation1 == "CHN"){
        thatIhave.style.backgroundImage = "url('https://img.freepik.com/free-vector/china-flag-in-circle-shape_97458-18.jpg')"
    } else{
        thatIhave.style.backgroundImage = "none"
    }
    thatIhave.style.backgroundRepeat = "no-repeat";
    thatIhave.style.backgroundSize = "cover";
}

function ChangeValue2(){
    nation2 = (selectListIwant.options[selectListIwant.selectedIndex].text);
    if(nation2 == 'KOREA'){
        thatIwant.style.backgroundImage = "url('https://us.123rf.com/450wm/dvarg/dvarg1406/dvarg140601090/29186354-%EA%B4%91%ED%83%9D-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%9D%BC%EC%9A%B4%EB%93%9C%EB%A1%9C-%ED%95%9C%EA%B5%AD%EC%9D%98-%EA%B5%AD%EA%B8%B0%EC%9E%85%EB%8B%88%EB%8B%A4-%ED%95%9C%EA%B5%AD-%ED%94%8C%EB%9E%98%EA%B7%B8-%EB%8B%A8%EC%B6%94.jpg')";
    } else if(nation2 == "USA"){
        thatIwant.style.backgroundImage = "url('https://static9.depositphotos.com/1055089/1108/v/450/depositphotos_11088772-stock-illustration-vector-badge-with-american-flag.jpg')"
    } else if(nation2 == "CHN"){
        thatIwant.style.backgroundImage = "url('https://img.freepik.com/free-vector/china-flag-in-circle-shape_97458-18.jpg')"
    } else{
        thatIwant.style.backgroundImage = "none"
    }
    thatIwant.style.backgroundRepeat = "no-repeat";
    thatIwant.style.backgroundSize = "cover";
}


function changeMoney(){
    nation1 = (selectListIhave.options[selectListIhave.selectedIndex].text);
    nation2 = (selectListIwant.options[selectListIwant.selectedIndex].text);
    input = Number(inputMoney.value);
    console.log(nation1, nation2, input);
    if(nation1 == "KOREA"){
        if(nation2 == "KOREA"){
            alert('같은나라 돈인데 환전이 필요해?!?!?!')
        } else if(nation2 == "USA"){
            outputMoney.value = '$' + (input / 1286.9).toFixed(3);
            console.log('한국 투 미국')
        } else if(nation2 == "CHN"){
            outputMoney.value = '¥' + (input / 190.64).toFixed(3);
        }
    } else if(nation1 == "USA"){
        if(nation2 == "KOREA"){
            outputMoney.value = "₩" + (input * 1286.9);
        } else if(nation2 == "USA"){
            alert('같은나라 돈인데 환전이 필요해?')
        } else if(nation2 == "CHN"){
            outputMoney.value = '¥'+ (input * 6.7525).toFixed(3);
        }
    } else if(nation1 == "CHN"){
        if(nation2 == "KOREA"){
            outputMoney.value = '₩'+ (input * 190.64).toFixed(3)
        } else if(nation2 == "USA"){
            outputMoney.value = '$' + (input * 0.148).toFixed(3)
        } else if(nation2 == "CHN"){
            alert('같은나라 돈인데 환전이 필요해?')
        }
    }
    inputMoney.value = '';
}