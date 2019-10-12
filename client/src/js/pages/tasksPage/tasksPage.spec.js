const TasksPage = require('./tasksPage');
const StorageHub = require('watch-framework').StorageHub;

describe('TasksPage', () => {

  describe('#render', () => {
    it('should render my specific tasks', () => {
      const tasks = [
        { name: 'hi', time: '1234', status: "done" },
      ];
      StorageHub.setData('tasks', tasks)
      const page = new TasksPage();
      page.pageWillLoad();
      expect(page.render()).toContain("Time:");
      expect(page.render()).toContain("Status:");
    });
  });

});
