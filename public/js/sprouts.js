// YOUR CODE GOES HERE

$('.more-sprouts').on('click', function(event) {
  event.preventDefault();
  // request a new dish and alert the user
  var pageNumber =$('.more-sprouts').attr("href").match(/\d+/)[0];

  var request = $.ajax({
    method: "GET",
    url: "/tweets.json",
    data: {page: pageNumber}
  });

  request.done(function(data) {
    // alert("Your random dish is: " + data.tweets);
    pageNumber++;
    var string = "/tweets?page=" + pageNumber;
    $('.more-sprouts').attr("href", string);

    data.forEach(function(tweet) {
      $(".tweets").append("<li class='tweet'><div class='body'>" + tweet.text + "</div>" + "<div class='user'>" + tweet.username + "</div></li>");


    })
  });
});

$(window).scroll(function() {

     if($(window).scrollTop() + $(window).height() == $(document).height()) {
      var pageNumber =$('.more-sprouts').attr("href").match(/\d+/)[0];
       var request = $.ajax({
       method: "GET",
       url: "/tweets.json",
       data: {page: pageNumber}
     });

     request.done(function(data) {
       // alert("Your random dish is: " + data.tweets);
       pageNumber++;
       var string = "/tweets?page=" + pageNumber;
       $('.more-sprouts').attr("href", string);
       
       data.forEach(function(tweet) {
         $(".tweets").append("<li class='tweet'><div class='body'>" + tweet.text + "</div>" + "<div class='user'>" + tweet.username + "</div></li>");

       })
     });

   }

});
//
// <li class="tweet">
//   <div class="body"><%= tweet[:text] %></div>
//   <div class="user"><%= tweet[:username] %></div>
// </li>
