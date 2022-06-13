let totalMoneyInput = document.getElementById('total-moneyInput');
let inputTotal = document.getElementById('input-total');
let howMuch = document.getElementById('howMuch');
let Thing = document.getElementById('thing');
let Satisfy = document.getElementById('satisfy');
let submitBtn = document.getElementById('submitBtn')
let smileFace = `<i class="fa-solid fa-face-smile fa-xl"></i>`;
let sadFace = `<i class="fa-solid fa-face-sad-cry fa-xl"></i>`

export let historyList = [];

submitBtn.addEventListener('click', addHistory);

const WasteMessage = '좋지 않은 <br>소비입니다.'
const NiceBuyMessage = '아주 좋은<br>소비입니다!'

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

// 물건, 가격, 만족도 list에 추가 함수
function addHistory(){
	let history = {
			id: randomIDGenerate(),
			thing: Thing.value,
			price: howMuch.value,
			satisfy: Satisfy.value,
	}
	if(history.thing != "" && history.price != NaN && history.price != 0 && history.satisfy != ""){
		history.price = Number(history.price);
		historyList.push(history);
		console.log(historyList);
		renderHistory();
		addRank();
		showLastMoney(history.price);
	} else{
		alert('빈칸을 채우시오')
	}
}

// 구매내역 UI
function renderHistory(){
	let historyHTML = '';
	for(let i = 0; i < historyList.length; i++){
		if(historyList[i].satisfy == 'Y' || historyList[i].satisfy == 'y'){
			historyHTML += `
				<div id="history-contents">
					<div class="left-history">
							<div>물건: ${historyList[i].thing}</div>
							<div>가격: ₩ ${(historyList[i].price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
							<div>만족도: ${historyList[i].satisfy}</div>
					</div>
					<div id="right-history">
							<i class="fa-solid fa-face-smile fa-xl"></i>
							<div id="message">
									아주 좋은 <br>
									소비입니다.
							</div>
					</div>    
				</div>`
		} else if(historyList[i].satisfy == 'N' || historyList[i].satisfy == 'n'){
			historyHTML += `
			<div id="history-contents">
				<div class="left-history">
						<div>물건: ${historyList[i].thing}</div>
						<div>가격: ${(historyList[i].price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
						<div>만족도: ${historyList[i].satisfy}</div>
				</div>
				<div id="right-history">
						<i class="fa-solid fa-face-sad-cry fa-xl"></i>
						<div id="message">
								좋지 않은 <br>
								소비입니다.
						</div>
				</div>    
			</div>`
		}

	}
	document.getElementById('history-fact').innerHTML = historyHTML;
	howMuch.value = '';
	Thing.value = "";
	Satisfy.value = '';
};

// RANK UI 그려주기
function renderRank(priceResult){
	let rankHTML = ''; 
		for(let i = 0; i < priceResult.length; i++){
			rankHTML += `
			<div class="rank-contents">
				<div class="rank-number">
						${i+1}
				</div>
				<div class="rank-contents-info">
						<div class="rank-name">물건: ${priceResult[i].thing}</div>
						<div class="rank-price">가격: ${(priceResult[i].price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
						<div class="rank-satisfy">만족도: ${priceResult[i].satisfy}</div>
				</div>
			</div>`
		} 
	document.getElementById('rank-fact').innerHTML = rankHTML;
}

// 가격 순위표 내림차순으로 정렬
function addRank(){
	priceResult = historyList.sort(function(a,b){
		return b.price - a.price;
	})
	renderRank(priceResult);
}

// 전재산에서 사용극에 차감 + UI
function showLastMoney(price){
	let totalMoneyHTML = '';
	totalMoney -= Number(price);
	if(totalMoney < 0){
		alert('돈 다 썼네!')
		totalMoneyHTML = `전재산: ₩ 0`;
		document.getElementById('show-totalMoney').innerHTML = totalMoneyHTML;
	} else{
		let StrtotalMoney = totalMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		totalMoneyHTML = `전재산: ₩${StrtotalMoney}`;
		document.getElementById('show-totalMoney').innerHTML = totalMoneyHTML;
		totalMoney = Number(totalMoney)
		console.log(typeof totalMoney)
	}
	

}




































// random id 함수
function randomIDGenerate(){
    return '_' + Math.random().toString(36).substring(2,9);
}