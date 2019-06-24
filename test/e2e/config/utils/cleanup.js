const fs_extra = require('fs-extra');

fs_extra.emptyDir('./reports');
fs_extra.removeSync('./combined.log');