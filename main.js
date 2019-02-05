function saveTarget(authToken, identifier) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'https://memworld.herokuapp.com/api/targets/', true);
    xhr.setRequestHeader('Authorization', 'Token ' + authToken)
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify({"identifier": identifier}));
}

function onClick(info, tab) {
    if (!info.selectionText) return

    chrome.storage.sync.get({
        memworldToken: '',
    }, function (items) {
        if (items.memworldToken) {
            saveTarget(items.memworldToken, info.selectionText)
        }
    });

}

chrome.contextMenus.create({"title": "Add to MemWorld", "contexts":["all"], "onclick": onClick});
