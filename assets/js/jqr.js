$(document).ready(function() {
    // your code here
    $("#btn").click(function() {
        $("h1").text("HEllO WORLD!");
        
    })
   })
   $("#myinput").keydown(function(){
    let val = $("#myinput").val();
    $("#output").text(val);

   })
$("#add").click(function(){
    $('list').append('<li> New Item </li>');
    });
    $('remove').click(function(){
        $('list').remove('li:last');
            })
            $(document).ready( function (){
                $("#addTask").click(function(){
                        let input=$("#taskInput").val();
                         if(input!==""){
                            $("#taskList").append("<li>"+input+"</li>")
                            $("#taskInput").val('');
    }
})
            })