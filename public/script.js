$.ajax({
  url: "https://api.github.com/users/agarwala802/repos",
  success: function(response) {
    for(var i = 0; i < response.length; i++) {
        var temp = response[i].full_name;
        var repoLink = response[i].html_url;
        var repoName = temp.substring(temp.indexOf("/")+1);
        $("#list").append("<li> <a href=" +repoLink+ ">" + repoName + "</a> </li>");
    } // for
  } // success
}) // ajax
