var messageList = {
    listName: "MessagesList",
    newMessages: [
    ]
}

var profileList = ['David','Christi','Tomo','Avery','Constantine','Jhaelle'];
var matchedWith = [false,false,false,false,false,false];
var messaged = [false,false,false,false,false,false];
var dismissed = [];
var rated = [false,false,false,false,false,false];

function dismiss(n){
    dismissed.push(n-1);
    $('#search-profile'+n.toString()).hide();
}

function rate(n){
    rated[n-1] = true;
    $("#ratebutton"+n.toString()).hide();
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
