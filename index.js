/**
 * v6
 *
 * @url https://github.com/fox34/homebridge-fritz-platform
 * @author SeydX <seyd55@outlook.de>
 * @author fox34 <homebridge-fritz-platform@noecho.de>
 *
 */

'use strict';

module.exports = function (homebridge) {
  let FritzPlatform = require('./src/platform.js')(homebridge);
  homebridge.registerPlatform('homebridge-fritz-platform', 'FritzPlatform', FritzPlatform, true);
};
