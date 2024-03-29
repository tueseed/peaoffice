function chech_len_text()
{
    var len_txt = $("#txt_search").val(); 
    if(len_txt.length > 2)
    {
        search_office();
    }
}
function search_office()
{
    var formData = new FormData();
    formData.append('keyword',$('#txt_search').val());
    $.ajax({
        url: './api/search_office_api.php',
        method: 'POST',
        data: formData,
        async: true,
        cache: false,
        processData: false,
        contentType: false,
        beforeSend : function()
        {
            console.log("beforesend.....");
            $('#card-area').block({
                message: '<div class="spinner-grow text-primary display-4" style="width: 4rem; height: 4rem;" role="status"><span class="sr-only">Loading...</span></div>',
                overlayCSS : { 
                  backgroundColor: '#ffffff',
                  opacity: 0.8
                },
                css : {
                  opacity: 1,
                  border: 'none',
                }
              });
        },
        success: function(response)
        {
            var obj = JSON.parse(response) || {};
            fetch_officr(obj);
        },
    complete :function(){
        $('#card-area').unblock();
            }	
        });
}

function fetch_officr(obj)
{
    var i = 0;
    var html_card = "";
    while(obj[i])
    {
        console.log(obj[i].pea_name);
        html_card = html_card + '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-3"><div class="card" ><div class="card-body"><div class="row"><div class="col-auto"><p>การไฟฟ้า: '+obj[i].pea_name+'</p><p>รหัส: '+obj[i].pea_code+'</p></div><div class="col"><span class="text-primary"><i class="fas fa-info-circle fa-2x float-right"></i><span></div></div></div> </div></div>';
        i++;
    }
    $('#card-area').html(html_card);
    if(obj.length == 0)
    {
        $('#text_result_not_found').html("ไม่พบ Pea. <span class='font-weight-bold'><u>" + $('#txt_search').val() + " </u></span>ในระบบ ต้องการเพิ่มข้อมูลหรือไม่");
        $('#text_result_not_found_alert').attr('style','display:block;');
        $('#txt_result').hide();
        $('#add_tr').attr('href','?action=add_tr&pea_no='+ $('#txt_search').val());
    }
    else if(obj.length > 0)
    {
        $('#txt_result').html('ผลการค้นหา ' + obj.length + ' รายการ');
        $('#text_result_not_found_alert').attr('style','display:none;');
        $('#txt_result').show();
    }
    
    console.log(obj.length);

}



$( document).ready(function() {
    $('#txt_result').hide();
  });