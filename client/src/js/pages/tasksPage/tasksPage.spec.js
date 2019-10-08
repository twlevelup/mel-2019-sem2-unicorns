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
      expect(page.render()).toContain("<span>Description: hi</span>");
      expect(page.render()).toContain("<span>Time: 1234</span>");
      expect(page.render()).toContain("<span>Status: done</span>");
    });
  });

});