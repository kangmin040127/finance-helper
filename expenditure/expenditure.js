let submitBtn = document.getElementById('submitBtn');
let totalMoneyInput = document.getElementById('total-moneyInput');
let inputTotal = document.getElementById('input-total');
let howMuch = document.getElementById('howMuch');
let Where = document.getElementById('where');
let Satisfy = document.getElementById('satisfy');
let Submit = document.getElementById('submit')


let smileIMG = 'https://mblogthumb-phinf.pstatic.net/MjAxODAzMDdfOTMg/MDAxNTIwNDIyMTkzMDM4._N917E-CsZwIFRd1jDVxRONqULcmLhPl_-h_jzgcDAUg.mfEws8lDXfbmZne0HSz5VJsYLArQtvV3T04hbh3L164g.JPEG.ykj4474/3.JPG?type=w800'
let cryIMG = 'https://img.freepik.com/free-vector/cartoon-crying-face-upset-emoji-with-tears-falling-from-eyes-vector-dissatisfied-facial-expression-weepie-crybaby-unhappy-negative-feelings-isolated-on-white-background_8071-9166.jpg'
const WasteMessage = '좋지 않은 <br>소비입니다.'
const NiceBuyMessage = '정말 잘 샀다!<br>좋은 소비!'

// 처음 전제산 출력
let totalMoney = prompt('전재산을 입력하시오');


// 전재산 출력
const showTotalMoney = () => {
    let totalMoneyHTML = '';
    let StrtotalMoney = totalMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    totalMoneyHTML = `전재산: ₩${StrtotalMoney}`;
    document.getElementById('show-totalMoney').innerHTML = totalMoneyHTML;
    totalMoney = Number(totalMoney)
    console.log(typeof totalMoney)
}
showTotalMoney();

Submit.addEventListener('click', () => {
    console.log(howMuch.value, Where.value,Satisfy.value);
})
