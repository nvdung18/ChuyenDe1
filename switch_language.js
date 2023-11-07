document.addEventListener("DOMContentLoaded", function () {
  // Lắng nghe sự kiện khi click vào một mục trong dropdown
  document.querySelectorAll(".dropdown-item").forEach(function (item) {
    item.addEventListener("click", function () {
      // Lấy nội dung của mục được chọn
      var selectedText = this.textContent.trim();

      // Cập nhật nút chính của dropdown với nội dung của mục được chọn
      var dropdownButton = document.getElementById("dropdownMenu2");
      dropdownButton.textContent = selectedText;
    });
  });
});
