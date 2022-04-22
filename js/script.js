$(document).ready(function() {

    function history() {
        document.getElementById("btn_next").style.background="red"
    }

});
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

// 이미지 업로드
jQuery(document).ready(function() {     
     
           
  var storedFiles = [];      
  //$('.cvf_order').hide();
 
  // Apply sort function 
  function cvf_reload_order() {
      var order = $('.cvf_uploaded_files').sortable('toArray', {attribute: 'item'});
      $('.cvf_hidden_field').val(order);
  }
 
  function cvf_add_order() {
      $('.cvf_uploaded_files li').each(function(n) {
          $(this).attr('item', n);
      });
      console.log('test');
  }
 
  $(function() {
      $('.cvf_uploaded_files').sortable({
          cursor: 'move',
          placeholder: 'highlight',
          start: function (event, ui) {
              ui.item.toggleClass('highlight');
          },
          stop: function (event, ui) {
              ui.item.toggleClass('highlight');
          },
          update: function () {
              //cvf_reload_order();
          },
          create:function(){
              var list = this;
              resize = function(){
                  $(list).css('height','auto');
                  $(list).height($(list).height());
              };
              $(list).height($(list).height());
              $(list).find('img').load(resize).error(resize);
          }
      });
      $('.cvf_uploaded_files').disableSelection();
  });
         
  $('body').on('change', '.user_picked_files', function() {
     
      var files = this.files;
      var i = 0;
                 
      for (i = 0; i < files.length; i++) {
          var readImg = new FileReader();
          var file = files[i];
         
          if (file.type.match('image.*')){
              storedFiles.push(file);
              readImg.onload = (function(file) {
                  return function(e) {
                      $('.cvf_uploaded_files').append(
                      "<li file = '" + file.name + "'>" +                                
                          "<img class = 'img-thumb' src = '" + e.target.result + "' />" +
                          "<a href = '#' class = 'cvf_delete_image' title = 'Cancel'><img class = 'delete-btn' src = '/juseonwang_prj/img/delete_x.png' /></a>" +
                      "</li>"
                      );     
                  };
              })(file);
              readImg.readAsDataURL(file);
             
          } else {
              alert('the file '+ file.name + ' is not an image<br/>');
          }
         
          if(files.length === (i+1)){
              setTimeout(function(){
                  cvf_add_order();
              }, 1000);
          }
      }
  });
 
  // Delete Image from Queue
  $('body').on('click','a.cvf_delete_image',function(e){
      e.preventDefault();
      $(this).parent().remove('');       
     
      var file = $(this).parent().attr('file');
      for(var i = 0; i < storedFiles.length; i++) {
          if(storedFiles[i].name == file) {
              storedFiles.splice(i, 1);
              break;
          }
      }
     
      //cvf_reload_order();
     
  });
         
  // AJAX Upload
  $('body').on('click', '.cvf_upload_btn', function(e){
     
      e.preventDefault();
      cvf_reload_order();
     
      //$(".cvf_uploaded_files").html('<p><img src = "loading.gif" class = "loader" /></p>');
      var data = new FormData();
     
      var items_array = $('.cvf_hidden_field').val();
      var items = items_array.split(',');
      for (var i in items){
          var item_number = items[i];
          data.append('files' + i, storedFiles[item_number]);
      }
         
      $.ajax({
          url: 'upload.php',
          type: 'POST',
          contentType: false,
          data: data,
          processData: false,
          cache: false,
          success: function(response, textStatus, jqXHR) {
              //$(".cvf_uploaded_files").html('');                                               
              //bootbox.alert('<br /><p class = "bg-success">File(s) uploaded successfully.</p>');
              alert(jqXHR.responseText);
          }
      });
     
  });  

});
