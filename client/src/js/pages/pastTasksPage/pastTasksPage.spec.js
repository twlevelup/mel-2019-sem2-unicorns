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
      expect(page.render()).toContain("Time:");
      expect(page.render()).toContain("Status:");
    });
  });

});
