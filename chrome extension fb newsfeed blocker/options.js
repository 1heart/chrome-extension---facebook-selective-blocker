// Saves options to chrome.storage.sync.
function save_options() {
  var nf = document.getElementById('newsfeed').checked;
  var m = document.getElementById('messaging').checked;
  var p = document.getElementById('profiles').checked;
  var g = document.getElementById('groups').checked;
  chrome.storage.sync.set({
    nf: nf,
    m: m,
    p: p,
    g: g
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    nf: true,
    m: true,
    p: true,
    g: true
  }, function(items) {
    document.getElementById('newsfeed').checked = items.nf;
    document.getElementById('messaging').checked = items.m;
    document.getElementById('profiles').checked = items.p;
    document.getElementById('groups').checked = items.g;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);

