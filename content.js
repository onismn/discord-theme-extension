chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'applyTheme') {
    applyTheme(request.theme);
  }
});

// Apply "sideways-ocean" theme by default
applyTheme('sideways-ocean');

function applyTheme(theme) {
  // Logic to apply the selected theme
  var themeScript = document.createElement('script');
  themeScript.src = chrome.runtime.getURL('themes/' + theme + '.js');
  document.head.appendChild(themeScript);
}