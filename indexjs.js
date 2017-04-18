var messageList = {
    listName: "MessagesList",
    newMessages: [
    ]
}

var profileList = ['David','Christi','Tomo'];
var matchedWith = [false,false,false];
var messaged = [false,false,false];


function match(n) {
        var buttonHTML = "";
        buttonHTML += '<a class="ui-btn" href="profile' + n + '.html">' + profileList[n-1] + '</a>';
        //buttonHTML += '<div>WORK</div>'
        $("#allprevMatches").html(buttonHTML);
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
    messaged[messageIndex-1] = true;
    for (i = 0; i < messaged.length; i++){
        if (messaged[i] == true){
            var num = i+1
            //msgHTML += '<div>woof</div>'
            msgHTML += '<div> <img src="pics/t' + num + '.jpg" alt="profile" width="50px"> <a href="profile' + num + '.html">' + profileList[i] +'</a> <a data-inline="true" data-role="button" href="chat' + num + '.html" >Chat</a> </div>'
        }
    }
    $("#previousMessages").html(msgHTML);

}
