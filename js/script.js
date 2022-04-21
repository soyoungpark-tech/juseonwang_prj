$(document).ready(function() {

    function history() {
        document.getElementById("btn_next").style.background="red"
    }

});
// 체형 체크박스
function count_ck(obj){
    var chkbox = document.getElementsByName("shape");
    // var chkbox = document.getElementsByName("alcohol");
    var chkCnt = 0;

    for(var i=0;i<chkbox.length; i++){
        if(chkbox[i].checked){
            chkCnt++;
        }
    }
    // if(chkCnt>2){
    if(chkCnt>1){
        alert("check NO");
        obj.checked = false;
        return false;
    }
}
// 주량 체크박스
function count_ckAl(obj){
    var chkboxAl = document.getElementsByName("alcohol");
    var chkCntAl = 0;

    for(var i=0;i<chkboxAl.length; i++){
        if(chkboxAl[i].checked){
            chkCntAl++;
        }
    }
    // if(chkCntAl>2){
    if(chkCntAl>1){
        alert("check NO");
        obj.checked = false;
        return false;
    }
}
// 종교 체크박스
function count_ckRe(obj){
    var chkboxRe = document.getElementsByName("religion");
    var chkCntRe = 0;

    for(var i=0;i<chkboxRe.length; i++){
        if(chkboxRe[i].checked){
            chkCntRe++;
        }
    }
    // if(chkCntRe>2){
    if(chkCntRe>1){
        alert("check NO");
        obj.checked = false;
        return false;
    }
}