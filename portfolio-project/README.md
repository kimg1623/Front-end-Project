# portfolio-project

## 📑 프로젝트 설명
- `포트폴리오 반응형 웹 페이지`를 클론 코딩 후 콘텐츠 내용을 수정하고, 주석 작업을 하며 Front-End 개발 기초를 학습하였습니다.
- 참고 「코딩자율학습 HTML+CSS+자바스크립트(도서), 길벗」

## Stacks 

### Environment
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)             

### Development
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white)   

  
## 주요 학습내용
**1. CSS 애니메이션 구현**      
- css `animation 속성`과 `@keyframes`를 사용하여 움직이는 애니메이션을 구현      
- 애니메이션 적용위치: 메인화면의 마우스 버튼 움직이기, 메인 제목 커서, 헤더영역 fade in/out      
```CSS
main button.mouse{
    // ...생략...
    animation: upDown 1s ease-in-out infinite; /* ease-in-out: transition*/
}
@keyframes upDown {
    0%{ 
      bottom: 1rem;
    }
    50%{
      bottom:1.5rem;
    }
    100%{ 
      bottom: 1rem;
    }
}
  ```      
**2. CSS float 속성 제거**      
- div 등의 태그로 섹션을 구분해서 개발할 때 해당 섹션 이전의 플로팅 속성을 제거하여 영향을 받지 않도록 함         
```CSS
section .do-me::after{ /* float 속성 해제 */
	content: "";
	display: block;
	clear: both;
}
  ```    
**3. JS 문자열 배열을 한 글자씩 화면에 나타내기**      
- 글자를 타이핑하는 효과를 주기 위해서 javascript 배열을 사용
- 배열의 요소를 얻어와서 반복문으로 한글자씩 화면에 출력`writeTxt()` 후 다시 화면에서 글자를 얻어와서 삭제`deleteTxt()` 기능 구현    
- 즉시 실행 함수로 구현      
```javascript
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
  ```  


## 💻 실행화면    
![Animation](https://github.com/kimg1623/Front-end-Project/assets/40616792/7fd378f9-1456-438a-9ac7-c4424949dd3c)

     
<br><br>
## 향후 작업 방향
⏩ 크로스 브라우징 적용(현재 크롬만 적용, 사파리 예정)     

     
<br><br>
## 🙋‍♀️ 프로젝트 회고
- git을 처음으로 제대로 사용하며 진행한 프로젝트라는 것에 의미가 있었다. 기능별로 commit을 올리며 개발했을 때 먼저 나의 개발 진행상황을 명시적으로 확인할 수 있었고, 남은 구현해야 할 기능들을 생각할 수 있었다.
- 주로 백엔드를 맡았기 때문에 프론트를 처음으로 혼자서 구현했는데, div영역을 나눠서 작업하고 배치시키는게 생각보다 어려웠다. 웹 사이트의 디자인 수준이 올라간 만큼 사용자들의 UI/UX 경험 또한 수준이 높아져서 디자이너 뿐만이 아니라 프론트엔드 개발자도 기술적으로 공부하고 구현해야할 것이 많아졌다고 느꼈다.
- 특히 view-port를 사용해서 반응형 작업한 것이 의미있었는데, 코드가 복잡해지는 느낌이 들어서 조금더 편리하게 반응형을 구현할 수 있는 방법이 있는지 찾아봐야겠다고 생각했다.


