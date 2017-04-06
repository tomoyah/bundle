var messageList = {
    listName: "MessagesList",
    newMessages: [
    ]
}

window.onbeforeunload = function() {
    localStorage.setItem('Stickys', JSON.stringify(StickyNoteList.newMessages));
}

function displayMessage(){

}

function submitMessage() {
    $("listName").html(messageList.listname);
    var output = document.getElementById("msgarea").value;
    messageList.newMessages.push(output)
    var messageHtml = "";
    messageHtml += '<div data-inline="true">' + messageList.newMessages + '/>';
    $("#allMsgs").html(messageHtml);

}

