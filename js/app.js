// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();


$(document).ready(function()
{
$('#signup_wrapper_thank_you').hide();

    $("#signup_btn").click(function()
    {
        var params = {
            'email' : $("#signup_field").val()
        }

        postSuccess();
        // $.post('http://fatcal.com/signup',params).done(function(data){
        //     postSuccess();
        // })
        // .fail(function(data){
        //     alert("Ooops, something went wrong. Please try again.");
        // });
    });

    $("#blog").click(function()
    {
    	window.open("http://joinraft.tumblr.com/");
    });

    $("#twitter").click(function()
    {
    	window.open("https://twitter.com/joinraft");
    });    
});

function postSuccess()
{

  $('#signup_wrapper').hide();
  $('#signup_wrapper_thank_you').show();

  // $("#signup_thankyou").fadeIn(800);


  // $("#signup_field").html("Thank you!");
  // $("#signup_btn")

  // $('#email_btn').animate({opacity: 0}, 0, function()
  // {
  //     $(this).fadeOut(0);
  // });

  // $('#email_input').animate({opacity: 0}, 0, function()
  // {
  //     $(this).fadeOut(0);
  // });
}