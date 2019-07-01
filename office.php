
<div class="row mt-3 ">
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">คำค้นหา</span>
      </div>
      <input type="text" class="form-control" id="txt_search" onkeyup="chech_len_text()" placeholder="ชื่อสำนักงาน" >
      <!-- <button type="button" class="btn btn-primary btn-block mt-3" onclick="search_office()">ค้นหา</button> -->
    </div>
  </div>
</div>
<!-- <div class="dropdown-divider"></div> -->
<div class="row">
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
    <h3><span class="text-primary" id="txt_result"></span></h3>
  </div>
</div>

<div class="alert alert-primary" role="alert" id="text_result_not_found_alert" style="display:none;">
    <p style="text-indent:20px;" id="text_result_not_found">
        ไม่พบ ข้อมูล ในระบบ 
    </p>
</div>

<div class="row" id="card-area">
  <!------CARD RENDER IN THIS PLACE ------------>
  
</div>
