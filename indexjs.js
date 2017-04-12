var messageList = {
    listName: "MessagesList",
    newMessages: [
    ]
}


function match(n) {
    var buttonHTML = "";
    buttonHTML += '<a class="ui-btn" href="#profile' + n + '">Profile' + n + '</a>';
    $("#allprevMatches").html(buttonHTML);
   /* var content = document.createElement('div');
    content.innerHTML = 'class="ui-btn" href="#profile' + n + '">Profile ' + n;
    //document.getElementById('allprevMatches').appendChild(content);
    content += '<a class="ui-btn" href="#profile' + n + '">Profile' + n + '</a>';
    $("#allprevMatches").appendChild(content);*/
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

