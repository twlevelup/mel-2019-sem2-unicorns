const DemoNotification = require("./DemoNotification");

describe("DemoNotification", () => {
    describe("#render", () => {
      it("should render my page correctly", () => {
        const notification = new DemoNotification();
        expect(notification.render()).toContain("This is a Demo Notification:");
      });
    });
});
