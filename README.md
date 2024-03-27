# xword-shortcuts

A Safari browser extension that adds keyboard shortcuts to the NYTimes Crossword puzzle
for the pencil and pausing.

## Why

I like the NYT crossword and normally do it on my phone. So when I use the computer for it,
I kept wishing there was a faster way to toggle the pencil tool and to pause. Maybe
I'll solve more of them on my computer now with this.

## Installation

I haven't dealt with packaging this up into an easy download (read as: paid for an Apple developer account).
To install, open the extension in Xcode and use `Product > Run` to [launch it](https://developer.apple.com/documentation/safariservices/safari_web_extensions/running_your_safari_web_extension#3744471).
Then turn on Developer mode in Safari and then [allow running of unsigned extensions](https://developer.apple.com/documentation/safariservices/safari_web_extensions/running_your_safari_web_extension#3744467).

While this is a Safari browser extension I'm pretty sure that it'd work with Chrome, Firefox, or any other browser supporting the [WebExtensions API](https://extensionworkshop.com/documentation/develop/about-the-webextensions-api/). See the files in [`xword-shortcuts Extension/Resources/`](xword-shortcuts%20Extension/Resources/).

## Usage

To pause or unpause, press `Control`.
To toggle the pencil tool, press `Alt` or `Option`.

## Attribution

The [crossword icon](https://icons8.com/icon/4BA2477uXCGm/crossword) is by [Icons8](https://icons8.com).
