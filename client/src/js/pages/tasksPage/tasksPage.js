const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;

class TasksPage extends BasePage {
  template = require('./tasksPage.hbs');
}

module.exports = TasksPage;
