// const d = new Date();
// console.log(d);
// console.log(d.valueOf());

//
// console.log(new Date(2015, 0)); // 12:00 A.M., Jan 1, 2015
// console.log(new Date(2015, 1)); // 12:00 A.M., Feb 1, 2015
// console.log(new Date(2015, 1, 14)); // 12:00 A.M., Feb 14, 2015
// console.log(new Date(2015, 1, 14, 13)); // 3:00 P.M., Feb 14, 2015
// console.log(new Date(2015, 1, 14, 13, 30)); // 3:30 P.M., Feb 14, 2015
// console.log(new Date(2015, 1, 14, 13, 30, 5)); // 3:30:05 P.M., Feb 14, 2015
// console.log(new Date(2015, 1, 14, 13, 30, 5, 500));


// console.log(new Date(0)); // 12:00 A.M., Jan 1, 1970 UTC
// console.log(new Date(1000)); // 12:00:01 A.M., Jan 1, 1970 UTC
// console.log(new Date(1463443200000));
// console.log(Date.now());
// console.log(new Date(Date.now()));

/** ** creates dates from Unix Epoch* */
// console.log(new Date(-365*24*60*60*1000));


/** * parsing date strings* */
//
// console.log(new Date('June 14, 1903')); // 12:00 A.M., Jun 14, 1903 local time
// console.log(new Date('14 June, 1903 GMT-0000'));


/** * Data to server* */

// const before = { d: new Date() };
// console.log(before.d instanceof Date) // true
// const json = JSON.stringify(before);
// const after = JSON.parse(json);
// console.log(after.d instanceof Date) // false
// console.log(typeof after.d)
// after.d = new Date(after.d);
// console.log(after.d instanceof Date)
//
//
// const before = { d: new Date().valueOf() };
// console.log(typeof before.d) // "number"
// const json = JSON.stringify(before);
// const after = JSON.parse(json);
// console.log(typeof after.d) // "number"
// const d = new Date(after.d);
// console.log(d);

/** Displaying Dates */

// const d = new Date(Date.UTC(1930, 4, 10));
// // these show output for someone in Los Angeles
//  console.log(d.toLocaleDateString()); // "5/9/1930"
// console.log(d.toLocaleTimeString()); // "4:00:00 PM"
// console.log(d.toTimeString());// "17:00:00 GMT-0700 (Pacific Daylight Time)"
// console.log(d.toUTCString());// "Sat, 10 May 1930, 00:00:00 GMT"
// const moment = require('moment');
// console.log(moment(d).format("YYYY-MM-DD")); // "1930-05-09"
// console.log(moment(d).format("YYYY-MM-DD HH:mm")); // "1930-05-09 17:00
// console.log(moment(d).format("YYYY-MM-DD HH:mm Z")); // "1930-05-09 17:00 -07:00
// console.log(moment(d).format("YYYY-MM-DD HH:mm [UTC]Z")); // "1930-05-09 17:00 UTC-07:00
// console.log(moment(d).format("dddd, MMMM [the] Do, YYYY")); // "Friday, May the 9th, 1930"
// console.log(moment(d).format("h:mm a"));


/** Date Components** */

// const d = new Date(Date.UTC(1815, 9, 10));
// // these are the results someone would see in Los Angeles
// console.log(d.getFullYear()) // 1815
// console.log(d.getMonth())// 9 - October
// console.log(d.getDate()) // 9
// console.log(d.getDay()) // 1 - Monday
// console.log(d.getHours()) // 17
// console.log(d.getMinutes()) // 0
// console.log(d.getSeconds()) // 0
// console.log(d.getMilliseconds()) // 0
// // there are allso UTC equivalents to the above:
// console.log(d.getUTCFullYear()) // 1815
// console.log(d.getUTCMonth())// 9 - October
// console.log(d.getUTCDate())
//
// /**Comparing Dates**/
// const d1 = new Date(1996, 2, 1);
// const d2 = new Date(2009, 4, 27);
// console.log(d1 > d2); // false
// console.log(d1 < d2); // true


/** Date Arithmetic* */
// const moment = require('moment');
//  const msDiff = d2 - d1;
//  console.log(msDiff)// 417740400000 ms
// const daysDiff = msDiff/1000/60/60/24; // 4834.96 days
// console.log(daysDiff)
// const dates = [];
// // // create some random dates
// const min = new Date(2017, 0, 1).valueOf();
// const delta = new Date(2020, 0, 1).valueOf() - min;
// for (let i = 0; i < 10; i++) {
//   dates.push(new Date(min + delta * Math.random()));
// }
//
// // // dates are random and (probably) jumbled
// // // we can sort them (descending):
//  console.log(dates.sort((a, b) => b - a));
// // // or ascending:
//  console.log(dates.sort((a, b) => a - b));
// const moment = require('moment');

// const m = moment(); // now
// m.add(3, 'days') // m is now three days in the future
//   .subtract(2, 'years') // m is now two years minus three days in the past
//   .startOf('year') // m is now Jan 1 of this year
//   .endOf('month');
// //
// console.log(m.toDate());

/** *User-Friendly Relative Dates** */

// moment().subtract(10, 'seconds').fromNow(); // a few seconds ago
// moment().subtract(44, 'seconds').fromNow(); // a few seconds ago
// moment().subtract(45, 'seconds').fromNow(); // a minute ago
// moment().subtract(5, 'minutes').fromNow(); // 5 minutes ago
// moment().subtract(44, 'minutes').fromNow(); // 44 minutes ago
// moment().subtract(45, 'minutes').fromNow(); // an hour ago
// moment().subtract(5, 'hours').fromNow(); // 4 hours ago
// moment().subtract(21, 'hours').fromNow(); // 21 hours ago
// moment().subtract(22, 'hours').fromNow(); // a day ago
// moment().subtract(344, 'days').fromNow(); // 344 days ago
// moment().subtract(345, 'days').fromNow(); // a year ago


/** Fixed Decimals* */
// const x = 19.51;
// x.toFixed(3); // "19.510"
// x.toFixed(2); // "19.51"
// x.toFixed(1); // "19.5"
// x.toFixed(0); // "20"

/** Exponential Notation* */
// const x = 3800.5;
// x.toExponential(4); // "3.8005e+4";
// x.toExponential(3); // "3.801e+4";
// x.toExponential(2); // "3.80e+4";
// x.toExponential(1); // "3.8e+4";
// x.toExponential(0); // "4e+4";


/** *Fixed Precision */
// let x = 1000;
// x.toPrecision(5); // "1000.0"
// x.toPrecision(4); // "1000"
// x.toPrecision(3); // "1.00e+3"
//
// x.toPrecision(2); // "1.0e+3"
// x.toPrecision(1); // "1e+3"
// x = 15.335;
// x.toPrecision(6); // "15.3350"
// x.toPrecision(5); // "15.335"
// x.toPrecision(4); // "15.34"
// x.toPrecision(3); // "15.3"
// x.toPrecision(2); // "15"
// x.toPrecision(1); // "2e+1"


/** * Bases */
// const x = 12;
// x.toString(); // "12" (base 10)
// x.toString(10); // "12" (base 10)
// x.toString(16); // "c" (hexadecimal)
// x.toString(8); // "14" (octal)
// x.toString(2); // "1100" (binary)


/** Math Object */
// console.log(Math.min(...[1,2,3]));
// console.log(2**2)
