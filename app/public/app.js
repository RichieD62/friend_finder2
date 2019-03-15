$.getJSON("/friend", function(dbReturnInfo) {

    for (var i=0; i<dbReturnInfo.length; i++) {
        $("#cardResultsArea").append("<div class='card' style='width: 18rem';><img src=" + dbReturnInfo[i].picture + " class='card-img-top' alt="+ dbReturnInfo.name + "><div class='card-body'><h3 class='card-text'>"+ dbReturnInfo.name + "</h3><p class='card-text'>"+ dbReturnInfo.age + "</p><p class='card-text'>"+ dbReturnInfo.occupation + "</p>  </div></div>")
    }

})