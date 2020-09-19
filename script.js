userInputArray = [];

// Save button
$("submit").on("submit"), function(event){
    event.preventDefault();
    $("textarea").val("");
    userInputArray = [];
    pushLocalStorage();
    console.log(submit)
}
