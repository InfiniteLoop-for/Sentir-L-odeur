    $('(.클래스명)').focusout(function () {
        var pwd1 = $("(비밀번호 입력 ID)").val();
        var pwd2 = $("(비밀번호 확인 ID)").val();
  
        if ( pwd1 != '' && pwd2 == '' ) {
            null;
        } else if (pwd1 != "" || pwd2 != "") {
            if (pwd1 == pwd2) {
                // 비밀번호 일치 이벤트 실행
            } else {
                // 비밀번호 불일치 이벤트 실행
            }
        }
    });
