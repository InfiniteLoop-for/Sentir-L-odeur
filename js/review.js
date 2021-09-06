$(function () {

    $('#review_list tr').on('click', function (event) {
        location.href = "./review_detail.html";
    });

    $('#btn_write').click(function() {
        location.href = "./review_write.html";
    });

    $('#detail_delete').click(function() {
        alert('시는 삭제할 수 없습니다.');
    });
});