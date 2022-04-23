// js
function setScreenSize() {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
}
setScreenSize();
window.addEventListener('resize', setScreenSize);

// 체형 체크박스
// function count_ck(obj){
//     var chkbox = document.getElementsByName("shape");
//     // var chkbox = document.getElementsByName("alcohol");
//     var chkCnt = 0;

//     for(var i=0;i<chkbox.length; i++){
//         if(chkbox[i].checked){
//             chkCnt++;
//         }
//     }
//     // if(chkCnt>2){
//     if(chkCnt>1){
//         alert("check NO");
//         obj.checked = false;
//         return false;
//     }
// }
// 주량 체크박스
// function count_ckAl(obj){
//     var chkboxAl = document.getElementsByName("alcohol");
//     var chkCntAl = 0;

//     for(var i=0;i<chkboxAl.length; i++){
//         if(chkboxAl[i].checked){
//             chkCntAl++;
//         }
//     }
//     if(chkCntAl>1){
//         // alert("check NO");
//         obj.checked = false;
//         return false;
//     }
// }
// 종교 체크박스
// function count_ckRe(obj){
//     var chkboxRe = document.getElementsByName("religion");
//     var chkCntAl = 0;

//     for(var i=0;i<chkboxRe.length; i++){
//         if(chkboxRe[i].checked){
//             chkCntAl++;
//         }
//     }
//     if(chkCntAl>1){
//         alert("check NO");
//         obj.checked = false;
//         return false;
//     }
// }



// 체형 체크박스 -input radio 기능추가
function count_ck(element) {
  
    const checkboxesSh
        = document.getElementsByName("shape");
    
    checkboxesSh.forEach((cb) => {
      cb.checked = false;
    })
    
    element.checked = true;
  }

// 주량 체크박스
function count_ckAl(element) {
  
    const checkboxesAl 
        = document.getElementsByName("alcohol");
    
    checkboxesAl.forEach((cb) => {
      cb.checked = false;
    })
    
    element.checked = true;
  }
// 종교 체크박스
function count_ckRe(element) {
  
    const checkboxesRe 
        = document.getElementsByName("religion");
    
    checkboxesRe.forEach((cb) => {
      cb.checked = false;
    })
    
    element.checked = true;
  }
// 지역 체크박스
function count_ckAr(element) {
  
    const checkboxesAr 
        = document.getElementsByName("area");
    
    checkboxesAr.forEach((cb) => {
      cb.checked = false;
    })
    
    element.checked = true;
  }
// 키워드 체크박스
// function count_ckKey(element) {
  
//     const checkboxesKey 
//         = document.getElementsByName("keyword");
    
//     checkboxesKey.forEach((cb) => {
//       cb.checked = false;
//     })
    
//     element.checked = true;
//   }
  function count_ckKey(obj){
    var checkboxesKey = document.getElementsByName("keyword");
    var chkCntKey = 0;

    for(var i=0;i<checkboxesKey.length; i++){
        if(checkboxesKey[i].checked){
            chkCntKey++;
        }
    }
    if(chkCntKey>3){
        alert("3개 까지만 선택 가능합니다.");
        obj.checked = false;
        return false;
    }
}
// 학력 체크박스
function count_ckEdu(element) {
  
  const checkboxesEdu 
      = document.getElementsByName("education");
  
  checkboxesEdu.forEach((cb) => {
    cb.checked = false;
  })
  
  element.checked = true;
}

// input 비었는지 체크
// function go(){
//   var f = document.interviewForm.interview01;
//   if(f==""){
//     alert("이름을 입력해주세요.");
//     document.interviewForm.interview01.focus();
//     return;
//   }
// }

// function check(){
//   if(document.getElementById("interview").value==""){
//       alert("이름을 입력하세요");
//       return;
//   }
//   // if(document.getElementById("studentNum").value==""){
//   //     alert("학번을 입력하세요");
//   //     return;
//   // }
//   frm.submit(); //직접 submit()이라는 메소드를 호출. 액션을 들고 가줌
// }

// 이미지 업로드 js
function loadFile(input) {
    var file = input.files[0];	//선택된 파일 가져오기

    //미리 만들어 놓은 div에 text(파일 이름) 추가
    var name = document.getElementById('fileName');
    name.textContent = file.name;

  	//새로운 이미지 div 추가
    var newImage = document.createElement("img");
    newImage.setAttribute("class", 'img');

    //이미지 source 가져오기
    newImage.src = URL.createObjectURL(file);   

    newImage.style.width = "70%";
    newImage.style.height = "70%";
    newImage.style.visibility = "hidden";   //버튼을 누르기 전까지는 이미지를 숨긴다
    newImage.style.objectFit = "contain";

    //이미지를 image-show div에 추가
    var container = document.getElementById('image-show');
    container.appendChild(newImage);
};