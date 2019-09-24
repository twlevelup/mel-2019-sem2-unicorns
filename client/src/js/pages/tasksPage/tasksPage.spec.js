const TasksPage = require('./tasksPage');

describe('TasksPage', () => {

  describe('#render', () => {
    it('should render', () => {
      const page = new TasksPage();
      page.pageWillLoad();
      expect(page.render()).toContain("Name: hi");
    });
  });

});
