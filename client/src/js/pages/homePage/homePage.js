import { getTasks } from '../../tasks';

const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;
const AudioHub = require('watch-framework').AudioHub;
const logo = require('../../../images/logo.png');
const plop = './sounds/plop.mp3';
const isRed = false;

//test for raspberrypi
class HomePage extends BasePage {
  template = require('./homePage.hbs');
  date = new Date(Date.now());
  first = true;

  pageWillLoad() {
    // if(this.first){
    //   console.log("FIRST!!!");
    //   this.first = false;
    // }

    //if (StorageHub.getData('tasks')==null) {
      StorageHub.setData('tasks', [
        { name: 'Take medication', time: this.setDateTime1(10), status: 'todo' },
        { name: 'Doctor\'s appointment', time: this.setDateTime1(1800), status: 'todo' },
     ]);
    //}
    //if (StorageHub.getData('tasks')==null) {
      StorageHub.setData('pasttasks', [
       { name: 'Take Morning Medication', time: this.setDateTime1(-1800), status: 'todo' },
     ]);
    //}

    this.updateTimeEverySecond();
    const dateTime = this.getDateTime();
    this.date = dateTime.date;
    this.time = dateTime.time;
    this.logo = logo;
    this.isRed = isRed;

    console.log(isRed);
    this.updatePastTasks();
    // this.task = task;
  }

  getDateTime() {
    const dateTime = new Date(Date.now()).toLocaleString('en-AU').split(",");
    return {
      date: dateTime[0],
      time: dateTime[1],
    };
  }

  setDateTime1(secs) {
    const dateTime1 = new Date(Date.now());
    dateTime1.setSeconds(dateTime1.getSeconds() + secs);
    return dateTime1.toLocaleString('en-AU').split(",")[1];
  }

  updateTimeEverySecond() {
    setInterval(() => this.updateTimeDisplay(this.getDateTime), 1000);
  }

  updateTimeDisplay(getTime) {
    const clockTime = document.getElementById("clock-time");
    const one = this.setDateTime1(1800);
    const two = this.setDateTime1(1000);
    if (clockTime) {
      clockTime.textContent = getTime().time;
      this.checkOverdue();
      this.updatePastTasks();

    }
  }

  updatePastTasks(){

    this.current = StorageHub.getData('tasks');
    this.overdue = StorageHub.getData('pasttasks');
    // this.overdue.push({ name: 'Doctor\'s appointment', time: this.setDateTime1(1800), status: 'todo' });
    // StorageHub.setData('pasttasks', this.overdue);
    for(var i = 0; i < this.current.length; i++){
      const currentTime = this.setDateTime1(1);
      const currentTask = this.current[i];
      if(currentTask['time'] < currentTime){
        this.overdue.push(currentTask);
        this.current.splice(i,1);
      }
    }

    StorageHub.setData('pasttasks', this.overdue);
    StorageHub.setData('tasks', this.current);
  }

  checkOverdue() {
    this.overdue = StorageHub.getData('pasttasks');
    if(this.overdue[0]['status'] == "todo") {
      console.log("hi");
    }
  }

  faceButtonEvent() {
    this.navigate('/');
  }

  rightButtonEvent() {
    this.navigate('tasks');
  }

  leftButtonEvent() {
    this.navigate('pasttasks');
  }

  topButtonEvent() {
    this.watchFace.scrollTop -= 40;
  }

  bottomButtonEvent() {
    this.watchFace.scrollTop += 40;
  }
}

module.exports = HomePage;
