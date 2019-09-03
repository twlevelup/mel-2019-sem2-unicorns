const BaseNotification = require("watch-framework").BaseNotification;
const NotificationHub = require("watch-framework").NotificationHub;

module.exports = class DemoNotification extends BaseNotification {
  template = require("./DemoNotification.hbs");
};