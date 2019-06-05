const c = require('clipboardy');
c.writeSync(require("profanity-util").purify(c.readSync())[0]);