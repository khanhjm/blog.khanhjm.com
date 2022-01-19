<template>
  <div class="container mt-3" style="">
    <div id="avatar" class="row" style="background-color: #ebebeb">
      <div class="col-sm-4">
        <img
          class="img-thumbnail rounded-circle border border-info mx-auto my-3 d-block"
          style="width: 170px; height: 170px; object-fit: cover; object-position: top"
          :src="require('@/assets/img/avatar.jpg')"
          alt=""
          crossorigin="anonymous"
        />
      </div>
      <div class="col-sm-8 text-center my-auto">
        <h1 class="text-uppercase fw-bold">Dương Đắc Khanh</h1>
        <p>Lập trình viên .NET</p>
      </div>
    </div>
    <div id="contact" class="row border-top border-bottom border-dark border-4 py-2">
      <div class="col-lg-4 col-sm-6 py-1">
        <i class="bi bi-envelope-fill" />
        <span class="ms-2">khanhjk@gmail.com</span>
      </div>
      <div class="col-lg-4 col-sm-6 py-1">
        <i class="bi bi-telephone" />
        <span class="ms-2">0975.460.697</span>
      </div>
      <div class="col-lg-4 col-sm-6 py-1">
        <i class="bi bi-person-fill" />
        <span class="ms-2">Nam - 🥶 Độc thân</span>
      </div>
      <div class="col-lg-4 col-sm-6 py-1">
        <i class="bi bi-calendar3" />
        <span class="ms-2">28/05/1997</span>
      </div>
      <div class="col-lg-4 col-sm-6 py-1">
        <i class="bi bi-facebook" />
        <span class="ms-2">
          <a
            class="text-black text-decoration-none"
            target="_blank"
            href="https://fb.com/khanhjm"
            >https://fb.com/khanhjm</a
          >
        </span>
      </div>
      <div class="col-lg-4 col-sm-6 py-1">
        <i class="bi bi-geo-alt" />
        <span class="ms-2">Lam Điền - Chương Mỹ - Hà Nội</span>
      </div>
    </div>
    <div id="target" class="row mt-4">
      <h4>Mục tiêu nghề nghiệp</h4>
      <div>
        <ul>
          <li>Trở thành chuyên gia Công nghệ thông tin</li>
          <li>Có công việc phù hợp với khả năng và đam mê của bản thân</li>
          <li>Mang lại giá trị góp phần vào sự phát triển của cuộc sống</li>
          <li>Giao tiếp ngoại ngữ trôi chảy, làm chủ các công nghệ mới</li>
        </ul>
      </div>
    </div>
    <div id="infomation" class="row mt-2 dd-in" style="display: inline-block">
      <div id="experence" class="col-lg-6 float-end">
        <div class="row">
          <h4>Kinh nghiệm làm việc</h4>
          <div class="mt-2">
            <h6>Lập trình viên .NET - Công ty cổ phần MISA</h6>
            <span>01/2019 - Hiện tại</span>
            <span>
              <ul>
                <li>
                  Tham gia phát triển và xây dựng sản phẩm
                  <ul>
                    <li>Phần mềm kế toán MISA SME.NET 2020</li>
                    <ul>
                      <li>Developer</li>
                    </ul>
                    <li>Hóa đơn điện tử MISA meInvoice</li>
                    <ul>
                      <li>Developer</li>
                      <li>Builder</li>
                    </ul>
                  </ul>
                </li>
                <li>Thiết kế API tích hợp hóa đơn điện tử</li>
                <li>
                  Triển khai tích hợp hóa đơn điện tử, ví dụ như các đơn vị:
                  <ul>
                    <li>Bến xe Miền Đông: xuất vé tự động</li>
                    <li>Bệnh viện Nhi Đồng 2: kết nối với Phần mềm Quản lý Bệnh viện</li>
                    <li>MERCK Việt Nam</li>
                  </ul>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
      <div id="infomationLeft" class="col-lg-6 float-start">
        <div id="education" class="row text-sm-start">
          <h4>Học vấn</h4>
          <h6>Chuyên ngành: CÔNG NGHỆ PHẦN MỀM</h6>
          <h6>Đại học Mở Hà Nội</h6>
          <span>09/2015 - 06/2020</span>
          <span>Xếp loại tốt nghiệp: KHÁ</span>
        </div>
        <div id="skill" class="row titleDiv">
          <h4>Kỹ năng</h4>
          <div>
            <ul>
              <li>Sử dụng tốt ngôn ngữ C#, .NET</li>
              <li>Nắm vững Data Structure and Algorithms, OOP</li>
              <li>Phát triển ứng dụng với mô hình MVC, Entity</li>
              <li>Sử dụng Git, TFS</li>
            </ul>
          </div>
        </div>
        <div id="interest" class="row titleDiv">
          <h4>Sở thích</h4>
          <div>
            <ul style="columns: 2">
              <li>Đọc sách về cuộc sống</li>
              <li>Xem tin tức công nghệ</li>
              <li>Chơi cầu lông</li>
              <li>Đọc truyện</li>
              <li>Xem phim</li>
              <li>Chơi game</li>
            </ul>
          </div>
        </div>
        <div id="other" class="row titleDiv"><h4>Thông tin khác</h4></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.titleDiv {
  margin-top: 1.5rem !important;
}
</style>
