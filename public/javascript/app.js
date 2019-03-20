
$(document).ready(function () {

    // $.getJSON("/friend", function (dbReturnInfo) {

    //     for (var i = 0; i < dbReturnInfo.length; i++) {
    //         $("#cardResultsArea").append("<div class='card' style='width: 18rem';><img src=" + dbReturnInfo[i].picture + " class='card-img-top' alt=" + dbReturnInfo.name + "><div class='card-body'><h3 class='card-text'>" + dbReturnInfo.name + "</h3><p class='card-text'>" + dbReturnInfo.age + "</p><p class='card-text'>" + dbReturnInfo.occupation + "</p>  </div></div>")
    //     }
    // })

    $("#submitBtn").click((event) => {
        console.log("button was clicked")
        event.preventDefault();

        var name = $("#formName").val().trim()
        var age = $("#formAge").val()
        var occupation = $("#formOccupation").val().trim()
        var photo = $("#formPicture").val().trim()
        var item1 = $("#q1").val()
        var item2 = $("#q2").val()
        var item3 = $("#q3").val()
        var item4 = $("#q4").val()
        var item5 = $("#q5").val()
        var item6 = $("#q6").val()
        var item7 = $("#q7").val()
        var item8 = $("#q8").val()
        var item9 = $("#q9").val()
        var item10 = $("#q10").val()

        var newFriendObj = {
            name: name,
            age: age,
            occupation: occupation,
            photo: photo,
            scores: [
                parseInt(item1),
                parseInt(item2),
                parseInt(item3),
                parseInt(item4),
                parseInt(item5),
                parseInt(item6),
                parseInt(item7),
                parseInt(item8),
                parseInt(item9),
                parseInt(item10)
            ]
        }

        console.log(newFriendObj);

        var currentURL = window.location.origin;

        $.post(currentURL + "/friends", newFriendObj, function (res) {
            console.log(res)
        })

    })

})

