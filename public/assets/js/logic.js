$(document).ready(function () {
    $(".toDevoured").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");


        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: { devoured: 1 }
        }).then(
            function () {
                location.reload();
            }


        ).catch(function(err){
            throw err;
        })

    })

    $("#submitBurger").on("click", function (event) {
        event.preventDefault();
        var putIn = $("#inputBurgerName").val();


        if (putIn === "") {
            alert("Blank burger is not accepted!")
        }
        else {
            $.ajax("/api/burgers", {
                type: "POST",
                data: { name: putIn }
            }).then(
                function () {
                    // Reload the page to get the updated list
                    window.location.replace("/");
                }
            );

            console.log(putIn);
        }


    });
});


