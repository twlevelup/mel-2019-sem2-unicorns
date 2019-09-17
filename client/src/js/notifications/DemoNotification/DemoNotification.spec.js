const DemoNotification = require("./DemoNotification");

describe("DemoNotification", () => {
    describe("#render", () => {
      it("should render my page correctly", () => {
        const notification = new DemoNotification();
        const renderedNotification = notification.render();
        expect(renderedNotification).toContain("This is a Demo Notification:");

        ///const image = document.getElementById("pusheen").src;
        expect(renderedNotification).toContain("pusheen.png");
      });
    });


    describe("#rightButtonEvent", () => {
        it("highlight message in red", () => {
          document.body.innerHTML = `<div id='message'></div>`;
          const notification = new DemoNotification();
          notification.rightButtonEvent();
          expect(document.getElementById('message').style.backgroundColor).toBe('red');
        });
    });
});


