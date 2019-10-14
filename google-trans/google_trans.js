// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// The onClicked callback function.
function onClickHandler(info, tab) {
  var url = "https://translate.google.cn/#auto/" + chrome.i18n.getUILanguage() + "/" + encodeURI(info.selectionText);
	chrome.windows.create({ url: url, width: 736, height: 860, left: 592 });
  // chrome.tabs.query({ active: true }, function (tabs) { chrome.tabs.create({ url: url, index: tabs[0].index + 1, openerTabId: tabs[0].id }); });
};

chrome.contextMenus.onClicked.addListener(onClickHandler);

// Set up context menu tree at install time.
chrome.runtime.onInstalled.addListener(function() {
  // Create one test item for each context type.
  
  chrome.contextMenus.create({"title":"google trans '%s'", "contexts":["selection"], "id": "context-selection"});

});

