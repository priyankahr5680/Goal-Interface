
$(document).ready(function(){

  $("#add-button").on('click',function(){
    var lastForm = $(".form-repeat").last();
    var newForm = lastForm.clone();
  
    newForm.find("input").val("")
  
    lastForm.find("input").prop("disabled", true);
  
    newForm.insertBefore($("#add-button"));
  
    newForm.find("input").prop("disabled", false);
  })

  var $goals = $('#table')
  
    $.ajax({
      url: "http://localhost:9009/goals",
      method: "GET",
      dataType: "json",
      success: function (response) {
        if(response.status === "success"){
          var goals = response.data
            $.each(goals, function(i,goal){                     
            $goals.append('<tr><td>' + goal.title + '</td>'+ '<td>'+goal.description + '</td></tr>') 
            })
          }
      },
      error: function (xhr, status, error) {
        console.log("An error occurred: " + error);
        }
    })

    
  $("#save-goal").on('click',function(){
    const formRepeats = $(".form-repeat");
    const newForm = formRepeats.last();
    const $title =newForm.find('#title').val()
    const $description =newForm.find('#description').val();
    
    if ($.trim($title) === "" || $.trim($description) === "") {
        alert("Please fill in all fields.");
        return;
      }
    
      var titleValid = /^[A-Za-z]+$/;
      if (!$title.match(titleValid)) {
        alert("Title should only contain letters.");
        return;
      }
    
      var descriptionValid = /^[A-Za-z0-9]+$/;
      if (!$description.match(descriptionValid)) {
        alert("Description should contain both letters and numbers.");
        return;
      }
    
      const goalData = {
        title: $title,
        description: $description
      };
     
    $.ajax({
        url: "http://localhost:9009/goals",
        method: 'POST',
        data: JSON.stringify(goalData),
        success: function(response) {
         
          console.log(response)
        },
        error: function(xhr, status, error) {
            console.log("An error occurred while saving the goal: " + error);
          }
    }) 
  }) 


  $(document).on('click', '.delete-goal', function() {
    var form = $(this).closest(".form-repeat");
    form.remove();
  });
})




