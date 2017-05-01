var messageList = {
    listName: "MessagesList",
    newMessages: [
    ]
}

var profileList = ['David','Christi','Tomo','Avery','Constantine','Jhaelle'];
var matchedWith = [false,false,false,false,false,false];
var messaged = [false,false,false,false,false,false];
var dismissed = [];

function match(n) {
    if (matchedWith[n-1]){
        var buttonHTML = "";
        // $("#no-matches").hide();
        // $("#match-list").show();
        // $("#allprevMatches").html('');
        // buttonHTML += '<a href="profile1.html"><img src="pics/t1.jpg" width="100px"><h2>David</h2><p>22, He/His/Him, Cambridge, 2 miles away</p></a>'
        // $("#allprevMatches").html(buttonHTML);
    }
}

function dismiss(n){
    dismissed.push(n-1);
    $('#search-profile'+n.toString()).hide();
}

// input = int representing [0:camping out; 1:splitting a room; 2:sharing a meal]
// Would define user classes but this is a prototype
// User1: 1,1,0; User2: 1,0,1; User3: 1,1,1; User4: 0,1,1; User5-6:1,1,0
function filter(n){
    switch(n){
        case 0:
            $('#search-profile4').toggle($('search-checkbox-camping').checked);
            break;
        case 1:
            $('#search-profile2').toggle($('search-checkbox-rooming').checked);
            break;
        case 2:
            $('#search-profile1').toggle($('search-checkbox-meal').checked);
            $('#search-profile5').toggle($('search-checkbox-meal').checked);
            $('#search-profile6').toggle($('search-checkbox-meal').checked);
            break;

    }
    for(i = 0; i < 6; i++){
        if(matchedWith[i] || i in dismissed){
            $("#search-profile" + i + 1).hide();
        }
    }
}

function toggleUnmatch(profileIndex){
  if(!matchedWith[profileIndex-1]){
    $('#buttonProfile'+ profileIndex.toString()).html('Unmatch');
    if (profileIndex != 2 && profileIndex != 3 && profileIndex != 5){
        matchedWith[profileIndex-1] = true;
    }
    $('#popup').show();

  }else{
    $("#buttonProfile"+ profileIndex.toString()).html('Match');
    $('#popup').hide();
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
    content.innerHTML = '<div align="right">You:</div> <div style="background-color: #ffad33; padding: 9px; border: white;border-width: thick; margin-bottom:5px; border-radius:15px" align="right">' + output + '</div>';
    var string2 = "allMsgs";
    var res2 = string2.concat(stringnumber);
    document.getElementById(res2).appendChild(content);
    document.getElementById(res1).value = "";
    document.getElementById(res1).setAttribute('style','');
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
