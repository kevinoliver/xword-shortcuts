# scrolless

A Safari browser extension that adds keyboard shortcuts to the NYTimes Crossword puzzle
for the pencil and pausing.

## Why


## Installation

I haven't dealt with packaging this up into an easy download (read as: paid for an Apple developer account).
To install, open the extension in Xcode and use `Product > Run` to [launch it](https://developer.apple.com/documentation/safariservices/safari_web_extensions/running_your_safari_web_extension#3744471).
Then turn on Developer mode in Safari and then [allow running of unsigned extensions](https://developer.apple.com/documentation/safariservices/safari_web_extensions/running_your_safari_web_extension#3744467).

While this is a Safari browser extension I'm pretty sure that it'd work with Chrome, Firefox, or any other browser supporting the [WebExtensions API](https://extensionworkshop.com/documentation/develop/about-the-webextensions-api/). See the files in [`xword-shortcuts/Resources/`](xword-shortcuts/Resources/).

## Usage

To pause or unpause, press `Control`.
To toggle the pencil tool, press `Alt` or `Option`.
