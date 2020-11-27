const clipboard = equire('clipboardy') // Clipboardy lets us read and write to the clipboard
const { purify } = require('profanity-util') // Profanity Util lets us censor stuff
clipboard.writeSync(purify(clipboard.readSync())[0]) // Replace the clipboard with the censored version
