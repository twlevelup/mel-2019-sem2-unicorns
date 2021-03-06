const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;

class TasksPage extends BasePage {
  template = require('./tasksPage.hbs');

  pageWillLoad() {
    this.tasks = StorageHub.getData('tasks')
  }

  faceButtonEvent() {
    this.navigate('/');
  }

  topButtonEvent() {
    this.watchFace.scrollTop -= 40;
  }

  bottomButtonEvent() {
    this.watchFace.scrollTop += 40;
  }

}



module.exports = TasksPage;
