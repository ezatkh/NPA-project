function altImage(img) {
  img.src = "images/noImage.png";
  $(img).css("left", "140px");
}

$("#getPost").on("click", function () {
  const inputValue = $("#teamName").val();
  $("#teamName").val("");
  $("#content").empty();
  $.get(`teams/${inputValue}`, function (players) {
    let source = $("#packageContainer").html();
    let template = Handlebars.compile(source);
    let newHTML = template({ players });
    $("#content").append(newHTML);
  });
  $("#inputName1").val("");
});
