"use strict"

//* create day, week, worker objects
class day {
 constructor(name, start, end) {
  this.name = name;
  this.start = start;
  this.end = end;
  this.hoursArray = [...Array(end - start + 1).keys()].map((i) => new Object({ hour: i + start, worker: null }));
 };
}

class week {
 constructor(...days) {
  this.days = [...days];
 }

 getDay(name) {
  for (let i = 0; i < this.days.length; i++) {
   if (this.days[i].name === name) {
    return this.days[i];
   }
  }
 }
}

class worker {
 constructor(name, hoursPerWeek, rules = null) {
  this.name = name;
  this.hoursPerWeek = hoursPerWeek;
  this.rules = rules;
 }
}

//* initialize day and week objects
let monday = new day('monday', 8, 17);
let tuesday = new day('tuesday', 8, 17);
let wednesday = new day('wednesday', 8, 17);
let thursday = new day('thursday', 8, 17);
let friday = new day('friday', 8, 17);
let saturday = new day('saturday', 8, 17);
let sunday = new day('sunday', 8, 17);


let week1 = new week(monday, tuesday, wednesday, thursday, friday, saturday, sunday);


console.log(week1.days)