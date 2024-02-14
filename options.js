document.getElementById('applyTheme').addEventListener('click', function(){
  var selectedTheme = document.getElementById('theme').value;
  chrome.tabs.query(
    {active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {action: 'applyTheme', theme: selectedTheme});
  });
});