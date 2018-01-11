// Counting Sundays
// Problem 19
// You are given the following information, but you may prefer to do some
// research for yourself.
//
// 1 Jan 1900 was a Monday.
// Thirty days has September, April, June and November.
// All the rest have thirty-one, Saving February alone,
// Which has twenty-eight, rain or shine.
// And on leap years, twenty-nine.
// A leap year occurs on any year evenly divisible by 4, but not on a century
// unless it is divisible by 400. How many Sundays fell on the first
// of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

// WIP...

const isLeapYear = (year) => {
  let isLeap = false;
  if (year % 400 == 0) {
    isLeap = true;
  } else {
    if (year % 4 == 0 && year % 100 != 0) {
      isLeap = true;
    }
  }
  return isLeap;
}

let dayNames = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

let monthDayLookup = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31
};

const calcSundays = () => {
  let startYear    = 1900;
  let startMonth   = 1;
  let startDay     = 1;
  let startDayName = 'Monday';
  let endYear      = 2000;
  let endMonth     = 12;
  let endDay       = 31;
}
