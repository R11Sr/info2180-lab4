window.addEventListener('load',(event) =>{
    const bttn = $("#Search");



    // bttn.on("click",function(e){
    //     e.preventDefault();
    //     $.ajax("superheroes.php",{
    //         method: "GET"
    //     }).done(function(response){
    //         alert(response);
    //     }).fail(function(response){
    //         alert("There is an error.")
    //     })

    // });


    $("#searchForm").submit(function(event){
        let Fdata = {
            query: $("#look-up").val()
        };

        $.ajax({
            type:"GET",
            url:"superheroes.php",
            data: Fdata,
            dataType: 'html'
        }).done(function(response){
            let recv = JSON.parse(response);
            console.log(Object.keys(recv).length);
            $("#result").empty();
            $("#result").append(recv.alias);
            $("#result").append(recv.name);
            $("#result").append(recv.biography);
          
        }).fail(function(response){
            $("#result").append("<h2>Failed to obtain response from the server</h2>");
        }); 

        event.preventDefault();
    });


});