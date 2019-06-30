const clipboard = require('clipboardy') // Clipboardy lets us read and write to the clipboard
const pure = require('profanity-util').purify // Profanity Util lets us censor stuff
clipboard.writeSync(pure(clipboard.readSync())[0]) // Replace the clipboard with the censored version
