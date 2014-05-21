Search Verbatim (sic)
=====================

# Overview
Search Verbatim (sic) is a browser extension which forces Google to use Verbatim searching and adds the plus ('+') sign to all search terms in DuckDuckGo. This is important now that virtually all common search engines use some sort of fuzzy pattern matching, the details of which are obscure, and kept hidden from users. 

Google and DDG are the only two search engines I use regularly enough to know the operators for; I am happy to add more search engines - message me on GitHub with details of the search engine and how to enable verbatim mode.

# Browser Support
The extension was designed in Opera and works in both Chrome and Opera desktop editions.

# Installation
For most users, it is sufficient to drag the relevent packed browser extension into the browser extensions management page. The packed extensions live in the "extensions" directory in this repository. For Opera, use sic.nex. For Chrome, use sic.crx.

# Privacy Information
Contrary to the information given in the extensions information panel, the extension does not actually request privildges for all URLs. Instead, it operates on the following pages:
	* "http://*/search?*"
	* "https://*/search?*"
	* "*://www.duckduckgo.com/?q=*"
	* "*://duckduckgo.com/?q=*"
At no point will the extension ever communicate in any way with any process outside of Google and DDG.

# Documentation and Further Information
https://github.com/stormsaber/sic-extension. Please submit all bug reports in a timely manner so that this extension can be made better.

# Licence
All code and icons are licenced under the GPLv.2