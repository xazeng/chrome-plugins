// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// The onClicked callback function.
function onClickHandler(info, tab) {
	// alert(JSON.stringify(info));
    var url = "https://www.baidu.com/s?ie=UTF-8&wd=" + encodeURI(info.selectionText);
  chrome.tabs.query({active:true, highlighted: true}, function(tabs){
    chrome.windows.getLastFocused(null, function(win){
      for(i in tabs) {
        var t = tabs[i];
        if (t.windowId == win.id) {
           chrome.tabs.create({ url: url, index: t.index+1, openerTabId:t.id });
           break;
          }
      }
    });
  });
};

chrome.contextMenus.onClicked.addListener(onClickHandler);

// Set up context menu tree at install time.
chrome.runtime.onInstalled.addListener(function() {
  // Create one test item for each context type.
  
  chrome.contextMenus.create({"title":"百度搜索 '%s'", "contexts":["selection"], "id": "context-selection"});

});

