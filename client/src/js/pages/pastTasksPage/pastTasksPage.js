const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;

class PastTasksPage extends BasePage {
  template = require('./pastTasksPage.hbs');

  pageWillLoad() {
    this.tasks = StorageHub.getData('pasttasks')
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



module.exports = PastTasksPage;
