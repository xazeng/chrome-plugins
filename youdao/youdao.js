// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// The onClicked callback function.
function onClickHandler(info, tab) {
	// alert(JSON.stringify(info));
  var url = "http://dict.youdao.com/search?q=" + encodeURI(info.selectionText) + "&keyfrom=dict.index";
	chrome.windows.create({ url: url, width: 736, height: 860, left: 592 });
  // chrome.tabs.query({active:true}, function(tabs){ chrome.tabs.create({ url: url, index: tabs[0].index+1, openerTabId:tabs[0].id }); });
};

chrome.contextMenus.onClicked.addListener(onClickHandler);

// Set up context menu tree at install time.
chrome.runtime.onInstalled.addListener(function() {
  // Create one test item for each context type.
  
  chrome.contextMenus.create({"title":"有道翻译 '%s'", "contexts":["selection"], "id": "context-selection"});

});

