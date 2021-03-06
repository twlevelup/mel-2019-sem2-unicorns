const AlertNotification = require('./notifications/AlertNotification/AlertNotification');
const DemoNotification = require('./notifications/DemoNotification/DemoNotification');

const notifications = [
  {
    type: "alert",
    label: "Alert",
    defaultValue: "This is a test alert",
    view: AlertNotification,
  },
  {
    type: "demo",
    label: "Demo",
    defaultValue: "Our First Notification!",
    view: DemoNotification,
  },
  {
    type: "base",
    label: "Base",
    defaultValue: "This is a test base notification",
  },
];


module.exports = notifications;
