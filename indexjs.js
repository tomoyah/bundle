var messageList = {
    listName: "MessagesList",
    newMessages: [
    ]
}

var profileList = ['David','Christi','Tomo'];
var matchedWith = [false,false,false];

function match(n) {
    var buttonHTML = "";
    buttonHTML += '<a class="ui-btn" href="#profile' + n + '">' + profileList[n-1] + '</a>';
    $("#allprevMatches").html(buttonHTML);
   /* var content = document.createElement('div');
    content.innerHTML = 'class="ui-btn" href="#profile' + n + '">Profile ' + n;
    //document.getElementById('allprevMatches').appendChild(content);
    content += '<a class="ui-btn" href="#profile' + n + '">Profile' + n + '</a>';
    $("#allprevMatches").appendChild(content);*/
}

function toggleUnmatch(profileIndex){
  if(!matchedWith[profileIndex-1]){
    $('#buttonProfile'+ profileIndex.toString()).html('Unmatch');
    matchedWith[profileIndex-1] = true;
  }else{
    $("#buttonProfile"+ profileIndex.toString()).html('Match');
    matchedWith[profileIndex-1] = false;
  }
}

function submitMessage(n) {
    /*$("listName").html(messageList.listname);
    var output = document.getElementById("msgarea").value;
    messageList.newMessages.push(output)
    var messageHtml = "";
    messageHtml += '<div data-inline="true">' + messageList.newMessages + '</div>';
    $("#allMsgs").html(messageHtml);*/
    var number = n
    var stringnumber = number.toString()
    var string1 = "msgarea"
    var res1 = string1.concat(stringnumber)
    var output = document.getElementById(res1).value;
    var content = document.createElement('div');
    content.innerHTML = 'You:' + output;
    var string2 = "allMsgs"
    var res2 = string2.concat(stringnumber)
    document.getElementById(res2).appendChild(content);
}

function search(){
  var search_results_html = '<a class="ui-btn" href="#profile1"><div class="ui-grid-a"><div class="ui-block-a"><img src="pics/t1.jpg" alt="profile1" width="80px"></div><div class="ui-block-b"><h1>David</h1>2 miles away</div></div></a><a class="ui-btn" href="#profile2"><div class="ui-grid-a"><div class="ui-block-a"><img src="pics/t2.jpg" alt="profile2" width="80px"></div><div class="ui-block-b"><h1>Christi</h1>1 mile away</div></div></a><a class="ui-btn" href="#profile3"><div class="ui-grid-a"><div class="ui-block-a"><img src="pics/t3.jpg" alt="profile3" width="80px"></div><div class="ui-block-b"><h1>Tomo</h1>3 miles away</div></div></a></div>';
  $(".search-results").html(search_results_html);
}
