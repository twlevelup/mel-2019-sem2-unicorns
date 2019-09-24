const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;
const AudioHub = require('watch-framework').AudioHub;
const logo = require('../../../images/logo.png');
const plop = './sounds/plop.mp3';

//test for raspberrypi
class HomePage extends BasePage {
  template = require('./homePage.hbs');
  date = new Date(Date.now());

  pageWillLoad() {

    StorageHub.setData('task', [
      { name: 'Past task', time: this.date.setSeconds(this.date.getSeconds() - 5000).toString(), status: 'done'},      
      { name: 'Take medication', time: this.date.setSeconds(this.date.getSeconds() + 5000).toString(), status: 'todo' },
      { name: 'Doctor\'s appointment', time: this.date.setSeconds(this.date.getSeconds() + 10000).toString(), status: 'todo' },
    ])

    const task = StorageHub.getData('task');
    console.log(task);

    this.updateTimeEverySecond();
    const dateTime = this.getDateTime();
    this.date = dateTime.date;
    this.time = dateTime.time;
    this.logo = logo;
    this.task = task;
  }

  getDateTime() {
    const dateTime = new Date(Date.now()).toLocaleString('en-AU').split(",");
    return {
      date: dateTime[0],
      time: dateTime[1],
    };
  }

  updateTimeEverySecond() {
    setInterval(() => this.updateTimeDisplay(this.getDateTime), 1000);
  }

  updateTimeDisplay(getTime) {
    const clockTime = document.getElementById("clock-time");
    if (clockTime) {
      clockTime.textContent = getTime().time;
    }
  }

  faceButtonEvent() {
    this.navigate('demo');
  }

  rightButtonEvent() {
    this.navigate('contacts');
  }

  leftButtonEvent() {
    AudioHub.playSound(plop);
  }

  topButtonEvent() {
    this.watchFace.scrollTop -= 40;
  }

  bottomButtonEvent() {
    this.watchFace.scrollTop += 40;
  }
}

module.exports = HomePage;
