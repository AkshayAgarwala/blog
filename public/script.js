$.ajax({
  url: "https://api.github.com/users/agarwala802/repos",
  success: function(response) {
    for(var i = 0; i < response.length; i++) {
        var name = response[i].name;
        var repoLink = response[i].html_url;
        $("#list").append("<li> <a href=" +repoLink+ ">" + name + "</a> </li>");
    } // for
  } // success
}) // ajax
