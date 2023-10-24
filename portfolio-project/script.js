// 텍스트 작성과 삭제 즉시 실행 함수
(function(){
	// span 요소 노드 가져오기
	const spanEl = document.querySelector("main h2 span")
	// 화면에 표시할 문장 배열
	const txtArr = ['Back-End Developer', 'Full-Stack Developer', 'Good Developer'];
	// 배열의 인덱스 초깃값
	let index = 0;
	// 화면에 표시할 문장 배열에서 요소를 하나 가져온 뒤, 배열로 만들기
	let currentTxt = txtArr[index].split("");

	function writeTxt(){
		spanEl.textContent += currentTxt.shift();	// shift()배열의 첫번째 요소를 추출하고, 원배열에서 삭제
		if(currentTxt.length !== 0){	// currentTxt 배열에 내용이 있다면
			setTimeout(writeTxt, Math.floor(Math.random()*100)); // writeTxt() 1번 실행하고, 랜덤값 딜레이
		} else {	// currentTxt 배열이 비었다면
			currentTxt = spanEl.textContent.split("");	// 화면에 표시된 텍스트를 가져와서 다시 currentTxt배열에 출력
			setTimeout(deleteTxt, 3000);	// deleteTxt() 1번 실행하고, 0.1초 이내 딜레이
		}
	}

	function deleteTxt(){
		currentTxt.pop();	// 배열 마지막 요소 삭제
		spanEl.textContent = currentTxt.join("");	// 화면에 표시
		if(currentTxt.length !== 0){	// currentTxt 배열에 내용이 있다면
			setTimeout(deleteTxt, Math.floor(Math.random()*100));	// deleteTxt() 1번 실행하고, 랜덤값 딜레이
		} else {	// currentTxt 배열이 비었다면
			index = (index + 1) % txtArr.length;	// index값이 배열 요소를 순회하도록 증가
			currentTxt = txtArr[index].split("");	// 증가한 index 값을 currentTxt 배열에 추가
			writeTxt();	// writeTxt 함수를 다시 실행
		}
	}
	writeTxt(); // index 값을 모두 돌고 나면 index가 0인 상태로 다시 실행
})();