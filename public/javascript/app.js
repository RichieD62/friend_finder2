$(document).ready(function () {



    //Front End GET Request
    $.ajax({
        type: "GET",
        url: "/api/friends",
        success: function (data) {
            var returnData = data
            console.log("Friends List: ", data)


            for (var i = 0; i < data.length; i++) {
                $("#cardResultsArea").append(
                    `<div class='card friendResults' stlye='width: 18rem';>
                        <img src='${ data[i].picture}' class='card-img-top' alt='friendPicture'>
                        <div class='card-body'>
                            <h3 class='card-text'>${ data[i].name}</h3>
                            <p class='card-text'>${ data[i].age}</p>
                            <p class='card-text'>${ data[i].occupation}</p>
                        </div>
                    </div>`
                )
            }

            return (returnData)
        },
        error: function (err) {
            console.log(err)
        }

    })




    //Front End POST Request
    $("#submitBtn").click((event) => {
        console.log("button was clicked")
        event.preventDefault();

        var name = $("#formName").val().trim()
        var age = $("#formAge").val()
        var occupation = $("#formOccupation").val().trim()
        var picture = $("#formPicture").val().trim()
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
            picture: picture,
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


        $.ajax({
            type: 'POST',
            url: '/friends',
            data: newFriendObj,
            success: function (res) {
                console.log(res)
            },
            error: function (error) {
                console.log(error)
            }
        })

    })


})




