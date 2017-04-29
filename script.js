var messageList = {
    listName: "MessagesList",
    newMessages: [
    ]
}

var profileList = ['David','Christi','Tomo'];
var matchedWith = [false,false,false];
var messaged = [false,false,false];

$(document).on("pageshow","#search",function(){ // When entering pagetwo
  alert("pagetwo is now shown");
});

function match(n) {
    if (matchedWith[n-1]){
        var buttonHTML = "";
        $("#no-matches").hide();
        $("#match-list").show();
        // $("#allprevMatches").html('');
        // buttonHTML += '<a href="profile1.html"><img src="pics/t1.jpg" width="100px"><h2>David</h2><p>22, He/His/Him, Cambridge, 2 miles away</p></a>'
        // $("#allprevMatches").html(buttonHTML);
    }
}

function toggleUnmatch(profileIndex){
  if(!matchedWith[profileIndex-1]){
    $('#buttonProfile'+ profileIndex.toString()).html('Unmatch');
    matchedWith[profileIndex-1] = true;
        $('#popup1').show();

  }else{
    $("#buttonProfile"+ profileIndex.toString()).html('Match');
    $('#popup1').hide();
    matchedWith[profileIndex-1] = false;
    var buttonHTML = "";
    buttonHTML += '';
    $("#allprevMatches").html(buttonHTML);
    $("#no-matches").show();
    $("#match-list").hide();

  }
}

function submitMessage(n) {
    var number = n;
    var stringnumber = number.toString();
    var string1 = "msgarea";
    var res1 = string1.concat(stringnumber);
    var output = document.getElementById(res1).value;
    var content = document.createElement('div');
    content.innerHTML = 'You:' + output;
    var string2 = "allMsgs";
    var res2 = string2.concat(stringnumber);
    document.getElementById(res2).appendChild(content);
}

function search(){
  var search_results_html = '<a class="ui-btn" href="profile1.html"><div class="ui-grid-a"><div class="ui-block-a"><img src="pics/t1.jpg" alt="profile1" width="80px"></div><div class="ui-block-b"><h1>David</h1>2 miles away</div></div></a><a class="ui-btn" href="profile2.html"><div class="ui-grid-a"><div class="ui-block-a"><img src="pics/t2.jpg" alt="profile2" width="80px"></div><div class="ui-block-b"><h1>Christi</h1>1 mile away</div></div></a><a class="ui-btn" href="profile3.html"><div class="ui-grid-a"><div class="ui-block-a"><img src="pics/t3.jpg" alt="profile3" width="80px"></div><div class="ui-block-b"><h1>Tomo</h1>3 miles away</div></div></a></div>';
  $(".search-results").html(search_results_html);
}

function message(messageIndex){
    var msgHTML = "";
    var noMessages = true;
    messaged[messageIndex-1] = true;
    for (i = 0; i < messaged.length; i++){
        if (messaged[i]){
            noMessages = false;
            var num = i+1
            msgHTML += '<div> <img src="pics/t' + num + '.jpg" alt="profile" width="50px"> <a href="#profile' + num + '">' + profileList[i] +'</a> <a data-inline="true" data-role="button" href="#chat' + num + '">Chat</a> </div>'
        }
    }
    if(!noMessages){
      $("#previousMessages").html('');
    }
    $("#previousMessages").html(msgHTML);

}

function message1(){
    for (i = 0; i < messaged.length; i++){
        if (messaged[i] == true){
            var num = i+1
            //msgHTML += '<div>woof</div>'
            msgHTML += '<div> <img src="pics/t' + num + '.jpg" alt="profile" width="50px"> <a href="profile' + num + '.html">' + profileList[i] +'</a> <a data-inline="true" data-role="button" href="chat' + num + '.html" >Chat</a> </div>'
        }
    }
    $("#previousMessages").html(msgHTML);

}
