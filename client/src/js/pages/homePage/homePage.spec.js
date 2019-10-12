const HomePage = require('./homePage');
const StorageHub = require('watch-framework').StorageHub;
const AudioHub = require('watch-framework').AudioHub;

describe('HomePage', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#pageWillLoad', () => {
    it('should set tasks data on page load', () => {
      const page = new HomePage();
      page.pageWillLoad();
      expect(page.tasks[0].name).toEqual('Take medication');
      expect(page.tasks[1].name).toEqual('Doctor\'s appointment');
    })
  })

  describe('#render', () => {
    it('should render my page correctly', () => {
      const page = new HomePage();
      expect(page.render()).toContain("<div>You're On Track!</div>");
    });
  });

  describe('#leftButtonEvent', () => {
    it('goes to Past tasks page', () => {
      const page = new HomePage();
      spyOn(page, 'navigate');

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('pasttasks');
    });
  });

  describe('#rightButtonEvent', () => {
    it('goes to tasks page', () => {
      const page = new HomePage();
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('tasks');
    });
  });

  describe('#bottomButtonEvent', () => {
    it('scrolls page down', () => {

      const page = new HomePage({ watchFace });

      page.bottomButtonEvent();

      expect(watchFace.scrollTop).toEqual(40);

    });
  });

  describe('#topButtonEvent', () => {
    it('scrolls page up', () => {
      const page = new HomePage({ watchFace });

      page.topButtonEvent();

      expect(watchFace.scrollTop).toEqual(-40);
    });
  });

  describe('#updateTimeDisplay', () => {
    it('updateTimeDisplays calls clock-time if its in the window', () => {
      const page = new HomePage();

      watchFace.innerHTML = page.render();

      jest.spyOn(page, "getDateTime");
      page.updateTimeDisplay(page.getDateTime);
      expect(page.getDateTime).toHaveBeenCalledTimes(1);
    });
  });

  describe('#updateTimeDisplay', () => {
    it('updateTimeDisplays does not call clock-time if its not in the window', () => {
      const page = new HomePage();

      jest.spyOn(page, "getDateTime");
      page.updateTimeDisplay(page.getDateTime);
      expect(page.getDateTime).toHaveBeenCalledTimes(0);
    });
  });

  describe('#updateTimeEverySecond', () => {
    it('update time display gets called three times in 3000 ms', () => {
      const page = new HomePage();

      spyOn(page, 'updateTimeDisplay');

      jest.useFakeTimers();
      page.updateTimeEverySecond();
      jest.runTimersToTime(3000);

      expect(page.updateTimeDisplay).toHaveBeenCalledTimes(3);
    });
  });

  // Given that the tasks are overdue, when the page has loaded, then the background of the homepage should be red
  describe('#overdueTasks', () => {
    it('should change the homepage background to red', () => {
      const page = new HomePage();

      page.pageWillLoad();
      const renderPage = page.render();

      expect(renderPage).toContain("alert");
    });
  });
});
