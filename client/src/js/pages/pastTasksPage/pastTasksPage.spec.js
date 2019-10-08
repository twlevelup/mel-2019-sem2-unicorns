const PastTasksPage = require('./pastTasksPage');
const StorageHub = require('watch-framework').StorageHub;

describe('PastTasksPage', () => {

  describe('#render', () => {
    it('should render my specific tasks', () => {
      const tasks = [
        { name: 'hi', time: '1234', status: "done" },
      ];
      StorageHub.setData('pasttasks', tasks)
      const page = new PastTasksPage();
      page.pageWillLoad();
      expect(page.render()).toContain("<span>Description: hi</span>");
      expect(page.render()).toContain("<span>Time: 1234</span>");
      expect(page.render()).toContain("<span>Status: done</span>");
    });
  });

});
