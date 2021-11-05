window.addEventListener('load',(event) =>{
    const bttn = $("#Search");


    // bttn.on("click",function(e){

    //     $.ajax("superheroes.php",{
    //         method: "GET"
    //     }).done(function(response){
    //         alert(response);
    //     }).fail(function(response){
    //         alert("There is an error.")
    //     })

    // });


    bttn.on("click",function(e){
        fetch("superheroes.php").then(response =>{
            if (response.ok){
               return response.text();
            }
            else {
                alert("There was an error");
            }
        }).then(info =>{
            alert(info);
        }).catch(err =>console.log(`There was an error: ${err}`));
    });
});