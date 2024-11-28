// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/date-fns/constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.secondsInYear = exports.secondsInWeek = exports.secondsInQuarter = exports.secondsInMonth = exports.secondsInMinute = exports.secondsInHour = exports.secondsInDay = exports.quartersInYear = exports.monthsInYear = exports.monthsInQuarter = exports.minutesInYear = exports.minutesInMonth = exports.minutesInHour = exports.minutesInDay = exports.minTime = exports.millisecondsInWeek = exports.millisecondsInSecond = exports.millisecondsInMinute = exports.millisecondsInHour = exports.millisecondsInDay = exports.maxTime = exports.daysInYear = exports.daysInWeek = exports.constructFromSymbol = void 0;
/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */

/**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */
const daysInWeek = exports.daysInWeek = 7;

/**
 * @constant
 * @name daysInYear
 * @summary Days in 1 year.
 *
 * @description
 * How many days in a year.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occurs every 4 years, except for years that are divisible by 100 and not divisible by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 */
const daysInYear = exports.daysInYear = 365.2425;

/**
 * @constant
 * @name maxTime
 * @summary Maximum allowed time.
 *
 * @example
 * import { maxTime } from "./constants/date-fns/constants";
 *
 * const isValid = 8640000000000001 <= maxTime;
 * //=> false
 *
 * new Date(8640000000000001);
 * //=> Invalid Date
 */
const maxTime = exports.maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * @constant
 * @name minTime
 * @summary Minimum allowed time.
 *
 * @example
 * import { minTime } from "./constants/date-fns/constants";
 *
 * const isValid = -8640000000000001 >= minTime;
 * //=> false
 *
 * new Date(-8640000000000001)
 * //=> Invalid Date
 */
const minTime = exports.minTime = -maxTime;

/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */
const millisecondsInWeek = exports.millisecondsInWeek = 604800000;

/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */
const millisecondsInDay = exports.millisecondsInDay = 86400000;

/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */
const millisecondsInMinute = exports.millisecondsInMinute = 60000;

/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */
const millisecondsInHour = exports.millisecondsInHour = 3600000;

/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */
const millisecondsInSecond = exports.millisecondsInSecond = 1000;

/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */
const minutesInYear = exports.minutesInYear = 525600;

/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */
const minutesInMonth = exports.minutesInMonth = 43200;

/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */
const minutesInDay = exports.minutesInDay = 1440;

/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */
const minutesInHour = exports.minutesInHour = 60;

/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */
const monthsInQuarter = exports.monthsInQuarter = 3;

/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */
const monthsInYear = exports.monthsInYear = 12;

/**
 * @constant
 * @name quartersInYear
 * @summary Quarters in 1 year
 */
const quartersInYear = exports.quartersInYear = 4;

/**
 * @constant
 * @name secondsInHour
 * @summary Seconds in 1 hour.
 */
const secondsInHour = exports.secondsInHour = 3600;

/**
 * @constant
 * @name secondsInMinute
 * @summary Seconds in 1 minute.
 */
const secondsInMinute = exports.secondsInMinute = 60;

/**
 * @constant
 * @name secondsInDay
 * @summary Seconds in 1 day.
 */
const secondsInDay = exports.secondsInDay = secondsInHour * 24;

/**
 * @constant
 * @name secondsInWeek
 * @summary Seconds in 1 week.
 */
const secondsInWeek = exports.secondsInWeek = secondsInDay * 7;

/**
 * @constant
 * @name secondsInYear
 * @summary Seconds in 1 year.
 */
const secondsInYear = exports.secondsInYear = secondsInDay * daysInYear;

/**
 * @constant
 * @name secondsInMonth
 * @summary Seconds in 1 month
 */
const secondsInMonth = exports.secondsInMonth = secondsInYear / 12;

/**
 * @constant
 * @name secondsInQuarter
 * @summary Seconds in 1 quarter.
 */
const secondsInQuarter = exports.secondsInQuarter = secondsInMonth * 3;

/**
 * @constant
 * @name constructFromSymbol
 * @summary Symbol enabling Date extensions to inherit properties from the reference date.
 *
 * The symbol is used to enable the `constructFrom` function to construct a date
 * using a reference date and a value. It allows to transfer extra properties
 * from the reference date to the new date. It's useful for extensions like
 * [`TZDate`](https://github.com/date-fns/tz) that accept a time zone as
 * a constructor argument.
 */
const constructFromSymbol = exports.constructFromSymbol = Symbol.for("constructDateFrom");
},{}],"node_modules/date-fns/constructFrom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.constructFrom = constructFrom;
exports.default = void 0;
var _constants = require("./constants.js");
/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * Starting from v3.7.0, it allows to construct a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from "./constructFrom/date-fns";
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date>(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use constructor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   );
 * }
 */
function constructFrom(date, value) {
  if (typeof date === "function") return date(value);
  if (date && typeof date === "object" && _constants.constructFromSymbol in date) return date[_constants.constructFromSymbol](value);
  if (date instanceof Date) return new date.constructor(value);
  return new Date(value);
}

// Fallback for modularized imports:
var _default = exports.default = constructFrom;
},{"./constants.js":"node_modules/date-fns/constants.js"}],"node_modules/date-fns/toDate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.toDate = toDate;
var _constructFrom = require("./constructFrom.js");
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * Starting from v3.7.0, it clones a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument, context) {
  // [TODO] Get rid of `toDate` or `constructFrom`?
  return (0, _constructFrom.constructFrom)(context || argument, argument);
}

// Fallback for modularized imports:
var _default = exports.default = toDate;
},{"./constructFrom.js":"node_modules/date-fns/constructFrom.js"}],"node_modules/date-fns/addDays.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addDays = addDays;
exports.default = void 0;
var _constructFrom = require("./constructFrom.js");
var _toDate = require("./toDate.js");
/**
 * The {@link addDays} function options.
 */

/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be added.
 * @param options - An object with options
 *
 * @returns The new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(date, amount, options) {
  const _date = (0, _toDate.toDate)(date, options?.in);
  if (isNaN(amount)) return (0, _constructFrom.constructFrom)(options?.in || date, NaN);

  // If 0 days, no-op to avoid changing times in the hour before end of DST
  if (!amount) return _date;
  _date.setDate(_date.getDate() + amount);
  return _date;
}

// Fallback for modularized imports:
var _default = exports.default = addDays;
},{"./constructFrom.js":"node_modules/date-fns/constructFrom.js","./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/addMonths.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addMonths = addMonths;
exports.default = void 0;
var _constructFrom = require("./constructFrom.js");
var _toDate = require("./toDate.js");
/**
 * The {@link addMonths} function options.
 */

/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of months to be added.
 * @param options - The options object
 *
 * @returns The new date with the months added
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 *
 * // Add one month to 30 January 2023:
 * const result = addMonths(new Date(2023, 0, 30), 1)
 * //=> Tue Feb 28 2023 00:00:00
 */
function addMonths(date, amount, options) {
  const _date = (0, _toDate.toDate)(date, options?.in);
  if (isNaN(amount)) return (0, _constructFrom.constructFrom)(options?.in || date, NaN);
  if (!amount) {
    // If 0 months, no-op to avoid changing times in the hour before end of DST
    return _date;
  }
  const dayOfMonth = _date.getDate();

  // The JS Date object supports date math by accepting out-of-bounds values for
  // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
  // want except that dates will wrap around the end of a month, meaning that
  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
  // we'll default to the end of the desired month by adding 1 to the desired
  // month and using a date of 0 to back up one day to the end of the desired
  // month.
  const endOfDesiredMonth = (0, _constructFrom.constructFrom)(options?.in || date, _date.getTime());
  endOfDesiredMonth.setMonth(_date.getMonth() + amount + 1, 0);
  const daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
  } else {
    // Otherwise, we now know that setting the original day-of-month value won't
    // cause an overflow, so set the desired day-of-month. Note that we can't
    // just set the date of `endOfDesiredMonth` because that object may have had
    // its time changed in the unusual case where where a DST transition was on
    // the last day of the month and its local time was in the hour skipped or
    // repeated next to a DST transition.  So we use `date` instead which is
    // guaranteed to still have the original time.
    _date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
    return _date;
  }
}

// Fallback for modularized imports:
var _default = exports.default = addMonths;
},{"./constructFrom.js":"node_modules/date-fns/constructFrom.js","./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/add.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;
exports.default = void 0;
var _addDays = require("./addDays.js");
var _addMonths = require("./addMonths.js");
var _constructFrom = require("./constructFrom.js");
var _toDate = require("./toDate.js");
/**
 * The {@link add} function options.
 */

/**
 * @name add
 * @category Common Helpers
 * @summary Add the specified years, months, weeks, days, hours, minutes, and seconds to the given date.
 *
 * @description
 * Add the specified years, months, weeks, days, hours, minutes, and seconds to the given date.
 *
 * @typeParam DateType - The `Date` type the function operates on. Gets inferred from passed arguments. Allows using extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param duration - The object with years, months, weeks, days, hours, minutes, and seconds to be added.
 * @param options - An object with options
 *
 * @returns The new date with the seconds added
 *
 * @example
 * // Add the following duration to 1 September 2014, 10:19:50
 * const result = add(new Date(2014, 8, 1, 10, 19, 50), {
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,
 *   minutes: 9,
 *   seconds: 30,
 * })
 * //=> Thu Jun 15 2017 15:29:20
 */
function add(date, duration, options) {
  const {
    years = 0,
    months = 0,
    weeks = 0,
    days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0
  } = duration;

  // Add years and months
  const _date = (0, _toDate.toDate)(date, options?.in);
  const dateWithMonths = months || years ? (0, _addMonths.addMonths)(_date, months + years * 12) : _date;

  // Add weeks and days
  const dateWithDays = days || weeks ? (0, _addDays.addDays)(dateWithMonths, days + weeks * 7) : dateWithMonths;

  // Add days, hours, minutes, and seconds
  const minutesToAdd = minutes + hours * 60;
  const secondsToAdd = seconds + minutesToAdd * 60;
  const msToAdd = secondsToAdd * 1000;
  return (0, _constructFrom.constructFrom)(options?.in || date, +dateWithDays + msToAdd);
}

// Fallback for modularized imports:
var _default = exports.default = add;
},{"./addDays.js":"node_modules/date-fns/addDays.js","./addMonths.js":"node_modules/date-fns/addMonths.js","./constructFrom.js":"node_modules/date-fns/constructFrom.js","./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/isSaturday.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.isSaturday = isSaturday;
var _toDate = require("./toDate.js");
/**
 * The {@link isSaturday} function options.
 */

/**
 * @name isSaturday
 * @category Weekday Helpers
 * @summary Is the given date Saturday?
 *
 * @description
 * Is the given date Saturday?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is Saturday
 *
 * @example
 * // Is 27 September 2014 Saturday?
 * const result = isSaturday(new Date(2014, 8, 27))
 * //=> true
 */
function isSaturday(date, options) {
  return (0, _toDate.toDate)(date, options?.in).getDay() === 6;
}

// Fallback for modularized imports:
var _default = exports.default = isSaturday;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/isSunday.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.isSunday = isSunday;
var _toDate = require("./toDate.js");
/**
 * The {@link isSunday} function options.
 */

/**
 * @name isSunday
 * @category Weekday Helpers
 * @summary Is the given date Sunday?
 *
 * @description
 * Is the given date Sunday?
 *
 * @param date - The date to check
 * @param options - The options object
 *
 * @returns The date is Sunday
 *
 * @example
 * // Is 21 September 2014 Sunday?
 * const result = isSunday(new Date(2014, 8, 21))
 * //=> true
 */
function isSunday(date, options) {
  return (0, _toDate.toDate)(date, options?.in).getDay() === 0;
}

// Fallback for modularized imports:
var _default = exports.default = isSunday;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/isWeekend.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.isWeekend = isWeekend;
var _toDate = require("./toDate.js");
/**
 * The {@link isWeekend} function options.
 */

/**
 * @name isWeekend
 * @category Weekday Helpers
 * @summary Does the given date fall on a weekend?
 *
 * @description
 * Does the given date fall on a weekend? A weekend is either Saturday (`6`) or Sunday (`0`).
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date falls on a weekend
 *
 * @example
 * // Does 5 October 2014 fall on a weekend?
 * const result = isWeekend(new Date(2014, 9, 5))
 * //=> true
 */
function isWeekend(date, options) {
  const day = (0, _toDate.toDate)(date, options?.in).getDay();
  return day === 0 || day === 6;
}

// Fallback for modularized imports:
var _default = exports.default = isWeekend;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/addBusinessDays.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addBusinessDays = addBusinessDays;
exports.default = void 0;
var _constructFrom = require("./constructFrom.js");
var _isSaturday = require("./isSaturday.js");
var _isSunday = require("./isSunday.js");
var _isWeekend = require("./isWeekend.js");
var _toDate = require("./toDate.js");
/**
 * The {@link addBusinessDays} function options.
 */

/**
 * @name addBusinessDays
 * @category Day Helpers
 * @summary Add the specified number of business days (mon - fri) to the given date.
 *
 * @description
 * Add the specified number of business days (mon - fri) to the given date, ignoring weekends.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of business days to be added.
 * @param options - An object with options
 *
 * @returns The new date with the business days added
 *
 * @example
 * // Add 10 business days to 1 September 2014:
 * const result = addBusinessDays(new Date(2014, 8, 1), 10)
 * //=> Mon Sep 15 2014 00:00:00 (skipped weekend days)
 */
function addBusinessDays(date, amount, options) {
  const _date = (0, _toDate.toDate)(date, options?.in);
  const startedOnWeekend = (0, _isWeekend.isWeekend)(_date, options);
  if (isNaN(amount)) return (0, _constructFrom.constructFrom)(options?.in, NaN);
  const hours = _date.getHours();
  const sign = amount < 0 ? -1 : 1;
  const fullWeeks = Math.trunc(amount / 5);
  _date.setDate(_date.getDate() + fullWeeks * 7);

  // Get remaining days not part of a full week
  let restDays = Math.abs(amount % 5);

  // Loops over remaining days
  while (restDays > 0) {
    _date.setDate(_date.getDate() + sign);
    if (!(0, _isWeekend.isWeekend)(_date, options)) restDays -= 1;
  }

  // If the date is a weekend day and we reduce a dividable of
  // 5 from it, we land on a weekend date.
  // To counter this, we add days accordingly to land on the next business day
  if (startedOnWeekend && (0, _isWeekend.isWeekend)(_date, options) && amount !== 0) {
    // If we're reducing days, we want to add days until we land on a weekday
    // If we're adding days we want to reduce days until we land on a weekday
    if ((0, _isSaturday.isSaturday)(_date, options)) _date.setDate(_date.getDate() + (sign < 0 ? 2 : -1));
    if ((0, _isSunday.isSunday)(_date, options)) _date.setDate(_date.getDate() + (sign < 0 ? 1 : -2));
  }

  // Restore hours to avoid DST lag
  _date.setHours(hours);
  return _date;
}

// Fallback for modularized imports:
var _default = exports.default = addBusinessDays;
},{"./constructFrom.js":"node_modules/date-fns/constructFrom.js","./isSaturday.js":"node_modules/date-fns/isSaturday.js","./isSunday.js":"node_modules/date-fns/isSunday.js","./isWeekend.js":"node_modules/date-fns/isWeekend.js","./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/addMilliseconds.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addMilliseconds = addMilliseconds;
exports.default = void 0;
var _constructFrom = require("./constructFrom.js");
var _toDate = require("./toDate.js");
/**
 * The {@link addMilliseconds} function options.
 */

/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of milliseconds to be added.
 * @param options - The options object
 *
 * @returns The new date with the milliseconds added
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */
function addMilliseconds(date, amount, options) {
  return (0, _constructFrom.constructFrom)(options?.in || date, +(0, _toDate.toDate)(date) + amount);
}

// Fallback for modularized imports:
var _default = exports.default = addMilliseconds;
},{"./constructFrom.js":"node_modules/date-fns/constructFrom.js","./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/addHours.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addHours = addHours;
exports.default = void 0;
var _addMilliseconds = require("./addMilliseconds.js");
var _constants = require("./constants.js");
/**
 * The {@link addHours} function options.
 */

/**
 * @name addHours
 * @category Hour Helpers
 * @summary Add the specified number of hours to the given date.
 *
 * @description
 * Add the specified number of hours to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of hours to be added
 * @param options - An object with options
 *
 * @returns The new date with the hours added
 *
 * @example
 * // Add 2 hours to 10 July 2014 23:00:00:
 * const result = addHours(new Date(2014, 6, 10, 23, 0), 2)
 * //=> Fri Jul 11 2014 01:00:00
 */
function addHours(date, amount, options) {
  return (0, _addMilliseconds.addMilliseconds)(date, amount * _constants.millisecondsInHour, options);
}

// Fallback for modularized imports:
var _default = exports.default = addHours;
},{"./addMilliseconds.js":"node_modules/date-fns/addMilliseconds.js","./constants.js":"node_modules/date-fns/constants.js"}],"node_modules/date-fns/_lib/defaultOptions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDefaultOptions = getDefaultOptions;
exports.setDefaultOptions = setDefaultOptions;
let defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}
},{}],"node_modules/date-fns/startOfWeek.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.startOfWeek = startOfWeek;
var _defaultOptions = require("./_lib/defaultOptions.js");
var _toDate = require("./toDate.js");
/**
 * The {@link startOfWeek} function options.
 */

/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(date, options) {
  const defaultOptions = (0, _defaultOptions.getDefaultOptions)();
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
  const _date = (0, _toDate.toDate)(date, options?.in);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
var _default = exports.default = startOfWeek;
},{"./_lib/defaultOptions.js":"node_modules/date-fns/_lib/defaultOptions.js","./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/startOfISOWeek.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.startOfISOWeek = startOfISOWeek;
var _startOfWeek = require("./startOfWeek.js");
/**
 * The {@link startOfISOWeek} function options.
 */

/**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfISOWeek(date, options) {
  return (0, _startOfWeek.startOfWeek)(date, {
    ...options,
    weekStartsOn: 1
  });
}

// Fallback for modularized imports:
var _default = exports.default = startOfISOWeek;
},{"./startOfWeek.js":"node_modules/date-fns/startOfWeek.js"}],"node_modules/date-fns/getISOWeekYear.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getISOWeekYear = getISOWeekYear;
var _constructFrom = require("./constructFrom.js");
var _startOfISOWeek = require("./startOfISOWeek.js");
var _toDate = require("./toDate.js");
/**
 * The {@link getISOWeekYear} function options.
 */

/**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - The given date
 *
 * @returns The ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * const result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */
function getISOWeekYear(date, options) {
  const _date = (0, _toDate.toDate)(date, options?.in);
  const year = _date.getFullYear();
  const fourthOfJanuaryOfNextYear = (0, _constructFrom.constructFrom)(_date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0, _startOfISOWeek.startOfISOWeek)(fourthOfJanuaryOfNextYear);
  const fourthOfJanuaryOfThisYear = (0, _constructFrom.constructFrom)(_date, 0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0, _startOfISOWeek.startOfISOWeek)(fourthOfJanuaryOfThisYear);
  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
var _default = exports.default = getISOWeekYear;
},{"./constructFrom.js":"node_modules/date-fns/constructFrom.js","./startOfISOWeek.js":"node_modules/date-fns/startOfISOWeek.js","./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTimezoneOffsetInMilliseconds = getTimezoneOffsetInMilliseconds;
var _toDate = require("../toDate.js");
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  const _date = (0, _toDate.toDate)(date);
  const utcDate = new Date(Date.UTC(_date.getFullYear(), _date.getMonth(), _date.getDate(), _date.getHours(), _date.getMinutes(), _date.getSeconds(), _date.getMilliseconds()));
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}
},{"../toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/_lib/normalizeDates.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizeDates = normalizeDates;
var _constructFrom = require("../constructFrom.js");
function normalizeDates(context, ...dates) {
  const normalize = _constructFrom.constructFrom.bind(null, context || dates.find(date => typeof date === "object"));
  return dates.map(normalize);
}
},{"../constructFrom.js":"node_modules/date-fns/constructFrom.js"}],"node_modules/date-fns/startOfDay.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.startOfDay = startOfDay;
var _toDate = require("./toDate.js");
/**
 * The {@link startOfDay} function options.
 */

/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(date, options) {
  const _date = (0, _toDate.toDate)(date, options?.in);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
var _default = exports.default = startOfDay;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/differenceInCalendarDays.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.differenceInCalendarDays = differenceInCalendarDays;
var _getTimezoneOffsetInMilliseconds = require("./_lib/getTimezoneOffsetInMilliseconds.js");
var _normalizeDates = require("./_lib/normalizeDates.js");
var _constants = require("./constants.js");
var _startOfDay = require("./startOfDay.js");
/**
 * The {@link differenceInCalendarDays} function options.
 */

/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - The options object
 *
 * @returns The number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */
function differenceInCalendarDays(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = (0, _normalizeDates.normalizeDates)(options?.in, laterDate, earlierDate);
  const laterStartOfDay = (0, _startOfDay.startOfDay)(laterDate_);
  const earlierStartOfDay = (0, _startOfDay.startOfDay)(earlierDate_);
  const laterTimestamp = +laterStartOfDay - (0, _getTimezoneOffsetInMilliseconds.getTimezoneOffsetInMilliseconds)(laterStartOfDay);
  const earlierTimestamp = +earlierStartOfDay - (0, _getTimezoneOffsetInMilliseconds.getTimezoneOffsetInMilliseconds)(earlierStartOfDay);

  // Round the number of days to the nearest integer because the number of
  // milliseconds in a day is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round((laterTimestamp - earlierTimestamp) / _constants.millisecondsInDay);
}

// Fallback for modularized imports:
var _default = exports.default = differenceInCalendarDays;
},{"./_lib/getTimezoneOffsetInMilliseconds.js":"node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js","./_lib/normalizeDates.js":"node_modules/date-fns/_lib/normalizeDates.js","./constants.js":"node_modules/date-fns/constants.js","./startOfDay.js":"node_modules/date-fns/startOfDay.js"}],"node_modules/date-fns/startOfISOWeekYear.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.startOfISOWeekYear = startOfISOWeekYear;
var _constructFrom = require("./constructFrom.js");
var _getISOWeekYear = require("./getISOWeekYear.js");
var _startOfISOWeek = require("./startOfISOWeek.js");
/**
 * The {@link startOfISOWeekYear} function options.
 */

/**
 * @name startOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of an ISO week-numbering year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * const result = startOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfISOWeekYear(date, options) {
  const year = (0, _getISOWeekYear.getISOWeekYear)(date, options);
  const fourthOfJanuary = (0, _constructFrom.constructFrom)(options?.in || date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return (0, _startOfISOWeek.startOfISOWeek)(fourthOfJanuary);
}

// Fallback for modularized imports:
var _default = exports.default = startOfISOWeekYear;
},{"./constructFrom.js":"node_modules/date-fns/constructFrom.js","./getISOWeekYear.js":"node_modules/date-fns/getISOWeekYear.js","./startOfISOWeek.js":"node_modules/date-fns/startOfISOWeek.js"}],"node_modules/date-fns/setISOWeekYear.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.setISOWeekYear = setISOWeekYear;
var _constructFrom = require("./constructFrom.js");
var _differenceInCalendarDays = require("./differenceInCalendarDays.js");
var _startOfISOWeekYear = require("./startOfISOWeekYear.js");
var _toDate = require("./toDate.js");
/**
 * The {@link setISOWeekYear} function options.
 */

/**
 * @name setISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Set the ISO week-numbering year to the given date.
 *
 * @description
 * Set the ISO week-numbering year to the given date,
 * saving the week number and the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows using extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param weekYear - The ISO week-numbering year of the new date
 * @param options - An object with options
 *
 * @returns The new date with the ISO week-numbering year set
 *
 * @example
 * // Set ISO week-numbering year 2007 to 29 December 2008:
 * const result = setISOWeekYear(new Date(2008, 11, 29), 2007)
 * //=> Mon Jan 01 2007 00:00:00
 */
function setISOWeekYear(date, weekYear, options) {
  let _date = (0, _toDate.toDate)(date, options?.in);
  const diff = (0, _differenceInCalendarDays.differenceInCalendarDays)(_date, (0, _startOfISOWeekYear.startOfISOWeekYear)(_date, options));
  const fourthOfJanuary = (0, _constructFrom.constructFrom)(options?.in || date, 0);
  fourthOfJanuary.setFullYear(weekYear, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  _date = (0, _startOfISOWeekYear.startOfISOWeekYear)(fourthOfJanuary);
  _date.setDate(_date.getDate() + diff);
  return _date;
}

// Fallback for modularized imports:
var _default = exports.default = setISOWeekYear;
},{"./constructFrom.js":"node_modules/date-fns/constructFrom.js","./differenceInCalendarDays.js":"node_modules/date-fns/differenceInCalendarDays.js","./startOfISOWeekYear.js":"node_modules/date-fns/startOfISOWeekYear.js","./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/addISOWeekYears.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addISOWeekYears = addISOWeekYears;
exports.default = void 0;
var _getISOWeekYear = require("./getISOWeekYear.js");
var _setISOWeekYear = require("./setISOWeekYear.js");
/**
 * The {@link addISOWeekYears} function options.
 */

/**
 * @name addISOWeekYears
 * @category ISO Week-Numbering Year Helpers
 * @summary Add the specified number of ISO week-numbering years to the given date.
 *
 * @description
 * Add the specified number of ISO week-numbering years to the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of ISO week-numbering years to be added.
 * @param options - An object with options
 *
 * @returns The new date with the ISO week-numbering years added
 *
 * @example
 * // Add 5 ISO week-numbering years to 2 July 2010:
 * const result = addISOWeekYears(new Date(2010, 6, 2), 5)
 * //=> Fri Jun 26 2015 00:00:00
 */
function addISOWeekYears(date, amount, options) {
  return (0, _setISOWeekYear.setISOWeekYear)(date, (0, _getISOWeekYear.getISOWeekYear)(date, options) + amount, options);
}

// Fallback for modularized imports:
var _default = exports.default = addISOWeekYears;
},{"./getISOWeekYear.js":"node_modules/date-fns/getISOWeekYear.js","./setISOWeekYear.js":"node_modules/date-fns/setISOWeekYear.js"}],"node_modules/date-fns/addMinutes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addMinutes = addMinutes;
exports.default = void 0;
var _constants = require("./constants.js");
var _toDate = require("./toDate.js");
/**
 * The {@link addMinutes} function options.
 */

/**
 * @name addMinutes
 * @category Minute Helpers
 * @summary Add the specified number of minutes to the given date.
 *
 * @description
 * Add the specified number of minutes to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of minutes to be added.
 * @param options - An object with options
 *
 * @returns The new date with the minutes added
 *
 * @example
 * // Add 30 minutes to 10 July 2014 12:00:00:
 * const result = addMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 12:30:00
 */
function addMinutes(date, amount, options) {
  const _date = (0, _toDate.toDate)(date, options?.in);
  _date.setTime(_date.getTime() + amount * _constants.millisecondsInMinute);
  return _date;
}

// Fallback for modularized imports:
var _default = exports.default = addMinutes;
},{"./constants.js":"node_modules/date-fns/constants.js","./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/addQuarters.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addQuarters = addQuarters;
exports.default = void 0;
var _addMonths = require("./addMonths.js");
/**
 * The {@link addQuarters} function options.
 */

/**
 * @name addQuarters
 * @category Quarter Helpers
 * @summary Add the specified number of year quarters to the given date.
 *
 * @description
 * Add the specified number of year quarters to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of quarters to be added.
 * @param options - An object with options
 *
 * @returns The new date with the quarters added
 *
 * @example
 * // Add 1 quarter to 1 September 2014:
 * const result = addQuarters(new Date(2014, 8, 1), 1)
 * //=; Mon Dec 01 2014 00:00:00
 */
function addQuarters(date, amount, options) {
  return (0, _addMonths.addMonths)(date, amount * 3, options);
}

// Fallback for modularized imports:
var _default = exports.default = addQuarters;
},{"./addMonths.js":"node_modules/date-fns/addMonths.js"}],"node_modules/date-fns/addSeconds.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addSeconds = addSeconds;
exports.default = void 0;
var _addMilliseconds = require("./addMilliseconds.js");
/**
 * The {@link addSeconds} function options.
 */

/**
 * @name addSeconds
 * @category Second Helpers
 * @summary Add the specified number of seconds to the given date.
 *
 * @description
 * Add the specified number of seconds to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of seconds to be added.
 * @param options - An object with options
 *
 * @returns The new date with the seconds added
 *
 * @example
 * // Add 30 seconds to 10 July 2014 12:45:00:
 * const result = addSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)
 * //=> Thu Jul 10 2014 12:45:30
 */
function addSeconds(date, amount, options) {
  return (0, _addMilliseconds.addMilliseconds)(date, amount * 1000, options);
}

// Fallback for modularized imports:
var _default = exports.default = addSeconds;
},{"./addMilliseconds.js":"node_modules/date-fns/addMilliseconds.js"}],"node_modules/date-fns/addWeeks.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addWeeks = addWeeks;
exports.default = void 0;
var _addDays = require("./addDays.js");
/**
 * The {@link addWeeks} function options.
 */

/**
 * @name addWeeks
 * @category Week Helpers
 * @summary Add the specified number of weeks to the given date.
 *
 * @description
 * Add the specified number of weeks to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of weeks to be added.
 * @param options - An object with options
 *
 * @returns The new date with the weeks added
 *
 * @example
 * // Add 4 weeks to 1 September 2014:
 * const result = addWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Sep 29 2014 00:00:00
 */
function addWeeks(date, amount, options) {
  return (0, _addDays.addDays)(date, amount * 7, options);
}

// Fallback for modularized imports:
var _default = exports.default = addWeeks;
},{"./addDays.js":"node_modules/date-fns/addDays.js"}],"node_modules/date-fns/addYears.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addYears = addYears;
exports.default = void 0;
var _addMonths = require("./addMonths.js");
/**
 * The {@link addYears} function options.
 */

/**
 * @name addYears
 * @category Year Helpers
 * @summary Add the specified number of years to the given date.
 *
 * @description
 * Add the specified number of years to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type.
 *
 * @param date - The date to be changed
 * @param amount - The amount of years to be added.
 * @param options - The options
 *
 * @returns The new date with the years added
 *
 * @example
 * // Add 5 years to 1 September 2014:
 * const result = addYears(new Date(2014, 8, 1), 5)
 * //=> Sun Sep 01 2019 00:00:00
 */
function addYears(date, amount, options) {
  return (0, _addMonths.addMonths)(date, amount * 12, options);
}

// Fallback for modularized imports:
var _default = exports.default = addYears;
},{"./addMonths.js":"node_modules/date-fns/addMonths.js"}],"node_modules/date-fns/areIntervalsOverlapping.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.areIntervalsOverlapping = areIntervalsOverlapping;
exports.default = void 0;
var _toDate = require("./toDate.js");
/**
 * The {@link areIntervalsOverlapping} function options.
 */

/**
 * @name areIntervalsOverlapping
 * @category Interval Helpers
 * @summary Is the given time interval overlapping with another time interval?
 *
 * @description
 * Is the given time interval overlapping with another time interval? Adjacent intervals do not count as overlapping unless `inclusive` is set to `true`.
 *
 * @param intervalLeft - The first interval to compare.
 * @param intervalRight - The second interval to compare.
 * @param options - The object with options
 *
 * @returns Whether the time intervals are overlapping
 *
 * @example
 * // For overlapping time intervals:
 * areIntervalsOverlapping(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 17), end: new Date(2014, 0, 21) }
 * )
 * //=> true
 *
 * @example
 * // For non-overlapping time intervals:
 * areIntervalsOverlapping(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 21), end: new Date(2014, 0, 22) }
 * )
 * //=> false
 *
 * @example
 * // For adjacent time intervals:
 * areIntervalsOverlapping(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 20), end: new Date(2014, 0, 30) }
 * )
 * //=> false
 *
 * @example
 * // Using the inclusive option:
 * areIntervalsOverlapping(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 20), end: new Date(2014, 0, 24) },
 *   { inclusive: true }
 * )
 * //=> true
 */
function areIntervalsOverlapping(intervalLeft, intervalRight, options) {
  const [leftStartTime, leftEndTime] = [+(0, _toDate.toDate)(intervalLeft.start, options?.in), +(0, _toDate.toDate)(intervalLeft.end, options?.in)].sort((a, b) => a - b);
  const [rightStartTime, rightEndTime] = [+(0, _toDate.toDate)(intervalRight.start, options?.in), +(0, _toDate.toDate)(intervalRight.end, options?.in)].sort((a, b) => a - b);
  if (options?.inclusive) return leftStartTime <= rightEndTime && rightStartTime <= leftEndTime;
  return leftStartTime < rightEndTime && rightStartTime < leftEndTime;
}

// Fallback for modularized imports:
var _default = exports.default = areIntervalsOverlapping;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/max.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.max = max;
var _constructFrom = require("./constructFrom.js");
var _toDate = require("./toDate.js");
/**
 * The {@link max} function options.
 */

/**
 * @name max
 * @category Common Helpers
 * @summary Return the latest of the given dates.
 *
 * @description
 * Return the latest of the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param dates - The dates to compare
 *
 * @returns The latest of the dates
 *
 * @example
 * // Which of these dates is the latest?
 * const result = max([
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * ])
 * //=> Sun Jul 02 1995 00:00:00
 */
function max(dates, options) {
  let result;
  let context = options?.in;
  dates.forEach(date => {
    // Use the first date object as the context function
    if (!context && typeof date === "object") context = _constructFrom.constructFrom.bind(null, date);
    const date_ = (0, _toDate.toDate)(date, context);
    if (!result || result < date_ || isNaN(+date_)) result = date_;
  });
  return (0, _constructFrom.constructFrom)(context, result || NaN);
}

// Fallback for modularized imports:
var _default = exports.default = max;
},{"./constructFrom.js":"node_modules/date-fns/constructFrom.js","./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/min.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.min = min;
var _constructFrom = require("./constructFrom.js");
var _toDate = require("./toDate.js");
/**
 * The {@link min} function options.
 */

/**
 * @name min
 * @category Common Helpers
 * @summary Returns the earliest of the given dates.
 *
 * @description
 * Returns the earliest of the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param dates - The dates to compare
 *
 * @returns The earliest of the dates
 *
 * @example
 * // Which of these dates is the earliest?
 * const result = min([
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * ])
 * //=> Wed Feb 11 1987 00:00:00
 */
function min(dates, options) {
  let result;
  let context = options?.in;
  dates.forEach(date => {
    // Use the first date object as the context function
    if (!context && typeof date === "object") context = _constructFrom.constructFrom.bind(null, date);
    const date_ = (0, _toDate.toDate)(date, context);
    if (!result || result > date_ || isNaN(+date_)) result = date_;
  });
  return (0, _constructFrom.constructFrom)(context, result || NaN);
}

// Fallback for modularized imports:
var _default = exports.default = min;
},{"./constructFrom.js":"node_modules/date-fns/constructFrom.js","./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/clamp.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clamp = clamp;
exports.default = void 0;
var _normalizeDates = require("./_lib/normalizeDates.js");
var _max = require("./max.js");
var _min = require("./min.js");
/**
 * The {@link clamp} function options.
 */

/**
 * The {@link clamp} function result type. It resolves the proper data type.
 * It uses the first argument date object type, starting from the date argument,
 * then the start interval date, and finally the end interval date. If
 * a context function is passed, it uses the context function return type.
 */

/**
 * @name clamp
 * @category Interval Helpers
 * @summary Return a date bounded by the start and the end of the given interval.
 *
 * @description
 * Clamps a date to the lower bound with the start of the interval and the upper
 * bound with the end of the interval.
 *
 * - When the date is less than the start of the interval, the start is returned.
 * - When the date is greater than the end of the interval, the end is returned.
 * - Otherwise the date is returned.
 *
 * @typeParam DateType - Date argument type.
 * @typeParam IntervalType - Interval argument type.
 * @typeParam Options - Options type.
 *
 * @param date - The date to be bounded
 * @param interval - The interval to bound to
 * @param options - An object with options
 *
 * @returns The date bounded by the start and the end of the interval
 *
 * @example
 * // What is Mar 21, 2021 bounded to an interval starting at Mar 22, 2021 and ending at Apr 01, 2021
 * const result = clamp(new Date(2021, 2, 21), {
 *   start: new Date(2021, 2, 22),
 *   end: new Date(2021, 3, 1),
 * })
 * //=> Mon Mar 22 2021 00:00:00
 */
function clamp(date, interval, options) {
  const [date_, start, end] = (0, _normalizeDates.normalizeDates)(options?.in, date, interval.start, interval.end);
  return (0, _min.min)([(0, _max.max)([date_, start], options), end], options);
}

// Fallback for modularized imports:
var _default = exports.default = clamp;
},{"./_lib/normalizeDates.js":"node_modules/date-fns/_lib/normalizeDates.js","./max.js":"node_modules/date-fns/max.js","./min.js":"node_modules/date-fns/min.js"}],"node_modules/date-fns/closestIndexTo.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closestIndexTo = closestIndexTo;
exports.default = void 0;
var _toDate = require("./toDate.js");
/**
 * @name closestIndexTo
 * @category Common Helpers
 * @summary Return an index of the closest date from the array comparing to the given date.
 *
 * @description
 * Return an index of the closest date from the array comparing to the given date.
 *
 * @param dateToCompare - The date to compare with
 * @param dates - The array to search
 *
 * @returns An index of the date closest to the given date or undefined if no valid value is given
 *
 * @example
 * // Which date is closer to 6 September 2015?
 * const dateToCompare = new Date(2015, 8, 6)
 * const datesArray = [
 *   new Date(2015, 0, 1),
 *   new Date(2016, 0, 1),
 *   new Date(2017, 0, 1)
 * ]
 * const result = closestIndexTo(dateToCompare, datesArray)
 * //=> 1
 */
function closestIndexTo(dateToCompare, dates) {
  // [TODO] It would be better to return -1 here rather than undefined, as this
  // is how JS behaves, but it would be a breaking change, so we need
  // to consider it for v4.
  const timeToCompare = +(0, _toDate.toDate)(dateToCompare);
  if (isNaN(timeToCompare)) return NaN;
  let result;
  let minDistance;
  dates.forEach((date, index) => {
    const date_ = (0, _toDate.toDate)(date);
    if (isNaN(+date_)) {
      result = NaN;
      minDistance = NaN;
      return;
    }
    const distance = Math.abs(timeToCompare - +date_);
    if (result == null || distance < minDistance) {
      result = index;
      minDistance = distance;
    }
  });
  return result;
}

// Fallback for modularized imports:
var _default = exports.default = closestIndexTo;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/closestTo.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closestTo = closestTo;
exports.default = void 0;
var _normalizeDates = require("./_lib/normalizeDates.js");
var _closestIndexTo = require("./closestIndexTo.js");
var _constructFrom = require("./constructFrom.js");
/**
 * The {@link closestTo} function options.
 */

/**
 * The {@link closestTo} function result type. It resolves the proper data type.
 * It uses the first argument date object type, starting from the date argument,
 * then the start interval date, and finally the end interval date. If
 * a context function is passed, it uses the context function return type.
 */

/**
 * @name closestTo
 * @category Common Helpers
 * @summary Return a date from the array closest to the given date.
 *
 * @description
 * Return a date from the array closest to the given date.
 *
 * @typeParam DateToCompare - Date to compare argument type.
 * @typeParam DatesType - Dates array argument type.
 * @typeParam Options - Options type.
 *
 * @param dateToCompare - The date to compare with
 * @param dates - The array to search
 *
 * @returns The date from the array closest to the given date or undefined if no valid value is given
 *
 * @example
 * // Which date is closer to 6 September 2015: 1 January 2000 or 1 January 2030?
 * const dateToCompare = new Date(2015, 8, 6)
 * const result = closestTo(dateToCompare, [
 *   new Date(2000, 0, 1),
 *   new Date(2030, 0, 1)
 * ])
 * //=> Tue Jan 01 2030 00:00:00
 */
function closestTo(dateToCompare, dates, options) {
  const [dateToCompare_, ...dates_] = (0, _normalizeDates.normalizeDates)(options?.in, dateToCompare, ...dates);
  const index = (0, _closestIndexTo.closestIndexTo)(dateToCompare_, dates_);
  if (typeof index === "number" && isNaN(index)) return (0, _constructFrom.constructFrom)(dateToCompare_, NaN);
  if (index !== undefined) return dates_[index];
}

// Fallback for modularized imports:
var _default = exports.default = closestTo;
},{"./_lib/normalizeDates.js":"node_modules/date-fns/_lib/normalizeDates.js","./closestIndexTo.js":"node_modules/date-fns/closestIndexTo.js","./constructFrom.js":"node_modules/date-fns/constructFrom.js"}],"node_modules/date-fns/compareAsc.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compareAsc = compareAsc;
exports.default = void 0;
var _toDate = require("./toDate.js");
/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param dateLeft - The first date to compare
 * @param dateRight - The second date to compare
 *
 * @returns The result of the comparison
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */
function compareAsc(dateLeft, dateRight) {
  const diff = +(0, _toDate.toDate)(dateLeft) - +(0, _toDate.toDate)(dateRight);
  if (diff < 0) return -1;else if (diff > 0) return 1;

  // Return 0 if diff is 0; return NaN if diff is NaN
  return diff;
}

// Fallback for modularized imports:
var _default = exports.default = compareAsc;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/compareDesc.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compareDesc = compareDesc;
exports.default = void 0;
var _toDate = require("./toDate.js");
/**
 * @name compareDesc
 * @category Common Helpers
 * @summary Compare the two dates reverse chronologically and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return -1 if the first date is after the second,
 * 1 if the first date is before the second or 0 if dates are equal.
 *
 * @param dateLeft - The first date to compare
 * @param dateRight - The second date to compare
 *
 * @returns The result of the comparison
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989 reverse chronologically:
 * const result = compareDesc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> 1
 *
 * @example
 * // Sort the array of dates in reverse chronological order:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareDesc)
 * //=> [
 * //   Sun Jul 02 1995 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Wed Feb 11 1987 00:00:00
 * // ]
 */
function compareDesc(dateLeft, dateRight) {
  const diff = +(0, _toDate.toDate)(dateLeft) - +(0, _toDate.toDate)(dateRight);
  if (diff > 0) return -1;else if (diff < 0) return 1;

  // Return 0 if diff is 0; return NaN if diff is NaN
  return diff;
}

// Fallback for modularized imports:
var _default = exports.default = compareDesc;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/constructNow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.constructNow = constructNow;
exports.default = void 0;
var _constructFrom = require("./constructFrom.js");
/**
 * @name constructNow
 * @category Generic Helpers
 * @summary Constructs a new current date using the passed value constructor.
 * @pure false
 *
 * @description
 * The function constructs a new current date using the constructor from
 * the reference date. It helps to build generic functions that accept date
 * extensions and use the current date.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * @param date - The reference date to take constructor from
 *
 * @returns Current date initialized using the given date constructor
 *
 * @example
 * import { constructNow, isSameDay } from 'date-fns'
 *
 * function isToday<DateType extends Date>(
 *   date: DateArg<DateType>,
 * ): boolean {
 *   // If we were to use `new Date()` directly, the function would  behave
 *   // differently in different timezones and return false for the same date.
 *   return isSameDay(date, constructNow(date));
 * }
 */
function constructNow(date) {
  return (0, _constructFrom.constructFrom)(date, Date.now());
}

// Fallback for modularized imports:
var _default = exports.default = constructNow;
},{"./constructFrom.js":"node_modules/date-fns/constructFrom.js"}],"node_modules/date-fns/daysToWeeks.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.daysToWeeks = daysToWeeks;
exports.default = void 0;
var _constants = require("./constants.js");
/**
 * @name daysToWeeks
 * @category Conversion Helpers
 * @summary Convert days to weeks.
 *
 * @description
 * Convert a number of days to a full number of weeks.
 *
 * @param days - The number of days to be converted
 *
 * @returns The number of days converted in weeks
 *
 * @example
 * // Convert 14 days to weeks:
 * const result = daysToWeeks(14)
 * //=> 2
 *
 * @example
 * // It uses trunc rounding:
 * const result = daysToWeeks(13)
 * //=> 1
 */
function daysToWeeks(days) {
  const result = Math.trunc(days / _constants.daysInWeek);
  // Prevent negative zero
  return result === 0 ? 0 : result;
}

// Fallback for modularized imports:
var _default = exports.default = daysToWeeks;
},{"./constants.js":"node_modules/date-fns/constants.js"}],"node_modules/date-fns/isSameDay.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.isSameDay = isSameDay;
var _normalizeDates = require("./_lib/normalizeDates.js");
var _startOfDay = require("./startOfDay.js");
/**
 * The {@link isSameDay} function options.
 */

/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same day (and year and month)
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(laterDate, earlierDate, options) {
  const [dateLeft_, dateRight_] = (0, _normalizeDates.normalizeDates)(options?.in, laterDate, earlierDate);
  return +(0, _startOfDay.startOfDay)(dateLeft_) === +(0, _startOfDay.startOfDay)(dateRight_);
}

// Fallback for modularized imports:
var _default = exports.default = isSameDay;
},{"./_lib/normalizeDates.js":"node_modules/date-fns/_lib/normalizeDates.js","./startOfDay.js":"node_modules/date-fns/startOfDay.js"}],"node_modules/date-fns/isDate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.isDate = isDate;
/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param value - The value to check
 *
 * @returns True if the given value is a date
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */
function isDate(value) {
  return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}

// Fallback for modularized imports:
var _default = exports.default = isDate;
},{}],"node_modules/date-fns/isValid.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.isValid = isValid;
var _isDate = require("./isDate.js");
var _toDate = require("./toDate.js");
/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate](https://date-fns.org/docs/toDate)
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param date - The date to check
 *
 * @returns The date is valid
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertible into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */
function isValid(date) {
  return !(!(0, _isDate.isDate)(date) && typeof date !== "number" || isNaN(+(0, _toDate.toDate)(date)));
}

// Fallback for modularized imports:
var _default = exports.default = isValid;
},{"./isDate.js":"node_modules/date-fns/isDate.js","./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/differenceInBusinessDays.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.differenceInBusinessDays = differenceInBusinessDays;
var _normalizeDates = require("./_lib/normalizeDates.js");
var _addDays = require("./addDays.js");
var _differenceInCalendarDays = require("./differenceInCalendarDays.js");
var _isSameDay = require("./isSameDay.js");
var _isValid = require("./isValid.js");
var _isWeekend = require("./isWeekend.js");
/**
 * The {@link differenceInBusinessDays} function options.
 */

/**
 * @name differenceInBusinessDays
 * @category Day Helpers
 * @summary Get the number of business days between the given dates.
 *
 * @description
 * Get the number of business day periods between the given dates.
 * Business days being days that aren't in the weekend.
 * Like `differenceInCalendarDays`, the function removes the times from
 * the dates before calculating the difference.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of business days
 *
 * @example
 * // How many business days are between
 * // 10 January 2014 and 20 July 2014?
 * const result = differenceInBusinessDays(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 0, 10)
 * )
 * //=> 136
 *
 * // How many business days are between
 * // 30 November 2021 and 1 November 2021?
 * const result = differenceInBusinessDays(
 *   new Date(2021, 10, 30),
 *   new Date(2021, 10, 1)
 * )
 * //=> 21
 *
 * // How many business days are between
 * // 1 November 2021 and 1 December 2021?
 * const result = differenceInBusinessDays(
 *   new Date(2021, 10, 1),
 *   new Date(2021, 11, 1)
 * )
 * //=> -22
 *
 * // How many business days are between
 * // 1 November 2021 and 1 November 2021 ?
 * const result = differenceInBusinessDays(
 *   new Date(2021, 10, 1),
 *   new Date(2021, 10, 1)
 * )
 * //=> 0
 */
function differenceInBusinessDays(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = (0, _normalizeDates.normalizeDates)(options?.in, laterDate, earlierDate);
  if (!(0, _isValid.isValid)(laterDate_) || !(0, _isValid.isValid)(earlierDate_)) return NaN;
  const diff = (0, _differenceInCalendarDays.differenceInCalendarDays)(laterDate_, earlierDate_);
  const sign = diff < 0 ? -1 : 1;
  const weeks = Math.trunc(diff / 7);
  let result = weeks * 5;
  let movingDate = (0, _addDays.addDays)(earlierDate_, weeks * 7);

  // the loop below will run at most 6 times to account for the remaining days that don't makeup a full week
  while (!(0, _isSameDay.isSameDay)(laterDate_, movingDate)) {
    // sign is used to account for both negative and positive differences
    result += (0, _isWeekend.isWeekend)(movingDate, options) ? 0 : sign;
    movingDate = (0, _addDays.addDays)(movingDate, sign);
  }

  // Prevent negative zero
  return result === 0 ? 0 : result;
}

// Fallback for modularized imports:
var _default = exports.default = differenceInBusinessDays;
},{"./_lib/normalizeDates.js":"node_modules/date-fns/_lib/normalizeDates.js","./addDays.js":"node_modules/date-fns/addDays.js","./differenceInCalendarDays.js":"node_modules/date-fns/differenceInCalendarDays.js","./isSameDay.js":"node_modules/date-fns/isSameDay.js","./isValid.js":"node_modules/date-fns/isValid.js","./isWeekend.js":"node_modules/date-fns/isWeekend.js"}],"node_modules/date-fns/differenceInCalendarISOWeekYears.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.differenceInCalendarISOWeekYears = differenceInCalendarISOWeekYears;
var _normalizeDates = require("./_lib/normalizeDates.js");
var _getISOWeekYear = require("./getISOWeekYear.js");
/**
 * The {@link differenceInCalendarISOWeekYears} function options.
 */

/**
 * @name differenceInCalendarISOWeekYears
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of calendar ISO week-numbering years between the given dates.
 *
 * @description
 * Get the number of calendar ISO week-numbering years between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of calendar ISO week-numbering years
 *
 * @example
 * // How many calendar ISO week-numbering years are 1 January 2010 and 1 January 2012?
 * const result = differenceInCalendarISOWeekYears(
 *   new Date(2012, 0, 1),
 *   new Date(2010, 0, 1)
 * )
 * //=> 2
 */
function differenceInCalendarISOWeekYears(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = (0, _normalizeDates.normalizeDates)(options?.in, laterDate, earlierDate);
  return (0, _getISOWeekYear.getISOWeekYear)(laterDate_, options) - (0, _getISOWeekYear.getISOWeekYear)(earlierDate_, options);
}

// Fallback for modularized imports:
var _default = exports.default = differenceInCalendarISOWeekYears;
},{"./_lib/normalizeDates.js":"node_modules/date-fns/_lib/normalizeDates.js","./getISOWeekYear.js":"node_modules/date-fns/getISOWeekYear.js"}],"node_modules/date-fns/differenceInCalendarISOWeeks.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.differenceInCalendarISOWeeks = differenceInCalendarISOWeeks;
var _getTimezoneOffsetInMilliseconds = require("./_lib/getTimezoneOffsetInMilliseconds.js");
var _normalizeDates = require("./_lib/normalizeDates.js");
var _constants = require("./constants.js");
var _startOfISOWeek = require("./startOfISOWeek.js");
/**
 * The {@link differenceInCalendarISOWeeks} function options.
 */

/**
 * @name differenceInCalendarISOWeeks
 * @category ISO Week Helpers
 * @summary Get the number of calendar ISO weeks between the given dates.
 *
 * @description
 * Get the number of calendar ISO weeks between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of calendar ISO weeks
 *
 * @example
 * // How many calendar ISO weeks are between 6 July 2014 and 21 July 2014?
 * const result = differenceInCalendarISOWeeks(
 *   new Date(2014, 6, 21),
 *   new Date(2014, 6, 6),
 * );
 * //=> 3
 */
function differenceInCalendarISOWeeks(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = (0, _normalizeDates.normalizeDates)(options?.in, laterDate, earlierDate);
  const startOfISOWeekLeft = (0, _startOfISOWeek.startOfISOWeek)(laterDate_);
  const startOfISOWeekRight = (0, _startOfISOWeek.startOfISOWeek)(earlierDate_);
  const timestampLeft = +startOfISOWeekLeft - (0, _getTimezoneOffsetInMilliseconds.getTimezoneOffsetInMilliseconds)(startOfISOWeekLeft);
  const timestampRight = +startOfISOWeekRight - (0, _getTimezoneOffsetInMilliseconds.getTimezoneOffsetInMilliseconds)(startOfISOWeekRight);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round((timestampLeft - timestampRight) / _constants.millisecondsInWeek);
}

// Fallback for modularized imports:
var _default = exports.default = differenceInCalendarISOWeeks;
},{"./_lib/getTimezoneOffsetInMilliseconds.js":"node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js","./_lib/normalizeDates.js":"node_modules/date-fns/_lib/normalizeDates.js","./constants.js":"node_modules/date-fns/constants.js","./startOfISOWeek.js":"node_modules/date-fns/startOfISOWeek.js"}],"node_modules/date-fns/differenceInCalendarMonths.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.differenceInCalendarMonths = differenceInCalendarMonths;
var _normalizeDates = require("./_lib/normalizeDates.js");
/**
 * The {@link differenceInCalendarMonths} function options.
 */

/**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of calendar months
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */
function differenceInCalendarMonths(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = (0, _normalizeDates.normalizeDates)(options?.in, laterDate, earlierDate);
  const yearsDiff = laterDate_.getFullYear() - earlierDate_.getFullYear();
  const monthsDiff = laterDate_.getMonth() - earlierDate_.getMonth();
  return yearsDiff * 12 + monthsDiff;
}

// Fallback for modularized imports:
var _default = exports.default = differenceInCalendarMonths;
},{"./_lib/normalizeDates.js":"node_modules/date-fns/_lib/normalizeDates.js"}],"node_modules/date-fns/getQuarter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getQuarter = getQuarter;
var _toDate = require("./toDate.js");
/**
 * The {@link getQuarter} function options.
 */

/**
 * @name getQuarter
 * @category Quarter Helpers
 * @summary Get the year quarter of the given date.
 *
 * @description
 * Get the year quarter of the given date.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The quarter
 *
 * @example
 * // Which quarter is 2 July 2014?
 * const result = getQuarter(new Date(2014, 6, 2));
 * //=> 3
 */
function getQuarter(date, options) {
  const _date = (0, _toDate.toDate)(date, options?.in);
  const quarter = Math.trunc(_date.getMonth() / 3) + 1;
  return quarter;
}

// Fallback for modularized imports:
var _default = exports.default = getQuarter;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/differenceInCalendarQuarters.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.differenceInCalendarQuarters = differenceInCalendarQuarters;
var _normalizeDates = require("./_lib/normalizeDates.js");
var _getQuarter = require("./getQuarter.js");
/**
 * The {@link differenceInCalendarQuarters} function options.
 */

/**
 * @name differenceInCalendarQuarters
 * @category Quarter Helpers
 * @summary Get the number of calendar quarters between the given dates.
 *
 * @description
 * Get the number of calendar quarters between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of calendar quarters
 *
 * @example
 * // How many calendar quarters are between 31 December 2013 and 2 July 2014?
 * const result = differenceInCalendarQuarters(
 *   new Date(2014, 6, 2),
 *   new Date(2013, 11, 31)
 * )
 * //=> 3
 */
function differenceInCalendarQuarters(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = (0, _normalizeDates.normalizeDates)(options?.in, laterDate, earlierDate);
  const yearsDiff = laterDate_.getFullYear() - earlierDate_.getFullYear();
  const quartersDiff = (0, _getQuarter.getQuarter)(laterDate_) - (0, _getQuarter.getQuarter)(earlierDate_);
  return yearsDiff * 4 + quartersDiff;
}

// Fallback for modularized imports:
var _default = exports.default = differenceInCalendarQuarters;
},{"./_lib/normalizeDates.js":"node_modules/date-fns/_lib/normalizeDates.js","./getQuarter.js":"node_modules/date-fns/getQuarter.js"}],"node_modules/date-fns/differenceInCalendarWeeks.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.differenceInCalendarWeeks = differenceInCalendarWeeks;
var _getTimezoneOffsetInMilliseconds = require("./_lib/getTimezoneOffsetInMilliseconds.js");
var _normalizeDates = require("./_lib/normalizeDates.js");
var _constants = require("./constants.js");
var _startOfWeek = require("./startOfWeek.js");
/**
 * The {@link differenceInCalendarWeeks} function options.
 */

/**
 * @name differenceInCalendarWeeks
 * @category Week Helpers
 * @summary Get the number of calendar weeks between the given dates.
 *
 * @description
 * Get the number of calendar weeks between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of calendar weeks
 *
 * @example
 * // How many calendar weeks are between 5 July 2014 and 20 July 2014?
 * const result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5)
 * )
 * //=> 3
 *
 * @example
 * // If the week starts on Monday,
 * // how many calendar weeks are between 5 July 2014 and 20 July 2014?
 * const result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5),
 *   { weekStartsOn: 1 }
 * )
 * //=> 2
 */
function differenceInCalendarWeeks(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = (0, _normalizeDates.normalizeDates)(options?.in, laterDate, earlierDate);
  const laterStartOfWeek = (0, _startOfWeek.startOfWeek)(laterDate_, options);
  const earlierStartOfWeek = (0, _startOfWeek.startOfWeek)(earlierDate_, options);
  const laterTimestamp = +laterStartOfWeek - (0, _getTimezoneOffsetInMilliseconds.getTimezoneOffsetInMilliseconds)(laterStartOfWeek);
  const earlierTimestamp = +earlierStartOfWeek - (0, _getTimezoneOffsetInMilliseconds.getTimezoneOffsetInMilliseconds)(earlierStartOfWeek);
  return Math.round((laterTimestamp - earlierTimestamp) / _constants.millisecondsInWeek);
}

// Fallback for modularized imports:
var _default = exports.default = differenceInCalendarWeeks;
},{"./_lib/getTimezoneOffsetInMilliseconds.js":"node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js","./_lib/normalizeDates.js":"node_modules/date-fns/_lib/normalizeDates.js","./constants.js":"node_modules/date-fns/constants.js","./startOfWeek.js":"node_modules/date-fns/startOfWeek.js"}],"node_modules/date-fns/differenceInCalendarYears.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.differenceInCalendarYears = differenceInCalendarYears;
var _normalizeDates = require("./_lib/normalizeDates.js");
/**
 * The {@link differenceInCalendarYears} function options.
 */

/**
 * @name differenceInCalendarYears
 * @category Year Helpers
 * @summary Get the number of calendar years between the given dates.
 *
 * @description
 * Get the number of calendar years between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options

 * @returns The number of calendar years
 *
 * @example
 * // How many calendar years are between 31 December 2013 and 11 February 2015?
 * const result = differenceInCalendarYears(
 *   new Date(2015, 1, 11),
 *   new Date(2013, 11, 31)
 * );
 * //=> 2
 */
function differenceInCalendarYears(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = (0, _normalizeDates.normalizeDates)(options?.in, laterDate, earlierDate);
  return laterDate_.getFullYear() - earlierDate_.getFullYear();
}

// Fallback for modularized imports:
var _default = exports.default = differenceInCalendarYears;
},{"./_lib/normalizeDates.js":"node_modules/date-fns/_lib/normalizeDates.js"}],"node_modules/date-fns/differenceInDays.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.differenceInDays = differenceInDays;
var _normalizeDates = require("./_lib/normalizeDates.js");
var _differenceInCalendarDays = require("./differenceInCalendarDays.js");
/**
 * The {@link differenceInDays} function options.
 */

/**
 * @name differenceInDays
 * @category Day Helpers
 * @summary Get the number of full days between the given dates.
 *
 * @description
 * Get the number of full day periods between two dates. Fractional days are
 * truncated towards zero.
 *
 * One "full day" is the distance between a local time in one day to the same
 * local time on the next or previous day. A full day can sometimes be less than
 * or more than 24 hours if a daylight savings change happens between two dates.
 *
 * To ignore DST and only measure exact 24-hour periods, use this instead:
 * `Math.trunc(differenceInHours(dateLeft, dateRight)/24)|0`.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of full days according to the local timezone
 *
 * @example
 * // How many full days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 365
 *
 * @example
 * // How many full days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 0
 *
 * @example
 * // How many full days are between
 * // 1 March 2020 0:00 and 1 June 2020 0:00 ?
 * // Note: because local time is used, the
 * // result will always be 92 days, even in
 * // time zones where DST starts and the
 * // period has only 92*24-1 hours.
 * const result = differenceInDays(
 *   new Date(2020, 5, 1),
 *   new Date(2020, 2, 1)
 * )
 * //=> 92
 */
function differenceInDays(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = (0, _normalizeDates.normalizeDates)(options?.in, laterDate, earlierDate);
  const sign = compareLocalAsc(laterDate_, earlierDate_);
  const difference = Math.abs((0, _differenceInCalendarDays.differenceInCalendarDays)(laterDate_, earlierDate_));
  laterDate_.setDate(laterDate_.getDate() - sign * difference);

  // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
  // If so, result must be decreased by 1 in absolute value
  const isLastDayNotFull = Number(compareLocalAsc(laterDate_, earlierDate_) === -sign);
  const result = sign * (difference - isLastDayNotFull);
  // Prevent negative zero
  return result === 0 ? 0 : result;
}

// Like `compareAsc` but uses local time not UTC, which is needed
// for accurate equality comparisons of UTC timestamps that end up
// having the same representation in local time, e.g. one hour before
// DST ends vs. the instant that DST ends.
function compareLocalAsc(laterDate, earlierDate) {
  const diff = laterDate.getFullYear() - earlierDate.getFullYear() || laterDate.getMonth() - earlierDate.getMonth() || laterDate.getDate() - earlierDate.getDate() || laterDate.getHours() - earlierDate.getHours() || laterDate.getMinutes() - earlierDate.getMinutes() || laterDate.getSeconds() - earlierDate.getSeconds() || laterDate.getMilliseconds() - earlierDate.getMilliseconds();
  if (diff < 0) return -1;
  if (diff > 0) return 1;

  // Return 0 if diff is 0; return NaN if diff is NaN
  return diff;
}

// Fallback for modularized imports:
var _default = exports.default = differenceInDays;
},{"./_lib/normalizeDates.js":"node_modules/date-fns/_lib/normalizeDates.js","./differenceInCalendarDays.js":"node_modules/date-fns/differenceInCalendarDays.js"}],"node_modules/date-fns/_lib/getRoundingMethod.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRoundingMethod = getRoundingMethod;
function getRoundingMethod(method) {
  return number => {
    const round = method ? Math[method] : Math.trunc;
    const result = round(number);
    // Prevent negative zero
    return result === 0 ? 0 : result;
  };
}
},{}],"node_modules/date-fns/differenceInHours.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.differenceInHours = differenceInHours;
var _getRoundingMethod = require("./_lib/getRoundingMethod.js");
var _normalizeDates = require("./_lib/normalizeDates.js");
var _constants = require("./constants.js");
/**
 * The {@link differenceInHours} function options.
 */

/**
 * @name differenceInHours
 * @category Hour Helpers
 * @summary Get the number of hours between the given dates.
 *
 * @description
 * Get the number of hours between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of hours
 *
 * @example
 * // How many hours are between 2 July 2014 06:50:00 and 2 July 2014 19:00:00?
 * const result = differenceInHours(
 *   new Date(2014, 6, 2, 19, 0),
 *   new Date(2014, 6, 2, 6, 50)
 * )
 * //=> 12
 */
function differenceInHours(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = (0, _normalizeDates.normalizeDates)(options?.in, laterDate, earlierDate);
  const diff = (+laterDate_ - +earlierDate_) / _constants.millisecondsInHour;
  return (0, _getRoundingMethod.getRoundingMethod)(options?.roundingMethod)(diff);
}

// Fallback for modularized imports:
var _default = exports.default = differenceInHours;
},{"./_lib/getRoundingMethod.js":"node_modules/date-fns/_lib/getRoundingMethod.js","./_lib/normalizeDates.js":"node_modules/date-fns/_lib/normalizeDates.js","./constants.js":"node_modules/date-fns/constants.js"}],"node_modules/date-fns/subISOWeekYears.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.subISOWeekYears = subISOWeekYears;
var _addISOWeekYears = require("./addISOWeekYears.js");
/**
 * The {@link subISOWeekYears} function options.
 */

/**
 * @name subISOWeekYears
 * @category ISO Week-Numbering Year Helpers
 * @summary Subtract the specified number of ISO week-numbering years from the given date.
 *
 * @description
 * Subtract the specified number of ISO week-numbering years from the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of ISO week-numbering years to be subtracted.
 * @param options - The options
 *
 * @returns The new date with the ISO week-numbering years subtracted
 *
 * @example
 * // Subtract 5 ISO week-numbering years from 1 September 2014:
 * const result = subISOWeekYears(new Date(2014, 8, 1), 5)
 * //=> Mon Aug 31 2009 00:00:00
 */
function subISOWeekYears(date, amount, options) {
  return (0, _addISOWeekYears.addISOWeekYears)(date, -amount, options);
}

// Fallback for modularized imports:
var _default = exports.default = subISOWeekYears;
},{"./addISOWeekYears.js":"node_modules/date-fns/addISOWeekYears.js"}],"node_modules/date-fns/differenceInISOWeekYears.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.differenceInISOWeekYears = differenceInISOWeekYears;
var _normalizeDates = require("./_lib/normalizeDates.js");
var _compareAsc = require("./compareAsc.js");
var _differenceInCalendarISOWeekYears = require("./differenceInCalendarISOWeekYears.js");
var _subISOWeekYears = require("./subISOWeekYears.js");
/**
 * The {@link differenceInISOWeekYears} function options.
 */

/**
 * @name differenceInISOWeekYears
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of full ISO week-numbering years between the given dates.
 *
 * @description
 * Get the number of full ISO week-numbering years between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - The options
 *
 * @returns The number of full ISO week-numbering years
 *
 * @example
 * // How many full ISO week-numbering years are between 1 January 2010 and 1 January 2012?
 * const result = differenceInISOWeekYears(
 *   new Date(2012, 0, 1),
 *   new Date(2010, 0, 1)
 * )
 * // => 1
 */
function differenceInISOWeekYears(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = (0, _normalizeDates.normalizeDates)(options?.in, laterDate, earlierDate);
  const sign = (0, _compareAsc.compareAsc)(laterDate_, earlierDate_);
  const diff = Math.abs((0, _differenceInCalendarISOWeekYears.differenceInCalendarISOWeekYears)(laterDate_, earlierDate_, options));
  const adjustedDate = (0, _subISOWeekYears.subISOWeekYears)(laterDate_, sign * diff, options);
  const isLastISOWeekYearNotFull = Number((0, _compareAsc.compareAsc)(adjustedDate, earlierDate_) === -sign);
  const result = sign * (diff - isLastISOWeekYearNotFull);

  // Prevent negative zero
  return result === 0 ? 0 : result;
}

// Fallback for modularized imports:
var _default = exports.default = differenceInISOWeekYears;
},{"./_lib/normalizeDates.js":"node_modules/date-fns/_lib/normalizeDates.js","./compareAsc.js":"node_modules/date-fns/compareAsc.js","./differenceInCalendarISOWeekYears.js":"node_modules/date-fns/differenceInCalendarISOWeekYears.js","./subISOWeekYears.js":"node_modules/date-fns/subISOWeekYears.js"}],"node_modules/date-fns/differenceInMilliseconds.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.differenceInMilliseconds = differenceInMilliseconds;
var _toDate = require("./toDate.js");
/**
 * @name differenceInMilliseconds
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 *
 * @returns The number of milliseconds
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * const result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */
function differenceInMilliseconds(laterDate, earlierDate) {
  return +(0, _toDate.toDate)(laterDate) - +(0, _toDate.toDate)(earlierDate);
}

// Fallback for modularized imports:
var _default = exports.default = differenceInMilliseconds;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/differenceInMinutes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.differenceInMinutes = differenceInMinutes;
var _getRoundingMethod = require("./_lib/getRoundingMethod.js");
var _constants = require("./constants.js");
var _differenceInMilliseconds = require("./differenceInMilliseconds.js");
/**
 * The {@link differenceInMinutes} function options.
 */

/**
 * @name differenceInMinutes
 * @category Minute Helpers
 * @summary Get the number of minutes between the given dates.
 *
 * @description
 * Get the signed number of full (rounded towards 0) minutes between the given dates.
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of minutes
 *
 * @example
 * // How many minutes are between 2 July 2014 12:07:59 and 2 July 2014 12:20:00?
 * const result = differenceInMinutes(
 *   new Date(2014, 6, 2, 12, 20, 0),
 *   new Date(2014, 6, 2, 12, 7, 59)
 * )
 * //=> 12
 *
 * @example
 * // How many minutes are between 10:01:59 and 10:00:00
 * const result = differenceInMinutes(
 *   new Date(2000, 0, 1, 10, 0, 0),
 *   new Date(2000, 0, 1, 10, 1, 59)
 * )
 * //=> -1
 */
function differenceInMinutes(dateLeft, dateRight, options) {
  const diff = (0, _differenceInMilliseconds.differenceInMilliseconds)(dateLeft, dateRight) / _constants.millisecondsInMinute;
  return (0, _getRoundingMethod.getRoundingMethod)(options?.roundingMethod)(diff);
}

// Fallback for modularized imports:
var _default = exports.default = differenceInMinutes;
},{"./_lib/getRoundingMethod.js":"node_modules/date-fns/_lib/getRoundingMethod.js","./constants.js":"node_modules/date-fns/constants.js","./differenceInMilliseconds.js":"node_modules/date-fns/differenceInMilliseconds.js"}],"node_modules/date-fns/endOfDay.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.endOfDay = endOfDay;
var _toDate = require("./toDate.js");
/**
 * The {@link endOfDay} function options.
 */

/**
 * @name endOfDay
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a day
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */
function endOfDay(date, options) {
  const _date = (0, _toDate.toDate)(date, options?.in);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

// Fallback for modularized imports:
var _default = exports.default = endOfDay;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/endOfMonth.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.endOfMonth = endOfMonth;
var _toDate = require("./toDate.js");
/**
 * The {@link endOfMonth} function options.
 */

/**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a month
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */
function endOfMonth(date, options) {
  const _date = (0, _toDate.toDate)(date, options?.in);
  const month = _date.getMonth();
  _date.setFullYear(_date.getFullYear(), month + 1, 0);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

// Fallback for modularized imports:
var _default = exports.default = endOfMonth;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/isLastDayOfMonth.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.isLastDayOfMonth = isLastDayOfMonth;
var _endOfDay = require("./endOfDay.js");
var _endOfMonth = require("./endOfMonth.js");
var _toDate = require("./toDate.js");
/**
 * @name isLastDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is the last day of a month
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * const result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */
function isLastDayOfMonth(date, options) {
  const _date = (0, _toDate.toDate)(date, options?.in);
  return +(0, _endOfDay.endOfDay)(_date, options) === +(0, _endOfMonth.endOfMonth)(_date, options);
}

// Fallback for modularized imports:
var _default = exports.default = isLastDayOfMonth;
},{"./endOfDay.js":"node_modules/date-fns/endOfDay.js","./endOfMonth.js":"node_modules/date-fns/endOfMonth.js","./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/differenceInMonths.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.differenceInMonths = differenceInMonths;
var _normalizeDates = require("./_lib/normalizeDates.js");
var _compareAsc = require("./compareAsc.js");
var _differenceInCalendarMonths = require("./differenceInCalendarMonths.js");
var _isLastDayOfMonth = require("./isLastDayOfMonth.js");
/**
 * The {@link differenceInMonths} function options.
 */

/**
 * @name differenceInMonths
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of full months
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))
 * //=> 7
 */
function differenceInMonths(laterDate, earlierDate, options) {
  const [laterDate_, workingLaterDate, earlierDate_] = (0, _normalizeDates.normalizeDates)(options?.in, laterDate, laterDate, earlierDate);
  const sign = (0, _compareAsc.compareAsc)(workingLaterDate, earlierDate_);
  const difference = Math.abs((0, _differenceInCalendarMonths.differenceInCalendarMonths)(workingLaterDate, earlierDate_));
  if (difference < 1) return 0;
  if (workingLaterDate.getMonth() === 1 && workingLaterDate.getDate() > 27) workingLaterDate.setDate(30);
  workingLaterDate.setMonth(workingLaterDate.getMonth() - sign * difference);
  let isLastMonthNotFull = (0, _compareAsc.compareAsc)(workingLaterDate, earlierDate_) === -sign;
  if ((0, _isLastDayOfMonth.isLastDayOfMonth)(laterDate_) && difference === 1 && (0, _compareAsc.compareAsc)(laterDate_, earlierDate_) === 1) {
    isLastMonthNotFull = false;
  }
  const result = sign * (difference - +isLastMonthNotFull);
  return result === 0 ? 0 : result;
}

// Fallback for modularized imports:
var _default = exports.default = differenceInMonths;
},{"./_lib/normalizeDates.js":"node_modules/date-fns/_lib/normalizeDates.js","./compareAsc.js":"node_modules/date-fns/compareAsc.js","./differenceInCalendarMonths.js":"node_modules/date-fns/differenceInCalendarMonths.js","./isLastDayOfMonth.js":"node_modules/date-fns/isLastDayOfMonth.js"}],"node_modules/date-fns/differenceInQuarters.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.differenceInQuarters = differenceInQuarters;
var _getRoundingMethod = require("./_lib/getRoundingMethod.js");
var _differenceInMonths = require("./differenceInMonths.js");
/**
 * The {@link differenceInQuarters} function options.
 */

/**
 * @name differenceInQuarters
 * @category Quarter Helpers
 * @summary Get the number of quarters between the given dates.
 *
 * @description
 * Get the number of quarters between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of full quarters
 *
 * @example
 * // How many full quarters are between 31 December 2013 and 2 July 2014?
 * const result = differenceInQuarters(new Date(2014, 6, 2), new Date(2013, 11, 31))
 * //=> 2
 */
function differenceInQuarters(laterDate, earlierDate, options) {
  const diff = (0, _differenceInMonths.differenceInMonths)(laterDate, earlierDate, options) / 3;
  return (0, _getRoundingMethod.getRoundingMethod)(options?.roundingMethod)(diff);
}

// Fallback for modularized imports:
var _default = exports.default = differenceInQuarters;
},{"./_lib/getRoundingMethod.js":"node_modules/date-fns/_lib/getRoundingMethod.js","./differenceInMonths.js":"node_modules/date-fns/differenceInMonths.js"}],"node_modules/date-fns/differenceInSeconds.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.differenceInSeconds = differenceInSeconds;
var _getRoundingMethod = require("./_lib/getRoundingMethod.js");
var _differenceInMilliseconds = require("./differenceInMilliseconds.js");
/**
 * The {@link differenceInSeconds} function options.
 */

/**
 * @name differenceInSeconds
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of seconds
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * const result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */
function differenceInSeconds(laterDate, earlierDate, options) {
  const diff = (0, _differenceInMilliseconds.differenceInMilliseconds)(laterDate, earlierDate) / 1000;
  return (0, _getRoundingMethod.getRoundingMethod)(options?.roundingMethod)(diff);
}

// Fallback for modularized imports:
var _default = exports.default = differenceInSeconds;
},{"./_lib/getRoundingMethod.js":"node_modules/date-fns/_lib/getRoundingMethod.js","./differenceInMilliseconds.js":"node_modules/date-fns/differenceInMilliseconds.js"}],"node_modules/date-fns/differenceInWeeks.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.differenceInWeeks = differenceInWeeks;
var _getRoundingMethod = require("./_lib/getRoundingMethod.js");
var _differenceInDays = require("./differenceInDays.js");
/**
 * The {@link differenceInWeeks} function options.
 */

/**
 * @name differenceInWeeks
 * @category Week Helpers
 * @summary Get the number of full weeks between the given dates.
 *
 * @description
 * Get the number of full weeks between two dates. Fractional weeks are
 * truncated towards zero by default.
 *
 * One "full week" is the distance between a local time in one day to the same
 * local time 7 days earlier or later. A full week can sometimes be less than
 * or more than 7*24 hours if a daylight savings change happens between two dates.
 *
 * To ignore DST and only measure exact 7*24-hour periods, use this instead:
 * `Math.trunc(differenceInHours(dateLeft, dateRight)/(7*24))|0`.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of full weeks
 *
 * @example
 * // How many full weeks are between 5 July 2014 and 20 July 2014?
 * const result = differenceInWeeks(new Date(2014, 6, 20), new Date(2014, 6, 5))
 * //=> 2
 *
 * @example
 * // How many full weeks are between
 * // 1 March 2020 0:00 and 6 June 2020 0:00 ?
 * // Note: because local time is used, the
 * // result will always be 8 weeks (54 days),
 * // even if DST starts and the period has
 * // only 54*24-1 hours.
 * const result = differenceInWeeks(
 *   new Date(2020, 5, 1),
 *   new Date(2020, 2, 6)
 * )
 * //=> 8
 */
function differenceInWeeks(laterDate, earlierDate, options) {
  const diff = (0, _differenceInDays.differenceInDays)(laterDate, earlierDate, options) / 7;
  return (0, _getRoundingMethod.getRoundingMethod)(options?.roundingMethod)(diff);
}

// Fallback for modularized imports:
var _default = exports.default = differenceInWeeks;
},{"./_lib/getRoundingMethod.js":"node_modules/date-fns/_lib/getRoundingMethod.js","./differenceInDays.js":"node_modules/date-fns/differenceInDays.js"}],"node_modules/date-fns/differenceInYears.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.differenceInYears = differenceInYears;
var _normalizeDates = require("./_lib/normalizeDates.js");
var _compareAsc = require("./compareAsc.js");
var _differenceInCalendarYears = require("./differenceInCalendarYears.js");
/**
 * The {@link differenceInYears} function options.
 */

/**
 * @name differenceInYears
 * @category Year Helpers
 * @summary Get the number of full years between the given dates.
 *
 * @description
 * Get the number of full years between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of full years
 *
 * @example
 * // How many full years are between 31 December 2013 and 11 February 2015?
 * const result = differenceInYears(new Date(2015, 1, 11), new Date(2013, 11, 31))
 * //=> 1
 */
function differenceInYears(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = (0, _normalizeDates.normalizeDates)(options?.in, laterDate, earlierDate);

  // -1 if the left date is earlier than the right date
  // 2023-12-31 - 2024-01-01 = -1
  const sign = (0, _compareAsc.compareAsc)(laterDate_, earlierDate_);

  // First calculate the difference in calendar years
  // 2024-01-01 - 2023-12-31 = 1 year
  const diff = Math.abs((0, _differenceInCalendarYears.differenceInCalendarYears)(laterDate_, earlierDate_));

  // Now we need to calculate if the difference is full. To do that we set
  // both dates to the same year and check if the both date's month and day
  // form a full year.
  laterDate_.setFullYear(1584);
  earlierDate_.setFullYear(1584);

  // For it to be true, when the later date is indeed later than the earlier date
  // (2026-02-01 - 2023-12-10 = 3 years), the difference is full if
  // the normalized later date is also later than the normalized earlier date.
  // In our example, 1584-02-01 is earlier than 1584-12-10, so the difference
  // is partial, hence we need to subtract 1 from the difference 3 - 1 = 2.
  const partial = (0, _compareAsc.compareAsc)(laterDate_, earlierDate_) === -sign;
  const result = sign * (diff - +partial);

  // Prevent negative zero
  return result === 0 ? 0 : result;
}

// Fallback for modularized imports:
var _default = exports.default = differenceInYears;
},{"./_lib/normalizeDates.js":"node_modules/date-fns/_lib/normalizeDates.js","./compareAsc.js":"node_modules/date-fns/compareAsc.js","./differenceInCalendarYears.js":"node_modules/date-fns/differenceInCalendarYears.js"}],"node_modules/date-fns/_lib/normalizeInterval.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizeInterval = normalizeInterval;
var _normalizeDates = require("./normalizeDates.js");
function normalizeInterval(context, interval) {
  const [start, end] = (0, _normalizeDates.normalizeDates)(context, interval.start, interval.end);
  return {
    start,
    end
  };
}
},{"./normalizeDates.js":"node_modules/date-fns/_lib/normalizeDates.js"}],"node_modules/date-fns/eachDayOfInterval.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.eachDayOfInterval = eachDayOfInterval;
var _normalizeInterval = require("./_lib/normalizeInterval.js");
var _constructFrom = require("./constructFrom.js");
/**
 * The {@link eachDayOfInterval} function options.
 */

/**
 * The {@link eachDayOfInterval} function result type. It resolves the proper data type.
 * It uses the first argument date object type, starting from the date argument,
 * then the start interval date, and finally the end interval date. If
 * a context function is passed, it uses the context function return type.
 */

/**
 * @name eachDayOfInterval
 * @category Interval Helpers
 * @summary Return the array of dates within the specified time interval.
 *
 * @description
 * Return the array of dates within the specified time interval.
 *
 * @typeParam IntervalType - Interval type.
 * @typeParam Options - Options type.
 *
 * @param interval - The interval.
 * @param options - An object with options.
 *
 * @returns The array with starts of days from the day of the interval start to the day of the interval end
 *
 * @example
 * // Each day between 6 October 2014 and 10 October 2014:
 * const result = eachDayOfInterval({
 *   start: new Date(2014, 9, 6),
 *   end: new Date(2014, 9, 10)
 * })
 * //=> [
 * //   Mon Oct 06 2014 00:00:00,
 * //   Tue Oct 07 2014 00:00:00,
 * //   Wed Oct 08 2014 00:00:00,
 * //   Thu Oct 09 2014 00:00:00,
 * //   Fri Oct 10 2014 00:00:00
 * // ]
 */
function eachDayOfInterval(interval, options) {
  const {
    start,
    end
  } = (0, _normalizeInterval.normalizeInterval)(options?.in, interval);
  let reversed = +start > +end;
  const endTime = reversed ? +start : +end;
  const date = reversed ? end : start;
  date.setHours(0, 0, 0, 0);
  let step = options?.step ?? 1;
  if (!step) return [];
  if (step < 0) {
    step = -step;
    reversed = !reversed;
  }
  const dates = [];
  while (+date <= endTime) {
    dates.push((0, _constructFrom.constructFrom)(start, date));
    date.setDate(date.getDate() + step);
    date.setHours(0, 0, 0, 0);
  }
  return reversed ? dates.reverse() : dates;
}

// Fallback for modularized imports:
var _default = exports.default = eachDayOfInterval;
},{"./_lib/normalizeInterval.js":"node_modules/date-fns/_lib/normalizeInterval.js","./constructFrom.js":"node_modules/date-fns/constructFrom.js"}],"node_modules/date-fns/eachHourOfInterval.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.eachHourOfInterval = eachHourOfInterval;
var _normalizeInterval = require("./_lib/normalizeInterval.js");
var _constructFrom = require("./constructFrom.js");
/**
 * The {@link eachHourOfInterval} function options.
 */

/**
 * The {@link eachHourOfInterval} function result type.
 * Resolves to the appropriate date type based on inputs.
 */

/**
 * @name eachHourOfInterval
 * @category Interval Helpers
 * @summary Return the array of hours within the specified time interval.
 *
 * @description
 * Return the array of hours within the specified time interval.
 *
 * @typeParam IntervalType - Interval type.
 * @typeParam Options - Options type.
 *
 * @param interval - The interval.
 * @param options - An object with options.
 *
 * @returns The array with starts of hours from the hour of the interval start to the hour of the interval end
 *
 * @example
 * // Each hour between 6 October 2014, 12:00 and 6 October 2014, 15:00
 * const result = eachHourOfInterval({
 *   start: new Date(2014, 9, 6, 12),
 *   end: new Date(2014, 9, 6, 15)
 * });
 * //=> [
 * //   Mon Oct 06 2014 12:00:00,
 * //   Mon Oct 06 2014 13:00:00,
 * //   Mon Oct 06 2014 14:00:00,
 * //   Mon Oct 06 2014 15:00:00
 * // ]
 */
function eachHourOfInterval(interval, options) {
  const {
    start,
    end
  } = (0, _normalizeInterval.normalizeInterval)(options?.in, interval);
  let reversed = +start > +end;
  const endTime = reversed ? +start : +end;
  const date = reversed ? end : start;
  date.setMinutes(0, 0, 0);
  let step = options?.step ?? 1;
  if (!step) return [];
  if (step < 0) {
    step = -step;
    reversed = !reversed;
  }
  const dates = [];
  while (+date <= endTime) {
    dates.push((0, _constructFrom.constructFrom)(start, date));
    date.setHours(date.getHours() + step);
  }
  return reversed ? dates.reverse() : dates;
}

// Fallback for modularized imports:
var _default = exports.default = eachHourOfInterval;
},{"./_lib/normalizeInterval.js":"node_modules/date-fns/_lib/normalizeInterval.js","./constructFrom.js":"node_modules/date-fns/constructFrom.js"}],"node_modules/date-fns/eachMinuteOfInterval.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.eachMinuteOfInterval = eachMinuteOfInterval;
var _normalizeInterval = require("./_lib/normalizeInterval.js");
var _addMinutes = require("./addMinutes.js");
var _constructFrom = require("./constructFrom.js");
/**
 * The {@link eachMinuteOfInterval} function options.
 */

/**
 * The {@link eachMinuteOfInterval} function result type. It resolves the proper data type.
 * It uses the first argument date object type, starting from the date argument,
 * then the start interval date, and finally the end interval date. If
 * a context function is passed, it uses the context function return type.
 */

/**
 * @name eachMinuteOfInterval
 * @category Interval Helpers
 * @summary Return the array of minutes within the specified time interval.
 *
 * @description
 * Returns the array of minutes within the specified time interval.
 *
 * @typeParam IntervalType - Interval type.
 * @typeParam Options - Options type.
 *
 * @param interval - The interval.
 * @param options - An object with options.
 *
 * @returns The array with starts of minutes from the minute of the interval start to the minute of the interval end
 *
 * @example
 * // Each minute between 14 October 2020, 13:00 and 14 October 2020, 13:03
 * const result = eachMinuteOfInterval({
 *   start: new Date(2014, 9, 14, 13),
 *   end: new Date(2014, 9, 14, 13, 3)
 * })
 * //=> [
 * //   Wed Oct 14 2014 13:00:00,
 * //   Wed Oct 14 2014 13:01:00,
 * //   Wed Oct 14 2014 13:02:00,
 * //   Wed Oct 14 2014 13:03:00
 * // ]
 */
function eachMinuteOfInterval(interval, options) {
  const {
    start,
    end
  } = (0, _normalizeInterval.normalizeInterval)(options?.in, interval);
  // Set to the start of the minute
  start.setSeconds(0, 0);
  let reversed = +start > +end;
  const endTime = reversed ? +start : +end;
  let date = reversed ? end : start;
  let step = options?.step ?? 1;
  if (!step) return [];
  if (step < 0) {
    step = -step;
    reversed = !reversed;
  }
  const dates = [];
  while (+date <= endTime) {
    dates.push((0, _constructFrom.constructFrom)(start, date));
    date = (0, _addMinutes.addMinutes)(date, step);
  }
  return reversed ? dates.reverse() : dates;
}

// Fallback for modularized imports:
var _default = exports.default = eachMinuteOfInterval;
},{"./_lib/normalizeInterval.js":"node_modules/date-fns/_lib/normalizeInterval.js","./addMinutes.js":"node_modules/date-fns/addMinutes.js","./constructFrom.js":"node_modules/date-fns/constructFrom.js"}],"node_modules/date-fns/eachMonthOfInterval.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.eachMonthOfInterval = eachMonthOfInterval;
var _normalizeInterval = require("./_lib/normalizeInterval.js");
var _constructFrom = require("./constructFrom.js");
/**
 * The {@link eachMonthOfInterval} function options.
 */

/**
 * The {@link eachMonthOfInterval} function result type. It resolves the proper data type.
 */

/**
 * @name eachMonthOfInterval
 * @category Interval Helpers
 * @summary Return the array of months within the specified time interval.
 *
 * @description
 * Return the array of months within the specified time interval.
 *
 * @typeParam IntervalType - Interval type.
 * @typeParam Options - Options type.
 *
 * @param interval - The interval.
 * @param options - An object with options.
 *
 * @returns The array with starts of months from the month of the interval start to the month of the interval end
 *
 * @example
 * // Each month between 6 February 2014 and 10 August 2014:
 * const result = eachMonthOfInterval({
 *   start: new Date(2014, 1, 6),
 *   end: new Date(2014, 7, 10)
 * })
 * //=> [
 * //   Sat Feb 01 2014 00:00:00,
 * //   Sat Mar 01 2014 00:00:00,
 * //   Tue Apr 01 2014 00:00:00,
 * //   Thu May 01 2014 00:00:00,
 * //   Sun Jun 01 2014 00:00:00,
 * //   Tue Jul 01 2014 00:00:00,
 * //   Fri Aug 01 2014 00:00:00
 * // ]
 */
function eachMonthOfInterval(interval, options) {
  const {
    start,
    end
  } = (0, _normalizeInterval.normalizeInterval)(options?.in, interval);
  let reversed = +start > +end;
  const endTime = reversed ? +start : +end;
  const date = reversed ? end : start;
  date.setHours(0, 0, 0, 0);
  date.setDate(1);
  let step = options?.step ?? 1;
  if (!step) return [];
  if (step < 0) {
    step = -step;
    reversed = !reversed;
  }
  const dates = [];
  while (+date <= endTime) {
    dates.push((0, _constructFrom.constructFrom)(start, date));
    date.setMonth(date.getMonth() + step);
  }
  return reversed ? dates.reverse() : dates;
}

// Fallback for modularized imports:
var _default = exports.default = eachMonthOfInterval;
},{"./_lib/normalizeInterval.js":"node_modules/date-fns/_lib/normalizeInterval.js","./constructFrom.js":"node_modules/date-fns/constructFrom.js"}],"node_modules/date-fns/startOfQuarter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.startOfQuarter = startOfQuarter;
var _toDate = require("./toDate.js");
/**
 * The {@link startOfQuarter} function options.
 */

/**
 * @name startOfQuarter
 * @category Quarter Helpers
 * @summary Return the start of a year quarter for the given date.
 *
 * @description
 * Return the start of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a quarter
 *
 * @example
 * // The start of a quarter for 2 September 2014 11:55:00:
 * const result = startOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Jul 01 2014 00:00:00
 */
function startOfQuarter(date, options) {
  const _date = (0, _toDate.toDate)(date, options?.in);
  const currentMonth = _date.getMonth();
  const month = currentMonth - currentMonth % 3;
  _date.setMonth(month, 1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
var _default = exports.default = startOfQuarter;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/eachQuarterOfInterval.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.eachQuarterOfInterval = eachQuarterOfInterval;
var _normalizeInterval = require("./_lib/normalizeInterval.js");
var _addQuarters = require("./addQuarters.js");
var _constructFrom = require("./constructFrom.js");
var _startOfQuarter = require("./startOfQuarter.js");
/**
 * The {@link eachQuarterOfInterval} function options.
 */

/**
 * The {@link eachQuarterOfInterval} function result type. It resolves the proper data type.
 * It uses the first argument date object type, starting from the date argument,
 * then the start interval date, and finally the end interval date. If
 * a context function is passed, it uses the context function return type.
 */

/**
 * @name eachQuarterOfInterval
 * @category Interval Helpers
 * @summary Return the array of quarters within the specified time interval.
 *
 * @description
 * Return the array of quarters within the specified time interval.
 *
 * @typeParam IntervalType - Interval type.
 * @typeParam Options - Options type.
 *
 * @param interval - The interval
 * @param options - An object with options
 *
 * @returns The array with starts of quarters from the quarter of the interval start to the quarter of the interval end
 *
 * @example
 * // Each quarter within interval 6 February 2014 - 10 August 2014:
 * const result = eachQuarterOfInterval({
 *   start: new Date(2014, 1, 6),
 *   end: new Date(2014, 7, 10),
 * })
 * //=> [
 * //   Wed Jan 01 2014 00:00:00,
 * //   Tue Apr 01 2014 00:00:00,
 * //   Tue Jul 01 2014 00:00:00,
 * // ]
 */
function eachQuarterOfInterval(interval, options) {
  const {
    start,
    end
  } = (0, _normalizeInterval.normalizeInterval)(options?.in, interval);
  let reversed = +start > +end;
  const endTime = reversed ? +(0, _startOfQuarter.startOfQuarter)(start) : +(0, _startOfQuarter.startOfQuarter)(end);
  let date = reversed ? (0, _startOfQuarter.startOfQuarter)(end) : (0, _startOfQuarter.startOfQuarter)(start);
  let step = options?.step ?? 1;
  if (!step) return [];
  if (step < 0) {
    step = -step;
    reversed = !reversed;
  }
  const dates = [];
  while (+date <= endTime) {
    dates.push((0, _constructFrom.constructFrom)(start, date));
    date = (0, _addQuarters.addQuarters)(date, step);
  }
  return reversed ? dates.reverse() : dates;
}

// Fallback for modularized imports:
var _default = exports.default = eachQuarterOfInterval;
},{"./_lib/normalizeInterval.js":"node_modules/date-fns/_lib/normalizeInterval.js","./addQuarters.js":"node_modules/date-fns/addQuarters.js","./constructFrom.js":"node_modules/date-fns/constructFrom.js","./startOfQuarter.js":"node_modules/date-fns/startOfQuarter.js"}],"node_modules/date-fns/eachWeekOfInterval.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.eachWeekOfInterval = eachWeekOfInterval;
var _normalizeInterval = require("./_lib/normalizeInterval.js");
var _addWeeks = require("./addWeeks.js");
var _constructFrom = require("./constructFrom.js");
var _startOfWeek = require("./startOfWeek.js");
/**
 * The {@link eachWeekOfInterval} function options.
 */

/**
 * The {@link eachWeekOfInterval} function result type. It resolves the proper data type.
 * It uses the first argument date object type, starting from the interval start date,
 * then the end interval date. If a context function is passed, it uses the context function return type.
 */

/**
 * @name eachWeekOfInterval
 * @category Interval Helpers
 * @summary Return the array of weeks within the specified time interval.
 *
 * @description
 * Return the array of weeks within the specified time interval.
 *
 * @param interval - The interval.
 * @param options - An object with options.
 *
 * @returns The array with starts of weeks from the week of the interval start to the week of the interval end
 *
 * @example
 * // Each week within interval 6 October 2014 - 23 November 2014:
 * const result = eachWeekOfInterval({
 *   start: new Date(2014, 9, 6),
 *   end: new Date(2014, 10, 23)
 * })
 * //=> [
 * //   Sun Oct 05 2014 00:00:00,
 * //   Sun Oct 12 2014 00:00:00,
 * //   Sun Oct 19 2014 00:00:00,
 * //   Sun Oct 26 2014 00:00:00,
 * //   Sun Nov 02 2014 00:00:00,
 * //   Sun Nov 09 2014 00:00:00,
 * //   Sun Nov 16 2014 00:00:00,
 * //   Sun Nov 23 2014 00:00:00
 * // ]
 */
function eachWeekOfInterval(interval, options) {
  const {
    start,
    end
  } = (0, _normalizeInterval.normalizeInterval)(options?.in, interval);
  let reversed = +start > +end;
  const startDateWeek = reversed ? (0, _startOfWeek.startOfWeek)(end, options) : (0, _startOfWeek.startOfWeek)(start, options);
  const endDateWeek = reversed ? (0, _startOfWeek.startOfWeek)(start, options) : (0, _startOfWeek.startOfWeek)(end, options);
  startDateWeek.setHours(15);
  endDateWeek.setHours(15);
  const endTime = +endDateWeek.getTime();
  let currentDate = startDateWeek;
  let step = options?.step ?? 1;
  if (!step) return [];
  if (step < 0) {
    step = -step;
    reversed = !reversed;
  }
  const dates = [];
  while (+currentDate <= endTime) {
    currentDate.setHours(0);
    dates.push((0, _constructFrom.constructFrom)(start, currentDate));
    currentDate = (0, _addWeeks.addWeeks)(currentDate, step);
    currentDate.setHours(15);
  }
  return reversed ? dates.reverse() : dates;
}

// Fallback for modularized imports:
var _default = exports.default = eachWeekOfInterval;
},{"./_lib/normalizeInterval.js":"node_modules/date-fns/_lib/normalizeInterval.js","./addWeeks.js":"node_modules/date-fns/addWeeks.js","./constructFrom.js":"node_modules/date-fns/constructFrom.js","./startOfWeek.js":"node_modules/date-fns/startOfWeek.js"}],"node_modules/date-fns/eachWeekendOfInterval.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.eachWeekendOfInterval = eachWeekendOfInterval;
var _normalizeInterval = require("./_lib/normalizeInterval.js");
var _constructFrom = require("./constructFrom.js");
var _eachDayOfInterval = require("./eachDayOfInterval.js");
var _isWeekend = require("./isWeekend.js");
/**
 * The {@link eachWeekendOfInterval} function options.
 */

/**
 * The {@link eachWeekendOfInterval} function result type.
 */

/**
 * @name eachWeekendOfInterval
 * @category Interval Helpers
 * @summary List all the Saturdays and Sundays in the given date interval.
 *
 * @description
 * Get all the Saturdays and Sundays in the given date interval.
 *
 * @typeParam IntervalType - Interval type.
 * @typeParam Options - Options type.
 *
 * @param interval - The given interval
 * @param options - An object with options
 *
 * @returns An array containing all the Saturdays and Sundays
 *
 * @example
 * // Lists all Saturdays and Sundays in the given date interval
 * const result = eachWeekendOfInterval({
 *   start: new Date(2018, 8, 17),
 *   end: new Date(2018, 8, 30)
 * })
 * //=> [
 * //   Sat Sep 22 2018 00:00:00,
 * //   Sun Sep 23 2018 00:00:00,
 * //   Sat Sep 29 2018 00:00:00,
 * //   Sun Sep 30 2018 00:00:00
 * // ]
 */
function eachWeekendOfInterval(interval, options) {
  const {
    start,
    end
  } = (0, _normalizeInterval.normalizeInterval)(options?.in, interval);
  const dateInterval = (0, _eachDayOfInterval.eachDayOfInterval)({
    start,
    end
  }, options);
  const weekends = [];
  let index = 0;
  while (index < dateInterval.length) {
    const date = dateInterval[index++];
    if ((0, _isWeekend.isWeekend)(date)) weekends.push((0, _constructFrom.constructFrom)(start, date));
  }
  return weekends;
}

// Fallback for modularized imports:
var _default = exports.default = eachWeekendOfInterval;
},{"./_lib/normalizeInterval.js":"node_modules/date-fns/_lib/normalizeInterval.js","./constructFrom.js":"node_modules/date-fns/constructFrom.js","./eachDayOfInterval.js":"node_modules/date-fns/eachDayOfInterval.js","./isWeekend.js":"node_modules/date-fns/isWeekend.js"}],"node_modules/date-fns/startOfMonth.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.startOfMonth = startOfMonth;
var _toDate = require("./toDate.js");
/**
 * The {@link startOfMonth} function options.
 */

/**
 * @name startOfMonth
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date. The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments.
 * Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed,
 * or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a month
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * const result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfMonth(date, options) {
  const _date = (0, _toDate.toDate)(date, options?.in);
  _date.setDate(1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
var _default = exports.default = startOfMonth;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/eachWeekendOfMonth.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.eachWeekendOfMonth = eachWeekendOfMonth;
var _eachWeekendOfInterval = require("./eachWeekendOfInterval.js");
var _endOfMonth = require("./endOfMonth.js");
var _startOfMonth = require("./startOfMonth.js");
/**
 * The {@link eachWeekendOfMonth} function options.
 */

/**
 * @name eachWeekendOfMonth
 * @category Month Helpers
 * @summary List all the Saturdays and Sundays in the given month.
 *
 * @description
 * Get all the Saturdays and Sundays in the given month.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The given month
 * @param options - An object with options
 *
 * @returns An array containing all the Saturdays and Sundays
 *
 * @example
 * // Lists all Saturdays and Sundays in the given month
 * const result = eachWeekendOfMonth(new Date(2022, 1, 1))
 * //=> [
 * //   Sat Feb 05 2022 00:00:00,
 * //   Sun Feb 06 2022 00:00:00,
 * //   Sat Feb 12 2022 00:00:00,
 * //   Sun Feb 13 2022 00:00:00,
 * //   Sat Feb 19 2022 00:00:00,
 * //   Sun Feb 20 2022 00:00:00,
 * //   Sat Feb 26 2022 00:00:00,
 * //   Sun Feb 27 2022 00:00:00
 * // ]
 */
function eachWeekendOfMonth(date, options) {
  const start = (0, _startOfMonth.startOfMonth)(date, options);
  const end = (0, _endOfMonth.endOfMonth)(date, options);
  return (0, _eachWeekendOfInterval.eachWeekendOfInterval)({
    start,
    end
  }, options);
}

// Fallback for modularized imports:
var _default = exports.default = eachWeekendOfMonth;
},{"./eachWeekendOfInterval.js":"node_modules/date-fns/eachWeekendOfInterval.js","./endOfMonth.js":"node_modules/date-fns/endOfMonth.js","./startOfMonth.js":"node_modules/date-fns/startOfMonth.js"}],"node_modules/date-fns/endOfYear.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.endOfYear = endOfYear;
var _toDate = require("./toDate.js");
/**
 * The {@link endOfYear} function options.
 */

/**
 * @name endOfYear
 * @category Year Helpers
 * @summary Return the end of a year for the given date.
 *
 * @description
 * Return the end of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The end of a year
 *
 * @example
 * // The end of a year for 2 September 2014 11:55:00:
 * const result = endOfYear(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Wed Dec 31 2014 23:59:59.999
 */
function endOfYear(date, options) {
  const _date = (0, _toDate.toDate)(date, options?.in);
  const year = _date.getFullYear();
  _date.setFullYear(year + 1, 0, 0);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

// Fallback for modularized imports:
var _default = exports.default = endOfYear;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/startOfYear.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.startOfYear = startOfYear;
var _toDate = require("./toDate.js");
/**
 * The {@link startOfYear} function options.
 */

/**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */
function startOfYear(date, options) {
  const date_ = (0, _toDate.toDate)(date, options?.in);
  date_.setFullYear(date_.getFullYear(), 0, 1);
  date_.setHours(0, 0, 0, 0);
  return date_;
}

// Fallback for modularized imports:
var _default = exports.default = startOfYear;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/eachWeekendOfYear.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.eachWeekendOfYear = eachWeekendOfYear;
var _eachWeekendOfInterval = require("./eachWeekendOfInterval.js");
var _endOfYear = require("./endOfYear.js");
var _startOfYear = require("./startOfYear.js");
/**
 * The {@link eachWeekendOfYear} function options.
 */

/**
 * @name eachWeekendOfYear
 * @category Year Helpers
 * @summary List all the Saturdays and Sundays in the year.
 *
 * @description
 * Get all the Saturdays and Sundays in the year.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The given year
 * @param options - An object with options
 *
 * @returns An array containing all the Saturdays and Sundays
 *
 * @example
 * // Lists all Saturdays and Sundays in the year
 * const result = eachWeekendOfYear(new Date(2020, 1, 1))
 * //=> [
 * //   Sat Jan 03 2020 00:00:00,
 * //   Sun Jan 04 2020 00:00:00,
 * //   ...
 * //   Sun Dec 27 2020 00:00:00
 * // ]
 * ]
 */
function eachWeekendOfYear(date, options) {
  const start = (0, _startOfYear.startOfYear)(date, options);
  const end = (0, _endOfYear.endOfYear)(date, options);
  return (0, _eachWeekendOfInterval.eachWeekendOfInterval)({
    start,
    end
  }, options);
}

// Fallback for modularized imports:
var _default = exports.default = eachWeekendOfYear;
},{"./eachWeekendOfInterval.js":"node_modules/date-fns/eachWeekendOfInterval.js","./endOfYear.js":"node_modules/date-fns/endOfYear.js","./startOfYear.js":"node_modules/date-fns/startOfYear.js"}],"node_modules/date-fns/eachYearOfInterval.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.eachYearOfInterval = eachYearOfInterval;
var _normalizeInterval = require("./_lib/normalizeInterval.js");
var _constructFrom = require("./constructFrom.js");
/**
 * The {@link eachYearOfInterval} function options.
 */

/**
 * The {@link eachYearOfInterval} function result type. It resolves the proper data type.
 * It uses the first argument date object type, starting from the date argument,
 * then the start interval date, and finally the end interval date. If
 * a context function is passed, it uses the context function return type.
 */

/**
 * @name eachYearOfInterval
 * @category Interval Helpers
 * @summary Return the array of yearly timestamps within the specified time interval.
 *
 * @description
 * Return the array of yearly timestamps within the specified time interval.
 *
 * @typeParam IntervalType - Interval type.
 * @typeParam Options - Options type.
 *
 * @param interval - The interval.
 * @param options - An object with options.
 *
 * @returns The array with starts of yearly timestamps from the month of the interval start to the month of the interval end
 *
 * @example
 * // Each year between 6 February 2014 and 10 August 2017:
 * const result = eachYearOfInterval({
 *   start: new Date(2014, 1, 6),
 *   end: new Date(2017, 7, 10)
 * })
 * //=> [
 * //   Wed Jan 01 2014 00:00:00,
 * //   Thu Jan 01 2015 00:00:00,
 * //   Fri Jan 01 2016 00:00:00,
 * //   Sun Jan 01 2017 00:00:00
 * // ]
 */
function eachYearOfInterval(interval, options) {
  const {
    start,
    end
  } = (0, _normalizeInterval.normalizeInterval)(options?.in, interval);
  let reversed = +start > +end;
  const endTime = reversed ? +start : +end;
  const date = reversed ? end : start;
  date.setHours(0, 0, 0, 0);
  date.setMonth(0, 1);
  let step = options?.step ?? 1;
  if (!step) return [];
  if (step < 0) {
    step = -step;
    reversed = !reversed;
  }
  const dates = [];
  while (+date <= endTime) {
    dates.push((0, _constructFrom.constructFrom)(start, date));
    date.setFullYear(date.getFullYear() + step);
  }
  return reversed ? dates.reverse() : dates;
}

// Fallback for modularized imports:
var _default = exports.default = eachYearOfInterval;
},{"./_lib/normalizeInterval.js":"node_modules/date-fns/_lib/normalizeInterval.js","./constructFrom.js":"node_modules/date-fns/constructFrom.js"}],"node_modules/date-fns/endOfDecade.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.endOfDecade = endOfDecade;
var _toDate = require("./toDate.js");
/**
 * The {@link endOfDecade} function options.
 */

/**
 * @name endOfDecade
 * @category Decade Helpers
 * @summary Return the end of a decade for the given date.
 *
 * @description
 * Return the end of a decade for the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a decade
 *
 * @example
 * // The end of a decade for 12 May 1984 00:00:00:
 * const result = endOfDecade(new Date(1984, 4, 12, 00, 00, 00))
 * //=> Dec 31 1989 23:59:59.999
 */
function endOfDecade(date, options) {
  // TODO: Switch to more technical definition in of decades that start with 1
  // end with 0. I.e. 2001-2010 instead of current 2000-2009. It's a breaking
  // change, so it can only be done in 4.0.
  const _date = (0, _toDate.toDate)(date, options?.in);
  const year = _date.getFullYear();
  const decade = 9 + Math.floor(year / 10) * 10;
  _date.setFullYear(decade, 11, 31);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

// Fallback for modularized imports:
var _default = exports.default = endOfDecade;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/endOfHour.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.endOfHour = endOfHour;
var _toDate = require("./toDate.js");
/**
 * The {@link endOfHour} function options.
 */

/**
 * @name endOfHour
 * @category Hour Helpers
 * @summary Return the end of an hour for the given date.
 *
 * @description
 * Return the end of an hour for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of an hour
 *
 * @example
 * // The end of an hour for 2 September 2014 11:55:00:
 * const result = endOfHour(new Date(2014, 8, 2, 11, 55))
 * //=> Tue Sep 02 2014 11:59:59.999
 */
function endOfHour(date, options) {
  const _date = (0, _toDate.toDate)(date, options?.in);
  _date.setMinutes(59, 59, 999);
  return _date;
}

// Fallback for modularized imports:
var _default = exports.default = endOfHour;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/endOfWeek.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.endOfWeek = endOfWeek;
var _defaultOptions = require("./_lib/defaultOptions.js");
var _toDate = require("./toDate.js");
/**
 * The {@link endOfWeek} function options.
 */

/**
 * @name endOfWeek
 * @category Week Helpers
 * @summary Return the end of a week for the given date.
 *
 * @description
 * Return the end of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a week
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 23:59:59.999
 */
function endOfWeek(date, options) {
  const defaultOptions = (0, _defaultOptions.getDefaultOptions)();
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
  const _date = (0, _toDate.toDate)(date, options?.in);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
  _date.setDate(_date.getDate() + diff);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

// Fallback for modularized imports:
var _default = exports.default = endOfWeek;
},{"./_lib/defaultOptions.js":"node_modules/date-fns/_lib/defaultOptions.js","./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/endOfISOWeek.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.endOfISOWeek = endOfISOWeek;
var _endOfWeek = require("./endOfWeek.js");
/**
 * The {@link endOfISOWeek} function options.
 */

/**
 * @name endOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the end of an ISO week for the given date.
 *
 * @description
 * Return the end of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of an ISO week
 *
 * @example
 * // The end of an ISO week for 2 September 2014 11:55:00:
 * const result = endOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Sep 07 2014 23:59:59.999
 */
function endOfISOWeek(date, options) {
  return (0, _endOfWeek.endOfWeek)(date, {
    ...options,
    weekStartsOn: 1
  });
}

// Fallback for modularized imports:
var _default = exports.default = endOfISOWeek;
},{"./endOfWeek.js":"node_modules/date-fns/endOfWeek.js"}],"node_modules/date-fns/endOfISOWeekYear.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.endOfISOWeekYear = endOfISOWeekYear;
var _constructFrom = require("./constructFrom.js");
var _getISOWeekYear = require("./getISOWeekYear.js");
var _startOfISOWeek = require("./startOfISOWeek.js");
/**
 * The {@link endOfISOWeekYear} function options.
 */

/**
 * @name endOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the end of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the end of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ContextDate - The `Date` type of the context function.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The end of an ISO week-numbering year
 *
 * @example
 * // The end of an ISO week-numbering year for 2 July 2005:
 * const result = endOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Sun Jan 01 2006 23:59:59.999
 */
function endOfISOWeekYear(date, options) {
  const year = (0, _getISOWeekYear.getISOWeekYear)(date, options);
  const fourthOfJanuaryOfNextYear = (0, _constructFrom.constructFrom)(options?.in || date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const _date = (0, _startOfISOWeek.startOfISOWeek)(fourthOfJanuaryOfNextYear, options);
  _date.setMilliseconds(_date.getMilliseconds() - 1);
  return _date;
}

// Fallback for modularized imports:
var _default = exports.default = endOfISOWeekYear;
},{"./constructFrom.js":"node_modules/date-fns/constructFrom.js","./getISOWeekYear.js":"node_modules/date-fns/getISOWeekYear.js","./startOfISOWeek.js":"node_modules/date-fns/startOfISOWeek.js"}],"node_modules/date-fns/endOfMinute.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.endOfMinute = endOfMinute;
var _toDate = require("./toDate.js");
/**
 * The {@link endOfMinute} function options.
 */

/**
 * @name endOfMinute
 * @category Minute Helpers
 * @summary Return the end of a minute for the given date.
 *
 * @description
 * Return the end of a minute for the given date.
 * The result will be in the local timezone or the provided context.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a minute
 *
 * @example
 * // The end of a minute for 1 December 2014 22:15:45.400:
 * const result = endOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:59.999
 */
function endOfMinute(date, options) {
  const _date = (0, _toDate.toDate)(date, options?.in);
  _date.setSeconds(59, 999);
  return _date;
}

// Fallback for modularized imports:
var _default = exports.default = endOfMinute;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/endOfQuarter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.endOfQuarter = endOfQuarter;
var _toDate = require("./toDate.js");
/**
 * The {@link endOfQuarter} function options.
 */

/**
 * @name endOfQuarter
 * @category Quarter Helpers
 * @summary Return the end of a year quarter for the given date.
 *
 * @description
 * Return the end of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a quarter
 *
 * @example
 * // The end of a quarter for 2 September 2014 11:55:00:
 * const result = endOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */
function endOfQuarter(date, options) {
  const _date = (0, _toDate.toDate)(date, options?.in);
  const currentMonth = _date.getMonth();
  const month = currentMonth - currentMonth % 3 + 3;
  _date.setMonth(month, 0);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

// Fallback for modularized imports:
var _default = exports.default = endOfQuarter;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/endOfSecond.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.endOfSecond = endOfSecond;
var _toDate = require("./toDate.js");
/**
 * The {@link endOfSecond} function options.
 */

/**
 * @name endOfSecond
 * @category Second Helpers
 * @summary Return the end of a second for the given date.
 *
 * @description
 * Return the end of a second for the given date.
 * The result will be in the local timezone if no `in` option is specified.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a second
 *
 * @example
 * // The end of a second for 1 December 2014 22:15:45.400:
 * const result = endOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:45.999
 */
function endOfSecond(date, options) {
  const _date = (0, _toDate.toDate)(date, options?.in);
  _date.setMilliseconds(999);
  return _date;
}

// Fallback for modularized imports:
var _default = exports.default = endOfSecond;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/endOfToday.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.endOfToday = endOfToday;
var _endOfDay = require("./endOfDay.js");
/**
 * The {@link endOfToday} function options.
 */

/**
 * @name endOfToday
 * @category Day Helpers
 * @summary Return the end of today.
 * @pure false
 *
 * @description
 * Return the end of today.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param options - The options
 *
 * @returns The end of today
 *
 * @example
 * // If today is 6 October 2014:
 * const result = endOfToday()
 * //=> Mon Oct 6 2014 23:59:59.999
 */
function endOfToday(options) {
  return (0, _endOfDay.endOfDay)(Date.now(), options);
}

// Fallback for modularized imports:
var _default = exports.default = endOfToday;
},{"./endOfDay.js":"node_modules/date-fns/endOfDay.js"}],"node_modules/date-fns/endOfTomorrow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.endOfTomorrow = endOfTomorrow;
var _constructNow = require("./constructNow.js");
/**
 * The {@link endOfTomorrow} function options.
 */

/**
 * @name endOfTomorrow
 * @category Day Helpers
 * @summary Return the end of tomorrow.
 * @pure false
 *
 * @description
 * Return the end of tomorrow.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param options - The options
 * @returns The end of tomorrow
 *
 * @example
 * // If today is 6 October 2014:
 * const result = endOfTomorrow()
 * //=> Tue Oct 7 2014 23:59:59.999
 */
function endOfTomorrow(options) {
  const now = (0, _constructNow.constructNow)(options?.in);
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();
  const date = (0, _constructNow.constructNow)(options?.in);
  date.setFullYear(year, month, day + 1);
  date.setHours(23, 59, 59, 999);
  return options?.in ? options.in(date) : date;
}

// Fallback for modularized imports:
var _default = exports.default = endOfTomorrow;
},{"./constructNow.js":"node_modules/date-fns/constructNow.js"}],"node_modules/date-fns/endOfYesterday.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.endOfYesterday = endOfYesterday;
var _constructFrom = require("./constructFrom.js");
var _constructNow = require("./constructNow.js");
/**
 * The {@link endOfYesterday} function options.
 */

/**
 * @name endOfYesterday
 * @category Day Helpers
 * @summary Return the end of yesterday.
 * @pure false
 *
 * @description
 * Return the end of yesterday.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @returns The end of yesterday
 *
 * @example
 * // If today is 6 October 2014:
 * const result = endOfYesterday()
 * //=> Sun Oct 5 2014 23:59:59.999
 */
function endOfYesterday(options) {
  const now = (0, _constructNow.constructNow)(options?.in);
  const date = (0, _constructFrom.constructFrom)(options?.in, 0);
  date.setFullYear(now.getFullYear(), now.getMonth(), now.getDate() - 1);
  date.setHours(23, 59, 59, 999);
  return date;
}

// Fallback for modularized imports:
var _default = exports.default = endOfYesterday;
},{"./constructFrom.js":"node_modules/date-fns/constructFrom.js","./constructNow.js":"node_modules/date-fns/constructNow.js"}],"node_modules/date-fns/locale/en-US/_lib/formatDistance.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatDistance = void 0;
const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
};
const formatDistance = (token, count, options) => {
  let result;
  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }
  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }
  return result;
};
exports.formatDistance = formatDistance;
},{}],"node_modules/date-fns/locale/_lib/buildFormatLongFn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildFormatLongFn = buildFormatLongFn;
function buildFormatLongFn(args) {
  return (options = {}) => {
    // TODO: Remove String()
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}
},{}],"node_modules/date-fns/locale/en-US/_lib/formatLong.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatLong = void 0;
var _buildFormatLongFn = require("../../_lib/buildFormatLongFn.js");
const dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
};
const timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
};
const dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
const formatLong = exports.formatLong = {
  date: (0, _buildFormatLongFn.buildFormatLongFn)({
    formats: dateFormats,
    defaultWidth: "full"
  }),
  time: (0, _buildFormatLongFn.buildFormatLongFn)({
    formats: timeFormats,
    defaultWidth: "full"
  }),
  dateTime: (0, _buildFormatLongFn.buildFormatLongFn)({
    formats: dateTimeFormats,
    defaultWidth: "full"
  })
};
},{"../../_lib/buildFormatLongFn.js":"node_modules/date-fns/locale/_lib/buildFormatLongFn.js"}],"node_modules/date-fns/locale/en-US/_lib/formatRelative.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatRelative = void 0;
const formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
};
const formatRelative = (token, _date, _baseDate, _options) => formatRelativeLocale[token];
exports.formatRelative = formatRelative;
},{}],"node_modules/date-fns/locale/_lib/buildLocalizeFn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildLocalizeFn = buildLocalizeFn;
/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 */

/**
 * The map of localized values for each width.
 */

/**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 */

/**
 * Converts the unit value to the tuple of values.
 */

/**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 */

/**
 * The tuple of localized quarter values. The first element represents Q1.
 */

/**
 * The tuple of localized day values. The first element represents Sunday.
 */

/**
 * The tuple of localized month values. The first element represents January.
 */

function buildLocalizeFn(args) {
  return (value, options) => {
    const context = options?.context ? String(options.context) : "standalone";
    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = options?.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = options?.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;

    // @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}
},{}],"node_modules/date-fns/locale/en-US/_lib/localize.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.localize = void 0;
var _buildLocalizeFn = require("../../_lib/buildLocalizeFn.js");
const eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
};
const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
};
const dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
};
const dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
};
const formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
};
const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};
const localize = exports.localize = {
  ordinalNumber,
  era: (0, _buildLocalizeFn.buildLocalizeFn)({
    values: eraValues,
    defaultWidth: "wide"
  }),
  quarter: (0, _buildLocalizeFn.buildLocalizeFn)({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: quarter => quarter - 1
  }),
  month: (0, _buildLocalizeFn.buildLocalizeFn)({
    values: monthValues,
    defaultWidth: "wide"
  }),
  day: (0, _buildLocalizeFn.buildLocalizeFn)({
    values: dayValues,
    defaultWidth: "wide"
  }),
  dayPeriod: (0, _buildLocalizeFn.buildLocalizeFn)({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide"
  })
};
},{"../../_lib/buildLocalizeFn.js":"node_modules/date-fns/locale/_lib/buildLocalizeFn.js"}],"node_modules/date-fns/locale/_lib/buildMatchFn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildMatchFn = buildMatchFn;
function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;
    const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];
    const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    const key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, pattern => pattern.test(matchedString)) :
    // [TODO] -- I challenge you to fix the type
    findKey(parsePatterns, pattern => pattern.test(matchedString));
    let value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ?
    // [TODO] -- I challenge you to fix the type
    options.valueCallback(value) : value;
    const rest = string.slice(matchedString.length);
    return {
      value,
      rest
    };
  };
}
function findKey(object, predicate) {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) {
      return key;
    }
  }
  return undefined;
}
function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}
},{}],"node_modules/date-fns/locale/_lib/buildMatchPatternFn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildMatchPatternFn = buildMatchPatternFn;
function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];
    const parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];

    // [TODO] I challenge you to fix the type
    value = options.valueCallback ? options.valueCallback(value) : value;
    const rest = string.slice(matchedString.length);
    return {
      value,
      rest
    };
  };
}
},{}],"node_modules/date-fns/locale/en-US/_lib/match.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.match = void 0;
var _buildMatchFn = require("../../_lib/buildMatchFn.js");
var _buildMatchPatternFn = require("../../_lib/buildMatchPatternFn.js");
const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;
const matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
const parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
const matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
const parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
const matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
const parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
const matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
const match = exports.match = {
  ordinalNumber: (0, _buildMatchPatternFn.buildMatchPatternFn)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: value => parseInt(value, 10)
  }),
  era: (0, _buildMatchFn.buildMatchFn)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any"
  }),
  quarter: (0, _buildMatchFn.buildMatchFn)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: index => index + 1
  }),
  month: (0, _buildMatchFn.buildMatchFn)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any"
  }),
  day: (0, _buildMatchFn.buildMatchFn)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any"
  }),
  dayPeriod: (0, _buildMatchFn.buildMatchFn)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};
},{"../../_lib/buildMatchFn.js":"node_modules/date-fns/locale/_lib/buildMatchFn.js","../../_lib/buildMatchPatternFn.js":"node_modules/date-fns/locale/_lib/buildMatchPatternFn.js"}],"node_modules/date-fns/locale/en-US.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enUS = exports.default = void 0;
var _formatDistance = require("./en-US/_lib/formatDistance.js");
var _formatLong = require("./en-US/_lib/formatLong.js");
var _formatRelative = require("./en-US/_lib/formatRelative.js");
var _localize = require("./en-US/_lib/localize.js");
var _match = require("./en-US/_lib/match.js");
/**
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)
 * @author Lesha Koss [@leshakoss](https://github.com/leshakoss)
 */
const enUS = exports.enUS = {
  code: "en-US",
  formatDistance: _formatDistance.formatDistance,
  formatLong: _formatLong.formatLong,
  formatRelative: _formatRelative.formatRelative,
  localize: _localize.localize,
  match: _match.match,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1
  }
};

// Fallback for modularized imports:
var _default = exports.default = enUS;
},{"./en-US/_lib/formatDistance.js":"node_modules/date-fns/locale/en-US/_lib/formatDistance.js","./en-US/_lib/formatLong.js":"node_modules/date-fns/locale/en-US/_lib/formatLong.js","./en-US/_lib/formatRelative.js":"node_modules/date-fns/locale/en-US/_lib/formatRelative.js","./en-US/_lib/localize.js":"node_modules/date-fns/locale/en-US/_lib/localize.js","./en-US/_lib/match.js":"node_modules/date-fns/locale/en-US/_lib/match.js"}],"node_modules/date-fns/_lib/defaultLocale.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "defaultLocale", {
  enumerable: true,
  get: function () {
    return _enUS.enUS;
  }
});
var _enUS = require("../locale/en-US.js");
},{"../locale/en-US.js":"node_modules/date-fns/locale/en-US.js"}],"node_modules/date-fns/getDayOfYear.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getDayOfYear = getDayOfYear;
var _differenceInCalendarDays = require("./differenceInCalendarDays.js");
var _startOfYear = require("./startOfYear.js");
var _toDate = require("./toDate.js");
/**
 * The {@link getDayOfYear} function options.
 */

/**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @param date - The given date
 * @param options - The options
 *
 * @returns The day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * const result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
function getDayOfYear(date, options) {
  const _date = (0, _toDate.toDate)(date, options?.in);
  const diff = (0, _differenceInCalendarDays.differenceInCalendarDays)(_date, (0, _startOfYear.startOfYear)(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
}

// Fallback for modularized imports:
var _default = exports.default = getDayOfYear;
},{"./differenceInCalendarDays.js":"node_modules/date-fns/differenceInCalendarDays.js","./startOfYear.js":"node_modules/date-fns/startOfYear.js","./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/getISOWeek.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getISOWeek = getISOWeek;
var _constants = require("./constants.js");
var _startOfISOWeek = require("./startOfISOWeek.js");
var _startOfISOWeekYear = require("./startOfISOWeekYear.js");
var _toDate = require("./toDate.js");
/**
 * The {@link getISOWeek} function options.
 */

/**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - The given date
 * @param options - The options
 *
 * @returns The ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
function getISOWeek(date, options) {
  const _date = (0, _toDate.toDate)(date, options?.in);
  const diff = +(0, _startOfISOWeek.startOfISOWeek)(_date) - +(0, _startOfISOWeekYear.startOfISOWeekYear)(_date);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(diff / _constants.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
var _default = exports.default = getISOWeek;
},{"./constants.js":"node_modules/date-fns/constants.js","./startOfISOWeek.js":"node_modules/date-fns/startOfISOWeek.js","./startOfISOWeekYear.js":"node_modules/date-fns/startOfISOWeekYear.js","./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/getWeekYear.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getWeekYear = getWeekYear;
var _defaultOptions = require("./_lib/defaultOptions.js");
var _constructFrom = require("./constructFrom.js");
var _startOfWeek = require("./startOfWeek.js");
var _toDate = require("./toDate.js");
/**
 * The {@link getWeekYear} function options.
 */

/**
 * @name getWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Get the local week-numbering year of the given date.
 *
 * @description
 * Get the local week-numbering year of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The local week-numbering year
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * const result = getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
 * //=> 2004
 */
function getWeekYear(date, options) {
  const _date = (0, _toDate.toDate)(date, options?.in);
  const year = _date.getFullYear();
  const defaultOptions = (0, _defaultOptions.getDefaultOptions)();
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
  const firstWeekOfNextYear = (0, _constructFrom.constructFrom)(options?.in || date, 0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0, _startOfWeek.startOfWeek)(firstWeekOfNextYear, options);
  const firstWeekOfThisYear = (0, _constructFrom.constructFrom)(options?.in || date, 0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0, _startOfWeek.startOfWeek)(firstWeekOfThisYear, options);
  if (+_date >= +startOfNextYear) {
    return year + 1;
  } else if (+_date >= +startOfThisYear) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
var _default = exports.default = getWeekYear;
},{"./_lib/defaultOptions.js":"node_modules/date-fns/_lib/defaultOptions.js","./constructFrom.js":"node_modules/date-fns/constructFrom.js","./startOfWeek.js":"node_modules/date-fns/startOfWeek.js","./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/startOfWeekYear.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.startOfWeekYear = startOfWeekYear;
var _defaultOptions = require("./_lib/defaultOptions.js");
var _constructFrom = require("./constructFrom.js");
var _getWeekYear = require("./getWeekYear.js");
var _startOfWeek = require("./startOfWeek.js");
/**
 * The {@link startOfWeekYear} function options.
 */

/**
 * @name startOfWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Return the start of a local week-numbering year for the given date.
 *
 * @description
 * Return the start of a local week-numbering year.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week-numbering year
 *
 * @example
 * // The start of an a week-numbering year for 2 July 2005 with default settings:
 * const result = startOfWeekYear(new Date(2005, 6, 2))
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // The start of a week-numbering year for 2 July 2005
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * const result = startOfWeekYear(new Date(2005, 6, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfWeekYear(date, options) {
  const defaultOptions = (0, _defaultOptions.getDefaultOptions)();
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
  const year = (0, _getWeekYear.getWeekYear)(date, options);
  const firstWeek = (0, _constructFrom.constructFrom)(options?.in || date, 0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = (0, _startOfWeek.startOfWeek)(firstWeek, options);
  return _date;
}

// Fallback for modularized imports:
var _default = exports.default = startOfWeekYear;
},{"./_lib/defaultOptions.js":"node_modules/date-fns/_lib/defaultOptions.js","./constructFrom.js":"node_modules/date-fns/constructFrom.js","./getWeekYear.js":"node_modules/date-fns/getWeekYear.js","./startOfWeek.js":"node_modules/date-fns/startOfWeek.js"}],"node_modules/date-fns/getWeek.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getWeek = getWeek;
var _constants = require("./constants.js");
var _startOfWeek = require("./startOfWeek.js");
var _startOfWeekYear = require("./startOfWeekYear.js");
var _toDate = require("./toDate.js");
/**
 * The {@link getWeek} function options.
 */

/**
 * @name getWeek
 * @category Week Helpers
 * @summary Get the local week index of the given date.
 *
 * @description
 * Get the local week index of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The week
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005 with default options?
 * const result = getWeek(new Date(2005, 0, 2))
 * //=> 2
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January?
 * const result = getWeek(new Date(2005, 0, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> 53
 */
function getWeek(date, options) {
  const _date = (0, _toDate.toDate)(date, options?.in);
  const diff = +(0, _startOfWeek.startOfWeek)(_date, options) - +(0, _startOfWeekYear.startOfWeekYear)(_date, options);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(diff / _constants.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
var _default = exports.default = getWeek;
},{"./constants.js":"node_modules/date-fns/constants.js","./startOfWeek.js":"node_modules/date-fns/startOfWeek.js","./startOfWeekYear.js":"node_modules/date-fns/startOfWeekYear.js","./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/_lib/addLeadingZeros.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addLeadingZeros = addLeadingZeros;
function addLeadingZeros(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  const output = Math.abs(number).toString().padStart(targetLength, "0");
  return sign + output;
}
},{}],"node_modules/date-fns/_lib/format/lightFormatters.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lightFormatters = void 0;
var _addLeadingZeros = require("../addLeadingZeros.js");
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

const lightFormatters = exports.lightFormatters = {
  // Year
  y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    const signedYear = date.getFullYear();
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0, _addLeadingZeros.addLeadingZeros)(token === "yy" ? year % 100 : year, token.length);
  },
  // Month
  M(date, token) {
    const month = date.getMonth();
    return token === "M" ? String(month + 1) : (0, _addLeadingZeros.addLeadingZeros)(month + 1, 2);
  },
  // Day of the month
  d(date, token) {
    return (0, _addLeadingZeros.addLeadingZeros)(date.getDate(), token.length);
  },
  // AM or PM
  a(date, token) {
    const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(date, token) {
    return (0, _addLeadingZeros.addLeadingZeros)(date.getHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H(date, token) {
    return (0, _addLeadingZeros.addLeadingZeros)(date.getHours(), token.length);
  },
  // Minute
  m(date, token) {
    return (0, _addLeadingZeros.addLeadingZeros)(date.getMinutes(), token.length);
  },
  // Second
  s(date, token) {
    return (0, _addLeadingZeros.addLeadingZeros)(date.getSeconds(), token.length);
  },
  // Fraction of second
  S(date, token) {
    const numberOfDigits = token.length;
    const milliseconds = date.getMilliseconds();
    const fractionalSeconds = Math.trunc(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0, _addLeadingZeros.addLeadingZeros)(fractionalSeconds, token.length);
  }
};
},{"../addLeadingZeros.js":"node_modules/date-fns/_lib/addLeadingZeros.js"}],"node_modules/date-fns/_lib/format/formatters.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatters = void 0;
var _getDayOfYear = require("../../getDayOfYear.js");
var _getISOWeek = require("../../getISOWeek.js");
var _getISOWeekYear = require("../../getISOWeekYear.js");
var _getWeek = require("../../getWeek.js");
var _getWeekYear = require("../../getWeekYear.js");
var _addLeadingZeros = require("../addLeadingZeros.js");
var _lightFormatters = require("./lightFormatters.js");
const dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

const formatters = exports.formatters = {
  // Era
  G: function (date, token, localize) {
    const era = date.getFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return localize.era(era, {
          width: "abbreviated"
        });
      // A, B
      case "GGGGG":
        return localize.era(era, {
          width: "narrow"
        });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return localize.era(era, {
          width: "wide"
        });
    }
  },
  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === "yo") {
      const signedYear = date.getFullYear();
      // Returns 1 for 1 BC (which is year 0 in JavaScript)
      const year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: "year"
      });
    }
    return _lightFormatters.lightFormatters.y(date, token);
  },
  // Local week-numbering year
  Y: function (date, token, localize, options) {
    const signedWeekYear = (0, _getWeekYear.getWeekYear)(date, options);
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

    // Two digit year
    if (token === "YY") {
      const twoDigitYear = weekYear % 100;
      return (0, _addLeadingZeros.addLeadingZeros)(twoDigitYear, 2);
    }

    // Ordinal number
    if (token === "Yo") {
      return localize.ordinalNumber(weekYear, {
        unit: "year"
      });
    }

    // Padding
    return (0, _addLeadingZeros.addLeadingZeros)(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function (date, token) {
    const isoWeekYear = (0, _getISOWeekYear.getISOWeekYear)(date);

    // Padding
    return (0, _addLeadingZeros.addLeadingZeros)(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    const year = date.getFullYear();
    return (0, _addLeadingZeros.addLeadingZeros)(year, token.length);
  },
  // Quarter
  Q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
        return String(quarter);
      // 01, 02, 03, 04
      case "QQ":
        return (0, _addLeadingZeros.addLeadingZeros)(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return localize.ordinalNumber(quarter, {
          unit: "quarter"
        });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "q":
        return String(quarter);
      // 01, 02, 03, 04
      case "qq":
        return (0, _addLeadingZeros.addLeadingZeros)(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return localize.ordinalNumber(quarter, {
          unit: "quarter"
        });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      case "M":
      case "MM":
        return _lightFormatters.lightFormatters.M(date, token);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return localize.ordinalNumber(month + 1, {
          unit: "month"
        });
      // Jan, Feb, ..., Dec
      case "MMM":
        return localize.month(month, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return localize.month(month, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return localize.month(month, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone month
  L: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return String(month + 1);
      // 01, 02, ..., 12
      case "LL":
        return (0, _addLeadingZeros.addLeadingZeros)(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return localize.ordinalNumber(month + 1, {
          unit: "month"
        });
      // Jan, Feb, ..., Dec
      case "LLL":
        return localize.month(month, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return localize.month(month, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return localize.month(month, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Local week of year
  w: function (date, token, localize, options) {
    const week = (0, _getWeek.getWeek)(date, options);
    if (token === "wo") {
      return localize.ordinalNumber(week, {
        unit: "week"
      });
    }
    return (0, _addLeadingZeros.addLeadingZeros)(week, token.length);
  },
  // ISO week of year
  I: function (date, token, localize) {
    const isoWeek = (0, _getISOWeek.getISOWeek)(date);
    if (token === "Io") {
      return localize.ordinalNumber(isoWeek, {
        unit: "week"
      });
    }
    return (0, _addLeadingZeros.addLeadingZeros)(isoWeek, token.length);
  },
  // Day of the month
  d: function (date, token, localize) {
    if (token === "do") {
      return localize.ordinalNumber(date.getDate(), {
        unit: "date"
      });
    }
    return _lightFormatters.lightFormatters.d(date, token);
  },
  // Day of year
  D: function (date, token, localize) {
    const dayOfYear = (0, _getDayOfYear.getDayOfYear)(date);
    if (token === "Do") {
      return localize.ordinalNumber(dayOfYear, {
        unit: "dayOfYear"
      });
    }
    return (0, _addLeadingZeros.addLeadingZeros)(dayOfYear, token.length);
  },
  // Day of week
  E: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(localDayOfWeek);
      // Padded numerical value
      case "ee":
        return (0, _addLeadingZeros.addLeadingZeros)(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return localize.ordinalNumber(localDayOfWeek, {
          unit: "day"
        });
      case "eee":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case "c":
        return String(localDayOfWeek);
      // Padded numerical value
      case "cc":
        return (0, _addLeadingZeros.addLeadingZeros)(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return localize.ordinalNumber(localDayOfWeek, {
          unit: "day"
        });
      case "ccc":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case "i":
        return String(isoDayOfWeek);
      // 02
      case "ii":
        return (0, _addLeadingZeros.addLeadingZeros)(isoDayOfWeek, token.length);
      // 2nd
      case "io":
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: "day"
        });
      // Tue
      case "iii":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function (date, token, localize) {
    const hours = date.getHours();
    const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }
    switch (token) {
      case "b":
      case "bb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === "ho") {
      let hours = date.getHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return _lightFormatters.lightFormatters.h(date, token);
  },
  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === "Ho") {
      return localize.ordinalNumber(date.getHours(), {
        unit: "hour"
      });
    }
    return _lightFormatters.lightFormatters.H(date, token);
  },
  // Hour [0-11]
  K: function (date, token, localize) {
    const hours = date.getHours() % 12;
    if (token === "Ko") {
      return localize.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return (0, _addLeadingZeros.addLeadingZeros)(hours, token.length);
  },
  // Hour [1-24]
  k: function (date, token, localize) {
    let hours = date.getHours();
    if (hours === 0) hours = 24;
    if (token === "ko") {
      return localize.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return (0, _addLeadingZeros.addLeadingZeros)(hours, token.length);
  },
  // Minute
  m: function (date, token, localize) {
    if (token === "mo") {
      return localize.ordinalNumber(date.getMinutes(), {
        unit: "minute"
      });
    }
    return _lightFormatters.lightFormatters.m(date, token);
  },
  // Second
  s: function (date, token, localize) {
    if (token === "so") {
      return localize.ordinalNumber(date.getSeconds(), {
        unit: "second"
      });
    }
    return _lightFormatters.lightFormatters.s(date, token);
  },
  // Fraction of second
  S: function (date, token) {
    return _lightFormatters.lightFormatters.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return "Z";
    }
    switch (token) {
      // Hours and optional minutes
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      // Hours and optional minutes
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (GMT)
  O: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (specific non-location)
  z: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Seconds timestamp
  t: function (date, token, _localize) {
    const timestamp = Math.trunc(+date / 1000);
    return (0, _addLeadingZeros.addLeadingZeros)(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function (date, token, _localize) {
    return (0, _addLeadingZeros.addLeadingZeros)(+date, token.length);
  }
};
function formatTimezoneShort(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = Math.trunc(absOffset / 60);
  const minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  return sign + String(hours) + delimiter + (0, _addLeadingZeros.addLeadingZeros)(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, delimiter) {
  if (offset % 60 === 0) {
    const sign = offset > 0 ? "-" : "+";
    return sign + (0, _addLeadingZeros.addLeadingZeros)(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, delimiter);
}
function formatTimezone(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = (0, _addLeadingZeros.addLeadingZeros)(Math.trunc(absOffset / 60), 2);
  const minutes = (0, _addLeadingZeros.addLeadingZeros)(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}
},{"../../getDayOfYear.js":"node_modules/date-fns/getDayOfYear.js","../../getISOWeek.js":"node_modules/date-fns/getISOWeek.js","../../getISOWeekYear.js":"node_modules/date-fns/getISOWeekYear.js","../../getWeek.js":"node_modules/date-fns/getWeek.js","../../getWeekYear.js":"node_modules/date-fns/getWeekYear.js","../addLeadingZeros.js":"node_modules/date-fns/_lib/addLeadingZeros.js","./lightFormatters.js":"node_modules/date-fns/_lib/format/lightFormatters.js"}],"node_modules/date-fns/_lib/format/longFormatters.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.longFormatters = void 0;
const dateLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "P":
      return formatLong.date({
        width: "short"
      });
    case "PP":
      return formatLong.date({
        width: "medium"
      });
    case "PPP":
      return formatLong.date({
        width: "long"
      });
    case "PPPP":
    default:
      return formatLong.date({
        width: "full"
      });
  }
};
const timeLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "p":
      return formatLong.time({
        width: "short"
      });
    case "pp":
      return formatLong.time({
        width: "medium"
      });
    case "ppp":
      return formatLong.time({
        width: "long"
      });
    case "pppp":
    default:
      return formatLong.time({
        width: "full"
      });
  }
};
const dateTimeLongFormatter = (pattern, formatLong) => {
  const matchResult = pattern.match(/(P+)(p+)?/) || [];
  const datePattern = matchResult[1];
  const timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }
  let dateTimeFormat;
  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong.dateTime({
        width: "short"
      });
      break;
    case "PP":
      dateTimeFormat = formatLong.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      dateTimeFormat = formatLong.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong.dateTime({
        width: "full"
      });
      break;
  }
  return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong)).replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};
const longFormatters = exports.longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
},{}],"node_modules/date-fns/_lib/protectedTokens.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isProtectedDayOfYearToken = isProtectedDayOfYearToken;
exports.isProtectedWeekYearToken = isProtectedWeekYearToken;
exports.warnOrThrowProtectedError = warnOrThrowProtectedError;
const dayOfYearTokenRE = /^D+$/;
const weekYearTokenRE = /^Y+$/;
const throwTokens = ["D", "DD", "YY", "YYYY"];
function isProtectedDayOfYearToken(token) {
  return dayOfYearTokenRE.test(token);
}
function isProtectedWeekYearToken(token) {
  return weekYearTokenRE.test(token);
}
function warnOrThrowProtectedError(token, format, input) {
  const _message = message(token, format, input);
  console.warn(_message);
  if (throwTokens.includes(token)) throw new RangeError(_message);
}
function message(token, format, input) {
  const subject = token[0] === "Y" ? "years" : "days of the month";
  return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
},{}],"node_modules/date-fns/format.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.format = exports.formatDate = format;
Object.defineProperty(exports, "formatters", {
  enumerable: true,
  get: function () {
    return _formatters.formatters;
  }
});
Object.defineProperty(exports, "longFormatters", {
  enumerable: true,
  get: function () {
    return _longFormatters.longFormatters;
  }
});
var _defaultLocale = require("./_lib/defaultLocale.js");
var _defaultOptions = require("./_lib/defaultOptions.js");
var _formatters = require("./_lib/format/formatters.js");
var _longFormatters = require("./_lib/format/longFormatters.js");
var _protectedTokens = require("./_lib/protectedTokens.js");
var _isValid = require("./isValid.js");
var _toDate = require("./toDate.js");
// Rexports of internal for libraries to use.
// See: https://github.com/date-fns/date-fns/issues/3638#issuecomment-1877082874

// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * The {@link format} function options.
 */

/**
 * @name format
 * @alias formatDate
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear](https://date-fns.org/docs/getISOWeekYear)
 *    and [getWeekYear](https://date-fns.org/docs/getWeekYear)).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param date - The original date
 * @param format - The string of tokens
 * @param options - An object with options
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 * @throws `options.locale` must contain `localize` property
 * @throws `options.locale` must contain `formatLong` property
 * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */
function format(date, formatStr, options) {
  const defaultOptions = (0, _defaultOptions.getDefaultOptions)();
  const locale = options?.locale ?? defaultOptions.locale ?? _defaultLocale.defaultLocale;
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
  const originalDate = (0, _toDate.toDate)(date, options?.in);
  if (!(0, _isValid.isValid)(originalDate)) {
    throw new RangeError("Invalid time value");
  }
  let parts = formatStr.match(longFormattingTokensRegExp).map(substring => {
    const firstCharacter = substring[0];
    if (firstCharacter === "p" || firstCharacter === "P") {
      const longFormatter = _longFormatters.longFormatters[firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join("").match(formattingTokensRegExp).map(substring => {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return {
        isToken: false,
        value: "'"
      };
    }
    const firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return {
        isToken: false,
        value: cleanEscapedString(substring)
      };
    }
    if (_formatters.formatters[firstCharacter]) {
      return {
        isToken: true,
        value: substring
      };
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
    }
    return {
      isToken: false,
      value: substring
    };
  });

  // invoke localize preprocessor (only for french locales at the moment)
  if (locale.localize.preprocessor) {
    parts = locale.localize.preprocessor(originalDate, parts);
  }
  const formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale
  };
  return parts.map(part => {
    if (!part.isToken) return part.value;
    const token = part.value;
    if (!options?.useAdditionalWeekYearTokens && (0, _protectedTokens.isProtectedWeekYearToken)(token) || !options?.useAdditionalDayOfYearTokens && (0, _protectedTokens.isProtectedDayOfYearToken)(token)) {
      (0, _protectedTokens.warnOrThrowProtectedError)(token, formatStr, String(date));
    }
    const formatter = _formatters.formatters[token[0]];
    return formatter(originalDate, token, locale.localize, formatterOptions);
  }).join("");
}
function cleanEscapedString(input) {
  const matched = input.match(escapedStringRegExp);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp, "'");
}

// Fallback for modularized imports:
var _default = exports.default = format;
},{"./_lib/defaultLocale.js":"node_modules/date-fns/_lib/defaultLocale.js","./_lib/defaultOptions.js":"node_modules/date-fns/_lib/defaultOptions.js","./_lib/format/formatters.js":"node_modules/date-fns/_lib/format/formatters.js","./_lib/format/longFormatters.js":"node_modules/date-fns/_lib/format/longFormatters.js","./_lib/protectedTokens.js":"node_modules/date-fns/_lib/protectedTokens.js","./isValid.js":"node_modules/date-fns/isValid.js","./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/formatDistance.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.formatDistance = formatDistance;
var _defaultLocale = require("./_lib/defaultLocale.js");
var _defaultOptions = require("./_lib/defaultOptions.js");
var _getTimezoneOffsetInMilliseconds = require("./_lib/getTimezoneOffsetInMilliseconds.js");
var _normalizeDates = require("./_lib/normalizeDates.js");
var _compareAsc = require("./compareAsc.js");
var _constants = require("./constants.js");
var _differenceInMonths = require("./differenceInMonths.js");
var _differenceInSeconds = require("./differenceInSeconds.js");
/**
 * The {@link formatDistance} function options.
 */

/**
 * @name formatDistance
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words.
 *
 * | Distance between dates                                            | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance between dates | Result               |
 * |------------------------|----------------------|
 * | 0 secs ... 5 secs      | less than 5 seconds  |
 * | 5 secs ... 10 secs     | less than 10 seconds |
 * | 10 secs ... 20 secs    | less than 20 seconds |
 * | 20 secs ... 40 secs    | half a minute        |
 * | 40 secs ... 60 secs    | less than a minute   |
 * | 60 secs ... 90 secs    | 1 minute             |
 *
 * @param laterDate - The date
 * @param earlierDate - The date to compare with
 * @param options - An object with options
 *
 * @returns The distance in words
 *
 * @throws `date` must not be Invalid Date
 * @throws `baseDate` must not be Invalid Date
 * @throws `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * const result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00, including seconds?
 * const result = formatDistance(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 *   { includeSeconds: true }
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * const result = formatDistance(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> 'about 1 year ago'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> 'pli ol 1 jaro'
 */
function formatDistance(laterDate, earlierDate, options) {
  const defaultOptions = (0, _defaultOptions.getDefaultOptions)();
  const locale = options?.locale ?? defaultOptions.locale ?? _defaultLocale.defaultLocale;
  const minutesInAlmostTwoDays = 2520;
  const comparison = (0, _compareAsc.compareAsc)(laterDate, earlierDate);
  if (isNaN(comparison)) throw new RangeError("Invalid time value");
  const localizeOptions = Object.assign({}, options, {
    addSuffix: options?.addSuffix,
    comparison: comparison
  });
  const [laterDate_, earlierDate_] = (0, _normalizeDates.normalizeDates)(options?.in, ...(comparison > 0 ? [earlierDate, laterDate] : [laterDate, earlierDate]));
  const seconds = (0, _differenceInSeconds.differenceInSeconds)(earlierDate_, laterDate_);
  const offsetInSeconds = ((0, _getTimezoneOffsetInMilliseconds.getTimezoneOffsetInMilliseconds)(earlierDate_) - (0, _getTimezoneOffsetInMilliseconds.getTimezoneOffsetInMilliseconds)(laterDate_)) / 1000;
  const minutes = Math.round((seconds - offsetInSeconds) / 60);
  let months;

  // 0 up to 2 mins
  if (minutes < 2) {
    if (options?.includeSeconds) {
      if (seconds < 5) {
        return locale.formatDistance("lessThanXSeconds", 5, localizeOptions);
      } else if (seconds < 10) {
        return locale.formatDistance("lessThanXSeconds", 10, localizeOptions);
      } else if (seconds < 20) {
        return locale.formatDistance("lessThanXSeconds", 20, localizeOptions);
      } else if (seconds < 40) {
        return locale.formatDistance("halfAMinute", 0, localizeOptions);
      } else if (seconds < 60) {
        return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
      } else {
        return locale.formatDistance("xMinutes", 1, localizeOptions);
      }
    } else {
      if (minutes === 0) {
        return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
      } else {
        return locale.formatDistance("xMinutes", minutes, localizeOptions);
      }
    }

    // 2 mins up to 0.75 hrs
  } else if (minutes < 45) {
    return locale.formatDistance("xMinutes", minutes, localizeOptions);

    // 0.75 hrs up to 1.5 hrs
  } else if (minutes < 90) {
    return locale.formatDistance("aboutXHours", 1, localizeOptions);

    // 1.5 hrs up to 24 hrs
  } else if (minutes < _constants.minutesInDay) {
    const hours = Math.round(minutes / 60);
    return locale.formatDistance("aboutXHours", hours, localizeOptions);

    // 1 day up to 1.75 days
  } else if (minutes < minutesInAlmostTwoDays) {
    return locale.formatDistance("xDays", 1, localizeOptions);

    // 1.75 days up to 30 days
  } else if (minutes < _constants.minutesInMonth) {
    const days = Math.round(minutes / _constants.minutesInDay);
    return locale.formatDistance("xDays", days, localizeOptions);

    // 1 month up to 2 months
  } else if (minutes < _constants.minutesInMonth * 2) {
    months = Math.round(minutes / _constants.minutesInMonth);
    return locale.formatDistance("aboutXMonths", months, localizeOptions);
  }
  months = (0, _differenceInMonths.differenceInMonths)(earlierDate_, laterDate_);

  // 2 months up to 12 months
  if (months < 12) {
    const nearestMonth = Math.round(minutes / _constants.minutesInMonth);
    return locale.formatDistance("xMonths", nearestMonth, localizeOptions);

    // 1 year up to max Date
  } else {
    const monthsSinceStartOfYear = months % 12;
    const years = Math.trunc(months / 12);

    // N years up to 1 years 3 months
    if (monthsSinceStartOfYear < 3) {
      return locale.formatDistance("aboutXYears", years, localizeOptions);

      // N years 3 months up to N years 9 months
    } else if (monthsSinceStartOfYear < 9) {
      return locale.formatDistance("overXYears", years, localizeOptions);

      // N years 9 months up to N year 12 months
    } else {
      return locale.formatDistance("almostXYears", years + 1, localizeOptions);
    }
  }
}

// Fallback for modularized imports:
var _default = exports.default = formatDistance;
},{"./_lib/defaultLocale.js":"node_modules/date-fns/_lib/defaultLocale.js","./_lib/defaultOptions.js":"node_modules/date-fns/_lib/defaultOptions.js","./_lib/getTimezoneOffsetInMilliseconds.js":"node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js","./_lib/normalizeDates.js":"node_modules/date-fns/_lib/normalizeDates.js","./compareAsc.js":"node_modules/date-fns/compareAsc.js","./constants.js":"node_modules/date-fns/constants.js","./differenceInMonths.js":"node_modules/date-fns/differenceInMonths.js","./differenceInSeconds.js":"node_modules/date-fns/differenceInSeconds.js"}],"node_modules/date-fns/formatDistanceStrict.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.formatDistanceStrict = formatDistanceStrict;
var _defaultLocale = require("./_lib/defaultLocale.js");
var _defaultOptions = require("./_lib/defaultOptions.js");
var _getRoundingMethod = require("./_lib/getRoundingMethod.js");
var _getTimezoneOffsetInMilliseconds = require("./_lib/getTimezoneOffsetInMilliseconds.js");
var _normalizeDates = require("./_lib/normalizeDates.js");
var _compareAsc = require("./compareAsc.js");
var _constants = require("./constants.js");
/**
 * The {@link formatDistanceStrict} function options.
 */

/**
 * The unit used to format the distance in {@link formatDistanceStrict}.
 */

/**
 * @name formatDistanceStrict
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words, using strict units.
 * This is like `formatDistance`, but does not use helpers like 'almost', 'over',
 * 'less than' and the like.
 *
 * | Distance between dates | Result              |
 * |------------------------|---------------------|
 * | 0 ... 59 secs          | [0..59] seconds     |
 * | 1 ... 59 mins          | [1..59] minutes     |
 * | 1 ... 23 hrs           | [1..23] hours       |
 * | 1 ... 29 days          | [1..29] days        |
 * | 1 ... 11 months        | [1..11] months      |
 * | 1 ... N years          | [1..N]  years       |
 *
 * @param laterDate - The date
 * @param earlierDate - The date to compare with
 * @param options - An object with options
 *
 * @returns The distance in words
 *
 * @throws `date` must not be Invalid Date
 * @throws `baseDate` must not be Invalid Date
 * @throws `options.unit` must be 'second', 'minute', 'hour', 'day', 'month' or 'year'
 * @throws `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * const result = formatDistanceStrict(new Date(2014, 6, 2), new Date(2015, 0, 2))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00?
 * const result = formatDistanceStrict(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0)
 * )
 * //=> '15 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * const result = formatDistanceStrict(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> '1 year ago'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, in minutes?
 * const result = formatDistanceStrict(new Date(2016, 0, 1), new Date(2015, 0, 1), {
 *   unit: 'minute'
 * })
 * //=> '525600 minutes'
 *
 * @example
 * // What is the distance from 1 January 2015
 * // to 28 January 2015, in months, rounded up?
 * const result = formatDistanceStrict(new Date(2015, 0, 28), new Date(2015, 0, 1), {
 *   unit: 'month',
 *   roundingMethod: 'ceil'
 * })
 * //=> '1 month'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = formatDistanceStrict(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> '1 jaro'
 */

function formatDistanceStrict(laterDate, earlierDate, options) {
  const defaultOptions = (0, _defaultOptions.getDefaultOptions)();
  const locale = options?.locale ?? defaultOptions.locale ?? _defaultLocale.defaultLocale;
  const comparison = (0, _compareAsc.compareAsc)(laterDate, earlierDate);
  if (isNaN(comparison)) {
    throw new RangeError("Invalid time value");
  }
  const localizeOptions = Object.assign({}, options, {
    addSuffix: options?.addSuffix,
    comparison: comparison
  });
  const [laterDate_, earlierDate_] = (0, _normalizeDates.normalizeDates)(options?.in, ...(comparison > 0 ? [earlierDate, laterDate] : [laterDate, earlierDate]));
  const roundingMethod = (0, _getRoundingMethod.getRoundingMethod)(options?.roundingMethod ?? "round");
  const milliseconds = earlierDate_.getTime() - laterDate_.getTime();
  const minutes = milliseconds / _constants.millisecondsInMinute;
  const timezoneOffset = (0, _getTimezoneOffsetInMilliseconds.getTimezoneOffsetInMilliseconds)(earlierDate_) - (0, _getTimezoneOffsetInMilliseconds.getTimezoneOffsetInMilliseconds)(laterDate_);

  // Use DST-normalized difference in minutes for years, months and days;
  // use regular difference in minutes for hours, minutes and seconds.
  const dstNormalizedMinutes = (milliseconds - timezoneOffset) / _constants.millisecondsInMinute;
  const defaultUnit = options?.unit;
  let unit;
  if (!defaultUnit) {
    if (minutes < 1) {
      unit = "second";
    } else if (minutes < 60) {
      unit = "minute";
    } else if (minutes < _constants.minutesInDay) {
      unit = "hour";
    } else if (dstNormalizedMinutes < _constants.minutesInMonth) {
      unit = "day";
    } else if (dstNormalizedMinutes < _constants.minutesInYear) {
      unit = "month";
    } else {
      unit = "year";
    }
  } else {
    unit = defaultUnit;
  }

  // 0 up to 60 seconds
  if (unit === "second") {
    const seconds = roundingMethod(milliseconds / 1000);
    return locale.formatDistance("xSeconds", seconds, localizeOptions);

    // 1 up to 60 mins
  } else if (unit === "minute") {
    const roundedMinutes = roundingMethod(minutes);
    return locale.formatDistance("xMinutes", roundedMinutes, localizeOptions);

    // 1 up to 24 hours
  } else if (unit === "hour") {
    const hours = roundingMethod(minutes / 60);
    return locale.formatDistance("xHours", hours, localizeOptions);

    // 1 up to 30 days
  } else if (unit === "day") {
    const days = roundingMethod(dstNormalizedMinutes / _constants.minutesInDay);
    return locale.formatDistance("xDays", days, localizeOptions);

    // 1 up to 12 months
  } else if (unit === "month") {
    const months = roundingMethod(dstNormalizedMinutes / _constants.minutesInMonth);
    return months === 12 && defaultUnit !== "month" ? locale.formatDistance("xYears", 1, localizeOptions) : locale.formatDistance("xMonths", months, localizeOptions);

    // 1 year up to max Date
  } else {
    const years = roundingMethod(dstNormalizedMinutes / _constants.minutesInYear);
    return locale.formatDistance("xYears", years, localizeOptions);
  }
}

// Fallback for modularized imports:
var _default = exports.default = formatDistanceStrict;
},{"./_lib/defaultLocale.js":"node_modules/date-fns/_lib/defaultLocale.js","./_lib/defaultOptions.js":"node_modules/date-fns/_lib/defaultOptions.js","./_lib/getRoundingMethod.js":"node_modules/date-fns/_lib/getRoundingMethod.js","./_lib/getTimezoneOffsetInMilliseconds.js":"node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js","./_lib/normalizeDates.js":"node_modules/date-fns/_lib/normalizeDates.js","./compareAsc.js":"node_modules/date-fns/compareAsc.js","./constants.js":"node_modules/date-fns/constants.js"}],"node_modules/date-fns/formatDistanceToNow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.formatDistanceToNow = formatDistanceToNow;
var _constructNow = require("./constructNow.js");
var _formatDistance = require("./formatDistance.js");
/**
 * The {@link formatDistanceToNow} function options.
 */

/**
 * @name formatDistanceToNow
 * @category Common Helpers
 * @summary Return the distance between the given date and now in words.
 * @pure false
 *
 * @description
 * Return the distance between the given date and now in words.
 *
 * | Distance to now                                                   | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance to now     | Result               |
 * |---------------------|----------------------|
 * | 0 secs ... 5 secs   | less than 5 seconds  |
 * | 5 secs ... 10 secs  | less than 10 seconds |
 * | 10 secs ... 20 secs | less than 20 seconds |
 * | 20 secs ... 40 secs | half a minute        |
 * | 40 secs ... 60 secs | less than a minute   |
 * | 60 secs ... 90 secs | 1 minute             |
 *
 * @param date - The given date
 * @param options - The object with options
 *
 * @returns The distance in words
 *
 * @throws `date` must not be Invalid Date
 * @throws `options.locale` must contain `formatDistance` property
 *
 * @example
 * // If today is 1 January 2015, what is the distance to 2 July 2014?
 * const result = formatDistanceToNow(
 *   new Date(2014, 6, 2)
 * )
 * //=> '6 months'
 *
 * @example
 * // If now is 1 January 2015 00:00:00,
 * // what is the distance to 1 January 2015 00:00:15, including seconds?
 * const result = formatDistanceToNow(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   {includeSeconds: true}
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 January 2016, with a suffix?
 * const result = formatDistanceToNow(
 *   new Date(2016, 0, 1),
 *   {addSuffix: true}
 * )
 * //=> 'in about 1 year'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 August 2016 in Esperanto?
 * const eoLocale = require('date-fns/locale/eo')
 * const result = formatDistanceToNow(
 *   new Date(2016, 7, 1),
 *   {locale: eoLocale}
 * )
 * //=> 'pli ol 1 jaro'
 */
function formatDistanceToNow(date, options) {
  return (0, _formatDistance.formatDistance)(date, (0, _constructNow.constructNow)(date), options);
}

// Fallback for modularized imports:
var _default = exports.default = formatDistanceToNow;
},{"./constructNow.js":"node_modules/date-fns/constructNow.js","./formatDistance.js":"node_modules/date-fns/formatDistance.js"}],"node_modules/date-fns/formatDistanceToNowStrict.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.formatDistanceToNowStrict = formatDistanceToNowStrict;
var _constructNow = require("./constructNow.js");
var _formatDistanceStrict = require("./formatDistanceStrict.js");
/**
 * The {@link formatDistanceToNowStrict} function options.
 */

/**
 * @name formatDistanceToNowStrict
 * @category Common Helpers
 * @summary Return the distance between the given date and now in words.
 * @pure false
 *
 * @description
 * Return the distance between the given dates in words, using strict units.
 * This is like `formatDistance`, but does not use helpers like 'almost', 'over',
 * 'less than' and the like.
 *
 * | Distance between dates | Result              |
 * |------------------------|---------------------|
 * | 0 ... 59 secs          | [0..59] seconds     |
 * | 1 ... 59 mins          | [1..59] minutes     |
 * | 1 ... 23 hrs           | [1..23] hours       |
 * | 1 ... 29 days          | [1..29] days        |
 * | 1 ... 11 months        | [1..11] months      |
 * | 1 ... N years          | [1..N]  years       |
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The distance in words
 *
 * @throws `date` must not be Invalid Date
 * @throws `options.locale` must contain `formatDistance` property
 *
 * @example
 * // If today is 1 January 2015, what is the distance to 2 July 2014?
 * const result = formatDistanceToNowStrict(
 *   new Date(2014, 6, 2)
 * )
 * //=> '6 months'
 *
 * @example
 * // If now is 1 January 2015 00:00:00,
 * // what is the distance to 1 January 2015 00:00:15, including seconds?
 * const result = formatDistanceToNowStrict(
 *   new Date(2015, 0, 1, 0, 0, 15)
 * )
 * //=> '15 seconds'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 January 2016, with a suffix?
 * const result = formatDistanceToNowStrict(
 *   new Date(2016, 0, 1),
 *   {addSuffix: true}
 * )
 * //=> 'in 1 year'
 *
 * @example
 * // If today is 28 January 2015,
 * // what is the distance to 1 January 2015, in months, rounded up??
 * const result = formatDistanceToNowStrict(new Date(2015, 0, 1), {
 *   unit: 'month',
 *   roundingMethod: 'ceil'
 * })
 * //=> '1 month'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 January 2016 in Esperanto?
 * const eoLocale = require('date-fns/locale/eo')
 * const result = formatDistanceToNowStrict(
 *   new Date(2016, 0, 1),
 *   {locale: eoLocale}
 * )
 * //=> '1 jaro'
 */
function formatDistanceToNowStrict(date, options) {
  return (0, _formatDistanceStrict.formatDistanceStrict)(date, (0, _constructNow.constructNow)(date), options);
}

// Fallback for modularized imports:
var _default = exports.default = formatDistanceToNowStrict;
},{"./constructNow.js":"node_modules/date-fns/constructNow.js","./formatDistanceStrict.js":"node_modules/date-fns/formatDistanceStrict.js"}],"node_modules/date-fns/formatDuration.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.formatDuration = formatDuration;
var _defaultLocale = require("./_lib/defaultLocale.js");
var _defaultOptions = require("./_lib/defaultOptions.js");
/**
 * The {@link formatDuration} function options.
 */

const defaultFormat = ["years", "months", "weeks", "days", "hours", "minutes", "seconds"];

/**
 * @name formatDuration
 * @category Common Helpers
 * @summary Formats a duration in human-readable format
 *
 * @description
 * Return human-readable duration string i.e. "9 months 2 days"
 *
 * @param duration - The duration to format
 * @param options - An object with options.
 *
 * @returns The formatted date string
 *
 * @example
 * // Format full duration
 * formatDuration({
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,
 *   minutes: 9,
 *   seconds: 30
 * })
 * //=> '2 years 9 months 1 week 7 days 5 hours 9 minutes 30 seconds'
 *
 * @example
 * // Format partial duration
 * formatDuration({ months: 9, days: 2 })
 * //=> '9 months 2 days'
 *
 * @example
 * // Customize the format
 * formatDuration(
 *   {
 *     years: 2,
 *     months: 9,
 *     weeks: 1,
 *     days: 7,
 *     hours: 5,
 *     minutes: 9,
 *     seconds: 30
 *   },
 *   { format: ['months', 'weeks'] }
 * ) === '9 months 1 week'
 *
 * @example
 * // Customize the zeros presence
 * formatDuration({ years: 0, months: 9 })
 * //=> '9 months'
 * formatDuration({ years: 0, months: 9 }, { zero: true })
 * //=> '0 years 9 months'
 *
 * @example
 * // Customize the delimiter
 * formatDuration({ years: 2, months: 9, weeks: 3 }, { delimiter: ', ' })
 * //=> '2 years, 9 months, 3 weeks'
 */
function formatDuration(duration, options) {
  const defaultOptions = (0, _defaultOptions.getDefaultOptions)();
  const locale = options?.locale ?? defaultOptions.locale ?? _defaultLocale.defaultLocale;
  const format = options?.format ?? defaultFormat;
  const zero = options?.zero ?? false;
  const delimiter = options?.delimiter ?? " ";
  if (!locale.formatDistance) {
    return "";
  }
  const result = format.reduce((acc, unit) => {
    const token = `x${unit.replace(/(^.)/, m => m.toUpperCase())}`;
    const value = duration[unit];
    if (value !== undefined && (zero || duration[unit])) {
      return acc.concat(locale.formatDistance(token, value));
    }
    return acc;
  }, []).join(delimiter);
  return result;
}

// Fallback for modularized imports:
var _default = exports.default = formatDuration;
},{"./_lib/defaultLocale.js":"node_modules/date-fns/_lib/defaultLocale.js","./_lib/defaultOptions.js":"node_modules/date-fns/_lib/defaultOptions.js"}],"node_modules/date-fns/formatISO.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.formatISO = formatISO;
var _addLeadingZeros = require("./_lib/addLeadingZeros.js");
var _toDate = require("./toDate.js");
/**
 * The {@link formatISO} function options.
 */

/**
 * @name formatISO
 * @category Common Helpers
 * @summary Format the date according to the ISO 8601 standard (https://support.sas.com/documentation/cdl/en/lrdict/64316/HTML/default/viewer.htm#a003169814.htm).
 *
 * @description
 * Return the formatted date string in ISO 8601 format. Options may be passed to control the parts and notations of the date.
 *
 * @param date - The original date
 * @param options - An object with options.
 *
 * @returns The formatted date string (in local time zone)
 *
 * @throws `date` must not be Invalid Date
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601 format (local time zone is UTC):
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52))
 * //=> '2019-09-18T19:00:52Z'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601, short format (local time zone is UTC):
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { format: 'basic' })
 * //=> '20190918T190052'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601 format, date only:
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { representation: 'date' })
 * //=> '2019-09-18'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601 format, time only (local time zone is UTC):
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { representation: 'time' })
 * //=> '19:00:52Z'
 */
function formatISO(date, options) {
  const date_ = (0, _toDate.toDate)(date, options?.in);
  if (isNaN(+date_)) {
    throw new RangeError("Invalid time value");
  }
  const format = options?.format ?? "extended";
  const representation = options?.representation ?? "complete";
  let result = "";
  let tzOffset = "";
  const dateDelimiter = format === "extended" ? "-" : "";
  const timeDelimiter = format === "extended" ? ":" : "";

  // Representation is either 'date' or 'complete'
  if (representation !== "time") {
    const day = (0, _addLeadingZeros.addLeadingZeros)(date_.getDate(), 2);
    const month = (0, _addLeadingZeros.addLeadingZeros)(date_.getMonth() + 1, 2);
    const year = (0, _addLeadingZeros.addLeadingZeros)(date_.getFullYear(), 4);

    // yyyyMMdd or yyyy-MM-dd.
    result = `${year}${dateDelimiter}${month}${dateDelimiter}${day}`;
  }

  // Representation is either 'time' or 'complete'
  if (representation !== "date") {
    // Add the timezone.
    const offset = date_.getTimezoneOffset();
    if (offset !== 0) {
      const absoluteOffset = Math.abs(offset);
      const hourOffset = (0, _addLeadingZeros.addLeadingZeros)(Math.trunc(absoluteOffset / 60), 2);
      const minuteOffset = (0, _addLeadingZeros.addLeadingZeros)(absoluteOffset % 60, 2);
      // If less than 0, the sign is +, because it is ahead of time.
      const sign = offset < 0 ? "+" : "-";
      tzOffset = `${sign}${hourOffset}:${minuteOffset}`;
    } else {
      tzOffset = "Z";
    }
    const hour = (0, _addLeadingZeros.addLeadingZeros)(date_.getHours(), 2);
    const minute = (0, _addLeadingZeros.addLeadingZeros)(date_.getMinutes(), 2);
    const second = (0, _addLeadingZeros.addLeadingZeros)(date_.getSeconds(), 2);

    // If there's also date, separate it with time with 'T'
    const separator = result === "" ? "" : "T";

    // Creates a time string consisting of hour, minute, and second, separated by delimiters, if defined.
    const time = [hour, minute, second].join(timeDelimiter);

    // HHmmss or HH:mm:ss.
    result = `${result}${separator}${time}${tzOffset}`;
  }
  return result;
}

// Fallback for modularized imports:
var _default = exports.default = formatISO;
},{"./_lib/addLeadingZeros.js":"node_modules/date-fns/_lib/addLeadingZeros.js","./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/formatISO9075.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.formatISO9075 = formatISO9075;
var _addLeadingZeros = require("./_lib/addLeadingZeros.js");
var _isValid = require("./isValid.js");
var _toDate = require("./toDate.js");
/**
 * The {@link formatISO9075} function options.
 */

/**
 * @name formatISO9075
 * @category Common Helpers
 * @summary Format the date according to the ISO 9075 standard (https://dev.mysql.com/doc/refman/5.7/en/date-and-time-functions.html#function_get-format).
 *
 * @description
 * Return the formatted date string in ISO 9075 format. Options may be passed to control the parts and notations of the date.
 *
 * @param date - The original date
 * @param options - An object with options.
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 *
 * @example
 * // Represent 18 September 2019 in ISO 9075 format:
 * const result = formatISO9075(new Date(2019, 8, 18, 19, 0, 52))
 * //=> '2019-09-18 19:00:52'
 *
 * @example
 * // Represent 18 September 2019 in ISO 9075, short format:
 * const result = formatISO9075(new Date(2019, 8, 18, 19, 0, 52), { format: 'basic' })
 * //=> '20190918 190052'
 *
 * @example
 * // Represent 18 September 2019 in ISO 9075 format, date only:
 * const result = formatISO9075(new Date(2019, 8, 18, 19, 0, 52), { representation: 'date' })
 * //=> '2019-09-18'
 *
 * @example
 * // Represent 18 September 2019 in ISO 9075 format, time only:
 * const result = formatISO9075(new Date(2019, 8, 18, 19, 0, 52), { representation: 'time' })
 * //=> '19:00:52'
 */
function formatISO9075(date, options) {
  const date_ = (0, _toDate.toDate)(date, options?.in);
  if (!(0, _isValid.isValid)(date_)) {
    throw new RangeError("Invalid time value");
  }
  const format = options?.format ?? "extended";
  const representation = options?.representation ?? "complete";
  let result = "";
  const dateDelimiter = format === "extended" ? "-" : "";
  const timeDelimiter = format === "extended" ? ":" : "";

  // Representation is either 'date' or 'complete'
  if (representation !== "time") {
    const day = (0, _addLeadingZeros.addLeadingZeros)(date_.getDate(), 2);
    const month = (0, _addLeadingZeros.addLeadingZeros)(date_.getMonth() + 1, 2);
    const year = (0, _addLeadingZeros.addLeadingZeros)(date_.getFullYear(), 4);

    // yyyyMMdd or yyyy-MM-dd.
    result = `${year}${dateDelimiter}${month}${dateDelimiter}${day}`;
  }

  // Representation is either 'time' or 'complete'
  if (representation !== "date") {
    const hour = (0, _addLeadingZeros.addLeadingZeros)(date_.getHours(), 2);
    const minute = (0, _addLeadingZeros.addLeadingZeros)(date_.getMinutes(), 2);
    const second = (0, _addLeadingZeros.addLeadingZeros)(date_.getSeconds(), 2);

    // If there's also date, separate it with time with a space
    const separator = result === "" ? "" : " ";

    // HHmmss or HH:mm:ss.
    result = `${result}${separator}${hour}${timeDelimiter}${minute}${timeDelimiter}${second}`;
  }
  return result;
}

// Fallback for modularized imports:
var _default = exports.default = formatISO9075;
},{"./_lib/addLeadingZeros.js":"node_modules/date-fns/_lib/addLeadingZeros.js","./isValid.js":"node_modules/date-fns/isValid.js","./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/formatISODuration.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.formatISODuration = formatISODuration;
/**
 * @name formatISODuration
 * @category Common Helpers
 * @summary Format a duration object according as ISO 8601 duration string
 *
 * @description
 * Format a duration object according to the ISO 8601 duration standard (https://www.digi.com/resources/documentation/digidocs//90001488-13/reference/r_iso_8601_duration_format.htm)
 *
 * @param duration - The duration to format
 *
 * @returns The ISO 8601 duration string
 *
 * @example
 * // Format the given duration as ISO 8601 string
 * const result = formatISODuration({
 *   years: 39,
 *   months: 2,
 *   days: 20,
 *   hours: 7,
 *   minutes: 5,
 *   seconds: 0
 * })
 * //=> 'P39Y2M20DT0H0M0S'
 */
function formatISODuration(duration) {
  const {
    years = 0,
    months = 0,
    days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0
  } = duration;
  return `P${years}Y${months}M${days}DT${hours}H${minutes}M${seconds}S`;
}

// Fallback for modularized imports:
var _default = exports.default = formatISODuration;
},{}],"node_modules/date-fns/formatRFC3339.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.formatRFC3339 = formatRFC3339;
var _addLeadingZeros = require("./_lib/addLeadingZeros.js");
var _isValid = require("./isValid.js");
var _toDate = require("./toDate.js");
/**
 * The {@link formatRFC3339} function options.
 */

/**
 * @name formatRFC3339
 * @category Common Helpers
 * @summary Format the date according to the RFC 3339 standard (https://tools.ietf.org/html/rfc3339#section-5.6).
 *
 * @description
 * Return the formatted date string in RFC 3339 format. Options may be passed to control the parts and notations of the date.
 *
 * @param date - The original date
 * @param options - An object with options.
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 *
 * @example
 * // Represent 18 September 2019 in RFC 3339 format:
 * formatRFC3339(new Date(2019, 8, 18, 19, 0, 52))
 * //=> '2019-09-18T19:00:52Z'
 *
 * @example
 * // Represent 18 September 2019 in RFC 3339 format, 3 digits of second fraction
 * formatRFC3339(new Date(2019, 8, 18, 19, 0, 52, 234), {
 *   fractionDigits: 3
 * })
 * //=> '2019-09-18T19:00:52.234Z'
 */
function formatRFC3339(date, options) {
  const date_ = (0, _toDate.toDate)(date, options?.in);
  if (!(0, _isValid.isValid)(date_)) {
    throw new RangeError("Invalid time value");
  }
  const fractionDigits = options?.fractionDigits ?? 0;
  const day = (0, _addLeadingZeros.addLeadingZeros)(date_.getDate(), 2);
  const month = (0, _addLeadingZeros.addLeadingZeros)(date_.getMonth() + 1, 2);
  const year = date_.getFullYear();
  const hour = (0, _addLeadingZeros.addLeadingZeros)(date_.getHours(), 2);
  const minute = (0, _addLeadingZeros.addLeadingZeros)(date_.getMinutes(), 2);
  const second = (0, _addLeadingZeros.addLeadingZeros)(date_.getSeconds(), 2);
  let fractionalSecond = "";
  if (fractionDigits > 0) {
    const milliseconds = date_.getMilliseconds();
    const fractionalSeconds = Math.trunc(milliseconds * Math.pow(10, fractionDigits - 3));
    fractionalSecond = "." + (0, _addLeadingZeros.addLeadingZeros)(fractionalSeconds, fractionDigits);
  }
  let offset = "";
  const tzOffset = date_.getTimezoneOffset();
  if (tzOffset !== 0) {
    const absoluteOffset = Math.abs(tzOffset);
    const hourOffset = (0, _addLeadingZeros.addLeadingZeros)(Math.trunc(absoluteOffset / 60), 2);
    const minuteOffset = (0, _addLeadingZeros.addLeadingZeros)(absoluteOffset % 60, 2);
    // If less than 0, the sign is +, because it is ahead of time.
    const sign = tzOffset < 0 ? "+" : "-";
    offset = `${sign}${hourOffset}:${minuteOffset}`;
  } else {
    offset = "Z";
  }
  return `${year}-${month}-${day}T${hour}:${minute}:${second}${fractionalSecond}${offset}`;
}

// Fallback for modularized imports:
var _default = exports.default = formatRFC3339;
},{"./_lib/addLeadingZeros.js":"node_modules/date-fns/_lib/addLeadingZeros.js","./isValid.js":"node_modules/date-fns/isValid.js","./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/formatRFC7231.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.formatRFC7231 = formatRFC7231;
var _addLeadingZeros = require("./_lib/addLeadingZeros.js");
var _isValid = require("./isValid.js");
var _toDate = require("./toDate.js");
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/**
 * @name formatRFC7231
 * @category Common Helpers
 * @summary Format the date according to the RFC 7231 standard (https://tools.ietf.org/html/rfc7231#section-7.1.1.1).
 *
 * @description
 * Return the formatted date string in RFC 7231 format.
 * The result will always be in UTC timezone.
 *
 * @param date - The original date
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 *
 * @example
 * // Represent 18 September 2019 in RFC 7231 format:
 * const result = formatRFC7231(new Date(2019, 8, 18, 19, 0, 52))
 * //=> 'Wed, 18 Sep 2019 19:00:52 GMT'
 */
function formatRFC7231(date) {
  const _date = (0, _toDate.toDate)(date);
  if (!(0, _isValid.isValid)(_date)) {
    throw new RangeError("Invalid time value");
  }
  const dayName = days[_date.getUTCDay()];
  const dayOfMonth = (0, _addLeadingZeros.addLeadingZeros)(_date.getUTCDate(), 2);
  const monthName = months[_date.getUTCMonth()];
  const year = _date.getUTCFullYear();
  const hour = (0, _addLeadingZeros.addLeadingZeros)(_date.getUTCHours(), 2);
  const minute = (0, _addLeadingZeros.addLeadingZeros)(_date.getUTCMinutes(), 2);
  const second = (0, _addLeadingZeros.addLeadingZeros)(_date.getUTCSeconds(), 2);

  // Result variables.
  return `${dayName}, ${dayOfMonth} ${monthName} ${year} ${hour}:${minute}:${second} GMT`;
}

// Fallback for modularized imports:
var _default = exports.default = formatRFC7231;
},{"./_lib/addLeadingZeros.js":"node_modules/date-fns/_lib/addLeadingZeros.js","./isValid.js":"node_modules/date-fns/isValid.js","./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/formatRelative.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.formatRelative = formatRelative;
var _defaultLocale = require("./_lib/defaultLocale.js");
var _defaultOptions = require("./_lib/defaultOptions.js");
var _normalizeDates = require("./_lib/normalizeDates.js");
var _differenceInCalendarDays = require("./differenceInCalendarDays.js");
var _format = require("./format.js");
/**
 * The {@link formatRelative} function options.
 */

/**
 * @name formatRelative
 * @category Common Helpers
 * @summary Represent the date in words relative to the given base date.
 *
 * @description
 * Represent the date in words relative to the given base date.
 *
 * | Distance to the base date | Result                    |
 * |---------------------------|---------------------------|
 * | Previous 6 days           | last Sunday at 04:30 AM   |
 * | Last day                  | yesterday at 04:30 AM     |
 * | Same day                  | today at 04:30 AM         |
 * | Next day                  | tomorrow at 04:30 AM      |
 * | Next 6 days               | Sunday at 04:30 AM        |
 * | Other                     | 12/31/2017                |
 *
 * @param date - The date to format
 * @param baseDate - The date to compare with
 * @param options - An object with options
 *
 * @returns The date in words
 *
 * @throws `date` must not be Invalid Date
 * @throws `baseDate` must not be Invalid Date
 * @throws `options.locale` must contain `localize` property
 * @throws `options.locale` must contain `formatLong` property
 * @throws `options.locale` must contain `formatRelative` property
 *
 * @example
 * // Represent the date of 6 days ago in words relative to the given base date. In this example, today is Wednesday
 * const result = formatRelative(subDays(new Date(), 6), new Date())
 * //=> "last Thursday at 12:45 AM"
 */
function formatRelative(date, baseDate, options) {
  const [date_, baseDate_] = (0, _normalizeDates.normalizeDates)(options?.in, date, baseDate);
  const defaultOptions = (0, _defaultOptions.getDefaultOptions)();
  const locale = options?.locale ?? defaultOptions.locale ?? _defaultLocale.defaultLocale;
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
  const diff = (0, _differenceInCalendarDays.differenceInCalendarDays)(date_, baseDate_);
  if (isNaN(diff)) {
    throw new RangeError("Invalid time value");
  }
  let token;
  if (diff < -6) {
    token = "other";
  } else if (diff < -1) {
    token = "lastWeek";
  } else if (diff < 0) {
    token = "yesterday";
  } else if (diff < 1) {
    token = "today";
  } else if (diff < 2) {
    token = "tomorrow";
  } else if (diff < 7) {
    token = "nextWeek";
  } else {
    token = "other";
  }
  const formatStr = locale.formatRelative(token, date_, baseDate_, {
    locale,
    weekStartsOn
  });
  return (0, _format.format)(date_, formatStr, {
    locale,
    weekStartsOn
  });
}

// Fallback for modularized imports:
var _default = exports.default = formatRelative;
},{"./_lib/defaultLocale.js":"node_modules/date-fns/_lib/defaultLocale.js","./_lib/defaultOptions.js":"node_modules/date-fns/_lib/defaultOptions.js","./_lib/normalizeDates.js":"node_modules/date-fns/_lib/normalizeDates.js","./differenceInCalendarDays.js":"node_modules/date-fns/differenceInCalendarDays.js","./format.js":"node_modules/date-fns/format.js"}],"node_modules/date-fns/fromUnixTime.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.fromUnixTime = fromUnixTime;
var _toDate = require("./toDate.js");
/**
 * The {@link fromUnixTime} function options.
 */

/**
 * @name fromUnixTime
 * @category Timestamp Helpers
 * @summary Create a date from a Unix timestamp.
 *
 * @description
 * Create a date from a Unix timestamp (in seconds). Decimal values will be discarded.
 *
 * @param unixTime - The given Unix timestamp (in seconds)
 * @param options - An object with options. Allows to pass a context.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @returns The date
 *
 * @example
 * // Create the date 29 February 2012 11:45:05:
 * const result = fromUnixTime(1330515905)
 * //=> Wed Feb 29 2012 11:45:05
 */
function fromUnixTime(unixTime, options) {
  return (0, _toDate.toDate)(unixTime * 1000, options?.in);
}

// Fallback for modularized imports:
var _default = exports.default = fromUnixTime;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/getDate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getDate = getDate;
var _toDate = require("./toDate.js");
/**
 * The {@link getDate} function options.
 */

/**
 * @name getDate
 * @category Day Helpers
 * @summary Get the day of the month of the given date.
 *
 * @description
 * Get the day of the month of the given date.
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The day of month
 *
 * @example
 * // Which day of the month is 29 February 2012?
 * const result = getDate(new Date(2012, 1, 29))
 * //=> 29
 */
function getDate(date, options) {
  return (0, _toDate.toDate)(date, options?.in).getDate();
}

// Fallback for modularized imports:
var _default = exports.default = getDate;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/getDay.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getDay = getDay;
var _toDate = require("./toDate.js");
/**
 * The {@link getDay} function options.
 */

/**
 * @name getDay
 * @category Weekday Helpers
 * @summary Get the day of the week of the given date.
 *
 * @description
 * Get the day of the week of the given date.
 *
 * @param date - The given date
 * @param options - The options
 *
 * @returns The day of week, 0 represents Sunday
 *
 * @example
 * // Which day of the week is 29 February 2012?
 * const result = getDay(new Date(2012, 1, 29))
 * //=> 3
 */
function getDay(date, options) {
  return (0, _toDate.toDate)(date, options?.in).getDay();
}

// Fallback for modularized imports:
var _default = exports.default = getDay;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/getDaysInMonth.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getDaysInMonth = getDaysInMonth;
var _constructFrom = require("./constructFrom.js");
var _toDate = require("./toDate.js");
/**
 * The {@link getDaysInMonth} function options.
 */

/**
 * @name getDaysInMonth
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date, considering the context if provided.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The number of days in a month
 *
 * @example
 * // How many days are in February 2000?
 * const result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */
function getDaysInMonth(date, options) {
  const _date = (0, _toDate.toDate)(date, options?.in);
  const year = _date.getFullYear();
  const monthIndex = _date.getMonth();
  const lastDayOfMonth = (0, _constructFrom.constructFrom)(_date, 0);
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
  lastDayOfMonth.setHours(0, 0, 0, 0);
  return lastDayOfMonth.getDate();
}

// Fallback for modularized imports:
var _default = exports.default = getDaysInMonth;
},{"./constructFrom.js":"node_modules/date-fns/constructFrom.js","./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/isLeapYear.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.isLeapYear = isLeapYear;
var _toDate = require("./toDate.js");
/**
 * @name isLeapYear
 * @category Year Helpers
 * @summary Is the given date in the leap year?
 *
 * @description
 * Is the given date in the leap year?
 *
 * @param date - The date to check
 * @param options - The options object
 *
 * @returns The date is in the leap year
 *
 * @example
 * // Is 1 September 2012 in the leap year?
 * const result = isLeapYear(new Date(2012, 8, 1))
 * //=> true
 */
function isLeapYear(date, options) {
  const _date = (0, _toDate.toDate)(date, options?.in);
  const year = _date.getFullYear();
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

// Fallback for modularized imports:
var _default = exports.default = isLeapYear;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/getDaysInYear.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getDaysInYear = getDaysInYear;
var _isLeapYear = require("./isLeapYear.js");
var _toDate = require("./toDate.js");
/**
 * The {@link getDaysInYear} function options.
 */

/**
 * @name getDaysInYear
 * @category Year Helpers
 * @summary Get the number of days in a year of the given date.
 *
 * @description
 * Get the number of days in a year of the given date.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The number of days in a year
 *
 * @example
 * // How many days are in 2012?
 * const result = getDaysInYear(new Date(2012, 0, 1))
 * //=> 366
 */
function getDaysInYear(date, options) {
  const _date = (0, _toDate.toDate)(date, options?.in);
  if (Number.isNaN(+_date)) return NaN;
  return (0, _isLeapYear.isLeapYear)(_date) ? 366 : 365;
}

// Fallback for modularized imports:
var _default = exports.default = getDaysInYear;
},{"./isLeapYear.js":"node_modules/date-fns/isLeapYear.js","./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/getDecade.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getDecade = getDecade;
var _toDate = require("./toDate.js");
/**
 * The {@link getDecade} function options.
 */

/**
 * @name getDecade
 * @category Decade Helpers
 * @summary Get the decade of the given date.
 *
 * @description
 * Get the decade of the given date.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The year of decade
 *
 * @example
 * // Which decade belongs 27 November 1942?
 * const result = getDecade(new Date(1942, 10, 27))
 * //=> 1940
 */
function getDecade(date, options) {
  // TODO: Switch to more technical definition in of decades that start with 1
  // end with 0. I.e. 2001-2010 instead of current 2000-2009. It's a breaking
  // change, so it can only be done in 4.0.
  const _date = (0, _toDate.toDate)(date, options?.in);
  const year = _date.getFullYear();
  const decade = Math.floor(year / 10) * 10;
  return decade;
}

// Fallback for modularized imports:
var _default = exports.default = getDecade;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/getDefaultOptions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getDefaultOptions = getDefaultOptions;
var _defaultOptions = require("./_lib/defaultOptions.js");
/**
 * @name getDefaultOptions
 * @category Common Helpers
 * @summary Get default options.
 * @pure false
 *
 * @description
 * Returns an object that contains defaults for
 * `options.locale`, `options.weekStartsOn` and `options.firstWeekContainsDate`
 * arguments for all functions.
 *
 * You can change these with [setDefaultOptions](https://date-fns.org/docs/setDefaultOptions).
 *
 * @returns The default options
 *
 * @example
 * const result = getDefaultOptions()
 * //=> {}
 *
 * @example
 * setDefaultOptions({ weekStarsOn: 1, firstWeekContainsDate: 4 })
 * const result = getDefaultOptions()
 * //=> { weekStarsOn: 1, firstWeekContainsDate: 4 }
 */
function getDefaultOptions() {
  return Object.assign({}, (0, _defaultOptions.getDefaultOptions)());
}

// Fallback for modularized imports:
var _default = exports.default = getDefaultOptions;
},{"./_lib/defaultOptions.js":"node_modules/date-fns/_lib/defaultOptions.js"}],"node_modules/date-fns/getHours.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getHours = getHours;
var _toDate = require("./toDate.js");
/**
 * The {@link getHours} function options.
 */

/**
 * @name getHours
 * @category Hour Helpers
 * @summary Get the hours of the given date.
 *
 * @description
 * Get the hours of the given date.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The hours
 *
 * @example
 * // Get the hours of 29 February 2012 11:45:00:
 * const result = getHours(new Date(2012, 1, 29, 11, 45))
 * //=> 11
 */
function getHours(date, options) {
  return (0, _toDate.toDate)(date, options?.in).getHours();
}

// Fallback for modularized imports:
var _default = exports.default = getHours;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/getISODay.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getISODay = getISODay;
var _toDate = require("./toDate.js");
/**
 * The {@link getISODay} function options.
 */

/**
 * @name getISODay
 * @category Weekday Helpers
 * @summary Get the day of the ISO week of the given date.
 *
 * @description
 * Get the day of the ISO week of the given date,
 * which is 7 for Sunday, 1 for Monday etc.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The day of ISO week
 *
 * @example
 * // Which day of the ISO week is 26 February 2012?
 * const result = getISODay(new Date(2012, 1, 26))
 * //=> 7
 */
function getISODay(date, options) {
  const day = (0, _toDate.toDate)(date, options?.in).getDay();
  return day === 0 ? 7 : day;
}

// Fallback for modularized imports:
var _default = exports.default = getISODay;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/getISOWeeksInYear.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getISOWeeksInYear = getISOWeeksInYear;
var _addWeeks = require("./addWeeks.js");
var _constants = require("./constants.js");
var _startOfISOWeekYear = require("./startOfISOWeekYear.js");
/**
 * The {@link getISOWeeksInYear} function options.
 */

/**
 * @name getISOWeeksInYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of weeks in an ISO week-numbering year of the given date.
 *
 * @description
 * Get the number of weeks in an ISO week-numbering year of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The number of ISO weeks in a year
 *
 * @example
 * // How many weeks are in ISO week-numbering year 2015?
 * const result = getISOWeeksInYear(new Date(2015, 1, 11))
 * //=> 53
 */
function getISOWeeksInYear(date, options) {
  const thisYear = (0, _startOfISOWeekYear.startOfISOWeekYear)(date, options);
  const nextYear = (0, _startOfISOWeekYear.startOfISOWeekYear)((0, _addWeeks.addWeeks)(thisYear, 60));
  const diff = +nextYear - +thisYear;

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(diff / _constants.millisecondsInWeek);
}

// Fallback for modularized imports:
var _default = exports.default = getISOWeeksInYear;
},{"./addWeeks.js":"node_modules/date-fns/addWeeks.js","./constants.js":"node_modules/date-fns/constants.js","./startOfISOWeekYear.js":"node_modules/date-fns/startOfISOWeekYear.js"}],"node_modules/date-fns/getMilliseconds.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getMilliseconds = getMilliseconds;
var _toDate = require("./toDate.js");
/**
 * @name getMilliseconds
 * @category Millisecond Helpers
 * @summary Get the milliseconds of the given date.
 *
 * @description
 * Get the milliseconds of the given date.
 *
 * @param date - The given date
 *
 * @returns The milliseconds
 *
 * @example
 * // Get the milliseconds of 29 February 2012 11:45:05.123:
 * const result = getMilliseconds(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 123
 */
function getMilliseconds(date) {
  return (0, _toDate.toDate)(date).getMilliseconds();
}

// Fallback for modularized imports:
var _default = exports.default = getMilliseconds;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/getMinutes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getMinutes = getMinutes;
var _toDate = require("./toDate.js");
/**
 * The {@link getMinutes} function options.
 */

/**
 * @name getMinutes
 * @category Minute Helpers
 * @summary Get the minutes of the given date.
 *
 * @description
 * Get the minutes of the given date.
 *
 * @param date - The given date
 * @param options - The options
 *
 * @returns The minutes
 *
 * @example
 * // Get the minutes of 29 February 2012 11:45:05:
 * const result = getMinutes(new Date(2012, 1, 29, 11, 45, 5))
 * //=> 45
 */
function getMinutes(date, options) {
  return (0, _toDate.toDate)(date, options?.in).getMinutes();
}

// Fallback for modularized imports:
var _default = exports.default = getMinutes;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/getMonth.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getMonth = getMonth;
var _toDate = require("./toDate.js");
/**
 * The {@link getMonth} function options.
 */

/**
 * @name getMonth
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The month index (0-11)
 *
 * @example
 * // Which month is 29 February 2012?
 * const result = getMonth(new Date(2012, 1, 29))
 * //=> 1
 */
function getMonth(date, options) {
  return (0, _toDate.toDate)(date, options?.in).getMonth();
}

// Fallback for modularized imports:
var _default = exports.default = getMonth;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/getOverlappingDaysInIntervals.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getOverlappingDaysInIntervals = getOverlappingDaysInIntervals;
var _getTimezoneOffsetInMilliseconds = require("./_lib/getTimezoneOffsetInMilliseconds.js");
var _constants = require("./constants.js");
var _toDate = require("./toDate.js");
/**
 * @name getOverlappingDaysInIntervals
 * @category Interval Helpers
 * @summary Get the number of days that overlap in two time intervals
 *
 * @description
 * Get the number of days that overlap in two time intervals. It uses the time
 * between dates to calculate the number of days, rounding it up to include
 * partial days.
 *
 * Two equal 0-length intervals will result in 0. Two equal 1ms intervals will
 * result in 1.
 *
 * @param intervalLeft - The first interval to compare.
 * @param intervalRight - The second interval to compare.
 * @param options - An object with options
 *
 * @returns The number of days that overlap in two time intervals
 *
 * @example
 * // For overlapping time intervals adds 1 for each started overlapping day:
 * getOverlappingDaysInIntervals(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 17), end: new Date(2014, 0, 21) }
 * )
 * //=> 3
 *
 * @example
 * // For non-overlapping time intervals returns 0:
 * getOverlappingDaysInIntervals(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 21), end: new Date(2014, 0, 22) }
 * )
 * //=> 0
 */

function getOverlappingDaysInIntervals(intervalLeft, intervalRight) {
  const [leftStart, leftEnd] = [+(0, _toDate.toDate)(intervalLeft.start), +(0, _toDate.toDate)(intervalLeft.end)].sort((a, b) => a - b);
  const [rightStart, rightEnd] = [+(0, _toDate.toDate)(intervalRight.start), +(0, _toDate.toDate)(intervalRight.end)].sort((a, b) => a - b);

  // Prevent NaN result if intervals don't overlap at all.
  const isOverlapping = leftStart < rightEnd && rightStart < leftEnd;
  if (!isOverlapping) return 0;

  // Remove the timezone offset to negate the DST effect on calculations.
  const overlapLeft = rightStart < leftStart ? leftStart : rightStart;
  const left = overlapLeft - (0, _getTimezoneOffsetInMilliseconds.getTimezoneOffsetInMilliseconds)(overlapLeft);
  const overlapRight = rightEnd > leftEnd ? leftEnd : rightEnd;
  const right = overlapRight - (0, _getTimezoneOffsetInMilliseconds.getTimezoneOffsetInMilliseconds)(overlapRight);

  // Ceil the number to include partial days too.
  return Math.ceil((right - left) / _constants.millisecondsInDay);
}

// Fallback for modularized imports:
var _default = exports.default = getOverlappingDaysInIntervals;
},{"./_lib/getTimezoneOffsetInMilliseconds.js":"node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js","./constants.js":"node_modules/date-fns/constants.js","./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/getSeconds.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getSeconds = getSeconds;
var _toDate = require("./toDate.js");
/**
 * @name getSeconds
 * @category Second Helpers
 * @summary Get the seconds of the given date.
 *
 * @description
 * Get the seconds of the given date.
 *
 * @param date - The given date
 *
 * @returns The seconds
 *
 * @example
 * // Get the seconds of 29 February 2012 11:45:05.123:
 * const result = getSeconds(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 5
 */
function getSeconds(date) {
  return (0, _toDate.toDate)(date).getSeconds();
}

// Fallback for modularized imports:
var _default = exports.default = getSeconds;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/getTime.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getTime = getTime;
var _toDate = require("./toDate.js");
/**
 * @name getTime
 * @category Timestamp Helpers
 * @summary Get the milliseconds timestamp of the given date.
 *
 * @description
 * Get the milliseconds timestamp of the given date.
 *
 * @param date - The given date
 *
 * @returns The timestamp
 *
 * @example
 * // Get the timestamp of 29 February 2012 11:45:05.123:
 * const result = getTime(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 1330515905123
 */
function getTime(date) {
  return +(0, _toDate.toDate)(date);
}

// Fallback for modularized imports:
var _default = exports.default = getTime;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/getUnixTime.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getUnixTime = getUnixTime;
var _toDate = require("./toDate.js");
/**
 * @name getUnixTime
 * @category Timestamp Helpers
 * @summary Get the seconds timestamp of the given date.
 *
 * @description
 * Get the seconds timestamp of the given date.
 *
 * @param date - The given date
 *
 * @returns The timestamp
 *
 * @example
 * // Get the timestamp of 29 February 2012 11:45:05 CET:
 * const result = getUnixTime(new Date(2012, 1, 29, 11, 45, 5))
 * //=> 1330512305
 */
function getUnixTime(date) {
  return Math.trunc(+(0, _toDate.toDate)(date) / 1000);
}

// Fallback for modularized imports:
var _default = exports.default = getUnixTime;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/getWeekOfMonth.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getWeekOfMonth = getWeekOfMonth;
var _defaultOptions = require("./_lib/defaultOptions.js");
var _getDate = require("./getDate.js");
var _getDay = require("./getDay.js");
var _startOfMonth = require("./startOfMonth.js");
var _toDate = require("./toDate.js");
/**
 * The {@link getWeekOfMonth} function options.
 */

/**
 * @name getWeekOfMonth
 * @category Week Helpers
 * @summary Get the week of the month of the given date.
 *
 * @description
 * Get the week of the month of the given date.
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The week of month
 *
 * @example
 * // Which week of the month is 9 November 2017?
 * const result = getWeekOfMonth(new Date(2017, 10, 9))
 * //=> 2
 */
function getWeekOfMonth(date, options) {
  const defaultOptions = (0, _defaultOptions.getDefaultOptions)();
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
  const currentDayOfMonth = (0, _getDate.getDate)((0, _toDate.toDate)(date, options?.in));
  if (isNaN(currentDayOfMonth)) return NaN;
  const startWeekDay = (0, _getDay.getDay)((0, _startOfMonth.startOfMonth)(date, options));
  let lastDayOfFirstWeek = weekStartsOn - startWeekDay;
  if (lastDayOfFirstWeek <= 0) lastDayOfFirstWeek += 7;
  const remainingDaysAfterFirstWeek = currentDayOfMonth - lastDayOfFirstWeek;
  return Math.ceil(remainingDaysAfterFirstWeek / 7) + 1;
}

// Fallback for modularized imports:
var _default = exports.default = getWeekOfMonth;
},{"./_lib/defaultOptions.js":"node_modules/date-fns/_lib/defaultOptions.js","./getDate.js":"node_modules/date-fns/getDate.js","./getDay.js":"node_modules/date-fns/getDay.js","./startOfMonth.js":"node_modules/date-fns/startOfMonth.js","./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/lastDayOfMonth.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.lastDayOfMonth = lastDayOfMonth;
var _toDate = require("./toDate.js");
/**
 * The {@link lastDayOfMonth} function options.
 */

/**
 * @name lastDayOfMonth
 * @category Month Helpers
 * @summary Return the last day of a month for the given date.
 *
 * @description
 * Return the last day of a month for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The last day of a month
 *
 * @example
 * // The last day of a month for 2 September 2014 11:55:00:
 * const result = lastDayOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 00:00:00
 */
function lastDayOfMonth(date, options) {
  const _date = (0, _toDate.toDate)(date, options?.in);
  const month = _date.getMonth();
  _date.setFullYear(_date.getFullYear(), month + 1, 0);
  _date.setHours(0, 0, 0, 0);
  return (0, _toDate.toDate)(_date, options?.in);
}

// Fallback for modularized imports:
var _default = exports.default = lastDayOfMonth;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/getWeeksInMonth.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getWeeksInMonth = getWeeksInMonth;
var _differenceInCalendarWeeks = require("./differenceInCalendarWeeks.js");
var _lastDayOfMonth = require("./lastDayOfMonth.js");
var _startOfMonth = require("./startOfMonth.js");
var _toDate = require("./toDate.js");
/**
 * The {@link getWeeksInMonth} function options.
 */

/**
 * @name getWeeksInMonth
 * @category Week Helpers
 * @summary Get the number of calendar weeks a month spans.
 *
 * @description
 * Get the number of calendar weeks the month in the given date spans.
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The number of calendar weeks
 *
 * @example
 * // How many calendar weeks does February 2015 span?
 * const result = getWeeksInMonth(new Date(2015, 1, 8))
 * //=> 4
 *
 * @example
 * // If the week starts on Monday,
 * // how many calendar weeks does July 2017 span?
 * const result = getWeeksInMonth(new Date(2017, 6, 5), { weekStartsOn: 1 })
 * //=> 6
 */
function getWeeksInMonth(date, options) {
  const contextDate = (0, _toDate.toDate)(date, options?.in);
  return (0, _differenceInCalendarWeeks.differenceInCalendarWeeks)((0, _lastDayOfMonth.lastDayOfMonth)(contextDate, options), (0, _startOfMonth.startOfMonth)(contextDate, options), options) + 1;
}

// Fallback for modularized imports:
var _default = exports.default = getWeeksInMonth;
},{"./differenceInCalendarWeeks.js":"node_modules/date-fns/differenceInCalendarWeeks.js","./lastDayOfMonth.js":"node_modules/date-fns/lastDayOfMonth.js","./startOfMonth.js":"node_modules/date-fns/startOfMonth.js","./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/getYear.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getYear = getYear;
var _toDate = require("./toDate.js");
/**
 * The {@link getYear} function options.
 */

/**
 * @name getYear
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The year
 *
 * @example
 * // Which year is 2 July 2014?
 * const result = getYear(new Date(2014, 6, 2))
 * //=> 2014
 */
function getYear(date, options) {
  return (0, _toDate.toDate)(date, options?.in).getFullYear();
}

// Fallback for modularized imports:
var _default = exports.default = getYear;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/hoursToMilliseconds.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.hoursToMilliseconds = hoursToMilliseconds;
var _constants = require("./constants.js");
/**
 * @name hoursToMilliseconds
 * @category  Conversion Helpers
 * @summary Convert hours to milliseconds.
 *
 * @description
 * Convert a number of hours to a full number of milliseconds.
 *
 * @param hours - number of hours to be converted
 *
 * @returns The number of hours converted to milliseconds
 *
 * @example
 * // Convert 2 hours to milliseconds:
 * const result = hoursToMilliseconds(2)
 * //=> 7200000
 */
function hoursToMilliseconds(hours) {
  return Math.trunc(hours * _constants.millisecondsInHour);
}

// Fallback for modularized imports:
var _default = exports.default = hoursToMilliseconds;
},{"./constants.js":"node_modules/date-fns/constants.js"}],"node_modules/date-fns/hoursToMinutes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.hoursToMinutes = hoursToMinutes;
var _constants = require("./constants.js");
/**
 * @name hoursToMinutes
 * @category Conversion Helpers
 * @summary Convert hours to minutes.
 *
 * @description
 * Convert a number of hours to a full number of minutes.
 *
 * @param hours - number of hours to be converted
 *
 * @returns The number of hours converted in minutes
 *
 * @example
 * // Convert 2 hours to minutes:
 * const result = hoursToMinutes(2)
 * //=> 120
 */
function hoursToMinutes(hours) {
  return Math.trunc(hours * _constants.minutesInHour);
}

// Fallback for modularized imports:
var _default = exports.default = hoursToMinutes;
},{"./constants.js":"node_modules/date-fns/constants.js"}],"node_modules/date-fns/hoursToSeconds.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.hoursToSeconds = hoursToSeconds;
var _constants = require("./constants.js");
/**
 * @name hoursToSeconds
 * @category Conversion Helpers
 * @summary Convert hours to seconds.
 *
 * @description
 * Convert a number of hours to a full number of seconds.
 *
 * @param hours - The number of hours to be converted
 *
 * @returns The number of hours converted in seconds
 *
 * @example
 * // Convert 2 hours to seconds:
 * const result = hoursToSeconds(2)
 * //=> 7200
 */
function hoursToSeconds(hours) {
  return Math.trunc(hours * _constants.secondsInHour);
}

// Fallback for modularized imports:
var _default = exports.default = hoursToSeconds;
},{"./constants.js":"node_modules/date-fns/constants.js"}],"node_modules/date-fns/interval.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.interval = interval;
var _normalizeDates = require("./_lib/normalizeDates.js");
/**
 * The {@link interval} function options.
 */

/**
 * The {@link interval} function result type. It resolves the proper data type.
 * It uses the first argument date object type, starting from the start argument,
 * then the end interval date. If a context function is passed, it uses the context
 * function return type.
 */

/**
 * @name interval
 * @category Interval Helpers
 * @summary Creates an interval object and validates its values.
 *
 * @description
 * Creates a normalized interval object and validates its values. If the interval is invalid, an exception is thrown.
 *
 * @typeParam StartDate - Start date type.
 * @typeParam EndDate - End date type.
 * @typeParam Options - Options type.
 *
 * @param start - The start of the interval.
 * @param end - The end of the interval.
 * @param options - The options object.
 *
 * @throws `Start date is invalid` when `start` is invalid.
 * @throws `End date is invalid` when `end` is invalid.
 * @throws `End date must be after start date` when end is before `start` and `options.assertPositive` is true.
 *
 * @returns The normalized and validated interval object.
 */
function interval(start, end, options) {
  const [_start, _end] = (0, _normalizeDates.normalizeDates)(options?.in, start, end);
  if (isNaN(+_start)) throw new TypeError("Start date is invalid");
  if (isNaN(+_end)) throw new TypeError("End date is invalid");
  if (options?.assertPositive && +_start > +_end) throw new TypeError("End date must be after start date");
  return {
    start: _start,
    end: _end
  };
}

// Fallback for modularized imports:
var _default = exports.default = interval;
},{"./_lib/normalizeDates.js":"node_modules/date-fns/_lib/normalizeDates.js"}],"node_modules/date-fns/intervalToDuration.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.intervalToDuration = intervalToDuration;
var _normalizeInterval = require("./_lib/normalizeInterval.js");
var _add = require("./add.js");
var _differenceInDays = require("./differenceInDays.js");
var _differenceInHours = require("./differenceInHours.js");
var _differenceInMinutes = require("./differenceInMinutes.js");
var _differenceInMonths = require("./differenceInMonths.js");
var _differenceInSeconds = require("./differenceInSeconds.js");
var _differenceInYears = require("./differenceInYears.js");
/**
 * The {@link intervalToDuration} function options.
 */

/**
 * @name intervalToDuration
 * @category Common Helpers
 * @summary Convert interval to duration
 *
 * @description
 * Convert an interval object to a duration object.
 *
 * @param interval - The interval to convert to duration
 * @param options - The context options
 *
 * @returns The duration object
 *
 * @example
 * // Get the duration between January 15, 1929 and April 4, 1968.
 * intervalToDuration({
 *   start: new Date(1929, 0, 15, 12, 0, 0),
 *   end: new Date(1968, 3, 4, 19, 5, 0)
 * });
 * //=> { years: 39, months: 2, days: 20, hours: 7, minutes: 5, seconds: 0 }
 */
function intervalToDuration(interval, options) {
  const {
    start,
    end
  } = (0, _normalizeInterval.normalizeInterval)(options?.in, interval);
  const duration = {};
  const years = (0, _differenceInYears.differenceInYears)(end, start);
  if (years) duration.years = years;
  const remainingMonths = (0, _add.add)(start, {
    years: duration.years
  });
  const months = (0, _differenceInMonths.differenceInMonths)(end, remainingMonths);
  if (months) duration.months = months;
  const remainingDays = (0, _add.add)(remainingMonths, {
    months: duration.months
  });
  const days = (0, _differenceInDays.differenceInDays)(end, remainingDays);
  if (days) duration.days = days;
  const remainingHours = (0, _add.add)(remainingDays, {
    days: duration.days
  });
  const hours = (0, _differenceInHours.differenceInHours)(end, remainingHours);
  if (hours) duration.hours = hours;
  const remainingMinutes = (0, _add.add)(remainingHours, {
    hours: duration.hours
  });
  const minutes = (0, _differenceInMinutes.differenceInMinutes)(end, remainingMinutes);
  if (minutes) duration.minutes = minutes;
  const remainingSeconds = (0, _add.add)(remainingMinutes, {
    minutes: duration.minutes
  });
  const seconds = (0, _differenceInSeconds.differenceInSeconds)(end, remainingSeconds);
  if (seconds) duration.seconds = seconds;
  return duration;
}

// Fallback for modularized imports:
var _default = exports.default = intervalToDuration;
},{"./_lib/normalizeInterval.js":"node_modules/date-fns/_lib/normalizeInterval.js","./add.js":"node_modules/date-fns/add.js","./differenceInDays.js":"node_modules/date-fns/differenceInDays.js","./differenceInHours.js":"node_modules/date-fns/differenceInHours.js","./differenceInMinutes.js":"node_modules/date-fns/differenceInMinutes.js","./differenceInMonths.js":"node_modules/date-fns/differenceInMonths.js","./differenceInSeconds.js":"node_modules/date-fns/differenceInSeconds.js","./differenceInYears.js":"node_modules/date-fns/differenceInYears.js"}],"node_modules/date-fns/intlFormat.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.intlFormat = intlFormat;
var _toDate = require("./toDate.js");
/**
 * The locale string (see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
 * @deprecated
 *
 * [TODO] Remove in v4
 */

/**
 * The format options (see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options)
 */

/**
 * The locale options.
 */

/**
 * @name intlFormat
 * @category Common Helpers
 * @summary Format the date with Intl.DateTimeFormat (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat).
 *
 * @description
 * Return the formatted date string in the given format.
 * The method uses [`Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) inside.
 * formatOptions are the same as [`Intl.DateTimeFormat` options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#using_options)
 *
 * > ⚠️ Please note that before Node version 13.0.0, only the locale data for en-US is available by default.
 *
 * @param date - The date to format
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 *
 * @example
 * // Represent 4 October 2019 in middle-endian format:
 * const result = intlFormat(new Date(2019, 9, 4, 12, 30, 13, 456))
 * //=> 10/4/2019
 */

/**
 * @param date - The date to format
 * @param localeOptions - An object with locale
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 *
 * @example
 * // Represent 4 October 2019 in Korean.
 * // Convert the date with locale's options.
 * const result = intlFormat(new Date(2019, 9, 4, 12, 30, 13, 456), {
 *   locale: 'ko-KR',
 * })
 * //=> 2019. 10. 4.
 */

/**
 * @param date - The date to format
 * @param formatOptions - The format options
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 *
 * @example
 * // Represent 4 October 2019.
 * // Convert the date with format's options.
 * const result = intlFormat.default(new Date(2019, 9, 4, 12, 30, 13, 456), {
 *   year: 'numeric',
 *   month: 'numeric',
 *   day: 'numeric',
 *   hour: 'numeric',
 * })
 * //=> 10/4/2019, 12 PM
 */

/**
 * @param date - The date to format
 * @param formatOptions - The format options
 * @param localeOptions - An object with locale
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 *
 * @example
 * // Represent 4 October 2019 in German.
 * // Convert the date with format's options and locale's options.
 * const result = intlFormat(new Date(2019, 9, 4, 12, 30, 13, 456), {
 *   weekday: 'long',
 *   year: 'numeric',
 *   month: 'long',
 *   day: 'numeric',
 * }, {
 *   locale: 'de-DE',
 * })
 * //=> Freitag, 4. Oktober 2019
 */

function intlFormat(date, formatOrLocale, localeOptions) {
  let formatOptions;
  if (isFormatOptions(formatOrLocale)) {
    formatOptions = formatOrLocale;
  } else {
    localeOptions = formatOrLocale;
  }
  return new Intl.DateTimeFormat(localeOptions?.locale, formatOptions).format((0, _toDate.toDate)(date));
}
function isFormatOptions(opts) {
  return opts !== undefined && !("locale" in opts);
}

// Fallback for modularized imports:
var _default = exports.default = intlFormat;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/intlFormatDistance.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.intlFormatDistance = intlFormatDistance;
var _normalizeDates = require("./_lib/normalizeDates.js");
var _constants = require("./constants.js");
var _differenceInCalendarDays = require("./differenceInCalendarDays.js");
var _differenceInCalendarMonths = require("./differenceInCalendarMonths.js");
var _differenceInCalendarQuarters = require("./differenceInCalendarQuarters.js");
var _differenceInCalendarWeeks = require("./differenceInCalendarWeeks.js");
var _differenceInCalendarYears = require("./differenceInCalendarYears.js");
var _differenceInHours = require("./differenceInHours.js");
var _differenceInMinutes = require("./differenceInMinutes.js");
var _differenceInSeconds = require("./differenceInSeconds.js");
/**
 * The {@link intlFormatDistance} function options.
 */

/**
 * The unit used to format the distance in {@link intlFormatDistance}.
 */

/**
 * @name intlFormatDistance
 * @category Common Helpers
 * @summary Formats distance between two dates in a human-readable format
 * @description
 * The function calculates the difference between two dates and formats it as a human-readable string.
 *
 * The function will pick the most appropriate unit depending on the distance between dates. For example, if the distance is a few hours, it might return `x hours`. If the distance is a few months, it might return `x months`.
 *
 * You can also specify a unit to force using it regardless of the distance to get a result like `123456 hours`.
 *
 * See the table below for the unit picking logic:
 *
 * | Distance between dates | Result (past)  | Result (future) |
 * | ---------------------- | -------------- | --------------- |
 * | 0 seconds              | now            | now             |
 * | 1-59 seconds           | X seconds ago  | in X seconds    |
 * | 1-59 minutes           | X minutes ago  | in X minutes    |
 * | 1-23 hours             | X hours ago    | in X hours      |
 * | 1 day                  | yesterday      | tomorrow        |
 * | 2-6 days               | X days ago     | in X days       |
 * | 7 days                 | last week      | next week       |
 * | 8 days-1 month         | X weeks ago    | in X weeks      |
 * | 1 month                | last month     | next month      |
 * | 2-3 months             | X months ago   | in X months     |
 * | 1 quarter              | last quarter   | next quarter    |
 * | 2-3 quarters           | X quarters ago | in X quarters   |
 * | 1 year                 | last year      | next year       |
 * | 2+ years               | X years ago    | in X years      |
 *
 * @param laterDate - The date
 * @param earlierDate - The date to compare with.
 * @param options - An object with options.
 * See MDN for details [Locale identification and negotiation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation)
 * The narrow one could be similar to the short one for some locales.
 *
 * @returns The distance in words according to language-sensitive relative time formatting.
 *
 * @throws `date` must not be Invalid Date
 * @throws `baseDate` must not be Invalid Date
 * @throws `options.unit` must not be invalid Unit
 * @throws `options.locale` must not be invalid locale
 * @throws `options.localeMatcher` must not be invalid localeMatcher
 * @throws `options.numeric` must not be invalid numeric
 * @throws `options.style` must not be invalid style
 *
 * @example
 * // What is the distance between the dates when the fist date is after the second?
 * intlFormatDistance(
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   new Date(1986, 3, 4, 10, 30, 0)
 * )
 * //=> 'in 1 hour'
 *
 * // What is the distance between the dates when the fist date is before the second?
 * intlFormatDistance(
 *   new Date(1986, 3, 4, 10, 30, 0),
 *   new Date(1986, 3, 4, 11, 30, 0)
 * )
 * //=> '1 hour ago'
 *
 * @example
 * // Use the unit option to force the function to output the result in quarters. Without setting it, the example would return "next year"
 * intlFormatDistance(
 *   new Date(1987, 6, 4, 10, 30, 0),
 *   new Date(1986, 3, 4, 10, 30, 0),
 *   { unit: 'quarter' }
 * )
 * //=> 'in 5 quarters'
 *
 * @example
 * // Use the locale option to get the result in Spanish. Without setting it, the example would return "in 1 hour".
 * intlFormatDistance(
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   new Date(1986, 3, 4, 10, 30, 0),
 *   { locale: 'es' }
 * )
 * //=> 'dentro de 1 hora'
 *
 * @example
 * // Use the numeric option to force the function to use numeric values. Without setting it, the example would return "tomorrow".
 * intlFormatDistance(
 *   new Date(1986, 3, 5, 11, 30, 0),
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   { numeric: 'always' }
 * )
 * //=> 'in 1 day'
 *
 * @example
 * // Use the style option to force the function to use short values. Without setting it, the example would return "in 2 years".
 * intlFormatDistance(
 *   new Date(1988, 3, 4, 11, 30, 0),
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   { style: 'short' }
 * )
 * //=> 'in 2 yr'
 */
function intlFormatDistance(laterDate, earlierDate, options) {
  let value = 0;
  let unit;
  const [laterDate_, earlierDate_] = (0, _normalizeDates.normalizeDates)(options?.in, laterDate, earlierDate);
  if (!options?.unit) {
    // Get the unit based on diffInSeconds calculations if no unit is specified
    const diffInSeconds = (0, _differenceInSeconds.differenceInSeconds)(laterDate_, earlierDate_); // The smallest unit

    if (Math.abs(diffInSeconds) < _constants.secondsInMinute) {
      value = (0, _differenceInSeconds.differenceInSeconds)(laterDate_, earlierDate_);
      unit = "second";
    } else if (Math.abs(diffInSeconds) < _constants.secondsInHour) {
      value = (0, _differenceInMinutes.differenceInMinutes)(laterDate_, earlierDate_);
      unit = "minute";
    } else if (Math.abs(diffInSeconds) < _constants.secondsInDay && Math.abs((0, _differenceInCalendarDays.differenceInCalendarDays)(laterDate_, earlierDate_)) < 1) {
      value = (0, _differenceInHours.differenceInHours)(laterDate_, earlierDate_);
      unit = "hour";
    } else if (Math.abs(diffInSeconds) < _constants.secondsInWeek && (value = (0, _differenceInCalendarDays.differenceInCalendarDays)(laterDate_, earlierDate_)) && Math.abs(value) < 7) {
      unit = "day";
    } else if (Math.abs(diffInSeconds) < _constants.secondsInMonth) {
      value = (0, _differenceInCalendarWeeks.differenceInCalendarWeeks)(laterDate_, earlierDate_);
      unit = "week";
    } else if (Math.abs(diffInSeconds) < _constants.secondsInQuarter) {
      value = (0, _differenceInCalendarMonths.differenceInCalendarMonths)(laterDate_, earlierDate_);
      unit = "month";
    } else if (Math.abs(diffInSeconds) < _constants.secondsInYear) {
      if ((0, _differenceInCalendarQuarters.differenceInCalendarQuarters)(laterDate_, earlierDate_) < 4) {
        // To filter out cases that are less than a year but match 4 quarters
        value = (0, _differenceInCalendarQuarters.differenceInCalendarQuarters)(laterDate_, earlierDate_);
        unit = "quarter";
      } else {
        value = (0, _differenceInCalendarYears.differenceInCalendarYears)(laterDate_, earlierDate_);
        unit = "year";
      }
    } else {
      value = (0, _differenceInCalendarYears.differenceInCalendarYears)(laterDate_, earlierDate_);
      unit = "year";
    }
  } else {
    // Get the value if unit is specified
    unit = options?.unit;
    if (unit === "second") {
      value = (0, _differenceInSeconds.differenceInSeconds)(laterDate_, earlierDate_);
    } else if (unit === "minute") {
      value = (0, _differenceInMinutes.differenceInMinutes)(laterDate_, earlierDate_);
    } else if (unit === "hour") {
      value = (0, _differenceInHours.differenceInHours)(laterDate_, earlierDate_);
    } else if (unit === "day") {
      value = (0, _differenceInCalendarDays.differenceInCalendarDays)(laterDate_, earlierDate_);
    } else if (unit === "week") {
      value = (0, _differenceInCalendarWeeks.differenceInCalendarWeeks)(laterDate_, earlierDate_);
    } else if (unit === "month") {
      value = (0, _differenceInCalendarMonths.differenceInCalendarMonths)(laterDate_, earlierDate_);
    } else if (unit === "quarter") {
      value = (0, _differenceInCalendarQuarters.differenceInCalendarQuarters)(laterDate_, earlierDate_);
    } else if (unit === "year") {
      value = (0, _differenceInCalendarYears.differenceInCalendarYears)(laterDate_, earlierDate_);
    }
  }
  const rtf = new Intl.RelativeTimeFormat(options?.locale, {
    numeric: "auto",
    ...options
  });
  return rtf.format(value, unit);
}

// Fallback for modularized imports:
var _default = exports.default = intlFormatDistance;
},{"./_lib/normalizeDates.js":"node_modules/date-fns/_lib/normalizeDates.js","./constants.js":"node_modules/date-fns/constants.js","./differenceInCalendarDays.js":"node_modules/date-fns/differenceInCalendarDays.js","./differenceInCalendarMonths.js":"node_modules/date-fns/differenceInCalendarMonths.js","./differenceInCalendarQuarters.js":"node_modules/date-fns/differenceInCalendarQuarters.js","./differenceInCalendarWeeks.js":"node_modules/date-fns/differenceInCalendarWeeks.js","./differenceInCalendarYears.js":"node_modules/date-fns/differenceInCalendarYears.js","./differenceInHours.js":"node_modules/date-fns/differenceInHours.js","./differenceInMinutes.js":"node_modules/date-fns/differenceInMinutes.js","./differenceInSeconds.js":"node_modules/date-fns/differenceInSeconds.js"}],"node_modules/date-fns/isAfter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.isAfter = isAfter;
var _toDate = require("./toDate.js");
/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @param date - The date that should be after the other one to return true
 * @param dateToCompare - The date to compare with
 *
 * @returns The first date is after the second date
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * const result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */
function isAfter(date, dateToCompare) {
  return +(0, _toDate.toDate)(date) > +(0, _toDate.toDate)(dateToCompare);
}

// Fallback for modularized imports:
var _default = exports.default = isAfter;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/isBefore.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.isBefore = isBefore;
var _toDate = require("./toDate.js");
/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @param date - The date that should be before the other one to return true
 * @param dateToCompare - The date to compare with
 *
 * @returns The first date is before the second date
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * const result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */
function isBefore(date, dateToCompare) {
  return +(0, _toDate.toDate)(date) < +(0, _toDate.toDate)(dateToCompare);
}

// Fallback for modularized imports:
var _default = exports.default = isBefore;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/isEqual.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.isEqual = isEqual;
var _toDate = require("./toDate.js");
/**
 * @name isEqual
 * @category Common Helpers
 * @summary Are the given dates equal?
 *
 * @description
 * Are the given dates equal?
 *
 * @param dateLeft - The first date to compare
 * @param dateRight - The second date to compare
 *
 * @returns The dates are equal
 *
 * @example
 * // Are 2 July 2014 06:30:45.000 and 2 July 2014 06:30:45.500 equal?
 * const result = isEqual(
 *   new Date(2014, 6, 2, 6, 30, 45, 0),
 *   new Date(2014, 6, 2, 6, 30, 45, 500)
 * )
 * //=> false
 */
function isEqual(leftDate, rightDate) {
  return +(0, _toDate.toDate)(leftDate) === +(0, _toDate.toDate)(rightDate);
}

// Fallback for modularized imports:
var _default = exports.default = isEqual;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/isExists.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.isExists = isExists;
/**
 * @name isExists
 * @category Common Helpers
 * @summary Is the given date exists?
 *
 * @description
 * Checks if the given arguments convert to an existing date.
 *
 * @param year - The year of the date to check
 * @param month - The month of the date to check
 * @param day - The day of the date to check
 *
 * @returns `true` if the date exists
 *
 * @example
 * // For the valid date:
 * const result = isExists(2018, 0, 31)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isExists(2018, 1, 31)
 * //=> false
 */
function isExists(year, month, day) {
  const date = new Date(year, month, day);
  return date.getFullYear() === year && date.getMonth() === month && date.getDate() === day;
}

// Fallback for modularized imports:
var _default = exports.default = isExists;
},{}],"node_modules/date-fns/isFirstDayOfMonth.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.isFirstDayOfMonth = isFirstDayOfMonth;
var _toDate = require("./toDate.js");
/**
 * The {@link isFirstDayOfMonth} function options.
 */

/**
 * @name isFirstDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the first day of a month?
 *
 * @description
 * Is the given date the first day of a month?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is the first day of a month
 *
 * @example
 * // Is 1 September 2014 the first day of a month?
 * const result = isFirstDayOfMonth(new Date(2014, 8, 1))
 * //=> true
 */
function isFirstDayOfMonth(date, options) {
  return (0, _toDate.toDate)(date, options?.in).getDate() === 1;
}

// Fallback for modularized imports:
var _default = exports.default = isFirstDayOfMonth;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/isFriday.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.isFriday = isFriday;
var _toDate = require("./toDate.js");
/**
 * The {@link isFriday} function options.
 */

/**
 * @name isFriday
 * @category Weekday Helpers
 * @summary Is the given date Friday?
 *
 * @description
 * Is the given date Friday?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is Friday
 *
 * @example
 * // Is 26 September 2014 Friday?
 * const result = isFriday(new Date(2014, 8, 26))
 * //=> true
 */
function isFriday(date, options) {
  return (0, _toDate.toDate)(date, options?.in).getDay() === 5;
}

// Fallback for modularized imports:
var _default = exports.default = isFriday;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/isFuture.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.isFuture = isFuture;
var _toDate = require("./toDate.js");
/**
 * @name isFuture
 * @category Common Helpers
 * @summary Is the given date in the future?
 * @pure false
 *
 * @description
 * Is the given date in the future?
 *
 * @param date - The date to check
 *
 * @returns The date is in the future
 *
 * @example
 * // If today is 6 October 2014, is 31 December 2014 in the future?
 * const result = isFuture(new Date(2014, 11, 31))
 * //=> true
 */
function isFuture(date) {
  return +(0, _toDate.toDate)(date) > Date.now();
}

// Fallback for modularized imports:
var _default = exports.default = isFuture;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/transpose.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.transpose = transpose;
var _constructFrom = require("./constructFrom.js");
/**
 * @name transpose
 * @category Generic Helpers
 * @summary Transpose the date to the given constructor.
 *
 * @description
 * The function transposes the date to the given constructor. It helps you
 * to transpose the date in the system time zone to say `UTCDate` or any other
 * date extension.
 *
 * @typeParam InputDate - The input `Date` type derived from the passed argument.
 * @typeParam ResultDate - The result `Date` type derived from the passed constructor.
 *
 * @param date - The date to use values from
 * @param constructor - The date constructor to use
 *
 * @returns Date transposed to the given constructor
 *
 * @example
 * // Create July 10, 2022 00:00 in locale time zone
 * const date = new Date(2022, 6, 10)
 * //=> 'Sun Jul 10 2022 00:00:00 GMT+0800 (Singapore Standard Time)'
 *
 * @example
 * // Transpose the date to July 10, 2022 00:00 in UTC
 * transpose(date, UTCDate)
 * //=> 'Sun Jul 10 2022 00:00:00 GMT+0000 (Coordinated Universal Time)'
 */
function transpose(date, constructor) {
  const date_ = isConstructor(constructor) ? new constructor(0) : (0, _constructFrom.constructFrom)(constructor, 0);
  date_.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
  date_.setHours(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
  return date_;
}
function isConstructor(constructor) {
  return typeof constructor === "function" && constructor.prototype?.constructor === constructor;
}

// Fallback for modularized imports:
var _default = exports.default = transpose;
},{"./constructFrom.js":"node_modules/date-fns/constructFrom.js"}],"node_modules/date-fns/parse/_lib/Setter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValueSetter = exports.Setter = exports.DateTimezoneSetter = void 0;
var _constructFrom = require("../../constructFrom.js");
var _transpose = require("../../transpose.js");
const TIMEZONE_UNIT_PRIORITY = 10;
class Setter {
  subPriority = 0;
  validate(_utcDate, _options) {
    return true;
  }
}
exports.Setter = Setter;
class ValueSetter extends Setter {
  constructor(value, validateValue, setValue, priority, subPriority) {
    super();
    this.value = value;
    this.validateValue = validateValue;
    this.setValue = setValue;
    this.priority = priority;
    if (subPriority) {
      this.subPriority = subPriority;
    }
  }
  validate(date, options) {
    return this.validateValue(date, this.value, options);
  }
  set(date, flags, options) {
    return this.setValue(date, flags, this.value, options);
  }
}
exports.ValueSetter = ValueSetter;
class DateTimezoneSetter extends Setter {
  priority = TIMEZONE_UNIT_PRIORITY;
  subPriority = -1;
  constructor(context, reference) {
    super();
    this.context = context || (date => (0, _constructFrom.constructFrom)(reference, date));
  }
  set(date, flags) {
    if (flags.timestampIsSet) return date;
    return (0, _constructFrom.constructFrom)(date, (0, _transpose.transpose)(date, this.context));
  }
}
exports.DateTimezoneSetter = DateTimezoneSetter;
},{"../../constructFrom.js":"node_modules/date-fns/constructFrom.js","../../transpose.js":"node_modules/date-fns/transpose.js"}],"node_modules/date-fns/parse/_lib/Parser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Parser = void 0;
var _Setter = require("./Setter.js");
class Parser {
  run(dateString, token, match, options) {
    const result = this.parse(dateString, token, match, options);
    if (!result) {
      return null;
    }
    return {
      setter: new _Setter.ValueSetter(result.value, this.validate, this.set, this.priority, this.subPriority),
      rest: result.rest
    };
  }
  validate(_utcDate, _value, _options) {
    return true;
  }
}
exports.Parser = Parser;
},{"./Setter.js":"node_modules/date-fns/parse/_lib/Setter.js"}],"node_modules/date-fns/parse/_lib/parsers/EraParser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EraParser = void 0;
var _Parser = require("../Parser.js");
class EraParser extends _Parser.Parser {
  priority = 140;
  parse(dateString, token, match) {
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return match.era(dateString, {
          width: "abbreviated"
        }) || match.era(dateString, {
          width: "narrow"
        });

      // A, B
      case "GGGGG":
        return match.era(dateString, {
          width: "narrow"
        });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return match.era(dateString, {
          width: "wide"
        }) || match.era(dateString, {
          width: "abbreviated"
        }) || match.era(dateString, {
          width: "narrow"
        });
    }
  }
  set(date, flags, value) {
    flags.era = value;
    date.setFullYear(value, 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["R", "u", "t", "T"];
}
exports.EraParser = EraParser;
},{"../Parser.js":"node_modules/date-fns/parse/_lib/Parser.js"}],"node_modules/date-fns/parse/_lib/constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timezonePatterns = exports.numericPatterns = void 0;
const numericPatterns = exports.numericPatterns = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59

  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999

  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/ // 0 to 9999, -0 to -9999
};
const timezonePatterns = exports.timezonePatterns = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
},{}],"node_modules/date-fns/parse/_lib/utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dayPeriodEnumToHours = dayPeriodEnumToHours;
exports.isLeapYearIndex = isLeapYearIndex;
exports.mapValue = mapValue;
exports.normalizeTwoDigitYear = normalizeTwoDigitYear;
exports.parseAnyDigitsSigned = parseAnyDigitsSigned;
exports.parseNDigits = parseNDigits;
exports.parseNDigitsSigned = parseNDigitsSigned;
exports.parseNumericPattern = parseNumericPattern;
exports.parseTimezonePattern = parseTimezonePattern;
var _constants = require("../../constants.js");
var _constants2 = require("./constants.js");
function mapValue(parseFnResult, mapFn) {
  if (!parseFnResult) {
    return parseFnResult;
  }
  return {
    value: mapFn(parseFnResult.value),
    rest: parseFnResult.rest
  };
}
function parseNumericPattern(pattern, dateString) {
  const matchResult = dateString.match(pattern);
  if (!matchResult) {
    return null;
  }
  return {
    value: parseInt(matchResult[0], 10),
    rest: dateString.slice(matchResult[0].length)
  };
}
function parseTimezonePattern(pattern, dateString) {
  const matchResult = dateString.match(pattern);
  if (!matchResult) {
    return null;
  }

  // Input is 'Z'
  if (matchResult[0] === "Z") {
    return {
      value: 0,
      rest: dateString.slice(1)
    };
  }
  const sign = matchResult[1] === "+" ? 1 : -1;
  const hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
  const minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
  const seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
  return {
    value: sign * (hours * _constants.millisecondsInHour + minutes * _constants.millisecondsInMinute + seconds * _constants.millisecondsInSecond),
    rest: dateString.slice(matchResult[0].length)
  };
}
function parseAnyDigitsSigned(dateString) {
  return parseNumericPattern(_constants2.numericPatterns.anyDigitsSigned, dateString);
}
function parseNDigits(n, dateString) {
  switch (n) {
    case 1:
      return parseNumericPattern(_constants2.numericPatterns.singleDigit, dateString);
    case 2:
      return parseNumericPattern(_constants2.numericPatterns.twoDigits, dateString);
    case 3:
      return parseNumericPattern(_constants2.numericPatterns.threeDigits, dateString);
    case 4:
      return parseNumericPattern(_constants2.numericPatterns.fourDigits, dateString);
    default:
      return parseNumericPattern(new RegExp("^\\d{1," + n + "}"), dateString);
  }
}
function parseNDigitsSigned(n, dateString) {
  switch (n) {
    case 1:
      return parseNumericPattern(_constants2.numericPatterns.singleDigitSigned, dateString);
    case 2:
      return parseNumericPattern(_constants2.numericPatterns.twoDigitsSigned, dateString);
    case 3:
      return parseNumericPattern(_constants2.numericPatterns.threeDigitsSigned, dateString);
    case 4:
      return parseNumericPattern(_constants2.numericPatterns.fourDigitsSigned, dateString);
    default:
      return parseNumericPattern(new RegExp("^-?\\d{1," + n + "}"), dateString);
  }
}
function dayPeriodEnumToHours(dayPeriod) {
  switch (dayPeriod) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function normalizeTwoDigitYear(twoDigitYear, currentYear) {
  const isCommonEra = currentYear > 0;
  // Absolute number of the current year:
  // 1 -> 1 AC
  // 0 -> 1 BC
  // -1 -> 2 BC
  const absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
  let result;
  if (absCurrentYear <= 50) {
    result = twoDigitYear || 100;
  } else {
    const rangeEnd = absCurrentYear + 50;
    const rangeEndCentury = Math.trunc(rangeEnd / 100) * 100;
    const isPreviousCentury = twoDigitYear >= rangeEnd % 100;
    result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
  }
  return isCommonEra ? result : 1 - result;
}
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
},{"../../constants.js":"node_modules/date-fns/constants.js","./constants.js":"node_modules/date-fns/parse/_lib/constants.js"}],"node_modules/date-fns/parse/_lib/parsers/YearParser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YearParser = void 0;
var _Parser = require("../Parser.js");
var _utils = require("../utils.js");
// From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns
// | Year     |     y | yy |   yyy |  yyyy | yyyyy |
// |----------|-------|----|-------|-------|-------|
// | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
// | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
// | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
// | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
// | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
class YearParser extends _Parser.Parser {
  priority = 130;
  incompatibleTokens = ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"];
  parse(dateString, token, match) {
    const valueCallback = year => ({
      year,
      isTwoDigitYear: token === "yy"
    });
    switch (token) {
      case "y":
        return (0, _utils.mapValue)((0, _utils.parseNDigits)(4, dateString), valueCallback);
      case "yo":
        return (0, _utils.mapValue)(match.ordinalNumber(dateString, {
          unit: "year"
        }), valueCallback);
      default:
        return (0, _utils.mapValue)((0, _utils.parseNDigits)(token.length, dateString), valueCallback);
    }
  }
  validate(_date, value) {
    return value.isTwoDigitYear || value.year > 0;
  }
  set(date, flags, value) {
    const currentYear = date.getFullYear();
    if (value.isTwoDigitYear) {
      const normalizedTwoDigitYear = (0, _utils.normalizeTwoDigitYear)(value.year, currentYear);
      date.setFullYear(normalizedTwoDigitYear, 0, 1);
      date.setHours(0, 0, 0, 0);
      return date;
    }
    const year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
    date.setFullYear(year, 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
}
exports.YearParser = YearParser;
},{"../Parser.js":"node_modules/date-fns/parse/_lib/Parser.js","../utils.js":"node_modules/date-fns/parse/_lib/utils.js"}],"node_modules/date-fns/parse/_lib/parsers/LocalWeekYearParser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocalWeekYearParser = void 0;
var _getWeekYear = require("../../../getWeekYear.js");
var _startOfWeek = require("../../../startOfWeek.js");
var _Parser = require("../Parser.js");
var _utils = require("../utils.js");
// Local week-numbering year
class LocalWeekYearParser extends _Parser.Parser {
  priority = 130;
  parse(dateString, token, match) {
    const valueCallback = year => ({
      year,
      isTwoDigitYear: token === "YY"
    });
    switch (token) {
      case "Y":
        return (0, _utils.mapValue)((0, _utils.parseNDigits)(4, dateString), valueCallback);
      case "Yo":
        return (0, _utils.mapValue)(match.ordinalNumber(dateString, {
          unit: "year"
        }), valueCallback);
      default:
        return (0, _utils.mapValue)((0, _utils.parseNDigits)(token.length, dateString), valueCallback);
    }
  }
  validate(_date, value) {
    return value.isTwoDigitYear || value.year > 0;
  }
  set(date, flags, value, options) {
    const currentYear = (0, _getWeekYear.getWeekYear)(date, options);
    if (value.isTwoDigitYear) {
      const normalizedTwoDigitYear = (0, _utils.normalizeTwoDigitYear)(value.year, currentYear);
      date.setFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate);
      date.setHours(0, 0, 0, 0);
      return (0, _startOfWeek.startOfWeek)(date, options);
    }
    const year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
    date.setFullYear(year, 0, options.firstWeekContainsDate);
    date.setHours(0, 0, 0, 0);
    return (0, _startOfWeek.startOfWeek)(date, options);
  }
  incompatibleTokens = ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"];
}
exports.LocalWeekYearParser = LocalWeekYearParser;
},{"../../../getWeekYear.js":"node_modules/date-fns/getWeekYear.js","../../../startOfWeek.js":"node_modules/date-fns/startOfWeek.js","../Parser.js":"node_modules/date-fns/parse/_lib/Parser.js","../utils.js":"node_modules/date-fns/parse/_lib/utils.js"}],"node_modules/date-fns/parse/_lib/parsers/ISOWeekYearParser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ISOWeekYearParser = void 0;
var _startOfISOWeek = require("../../../startOfISOWeek.js");
var _constructFrom = require("../../../constructFrom.js");
var _Parser = require("../Parser.js");
var _utils = require("../utils.js");
// ISO week-numbering year
class ISOWeekYearParser extends _Parser.Parser {
  priority = 130;
  parse(dateString, token) {
    if (token === "R") {
      return (0, _utils.parseNDigitsSigned)(4, dateString);
    }
    return (0, _utils.parseNDigitsSigned)(token.length, dateString);
  }
  set(date, _flags, value) {
    const firstWeekOfYear = (0, _constructFrom.constructFrom)(date, 0);
    firstWeekOfYear.setFullYear(value, 0, 4);
    firstWeekOfYear.setHours(0, 0, 0, 0);
    return (0, _startOfISOWeek.startOfISOWeek)(firstWeekOfYear);
  }
  incompatibleTokens = ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"];
}
exports.ISOWeekYearParser = ISOWeekYearParser;
},{"../../../startOfISOWeek.js":"node_modules/date-fns/startOfISOWeek.js","../../../constructFrom.js":"node_modules/date-fns/constructFrom.js","../Parser.js":"node_modules/date-fns/parse/_lib/Parser.js","../utils.js":"node_modules/date-fns/parse/_lib/utils.js"}],"node_modules/date-fns/parse/_lib/parsers/ExtendedYearParser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExtendedYearParser = void 0;
var _Parser = require("../Parser.js");
var _utils = require("../utils.js");
class ExtendedYearParser extends _Parser.Parser {
  priority = 130;
  parse(dateString, token) {
    if (token === "u") {
      return (0, _utils.parseNDigitsSigned)(4, dateString);
    }
    return (0, _utils.parseNDigitsSigned)(token.length, dateString);
  }
  set(date, _flags, value) {
    date.setFullYear(value, 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"];
}
exports.ExtendedYearParser = ExtendedYearParser;
},{"../Parser.js":"node_modules/date-fns/parse/_lib/Parser.js","../utils.js":"node_modules/date-fns/parse/_lib/utils.js"}],"node_modules/date-fns/parse/_lib/parsers/QuarterParser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuarterParser = void 0;
var _Parser = require("../Parser.js");
var _utils = require("../utils.js");
class QuarterParser extends _Parser.Parser {
  priority = 120;
  parse(dateString, token, match) {
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
      case "QQ":
        // 01, 02, 03, 04
        return (0, _utils.parseNDigits)(token.length, dateString);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return match.ordinalNumber(dateString, {
          unit: "quarter"
        });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return match.quarter(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.quarter(dateString, {
          width: "narrow",
          context: "formatting"
        });

      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return match.quarter(dateString, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return match.quarter(dateString, {
          width: "wide",
          context: "formatting"
        }) || match.quarter(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.quarter(dateString, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 4;
  }
  set(date, _flags, value) {
    date.setMonth((value - 1) * 3, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"];
}
exports.QuarterParser = QuarterParser;
},{"../Parser.js":"node_modules/date-fns/parse/_lib/Parser.js","../utils.js":"node_modules/date-fns/parse/_lib/utils.js"}],"node_modules/date-fns/parse/_lib/parsers/StandAloneQuarterParser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StandAloneQuarterParser = void 0;
var _Parser = require("../Parser.js");
var _utils = require("../utils.js");
class StandAloneQuarterParser extends _Parser.Parser {
  priority = 120;
  parse(dateString, token, match) {
    switch (token) {
      // 1, 2, 3, 4
      case "q":
      case "qq":
        // 01, 02, 03, 04
        return (0, _utils.parseNDigits)(token.length, dateString);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return match.ordinalNumber(dateString, {
          unit: "quarter"
        });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return match.quarter(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match.quarter(dateString, {
          width: "narrow",
          context: "standalone"
        });

      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return match.quarter(dateString, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return match.quarter(dateString, {
          width: "wide",
          context: "standalone"
        }) || match.quarter(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match.quarter(dateString, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 4;
  }
  set(date, _flags, value) {
    date.setMonth((value - 1) * 3, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"];
}
exports.StandAloneQuarterParser = StandAloneQuarterParser;
},{"../Parser.js":"node_modules/date-fns/parse/_lib/Parser.js","../utils.js":"node_modules/date-fns/parse/_lib/utils.js"}],"node_modules/date-fns/parse/_lib/parsers/MonthParser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MonthParser = void 0;
var _constants = require("../constants.js");
var _Parser = require("../Parser.js");
var _utils = require("../utils.js");
class MonthParser extends _Parser.Parser {
  incompatibleTokens = ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"];
  priority = 110;
  parse(dateString, token, match) {
    const valueCallback = value => value - 1;
    switch (token) {
      // 1, 2, ..., 12
      case "M":
        return (0, _utils.mapValue)((0, _utils.parseNumericPattern)(_constants.numericPatterns.month, dateString), valueCallback);
      // 01, 02, ..., 12
      case "MM":
        return (0, _utils.mapValue)((0, _utils.parseNDigits)(2, dateString), valueCallback);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return (0, _utils.mapValue)(match.ordinalNumber(dateString, {
          unit: "month"
        }), valueCallback);
      // Jan, Feb, ..., Dec
      case "MMM":
        return match.month(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.month(dateString, {
          width: "narrow",
          context: "formatting"
        });

      // J, F, ..., D
      case "MMMMM":
        return match.month(dateString, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return match.month(dateString, {
          width: "wide",
          context: "formatting"
        }) || match.month(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.month(dateString, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 11;
  }
  set(date, _flags, value) {
    date.setMonth(value, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
}
exports.MonthParser = MonthParser;
},{"../constants.js":"node_modules/date-fns/parse/_lib/constants.js","../Parser.js":"node_modules/date-fns/parse/_lib/Parser.js","../utils.js":"node_modules/date-fns/parse/_lib/utils.js"}],"node_modules/date-fns/parse/_lib/parsers/StandAloneMonthParser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StandAloneMonthParser = void 0;
var _constants = require("../constants.js");
var _Parser = require("../Parser.js");
var _utils = require("../utils.js");
class StandAloneMonthParser extends _Parser.Parser {
  priority = 110;
  parse(dateString, token, match) {
    const valueCallback = value => value - 1;
    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return (0, _utils.mapValue)((0, _utils.parseNumericPattern)(_constants.numericPatterns.month, dateString), valueCallback);
      // 01, 02, ..., 12
      case "LL":
        return (0, _utils.mapValue)((0, _utils.parseNDigits)(2, dateString), valueCallback);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return (0, _utils.mapValue)(match.ordinalNumber(dateString, {
          unit: "month"
        }), valueCallback);
      // Jan, Feb, ..., Dec
      case "LLL":
        return match.month(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match.month(dateString, {
          width: "narrow",
          context: "standalone"
        });

      // J, F, ..., D
      case "LLLLL":
        return match.month(dateString, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return match.month(dateString, {
          width: "wide",
          context: "standalone"
        }) || match.month(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match.month(dateString, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 11;
  }
  set(date, _flags, value) {
    date.setMonth(value, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"];
}
exports.StandAloneMonthParser = StandAloneMonthParser;
},{"../constants.js":"node_modules/date-fns/parse/_lib/constants.js","../Parser.js":"node_modules/date-fns/parse/_lib/Parser.js","../utils.js":"node_modules/date-fns/parse/_lib/utils.js"}],"node_modules/date-fns/setWeek.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.setWeek = setWeek;
var _getWeek = require("./getWeek.js");
var _toDate = require("./toDate.js");
/**
 * The {@link setWeek} function options.
 */

/**
 * @name setWeek
 * @category Week Helpers
 * @summary Set the local week to the given date.
 *
 * @description
 * Set the local week to the given date, saving the weekday number.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param week - The week of the new date
 * @param options - An object with options
 *
 * @returns The new date with the local week set
 *
 * @example
 * // Set the 1st week to 2 January 2005 with default options:
 * const result = setWeek(new Date(2005, 0, 2), 1)
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // Set the 1st week to 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January:
 * const result = setWeek(new Date(2005, 0, 2), 1, {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Sun Jan 4 2004 00:00:00
 */
function setWeek(date, week, options) {
  const date_ = (0, _toDate.toDate)(date, options?.in);
  const diff = (0, _getWeek.getWeek)(date_, options) - week;
  date_.setDate(date_.getDate() - diff * 7);
  return (0, _toDate.toDate)(date_, options?.in);
}

// Fallback for modularized imports:
var _default = exports.default = setWeek;
},{"./getWeek.js":"node_modules/date-fns/getWeek.js","./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/parse/_lib/parsers/LocalWeekParser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocalWeekParser = void 0;
var _setWeek = require("../../../setWeek.js");
var _startOfWeek = require("../../../startOfWeek.js");
var _constants = require("../constants.js");
var _Parser = require("../Parser.js");
var _utils = require("../utils.js");
// Local week of year
class LocalWeekParser extends _Parser.Parser {
  priority = 100;
  parse(dateString, token, match) {
    switch (token) {
      case "w":
        return (0, _utils.parseNumericPattern)(_constants.numericPatterns.week, dateString);
      case "wo":
        return match.ordinalNumber(dateString, {
          unit: "week"
        });
      default:
        return (0, _utils.parseNDigits)(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 53;
  }
  set(date, _flags, value, options) {
    return (0, _startOfWeek.startOfWeek)((0, _setWeek.setWeek)(date, value, options), options);
  }
  incompatibleTokens = ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"];
}
exports.LocalWeekParser = LocalWeekParser;
},{"../../../setWeek.js":"node_modules/date-fns/setWeek.js","../../../startOfWeek.js":"node_modules/date-fns/startOfWeek.js","../constants.js":"node_modules/date-fns/parse/_lib/constants.js","../Parser.js":"node_modules/date-fns/parse/_lib/Parser.js","../utils.js":"node_modules/date-fns/parse/_lib/utils.js"}],"node_modules/date-fns/setISOWeek.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.setISOWeek = setISOWeek;
var _getISOWeek = require("./getISOWeek.js");
var _toDate = require("./toDate.js");
/**
 * The {@link setISOWeek} function options.
 */

/**
 * @name setISOWeek
 * @category ISO Week Helpers
 * @summary Set the ISO week to the given date.
 *
 * @description
 * Set the ISO week to the given date, saving the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The `Date` type of the context function.
 *
 * @param date - The date to be changed
 * @param week - The ISO week of the new date
 * @param options - An object with options
 *
 * @returns The new date with the ISO week set
 *
 * @example
 * // Set the 53rd ISO week to 7 August 2004:
 * const result = setISOWeek(new Date(2004, 7, 7), 53)
 * //=> Sat Jan 01 2005 00:00:00
 */
function setISOWeek(date, week, options) {
  const _date = (0, _toDate.toDate)(date, options?.in);
  const diff = (0, _getISOWeek.getISOWeek)(_date, options) - week;
  _date.setDate(_date.getDate() - diff * 7);
  return _date;
}

// Fallback for modularized imports:
var _default = exports.default = setISOWeek;
},{"./getISOWeek.js":"node_modules/date-fns/getISOWeek.js","./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/parse/_lib/parsers/ISOWeekParser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ISOWeekParser = void 0;
var _setISOWeek = require("../../../setISOWeek.js");
var _startOfISOWeek = require("../../../startOfISOWeek.js");
var _constants = require("../constants.js");
var _Parser = require("../Parser.js");
var _utils = require("../utils.js");
// ISO week of year
class ISOWeekParser extends _Parser.Parser {
  priority = 100;
  parse(dateString, token, match) {
    switch (token) {
      case "I":
        return (0, _utils.parseNumericPattern)(_constants.numericPatterns.week, dateString);
      case "Io":
        return match.ordinalNumber(dateString, {
          unit: "week"
        });
      default:
        return (0, _utils.parseNDigits)(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 53;
  }
  set(date, _flags, value) {
    return (0, _startOfISOWeek.startOfISOWeek)((0, _setISOWeek.setISOWeek)(date, value));
  }
  incompatibleTokens = ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"];
}
exports.ISOWeekParser = ISOWeekParser;
},{"../../../setISOWeek.js":"node_modules/date-fns/setISOWeek.js","../../../startOfISOWeek.js":"node_modules/date-fns/startOfISOWeek.js","../constants.js":"node_modules/date-fns/parse/_lib/constants.js","../Parser.js":"node_modules/date-fns/parse/_lib/Parser.js","../utils.js":"node_modules/date-fns/parse/_lib/utils.js"}],"node_modules/date-fns/parse/_lib/parsers/DateParser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateParser = void 0;
var _constants = require("../constants.js");
var _Parser = require("../Parser.js");
var _utils = require("../utils.js");
const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Day of the month
class DateParser extends _Parser.Parser {
  priority = 90;
  subPriority = 1;
  parse(dateString, token, match) {
    switch (token) {
      case "d":
        return (0, _utils.parseNumericPattern)(_constants.numericPatterns.date, dateString);
      case "do":
        return match.ordinalNumber(dateString, {
          unit: "date"
        });
      default:
        return (0, _utils.parseNDigits)(token.length, dateString);
    }
  }
  validate(date, value) {
    const year = date.getFullYear();
    const isLeapYear = (0, _utils.isLeapYearIndex)(year);
    const month = date.getMonth();
    if (isLeapYear) {
      return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
    } else {
      return value >= 1 && value <= DAYS_IN_MONTH[month];
    }
  }
  set(date, _flags, value) {
    date.setDate(value);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"];
}
exports.DateParser = DateParser;
},{"../constants.js":"node_modules/date-fns/parse/_lib/constants.js","../Parser.js":"node_modules/date-fns/parse/_lib/Parser.js","../utils.js":"node_modules/date-fns/parse/_lib/utils.js"}],"node_modules/date-fns/parse/_lib/parsers/DayOfYearParser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DayOfYearParser = void 0;
var _constants = require("../constants.js");
var _Parser = require("../Parser.js");
var _utils = require("../utils.js");
class DayOfYearParser extends _Parser.Parser {
  priority = 90;
  subpriority = 1;
  parse(dateString, token, match) {
    switch (token) {
      case "D":
      case "DD":
        return (0, _utils.parseNumericPattern)(_constants.numericPatterns.dayOfYear, dateString);
      case "Do":
        return match.ordinalNumber(dateString, {
          unit: "date"
        });
      default:
        return (0, _utils.parseNDigits)(token.length, dateString);
    }
  }
  validate(date, value) {
    const year = date.getFullYear();
    const isLeapYear = (0, _utils.isLeapYearIndex)(year);
    if (isLeapYear) {
      return value >= 1 && value <= 366;
    } else {
      return value >= 1 && value <= 365;
    }
  }
  set(date, _flags, value) {
    date.setMonth(0, value);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"];
}
exports.DayOfYearParser = DayOfYearParser;
},{"../constants.js":"node_modules/date-fns/parse/_lib/constants.js","../Parser.js":"node_modules/date-fns/parse/_lib/Parser.js","../utils.js":"node_modules/date-fns/parse/_lib/utils.js"}],"node_modules/date-fns/setDay.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.setDay = setDay;
var _defaultOptions = require("./_lib/defaultOptions.js");
var _addDays = require("./addDays.js");
var _toDate = require("./toDate.js");
/**
 * The {@link setDay} function options.
 */

/**
 * @name setDay
 * @category Weekday Helpers
 * @summary Set the day of the week to the given date.
 *
 * @description
 * Set the day of the week to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param day - The day of the week of the new date
 * @param options - An object with options.
 *
 * @returns The new date with the day of the week set
 *
 * @example
 * // Set week day to Sunday, with the default weekStartsOn of Sunday:
 * const result = setDay(new Date(2014, 8, 1), 0)
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // Set week day to Sunday, with a weekStartsOn of Monday:
 * const result = setDay(new Date(2014, 8, 1), 0, { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 00:00:00
 */
function setDay(date, day, options) {
  const defaultOptions = (0, _defaultOptions.getDefaultOptions)();
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
  const date_ = (0, _toDate.toDate)(date, options?.in);
  const currentDay = date_.getDay();
  const remainder = day % 7;
  const dayIndex = (remainder + 7) % 7;
  const delta = 7 - weekStartsOn;
  const diff = day < 0 || day > 6 ? day - (currentDay + delta) % 7 : (dayIndex + delta) % 7 - (currentDay + delta) % 7;
  return (0, _addDays.addDays)(date_, diff, options);
}

// Fallback for modularized imports:
var _default = exports.default = setDay;
},{"./_lib/defaultOptions.js":"node_modules/date-fns/_lib/defaultOptions.js","./addDays.js":"node_modules/date-fns/addDays.js","./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/parse/_lib/parsers/DayParser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DayParser = void 0;
var _setDay = require("../../../setDay.js");
var _Parser = require("../Parser.js");
// Day of week
class DayParser extends _Parser.Parser {
  priority = 90;
  parse(dateString, token, match) {
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return match.day(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.day(dateString, {
          width: "short",
          context: "formatting"
        }) || match.day(dateString, {
          width: "narrow",
          context: "formatting"
        });

      // T
      case "EEEEE":
        return match.day(dateString, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return match.day(dateString, {
          width: "short",
          context: "formatting"
        }) || match.day(dateString, {
          width: "narrow",
          context: "formatting"
        });

      // Tuesday
      case "EEEE":
      default:
        return match.day(dateString, {
          width: "wide",
          context: "formatting"
        }) || match.day(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.day(dateString, {
          width: "short",
          context: "formatting"
        }) || match.day(dateString, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 6;
  }
  set(date, _flags, value, options) {
    date = (0, _setDay.setDay)(date, value, options);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["D", "i", "e", "c", "t", "T"];
}
exports.DayParser = DayParser;
},{"../../../setDay.js":"node_modules/date-fns/setDay.js","../Parser.js":"node_modules/date-fns/parse/_lib/Parser.js"}],"node_modules/date-fns/parse/_lib/parsers/LocalDayParser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocalDayParser = void 0;
var _setDay = require("../../../setDay.js");
var _Parser = require("../Parser.js");
var _utils = require("../utils.js");
// Local day of week
class LocalDayParser extends _Parser.Parser {
  priority = 90;
  parse(dateString, token, match, options) {
    const valueCallback = value => {
      // We want here floor instead of trunc, so we get -7 for value 0 instead of 0
      const wholeWeekDays = Math.floor((value - 1) / 7) * 7;
      return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
    };
    switch (token) {
      // 3
      case "e":
      case "ee":
        // 03
        return (0, _utils.mapValue)((0, _utils.parseNDigits)(token.length, dateString), valueCallback);
      // 3rd
      case "eo":
        return (0, _utils.mapValue)(match.ordinalNumber(dateString, {
          unit: "day"
        }), valueCallback);
      // Tue
      case "eee":
        return match.day(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.day(dateString, {
          width: "short",
          context: "formatting"
        }) || match.day(dateString, {
          width: "narrow",
          context: "formatting"
        });

      // T
      case "eeeee":
        return match.day(dateString, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return match.day(dateString, {
          width: "short",
          context: "formatting"
        }) || match.day(dateString, {
          width: "narrow",
          context: "formatting"
        });

      // Tuesday
      case "eeee":
      default:
        return match.day(dateString, {
          width: "wide",
          context: "formatting"
        }) || match.day(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.day(dateString, {
          width: "short",
          context: "formatting"
        }) || match.day(dateString, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 6;
  }
  set(date, _flags, value, options) {
    date = (0, _setDay.setDay)(date, value, options);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"];
}
exports.LocalDayParser = LocalDayParser;
},{"../../../setDay.js":"node_modules/date-fns/setDay.js","../Parser.js":"node_modules/date-fns/parse/_lib/Parser.js","../utils.js":"node_modules/date-fns/parse/_lib/utils.js"}],"node_modules/date-fns/parse/_lib/parsers/StandAloneLocalDayParser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StandAloneLocalDayParser = void 0;
var _setDay = require("../../../setDay.js");
var _Parser = require("../Parser.js");
var _utils = require("../utils.js");
// Stand-alone local day of week
class StandAloneLocalDayParser extends _Parser.Parser {
  priority = 90;
  parse(dateString, token, match, options) {
    const valueCallback = value => {
      // We want here floor instead of trunc, so we get -7 for value 0 instead of 0
      const wholeWeekDays = Math.floor((value - 1) / 7) * 7;
      return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
    };
    switch (token) {
      // 3
      case "c":
      case "cc":
        // 03
        return (0, _utils.mapValue)((0, _utils.parseNDigits)(token.length, dateString), valueCallback);
      // 3rd
      case "co":
        return (0, _utils.mapValue)(match.ordinalNumber(dateString, {
          unit: "day"
        }), valueCallback);
      // Tue
      case "ccc":
        return match.day(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match.day(dateString, {
          width: "short",
          context: "standalone"
        }) || match.day(dateString, {
          width: "narrow",
          context: "standalone"
        });

      // T
      case "ccccc":
        return match.day(dateString, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return match.day(dateString, {
          width: "short",
          context: "standalone"
        }) || match.day(dateString, {
          width: "narrow",
          context: "standalone"
        });

      // Tuesday
      case "cccc":
      default:
        return match.day(dateString, {
          width: "wide",
          context: "standalone"
        }) || match.day(dateString, {
          width: "abbreviated",
          context: "standalone"
        }) || match.day(dateString, {
          width: "short",
          context: "standalone"
        }) || match.day(dateString, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 6;
  }
  set(date, _flags, value, options) {
    date = (0, _setDay.setDay)(date, value, options);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"];
}
exports.StandAloneLocalDayParser = StandAloneLocalDayParser;
},{"../../../setDay.js":"node_modules/date-fns/setDay.js","../Parser.js":"node_modules/date-fns/parse/_lib/Parser.js","../utils.js":"node_modules/date-fns/parse/_lib/utils.js"}],"node_modules/date-fns/setISODay.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.setISODay = setISODay;
var _addDays = require("./addDays.js");
var _getISODay = require("./getISODay.js");
var _toDate = require("./toDate.js");
/**
 * The {@link setISODay} function options.
 */

/**
 * @name setISODay
 * @category Weekday Helpers
 * @summary Set the day of the ISO week to the given date.
 *
 * @description
 * Set the day of the ISO week to the given date.
 * ISO week starts with Monday.
 * 7 is the index of Sunday, 1 is the index of Monday, etc.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param day - The day of the ISO week of the new date
 * @param options - An object with options
 *
 * @returns The new date with the day of the ISO week set
 *
 * @example
 * // Set Sunday to 1 September 2014:
 * const result = setISODay(new Date(2014, 8, 1), 7)
 * //=> Sun Sep 07 2014 00:00:00
 */
function setISODay(date, day, options) {
  const date_ = (0, _toDate.toDate)(date, options?.in);
  const currentDay = (0, _getISODay.getISODay)(date_, options);
  const diff = day - currentDay;
  return (0, _addDays.addDays)(date_, diff, options);
}

// Fallback for modularized imports:
var _default = exports.default = setISODay;
},{"./addDays.js":"node_modules/date-fns/addDays.js","./getISODay.js":"node_modules/date-fns/getISODay.js","./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/parse/_lib/parsers/ISODayParser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ISODayParser = void 0;
var _setISODay = require("../../../setISODay.js");
var _Parser = require("../Parser.js");
var _utils = require("../utils.js");
// ISO day of week
class ISODayParser extends _Parser.Parser {
  priority = 90;
  parse(dateString, token, match) {
    const valueCallback = value => {
      if (value === 0) {
        return 7;
      }
      return value;
    };
    switch (token) {
      // 2
      case "i":
      case "ii":
        // 02
        return (0, _utils.parseNDigits)(token.length, dateString);
      // 2nd
      case "io":
        return match.ordinalNumber(dateString, {
          unit: "day"
        });
      // Tue
      case "iii":
        return (0, _utils.mapValue)(match.day(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.day(dateString, {
          width: "short",
          context: "formatting"
        }) || match.day(dateString, {
          width: "narrow",
          context: "formatting"
        }), valueCallback);
      // T
      case "iiiii":
        return (0, _utils.mapValue)(match.day(dateString, {
          width: "narrow",
          context: "formatting"
        }), valueCallback);
      // Tu
      case "iiiiii":
        return (0, _utils.mapValue)(match.day(dateString, {
          width: "short",
          context: "formatting"
        }) || match.day(dateString, {
          width: "narrow",
          context: "formatting"
        }), valueCallback);
      // Tuesday
      case "iiii":
      default:
        return (0, _utils.mapValue)(match.day(dateString, {
          width: "wide",
          context: "formatting"
        }) || match.day(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.day(dateString, {
          width: "short",
          context: "formatting"
        }) || match.day(dateString, {
          width: "narrow",
          context: "formatting"
        }), valueCallback);
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 7;
  }
  set(date, _flags, value) {
    date = (0, _setISODay.setISODay)(date, value);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"];
}
exports.ISODayParser = ISODayParser;
},{"../../../setISODay.js":"node_modules/date-fns/setISODay.js","../Parser.js":"node_modules/date-fns/parse/_lib/Parser.js","../utils.js":"node_modules/date-fns/parse/_lib/utils.js"}],"node_modules/date-fns/parse/_lib/parsers/AMPMParser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AMPMParser = void 0;
var _Parser = require("../Parser.js");
var _utils = require("../utils.js");
class AMPMParser extends _Parser.Parser {
  priority = 80;
  parse(dateString, token, match) {
    switch (token) {
      case "a":
      case "aa":
      case "aaa":
        return match.dayPeriod(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaaa":
        return match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return match.dayPeriod(dateString, {
          width: "wide",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(date, _flags, value) {
    date.setHours((0, _utils.dayPeriodEnumToHours)(value), 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["b", "B", "H", "k", "t", "T"];
}
exports.AMPMParser = AMPMParser;
},{"../Parser.js":"node_modules/date-fns/parse/_lib/Parser.js","../utils.js":"node_modules/date-fns/parse/_lib/utils.js"}],"node_modules/date-fns/parse/_lib/parsers/AMPMMidnightParser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AMPMMidnightParser = void 0;
var _Parser = require("../Parser.js");
var _utils = require("../utils.js");
class AMPMMidnightParser extends _Parser.Parser {
  priority = 80;
  parse(dateString, token, match) {
    switch (token) {
      case "b":
      case "bb":
      case "bbb":
        return match.dayPeriod(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbbb":
        return match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return match.dayPeriod(dateString, {
          width: "wide",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(date, _flags, value) {
    date.setHours((0, _utils.dayPeriodEnumToHours)(value), 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["a", "B", "H", "k", "t", "T"];
}
exports.AMPMMidnightParser = AMPMMidnightParser;
},{"../Parser.js":"node_modules/date-fns/parse/_lib/Parser.js","../utils.js":"node_modules/date-fns/parse/_lib/utils.js"}],"node_modules/date-fns/parse/_lib/parsers/DayPeriodParser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DayPeriodParser = void 0;
var _Parser = require("../Parser.js");
var _utils = require("../utils.js");
// in the morning, in the afternoon, in the evening, at night
class DayPeriodParser extends _Parser.Parser {
  priority = 80;
  parse(dateString, token, match) {
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return match.dayPeriod(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBBB":
        return match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return match.dayPeriod(dateString, {
          width: "wide",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "abbreviated",
          context: "formatting"
        }) || match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(date, _flags, value) {
    date.setHours((0, _utils.dayPeriodEnumToHours)(value), 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["a", "b", "t", "T"];
}
exports.DayPeriodParser = DayPeriodParser;
},{"../Parser.js":"node_modules/date-fns/parse/_lib/Parser.js","../utils.js":"node_modules/date-fns/parse/_lib/utils.js"}],"node_modules/date-fns/parse/_lib/parsers/Hour1to12Parser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hour1to12Parser = void 0;
var _constants = require("../constants.js");
var _Parser = require("../Parser.js");
var _utils = require("../utils.js");
class Hour1to12Parser extends _Parser.Parser {
  priority = 70;
  parse(dateString, token, match) {
    switch (token) {
      case "h":
        return (0, _utils.parseNumericPattern)(_constants.numericPatterns.hour12h, dateString);
      case "ho":
        return match.ordinalNumber(dateString, {
          unit: "hour"
        });
      default:
        return (0, _utils.parseNDigits)(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 12;
  }
  set(date, _flags, value) {
    const isPM = date.getHours() >= 12;
    if (isPM && value < 12) {
      date.setHours(value + 12, 0, 0, 0);
    } else if (!isPM && value === 12) {
      date.setHours(0, 0, 0, 0);
    } else {
      date.setHours(value, 0, 0, 0);
    }
    return date;
  }
  incompatibleTokens = ["H", "K", "k", "t", "T"];
}
exports.Hour1to12Parser = Hour1to12Parser;
},{"../constants.js":"node_modules/date-fns/parse/_lib/constants.js","../Parser.js":"node_modules/date-fns/parse/_lib/Parser.js","../utils.js":"node_modules/date-fns/parse/_lib/utils.js"}],"node_modules/date-fns/parse/_lib/parsers/Hour0to23Parser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hour0to23Parser = void 0;
var _constants = require("../constants.js");
var _Parser = require("../Parser.js");
var _utils = require("../utils.js");
class Hour0to23Parser extends _Parser.Parser {
  priority = 70;
  parse(dateString, token, match) {
    switch (token) {
      case "H":
        return (0, _utils.parseNumericPattern)(_constants.numericPatterns.hour23h, dateString);
      case "Ho":
        return match.ordinalNumber(dateString, {
          unit: "hour"
        });
      default:
        return (0, _utils.parseNDigits)(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 23;
  }
  set(date, _flags, value) {
    date.setHours(value, 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["a", "b", "h", "K", "k", "t", "T"];
}
exports.Hour0to23Parser = Hour0to23Parser;
},{"../constants.js":"node_modules/date-fns/parse/_lib/constants.js","../Parser.js":"node_modules/date-fns/parse/_lib/Parser.js","../utils.js":"node_modules/date-fns/parse/_lib/utils.js"}],"node_modules/date-fns/parse/_lib/parsers/Hour0To11Parser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hour0To11Parser = void 0;
var _constants = require("../constants.js");
var _Parser = require("../Parser.js");
var _utils = require("../utils.js");
class Hour0To11Parser extends _Parser.Parser {
  priority = 70;
  parse(dateString, token, match) {
    switch (token) {
      case "K":
        return (0, _utils.parseNumericPattern)(_constants.numericPatterns.hour11h, dateString);
      case "Ko":
        return match.ordinalNumber(dateString, {
          unit: "hour"
        });
      default:
        return (0, _utils.parseNDigits)(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 11;
  }
  set(date, _flags, value) {
    const isPM = date.getHours() >= 12;
    if (isPM && value < 12) {
      date.setHours(value + 12, 0, 0, 0);
    } else {
      date.setHours(value, 0, 0, 0);
    }
    return date;
  }
  incompatibleTokens = ["h", "H", "k", "t", "T"];
}
exports.Hour0To11Parser = Hour0To11Parser;
},{"../constants.js":"node_modules/date-fns/parse/_lib/constants.js","../Parser.js":"node_modules/date-fns/parse/_lib/Parser.js","../utils.js":"node_modules/date-fns/parse/_lib/utils.js"}],"node_modules/date-fns/parse/_lib/parsers/Hour1To24Parser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hour1To24Parser = void 0;
var _constants = require("../constants.js");
var _Parser = require("../Parser.js");
var _utils = require("../utils.js");
class Hour1To24Parser extends _Parser.Parser {
  priority = 70;
  parse(dateString, token, match) {
    switch (token) {
      case "k":
        return (0, _utils.parseNumericPattern)(_constants.numericPatterns.hour24h, dateString);
      case "ko":
        return match.ordinalNumber(dateString, {
          unit: "hour"
        });
      default:
        return (0, _utils.parseNDigits)(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 1 && value <= 24;
  }
  set(date, _flags, value) {
    const hours = value <= 24 ? value % 24 : value;
    date.setHours(hours, 0, 0, 0);
    return date;
  }
  incompatibleTokens = ["a", "b", "h", "H", "K", "t", "T"];
}
exports.Hour1To24Parser = Hour1To24Parser;
},{"../constants.js":"node_modules/date-fns/parse/_lib/constants.js","../Parser.js":"node_modules/date-fns/parse/_lib/Parser.js","../utils.js":"node_modules/date-fns/parse/_lib/utils.js"}],"node_modules/date-fns/parse/_lib/parsers/MinuteParser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MinuteParser = void 0;
var _constants = require("../constants.js");
var _Parser = require("../Parser.js");
var _utils = require("../utils.js");
class MinuteParser extends _Parser.Parser {
  priority = 60;
  parse(dateString, token, match) {
    switch (token) {
      case "m":
        return (0, _utils.parseNumericPattern)(_constants.numericPatterns.minute, dateString);
      case "mo":
        return match.ordinalNumber(dateString, {
          unit: "minute"
        });
      default:
        return (0, _utils.parseNDigits)(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 59;
  }
  set(date, _flags, value) {
    date.setMinutes(value, 0, 0);
    return date;
  }
  incompatibleTokens = ["t", "T"];
}
exports.MinuteParser = MinuteParser;
},{"../constants.js":"node_modules/date-fns/parse/_lib/constants.js","../Parser.js":"node_modules/date-fns/parse/_lib/Parser.js","../utils.js":"node_modules/date-fns/parse/_lib/utils.js"}],"node_modules/date-fns/parse/_lib/parsers/SecondParser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SecondParser = void 0;
var _constants = require("../constants.js");
var _Parser = require("../Parser.js");
var _utils = require("../utils.js");
class SecondParser extends _Parser.Parser {
  priority = 50;
  parse(dateString, token, match) {
    switch (token) {
      case "s":
        return (0, _utils.parseNumericPattern)(_constants.numericPatterns.second, dateString);
      case "so":
        return match.ordinalNumber(dateString, {
          unit: "second"
        });
      default:
        return (0, _utils.parseNDigits)(token.length, dateString);
    }
  }
  validate(_date, value) {
    return value >= 0 && value <= 59;
  }
  set(date, _flags, value) {
    date.setSeconds(value, 0);
    return date;
  }
  incompatibleTokens = ["t", "T"];
}
exports.SecondParser = SecondParser;
},{"../constants.js":"node_modules/date-fns/parse/_lib/constants.js","../Parser.js":"node_modules/date-fns/parse/_lib/Parser.js","../utils.js":"node_modules/date-fns/parse/_lib/utils.js"}],"node_modules/date-fns/parse/_lib/parsers/FractionOfSecondParser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FractionOfSecondParser = void 0;
var _Parser = require("../Parser.js");
var _utils = require("../utils.js");
class FractionOfSecondParser extends _Parser.Parser {
  priority = 30;
  parse(dateString, token) {
    const valueCallback = value => Math.trunc(value * Math.pow(10, -token.length + 3));
    return (0, _utils.mapValue)((0, _utils.parseNDigits)(token.length, dateString), valueCallback);
  }
  set(date, _flags, value) {
    date.setMilliseconds(value);
    return date;
  }
  incompatibleTokens = ["t", "T"];
}
exports.FractionOfSecondParser = FractionOfSecondParser;
},{"../Parser.js":"node_modules/date-fns/parse/_lib/Parser.js","../utils.js":"node_modules/date-fns/parse/_lib/utils.js"}],"node_modules/date-fns/parse/_lib/parsers/ISOTimezoneWithZParser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ISOTimezoneWithZParser = void 0;
var _constructFrom = require("../../../constructFrom.js");
var _getTimezoneOffsetInMilliseconds = require("../../../_lib/getTimezoneOffsetInMilliseconds.js");
var _constants = require("../constants.js");
var _Parser = require("../Parser.js");
var _utils = require("../utils.js");
// Timezone (ISO-8601. +00:00 is `'Z'`)
class ISOTimezoneWithZParser extends _Parser.Parser {
  priority = 10;
  parse(dateString, token) {
    switch (token) {
      case "X":
        return (0, _utils.parseTimezonePattern)(_constants.timezonePatterns.basicOptionalMinutes, dateString);
      case "XX":
        return (0, _utils.parseTimezonePattern)(_constants.timezonePatterns.basic, dateString);
      case "XXXX":
        return (0, _utils.parseTimezonePattern)(_constants.timezonePatterns.basicOptionalSeconds, dateString);
      case "XXXXX":
        return (0, _utils.parseTimezonePattern)(_constants.timezonePatterns.extendedOptionalSeconds, dateString);
      case "XXX":
      default:
        return (0, _utils.parseTimezonePattern)(_constants.timezonePatterns.extended, dateString);
    }
  }
  set(date, flags, value) {
    if (flags.timestampIsSet) return date;
    return (0, _constructFrom.constructFrom)(date, date.getTime() - (0, _getTimezoneOffsetInMilliseconds.getTimezoneOffsetInMilliseconds)(date) - value);
  }
  incompatibleTokens = ["t", "T", "x"];
}
exports.ISOTimezoneWithZParser = ISOTimezoneWithZParser;
},{"../../../constructFrom.js":"node_modules/date-fns/constructFrom.js","../../../_lib/getTimezoneOffsetInMilliseconds.js":"node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js","../constants.js":"node_modules/date-fns/parse/_lib/constants.js","../Parser.js":"node_modules/date-fns/parse/_lib/Parser.js","../utils.js":"node_modules/date-fns/parse/_lib/utils.js"}],"node_modules/date-fns/parse/_lib/parsers/ISOTimezoneParser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ISOTimezoneParser = void 0;
var _constructFrom = require("../../../constructFrom.js");
var _getTimezoneOffsetInMilliseconds = require("../../../_lib/getTimezoneOffsetInMilliseconds.js");
var _constants = require("../constants.js");
var _Parser = require("../Parser.js");
var _utils = require("../utils.js");
// Timezone (ISO-8601)
class ISOTimezoneParser extends _Parser.Parser {
  priority = 10;
  parse(dateString, token) {
    switch (token) {
      case "x":
        return (0, _utils.parseTimezonePattern)(_constants.timezonePatterns.basicOptionalMinutes, dateString);
      case "xx":
        return (0, _utils.parseTimezonePattern)(_constants.timezonePatterns.basic, dateString);
      case "xxxx":
        return (0, _utils.parseTimezonePattern)(_constants.timezonePatterns.basicOptionalSeconds, dateString);
      case "xxxxx":
        return (0, _utils.parseTimezonePattern)(_constants.timezonePatterns.extendedOptionalSeconds, dateString);
      case "xxx":
      default:
        return (0, _utils.parseTimezonePattern)(_constants.timezonePatterns.extended, dateString);
    }
  }
  set(date, flags, value) {
    if (flags.timestampIsSet) return date;
    return (0, _constructFrom.constructFrom)(date, date.getTime() - (0, _getTimezoneOffsetInMilliseconds.getTimezoneOffsetInMilliseconds)(date) - value);
  }
  incompatibleTokens = ["t", "T", "X"];
}
exports.ISOTimezoneParser = ISOTimezoneParser;
},{"../../../constructFrom.js":"node_modules/date-fns/constructFrom.js","../../../_lib/getTimezoneOffsetInMilliseconds.js":"node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js","../constants.js":"node_modules/date-fns/parse/_lib/constants.js","../Parser.js":"node_modules/date-fns/parse/_lib/Parser.js","../utils.js":"node_modules/date-fns/parse/_lib/utils.js"}],"node_modules/date-fns/parse/_lib/parsers/TimestampSecondsParser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimestampSecondsParser = void 0;
var _constructFrom = require("../../../constructFrom.js");
var _Parser = require("../Parser.js");
var _utils = require("../utils.js");
class TimestampSecondsParser extends _Parser.Parser {
  priority = 40;
  parse(dateString) {
    return (0, _utils.parseAnyDigitsSigned)(dateString);
  }
  set(date, _flags, value) {
    return [(0, _constructFrom.constructFrom)(date, value * 1000), {
      timestampIsSet: true
    }];
  }
  incompatibleTokens = "*";
}
exports.TimestampSecondsParser = TimestampSecondsParser;
},{"../../../constructFrom.js":"node_modules/date-fns/constructFrom.js","../Parser.js":"node_modules/date-fns/parse/_lib/Parser.js","../utils.js":"node_modules/date-fns/parse/_lib/utils.js"}],"node_modules/date-fns/parse/_lib/parsers/TimestampMillisecondsParser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimestampMillisecondsParser = void 0;
var _constructFrom = require("../../../constructFrom.js");
var _Parser = require("../Parser.js");
var _utils = require("../utils.js");
class TimestampMillisecondsParser extends _Parser.Parser {
  priority = 20;
  parse(dateString) {
    return (0, _utils.parseAnyDigitsSigned)(dateString);
  }
  set(date, _flags, value) {
    return [(0, _constructFrom.constructFrom)(date, value), {
      timestampIsSet: true
    }];
  }
  incompatibleTokens = "*";
}
exports.TimestampMillisecondsParser = TimestampMillisecondsParser;
},{"../../../constructFrom.js":"node_modules/date-fns/constructFrom.js","../Parser.js":"node_modules/date-fns/parse/_lib/Parser.js","../utils.js":"node_modules/date-fns/parse/_lib/utils.js"}],"node_modules/date-fns/parse/_lib/parsers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parsers = void 0;
var _EraParser = require("./parsers/EraParser.js");
var _YearParser = require("./parsers/YearParser.js");
var _LocalWeekYearParser = require("./parsers/LocalWeekYearParser.js");
var _ISOWeekYearParser = require("./parsers/ISOWeekYearParser.js");
var _ExtendedYearParser = require("./parsers/ExtendedYearParser.js");
var _QuarterParser = require("./parsers/QuarterParser.js");
var _StandAloneQuarterParser = require("./parsers/StandAloneQuarterParser.js");
var _MonthParser = require("./parsers/MonthParser.js");
var _StandAloneMonthParser = require("./parsers/StandAloneMonthParser.js");
var _LocalWeekParser = require("./parsers/LocalWeekParser.js");
var _ISOWeekParser = require("./parsers/ISOWeekParser.js");
var _DateParser = require("./parsers/DateParser.js");
var _DayOfYearParser = require("./parsers/DayOfYearParser.js");
var _DayParser = require("./parsers/DayParser.js");
var _LocalDayParser = require("./parsers/LocalDayParser.js");
var _StandAloneLocalDayParser = require("./parsers/StandAloneLocalDayParser.js");
var _ISODayParser = require("./parsers/ISODayParser.js");
var _AMPMParser = require("./parsers/AMPMParser.js");
var _AMPMMidnightParser = require("./parsers/AMPMMidnightParser.js");
var _DayPeriodParser = require("./parsers/DayPeriodParser.js");
var _Hour1to12Parser = require("./parsers/Hour1to12Parser.js");
var _Hour0to23Parser = require("./parsers/Hour0to23Parser.js");
var _Hour0To11Parser = require("./parsers/Hour0To11Parser.js");
var _Hour1To24Parser = require("./parsers/Hour1To24Parser.js");
var _MinuteParser = require("./parsers/MinuteParser.js");
var _SecondParser = require("./parsers/SecondParser.js");
var _FractionOfSecondParser = require("./parsers/FractionOfSecondParser.js");
var _ISOTimezoneWithZParser = require("./parsers/ISOTimezoneWithZParser.js");
var _ISOTimezoneParser = require("./parsers/ISOTimezoneParser.js");
var _TimestampSecondsParser = require("./parsers/TimestampSecondsParser.js");
var _TimestampMillisecondsParser = require("./parsers/TimestampMillisecondsParser.js");
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O* | Timezone (GMT)                 |
 * |  p  |                                |  P  |                                |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z* | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `parse` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 */
const parsers = exports.parsers = {
  G: new _EraParser.EraParser(),
  y: new _YearParser.YearParser(),
  Y: new _LocalWeekYearParser.LocalWeekYearParser(),
  R: new _ISOWeekYearParser.ISOWeekYearParser(),
  u: new _ExtendedYearParser.ExtendedYearParser(),
  Q: new _QuarterParser.QuarterParser(),
  q: new _StandAloneQuarterParser.StandAloneQuarterParser(),
  M: new _MonthParser.MonthParser(),
  L: new _StandAloneMonthParser.StandAloneMonthParser(),
  w: new _LocalWeekParser.LocalWeekParser(),
  I: new _ISOWeekParser.ISOWeekParser(),
  d: new _DateParser.DateParser(),
  D: new _DayOfYearParser.DayOfYearParser(),
  E: new _DayParser.DayParser(),
  e: new _LocalDayParser.LocalDayParser(),
  c: new _StandAloneLocalDayParser.StandAloneLocalDayParser(),
  i: new _ISODayParser.ISODayParser(),
  a: new _AMPMParser.AMPMParser(),
  b: new _AMPMMidnightParser.AMPMMidnightParser(),
  B: new _DayPeriodParser.DayPeriodParser(),
  h: new _Hour1to12Parser.Hour1to12Parser(),
  H: new _Hour0to23Parser.Hour0to23Parser(),
  K: new _Hour0To11Parser.Hour0To11Parser(),
  k: new _Hour1To24Parser.Hour1To24Parser(),
  m: new _MinuteParser.MinuteParser(),
  s: new _SecondParser.SecondParser(),
  S: new _FractionOfSecondParser.FractionOfSecondParser(),
  X: new _ISOTimezoneWithZParser.ISOTimezoneWithZParser(),
  x: new _ISOTimezoneParser.ISOTimezoneParser(),
  t: new _TimestampSecondsParser.TimestampSecondsParser(),
  T: new _TimestampMillisecondsParser.TimestampMillisecondsParser()
};
},{"./parsers/EraParser.js":"node_modules/date-fns/parse/_lib/parsers/EraParser.js","./parsers/YearParser.js":"node_modules/date-fns/parse/_lib/parsers/YearParser.js","./parsers/LocalWeekYearParser.js":"node_modules/date-fns/parse/_lib/parsers/LocalWeekYearParser.js","./parsers/ISOWeekYearParser.js":"node_modules/date-fns/parse/_lib/parsers/ISOWeekYearParser.js","./parsers/ExtendedYearParser.js":"node_modules/date-fns/parse/_lib/parsers/ExtendedYearParser.js","./parsers/QuarterParser.js":"node_modules/date-fns/parse/_lib/parsers/QuarterParser.js","./parsers/StandAloneQuarterParser.js":"node_modules/date-fns/parse/_lib/parsers/StandAloneQuarterParser.js","./parsers/MonthParser.js":"node_modules/date-fns/parse/_lib/parsers/MonthParser.js","./parsers/StandAloneMonthParser.js":"node_modules/date-fns/parse/_lib/parsers/StandAloneMonthParser.js","./parsers/LocalWeekParser.js":"node_modules/date-fns/parse/_lib/parsers/LocalWeekParser.js","./parsers/ISOWeekParser.js":"node_modules/date-fns/parse/_lib/parsers/ISOWeekParser.js","./parsers/DateParser.js":"node_modules/date-fns/parse/_lib/parsers/DateParser.js","./parsers/DayOfYearParser.js":"node_modules/date-fns/parse/_lib/parsers/DayOfYearParser.js","./parsers/DayParser.js":"node_modules/date-fns/parse/_lib/parsers/DayParser.js","./parsers/LocalDayParser.js":"node_modules/date-fns/parse/_lib/parsers/LocalDayParser.js","./parsers/StandAloneLocalDayParser.js":"node_modules/date-fns/parse/_lib/parsers/StandAloneLocalDayParser.js","./parsers/ISODayParser.js":"node_modules/date-fns/parse/_lib/parsers/ISODayParser.js","./parsers/AMPMParser.js":"node_modules/date-fns/parse/_lib/parsers/AMPMParser.js","./parsers/AMPMMidnightParser.js":"node_modules/date-fns/parse/_lib/parsers/AMPMMidnightParser.js","./parsers/DayPeriodParser.js":"node_modules/date-fns/parse/_lib/parsers/DayPeriodParser.js","./parsers/Hour1to12Parser.js":"node_modules/date-fns/parse/_lib/parsers/Hour1to12Parser.js","./parsers/Hour0to23Parser.js":"node_modules/date-fns/parse/_lib/parsers/Hour0to23Parser.js","./parsers/Hour0To11Parser.js":"node_modules/date-fns/parse/_lib/parsers/Hour0To11Parser.js","./parsers/Hour1To24Parser.js":"node_modules/date-fns/parse/_lib/parsers/Hour1To24Parser.js","./parsers/MinuteParser.js":"node_modules/date-fns/parse/_lib/parsers/MinuteParser.js","./parsers/SecondParser.js":"node_modules/date-fns/parse/_lib/parsers/SecondParser.js","./parsers/FractionOfSecondParser.js":"node_modules/date-fns/parse/_lib/parsers/FractionOfSecondParser.js","./parsers/ISOTimezoneWithZParser.js":"node_modules/date-fns/parse/_lib/parsers/ISOTimezoneWithZParser.js","./parsers/ISOTimezoneParser.js":"node_modules/date-fns/parse/_lib/parsers/ISOTimezoneParser.js","./parsers/TimestampSecondsParser.js":"node_modules/date-fns/parse/_lib/parsers/TimestampSecondsParser.js","./parsers/TimestampMillisecondsParser.js":"node_modules/date-fns/parse/_lib/parsers/TimestampMillisecondsParser.js"}],"node_modules/date-fns/parse.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
Object.defineProperty(exports, "longFormatters", {
  enumerable: true,
  get: function () {
    return _longFormatters.longFormatters;
  }
});
exports.parse = parse;
Object.defineProperty(exports, "parsers", {
  enumerable: true,
  get: function () {
    return _parsers.parsers;
  }
});
var _defaultLocale = require("./_lib/defaultLocale.js");
var _longFormatters = require("./_lib/format/longFormatters.js");
var _protectedTokens = require("./_lib/protectedTokens.js");
var _constructFrom = require("./constructFrom.js");
var _getDefaultOptions = require("./getDefaultOptions.js");
var _toDate = require("./toDate.js");
var _Setter = require("./parse/_lib/Setter.js");
var _parsers = require("./parse/_lib/parsers.js");
// Rexports of internal for libraries to use.
// See: https://github.com/date-fns/date-fns/issues/3638#issuecomment-1877082874

/**
 * The {@link parse} function options.
 */

// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const notWhitespaceRegExp = /\S/;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;

/**
 * @name parse
 * @category Common Helpers
 * @summary Parse the date.
 *
 * @description
 * Return the date parsed from string using the given format string.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters in the format string wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 *
 * Format of the format string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 5 below the table).
 *
 * Not all tokens are compatible. Combinations that don't make sense or could lead to bugs are prohibited
 * and will throw `RangeError`. For example usage of 24-hour format token with AM/PM token will throw an exception:
 *
 * ```javascript
 * parse('23 AM', 'HH a', new Date())
 * //=> RangeError: The format string mustn't contain `HH` and `a` at the same time
 * ```
 *
 * See the compatibility table: https://docs.google.com/spreadsheets/d/e/2PACX-1vQOPU3xUhplll6dyoMmVUXHKl_8CRDs6_ueLmex3SoqwhuolkuN3O05l4rqx5h1dKX8eb46Ul-CCSrq/pubhtml?gid=0&single=true
 *
 * Accepted format string patterns:
 * | Unit                            |Prior| Pattern | Result examples                   | Notes |
 * |---------------------------------|-----|---------|-----------------------------------|-------|
 * | Era                             | 140 | G..GGG  | AD, BC                            |       |
 * |                                 |     | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 |     | GGGGG   | A, B                              |       |
 * | Calendar year                   | 130 | y       | 44, 1, 1900, 2017, 9999           | 4     |
 * |                                 |     | yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | yy      | 44, 01, 00, 17                    | 4     |
 * |                                 |     | yyy     | 044, 001, 123, 999                | 4     |
 * |                                 |     | yyyy    | 0044, 0001, 1900, 2017            | 4     |
 * |                                 |     | yyyyy   | ...                               | 2,4   |
 * | Local week-numbering year       | 130 | Y       | 44, 1, 1900, 2017, 9000           | 4     |
 * |                                 |     | Yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | YY      | 44, 01, 00, 17                    | 4,6   |
 * |                                 |     | YYY     | 044, 001, 123, 999                | 4     |
 * |                                 |     | YYYY    | 0044, 0001, 1900, 2017            | 4,6   |
 * |                                 |     | YYYYY   | ...                               | 2,4   |
 * | ISO week-numbering year         | 130 | R       | -43, 1, 1900, 2017, 9999, -9999   | 4,5   |
 * |                                 |     | RR      | -43, 01, 00, 17                   | 4,5   |
 * |                                 |     | RRR     | -043, 001, 123, 999, -999         | 4,5   |
 * |                                 |     | RRRR    | -0043, 0001, 2017, 9999, -9999    | 4,5   |
 * |                                 |     | RRRRR   | ...                               | 2,4,5 |
 * | Extended year                   | 130 | u       | -43, 1, 1900, 2017, 9999, -999    | 4     |
 * |                                 |     | uu      | -43, 01, 99, -99                  | 4     |
 * |                                 |     | uuu     | -043, 001, 123, 999, -999         | 4     |
 * |                                 |     | uuuu    | -0043, 0001, 2017, 9999, -9999    | 4     |
 * |                                 |     | uuuuu   | ...                               | 2,4   |
 * | Quarter (formatting)            | 120 | Q       | 1, 2, 3, 4                        |       |
 * |                                 |     | Qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | QQ      | 01, 02, 03, 04                    |       |
 * |                                 |     | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | 120 | q       | 1, 2, 3, 4                        |       |
 * |                                 |     | qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | qq      | 01, 02, 03, 04                    |       |
 * |                                 |     | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | qqqqq   | 1, 2, 3, 4                        | 3     |
 * | Month (formatting)              | 110 | M       | 1, 2, ..., 12                     |       |
 * |                                 |     | Mo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | MM      | 01, 02, ..., 12                   |       |
 * |                                 |     | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | MMMM    | January, February, ..., December  | 2     |
 * |                                 |     | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | 110 | L       | 1, 2, ..., 12                     |       |
 * |                                 |     | Lo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | LL      | 01, 02, ..., 12                   |       |
 * |                                 |     | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | LLLL    | January, February, ..., December  | 2     |
 * |                                 |     | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | 100 | w       | 1, 2, ..., 53                     |       |
 * |                                 |     | wo      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | 100 | I       | 1, 2, ..., 53                     | 5     |
 * |                                 |     | Io      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | II      | 01, 02, ..., 53                   | 5     |
 * | Day of month                    |  90 | d       | 1, 2, ..., 31                     |       |
 * |                                 |     | do      | 1st, 2nd, ..., 31st               | 5     |
 * |                                 |     | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     |  90 | D       | 1, 2, ..., 365, 366               | 7     |
 * |                                 |     | Do      | 1st, 2nd, ..., 365th, 366th       | 5     |
 * |                                 |     | DD      | 01, 02, ..., 365, 366             | 7     |
 * |                                 |     | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 |     | DDDD    | ...                               | 2     |
 * | Day of week (formatting)        |  90 | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 |     | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    |  90 | i       | 1, 2, 3, ..., 7                   | 5     |
 * |                                 |     | io      | 1st, 2nd, ..., 7th                | 5     |
 * |                                 |     | ii      | 01, 02, ..., 07                   | 5     |
 * |                                 |     | iii     | Mon, Tue, Wed, ..., Sun           | 5     |
 * |                                 |     | iiii    | Monday, Tuesday, ..., Sunday      | 2,5   |
 * |                                 |     | iiiii   | M, T, W, T, F, S, S               | 5     |
 * |                                 |     | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 5     |
 * | Local day of week (formatting)  |  90 | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | eo      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | ee      | 02, 03, ..., 01                   |       |
 * |                                 |     | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 |     | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) |  90 | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | co      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | cc      | 02, 03, ..., 01                   |       |
 * |                                 |     | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 |     | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          |  80 | a..aaa  | AM, PM                            |       |
 * |                                 |     | aaaa    | a.m., p.m.                        | 2     |
 * |                                 |     | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          |  80 | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 |     | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 |     | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             |  80 | B..BBB  | at night, in the morning, ...     |       |
 * |                                 |     | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 |     | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     |  70 | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 |     | ho      | 1st, 2nd, ..., 11th, 12th         | 5     |
 * |                                 |     | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     |  70 | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 |     | Ho      | 0th, 1st, 2nd, ..., 23rd          | 5     |
 * |                                 |     | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     |  70 | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 |     | Ko      | 1st, 2nd, ..., 11th, 0th          | 5     |
 * |                                 |     | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     |  70 | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 |     | ko      | 24th, 1st, 2nd, ..., 23rd         | 5     |
 * |                                 |     | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          |  60 | m       | 0, 1, ..., 59                     |       |
 * |                                 |     | mo      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | mm      | 00, 01, ..., 59                   |       |
 * | Second                          |  50 | s       | 0, 1, ..., 59                     |       |
 * |                                 |     | so      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | ss      | 00, 01, ..., 59                   |       |
 * | Seconds timestamp               |  40 | t       | 512969520                         |       |
 * |                                 |     | tt      | ...                               | 2     |
 * | Fraction of second              |  30 | S       | 0, 1, ..., 9                      |       |
 * |                                 |     | SS      | 00, 01, ..., 99                   |       |
 * |                                 |     | SSS     | 000, 001, ..., 999                |       |
 * |                                 |     | SSSS    | ...                               | 2     |
 * | Milliseconds timestamp          |  20 | T       | 512969520900                      |       |
 * |                                 |     | TT      | ...                               | 2     |
 * | Timezone (ISO-8601 w/ Z)        |  10 | X       | -08, +0530, Z                     |       |
 * |                                 |     | XX      | -0800, +0530, Z                   |       |
 * |                                 |     | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 |     | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 |     | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       |  10 | x       | -08, +0530, +00                   |       |
 * |                                 |     | xx      | -0800, +0530, +0000               |       |
 * |                                 |     | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 |     | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 |     | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Long localized date             |  NA | P       | 05/29/1453                        | 5,8   |
 * |                                 |     | PP      | May 29, 1453                      |       |
 * |                                 |     | PPP     | May 29th, 1453                    |       |
 * |                                 |     | PPPP    | Sunday, May 29th, 1453            | 2,5,8 |
 * | Long localized time             |  NA | p       | 12:00 AM                          | 5,8   |
 * |                                 |     | pp      | 12:00:00 AM                       |       |
 * | Combination of date and time    |  NA | Pp      | 05/29/1453, 12:00 AM              |       |
 * |                                 |     | PPpp    | May 29, 1453, 12:00:00 AM         |       |
 * |                                 |     | PPPpp   | May 29th, 1453 at ...             |       |
 * |                                 |     | PPPPpp  | Sunday, May 29th, 1453 at ...     | 2,5,8 |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular.
 *    In `format` function, they will produce different result:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 *    `parse` will try to match both formatting and stand-alone units interchangeably.
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table:
 *    - for numerical units (`yyyyyyyy`) `parse` will try to match a number
 *      as wide as the sequence
 *    - for text units (`MMMMMMMM`) `parse` will try to match the widest variation of the unit.
 *      These variations are marked with "2" in the last column of the table.
 *
 * 3. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 4. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` will try to guess the century of two digit year by proximity with `referenceDate`:
 *
 *    `parse('50', 'yy', new Date(2018, 0, 1)) //=> Sat Jan 01 2050 00:00:00`
 *
 *    `parse('75', 'yy', new Date(2018, 0, 1)) //=> Wed Jan 01 1975 00:00:00`
 *
 *    while `uu` will just assign the year as is:
 *
 *    `parse('50', 'uu', new Date(2018, 0, 1)) //=> Sat Jan 01 0050 00:00:00`
 *
 *    `parse('75', 'uu', new Date(2018, 0, 1)) //=> Tue Jan 01 0075 00:00:00`
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [setISOWeekYear](https://date-fns.org/docs/setISOWeekYear)
 *    and [setWeekYear](https://date-fns.org/docs/setWeekYear)).
 *
 * 5. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 6. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 7. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 8. `P+` tokens do not have a defined priority since they are merely aliases to other tokens based
 *    on the given locale.
 *
 *    using `en-US` locale: `P` => `MM/dd/yyyy`
 *    using `en-US` locale: `p` => `hh:mm a`
 *    using `pt-BR` locale: `P` => `dd/MM/yyyy`
 *    using `pt-BR` locale: `p` => `HH:mm`
 *
 * Values will be assigned to the date in the descending order of its unit's priority.
 * Units of an equal priority overwrite each other in the order of appearance.
 *
 * If no values of higher priority are parsed (e.g. when parsing string 'January 1st' without a year),
 * the values will be taken from 3rd argument `referenceDate` which works as a context of parsing.
 *
 * `referenceDate` must be passed for correct work of the function.
 * If you're not sure which `referenceDate` to supply, create a new instance of Date:
 * `parse('02/11/2014', 'MM/dd/yyyy', new Date())`
 * In this case parsing will be done in the context of the current date.
 * If `referenceDate` is `Invalid Date` or a value not convertible to valid `Date`,
 * then `Invalid Date` will be returned.
 *
 * The result may vary by locale.
 *
 * If `formatString` matches with `dateString` but does not provides tokens, `referenceDate` will be returned.
 *
 * If parsing failed, `Invalid Date` will be returned.
 * Invalid Date is a Date, whose time value is NaN.
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param dateStr - The string to parse
 * @param formatStr - The string of tokens
 * @param referenceDate - defines values missing from the parsed dateString
 * @param options - An object with options.
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @returns The parsed date
 *
 * @throws `options.locale` must contain `match` property
 * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Parse 11 February 2014 from middle-endian format:
 * var result = parse('02/11/2014', 'MM/dd/yyyy', new Date())
 * //=> Tue Feb 11 2014 00:00:00
 *
 * @example
 * // Parse 28th of February in Esperanto locale in the context of 2010 year:
 * import eo from 'date-fns/locale/eo'
 * var result = parse('28-a de februaro', "do 'de' MMMM", new Date(2010, 0, 1), {
 *   locale: eo
 * })
 * //=> Sun Feb 28 2010 00:00:00
 */
function parse(dateStr, formatStr, referenceDate, options) {
  const invalidDate = () => (0, _constructFrom.constructFrom)(options?.in || referenceDate, NaN);
  const defaultOptions = (0, _getDefaultOptions.getDefaultOptions)();
  const locale = options?.locale ?? defaultOptions.locale ?? _defaultLocale.defaultLocale;
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
  if (!formatStr) return dateStr ? invalidDate() : (0, _toDate.toDate)(referenceDate, options?.in);
  const subFnOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale
  };

  // If timezone isn't specified, it will try to use the context or
  // the reference date and fallback to the system time zone.
  const setters = [new _Setter.DateTimezoneSetter(options?.in, referenceDate)];
  const tokens = formatStr.match(longFormattingTokensRegExp).map(substring => {
    const firstCharacter = substring[0];
    if (firstCharacter in _longFormatters.longFormatters) {
      const longFormatter = _longFormatters.longFormatters[firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join("").match(formattingTokensRegExp);
  const usedTokens = [];
  for (let token of tokens) {
    if (!options?.useAdditionalWeekYearTokens && (0, _protectedTokens.isProtectedWeekYearToken)(token)) {
      (0, _protectedTokens.warnOrThrowProtectedError)(token, formatStr, dateStr);
    }
    if (!options?.useAdditionalDayOfYearTokens && (0, _protectedTokens.isProtectedDayOfYearToken)(token)) {
      (0, _protectedTokens.warnOrThrowProtectedError)(token, formatStr, dateStr);
    }
    const firstCharacter = token[0];
    const parser = _parsers.parsers[firstCharacter];
    if (parser) {
      const {
        incompatibleTokens
      } = parser;
      if (Array.isArray(incompatibleTokens)) {
        const incompatibleToken = usedTokens.find(usedToken => incompatibleTokens.includes(usedToken.token) || usedToken.token === firstCharacter);
        if (incompatibleToken) {
          throw new RangeError(`The format string mustn't contain \`${incompatibleToken.fullToken}\` and \`${token}\` at the same time`);
        }
      } else if (parser.incompatibleTokens === "*" && usedTokens.length > 0) {
        throw new RangeError(`The format string mustn't contain \`${token}\` and any other token at the same time`);
      }
      usedTokens.push({
        token: firstCharacter,
        fullToken: token
      });
      const parseResult = parser.run(dateStr, token, locale.match, subFnOptions);
      if (!parseResult) {
        return invalidDate();
      }
      setters.push(parseResult.setter);
      dateStr = parseResult.rest;
    } else {
      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
      }

      // Replace two single quote characters with one single quote character
      if (token === "''") {
        token = "'";
      } else if (firstCharacter === "'") {
        token = cleanEscapedString(token);
      }

      // Cut token from string, or, if string doesn't match the token, return Invalid Date
      if (dateStr.indexOf(token) === 0) {
        dateStr = dateStr.slice(token.length);
      } else {
        return invalidDate();
      }
    }
  }

  // Check if the remaining input contains something other than whitespace
  if (dateStr.length > 0 && notWhitespaceRegExp.test(dateStr)) {
    return invalidDate();
  }
  const uniquePrioritySetters = setters.map(setter => setter.priority).sort((a, b) => b - a).filter((priority, index, array) => array.indexOf(priority) === index).map(priority => setters.filter(setter => setter.priority === priority).sort((a, b) => b.subPriority - a.subPriority)).map(setterArray => setterArray[0]);
  let date = (0, _toDate.toDate)(referenceDate, options?.in);
  if (isNaN(+date)) return invalidDate();
  const flags = {};
  for (const setter of uniquePrioritySetters) {
    if (!setter.validate(date, subFnOptions)) {
      return invalidDate();
    }
    const result = setter.set(date, flags, subFnOptions);
    // Result is tuple (date, flags)
    if (Array.isArray(result)) {
      date = result[0];
      Object.assign(flags, result[1]);
      // Result is date
    } else {
      date = result;
    }
  }
  return date;
}
function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

// Fallback for modularized imports:
var _default = exports.default = parse;
},{"./_lib/defaultLocale.js":"node_modules/date-fns/_lib/defaultLocale.js","./_lib/format/longFormatters.js":"node_modules/date-fns/_lib/format/longFormatters.js","./_lib/protectedTokens.js":"node_modules/date-fns/_lib/protectedTokens.js","./constructFrom.js":"node_modules/date-fns/constructFrom.js","./getDefaultOptions.js":"node_modules/date-fns/getDefaultOptions.js","./toDate.js":"node_modules/date-fns/toDate.js","./parse/_lib/Setter.js":"node_modules/date-fns/parse/_lib/Setter.js","./parse/_lib/parsers.js":"node_modules/date-fns/parse/_lib/parsers.js"}],"node_modules/date-fns/isMatch.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.isMatch = isMatch;
var _isValid = require("./isValid.js");
var _parse = require("./parse.js");
/**
 * The {@link isMatch} function options.
 */

/**
 * @name isMatch
 * @category Common Helpers
 * @summary validates the date string against given formats
 *
 * @description
 * Return the true if given date is string correct against the given format else
 * will return false.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters in the format string wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 *
 * Format of the format string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 5 below the table).
 *
 * Not all tokens are compatible. Combinations that don't make sense or could lead to bugs are prohibited
 * and will throw `RangeError`. For example usage of 24-hour format token with AM/PM token will throw an exception:
 *
 * ```javascript
 * isMatch('23 AM', 'HH a')
 * //=> RangeError: The format string mustn't contain `HH` and `a` at the same time
 * ```
 *
 * See the compatibility table: https://docs.google.com/spreadsheets/d/e/2PACX-1vQOPU3xUhplll6dyoMmVUXHKl_8CRDs6_ueLmex3SoqwhuolkuN3O05l4rqx5h1dKX8eb46Ul-CCSrq/pubhtml?gid=0&single=true
 *
 * Accepted format string patterns:
 * | Unit                            |Prior| Pattern | Result examples                   | Notes |
 * |---------------------------------|-----|---------|-----------------------------------|-------|
 * | Era                             | 140 | G..GGG  | AD, BC                            |       |
 * |                                 |     | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 |     | GGGGG   | A, B                              |       |
 * | Calendar year                   | 130 | y       | 44, 1, 1900, 2017, 9999           | 4     |
 * |                                 |     | yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | yy      | 44, 01, 00, 17                    | 4     |
 * |                                 |     | yyy     | 044, 001, 123, 999                | 4     |
 * |                                 |     | yyyy    | 0044, 0001, 1900, 2017            | 4     |
 * |                                 |     | yyyyy   | ...                               | 2,4   |
 * | Local week-numbering year       | 130 | Y       | 44, 1, 1900, 2017, 9000           | 4     |
 * |                                 |     | Yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | YY      | 44, 01, 00, 17                    | 4,6   |
 * |                                 |     | YYY     | 044, 001, 123, 999                | 4     |
 * |                                 |     | YYYY    | 0044, 0001, 1900, 2017            | 4,6   |
 * |                                 |     | YYYYY   | ...                               | 2,4   |
 * | ISO week-numbering year         | 130 | R       | -43, 1, 1900, 2017, 9999, -9999   | 4,5   |
 * |                                 |     | RR      | -43, 01, 00, 17                   | 4,5   |
 * |                                 |     | RRR     | -043, 001, 123, 999, -999         | 4,5   |
 * |                                 |     | RRRR    | -0043, 0001, 2017, 9999, -9999    | 4,5   |
 * |                                 |     | RRRRR   | ...                               | 2,4,5 |
 * | Extended year                   | 130 | u       | -43, 1, 1900, 2017, 9999, -999    | 4     |
 * |                                 |     | uu      | -43, 01, 99, -99                  | 4     |
 * |                                 |     | uuu     | -043, 001, 123, 999, -999         | 4     |
 * |                                 |     | uuuu    | -0043, 0001, 2017, 9999, -9999    | 4     |
 * |                                 |     | uuuuu   | ...                               | 2,4   |
 * | Quarter (formatting)            | 120 | Q       | 1, 2, 3, 4                        |       |
 * |                                 |     | Qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | QQ      | 01, 02, 03, 04                    |       |
 * |                                 |     | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | 120 | q       | 1, 2, 3, 4                        |       |
 * |                                 |     | qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | qq      | 01, 02, 03, 04                    |       |
 * |                                 |     | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | qqqqq   | 1, 2, 3, 4                        | 3     |
 * | Month (formatting)              | 110 | M       | 1, 2, ..., 12                     |       |
 * |                                 |     | Mo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | MM      | 01, 02, ..., 12                   |       |
 * |                                 |     | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | MMMM    | January, February, ..., December  | 2     |
 * |                                 |     | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | 110 | L       | 1, 2, ..., 12                     |       |
 * |                                 |     | Lo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | LL      | 01, 02, ..., 12                   |       |
 * |                                 |     | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | LLLL    | January, February, ..., December  | 2     |
 * |                                 |     | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | 100 | w       | 1, 2, ..., 53                     |       |
 * |                                 |     | wo      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | 100 | I       | 1, 2, ..., 53                     | 5     |
 * |                                 |     | Io      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | II      | 01, 02, ..., 53                   | 5     |
 * | Day of month                    |  90 | d       | 1, 2, ..., 31                     |       |
 * |                                 |     | do      | 1st, 2nd, ..., 31st               | 5     |
 * |                                 |     | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     |  90 | D       | 1, 2, ..., 365, 366               | 7     |
 * |                                 |     | Do      | 1st, 2nd, ..., 365th, 366th       | 5     |
 * |                                 |     | DD      | 01, 02, ..., 365, 366             | 7     |
 * |                                 |     | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 |     | DDDD    | ...                               | 2     |
 * | Day of week (formatting)        |  90 | E..EEE  | Mon, Tue, Wed, ..., Su            |       |
 * |                                 |     | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 |     | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    |  90 | i       | 1, 2, 3, ..., 7                   | 5     |
 * |                                 |     | io      | 1st, 2nd, ..., 7th                | 5     |
 * |                                 |     | ii      | 01, 02, ..., 07                   | 5     |
 * |                                 |     | iii     | Mon, Tue, Wed, ..., Su            | 5     |
 * |                                 |     | iiii    | Monday, Tuesday, ..., Sunday      | 2,5   |
 * |                                 |     | iiiii   | M, T, W, T, F, S, S               | 5     |
 * |                                 |     | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 5     |
 * | Local day of week (formatting)  |  90 | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | eo      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | ee      | 02, 03, ..., 01                   |       |
 * |                                 |     | eee     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 |     | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 |     | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) |  90 | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | co      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | cc      | 02, 03, ..., 01                   |       |
 * |                                 |     | ccc     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 |     | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 |     | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          |  80 | a..aaa  | AM, PM                            |       |
 * |                                 |     | aaaa    | a.m., p.m.                        | 2     |
 * |                                 |     | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          |  80 | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 |     | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 |     | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             |  80 | B..BBB  | at night, in the morning, ...     |       |
 * |                                 |     | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 |     | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     |  70 | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 |     | ho      | 1st, 2nd, ..., 11th, 12th         | 5     |
 * |                                 |     | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     |  70 | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 |     | Ho      | 0th, 1st, 2nd, ..., 23rd          | 5     |
 * |                                 |     | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     |  70 | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 |     | Ko      | 1st, 2nd, ..., 11th, 0th          | 5     |
 * |                                 |     | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     |  70 | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 |     | ko      | 24th, 1st, 2nd, ..., 23rd         | 5     |
 * |                                 |     | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          |  60 | m       | 0, 1, ..., 59                     |       |
 * |                                 |     | mo      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | mm      | 00, 01, ..., 59                   |       |
 * | Second                          |  50 | s       | 0, 1, ..., 59                     |       |
 * |                                 |     | so      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | ss      | 00, 01, ..., 59                   |       |
 * | Seconds timestamp               |  40 | t       | 512969520                         |       |
 * |                                 |     | tt      | ...                               | 2     |
 * | Fraction of second              |  30 | S       | 0, 1, ..., 9                      |       |
 * |                                 |     | SS      | 00, 01, ..., 99                   |       |
 * |                                 |     | SSS     | 000, 001, ..., 999                |       |
 * |                                 |     | SSSS    | ...                               | 2     |
 * | Milliseconds timestamp          |  20 | T       | 512969520900                      |       |
 * |                                 |     | TT      | ...                               | 2     |
 * | Timezone (ISO-8601 w/ Z)        |  10 | X       | -08, +0530, Z                     |       |
 * |                                 |     | XX      | -0800, +0530, Z                   |       |
 * |                                 |     | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 |     | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 |     | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       |  10 | x       | -08, +0530, +00                   |       |
 * |                                 |     | xx      | -0800, +0530, +0000               |       |
 * |                                 |     | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 |     | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 |     | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Long localized date             |  NA | P       | 05/29/1453                        | 5,8   |
 * |                                 |     | PP      | May 29, 1453                      |       |
 * |                                 |     | PPP     | May 29th, 1453                    |       |
 * |                                 |     | PPPP    | Sunday, May 29th, 1453            | 2,5,8 |
 * | Long localized time             |  NA | p       | 12:00 AM                          | 5,8   |
 * |                                 |     | pp      | 12:00:00 AM                       |       |
 * | Combination of date and time    |  NA | Pp      | 05/29/1453, 12:00 AM              |       |
 * |                                 |     | PPpp    | May 29, 1453, 12:00:00 AM         |       |
 * |                                 |     | PPPpp   | May 29th, 1453 at ...             |       |
 * |                                 |     | PPPPpp  | Sunday, May 29th, 1453 at ...     | 2,5,8 |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular.
 *    In `format` function, they will produce different result:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 *    `isMatch` will try to match both formatting and stand-alone units interchangeably.
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table:
 *    - for numerical units (`yyyyyyyy`) `isMatch` will try to match a number
 *      as wide as the sequence
 *    - for text units (`MMMMMMMM`) `isMatch` will try to match the widest variation of the unit.
 *      These variations are marked with "2" in the last column of the table.
 *
 * 3. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 4. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` will try to guess the century of two digit year by proximity with `referenceDate`:
 *
 *    `isMatch('50', 'yy') //=> true`
 *
 *    `isMatch('75', 'yy') //=> true`
 *
 *    while `uu` will use the year as is:
 *
 *    `isMatch('50', 'uu') //=> true`
 *
 *    `isMatch('75', 'uu') //=> true`
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [setISOWeekYear](https://date-fns.org/docs/setISOWeekYear)
 *    and [setWeekYear](https://date-fns.org/docs/setWeekYear)).
 *
 * 5. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 6. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 7. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 8. `P+` tokens do not have a defined priority since they are merely aliases to other tokens based
 *    on the given locale.
 *
 *    using `en-US` locale: `P` => `MM/dd/yyyy`
 *    using `en-US` locale: `p` => `hh:mm a`
 *    using `pt-BR` locale: `P` => `dd/MM/yyyy`
 *    using `pt-BR` locale: `p` => `HH:mm`
 *
 * Values will be checked in the descending order of its unit's priority.
 * Units of an equal priority overwrite each other in the order of appearance.
 *
 * If no values of higher priority are matched (e.g. when matching string 'January 1st' without a year),
 * the values will be taken from today's using `new Date()` date which works as a context of parsing.
 *
 * The result may vary by locale.
 *
 * If `formatString` matches with `dateString` but does not provides tokens, `referenceDate` will be returned.
 *
 * @param dateStr - The date string to verify
 * @param format - The string of tokens
 * @param options - An object with options.
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @returns Is format string a match for date string?
 *
 * @throws `options.locale` must contain `match` property
 * @throws use `yyyy` instead of `YYYY` for formatting years; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Match 11 February 2014 from middle-endian format:
 * const result = isMatch('02/11/2014', 'MM/dd/yyyy')
 * //=> true
 *
 * @example
 * // Match 28th of February in Esperanto locale in the context of 2010 year:
 * import eo from 'date-fns/locale/eo'
 * const result = isMatch('28-a de februaro', "do 'de' MMMM", {
 *   locale: eo
 * })
 * //=> true
 */
function isMatch(dateStr, formatStr, options) {
  return (0, _isValid.isValid)((0, _parse.parse)(dateStr, formatStr, new Date(), options));
}

// Fallback for modularized imports:
var _default = exports.default = isMatch;
},{"./isValid.js":"node_modules/date-fns/isValid.js","./parse.js":"node_modules/date-fns/parse.js"}],"node_modules/date-fns/isMonday.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.isMonday = isMonday;
var _toDate = require("./toDate.js");
/**
 * The {@link isMonday} function options.
 */

/**
 * @name isMonday
 * @category Weekday Helpers
 * @summary Is the given date Monday?
 *
 * @description
 * Is the given date Monday?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is Monday
 *
 * @example
 * // Is 22 September 2014 Monday?
 * const result = isMonday(new Date(2014, 8, 22))
 * //=> true
 */
function isMonday(date, options) {
  return (0, _toDate.toDate)(date, options?.in).getDay() === 1;
}

// Fallback for modularized imports:
var _default = exports.default = isMonday;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/isPast.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.isPast = isPast;
var _toDate = require("./toDate.js");
/**
 * @name isPast
 * @category Common Helpers
 * @summary Is the given date in the past?
 * @pure false
 *
 * @description
 * Is the given date in the past?
 *
 * @param date - The date to check
 *
 * @returns The date is in the past
 *
 * @example
 * // If today is 6 October 2014, is 2 July 2014 in the past?
 * const result = isPast(new Date(2014, 6, 2))
 * //=> true
 */
function isPast(date) {
  return +(0, _toDate.toDate)(date) < Date.now();
}

// Fallback for modularized imports:
var _default = exports.default = isPast;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/startOfHour.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.startOfHour = startOfHour;
var _toDate = require("./toDate.js");
/**
 * The {@link startOfHour} function options.
 */

/**
 * @name startOfHour
 * @category Hour Helpers
 * @summary Return the start of an hour for the given date.
 *
 * @description
 * Return the start of an hour for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of an hour
 *
 * @example
 * // The start of an hour for 2 September 2014 11:55:00:
 * const result = startOfHour(new Date(2014, 8, 2, 11, 55))
 * //=> Tue Sep 02 2014 11:00:00
 */
function startOfHour(date, options) {
  const _date = (0, _toDate.toDate)(date, options?.in);
  _date.setMinutes(0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
var _default = exports.default = startOfHour;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/isSameHour.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.isSameHour = isSameHour;
var _normalizeDates = require("./_lib/normalizeDates.js");
var _startOfHour = require("./startOfHour.js");
/**
 * The {@link isSameHour} function options.
 */

/**
 * @name isSameHour
 * @category Hour Helpers
 * @summary Are the given dates in the same hour (and same day)?
 *
 * @description
 * Are the given dates in the same hour (and same day)?
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same hour (and same day)
 *
 * @example
 * // Are 4 September 2014 06:00:00 and 4 September 06:30:00 in the same hour?
 * const result = isSameHour(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 6, 30))
 * //=> true
 *
 * @example
 * // Are 4 September 2014 06:00:00 and 5 September 06:00:00 in the same hour?
 * const result = isSameHour(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 5, 6, 0))
 * //=> false
 */
function isSameHour(dateLeft, dateRight, options) {
  const [dateLeft_, dateRight_] = (0, _normalizeDates.normalizeDates)(options?.in, dateLeft, dateRight);
  return +(0, _startOfHour.startOfHour)(dateLeft_) === +(0, _startOfHour.startOfHour)(dateRight_);
}

// Fallback for modularized imports:
var _default = exports.default = isSameHour;
},{"./_lib/normalizeDates.js":"node_modules/date-fns/_lib/normalizeDates.js","./startOfHour.js":"node_modules/date-fns/startOfHour.js"}],"node_modules/date-fns/isSameWeek.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.isSameWeek = isSameWeek;
var _normalizeDates = require("./_lib/normalizeDates.js");
var _startOfWeek = require("./startOfWeek.js");
/**
 * The {@link isSameWeek} function options.
 */

/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same week (and month and year)
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = (0, _normalizeDates.normalizeDates)(options?.in, laterDate, earlierDate);
  return +(0, _startOfWeek.startOfWeek)(laterDate_, options) === +(0, _startOfWeek.startOfWeek)(earlierDate_, options);
}

// Fallback for modularized imports:
var _default = exports.default = isSameWeek;
},{"./_lib/normalizeDates.js":"node_modules/date-fns/_lib/normalizeDates.js","./startOfWeek.js":"node_modules/date-fns/startOfWeek.js"}],"node_modules/date-fns/isSameISOWeek.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.isSameISOWeek = isSameISOWeek;
var _isSameWeek = require("./isSameWeek.js");
/**
 * The {@link isSameISOWeek} function options.
 */

/**
 * @name isSameISOWeek
 * @category ISO Week Helpers
 * @summary Are the given dates in the same ISO week (and year)?
 *
 * @description
 * Are the given dates in the same ISO week (and year)?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same ISO week (and year)
 *
 * @example
 * // Are 1 September 2014 and 7 September 2014 in the same ISO week?
 * const result = isSameISOWeek(new Date(2014, 8, 1), new Date(2014, 8, 7))
 * //=> true
 *
 * @example
 * // Are 1 September 2014 and 1 September 2015 in the same ISO week?
 * const result = isSameISOWeek(new Date(2014, 8, 1), new Date(2015, 8, 1))
 * //=> false
 */
function isSameISOWeek(laterDate, earlierDate, options) {
  return (0, _isSameWeek.isSameWeek)(laterDate, earlierDate, {
    ...options,
    weekStartsOn: 1
  });
}

// Fallback for modularized imports:
var _default = exports.default = isSameISOWeek;
},{"./isSameWeek.js":"node_modules/date-fns/isSameWeek.js"}],"node_modules/date-fns/isSameISOWeekYear.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.isSameISOWeekYear = isSameISOWeekYear;
var _startOfISOWeekYear = require("./startOfISOWeekYear.js");
var _normalizeDates = require("./_lib/normalizeDates.js");
/**
 * The {@link isSameISOWeekYear} function options.
 */

/**
 * @name isSameISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Are the given dates in the same ISO week-numbering year?
 *
 * @description
 * Are the given dates in the same ISO week-numbering year?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same ISO week-numbering year
 *
 * @example
 * // Are 29 December 2003 and 2 January 2005 in the same ISO week-numbering year?
 * const result = isSameISOWeekYear(new Date(2003, 11, 29), new Date(2005, 0, 2))
 * //=> true
 */
function isSameISOWeekYear(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = (0, _normalizeDates.normalizeDates)(options?.in, laterDate, earlierDate);
  return +(0, _startOfISOWeekYear.startOfISOWeekYear)(laterDate_) === +(0, _startOfISOWeekYear.startOfISOWeekYear)(earlierDate_);
}

// Fallback for modularized imports:
var _default = exports.default = isSameISOWeekYear;
},{"./startOfISOWeekYear.js":"node_modules/date-fns/startOfISOWeekYear.js","./_lib/normalizeDates.js":"node_modules/date-fns/_lib/normalizeDates.js"}],"node_modules/date-fns/startOfMinute.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.startOfMinute = startOfMinute;
var _toDate = require("./toDate.js");
/**
 * The {@link startOfMinute} function options.
 */

/**
 * @name startOfMinute
 * @category Minute Helpers
 * @summary Return the start of a minute for the given date.
 *
 * @description
 * Return the start of a minute for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a minute
 *
 * @example
 * // The start of a minute for 1 December 2014 22:15:45.400:
 * const result = startOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:00
 */
function startOfMinute(date, options) {
  const date_ = (0, _toDate.toDate)(date, options?.in);
  date_.setSeconds(0, 0);
  return date_;
}

// Fallback for modularized imports:
var _default = exports.default = startOfMinute;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/isSameMinute.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.isSameMinute = isSameMinute;
var _startOfMinute = require("./startOfMinute.js");
/**
 * @name isSameMinute
 * @category Minute Helpers
 * @summary Are the given dates in the same minute (and hour and day)?
 *
 * @description
 * Are the given dates in the same minute (and hour and day)?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 *
 * @returns The dates are in the same minute (and hour and day)
 *
 * @example
 * // Are 4 September 2014 06:30:00 and 4 September 2014 06:30:15 in the same minute?
 * const result = isSameMinute(
 *   new Date(2014, 8, 4, 6, 30),
 *   new Date(2014, 8, 4, 6, 30, 15)
 * )
 * //=> true
 *
 * @example
 * // Are 4 September 2014 06:30:00 and 5 September 2014 06:30:00 in the same minute?
 * const result = isSameMinute(
 *   new Date(2014, 8, 4, 6, 30),
 *   new Date(2014, 8, 5, 6, 30)
 * )
 * //=> false
 */
function isSameMinute(laterDate, earlierDate) {
  return +(0, _startOfMinute.startOfMinute)(laterDate) === +(0, _startOfMinute.startOfMinute)(earlierDate);
}

// Fallback for modularized imports:
var _default = exports.default = isSameMinute;
},{"./startOfMinute.js":"node_modules/date-fns/startOfMinute.js"}],"node_modules/date-fns/isSameMonth.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.isSameMonth = isSameMonth;
var _normalizeDates = require("./_lib/normalizeDates.js");
/**
 * The {@link isSameMonth} function options.
 */

/**
 * @name isSameMonth
 * @category Month Helpers
 * @summary Are the given dates in the same month (and year)?
 *
 * @description
 * Are the given dates in the same month (and year)?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same month (and year)
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 *
 * @example
 * // Are 2 September 2014 and 25 September 2015 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2015, 8, 25))
 * //=> false
 */
function isSameMonth(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = (0, _normalizeDates.normalizeDates)(options?.in, laterDate, earlierDate);
  return laterDate_.getFullYear() === earlierDate_.getFullYear() && laterDate_.getMonth() === earlierDate_.getMonth();
}

// Fallback for modularized imports:
var _default = exports.default = isSameMonth;
},{"./_lib/normalizeDates.js":"node_modules/date-fns/_lib/normalizeDates.js"}],"node_modules/date-fns/isSameQuarter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.isSameQuarter = isSameQuarter;
var _normalizeDates = require("./_lib/normalizeDates.js");
var _startOfQuarter = require("./startOfQuarter.js");
/**
 * The {@link isSameQuarter} function options.
 */

/**
 * @name isSameQuarter
 * @category Quarter Helpers
 * @summary Are the given dates in the same quarter (and year)?
 *
 * @description
 * Are the given dates in the same quarter (and year)?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same quarter (and year)
 *
 * @example
 * // Are 1 January 2014 and 8 March 2014 in the same quarter?
 * const result = isSameQuarter(new Date(2014, 0, 1), new Date(2014, 2, 8))
 * //=> true
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same quarter?
 * const result = isSameQuarter(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameQuarter(laterDate, earlierDate, options) {
  const [dateLeft_, dateRight_] = (0, _normalizeDates.normalizeDates)(options?.in, laterDate, earlierDate);
  return +(0, _startOfQuarter.startOfQuarter)(dateLeft_) === +(0, _startOfQuarter.startOfQuarter)(dateRight_);
}

// Fallback for modularized imports:
var _default = exports.default = isSameQuarter;
},{"./_lib/normalizeDates.js":"node_modules/date-fns/_lib/normalizeDates.js","./startOfQuarter.js":"node_modules/date-fns/startOfQuarter.js"}],"node_modules/date-fns/startOfSecond.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.startOfSecond = startOfSecond;
var _toDate = require("./toDate.js");
/**
 * The {@link startOfSecond} function options.
 */

/**
 * @name startOfSecond
 * @category Second Helpers
 * @summary Return the start of a second for the given date.
 *
 * @description
 * Return the start of a second for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a second
 *
 * @example
 * // The start of a second for 1 December 2014 22:15:45.400:
 * const result = startOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:45.000
 */
function startOfSecond(date, options) {
  const date_ = (0, _toDate.toDate)(date, options?.in);
  date_.setMilliseconds(0);
  return date_;
}

// Fallback for modularized imports:
var _default = exports.default = startOfSecond;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/isSameSecond.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.isSameSecond = isSameSecond;
var _startOfSecond = require("./startOfSecond.js");
/**
 * @name isSameSecond
 * @category Second Helpers
 * @summary Are the given dates in the same second (and hour and day)?
 *
 * @description
 * Are the given dates in the same second (and hour and day)?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 *
 * @returns The dates are in the same second (and hour and day)
 *
 * @example
 * // Are 4 September 2014 06:30:15.000 and 4 September 2014 06:30.15.500 in the same second?
 * const result = isSameSecond(
 *   new Date(2014, 8, 4, 6, 30, 15),
 *   new Date(2014, 8, 4, 6, 30, 15, 500)
 * )
 * //=> true
 *
 * @example
 * // Are 4 September 2014 06:00:15.000 and 4 September 2014 06:01.15.000 in the same second?
 * const result = isSameSecond(
 *   new Date(2014, 8, 4, 6, 0, 15),
 *   new Date(2014, 8, 4, 6, 1, 15)
 * )
 * //=> false
 *
 * @example
 * // Are 4 September 2014 06:00:15.000 and 5 September 2014 06:00.15.000 in the same second?
 * const result = isSameSecond(
 *   new Date(2014, 8, 4, 6, 0, 15),
 *   new Date(2014, 8, 5, 6, 0, 15)
 * )
 * //=> false
 */
function isSameSecond(laterDate, earlierDate) {
  return +(0, _startOfSecond.startOfSecond)(laterDate) === +(0, _startOfSecond.startOfSecond)(earlierDate);
}

// Fallback for modularized imports:
var _default = exports.default = isSameSecond;
},{"./startOfSecond.js":"node_modules/date-fns/startOfSecond.js"}],"node_modules/date-fns/isSameYear.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.isSameYear = isSameYear;
var _normalizeDates = require("./_lib/normalizeDates.js");
/**
 * The {@link isSameYear} function options.
 */

/**
 * @name isSameYear
 * @category Year Helpers
 * @summary Are the given dates in the same year?
 *
 * @description
 * Are the given dates in the same year?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same year
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same year?
 * const result = isSameYear(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 */
function isSameYear(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = (0, _normalizeDates.normalizeDates)(options?.in, laterDate, earlierDate);
  return laterDate_.getFullYear() === earlierDate_.getFullYear();
}

// Fallback for modularized imports:
var _default = exports.default = isSameYear;
},{"./_lib/normalizeDates.js":"node_modules/date-fns/_lib/normalizeDates.js"}],"node_modules/date-fns/isThisHour.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.isThisHour = isThisHour;
var _constructNow = require("./constructNow.js");
var _isSameHour = require("./isSameHour.js");
var _toDate = require("./toDate.js");
/**
 * The {@link isThisHour} function options.
 */

/**
 * @name isThisHour
 * @category Hour Helpers
 * @summary Is the given date in the same hour as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same hour as the current date?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is in this hour
 *
 * @example
 * // If now is 25 September 2014 18:30:15.500,
 * // is 25 September 2014 18:00:00 in this hour?
 * const result = isThisHour(new Date(2014, 8, 25, 18))
 * //=> true
 */
function isThisHour(date, options) {
  return (0, _isSameHour.isSameHour)((0, _toDate.toDate)(date, options?.in), (0, _constructNow.constructNow)(options?.in || date));
}

// Fallback for modularized imports:
var _default = exports.default = isThisHour;
},{"./constructNow.js":"node_modules/date-fns/constructNow.js","./isSameHour.js":"node_modules/date-fns/isSameHour.js","./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/isThisISOWeek.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.isThisISOWeek = isThisISOWeek;
var _constructFrom = require("./constructFrom.js");
var _constructNow = require("./constructNow.js");
var _isSameISOWeek = require("./isSameISOWeek.js");
/**
 * The {@link isThisISOWeek} function options.
 */

/**
 * @name isThisISOWeek
 * @category ISO Week Helpers
 * @summary Is the given date in the same ISO week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same ISO week as the current date?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is in this ISO week
 *
 * @example
 * // If today is 25 September 2014, is 22 September 2014 in this ISO week?
 * const result = isThisISOWeek(new Date(2014, 8, 22))
 * //=> true
 */
function isThisISOWeek(date, options) {
  return (0, _isSameISOWeek.isSameISOWeek)((0, _constructFrom.constructFrom)(options?.in || date, date), (0, _constructNow.constructNow)(options?.in || date));
}

// Fallback for modularized imports:
var _default = exports.default = isThisISOWeek;
},{"./constructFrom.js":"node_modules/date-fns/constructFrom.js","./constructNow.js":"node_modules/date-fns/constructNow.js","./isSameISOWeek.js":"node_modules/date-fns/isSameISOWeek.js"}],"node_modules/date-fns/isThisMinute.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.isThisMinute = isThisMinute;
var _constructNow = require("./constructNow.js");
var _isSameMinute = require("./isSameMinute.js");
/**
 * @name isThisMinute
 * @category Minute Helpers
 * @summary Is the given date in the same minute as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same minute as the current date?
 *
 * @param date - The date to check
 *
 * @returns The date is in this minute
 *
 * @example
 * // If now is 25 September 2014 18:30:15.500,
 * // is 25 September 2014 18:30:00 in this minute?
 * const result = isThisMinute(new Date(2014, 8, 25, 18, 30))
 * //=> true
 */

function isThisMinute(date) {
  return (0, _isSameMinute.isSameMinute)(date, (0, _constructNow.constructNow)(date));
}

// Fallback for modularized imports:
var _default = exports.default = isThisMinute;
},{"./constructNow.js":"node_modules/date-fns/constructNow.js","./isSameMinute.js":"node_modules/date-fns/isSameMinute.js"}],"node_modules/date-fns/isThisMonth.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.isThisMonth = isThisMonth;
var _constructFrom = require("./constructFrom.js");
var _constructNow = require("./constructNow.js");
var _isSameMonth = require("./isSameMonth.js");
/**
 * The {@link isThisMonth} function options.
 */

/**
 * @name isThisMonth
 * @category Month Helpers
 * @summary Is the given date in the same month as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same month as the current date?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is in this month
 *
 * @example
 * // If today is 25 September 2014, is 15 September 2014 in this month?
 * const result = isThisMonth(new Date(2014, 8, 15))
 * //=> true
 */
function isThisMonth(date, options) {
  return (0, _isSameMonth.isSameMonth)((0, _constructFrom.constructFrom)(options?.in || date, date), (0, _constructNow.constructNow)(options?.in || date));
}

// Fallback for modularized imports:
var _default = exports.default = isThisMonth;
},{"./constructFrom.js":"node_modules/date-fns/constructFrom.js","./constructNow.js":"node_modules/date-fns/constructNow.js","./isSameMonth.js":"node_modules/date-fns/isSameMonth.js"}],"node_modules/date-fns/isThisQuarter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.isThisQuarter = isThisQuarter;
var _constructFrom = require("./constructFrom.js");
var _constructNow = require("./constructNow.js");
var _isSameQuarter = require("./isSameQuarter.js");
/**
 * The {@link isThisQuarter} function options.
 */

/**
 * @name isThisQuarter
 * @category Quarter Helpers
 * @summary Is the given date in the same quarter as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same quarter as the current date?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is in this quarter
 *
 * @example
 * // If today is 25 September 2014, is 2 July 2014 in this quarter?
 * const result = isThisQuarter(new Date(2014, 6, 2))
 * //=> true
 */
function isThisQuarter(date, options) {
  return (0, _isSameQuarter.isSameQuarter)((0, _constructFrom.constructFrom)(options?.in || date, date), (0, _constructNow.constructNow)(options?.in || date));
}

// Fallback for modularized imports:
var _default = exports.default = isThisQuarter;
},{"./constructFrom.js":"node_modules/date-fns/constructFrom.js","./constructNow.js":"node_modules/date-fns/constructNow.js","./isSameQuarter.js":"node_modules/date-fns/isSameQuarter.js"}],"node_modules/date-fns/isThisSecond.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.isThisSecond = isThisSecond;
var _constructNow = require("./constructNow.js");
var _isSameSecond = require("./isSameSecond.js");
/**
 * @name isThisSecond
 * @category Second Helpers
 * @summary Is the given date in the same second as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same second as the current date?
 *
 * @param date - The date to check
 *
 * @returns The date is in this second
 *
 * @example
 * // If now is 25 September 2014 18:30:15.500,
 * // is 25 September 2014 18:30:15.000 in this second?
 * const result = isThisSecond(new Date(2014, 8, 25, 18, 30, 15))
 * //=> true
 */
function isThisSecond(date) {
  return (0, _isSameSecond.isSameSecond)(date, (0, _constructNow.constructNow)(date));
}

// Fallback for modularized imports:
var _default = exports.default = isThisSecond;
},{"./constructNow.js":"node_modules/date-fns/constructNow.js","./isSameSecond.js":"node_modules/date-fns/isSameSecond.js"}],"node_modules/date-fns/isThisWeek.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.isThisWeek = isThisWeek;
var _constructFrom = require("./constructFrom.js");
var _constructNow = require("./constructNow.js");
var _isSameWeek = require("./isSameWeek.js");
/**
 * The {@link isThisWeek} function options.
 */

/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * @param date - The date to check
 * @param options - The object with options
 *
 * @returns The date is in this week
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */
function isThisWeek(date, options) {
  return (0, _isSameWeek.isSameWeek)((0, _constructFrom.constructFrom)(options?.in || date, date), (0, _constructNow.constructNow)(options?.in || date), options);
}

// Fallback for modularized imports:
var _default = exports.default = isThisWeek;
},{"./constructFrom.js":"node_modules/date-fns/constructFrom.js","./constructNow.js":"node_modules/date-fns/constructNow.js","./isSameWeek.js":"node_modules/date-fns/isSameWeek.js"}],"node_modules/date-fns/isThisYear.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.isThisYear = isThisYear;
var _constructFrom = require("./constructFrom.js");
var _constructNow = require("./constructNow.js");
var _isSameYear = require("./isSameYear.js");
/**
 * The {@link isThisYear} function options.
 */

/**
 * @name isThisYear
 * @category Year Helpers
 * @summary Is the given date in the same year as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same year as the current date?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is in this year
 *
 * @example
 * // If today is 25 September 2014, is 2 July 2014 in this year?
 * const result = isThisYear(new Date(2014, 6, 2))
 * //=> true
 */
function isThisYear(date, options) {
  return (0, _isSameYear.isSameYear)((0, _constructFrom.constructFrom)(options?.in || date, date), (0, _constructNow.constructNow)(options?.in || date));
}

// Fallback for modularized imports:
var _default = exports.default = isThisYear;
},{"./constructFrom.js":"node_modules/date-fns/constructFrom.js","./constructNow.js":"node_modules/date-fns/constructNow.js","./isSameYear.js":"node_modules/date-fns/isSameYear.js"}],"node_modules/date-fns/isThursday.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.isThursday = isThursday;
var _toDate = require("./toDate.js");
/**
 * The {@link isThursday} function options.
 */

/**
 * @name isThursday
 * @category Weekday Helpers
 * @summary Is the given date Thursday?
 *
 * @description
 * Is the given date Thursday?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is Thursday
 *
 * @example
 * // Is 25 September 2014 Thursday?
 * const result = isThursday(new Date(2014, 8, 25))
 * //=> true
 */
function isThursday(date, options) {
  return (0, _toDate.toDate)(date, options?.in).getDay() === 4;
}

// Fallback for modularized imports:
var _default = exports.default = isThursday;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/isToday.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.isToday = isToday;
var _constructFrom = require("./constructFrom.js");
var _constructNow = require("./constructNow.js");
var _isSameDay = require("./isSameDay.js");
/**
 * The {@link isToday} function options.
 */

/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is today
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(date, options) {
  return (0, _isSameDay.isSameDay)((0, _constructFrom.constructFrom)(options?.in || date, date), (0, _constructNow.constructNow)(options?.in || date));
}

// Fallback for modularized imports:
var _default = exports.default = isToday;
},{"./constructFrom.js":"node_modules/date-fns/constructFrom.js","./constructNow.js":"node_modules/date-fns/constructNow.js","./isSameDay.js":"node_modules/date-fns/isSameDay.js"}],"node_modules/date-fns/isTomorrow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.isTomorrow = isTomorrow;
var _addDays = require("./addDays.js");
var _constructNow = require("./constructNow.js");
var _isSameDay = require("./isSameDay.js");
/**
 * The {@link isTomorrow} function options.
 */

/**
 * @name isTomorrow
 * @category Day Helpers
 * @summary Is the given date tomorrow?
 * @pure false
 *
 * @description
 * Is the given date tomorrow?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is tomorrow
 *
 * @example
 * // If today is 6 October 2014, is 7 October 14:00:00 tomorrow?
 * const result = isTomorrow(new Date(2014, 9, 7, 14, 0))
 * //=> true
 */
function isTomorrow(date, options) {
  return (0, _isSameDay.isSameDay)(date, (0, _addDays.addDays)((0, _constructNow.constructNow)(options?.in || date), 1), options);
}

// Fallback for modularized imports:
var _default = exports.default = isTomorrow;
},{"./addDays.js":"node_modules/date-fns/addDays.js","./constructNow.js":"node_modules/date-fns/constructNow.js","./isSameDay.js":"node_modules/date-fns/isSameDay.js"}],"node_modules/date-fns/isTuesday.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.isTuesday = isTuesday;
var _toDate = require("./toDate.js");
/**
 * The {@link isTuesday} function options.
 */

/**
 * @name isTuesday
 * @category Weekday Helpers
 * @summary Is the given date Tuesday?
 *
 * @description
 * Is the given date Tuesday?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is Tuesday
 *
 * @example
 * // Is 23 September 2014 Tuesday?
 * const result = isTuesday(new Date(2014, 8, 23))
 * //=> true
 */
function isTuesday(date, options) {
  return (0, _toDate.toDate)(date, options?.in).getDay() === 2;
}

// Fallback for modularized imports:
var _default = exports.default = isTuesday;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/isWednesday.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.isWednesday = isWednesday;
var _toDate = require("./toDate.js");
/**
 * The {@link isWednesday} function options.
 */

/**
 * @name isWednesday
 * @category Weekday Helpers
 * @summary Is the given date Wednesday?
 *
 * @description
 * Is the given date Wednesday?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is Wednesday
 *
 * @example
 * // Is 24 September 2014 Wednesday?
 * const result = isWednesday(new Date(2014, 8, 24))
 * //=> true
 */
function isWednesday(date, options) {
  return (0, _toDate.toDate)(date, options?.in).getDay() === 3;
}

// Fallback for modularized imports:
var _default = exports.default = isWednesday;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/isWithinInterval.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.isWithinInterval = isWithinInterval;
var _toDate = require("./toDate.js");
/**
 * The {@link isWithinInterval} function options.
 */

/**
 * @name isWithinInterval
 * @category Interval Helpers
 * @summary Is the given date within the interval?
 *
 * @description
 * Is the given date within the interval? (Including start and end.)
 *
 * @param date - The date to check
 * @param interval - The interval to check
 * @param options - An object with options
 *
 * @returns The date is within the interval
 *
 * @example
 * // For the date within the interval:
 * isWithinInterval(new Date(2014, 0, 3), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * // => true
 *
 * @example
 * // For the date outside of the interval:
 * isWithinInterval(new Date(2014, 0, 10), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * // => false
 *
 * @example
 * // For date equal to the interval start:
 * isWithinInterval(date, { start, end: date })
 * // => true
 *
 * @example
 * // For date equal to the interval end:
 * isWithinInterval(date, { start: date, end })
 * // => true
 */
function isWithinInterval(date, interval, options) {
  const time = +(0, _toDate.toDate)(date, options?.in);
  const [startTime, endTime] = [+(0, _toDate.toDate)(interval.start, options?.in), +(0, _toDate.toDate)(interval.end, options?.in)].sort((a, b) => a - b);
  return time >= startTime && time <= endTime;
}

// Fallback for modularized imports:
var _default = exports.default = isWithinInterval;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/subDays.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.subDays = subDays;
var _addDays = require("./addDays.js");
/**
 * The {@link subDays} function options.
 */

/**
 * @name subDays
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be subtracted.
 * @param options - An object with options
 *
 * @returns The new date with the days subtracted
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * const result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */
function subDays(date, amount, options) {
  return (0, _addDays.addDays)(date, -amount, options);
}

// Fallback for modularized imports:
var _default = exports.default = subDays;
},{"./addDays.js":"node_modules/date-fns/addDays.js"}],"node_modules/date-fns/isYesterday.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.isYesterday = isYesterday;
var _constructFrom = require("./constructFrom.js");
var _constructNow = require("./constructNow.js");
var _isSameDay = require("./isSameDay.js");
var _subDays = require("./subDays.js");
/**
 * The {@link isYesterday} function options.
 */

/**
 * @name isYesterday
 * @category Day Helpers
 * @summary Is the given date yesterday?
 * @pure false
 *
 * @description
 * Is the given date yesterday?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is yesterday
 *
 * @example
 * // If today is 6 October 2014, is 5 October 14:00:00 yesterday?
 * const result = isYesterday(new Date(2014, 9, 5, 14, 0))
 * //=> true
 */
function isYesterday(date, options) {
  return (0, _isSameDay.isSameDay)((0, _constructFrom.constructFrom)(options?.in || date, date), (0, _subDays.subDays)((0, _constructNow.constructNow)(options?.in || date), 1));
}

// Fallback for modularized imports:
var _default = exports.default = isYesterday;
},{"./constructFrom.js":"node_modules/date-fns/constructFrom.js","./constructNow.js":"node_modules/date-fns/constructNow.js","./isSameDay.js":"node_modules/date-fns/isSameDay.js","./subDays.js":"node_modules/date-fns/subDays.js"}],"node_modules/date-fns/lastDayOfDecade.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.lastDayOfDecade = lastDayOfDecade;
var _toDate = require("./toDate.js");
/**
 * The {@link lastDayOfDecade} function options.
 */

/**
 * @name lastDayOfDecade
 * @category Decade Helpers
 * @summary Return the last day of a decade for the given date.
 *
 * @description
 * Return the last day of a decade for the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows using extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type; inferred from arguments or specified by context.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The last day of a decade
 *
 * @example
 * // The last day of a decade for 21 December 2012 21:12:00:
 * const result = lastDayOfDecade(new Date(2012, 11, 21, 21, 12, 00))
 * //=> Wed Dec 31 2019 00:00:00
 */
function lastDayOfDecade(date, options) {
  const _date = (0, _toDate.toDate)(date, options?.in);
  const year = _date.getFullYear();
  const decade = 9 + Math.floor(year / 10) * 10;
  _date.setFullYear(decade + 1, 0, 0);
  _date.setHours(0, 0, 0, 0);
  return (0, _toDate.toDate)(_date, options?.in);
}

// Fallback for modularized imports:
var _default = exports.default = lastDayOfDecade;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/lastDayOfWeek.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.lastDayOfWeek = lastDayOfWeek;
var _defaultOptions = require("./_lib/defaultOptions.js");
var _toDate = require("./toDate.js");
/**
 * The {@link lastDayOfWeek} function options.
 */

/**
 * @name lastDayOfWeek
 * @category Week Helpers
 * @summary Return the last day of a week for the given date.
 *
 * @description
 * Return the last day of a week for the given date.
 * The result will be in the local timezone unless a context is specified.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The last day of a week
 */
function lastDayOfWeek(date, options) {
  const defaultOptions = (0, _defaultOptions.getDefaultOptions)();
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
  const _date = (0, _toDate.toDate)(date, options?.in);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
  _date.setHours(0, 0, 0, 0);
  _date.setDate(_date.getDate() + diff);
  return _date;
}

// Fallback for modularized imports:
var _default = exports.default = lastDayOfWeek;
},{"./_lib/defaultOptions.js":"node_modules/date-fns/_lib/defaultOptions.js","./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/lastDayOfISOWeek.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.lastDayOfISOWeek = lastDayOfISOWeek;
var _lastDayOfWeek = require("./lastDayOfWeek.js");
/**
 * The {@link lastDayOfISOWeek} function options.
 */

/**
 * @name lastDayOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the last day of an ISO week for the given date.
 *
 * @description
 * Return the last day of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The Date type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [UTCDate](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The last day of an ISO week
 *
 * @example
 * // The last day of an ISO week for 2 September 2014 11:55:00:
 * const result = lastDayOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Sep 07 2014 00:00:00
 */
function lastDayOfISOWeek(date, options) {
  return (0, _lastDayOfWeek.lastDayOfWeek)(date, {
    ...options,
    weekStartsOn: 1
  });
}

// Fallback for modularized imports:
var _default = exports.default = lastDayOfISOWeek;
},{"./lastDayOfWeek.js":"node_modules/date-fns/lastDayOfWeek.js"}],"node_modules/date-fns/lastDayOfISOWeekYear.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.lastDayOfISOWeekYear = lastDayOfISOWeekYear;
var _constructFrom = require("./constructFrom.js");
var _getISOWeekYear = require("./getISOWeekYear.js");
var _startOfISOWeek = require("./startOfISOWeek.js");
/**
 * The {@link lastDayOfISOWeekYear} function options.
 */

/**
 * @name lastDayOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the last day of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the last day of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of an ISO week-numbering year
 *
 * @example
 * // The last day of an ISO week-numbering year for 2 July 2005:
 * const result = lastDayOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Sun Jan 01 2006 00:00:00
 */
function lastDayOfISOWeekYear(date, options) {
  const year = (0, _getISOWeekYear.getISOWeekYear)(date, options);
  const fourthOfJanuary = (0, _constructFrom.constructFrom)(options?.in || date, 0);
  fourthOfJanuary.setFullYear(year + 1, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  const date_ = (0, _startOfISOWeek.startOfISOWeek)(fourthOfJanuary, options);
  date_.setDate(date_.getDate() - 1);
  return date_;
}

// Fallback for modularized imports:
var _default = exports.default = lastDayOfISOWeekYear;
},{"./constructFrom.js":"node_modules/date-fns/constructFrom.js","./getISOWeekYear.js":"node_modules/date-fns/getISOWeekYear.js","./startOfISOWeek.js":"node_modules/date-fns/startOfISOWeek.js"}],"node_modules/date-fns/lastDayOfQuarter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.lastDayOfQuarter = lastDayOfQuarter;
var _toDate = require("./toDate.js");
/**
 * The {@link lastDayOfQuarter} function options.
 */

/**
 * @name lastDayOfQuarter
 * @category Quarter Helpers
 * @summary Return the last day of a year quarter for the given date.
 *
 * @description
 * Return the last day of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The last day of a quarter
 *
 * @example
 * // The last day of a quarter for 2 September 2014 11:55:00:
 * const result = lastDayOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 00:00:00
 */
function lastDayOfQuarter(date, options) {
  const date_ = (0, _toDate.toDate)(date, options?.in);
  const currentMonth = date_.getMonth();
  const month = currentMonth - currentMonth % 3 + 3;
  date_.setMonth(month, 0);
  date_.setHours(0, 0, 0, 0);
  return date_;
}

// Fallback for modularized imports:
var _default = exports.default = lastDayOfQuarter;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/lastDayOfYear.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.lastDayOfYear = lastDayOfYear;
var _toDate = require("./toDate.js");
/**
 * The {@link lastDayOfYear} function options.
 */

/**
 * @name lastDayOfYear
 * @category Year Helpers
 * @summary Return the last day of a year for the given date.
 *
 * @description
 * Return the last day of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The last day of a year
 *
 * @example
 * // The last day of a year for 2 September 2014 11:55:00:
 * const result = lastDayOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Dec 31 2014 00:00:00
 */
function lastDayOfYear(date, options) {
  const date_ = (0, _toDate.toDate)(date, options?.in);
  const year = date_.getFullYear();
  date_.setFullYear(year + 1, 0, 0);
  date_.setHours(0, 0, 0, 0);
  return date_;
}

// Fallback for modularized imports:
var _default = exports.default = lastDayOfYear;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/lightFormat.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.lightFormat = lightFormat;
Object.defineProperty(exports, "lightFormatters", {
  enumerable: true,
  get: function () {
    return _lightFormatters.lightFormatters;
  }
});
var _lightFormatters = require("./_lib/format/lightFormatters.js");
var _isValid = require("./isValid.js");
var _toDate = require("./toDate.js");
// Rexports of internal for libraries to use.
// See: https://github.com/date-fns/date-fns/issues/3638#issuecomment-1877082874

// This RegExp consists of three parts separated by `|`:
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const formattingTokensRegExp = /(\w)\1*|''|'(''|[^'])+('|$)|./g;
const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;

/**
 * @private
 */

/**
 * @name lightFormat
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. Unlike `format`,
 * `lightFormat` doesn't use locales and outputs date using the most popular tokens.
 *
 * > ⚠️ Please note that the `lightFormat` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   |
 * |---------------------------------|---------|-----------------------------------|
 * | AM, PM                          | a..aaa  | AM, PM                            |
 * |                                 | aaaa    | a.m., p.m.                        |
 * |                                 | aaaaa   | a, p                              |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 |
 * |                                 | yy      | 44, 01, 00, 17                    |
 * |                                 | yyy     | 044, 001, 000, 017                |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |
 * |                                 | MM      | 01, 02, ..., 12                   |
 * | Day of month                    | d       | 1, 2, ..., 31                     |
 * |                                 | dd      | 01, 02, ..., 31                   |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |
 * |                                 | hh      | 01, 02, ..., 11, 12               |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |
 * |                                 | HH      | 00, 01, 02, ..., 23               |
 * | Minute                          | m       | 0, 1, ..., 59                     |
 * |                                 | mm      | 00, 01, ..., 59                   |
 * | Second                          | s       | 0, 1, ..., 59                     |
 * |                                 | ss      | 00, 01, ..., 59                   |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |
 * |                                 | SS      | 00, 01, ..., 99                   |
 * |                                 | SSS     | 000, 001, ..., 999                |
 * |                                 | SSSS    | ...                               |
 *
 * @param date - The original date
 * @param format - The string of tokens
 *
 * @returns The formatted date string
 *
 * @throws `Invalid time value` if the date is invalid
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * const result = lightFormat(new Date(2014, 1, 11), 'yyyy-MM-dd')
 * //=> '2014-02-11'
 */
function lightFormat(date, formatStr) {
  const date_ = (0, _toDate.toDate)(date);
  if (!(0, _isValid.isValid)(date_)) {
    throw new RangeError("Invalid time value");
  }
  const tokens = formatStr.match(formattingTokensRegExp);

  // The only case when formattingTokensRegExp doesn't match the string is when it's empty
  if (!tokens) return "";
  const result = tokens.map(substring => {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }
    const firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }
    const formatter = _lightFormatters.lightFormatters[firstCharacter];
    if (formatter) {
      return formatter(date_, substring);
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
    }
    return substring;
  }).join("");
  return result;
}
function cleanEscapedString(input) {
  const matches = input.match(escapedStringRegExp);
  if (!matches) return input;
  return matches[1].replace(doubleQuoteRegExp, "'");
}

// Fallback for modularized imports:
var _default = exports.default = lightFormat;
},{"./_lib/format/lightFormatters.js":"node_modules/date-fns/_lib/format/lightFormatters.js","./isValid.js":"node_modules/date-fns/isValid.js","./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/milliseconds.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.milliseconds = milliseconds;
var _constants = require("./constants.js");
/**
 * @name milliseconds
 * @category Millisecond Helpers
 * @summary
 * Returns the number of milliseconds in the specified, years, months, weeks, days, hours, minutes and seconds.
 *
 * @description
 * Returns the number of milliseconds in the specified, years, months, weeks, days, hours, minutes and seconds.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occurs every 4 years, except for years that are divisible by 100 and not divisible by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * One month is a year divided by 12.
 *
 * @param duration - The object with years, months, weeks, days, hours, minutes and seconds to be added.
 *
 * @returns The milliseconds
 *
 * @example
 * // 1 year in milliseconds
 * milliseconds({ years: 1 })
 * //=> 31556952000
 *
 * // 3 months in milliseconds
 * milliseconds({ months: 3 })
 * //=> 7889238000
 */
function milliseconds({
  years,
  months,
  weeks,
  days,
  hours,
  minutes,
  seconds
}) {
  let totalDays = 0;
  if (years) totalDays += years * _constants.daysInYear;
  if (months) totalDays += months * (_constants.daysInYear / 12);
  if (weeks) totalDays += weeks * 7;
  if (days) totalDays += days;
  let totalSeconds = totalDays * 24 * 60 * 60;
  if (hours) totalSeconds += hours * 60 * 60;
  if (minutes) totalSeconds += minutes * 60;
  if (seconds) totalSeconds += seconds;
  return Math.trunc(totalSeconds * 1000);
}

// Fallback for modularized imports:
var _default = exports.default = milliseconds;
},{"./constants.js":"node_modules/date-fns/constants.js"}],"node_modules/date-fns/millisecondsToHours.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.millisecondsToHours = millisecondsToHours;
var _constants = require("./constants.js");
/**
 * @name millisecondsToHours
 * @category Conversion Helpers
 * @summary Convert milliseconds to hours.
 *
 * @description
 * Convert a number of milliseconds to a full number of hours.
 *
 * @param milliseconds - The number of milliseconds to be converted
 *
 * @returns The number of milliseconds converted in hours
 *
 * @example
 * // Convert 7200000 milliseconds to hours:
 * const result = millisecondsToHours(7200000)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = millisecondsToHours(7199999)
 * //=> 1
 */
function millisecondsToHours(milliseconds) {
  const hours = milliseconds / _constants.millisecondsInHour;
  return Math.trunc(hours);
}

// Fallback for modularized imports:
var _default = exports.default = millisecondsToHours;
},{"./constants.js":"node_modules/date-fns/constants.js"}],"node_modules/date-fns/millisecondsToMinutes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.millisecondsToMinutes = millisecondsToMinutes;
var _constants = require("./constants.js");
/**
 * @name millisecondsToMinutes
 * @category Conversion Helpers
 * @summary Convert milliseconds to minutes.
 *
 * @description
 * Convert a number of milliseconds to a full number of minutes.
 *
 * @param milliseconds - The number of milliseconds to be converted
 *
 * @returns The number of milliseconds converted in minutes
 *
 * @example
 * // Convert 60000 milliseconds to minutes:
 * const result = millisecondsToMinutes(60000)
 * //=> 1
 *
 * @example
 * // It uses floor rounding:
 * const result = millisecondsToMinutes(119999)
 * //=> 1
 */
function millisecondsToMinutes(milliseconds) {
  const minutes = milliseconds / _constants.millisecondsInMinute;
  return Math.trunc(minutes);
}

// Fallback for modularized imports:
var _default = exports.default = millisecondsToMinutes;
},{"./constants.js":"node_modules/date-fns/constants.js"}],"node_modules/date-fns/millisecondsToSeconds.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.millisecondsToSeconds = millisecondsToSeconds;
var _constants = require("./constants.js");
/**
 * @name millisecondsToSeconds
 * @category Conversion Helpers
 * @summary Convert milliseconds to seconds.
 *
 * @description
 * Convert a number of milliseconds to a full number of seconds.
 *
 * @param milliseconds - The number of milliseconds to be converted
 *
 * @returns The number of milliseconds converted in seconds
 *
 * @example
 * // Convert 1000 milliseconds to seconds:
 * const result = millisecondsToSeconds(1000)
 * //=> 1
 *
 * @example
 * // It uses floor rounding:
 * const result = millisecondsToSeconds(1999)
 * //=> 1
 */
function millisecondsToSeconds(milliseconds) {
  const seconds = milliseconds / _constants.millisecondsInSecond;
  return Math.trunc(seconds);
}

// Fallback for modularized imports:
var _default = exports.default = millisecondsToSeconds;
},{"./constants.js":"node_modules/date-fns/constants.js"}],"node_modules/date-fns/minutesToHours.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.minutesToHours = minutesToHours;
var _constants = require("./constants.js");
/**
 * @name minutesToHours
 * @category Conversion Helpers
 * @summary Convert minutes to hours.
 *
 * @description
 * Convert a number of minutes to a full number of hours.
 *
 * @param minutes - The number of minutes to be converted
 *
 * @returns The number of minutes converted in hours
 *
 * @example
 * // Convert 140 minutes to hours:
 * const result = minutesToHours(120)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = minutesToHours(179)
 * //=> 2
 */
function minutesToHours(minutes) {
  const hours = minutes / _constants.minutesInHour;
  return Math.trunc(hours);
}

// Fallback for modularized imports:
var _default = exports.default = minutesToHours;
},{"./constants.js":"node_modules/date-fns/constants.js"}],"node_modules/date-fns/minutesToMilliseconds.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.minutesToMilliseconds = minutesToMilliseconds;
var _constants = require("./constants.js");
/**
 * @name minutesToMilliseconds
 * @category Conversion Helpers
 * @summary Convert minutes to milliseconds.
 *
 * @description
 * Convert a number of minutes to a full number of milliseconds.
 *
 * @param minutes - The number of minutes to be converted
 *
 * @returns The number of minutes converted in milliseconds
 *
 * @example
 * // Convert 2 minutes to milliseconds
 * const result = minutesToMilliseconds(2)
 * //=> 120000
 */
function minutesToMilliseconds(minutes) {
  return Math.trunc(minutes * _constants.millisecondsInMinute);
}

// Fallback for modularized imports:
var _default = exports.default = minutesToMilliseconds;
},{"./constants.js":"node_modules/date-fns/constants.js"}],"node_modules/date-fns/minutesToSeconds.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.minutesToSeconds = minutesToSeconds;
var _constants = require("./constants.js");
/**
 * @name minutesToSeconds
 * @category Conversion Helpers
 * @summary Convert minutes to seconds.
 *
 * @description
 * Convert a number of minutes to a full number of seconds.
 *
 * @param minutes - The number of minutes to be converted
 *
 * @returns The number of minutes converted in seconds
 *
 * @example
 * // Convert 2 minutes to seconds
 * const result = minutesToSeconds(2)
 * //=> 120
 */
function minutesToSeconds(minutes) {
  return Math.trunc(minutes * _constants.secondsInMinute);
}

// Fallback for modularized imports:
var _default = exports.default = minutesToSeconds;
},{"./constants.js":"node_modules/date-fns/constants.js"}],"node_modules/date-fns/monthsToQuarters.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.monthsToQuarters = monthsToQuarters;
var _constants = require("./constants.js");
/**
 * @name monthsToQuarters
 * @category Conversion Helpers
 * @summary Convert number of months to quarters.
 *
 * @description
 * Convert a number of months to a full number of quarters.
 *
 * @param months - The number of months to be converted.
 *
 * @returns The number of months converted in quarters
 *
 * @example
 * // Convert 6 months to quarters:
 * const result = monthsToQuarters(6)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = monthsToQuarters(7)
 * //=> 2
 */
function monthsToQuarters(months) {
  const quarters = months / _constants.monthsInQuarter;
  return Math.trunc(quarters);
}

// Fallback for modularized imports:
var _default = exports.default = monthsToQuarters;
},{"./constants.js":"node_modules/date-fns/constants.js"}],"node_modules/date-fns/monthsToYears.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.monthsToYears = monthsToYears;
var _constants = require("./constants.js");
/**
 * @name monthsToYears
 * @category Conversion Helpers
 * @summary Convert number of months to years.
 *
 * @description
 * Convert a number of months to a full number of years.
 *
 * @param months - The number of months to be converted
 *
 * @returns The number of months converted in years
 *
 * @example
 * // Convert 36 months to years:
 * const result = monthsToYears(36)
 * //=> 3
 *
 * // It uses floor rounding:
 * const result = monthsToYears(40)
 * //=> 3
 */
function monthsToYears(months) {
  const years = months / _constants.monthsInYear;
  return Math.trunc(years);
}

// Fallback for modularized imports:
var _default = exports.default = monthsToYears;
},{"./constants.js":"node_modules/date-fns/constants.js"}],"node_modules/date-fns/nextDay.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.nextDay = nextDay;
var _addDays = require("./addDays.js");
var _getDay = require("./getDay.js");
/**
 * The {@link nextDay} function options.
 */

/**
 * @name nextDay
 * @category Weekday Helpers
 * @summary When is the next day of the week? 0-6 the day of the week, 0 represents Sunday.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to check
 * @param day - Day of the week
 * @param options - An object with options
 *
 * @returns The date is the next day of the week
 *
 * @example
 * // When is the next Monday after Mar, 20, 2020?
 * const result = nextDay(new Date(2020, 2, 20), 1)
 * //=> Mon Mar 23 2020 00:00:00
 *
 * @example
 * // When is the next Tuesday after Mar, 21, 2020?
 * const result = nextDay(new Date(2020, 2, 21), 2)
 * //=> Tue Mar 24 2020 00:00:00
 */
function nextDay(date, day, options) {
  let delta = day - (0, _getDay.getDay)(date, options);
  if (delta <= 0) delta += 7;
  return (0, _addDays.addDays)(date, delta, options);
}

// Fallback for modularized imports:
var _default = exports.default = nextDay;
},{"./addDays.js":"node_modules/date-fns/addDays.js","./getDay.js":"node_modules/date-fns/getDay.js"}],"node_modules/date-fns/nextFriday.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.nextFriday = nextFriday;
var _nextDay = require("./nextDay.js");
/**
 * The {@link nextFriday} function options.
 */

/**
 * @name nextFriday
 * @category Weekday Helpers
 * @summary When is the next Friday?
 *
 * @description
 * When is the next Friday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to start counting from
 * @param options - An object with options
 *
 * @returns The next Friday
 *
 * @example
 * // When is the next Friday after Mar, 22, 2020?
 * const result = nextFriday(new Date(2020, 2, 22))
 * //=> Fri Mar 27 2020 00:00:00
 */
function nextFriday(date, options) {
  return (0, _nextDay.nextDay)(date, 5, options);
}

// Fallback for modularized imports:
var _default = exports.default = nextFriday;
},{"./nextDay.js":"node_modules/date-fns/nextDay.js"}],"node_modules/date-fns/nextMonday.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.nextMonday = nextMonday;
var _nextDay = require("./nextDay.js");
/**
 * The {@link nextMonday} function options.
 */

/**
 * @name nextMonday
 * @category Weekday Helpers
 * @summary When is the next Monday?
 *
 * @description
 * When is the next Monday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, returned from the context function if passed, or inferred from the arguments.
 *
 * @param date - The date to start counting from
 * @param options - An object with options
 *
 * @returns The next Monday
 *
 * @example
 * // When is the next Monday after Mar, 22, 2020?
 * const result = nextMonday(new Date(2020, 2, 22))
 * //=> Mon Mar 23 2020 00:00:00
 */
function nextMonday(date, options) {
  return (0, _nextDay.nextDay)(date, 1, options);
}

// Fallback for modularized imports:
var _default = exports.default = nextMonday;
},{"./nextDay.js":"node_modules/date-fns/nextDay.js"}],"node_modules/date-fns/nextSaturday.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.nextSaturday = nextSaturday;
var _nextDay = require("./nextDay.js");
/**
 * The {@link nextSaturday} function options.
 */

/**
 * @name nextSaturday
 * @category Weekday Helpers
 * @summary When is the next Saturday?
 *
 * @description
 * When is the next Saturday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to start counting from
 * @param options - An object with options
 *
 * @returns The next Saturday
 *
 * @example
 * // When is the next Saturday after Mar, 22, 2020?
 * const result = nextSaturday(new Date(2020, 2, 22))
 * //=> Sat Mar 28 2020 00:00:00
 */
function nextSaturday(date, options) {
  return (0, _nextDay.nextDay)(date, 6, options);
}

// Fallback for modularized imports:
var _default = exports.default = nextSaturday;
},{"./nextDay.js":"node_modules/date-fns/nextDay.js"}],"node_modules/date-fns/nextSunday.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.nextSunday = nextSunday;
var _nextDay = require("./nextDay.js");
/**
 * The {@link nextSunday} function options.
 */

/**
 * @name nextSunday
 * @category Weekday Helpers
 * @summary When is the next Sunday?
 *
 * @description
 * When is the next Sunday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned if a context is provided.
 *
 * @param date - The date to start counting from
 * @param options - An object with options
 *
 * @returns The next Sunday
 *
 * @example
 * // When is the next Sunday after March 22, 2020?
 * const result = nextSunday(new Date(2020, 2, 22))
 * //=> Sun Mar 29 2020 00:00:00
 */
function nextSunday(date, options) {
  return (0, _nextDay.nextDay)(date, 0, options);
}

// Fallback for modularized imports:
var _default = exports.default = nextSunday;
},{"./nextDay.js":"node_modules/date-fns/nextDay.js"}],"node_modules/date-fns/nextThursday.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.nextThursday = nextThursday;
var _nextDay = require("./nextDay.js");
/**
 * The {@link nextThursday} function options.
 */

/**
 * @name nextThursday
 * @category Weekday Helpers
 * @summary When is the next Thursday?
 *
 * @description
 * When is the next Thursday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to start counting from
 * @param options - An object with options
 *
 * @returns The next Thursday
 *
 * @example
 * // When is the next Thursday after Mar, 22, 2020?
 * const result = nextThursday(new Date(2020, 2, 22))
 * //=> Thur Mar 26 2020 00:00:00
 */
function nextThursday(date, options) {
  return (0, _nextDay.nextDay)(date, 4, options);
}

// Fallback for modularized imports:
var _default = exports.default = nextThursday;
},{"./nextDay.js":"node_modules/date-fns/nextDay.js"}],"node_modules/date-fns/nextTuesday.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.nextTuesday = nextTuesday;
var _nextDay = require("./nextDay.js");
/**
 * The {@link nextTuesday} function options.
 */

/**
 * @name nextTuesday
 * @category Weekday Helpers
 * @summary When is the next Tuesday?
 *
 * @description
 * When is the next Tuesday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to start counting from
 * @param options - An object with options
 *
 * @returns The next Tuesday
 *
 * @example
 * // When is the next Tuesday after Mar, 22, 2020?
 * const result = nextTuesday(new Date(2020, 2, 22))
 * //=> Tue Mar 24 2020 00:00:00
 */
function nextTuesday(date, options) {
  return (0, _nextDay.nextDay)(date, 2, options);
}

// Fallback for modularized imports:
var _default = exports.default = nextTuesday;
},{"./nextDay.js":"node_modules/date-fns/nextDay.js"}],"node_modules/date-fns/nextWednesday.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.nextWednesday = nextWednesday;
var _nextDay = require("./nextDay.js");
/**
 * The {@link nextWednesday} function options.
 */

/**
 * @name nextWednesday
 * @category Weekday Helpers
 * @summary When is the next Wednesday?
 *
 * @description
 * When is the next Wednesday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to start counting from
 * @param options - An object with options
 *
 * @returns The next Wednesday
 *
 * @example
 * // When is the next Wednesday after Mar, 22, 2020?
 * const result = nextWednesday(new Date(2020, 2, 22))
 * //=> Wed Mar 25 2020 00:00:00
 */
function nextWednesday(date, options) {
  return (0, _nextDay.nextDay)(date, 3, options);
}

// Fallback for modularized imports:
var _default = exports.default = nextWednesday;
},{"./nextDay.js":"node_modules/date-fns/nextDay.js"}],"node_modules/date-fns/parseISO.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.parseISO = parseISO;
var _constants = require("./constants.js");
var _constructFrom = require("./constructFrom.js");
var _toDate = require("./toDate.js");
/**
 * The {@link parseISO} function options.
 */

/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param argument - The value to convert
 * @param options - An object with options
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */
function parseISO(argument, options) {
  const invalidDate = () => (0, _constructFrom.constructFrom)(options?.in, NaN);
  const additionalDigits = options?.additionalDigits ?? 2;
  const dateStrings = splitDateString(argument);
  let date;
  if (dateStrings.date) {
    const parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }
  if (!date || isNaN(+date)) return invalidDate();
  const timestamp = +date;
  let time = 0;
  let offset;
  if (dateStrings.time) {
    time = parseTime(dateStrings.time);
    if (isNaN(time)) return invalidDate();
  }
  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);
    if (isNaN(offset)) return invalidDate();
  } else {
    const tmpDate = new Date(timestamp + time);
    const result = (0, _toDate.toDate)(0, options?.in);
    result.setFullYear(tmpDate.getUTCFullYear(), tmpDate.getUTCMonth(), tmpDate.getUTCDate());
    result.setHours(tmpDate.getUTCHours(), tmpDate.getUTCMinutes(), tmpDate.getUTCSeconds(), tmpDate.getUTCMilliseconds());
    return result;
  }
  return (0, _toDate.toDate)(timestamp + time + offset, options?.in);
}
const patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
const dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
const timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
const timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function splitDateString(dateString) {
  const dateStrings = {};
  const array = dateString.split(patterns.dateTimeDelimiter);
  let timeString;

  // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].
  if (array.length > 2) {
    return dateStrings;
  }
  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }
  if (timeString) {
    const token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], "");
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }
  return dateStrings;
}
function parseYear(dateString, additionalDigits) {
  const regex = new RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + additionalDigits) + "})|(\\d{2}|[+-]\\d{" + (2 + additionalDigits) + "})$)");
  const captures = dateString.match(regex);
  // Invalid ISO-formatted year
  if (!captures) return {
    year: NaN,
    restDateString: ""
  };
  const year = captures[1] ? parseInt(captures[1]) : null;
  const century = captures[2] ? parseInt(captures[2]) : null;

  // either year or century is null, not both
  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}
function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  const captures = dateString.match(dateRegex);
  // Invalid ISO-formatted string
  if (!captures) return new Date(NaN);
  const isWeekDate = !!captures[4];
  const dayOfYear = parseDateUnit(captures[1]);
  const month = parseDateUnit(captures[2]) - 1;
  const day = parseDateUnit(captures[3]);
  const week = parseDateUnit(captures[4]);
  const dayOfWeek = parseDateUnit(captures[5]) - 1;
  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    const date = new Date(0);
    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }
    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}
function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}
function parseTime(timeString) {
  const captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  const hours = parseTimeUnit(captures[1]);
  const minutes = parseTimeUnit(captures[2]);
  const seconds = parseTimeUnit(captures[3]);
  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }
  return hours * _constants.millisecondsInHour + minutes * _constants.millisecondsInMinute + seconds * 1000;
}
function parseTimeUnit(value) {
  return value && parseFloat(value.replace(",", ".")) || 0;
}
function parseTimezone(timezoneString) {
  if (timezoneString === "Z") return 0;
  const captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  const sign = captures[1] === "+" ? -1 : 1;
  const hours = parseInt(captures[2]);
  const minutes = captures[3] && parseInt(captures[3]) || 0;
  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }
  return sign * (hours * _constants.millisecondsInHour + minutes * _constants.millisecondsInMinute);
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
  const date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  const fourthOfJanuaryDay = date.getUTCDay() || 7;
  const diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// Validation functions

// February is null to handle the leap year (using ||)
const daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}
function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}
function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}
function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }
  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}
function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

// Fallback for modularized imports:
var _default = exports.default = parseISO;
},{"./constants.js":"node_modules/date-fns/constants.js","./constructFrom.js":"node_modules/date-fns/constructFrom.js","./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/parseJSON.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.parseJSON = parseJSON;
var _toDate = require("./toDate.js");
/**
 * The {@link parseJSON} function options.
 */

/**
 * Converts a complete ISO date string in UTC time, the typical format for transmitting
 * a date in JSON, to a JavaScript `Date` instance.
 *
 * This is a minimal implementation for converting dates retrieved from a JSON API to
 * a `Date` instance which can be used with other functions in the `date-fns` library.
 * The following formats are supported:
 *
 * - `2000-03-15T05:20:10.123Z`: The output of `.toISOString()` and `JSON.stringify(new Date())`
 * - `2000-03-15T05:20:10Z`: Without milliseconds
 * - `2000-03-15T05:20:10+00:00`: With a zero offset, the default JSON encoded format in some other languages
 * - `2000-03-15T05:20:10+05:45`: With a positive or negative offset, the default JSON encoded format in some other languages
 * - `2000-03-15T05:20:10+0000`: With a zero offset without a colon
 * - `2000-03-15T05:20:10`: Without a trailing 'Z' symbol
 * - `2000-03-15T05:20:10.1234567`: Up to 7 digits in milliseconds field. Only first 3 are taken into account since JS does not allow fractional milliseconds
 * - `2000-03-15 05:20:10`: With a space instead of a 'T' separator for APIs returning a SQL date without reformatting
 *
 * For convenience and ease of use these other input types are also supported
 * via [toDate](https://date-fns.org/docs/toDate):
 *
 * - A `Date` instance will be cloned
 * - A `number` will be treated as a timestamp
 *
 * Any other input type or invalid date strings will return an `Invalid Date`.
 *
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param dateStr - A fully formed ISO8601 date string to convert
 * @param options - An object with options
 *
 * @returns The parsed date in the local time zone
 */
function parseJSON(dateStr, options) {
  const parts = dateStr.match(/(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})(?:\.(\d{0,7}))?(?:Z|(.)(\d{2}):?(\d{2})?)?/);
  if (!parts) return (0, _toDate.toDate)(NaN, options?.in);
  return (0, _toDate.toDate)(Date.UTC(+parts[1], +parts[2] - 1, +parts[3], +parts[4] - (+parts[9] || 0) * (parts[8] == "-" ? -1 : 1), +parts[5] - (+parts[10] || 0) * (parts[8] == "-" ? -1 : 1), +parts[6], +((parts[7] || "0") + "00").substring(0, 3)), options?.in);
}

// Fallback for modularized imports:
var _default = exports.default = parseJSON;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/previousDay.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.previousDay = previousDay;
var _getDay = require("./getDay.js");
var _subDays = require("./subDays.js");
/**
 * The {@link previousDay} function options.
 */

/**
 * @name previousDay
 * @category Weekday Helpers
 * @summary When is the previous day of the week?
 *
 * @description
 * When is the previous day of the week? 0-6 the day of the week, 0 represents Sunday.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to check
 * @param day - The day of the week
 * @param options - An object with options
 *
 * @returns The date is the previous day of week
 *
 * @example
 * // When is the previous Monday before Mar, 20, 2020?
 * const result = previousDay(new Date(2020, 2, 20), 1)
 * //=> Mon Mar 16 2020 00:00:00
 *
 * @example
 * // When is the previous Tuesday before Mar, 21, 2020?
 * const result = previousDay(new Date(2020, 2, 21), 2)
 * //=> Tue Mar 17 2020 00:00:00
 */
function previousDay(date, day, options) {
  let delta = (0, _getDay.getDay)(date, options) - day;
  if (delta <= 0) delta += 7;
  return (0, _subDays.subDays)(date, delta, options);
}

// Fallback for modularized imports:
var _default = exports.default = previousDay;
},{"./getDay.js":"node_modules/date-fns/getDay.js","./subDays.js":"node_modules/date-fns/subDays.js"}],"node_modules/date-fns/previousFriday.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.previousFriday = previousFriday;
var _previousDay = require("./previousDay.js");
/**
 * The {@link previousFriday} function options.
 */

/**
 * @name previousFriday
 * @category Weekday Helpers
 * @summary When is the previous Friday?
 *
 * @description
 * When is the previous Friday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [UTCDate](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to start counting from
 * @param options - The options
 *
 * @returns The previous Friday
 *
 * @example
 * // When is the previous Friday before Jun, 19, 2021?
 * const result = previousFriday(new Date(2021, 5, 19))
 * //=> Fri June 18 2021 00:00:00
 */
function previousFriday(date, options) {
  return (0, _previousDay.previousDay)(date, 5, options);
}

// Fallback for modularized imports:
var _default = exports.default = previousFriday;
},{"./previousDay.js":"node_modules/date-fns/previousDay.js"}],"node_modules/date-fns/previousMonday.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.previousMonday = previousMonday;
var _previousDay = require("./previousDay.js");
/**
 * The {@link previousMonday} function options.
 */

/**
 * @name previousMonday
 * @category Weekday Helpers
 * @summary When is the previous Monday?
 *
 * @description
 * When is the previous Monday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to start counting from
 * @param options - An object with options
 *
 * @returns The previous Monday
 *
 * @example
 * // When is the previous Monday before Jun, 18, 2021?
 * const result = previousMonday(new Date(2021, 5, 18))
 * //=> Mon June 14 2021 00:00:00
 */
function previousMonday(date, options) {
  return (0, _previousDay.previousDay)(date, 1, options);
}

// Fallback for modularized imports:
var _default = exports.default = previousMonday;
},{"./previousDay.js":"node_modules/date-fns/previousDay.js"}],"node_modules/date-fns/previousSaturday.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.previousSaturday = previousSaturday;
var _previousDay = require("./previousDay.js");
/**
 * The {@link previousSaturday} function options.
 */

/**
 * @name previousSaturday
 * @category Weekday Helpers
 * @summary When is the previous Saturday?
 *
 * @description
 * When is the previous Saturday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to start counting from
 * @param options - The options
 *
 * @returns The previous Saturday
 *
 * @example
 * // When is the previous Saturday before Jun, 20, 2021?
 * const result = previousSaturday(new Date(2021, 5, 20))
 * //=> Sat June 19 2021 00:00:00
 */
function previousSaturday(date, options) {
  return (0, _previousDay.previousDay)(date, 6, options);
}

// Fallback for modularized imports:
var _default = exports.default = previousSaturday;
},{"./previousDay.js":"node_modules/date-fns/previousDay.js"}],"node_modules/date-fns/previousSunday.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.previousSunday = previousSunday;
var _previousDay = require("./previousDay.js");
/**
 * The {@link previousSunday} function options.
 */

/**
 * @name previousSunday
 * @category Weekday Helpers
 * @summary When is the previous Sunday?
 *
 * @description
 * When is the previous Sunday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to start counting from
 * @param options - The options
 *
 * @returns The previous Sunday
 *
 * @example
 * // When is the previous Sunday before Jun, 21, 2021?
 * const result = previousSunday(new Date(2021, 5, 21))
 * //=> Sun June 20 2021 00:00:00
 */
function previousSunday(date, options) {
  return (0, _previousDay.previousDay)(date, 0, options);
}

// Fallback for modularized imports:
var _default = exports.default = previousSunday;
},{"./previousDay.js":"node_modules/date-fns/previousDay.js"}],"node_modules/date-fns/previousThursday.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.previousThursday = previousThursday;
var _previousDay = require("./previousDay.js");
/**
 * The {@link previousThursday} function options.
 */

/**
 * @name previousThursday
 * @category Weekday Helpers
 * @summary When is the previous Thursday?
 *
 * @description
 * When is the previous Thursday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to start counting from
 * @param options - An object with options
 *
 * @returns The previous Thursday
 *
 * @example
 * // When is the previous Thursday before Jun, 18, 2021?
 * const result = previousThursday(new Date(2021, 5, 18))
 * //=> Thu June 17 2021 00:00:00
 */
function previousThursday(date, options) {
  return (0, _previousDay.previousDay)(date, 4, options);
}

// Fallback for modularized imports:
var _default = exports.default = previousThursday;
},{"./previousDay.js":"node_modules/date-fns/previousDay.js"}],"node_modules/date-fns/previousTuesday.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.previousTuesday = previousTuesday;
var _previousDay = require("./previousDay.js");
/**
 * The {@link previousTuesday} function options.
 */

/**
 * @name previousTuesday
 * @category Weekday Helpers
 * @summary When is the previous Tuesday?
 *
 * @description
 * When is the previous Tuesday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to start counting from
 * @param options - An object with options
 *
 * @returns The previous Tuesday
 *
 * @example
 * // When is the previous Tuesday before Jun, 18, 2021?
 * const result = previousTuesday(new Date(2021, 5, 18))
 * //=> Tue June 15 2021 00:00:00
 */
function previousTuesday(date, options) {
  return (0, _previousDay.previousDay)(date, 2, options);
}

// Fallback for modularized imports:
var _default = exports.default = previousTuesday;
},{"./previousDay.js":"node_modules/date-fns/previousDay.js"}],"node_modules/date-fns/previousWednesday.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.previousWednesday = previousWednesday;
var _previousDay = require("./previousDay.js");
/**
 * The {@link previousWednesday} function options.
 */

/**
 * @name previousWednesday
 * @category Weekday Helpers
 * @summary When is the previous Wednesday?
 *
 * @description
 * When is the previous Wednesday?
 *
 * @typeParam DateType - The Date type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [UTCDate](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to start counting from
 * @param options - An object with options
 *
 * @returns The previous Wednesday
 *
 * @example
 * // When is the previous Wednesday before Jun, 18, 2021?
 * const result = previousWednesday(new Date(2021, 5, 18))
 * //=> Wed June 16 2021 00:00:00
 */
function previousWednesday(date, options) {
  return (0, _previousDay.previousDay)(date, 3, options);
}

// Fallback for modularized imports:
var _default = exports.default = previousWednesday;
},{"./previousDay.js":"node_modules/date-fns/previousDay.js"}],"node_modules/date-fns/quartersToMonths.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.quartersToMonths = quartersToMonths;
var _constants = require("./constants.js");
/**
 * @name quartersToMonths
 * @category Conversion Helpers
 * @summary Convert number of quarters to months.
 *
 * @description
 * Convert a number of quarters to a full number of months.
 *
 * @param quarters - The number of quarters to be converted
 *
 * @returns The number of quarters converted in months
 *
 * @example
 * // Convert 2 quarters to months
 * const result = quartersToMonths(2)
 * //=> 6
 */
function quartersToMonths(quarters) {
  return Math.trunc(quarters * _constants.monthsInQuarter);
}

// Fallback for modularized imports:
var _default = exports.default = quartersToMonths;
},{"./constants.js":"node_modules/date-fns/constants.js"}],"node_modules/date-fns/quartersToYears.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.quartersToYears = quartersToYears;
var _constants = require("./constants.js");
/**
 * @name quartersToYears
 * @category Conversion Helpers
 * @summary Convert number of quarters to years.
 *
 * @description
 * Convert a number of quarters to a full number of years.
 *
 * @param quarters - The number of quarters to be converted
 *
 * @returns The number of quarters converted in years
 *
 * @example
 * // Convert 8 quarters to years
 * const result = quartersToYears(8)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = quartersToYears(11)
 * //=> 2
 */
function quartersToYears(quarters) {
  const years = quarters / _constants.quartersInYear;
  return Math.trunc(years);
}

// Fallback for modularized imports:
var _default = exports.default = quartersToYears;
},{"./constants.js":"node_modules/date-fns/constants.js"}],"node_modules/date-fns/roundToNearestHours.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.roundToNearestHours = roundToNearestHours;
var _getRoundingMethod = require("./_lib/getRoundingMethod.js");
var _constructFrom = require("./constructFrom.js");
var _toDate = require("./toDate.js");
/**
 * The {@link roundToNearestHours} function options.
 */

/**
 * @name roundToNearestHours
 * @category Hour Helpers
 * @summary Rounds the given date to the nearest hour
 *
 * @description
 * Rounds the given date to the nearest hour (or number of hours).
 * Rounds up when the given date is exactly between the nearest round hours.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to round
 * @param options - An object with options.
 *
 * @returns The new date rounded to the closest hour
 *
 * @example
 * // Round 10 July 2014 12:34:56 to nearest hour:
 * const result = roundToNearestHours(new Date(2014, 6, 10, 12, 34, 56))
 * //=> Thu Jul 10 2014 13:00:00
 *
 * @example
 * // Round 10 July 2014 12:34:56 to nearest half hour:
 * const result = roundToNearestHours(new Date(2014, 6, 10, 12, 34, 56), { nearestTo: 6 })
 * //=> Thu Jul 10 2014 12:00:00
 *
 * @example
 * // Round 10 July 2014 12:34:56 to nearest half hour:
 * const result = roundToNearestHours(new Date(2014, 6, 10, 12, 34, 56), { nearestTo: 8 })
 * //=> Thu Jul 10 2014 16:00:00
 *
 * @example
 * // Floor (rounds down) 10 July 2014 12:34:56 to nearest hour:
 * const result = roundToNearestHours(new Date(2014, 6, 10, 1, 23, 45), { roundingMethod: 'ceil' })
 * //=> Thu Jul 10 2014 02:00:00
 *
 * @example
 * // Ceil (rounds up) 10 July 2014 12:34:56 to nearest quarter hour:
 * const result = roundToNearestHours(new Date(2014, 6, 10, 12, 34, 56), { roundingMethod: 'floor', nearestTo: 8 })
 * //=> Thu Jul 10 2014 08:00:00
 */
function roundToNearestHours(date, options) {
  const nearestTo = options?.nearestTo ?? 1;
  if (nearestTo < 1 || nearestTo > 12) return (0, _constructFrom.constructFrom)(options?.in || date, NaN);
  const date_ = (0, _toDate.toDate)(date, options?.in);
  const fractionalMinutes = date_.getMinutes() / 60;
  const fractionalSeconds = date_.getSeconds() / 60 / 60;
  const fractionalMilliseconds = date_.getMilliseconds() / 1000 / 60 / 60;
  const hours = date_.getHours() + fractionalMinutes + fractionalSeconds + fractionalMilliseconds;
  const method = options?.roundingMethod ?? "round";
  const roundingMethod = (0, _getRoundingMethod.getRoundingMethod)(method);
  const roundedHours = roundingMethod(hours / nearestTo) * nearestTo;
  date_.setHours(roundedHours, 0, 0, 0);
  return date_;
}

// Fallback for modularized imports:
var _default = exports.default = roundToNearestHours;
},{"./_lib/getRoundingMethod.js":"node_modules/date-fns/_lib/getRoundingMethod.js","./constructFrom.js":"node_modules/date-fns/constructFrom.js","./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/roundToNearestMinutes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.roundToNearestMinutes = roundToNearestMinutes;
var _getRoundingMethod = require("./_lib/getRoundingMethod.js");
var _constructFrom = require("./constructFrom.js");
var _toDate = require("./toDate.js");
/**
 * The {@link roundToNearestMinutes} function options.
 */

/**
 * @name roundToNearestMinutes
 * @category Minute Helpers
 * @summary Rounds the given date to the nearest minute
 *
 * @description
 * Rounds the given date to the nearest minute (or number of minutes).
 * Rounds up when the given date is exactly between the nearest round minutes.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to round
 * @param options - An object with options.
 *
 * @returns The new date rounded to the closest minute
 *
 * @example
 * // Round 10 July 2014 12:12:34 to nearest minute:
 * const result = roundToNearestMinutes(new Date(2014, 6, 10, 12, 12, 34))
 * //=> Thu Jul 10 2014 12:13:00
 *
 * @example
 * // Round 10 July 2014 12:12:34 to nearest quarter hour:
 * const result = roundToNearestMinutes(new Date(2014, 6, 10, 12, 12, 34), { nearestTo: 15 })
 * //=> Thu Jul 10 2014 12:15:00
 *
 * @example
 * // Floor (rounds down) 10 July 2014 12:12:34 to nearest minute:
 * const result = roundToNearestMinutes(new Date(2014, 6, 10, 12, 12, 34), { roundingMethod: 'floor' })
 * //=> Thu Jul 10 2014 12:12:00
 *
 * @example
 * // Ceil (rounds up) 10 July 2014 12:12:34 to nearest half hour:
 * const result = roundToNearestMinutes(new Date(2014, 6, 10, 12, 12, 34), { roundingMethod: 'ceil', nearestTo: 30 })
 * //=> Thu Jul 10 2014 12:30:00
 */
function roundToNearestMinutes(date, options) {
  const nearestTo = options?.nearestTo ?? 1;
  if (nearestTo < 1 || nearestTo > 30) return (0, _constructFrom.constructFrom)(date, NaN);
  const date_ = (0, _toDate.toDate)(date, options?.in);
  const fractionalSeconds = date_.getSeconds() / 60;
  const fractionalMilliseconds = date_.getMilliseconds() / 1000 / 60;
  const minutes = date_.getMinutes() + fractionalSeconds + fractionalMilliseconds;
  const method = options?.roundingMethod ?? "round";
  const roundingMethod = (0, _getRoundingMethod.getRoundingMethod)(method);
  const roundedMinutes = roundingMethod(minutes / nearestTo) * nearestTo;
  date_.setMinutes(roundedMinutes, 0, 0);
  return date_;
}

// Fallback for modularized imports:
var _default = exports.default = roundToNearestMinutes;
},{"./_lib/getRoundingMethod.js":"node_modules/date-fns/_lib/getRoundingMethod.js","./constructFrom.js":"node_modules/date-fns/constructFrom.js","./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/secondsToHours.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.secondsToHours = secondsToHours;
var _constants = require("./constants.js");
/**
 * @name secondsToHours
 * @category Conversion Helpers
 * @summary Convert seconds to hours.
 *
 * @description
 * Convert a number of seconds to a full number of hours.
 *
 * @param seconds - The number of seconds to be converted
 *
 * @returns The number of seconds converted in hours
 *
 * @example
 * // Convert 7200 seconds into hours
 * const result = secondsToHours(7200)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = secondsToHours(7199)
 * //=> 1
 */
function secondsToHours(seconds) {
  const hours = seconds / _constants.secondsInHour;
  return Math.trunc(hours);
}

// Fallback for modularized imports:
var _default = exports.default = secondsToHours;
},{"./constants.js":"node_modules/date-fns/constants.js"}],"node_modules/date-fns/secondsToMilliseconds.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.secondsToMilliseconds = secondsToMilliseconds;
var _constants = require("./constants.js");
/**
 * @name secondsToMilliseconds
 * @category Conversion Helpers
 * @summary Convert seconds to milliseconds.
 *
 * @description
 * Convert a number of seconds to a full number of milliseconds.
 *
 * @param seconds - The number of seconds to be converted
 *
 * @returns The number of seconds converted in milliseconds
 *
 * @example
 * // Convert 2 seconds into milliseconds
 * const result = secondsToMilliseconds(2)
 * //=> 2000
 */
function secondsToMilliseconds(seconds) {
  return seconds * _constants.millisecondsInSecond;
}

// Fallback for modularized imports:
var _default = exports.default = secondsToMilliseconds;
},{"./constants.js":"node_modules/date-fns/constants.js"}],"node_modules/date-fns/secondsToMinutes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.secondsToMinutes = secondsToMinutes;
var _constants = require("./constants.js");
/**
 * @name secondsToMinutes
 * @category Conversion Helpers
 * @summary Convert seconds to minutes.
 *
 * @description
 * Convert a number of seconds to a full number of minutes.
 *
 * @param seconds - The number of seconds to be converted
 *
 * @returns The number of seconds converted in minutes
 *
 * @example
 * // Convert 120 seconds into minutes
 * const result = secondsToMinutes(120)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = secondsToMinutes(119)
 * //=> 1
 */
function secondsToMinutes(seconds) {
  const minutes = seconds / _constants.secondsInMinute;
  return Math.trunc(minutes);
}

// Fallback for modularized imports:
var _default = exports.default = secondsToMinutes;
},{"./constants.js":"node_modules/date-fns/constants.js"}],"node_modules/date-fns/setMonth.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.setMonth = setMonth;
var _constructFrom = require("./constructFrom.js");
var _getDaysInMonth = require("./getDaysInMonth.js");
var _toDate = require("./toDate.js");
/**
 * The {@link setMonth} function options.
 */

/**
 * @name setMonth
 * @category Month Helpers
 * @summary Set the month to the given date.
 *
 * @description
 * Set the month to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param month - The month index to set (0-11)
 * @param options - The options
 *
 * @returns The new date with the month set
 *
 * @example
 * // Set February to 1 September 2014:
 * const result = setMonth(new Date(2014, 8, 1), 1)
 * //=> Sat Feb 01 2014 00:00:00
 */
function setMonth(date, month, options) {
  const _date = (0, _toDate.toDate)(date, options?.in);
  const year = _date.getFullYear();
  const day = _date.getDate();
  const midMonth = (0, _constructFrom.constructFrom)(options?.in || date, 0);
  midMonth.setFullYear(year, month, 15);
  midMonth.setHours(0, 0, 0, 0);
  const daysInMonth = (0, _getDaysInMonth.getDaysInMonth)(midMonth);

  // Set the earlier date, allows to wrap Jan 31 to Feb 28
  _date.setMonth(month, Math.min(day, daysInMonth));
  return _date;
}

// Fallback for modularized imports:
var _default = exports.default = setMonth;
},{"./constructFrom.js":"node_modules/date-fns/constructFrom.js","./getDaysInMonth.js":"node_modules/date-fns/getDaysInMonth.js","./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/set.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.set = set;
var _constructFrom = require("./constructFrom.js");
var _setMonth = require("./setMonth.js");
var _toDate = require("./toDate.js");
/**
 * The {@link set} function options.
 */

/**
 * @name set
 * @category Common Helpers
 * @summary Set date values to a given date.
 *
 * @description
 * Set date values to a given date.
 *
 * Sets time values to date from object `values`.
 * A value is not set if it is undefined or null or doesn't exist in `values`.
 *
 * Note about bundle size: `set` does not internally use `setX` functions from date-fns but instead opts
 * to use native `Date#setX` methods. If you use this function, you may not want to include the
 * other `setX` functions that date-fns provides if you are concerned about the bundle size.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param values - The date values to be set
 * @param options - The options
 *
 * @returns The new date with options set
 *
 * @example
 * // Transform 1 September 2014 into 20 October 2015 in a single line:
 * const result = set(new Date(2014, 8, 20), { year: 2015, month: 9, date: 20 })
 * //=> Tue Oct 20 2015 00:00:00
 *
 * @example
 * // Set 12 PM to 1 September 2014 01:23:45 to 1 September 2014 12:00:00:
 * const result = set(new Date(2014, 8, 1, 1, 23, 45), { hours: 12 })
 * //=> Mon Sep 01 2014 12:23:45
 */
function set(date, values, options) {
  let _date = (0, _toDate.toDate)(date, options?.in);

  // Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date
  if (isNaN(+_date)) return (0, _constructFrom.constructFrom)(options?.in || date, NaN);
  if (values.year != null) _date.setFullYear(values.year);
  if (values.month != null) _date = (0, _setMonth.setMonth)(_date, values.month);
  if (values.date != null) _date.setDate(values.date);
  if (values.hours != null) _date.setHours(values.hours);
  if (values.minutes != null) _date.setMinutes(values.minutes);
  if (values.seconds != null) _date.setSeconds(values.seconds);
  if (values.milliseconds != null) _date.setMilliseconds(values.milliseconds);
  return _date;
}

// Fallback for modularized imports:
var _default = exports.default = set;
},{"./constructFrom.js":"node_modules/date-fns/constructFrom.js","./setMonth.js":"node_modules/date-fns/setMonth.js","./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/setDate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.setDate = setDate;
var _toDate = require("./toDate.js");
/**
 * The {@link setDate} function options.
 */

/**
 * @name setDate
 * @category Day Helpers
 * @summary Set the day of the month to the given date.
 *
 * @description
 * Set the day of the month to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows using extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param dayOfMonth - The day of the month of the new date
 * @param options - The options
 *
 * @returns The new date with the day of the month set
 *
 * @example
 * // Set the 30th day of the month to 1 September 2014:
 * const result = setDate(new Date(2014, 8, 1), 30)
 * //=> Tue Sep 30 2014 00:00:00
 */
function setDate(date, dayOfMonth, options) {
  const _date = (0, _toDate.toDate)(date, options?.in);
  _date.setDate(dayOfMonth);
  return _date;
}

// Fallback for modularized imports:
var _default = exports.default = setDate;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/setDayOfYear.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.setDayOfYear = setDayOfYear;
var _toDate = require("./toDate.js");
/**
 * The {@link setDayOfYear} function options.
 */

/**
 * @name setDayOfYear
 * @category Day Helpers
 * @summary Set the day of the year to the given date.
 *
 * @description
 * Set the day of the year to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param dayOfYear - The day of the year of the new date
 * @param options - An object with options
 *
 * @returns The new date with the day of the year set
 *
 * @example
 * // Set the 2nd day of the year to 2 July 2014:
 * const result = setDayOfYear(new Date(2014, 6, 2), 2)
 * //=> Thu Jan 02 2014 00:00:00
 */
function setDayOfYear(date, dayOfYear, options) {
  const date_ = (0, _toDate.toDate)(date, options?.in);
  date_.setMonth(0);
  date_.setDate(dayOfYear);
  return date_;
}

// Fallback for modularized imports:
var _default = exports.default = setDayOfYear;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/setDefaultOptions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.setDefaultOptions = setDefaultOptions;
var _defaultOptions = require("./_lib/defaultOptions.js");
/**
 * @name setDefaultOptions
 * @category Common Helpers
 * @summary Set default options including locale.
 * @pure false
 *
 * @description
 * Sets the defaults for
 * `options.locale`, `options.weekStartsOn` and `options.firstWeekContainsDate`
 * arguments for all functions.
 *
 * @param options - An object with options
 *
 * @example
 * // Set global locale:
 * import { es } from 'date-fns/locale'
 * setDefaultOptions({ locale: es })
 * const result = format(new Date(2014, 8, 2), 'PPPP')
 * //=> 'martes, 2 de septiembre de 2014'
 *
 * @example
 * // Start of the week for 2 September 2014:
 * const result = startOfWeek(new Date(2014, 8, 2))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // Start of the week for 2 September 2014,
 * // when we set that week starts on Monday by default:
 * setDefaultOptions({ weekStartsOn: 1 })
 * const result = startOfWeek(new Date(2014, 8, 2))
 * //=> Mon Sep 01 2014 00:00:00
 *
 * @example
 * // Manually set options take priority over default options:
 * setDefaultOptions({ weekStartsOn: 1 })
 * const result = startOfWeek(new Date(2014, 8, 2), { weekStartsOn: 0 })
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // Remove the option by setting it to `undefined`:
 * setDefaultOptions({ weekStartsOn: 1 })
 * setDefaultOptions({ weekStartsOn: undefined })
 * const result = startOfWeek(new Date(2014, 8, 2))
 * //=> Sun Aug 31 2014 00:00:00
 */
function setDefaultOptions(options) {
  const result = {};
  const defaultOptions = (0, _defaultOptions.getDefaultOptions)();
  for (const property in defaultOptions) {
    if (Object.prototype.hasOwnProperty.call(defaultOptions, property)) {
      // [TODO] I challenge you to fix the type
      result[property] = defaultOptions[property];
    }
  }
  for (const property in options) {
    if (Object.prototype.hasOwnProperty.call(options, property)) {
      if (options[property] === undefined) {
        // [TODO] I challenge you to fix the type
        delete result[property];
      } else {
        // [TODO] I challenge you to fix the type
        result[property] = options[property];
      }
    }
  }
  (0, _defaultOptions.setDefaultOptions)(result);
}

// Fallback for modularized imports:
var _default = exports.default = setDefaultOptions;
},{"./_lib/defaultOptions.js":"node_modules/date-fns/_lib/defaultOptions.js"}],"node_modules/date-fns/setHours.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.setHours = setHours;
var _toDate = require("./toDate.js");
/**
 * The {@link setHours} function options.
 */

/**
 * @name setHours
 * @category Hour Helpers
 * @summary Set the hours to the given date.
 *
 * @description
 * Set the hours to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param hours - The hours of the new date
 * @param options - An object with options
 *
 * @returns The new date with the hours set
 *
 * @example
 * // Set 4 hours to 1 September 2014 11:30:00:
 * const result = setHours(new Date(2014, 8, 1, 11, 30), 4)
 * //=> Mon Sep 01 2014 04:30:00
 */
function setHours(date, hours, options) {
  const _date = (0, _toDate.toDate)(date, options?.in);
  _date.setHours(hours);
  return _date;
}

// Fallback for modularized imports:
var _default = exports.default = setHours;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/setMilliseconds.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.setMilliseconds = setMilliseconds;
var _toDate = require("./toDate.js");
/**
 * The {@link setMilliseconds} function options.
 */

/**
 * @name setMilliseconds
 * @category Millisecond Helpers
 * @summary Set the milliseconds to the given date.
 *
 * @description
 * Set the milliseconds to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param milliseconds - The milliseconds of the new date
 * @param options - The options
 *
 * @returns The new date with the milliseconds set
 *
 * @example
 * // Set 300 milliseconds to 1 September 2014 11:30:40.500:
 * const result = setMilliseconds(new Date(2014, 8, 1, 11, 30, 40, 500), 300)
 * //=> Mon Sep 01 2014 11:30:40.300
 */
function setMilliseconds(date, milliseconds, options) {
  const _date = (0, _toDate.toDate)(date, options?.in);
  _date.setMilliseconds(milliseconds);
  return _date;
}

// Fallback for modularized imports:
var _default = exports.default = setMilliseconds;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/setMinutes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.setMinutes = setMinutes;
var _toDate = require("./toDate.js");
/**
 * The {@link setMinutes} function options.
 */

/**
 * @name setMinutes
 * @category Minute Helpers
 * @summary Set the minutes to the given date.
 *
 * @description
 * Set the minutes to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows using extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, returned from the context function, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param minutes - The minutes of the new date
 * @param options - An object with options
 *
 * @returns The new date with the minutes set
 *
 * @example
 * // Set 45 minutes to 1 September 2014 11:30:40:
 * const result = setMinutes(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:45:40
 */
function setMinutes(date, minutes, options) {
  const date_ = (0, _toDate.toDate)(date, options?.in);
  date_.setMinutes(minutes);
  return date_;
}

// Fallback for modularized imports:
var _default = exports.default = setMinutes;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/setQuarter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.setQuarter = setQuarter;
var _setMonth = require("./setMonth.js");
var _toDate = require("./toDate.js");
/**
 * The {@link setQuarter} function options.
 */

/**
 * @name setQuarter
 * @category Quarter Helpers
 * @summary Set the year quarter to the given date.
 *
 * @description
 * Set the year quarter to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param quarter - The quarter of the new date
 * @param options - The options
 *
 * @returns The new date with the quarter set
 *
 * @example
 * // Set the 2nd quarter to 2 July 2014:
 * const result = setQuarter(new Date(2014, 6, 2), 2)
 * //=> Wed Apr 02 2014 00:00:00
 */
function setQuarter(date, quarter, options) {
  const date_ = (0, _toDate.toDate)(date, options?.in);
  const oldQuarter = Math.trunc(date_.getMonth() / 3) + 1;
  const diff = quarter - oldQuarter;
  return (0, _setMonth.setMonth)(date_, date_.getMonth() + diff * 3);
}

// Fallback for modularized imports:
var _default = exports.default = setQuarter;
},{"./setMonth.js":"node_modules/date-fns/setMonth.js","./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/setSeconds.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.setSeconds = setSeconds;
var _toDate = require("./toDate.js");
/**
 * The {@link setSeconds} function options.
 */

/**
 * @name setSeconds
 * @category Second Helpers
 * @summary Set the seconds to the given date, with context support.
 *
 * @description
 * Set the seconds to the given date, with an optional context for time zone specification.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param seconds - The seconds of the new date
 * @param options - An object with options
 *
 * @returns The new date with the seconds set
 *
 * @example
 * // Set 45 seconds to 1 September 2014 11:30:40:
 * const result = setSeconds(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:30:45
 */
function setSeconds(date, seconds, options) {
  const _date = (0, _toDate.toDate)(date, options?.in);
  _date.setSeconds(seconds);
  return _date;
}

// Fallback for modularized imports:
var _default = exports.default = setSeconds;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/setWeekYear.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.setWeekYear = setWeekYear;
var _defaultOptions = require("./_lib/defaultOptions.js");
var _constructFrom = require("./constructFrom.js");
var _differenceInCalendarDays = require("./differenceInCalendarDays.js");
var _startOfWeekYear = require("./startOfWeekYear.js");
var _toDate = require("./toDate.js");
/**
 * The {@link setWeekYear} function options.
 */

/**
 * @name setWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Set the local week-numbering year to the given date.
 *
 * @description
 * Set the local week-numbering year to the given date,
 * saving the week number and the weekday number.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param weekYear - The local week-numbering year of the new date
 * @param options - An object with options
 *
 * @returns The new date with the local week-numbering year set
 *
 * @example
 * // Set the local week-numbering year 2004 to 2 January 2010 with default options:
 * const result = setWeekYear(new Date(2010, 0, 2), 2004)
 * //=> Sat Jan 03 2004 00:00:00
 *
 * @example
 * // Set the local week-numbering year 2004 to 2 January 2010,
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * const result = setWeekYear(new Date(2010, 0, 2), 2004, {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Sat Jan 01 2005 00:00:00
 */
function setWeekYear(date, weekYear, options) {
  const defaultOptions = (0, _defaultOptions.getDefaultOptions)();
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
  const diff = (0, _differenceInCalendarDays.differenceInCalendarDays)((0, _toDate.toDate)(date, options?.in), (0, _startOfWeekYear.startOfWeekYear)(date, options), options);
  const firstWeek = (0, _constructFrom.constructFrom)(options?.in || date, 0);
  firstWeek.setFullYear(weekYear, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const date_ = (0, _startOfWeekYear.startOfWeekYear)(firstWeek, options);
  date_.setDate(date_.getDate() + diff);
  return date_;
}

// Fallback for modularized imports:
var _default = exports.default = setWeekYear;
},{"./_lib/defaultOptions.js":"node_modules/date-fns/_lib/defaultOptions.js","./constructFrom.js":"node_modules/date-fns/constructFrom.js","./differenceInCalendarDays.js":"node_modules/date-fns/differenceInCalendarDays.js","./startOfWeekYear.js":"node_modules/date-fns/startOfWeekYear.js","./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/setYear.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.setYear = setYear;
var _constructFrom = require("./constructFrom.js");
var _toDate = require("./toDate.js");
/**
 * The {@link setYear} function options.
 */

/**
 * @name setYear
 * @category Year Helpers
 * @summary Set the year to the given date.
 *
 * @description
 * Set the year to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param year - The year of the new date
 * @param options - An object with options.
 *
 * @returns The new date with the year set
 *
 * @example
 * // Set year 2013 to 1 September 2014:
 * const result = setYear(new Date(2014, 8, 1), 2013)
 * //=> Sun Sep 01 2013 00:00:00
 */
function setYear(date, year, options) {
  const date_ = (0, _toDate.toDate)(date, options?.in);

  // Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date
  if (isNaN(+date_)) return (0, _constructFrom.constructFrom)(options?.in || date, NaN);
  date_.setFullYear(year);
  return date_;
}

// Fallback for modularized imports:
var _default = exports.default = setYear;
},{"./constructFrom.js":"node_modules/date-fns/constructFrom.js","./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/startOfDecade.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.startOfDecade = startOfDecade;
var _toDate = require("./toDate.js");
/**
 * The {@link startOfDecade} options.
 */

/**
 * @name startOfDecade
 * @category Decade Helpers
 * @summary Return the start of a decade for the given date.
 *
 * @description
 * Return the start of a decade for the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a decade
 *
 * @example
 * // The start of a decade for 21 October 2015 00:00:00:
 * const result = startOfDecade(new Date(2015, 9, 21, 00, 00, 00))
 * //=> Jan 01 2010 00:00:00
 */
function startOfDecade(date, options) {
  // TODO: Switch to more technical definition in of decades that start with 1
  // end with 0. I.e. 2001-2010 instead of current 2000-2009. It's a breaking
  // change, so it can only be done in 4.0.
  const _date = (0, _toDate.toDate)(date, options?.in);
  const year = _date.getFullYear();
  const decade = Math.floor(year / 10) * 10;
  _date.setFullYear(decade, 0, 1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
var _default = exports.default = startOfDecade;
},{"./toDate.js":"node_modules/date-fns/toDate.js"}],"node_modules/date-fns/startOfToday.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.startOfToday = startOfToday;
var _startOfDay = require("./startOfDay.js");
/**
 * The {@link startOfToday} function options.
 */

/**
 * @name startOfToday
 * @category Day Helpers
 * @summary Return the start of today.
 * @pure false
 *
 * @description
 * Return the start of today.
 *
 * @typeParam ContextDate - The `Date` type of the context function.
 *
 * @param options - An object with options
 *
 * @returns The start of today
 *
 * @example
 * // If today is 6 October 2014:
 * const result = startOfToday()
 * //=> Mon Oct 6 2014 00:00:00
 */
function startOfToday(options) {
  return (0, _startOfDay.startOfDay)(Date.now(), options);
}

// Fallback for modularized imports:
var _default = exports.default = startOfToday;
},{"./startOfDay.js":"node_modules/date-fns/startOfDay.js"}],"node_modules/date-fns/startOfTomorrow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.startOfTomorrow = startOfTomorrow;
var _constructFrom = require("./constructFrom.js");
var _constructNow = require("./constructNow.js");
/**
 * The {@link startOfTomorrow} function options.
 */

/**
 * @name startOfTomorrow
 * @category Day Helpers
 * @summary Return the start of tomorrow.
 * @pure false
 *
 * @typeParam ContextDate - The `Date` type of the context function.
 *
 * @param options - An object with options
 *
 * @returns The start of tomorrow
 *
 * @description
 * Return the start of tomorrow.
 *
 * @example
 * // If today is 6 October 2014:
 * const result = startOfTomorrow()
 * //=> Tue Oct 7 2014 00:00:00
 */
function startOfTomorrow(options) {
  const now = (0, _constructNow.constructNow)(options?.in);
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();
  const date = (0, _constructFrom.constructFrom)(options?.in, 0);
  date.setFullYear(year, month, day + 1);
  date.setHours(0, 0, 0, 0);
  return date;
}

// Fallback for modularized imports:
var _default = exports.default = startOfTomorrow;
},{"./constructFrom.js":"node_modules/date-fns/constructFrom.js","./constructNow.js":"node_modules/date-fns/constructNow.js"}],"node_modules/date-fns/startOfYesterday.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.startOfYesterday = startOfYesterday;
var _constructNow = require("./constructNow.js");
/**
 * The {@link startOfYesterday} function options.
 */

/**
 * @name startOfYesterday
 * @category Day Helpers
 * @summary Return the start of yesterday.
 * @pure false
 *
 * @typeParam ContextDate - The `Date` type of the context function.
 *
 * @param options - An object with options
 *
 * @description
 * Return the start of yesterday.
 *
 * @returns The start of yesterday
 *
 * @example
 * // If today is 6 October 2014:
 * const result = startOfYesterday()
 * //=> Sun Oct 5 2014 00:00:00
 */
function startOfYesterday(options) {
  const now = (0, _constructNow.constructNow)(options?.in);
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();
  const date = (0, _constructNow.constructNow)(options?.in);
  date.setFullYear(year, month, day - 1);
  date.setHours(0, 0, 0, 0);
  return date;
}

// Fallback for modularized imports:
var _default = exports.default = startOfYesterday;
},{"./constructNow.js":"node_modules/date-fns/constructNow.js"}],"node_modules/date-fns/subMonths.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.subMonths = subMonths;
var _addMonths = require("./addMonths.js");
/**
 * The subMonths function options.
 */

/**
 * @name subMonths
 * @category Month Helpers
 * @summary Subtract the specified number of months from the given date.
 *
 * @description
 * Subtract the specified number of months from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of months to be subtracted.
 * @param options - An object with options
 *
 * @returns The new date with the months subtracted
 *
 * @example
 * // Subtract 5 months from 1 February 2015:
 * const result = subMonths(new Date(2015, 1, 1), 5)
 * //=> Mon Sep 01 2014 00:00:00
 */
function subMonths(date, amount, options) {
  return (0, _addMonths.addMonths)(date, -amount, options);
}

// Fallback for modularized imports:
var _default = exports.default = subMonths;
},{"./addMonths.js":"node_modules/date-fns/addMonths.js"}],"node_modules/date-fns/sub.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.sub = sub;
var _constructFrom = require("./constructFrom.js");
var _subDays = require("./subDays.js");
var _subMonths = require("./subMonths.js");
/**
 * The {@link sub} function options.
 */

/**
 * @name sub
 * @category Common Helpers
 * @summary Subtract the specified years, months, weeks, days, hours, minutes and seconds from the given date.
 *
 * @description
 * Subtract the specified years, months, weeks, days, hours, minutes and seconds from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param duration - The object with years, months, weeks, days, hours, minutes and seconds to be subtracted
 * @param options - An object with options
 *
 * | Key     | Description                        |
 * |---------|------------------------------------|
 * | years   | Amount of years to be subtracted   |
 * | months  | Amount of months to be subtracted  |
 * | weeks   | Amount of weeks to be subtracted   |
 * | days    | Amount of days to be subtracted    |
 * | hours   | Amount of hours to be subtracted   |
 * | minutes | Amount of minutes to be subtracted |
 * | seconds | Amount of seconds to be subtracted |
 *
 * All values default to 0
 *
 * @returns The new date with the seconds subtracted
 *
 * @example
 * // Subtract the following duration from 15 June 2017 15:29:20
 * const result = sub(new Date(2017, 5, 15, 15, 29, 20), {
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,
 *   minutes: 9,
 *   seconds: 30
 * })
 * //=> Mon Sep 1 2014 10:19:50
 */
function sub(date, duration, options) {
  const {
    years = 0,
    months = 0,
    weeks = 0,
    days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0
  } = duration;
  const withoutMonths = (0, _subMonths.subMonths)(date, months + years * 12, options);
  const withoutDays = (0, _subDays.subDays)(withoutMonths, days + weeks * 7, options);
  const minutesToSub = minutes + hours * 60;
  const secondsToSub = seconds + minutesToSub * 60;
  const msToSub = secondsToSub * 1000;
  return (0, _constructFrom.constructFrom)(options?.in || date, +withoutDays - msToSub);
}

// Fallback for modularized imports:
var _default = exports.default = sub;
},{"./constructFrom.js":"node_modules/date-fns/constructFrom.js","./subDays.js":"node_modules/date-fns/subDays.js","./subMonths.js":"node_modules/date-fns/subMonths.js"}],"node_modules/date-fns/subBusinessDays.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.subBusinessDays = subBusinessDays;
var _addBusinessDays = require("./addBusinessDays.js");
/**
 * The {@link subBusinessDays} function options.
 */

/**
 * @name subBusinessDays
 * @category Day Helpers
 * @summary Subtract the specified number of business days (mon - fri) from the given date.
 *
 * @description
 * Subtract the specified number of business days (mon - fri) from the given date, ignoring weekends.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of business days to be subtracted.
 * @param options - An object with options
 *
 * @returns The new date with the business days subtracted
 *
 * @example
 * // Subtract 10 business days from 1 September 2014:
 * const result = subBusinessDays(new Date(2014, 8, 1), 10)
 * //=> Mon Aug 18 2014 00:00:00 (skipped weekend days)
 */
function subBusinessDays(date, amount, options) {
  return (0, _addBusinessDays.addBusinessDays)(date, -amount, options);
}

// Fallback for modularized imports:
var _default = exports.default = subBusinessDays;
},{"./addBusinessDays.js":"node_modules/date-fns/addBusinessDays.js"}],"node_modules/date-fns/subHours.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.subHours = subHours;
var _addHours = require("./addHours.js");
/**
 * The {@link subHours} function options.
 */

/**
 * @name subHours
 * @category Hour Helpers
 * @summary Subtract the specified number of hours from the given date.
 *
 * @description
 * Subtract the specified number of hours from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of hours to be subtracted.
 * @param options - The options
 *
 * @returns The new date with the hours subtracted
 *
 * @example
 * // Subtract 2 hours from 11 July 2014 01:00:00:
 * const result = subHours(new Date(2014, 6, 11, 1, 0), 2)
 * //=> Thu Jul 10 2014 23:00:00
 */
function subHours(date, amount, options) {
  return (0, _addHours.addHours)(date, -amount, options);
}

// Fallback for modularized imports:
var _default = exports.default = subHours;
},{"./addHours.js":"node_modules/date-fns/addHours.js"}],"node_modules/date-fns/subMilliseconds.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.subMilliseconds = subMilliseconds;
var _addMilliseconds = require("./addMilliseconds.js");
/**
 * The {@link subMilliseconds} function options.
 */

/**
 * Subtract the specified number of milliseconds from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of milliseconds to be subtracted.
 * @param options - An object with options
 *
 * @returns The new date with the milliseconds subtracted
 */
function subMilliseconds(date, amount, options) {
  return (0, _addMilliseconds.addMilliseconds)(date, -amount, options);
}

// Fallback for modularized imports:
var _default = exports.default = subMilliseconds;
},{"./addMilliseconds.js":"node_modules/date-fns/addMilliseconds.js"}],"node_modules/date-fns/subMinutes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.subMinutes = subMinutes;
var _addMinutes = require("./addMinutes.js");
/**
 * The {@link subMinutes} function options.
 */

/**
 * @name subMinutes
 * @category Minute Helpers
 * @summary Subtract the specified number of minutes from the given date.
 *
 * @description
 * Subtract the specified number of minutes from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of minutes to be subtracted.
 * @param options - An object with options
 *
 * @returns The new date with the minutes subtracted
 *
 * @example
 * // Subtract 30 minutes from 10 July 2014 12:00:00:
 * const result = subMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 11:30:00
 */
function subMinutes(date, amount, options) {
  return (0, _addMinutes.addMinutes)(date, -amount, options);
}

// Fallback for modularized imports:
var _default = exports.default = subMinutes;
},{"./addMinutes.js":"node_modules/date-fns/addMinutes.js"}],"node_modules/date-fns/subQuarters.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.subQuarters = subQuarters;
var _addQuarters = require("./addQuarters.js");
/**
 * The {@link subQuarters} function options.
 */

/**
 * @name subQuarters
 * @category Quarter Helpers
 * @summary Subtract the specified number of year quarters from the given date.
 *
 * @description
 * Subtract the specified number of year quarters from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of quarters to be subtracted.
 * @param options - An object with options
 *
 * @returns The new date with the quarters subtracted
 *
 * @example
 * // Subtract 3 quarters from 1 September 2014:
 * const result = subQuarters(new Date(2014, 8, 1), 3)
 * //=> Sun Dec 01 2013 00:00:00
 */
function subQuarters(date, amount, options) {
  return (0, _addQuarters.addQuarters)(date, -amount, options);
}

// Fallback for modularized imports:
var _default = exports.default = subQuarters;
},{"./addQuarters.js":"node_modules/date-fns/addQuarters.js"}],"node_modules/date-fns/subSeconds.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.subSeconds = subSeconds;
var _addSeconds = require("./addSeconds.js");
/**
 * The {@link subSeconds} function options.
 */

/**
 * Subtract the specified number of seconds from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of seconds to be subtracted.
 * @param options - The options
 *
 * @returns The new date with the seconds subtracted
 *
 * @example
 * // Subtract 30 seconds from 10 July 2014 12:45:00:
 * const result = subSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)
 * //=> Thu Jul 10 2014 12:44:30
 */
function subSeconds(date, amount, options) {
  return (0, _addSeconds.addSeconds)(date, -amount, options);
}

// Fallback for modularized imports:
var _default = exports.default = subSeconds;
},{"./addSeconds.js":"node_modules/date-fns/addSeconds.js"}],"node_modules/date-fns/subWeeks.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.subWeeks = subWeeks;
var _addWeeks = require("./addWeeks.js");
/**
 * The {@link subWeeks} function options.
 */

/**
 * @name subWeeks
 * @category Week Helpers
 * @summary Subtract the specified number of weeks from the given date.
 *
 * @description
 * Subtract the specified number of weeks from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of weeks to be subtracted.
 * @param options - An object with options
 *
 * @returns The new date with the weeks subtracted
 *
 * @example
 * // Subtract 4 weeks from 1 September 2014:
 * const result = subWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Aug 04 2014 00:00:00
 */
function subWeeks(date, amount, options) {
  return (0, _addWeeks.addWeeks)(date, -amount, options);
}

// Fallback for modularized imports:
var _default = exports.default = subWeeks;
},{"./addWeeks.js":"node_modules/date-fns/addWeeks.js"}],"node_modules/date-fns/subYears.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.subYears = subYears;
var _addYears = require("./addYears.js");
/**
 * The {@link subYears} function options.
 */

/**
 * @name subYears
 * @category Year Helpers
 * @summary Subtract the specified number of years from the given date.
 *
 * @description
 * Subtract the specified number of years from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of years to be subtracted.
 * @param options - An object with options
 *
 * @returns The new date with the years subtracted
 *
 * @example
 * // Subtract 5 years from 1 September 2014:
 * const result = subYears(new Date(2014, 8, 1), 5)
 * //=> Tue Sep 01 2009 00:00:00
 */
function subYears(date, amount, options) {
  return (0, _addYears.addYears)(date, -amount, options);
}

// Fallback for modularized imports:
var _default = exports.default = subYears;
},{"./addYears.js":"node_modules/date-fns/addYears.js"}],"node_modules/date-fns/weeksToDays.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.weeksToDays = weeksToDays;
var _constants = require("./constants.js");
/**
 * @name weeksToDays
 * @category Conversion Helpers
 * @summary Convert weeks to days.
 *
 * @description
 * Convert a number of weeks to a full number of days.
 *
 * @param weeks - The number of weeks to be converted
 *
 * @returns The number of weeks converted in days
 *
 * @example
 * // Convert 2 weeks into days
 * const result = weeksToDays(2)
 * //=> 14
 */
function weeksToDays(weeks) {
  return Math.trunc(weeks * _constants.daysInWeek);
}

// Fallback for modularized imports:
var _default = exports.default = weeksToDays;
},{"./constants.js":"node_modules/date-fns/constants.js"}],"node_modules/date-fns/yearsToDays.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.yearsToDays = yearsToDays;
var _constants = require("./constants.js");
/**
 * @name yearsToDays
 * @category Conversion Helpers
 * @summary Convert years to days.
 *
 * @description
 * Convert a number of years to a full number of days.
 *
 * @param years - The number of years to be converted
 *
 * @returns The number of years converted in days
 *
 * @example
 * // Convert 2 years into days
 * const result = yearsToDays(2)
 * //=> 730
 */
function yearsToDays(years) {
  return Math.trunc(years * _constants.daysInYear);
}

// Fallback for modularized imports:
var _default = exports.default = yearsToDays;
},{"./constants.js":"node_modules/date-fns/constants.js"}],"node_modules/date-fns/yearsToMonths.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.yearsToMonths = yearsToMonths;
var _constants = require("./constants.js");
/**
 * @name yearsToMonths
 * @category Conversion Helpers
 * @summary Convert years to months.
 *
 * @description
 * Convert a number of years to a full number of months.
 *
 * @param years - The number of years to be converted
 *
 * @returns The number of years converted in months
 *
 * @example
 * // Convert 2 years into months
 * const result = yearsToMonths(2)
 * //=> 24
 */
function yearsToMonths(years) {
  return Math.trunc(years * _constants.monthsInYear);
}

// Fallback for modularized imports:
var _default = exports.default = yearsToMonths;
},{"./constants.js":"node_modules/date-fns/constants.js"}],"node_modules/date-fns/yearsToQuarters.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.yearsToQuarters = yearsToQuarters;
var _constants = require("./constants.js");
/**
 * @name yearsToQuarters
 * @category Conversion Helpers
 * @summary Convert years to quarters.
 *
 * @description
 * Convert a number of years to a full number of quarters.
 *
 * @param years - The number of years to be converted
 *
 * @returns The number of years converted in quarters
 *
 * @example
 * // Convert 2 years to quarters
 * const result = yearsToQuarters(2)
 * //=> 8
 */
function yearsToQuarters(years) {
  return Math.trunc(years * _constants.quartersInYear);
}

// Fallback for modularized imports:
var _default = exports.default = yearsToQuarters;
},{"./constants.js":"node_modules/date-fns/constants.js"}],"node_modules/date-fns/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _add = require("./add.js");
Object.keys(_add).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _add[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _add[key];
    }
  });
});
var _addBusinessDays = require("./addBusinessDays.js");
Object.keys(_addBusinessDays).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _addBusinessDays[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _addBusinessDays[key];
    }
  });
});
var _addDays = require("./addDays.js");
Object.keys(_addDays).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _addDays[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _addDays[key];
    }
  });
});
var _addHours = require("./addHours.js");
Object.keys(_addHours).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _addHours[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _addHours[key];
    }
  });
});
var _addISOWeekYears = require("./addISOWeekYears.js");
Object.keys(_addISOWeekYears).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _addISOWeekYears[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _addISOWeekYears[key];
    }
  });
});
var _addMilliseconds = require("./addMilliseconds.js");
Object.keys(_addMilliseconds).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _addMilliseconds[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _addMilliseconds[key];
    }
  });
});
var _addMinutes = require("./addMinutes.js");
Object.keys(_addMinutes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _addMinutes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _addMinutes[key];
    }
  });
});
var _addMonths = require("./addMonths.js");
Object.keys(_addMonths).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _addMonths[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _addMonths[key];
    }
  });
});
var _addQuarters = require("./addQuarters.js");
Object.keys(_addQuarters).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _addQuarters[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _addQuarters[key];
    }
  });
});
var _addSeconds = require("./addSeconds.js");
Object.keys(_addSeconds).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _addSeconds[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _addSeconds[key];
    }
  });
});
var _addWeeks = require("./addWeeks.js");
Object.keys(_addWeeks).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _addWeeks[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _addWeeks[key];
    }
  });
});
var _addYears = require("./addYears.js");
Object.keys(_addYears).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _addYears[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _addYears[key];
    }
  });
});
var _areIntervalsOverlapping = require("./areIntervalsOverlapping.js");
Object.keys(_areIntervalsOverlapping).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _areIntervalsOverlapping[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _areIntervalsOverlapping[key];
    }
  });
});
var _clamp = require("./clamp.js");
Object.keys(_clamp).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _clamp[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _clamp[key];
    }
  });
});
var _closestIndexTo = require("./closestIndexTo.js");
Object.keys(_closestIndexTo).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _closestIndexTo[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _closestIndexTo[key];
    }
  });
});
var _closestTo = require("./closestTo.js");
Object.keys(_closestTo).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _closestTo[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _closestTo[key];
    }
  });
});
var _compareAsc = require("./compareAsc.js");
Object.keys(_compareAsc).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _compareAsc[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _compareAsc[key];
    }
  });
});
var _compareDesc = require("./compareDesc.js");
Object.keys(_compareDesc).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _compareDesc[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _compareDesc[key];
    }
  });
});
var _constructFrom = require("./constructFrom.js");
Object.keys(_constructFrom).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _constructFrom[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _constructFrom[key];
    }
  });
});
var _constructNow = require("./constructNow.js");
Object.keys(_constructNow).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _constructNow[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _constructNow[key];
    }
  });
});
var _daysToWeeks = require("./daysToWeeks.js");
Object.keys(_daysToWeeks).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _daysToWeeks[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _daysToWeeks[key];
    }
  });
});
var _differenceInBusinessDays = require("./differenceInBusinessDays.js");
Object.keys(_differenceInBusinessDays).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _differenceInBusinessDays[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _differenceInBusinessDays[key];
    }
  });
});
var _differenceInCalendarDays = require("./differenceInCalendarDays.js");
Object.keys(_differenceInCalendarDays).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _differenceInCalendarDays[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _differenceInCalendarDays[key];
    }
  });
});
var _differenceInCalendarISOWeekYears = require("./differenceInCalendarISOWeekYears.js");
Object.keys(_differenceInCalendarISOWeekYears).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _differenceInCalendarISOWeekYears[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _differenceInCalendarISOWeekYears[key];
    }
  });
});
var _differenceInCalendarISOWeeks = require("./differenceInCalendarISOWeeks.js");
Object.keys(_differenceInCalendarISOWeeks).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _differenceInCalendarISOWeeks[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _differenceInCalendarISOWeeks[key];
    }
  });
});
var _differenceInCalendarMonths = require("./differenceInCalendarMonths.js");
Object.keys(_differenceInCalendarMonths).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _differenceInCalendarMonths[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _differenceInCalendarMonths[key];
    }
  });
});
var _differenceInCalendarQuarters = require("./differenceInCalendarQuarters.js");
Object.keys(_differenceInCalendarQuarters).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _differenceInCalendarQuarters[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _differenceInCalendarQuarters[key];
    }
  });
});
var _differenceInCalendarWeeks = require("./differenceInCalendarWeeks.js");
Object.keys(_differenceInCalendarWeeks).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _differenceInCalendarWeeks[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _differenceInCalendarWeeks[key];
    }
  });
});
var _differenceInCalendarYears = require("./differenceInCalendarYears.js");
Object.keys(_differenceInCalendarYears).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _differenceInCalendarYears[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _differenceInCalendarYears[key];
    }
  });
});
var _differenceInDays = require("./differenceInDays.js");
Object.keys(_differenceInDays).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _differenceInDays[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _differenceInDays[key];
    }
  });
});
var _differenceInHours = require("./differenceInHours.js");
Object.keys(_differenceInHours).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _differenceInHours[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _differenceInHours[key];
    }
  });
});
var _differenceInISOWeekYears = require("./differenceInISOWeekYears.js");
Object.keys(_differenceInISOWeekYears).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _differenceInISOWeekYears[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _differenceInISOWeekYears[key];
    }
  });
});
var _differenceInMilliseconds = require("./differenceInMilliseconds.js");
Object.keys(_differenceInMilliseconds).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _differenceInMilliseconds[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _differenceInMilliseconds[key];
    }
  });
});
var _differenceInMinutes = require("./differenceInMinutes.js");
Object.keys(_differenceInMinutes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _differenceInMinutes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _differenceInMinutes[key];
    }
  });
});
var _differenceInMonths = require("./differenceInMonths.js");
Object.keys(_differenceInMonths).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _differenceInMonths[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _differenceInMonths[key];
    }
  });
});
var _differenceInQuarters = require("./differenceInQuarters.js");
Object.keys(_differenceInQuarters).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _differenceInQuarters[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _differenceInQuarters[key];
    }
  });
});
var _differenceInSeconds = require("./differenceInSeconds.js");
Object.keys(_differenceInSeconds).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _differenceInSeconds[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _differenceInSeconds[key];
    }
  });
});
var _differenceInWeeks = require("./differenceInWeeks.js");
Object.keys(_differenceInWeeks).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _differenceInWeeks[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _differenceInWeeks[key];
    }
  });
});
var _differenceInYears = require("./differenceInYears.js");
Object.keys(_differenceInYears).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _differenceInYears[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _differenceInYears[key];
    }
  });
});
var _eachDayOfInterval = require("./eachDayOfInterval.js");
Object.keys(_eachDayOfInterval).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _eachDayOfInterval[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _eachDayOfInterval[key];
    }
  });
});
var _eachHourOfInterval = require("./eachHourOfInterval.js");
Object.keys(_eachHourOfInterval).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _eachHourOfInterval[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _eachHourOfInterval[key];
    }
  });
});
var _eachMinuteOfInterval = require("./eachMinuteOfInterval.js");
Object.keys(_eachMinuteOfInterval).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _eachMinuteOfInterval[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _eachMinuteOfInterval[key];
    }
  });
});
var _eachMonthOfInterval = require("./eachMonthOfInterval.js");
Object.keys(_eachMonthOfInterval).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _eachMonthOfInterval[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _eachMonthOfInterval[key];
    }
  });
});
var _eachQuarterOfInterval = require("./eachQuarterOfInterval.js");
Object.keys(_eachQuarterOfInterval).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _eachQuarterOfInterval[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _eachQuarterOfInterval[key];
    }
  });
});
var _eachWeekOfInterval = require("./eachWeekOfInterval.js");
Object.keys(_eachWeekOfInterval).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _eachWeekOfInterval[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _eachWeekOfInterval[key];
    }
  });
});
var _eachWeekendOfInterval = require("./eachWeekendOfInterval.js");
Object.keys(_eachWeekendOfInterval).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _eachWeekendOfInterval[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _eachWeekendOfInterval[key];
    }
  });
});
var _eachWeekendOfMonth = require("./eachWeekendOfMonth.js");
Object.keys(_eachWeekendOfMonth).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _eachWeekendOfMonth[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _eachWeekendOfMonth[key];
    }
  });
});
var _eachWeekendOfYear = require("./eachWeekendOfYear.js");
Object.keys(_eachWeekendOfYear).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _eachWeekendOfYear[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _eachWeekendOfYear[key];
    }
  });
});
var _eachYearOfInterval = require("./eachYearOfInterval.js");
Object.keys(_eachYearOfInterval).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _eachYearOfInterval[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _eachYearOfInterval[key];
    }
  });
});
var _endOfDay = require("./endOfDay.js");
Object.keys(_endOfDay).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _endOfDay[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _endOfDay[key];
    }
  });
});
var _endOfDecade = require("./endOfDecade.js");
Object.keys(_endOfDecade).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _endOfDecade[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _endOfDecade[key];
    }
  });
});
var _endOfHour = require("./endOfHour.js");
Object.keys(_endOfHour).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _endOfHour[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _endOfHour[key];
    }
  });
});
var _endOfISOWeek = require("./endOfISOWeek.js");
Object.keys(_endOfISOWeek).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _endOfISOWeek[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _endOfISOWeek[key];
    }
  });
});
var _endOfISOWeekYear = require("./endOfISOWeekYear.js");
Object.keys(_endOfISOWeekYear).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _endOfISOWeekYear[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _endOfISOWeekYear[key];
    }
  });
});
var _endOfMinute = require("./endOfMinute.js");
Object.keys(_endOfMinute).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _endOfMinute[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _endOfMinute[key];
    }
  });
});
var _endOfMonth = require("./endOfMonth.js");
Object.keys(_endOfMonth).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _endOfMonth[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _endOfMonth[key];
    }
  });
});
var _endOfQuarter = require("./endOfQuarter.js");
Object.keys(_endOfQuarter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _endOfQuarter[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _endOfQuarter[key];
    }
  });
});
var _endOfSecond = require("./endOfSecond.js");
Object.keys(_endOfSecond).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _endOfSecond[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _endOfSecond[key];
    }
  });
});
var _endOfToday = require("./endOfToday.js");
Object.keys(_endOfToday).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _endOfToday[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _endOfToday[key];
    }
  });
});
var _endOfTomorrow = require("./endOfTomorrow.js");
Object.keys(_endOfTomorrow).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _endOfTomorrow[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _endOfTomorrow[key];
    }
  });
});
var _endOfWeek = require("./endOfWeek.js");
Object.keys(_endOfWeek).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _endOfWeek[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _endOfWeek[key];
    }
  });
});
var _endOfYear = require("./endOfYear.js");
Object.keys(_endOfYear).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _endOfYear[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _endOfYear[key];
    }
  });
});
var _endOfYesterday = require("./endOfYesterday.js");
Object.keys(_endOfYesterday).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _endOfYesterday[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _endOfYesterday[key];
    }
  });
});
var _format = require("./format.js");
Object.keys(_format).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _format[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _format[key];
    }
  });
});
var _formatDistance = require("./formatDistance.js");
Object.keys(_formatDistance).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _formatDistance[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _formatDistance[key];
    }
  });
});
var _formatDistanceStrict = require("./formatDistanceStrict.js");
Object.keys(_formatDistanceStrict).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _formatDistanceStrict[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _formatDistanceStrict[key];
    }
  });
});
var _formatDistanceToNow = require("./formatDistanceToNow.js");
Object.keys(_formatDistanceToNow).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _formatDistanceToNow[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _formatDistanceToNow[key];
    }
  });
});
var _formatDistanceToNowStrict = require("./formatDistanceToNowStrict.js");
Object.keys(_formatDistanceToNowStrict).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _formatDistanceToNowStrict[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _formatDistanceToNowStrict[key];
    }
  });
});
var _formatDuration = require("./formatDuration.js");
Object.keys(_formatDuration).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _formatDuration[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _formatDuration[key];
    }
  });
});
var _formatISO = require("./formatISO.js");
Object.keys(_formatISO).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _formatISO[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _formatISO[key];
    }
  });
});
var _formatISO2 = require("./formatISO9075.js");
Object.keys(_formatISO2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _formatISO2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _formatISO2[key];
    }
  });
});
var _formatISODuration = require("./formatISODuration.js");
Object.keys(_formatISODuration).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _formatISODuration[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _formatISODuration[key];
    }
  });
});
var _formatRFC = require("./formatRFC3339.js");
Object.keys(_formatRFC).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _formatRFC[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _formatRFC[key];
    }
  });
});
var _formatRFC2 = require("./formatRFC7231.js");
Object.keys(_formatRFC2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _formatRFC2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _formatRFC2[key];
    }
  });
});
var _formatRelative = require("./formatRelative.js");
Object.keys(_formatRelative).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _formatRelative[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _formatRelative[key];
    }
  });
});
var _fromUnixTime = require("./fromUnixTime.js");
Object.keys(_fromUnixTime).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _fromUnixTime[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _fromUnixTime[key];
    }
  });
});
var _getDate = require("./getDate.js");
Object.keys(_getDate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getDate[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getDate[key];
    }
  });
});
var _getDay = require("./getDay.js");
Object.keys(_getDay).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getDay[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getDay[key];
    }
  });
});
var _getDayOfYear = require("./getDayOfYear.js");
Object.keys(_getDayOfYear).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getDayOfYear[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getDayOfYear[key];
    }
  });
});
var _getDaysInMonth = require("./getDaysInMonth.js");
Object.keys(_getDaysInMonth).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getDaysInMonth[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getDaysInMonth[key];
    }
  });
});
var _getDaysInYear = require("./getDaysInYear.js");
Object.keys(_getDaysInYear).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getDaysInYear[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getDaysInYear[key];
    }
  });
});
var _getDecade = require("./getDecade.js");
Object.keys(_getDecade).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getDecade[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getDecade[key];
    }
  });
});
var _getDefaultOptions = require("./getDefaultOptions.js");
Object.keys(_getDefaultOptions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getDefaultOptions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getDefaultOptions[key];
    }
  });
});
var _getHours = require("./getHours.js");
Object.keys(_getHours).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getHours[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getHours[key];
    }
  });
});
var _getISODay = require("./getISODay.js");
Object.keys(_getISODay).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getISODay[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getISODay[key];
    }
  });
});
var _getISOWeek = require("./getISOWeek.js");
Object.keys(_getISOWeek).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getISOWeek[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getISOWeek[key];
    }
  });
});
var _getISOWeekYear = require("./getISOWeekYear.js");
Object.keys(_getISOWeekYear).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getISOWeekYear[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getISOWeekYear[key];
    }
  });
});
var _getISOWeeksInYear = require("./getISOWeeksInYear.js");
Object.keys(_getISOWeeksInYear).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getISOWeeksInYear[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getISOWeeksInYear[key];
    }
  });
});
var _getMilliseconds = require("./getMilliseconds.js");
Object.keys(_getMilliseconds).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getMilliseconds[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getMilliseconds[key];
    }
  });
});
var _getMinutes = require("./getMinutes.js");
Object.keys(_getMinutes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getMinutes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getMinutes[key];
    }
  });
});
var _getMonth = require("./getMonth.js");
Object.keys(_getMonth).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getMonth[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getMonth[key];
    }
  });
});
var _getOverlappingDaysInIntervals = require("./getOverlappingDaysInIntervals.js");
Object.keys(_getOverlappingDaysInIntervals).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getOverlappingDaysInIntervals[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getOverlappingDaysInIntervals[key];
    }
  });
});
var _getQuarter = require("./getQuarter.js");
Object.keys(_getQuarter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getQuarter[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getQuarter[key];
    }
  });
});
var _getSeconds = require("./getSeconds.js");
Object.keys(_getSeconds).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getSeconds[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getSeconds[key];
    }
  });
});
var _getTime = require("./getTime.js");
Object.keys(_getTime).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getTime[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getTime[key];
    }
  });
});
var _getUnixTime = require("./getUnixTime.js");
Object.keys(_getUnixTime).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getUnixTime[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getUnixTime[key];
    }
  });
});
var _getWeek = require("./getWeek.js");
Object.keys(_getWeek).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getWeek[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getWeek[key];
    }
  });
});
var _getWeekOfMonth = require("./getWeekOfMonth.js");
Object.keys(_getWeekOfMonth).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getWeekOfMonth[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getWeekOfMonth[key];
    }
  });
});
var _getWeekYear = require("./getWeekYear.js");
Object.keys(_getWeekYear).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getWeekYear[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getWeekYear[key];
    }
  });
});
var _getWeeksInMonth = require("./getWeeksInMonth.js");
Object.keys(_getWeeksInMonth).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getWeeksInMonth[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getWeeksInMonth[key];
    }
  });
});
var _getYear = require("./getYear.js");
Object.keys(_getYear).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getYear[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getYear[key];
    }
  });
});
var _hoursToMilliseconds = require("./hoursToMilliseconds.js");
Object.keys(_hoursToMilliseconds).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _hoursToMilliseconds[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hoursToMilliseconds[key];
    }
  });
});
var _hoursToMinutes = require("./hoursToMinutes.js");
Object.keys(_hoursToMinutes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _hoursToMinutes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hoursToMinutes[key];
    }
  });
});
var _hoursToSeconds = require("./hoursToSeconds.js");
Object.keys(_hoursToSeconds).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _hoursToSeconds[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hoursToSeconds[key];
    }
  });
});
var _interval = require("./interval.js");
Object.keys(_interval).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _interval[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _interval[key];
    }
  });
});
var _intervalToDuration = require("./intervalToDuration.js");
Object.keys(_intervalToDuration).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _intervalToDuration[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _intervalToDuration[key];
    }
  });
});
var _intlFormat = require("./intlFormat.js");
Object.keys(_intlFormat).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _intlFormat[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _intlFormat[key];
    }
  });
});
var _intlFormatDistance = require("./intlFormatDistance.js");
Object.keys(_intlFormatDistance).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _intlFormatDistance[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _intlFormatDistance[key];
    }
  });
});
var _isAfter = require("./isAfter.js");
Object.keys(_isAfter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isAfter[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isAfter[key];
    }
  });
});
var _isBefore = require("./isBefore.js");
Object.keys(_isBefore).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isBefore[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isBefore[key];
    }
  });
});
var _isDate = require("./isDate.js");
Object.keys(_isDate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isDate[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isDate[key];
    }
  });
});
var _isEqual = require("./isEqual.js");
Object.keys(_isEqual).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isEqual[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isEqual[key];
    }
  });
});
var _isExists = require("./isExists.js");
Object.keys(_isExists).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isExists[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isExists[key];
    }
  });
});
var _isFirstDayOfMonth = require("./isFirstDayOfMonth.js");
Object.keys(_isFirstDayOfMonth).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isFirstDayOfMonth[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isFirstDayOfMonth[key];
    }
  });
});
var _isFriday = require("./isFriday.js");
Object.keys(_isFriday).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isFriday[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isFriday[key];
    }
  });
});
var _isFuture = require("./isFuture.js");
Object.keys(_isFuture).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isFuture[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isFuture[key];
    }
  });
});
var _isLastDayOfMonth = require("./isLastDayOfMonth.js");
Object.keys(_isLastDayOfMonth).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isLastDayOfMonth[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isLastDayOfMonth[key];
    }
  });
});
var _isLeapYear = require("./isLeapYear.js");
Object.keys(_isLeapYear).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isLeapYear[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isLeapYear[key];
    }
  });
});
var _isMatch = require("./isMatch.js");
Object.keys(_isMatch).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isMatch[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isMatch[key];
    }
  });
});
var _isMonday = require("./isMonday.js");
Object.keys(_isMonday).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isMonday[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isMonday[key];
    }
  });
});
var _isPast = require("./isPast.js");
Object.keys(_isPast).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isPast[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isPast[key];
    }
  });
});
var _isSameDay = require("./isSameDay.js");
Object.keys(_isSameDay).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isSameDay[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isSameDay[key];
    }
  });
});
var _isSameHour = require("./isSameHour.js");
Object.keys(_isSameHour).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isSameHour[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isSameHour[key];
    }
  });
});
var _isSameISOWeek = require("./isSameISOWeek.js");
Object.keys(_isSameISOWeek).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isSameISOWeek[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isSameISOWeek[key];
    }
  });
});
var _isSameISOWeekYear = require("./isSameISOWeekYear.js");
Object.keys(_isSameISOWeekYear).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isSameISOWeekYear[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isSameISOWeekYear[key];
    }
  });
});
var _isSameMinute = require("./isSameMinute.js");
Object.keys(_isSameMinute).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isSameMinute[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isSameMinute[key];
    }
  });
});
var _isSameMonth = require("./isSameMonth.js");
Object.keys(_isSameMonth).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isSameMonth[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isSameMonth[key];
    }
  });
});
var _isSameQuarter = require("./isSameQuarter.js");
Object.keys(_isSameQuarter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isSameQuarter[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isSameQuarter[key];
    }
  });
});
var _isSameSecond = require("./isSameSecond.js");
Object.keys(_isSameSecond).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isSameSecond[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isSameSecond[key];
    }
  });
});
var _isSameWeek = require("./isSameWeek.js");
Object.keys(_isSameWeek).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isSameWeek[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isSameWeek[key];
    }
  });
});
var _isSameYear = require("./isSameYear.js");
Object.keys(_isSameYear).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isSameYear[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isSameYear[key];
    }
  });
});
var _isSaturday = require("./isSaturday.js");
Object.keys(_isSaturday).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isSaturday[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isSaturday[key];
    }
  });
});
var _isSunday = require("./isSunday.js");
Object.keys(_isSunday).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isSunday[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isSunday[key];
    }
  });
});
var _isThisHour = require("./isThisHour.js");
Object.keys(_isThisHour).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isThisHour[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isThisHour[key];
    }
  });
});
var _isThisISOWeek = require("./isThisISOWeek.js");
Object.keys(_isThisISOWeek).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isThisISOWeek[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isThisISOWeek[key];
    }
  });
});
var _isThisMinute = require("./isThisMinute.js");
Object.keys(_isThisMinute).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isThisMinute[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isThisMinute[key];
    }
  });
});
var _isThisMonth = require("./isThisMonth.js");
Object.keys(_isThisMonth).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isThisMonth[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isThisMonth[key];
    }
  });
});
var _isThisQuarter = require("./isThisQuarter.js");
Object.keys(_isThisQuarter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isThisQuarter[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isThisQuarter[key];
    }
  });
});
var _isThisSecond = require("./isThisSecond.js");
Object.keys(_isThisSecond).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isThisSecond[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isThisSecond[key];
    }
  });
});
var _isThisWeek = require("./isThisWeek.js");
Object.keys(_isThisWeek).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isThisWeek[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isThisWeek[key];
    }
  });
});
var _isThisYear = require("./isThisYear.js");
Object.keys(_isThisYear).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isThisYear[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isThisYear[key];
    }
  });
});
var _isThursday = require("./isThursday.js");
Object.keys(_isThursday).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isThursday[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isThursday[key];
    }
  });
});
var _isToday = require("./isToday.js");
Object.keys(_isToday).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isToday[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isToday[key];
    }
  });
});
var _isTomorrow = require("./isTomorrow.js");
Object.keys(_isTomorrow).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isTomorrow[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isTomorrow[key];
    }
  });
});
var _isTuesday = require("./isTuesday.js");
Object.keys(_isTuesday).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isTuesday[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isTuesday[key];
    }
  });
});
var _isValid = require("./isValid.js");
Object.keys(_isValid).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isValid[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isValid[key];
    }
  });
});
var _isWednesday = require("./isWednesday.js");
Object.keys(_isWednesday).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isWednesday[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isWednesday[key];
    }
  });
});
var _isWeekend = require("./isWeekend.js");
Object.keys(_isWeekend).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isWeekend[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isWeekend[key];
    }
  });
});
var _isWithinInterval = require("./isWithinInterval.js");
Object.keys(_isWithinInterval).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isWithinInterval[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isWithinInterval[key];
    }
  });
});
var _isYesterday = require("./isYesterday.js");
Object.keys(_isYesterday).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isYesterday[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isYesterday[key];
    }
  });
});
var _lastDayOfDecade = require("./lastDayOfDecade.js");
Object.keys(_lastDayOfDecade).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _lastDayOfDecade[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _lastDayOfDecade[key];
    }
  });
});
var _lastDayOfISOWeek = require("./lastDayOfISOWeek.js");
Object.keys(_lastDayOfISOWeek).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _lastDayOfISOWeek[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _lastDayOfISOWeek[key];
    }
  });
});
var _lastDayOfISOWeekYear = require("./lastDayOfISOWeekYear.js");
Object.keys(_lastDayOfISOWeekYear).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _lastDayOfISOWeekYear[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _lastDayOfISOWeekYear[key];
    }
  });
});
var _lastDayOfMonth = require("./lastDayOfMonth.js");
Object.keys(_lastDayOfMonth).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _lastDayOfMonth[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _lastDayOfMonth[key];
    }
  });
});
var _lastDayOfQuarter = require("./lastDayOfQuarter.js");
Object.keys(_lastDayOfQuarter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _lastDayOfQuarter[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _lastDayOfQuarter[key];
    }
  });
});
var _lastDayOfWeek = require("./lastDayOfWeek.js");
Object.keys(_lastDayOfWeek).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _lastDayOfWeek[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _lastDayOfWeek[key];
    }
  });
});
var _lastDayOfYear = require("./lastDayOfYear.js");
Object.keys(_lastDayOfYear).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _lastDayOfYear[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _lastDayOfYear[key];
    }
  });
});
var _lightFormat = require("./lightFormat.js");
Object.keys(_lightFormat).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _lightFormat[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _lightFormat[key];
    }
  });
});
var _max = require("./max.js");
Object.keys(_max).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _max[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _max[key];
    }
  });
});
var _milliseconds = require("./milliseconds.js");
Object.keys(_milliseconds).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _milliseconds[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _milliseconds[key];
    }
  });
});
var _millisecondsToHours = require("./millisecondsToHours.js");
Object.keys(_millisecondsToHours).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _millisecondsToHours[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _millisecondsToHours[key];
    }
  });
});
var _millisecondsToMinutes = require("./millisecondsToMinutes.js");
Object.keys(_millisecondsToMinutes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _millisecondsToMinutes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _millisecondsToMinutes[key];
    }
  });
});
var _millisecondsToSeconds = require("./millisecondsToSeconds.js");
Object.keys(_millisecondsToSeconds).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _millisecondsToSeconds[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _millisecondsToSeconds[key];
    }
  });
});
var _min = require("./min.js");
Object.keys(_min).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _min[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _min[key];
    }
  });
});
var _minutesToHours = require("./minutesToHours.js");
Object.keys(_minutesToHours).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _minutesToHours[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _minutesToHours[key];
    }
  });
});
var _minutesToMilliseconds = require("./minutesToMilliseconds.js");
Object.keys(_minutesToMilliseconds).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _minutesToMilliseconds[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _minutesToMilliseconds[key];
    }
  });
});
var _minutesToSeconds = require("./minutesToSeconds.js");
Object.keys(_minutesToSeconds).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _minutesToSeconds[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _minutesToSeconds[key];
    }
  });
});
var _monthsToQuarters = require("./monthsToQuarters.js");
Object.keys(_monthsToQuarters).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _monthsToQuarters[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _monthsToQuarters[key];
    }
  });
});
var _monthsToYears = require("./monthsToYears.js");
Object.keys(_monthsToYears).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _monthsToYears[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _monthsToYears[key];
    }
  });
});
var _nextDay = require("./nextDay.js");
Object.keys(_nextDay).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _nextDay[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _nextDay[key];
    }
  });
});
var _nextFriday = require("./nextFriday.js");
Object.keys(_nextFriday).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _nextFriday[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _nextFriday[key];
    }
  });
});
var _nextMonday = require("./nextMonday.js");
Object.keys(_nextMonday).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _nextMonday[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _nextMonday[key];
    }
  });
});
var _nextSaturday = require("./nextSaturday.js");
Object.keys(_nextSaturday).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _nextSaturday[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _nextSaturday[key];
    }
  });
});
var _nextSunday = require("./nextSunday.js");
Object.keys(_nextSunday).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _nextSunday[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _nextSunday[key];
    }
  });
});
var _nextThursday = require("./nextThursday.js");
Object.keys(_nextThursday).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _nextThursday[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _nextThursday[key];
    }
  });
});
var _nextTuesday = require("./nextTuesday.js");
Object.keys(_nextTuesday).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _nextTuesday[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _nextTuesday[key];
    }
  });
});
var _nextWednesday = require("./nextWednesday.js");
Object.keys(_nextWednesday).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _nextWednesday[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _nextWednesday[key];
    }
  });
});
var _parse = require("./parse.js");
Object.keys(_parse).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _parse[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _parse[key];
    }
  });
});
var _parseISO = require("./parseISO.js");
Object.keys(_parseISO).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _parseISO[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _parseISO[key];
    }
  });
});
var _parseJSON = require("./parseJSON.js");
Object.keys(_parseJSON).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _parseJSON[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _parseJSON[key];
    }
  });
});
var _previousDay = require("./previousDay.js");
Object.keys(_previousDay).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _previousDay[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _previousDay[key];
    }
  });
});
var _previousFriday = require("./previousFriday.js");
Object.keys(_previousFriday).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _previousFriday[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _previousFriday[key];
    }
  });
});
var _previousMonday = require("./previousMonday.js");
Object.keys(_previousMonday).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _previousMonday[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _previousMonday[key];
    }
  });
});
var _previousSaturday = require("./previousSaturday.js");
Object.keys(_previousSaturday).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _previousSaturday[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _previousSaturday[key];
    }
  });
});
var _previousSunday = require("./previousSunday.js");
Object.keys(_previousSunday).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _previousSunday[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _previousSunday[key];
    }
  });
});
var _previousThursday = require("./previousThursday.js");
Object.keys(_previousThursday).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _previousThursday[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _previousThursday[key];
    }
  });
});
var _previousTuesday = require("./previousTuesday.js");
Object.keys(_previousTuesday).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _previousTuesday[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _previousTuesday[key];
    }
  });
});
var _previousWednesday = require("./previousWednesday.js");
Object.keys(_previousWednesday).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _previousWednesday[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _previousWednesday[key];
    }
  });
});
var _quartersToMonths = require("./quartersToMonths.js");
Object.keys(_quartersToMonths).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _quartersToMonths[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _quartersToMonths[key];
    }
  });
});
var _quartersToYears = require("./quartersToYears.js");
Object.keys(_quartersToYears).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _quartersToYears[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _quartersToYears[key];
    }
  });
});
var _roundToNearestHours = require("./roundToNearestHours.js");
Object.keys(_roundToNearestHours).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _roundToNearestHours[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _roundToNearestHours[key];
    }
  });
});
var _roundToNearestMinutes = require("./roundToNearestMinutes.js");
Object.keys(_roundToNearestMinutes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _roundToNearestMinutes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _roundToNearestMinutes[key];
    }
  });
});
var _secondsToHours = require("./secondsToHours.js");
Object.keys(_secondsToHours).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _secondsToHours[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _secondsToHours[key];
    }
  });
});
var _secondsToMilliseconds = require("./secondsToMilliseconds.js");
Object.keys(_secondsToMilliseconds).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _secondsToMilliseconds[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _secondsToMilliseconds[key];
    }
  });
});
var _secondsToMinutes = require("./secondsToMinutes.js");
Object.keys(_secondsToMinutes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _secondsToMinutes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _secondsToMinutes[key];
    }
  });
});
var _set = require("./set.js");
Object.keys(_set).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _set[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _set[key];
    }
  });
});
var _setDate = require("./setDate.js");
Object.keys(_setDate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _setDate[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _setDate[key];
    }
  });
});
var _setDay = require("./setDay.js");
Object.keys(_setDay).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _setDay[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _setDay[key];
    }
  });
});
var _setDayOfYear = require("./setDayOfYear.js");
Object.keys(_setDayOfYear).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _setDayOfYear[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _setDayOfYear[key];
    }
  });
});
var _setDefaultOptions = require("./setDefaultOptions.js");
Object.keys(_setDefaultOptions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _setDefaultOptions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _setDefaultOptions[key];
    }
  });
});
var _setHours = require("./setHours.js");
Object.keys(_setHours).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _setHours[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _setHours[key];
    }
  });
});
var _setISODay = require("./setISODay.js");
Object.keys(_setISODay).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _setISODay[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _setISODay[key];
    }
  });
});
var _setISOWeek = require("./setISOWeek.js");
Object.keys(_setISOWeek).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _setISOWeek[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _setISOWeek[key];
    }
  });
});
var _setISOWeekYear = require("./setISOWeekYear.js");
Object.keys(_setISOWeekYear).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _setISOWeekYear[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _setISOWeekYear[key];
    }
  });
});
var _setMilliseconds = require("./setMilliseconds.js");
Object.keys(_setMilliseconds).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _setMilliseconds[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _setMilliseconds[key];
    }
  });
});
var _setMinutes = require("./setMinutes.js");
Object.keys(_setMinutes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _setMinutes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _setMinutes[key];
    }
  });
});
var _setMonth = require("./setMonth.js");
Object.keys(_setMonth).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _setMonth[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _setMonth[key];
    }
  });
});
var _setQuarter = require("./setQuarter.js");
Object.keys(_setQuarter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _setQuarter[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _setQuarter[key];
    }
  });
});
var _setSeconds = require("./setSeconds.js");
Object.keys(_setSeconds).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _setSeconds[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _setSeconds[key];
    }
  });
});
var _setWeek = require("./setWeek.js");
Object.keys(_setWeek).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _setWeek[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _setWeek[key];
    }
  });
});
var _setWeekYear = require("./setWeekYear.js");
Object.keys(_setWeekYear).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _setWeekYear[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _setWeekYear[key];
    }
  });
});
var _setYear = require("./setYear.js");
Object.keys(_setYear).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _setYear[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _setYear[key];
    }
  });
});
var _startOfDay = require("./startOfDay.js");
Object.keys(_startOfDay).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _startOfDay[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _startOfDay[key];
    }
  });
});
var _startOfDecade = require("./startOfDecade.js");
Object.keys(_startOfDecade).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _startOfDecade[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _startOfDecade[key];
    }
  });
});
var _startOfHour = require("./startOfHour.js");
Object.keys(_startOfHour).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _startOfHour[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _startOfHour[key];
    }
  });
});
var _startOfISOWeek = require("./startOfISOWeek.js");
Object.keys(_startOfISOWeek).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _startOfISOWeek[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _startOfISOWeek[key];
    }
  });
});
var _startOfISOWeekYear = require("./startOfISOWeekYear.js");
Object.keys(_startOfISOWeekYear).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _startOfISOWeekYear[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _startOfISOWeekYear[key];
    }
  });
});
var _startOfMinute = require("./startOfMinute.js");
Object.keys(_startOfMinute).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _startOfMinute[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _startOfMinute[key];
    }
  });
});
var _startOfMonth = require("./startOfMonth.js");
Object.keys(_startOfMonth).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _startOfMonth[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _startOfMonth[key];
    }
  });
});
var _startOfQuarter = require("./startOfQuarter.js");
Object.keys(_startOfQuarter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _startOfQuarter[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _startOfQuarter[key];
    }
  });
});
var _startOfSecond = require("./startOfSecond.js");
Object.keys(_startOfSecond).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _startOfSecond[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _startOfSecond[key];
    }
  });
});
var _startOfToday = require("./startOfToday.js");
Object.keys(_startOfToday).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _startOfToday[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _startOfToday[key];
    }
  });
});
var _startOfTomorrow = require("./startOfTomorrow.js");
Object.keys(_startOfTomorrow).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _startOfTomorrow[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _startOfTomorrow[key];
    }
  });
});
var _startOfWeek = require("./startOfWeek.js");
Object.keys(_startOfWeek).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _startOfWeek[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _startOfWeek[key];
    }
  });
});
var _startOfWeekYear = require("./startOfWeekYear.js");
Object.keys(_startOfWeekYear).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _startOfWeekYear[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _startOfWeekYear[key];
    }
  });
});
var _startOfYear = require("./startOfYear.js");
Object.keys(_startOfYear).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _startOfYear[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _startOfYear[key];
    }
  });
});
var _startOfYesterday = require("./startOfYesterday.js");
Object.keys(_startOfYesterday).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _startOfYesterday[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _startOfYesterday[key];
    }
  });
});
var _sub = require("./sub.js");
Object.keys(_sub).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _sub[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _sub[key];
    }
  });
});
var _subBusinessDays = require("./subBusinessDays.js");
Object.keys(_subBusinessDays).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _subBusinessDays[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _subBusinessDays[key];
    }
  });
});
var _subDays = require("./subDays.js");
Object.keys(_subDays).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _subDays[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _subDays[key];
    }
  });
});
var _subHours = require("./subHours.js");
Object.keys(_subHours).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _subHours[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _subHours[key];
    }
  });
});
var _subISOWeekYears = require("./subISOWeekYears.js");
Object.keys(_subISOWeekYears).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _subISOWeekYears[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _subISOWeekYears[key];
    }
  });
});
var _subMilliseconds = require("./subMilliseconds.js");
Object.keys(_subMilliseconds).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _subMilliseconds[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _subMilliseconds[key];
    }
  });
});
var _subMinutes = require("./subMinutes.js");
Object.keys(_subMinutes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _subMinutes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _subMinutes[key];
    }
  });
});
var _subMonths = require("./subMonths.js");
Object.keys(_subMonths).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _subMonths[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _subMonths[key];
    }
  });
});
var _subQuarters = require("./subQuarters.js");
Object.keys(_subQuarters).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _subQuarters[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _subQuarters[key];
    }
  });
});
var _subSeconds = require("./subSeconds.js");
Object.keys(_subSeconds).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _subSeconds[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _subSeconds[key];
    }
  });
});
var _subWeeks = require("./subWeeks.js");
Object.keys(_subWeeks).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _subWeeks[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _subWeeks[key];
    }
  });
});
var _subYears = require("./subYears.js");
Object.keys(_subYears).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _subYears[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _subYears[key];
    }
  });
});
var _toDate = require("./toDate.js");
Object.keys(_toDate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _toDate[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _toDate[key];
    }
  });
});
var _transpose = require("./transpose.js");
Object.keys(_transpose).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _transpose[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _transpose[key];
    }
  });
});
var _weeksToDays = require("./weeksToDays.js");
Object.keys(_weeksToDays).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _weeksToDays[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _weeksToDays[key];
    }
  });
});
var _yearsToDays = require("./yearsToDays.js");
Object.keys(_yearsToDays).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _yearsToDays[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _yearsToDays[key];
    }
  });
});
var _yearsToMonths = require("./yearsToMonths.js");
Object.keys(_yearsToMonths).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _yearsToMonths[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _yearsToMonths[key];
    }
  });
});
var _yearsToQuarters = require("./yearsToQuarters.js");
Object.keys(_yearsToQuarters).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _yearsToQuarters[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _yearsToQuarters[key];
    }
  });
});
},{"./add.js":"node_modules/date-fns/add.js","./addBusinessDays.js":"node_modules/date-fns/addBusinessDays.js","./addDays.js":"node_modules/date-fns/addDays.js","./addHours.js":"node_modules/date-fns/addHours.js","./addISOWeekYears.js":"node_modules/date-fns/addISOWeekYears.js","./addMilliseconds.js":"node_modules/date-fns/addMilliseconds.js","./addMinutes.js":"node_modules/date-fns/addMinutes.js","./addMonths.js":"node_modules/date-fns/addMonths.js","./addQuarters.js":"node_modules/date-fns/addQuarters.js","./addSeconds.js":"node_modules/date-fns/addSeconds.js","./addWeeks.js":"node_modules/date-fns/addWeeks.js","./addYears.js":"node_modules/date-fns/addYears.js","./areIntervalsOverlapping.js":"node_modules/date-fns/areIntervalsOverlapping.js","./clamp.js":"node_modules/date-fns/clamp.js","./closestIndexTo.js":"node_modules/date-fns/closestIndexTo.js","./closestTo.js":"node_modules/date-fns/closestTo.js","./compareAsc.js":"node_modules/date-fns/compareAsc.js","./compareDesc.js":"node_modules/date-fns/compareDesc.js","./constructFrom.js":"node_modules/date-fns/constructFrom.js","./constructNow.js":"node_modules/date-fns/constructNow.js","./daysToWeeks.js":"node_modules/date-fns/daysToWeeks.js","./differenceInBusinessDays.js":"node_modules/date-fns/differenceInBusinessDays.js","./differenceInCalendarDays.js":"node_modules/date-fns/differenceInCalendarDays.js","./differenceInCalendarISOWeekYears.js":"node_modules/date-fns/differenceInCalendarISOWeekYears.js","./differenceInCalendarISOWeeks.js":"node_modules/date-fns/differenceInCalendarISOWeeks.js","./differenceInCalendarMonths.js":"node_modules/date-fns/differenceInCalendarMonths.js","./differenceInCalendarQuarters.js":"node_modules/date-fns/differenceInCalendarQuarters.js","./differenceInCalendarWeeks.js":"node_modules/date-fns/differenceInCalendarWeeks.js","./differenceInCalendarYears.js":"node_modules/date-fns/differenceInCalendarYears.js","./differenceInDays.js":"node_modules/date-fns/differenceInDays.js","./differenceInHours.js":"node_modules/date-fns/differenceInHours.js","./differenceInISOWeekYears.js":"node_modules/date-fns/differenceInISOWeekYears.js","./differenceInMilliseconds.js":"node_modules/date-fns/differenceInMilliseconds.js","./differenceInMinutes.js":"node_modules/date-fns/differenceInMinutes.js","./differenceInMonths.js":"node_modules/date-fns/differenceInMonths.js","./differenceInQuarters.js":"node_modules/date-fns/differenceInQuarters.js","./differenceInSeconds.js":"node_modules/date-fns/differenceInSeconds.js","./differenceInWeeks.js":"node_modules/date-fns/differenceInWeeks.js","./differenceInYears.js":"node_modules/date-fns/differenceInYears.js","./eachDayOfInterval.js":"node_modules/date-fns/eachDayOfInterval.js","./eachHourOfInterval.js":"node_modules/date-fns/eachHourOfInterval.js","./eachMinuteOfInterval.js":"node_modules/date-fns/eachMinuteOfInterval.js","./eachMonthOfInterval.js":"node_modules/date-fns/eachMonthOfInterval.js","./eachQuarterOfInterval.js":"node_modules/date-fns/eachQuarterOfInterval.js","./eachWeekOfInterval.js":"node_modules/date-fns/eachWeekOfInterval.js","./eachWeekendOfInterval.js":"node_modules/date-fns/eachWeekendOfInterval.js","./eachWeekendOfMonth.js":"node_modules/date-fns/eachWeekendOfMonth.js","./eachWeekendOfYear.js":"node_modules/date-fns/eachWeekendOfYear.js","./eachYearOfInterval.js":"node_modules/date-fns/eachYearOfInterval.js","./endOfDay.js":"node_modules/date-fns/endOfDay.js","./endOfDecade.js":"node_modules/date-fns/endOfDecade.js","./endOfHour.js":"node_modules/date-fns/endOfHour.js","./endOfISOWeek.js":"node_modules/date-fns/endOfISOWeek.js","./endOfISOWeekYear.js":"node_modules/date-fns/endOfISOWeekYear.js","./endOfMinute.js":"node_modules/date-fns/endOfMinute.js","./endOfMonth.js":"node_modules/date-fns/endOfMonth.js","./endOfQuarter.js":"node_modules/date-fns/endOfQuarter.js","./endOfSecond.js":"node_modules/date-fns/endOfSecond.js","./endOfToday.js":"node_modules/date-fns/endOfToday.js","./endOfTomorrow.js":"node_modules/date-fns/endOfTomorrow.js","./endOfWeek.js":"node_modules/date-fns/endOfWeek.js","./endOfYear.js":"node_modules/date-fns/endOfYear.js","./endOfYesterday.js":"node_modules/date-fns/endOfYesterday.js","./format.js":"node_modules/date-fns/format.js","./formatDistance.js":"node_modules/date-fns/formatDistance.js","./formatDistanceStrict.js":"node_modules/date-fns/formatDistanceStrict.js","./formatDistanceToNow.js":"node_modules/date-fns/formatDistanceToNow.js","./formatDistanceToNowStrict.js":"node_modules/date-fns/formatDistanceToNowStrict.js","./formatDuration.js":"node_modules/date-fns/formatDuration.js","./formatISO.js":"node_modules/date-fns/formatISO.js","./formatISO9075.js":"node_modules/date-fns/formatISO9075.js","./formatISODuration.js":"node_modules/date-fns/formatISODuration.js","./formatRFC3339.js":"node_modules/date-fns/formatRFC3339.js","./formatRFC7231.js":"node_modules/date-fns/formatRFC7231.js","./formatRelative.js":"node_modules/date-fns/formatRelative.js","./fromUnixTime.js":"node_modules/date-fns/fromUnixTime.js","./getDate.js":"node_modules/date-fns/getDate.js","./getDay.js":"node_modules/date-fns/getDay.js","./getDayOfYear.js":"node_modules/date-fns/getDayOfYear.js","./getDaysInMonth.js":"node_modules/date-fns/getDaysInMonth.js","./getDaysInYear.js":"node_modules/date-fns/getDaysInYear.js","./getDecade.js":"node_modules/date-fns/getDecade.js","./getDefaultOptions.js":"node_modules/date-fns/getDefaultOptions.js","./getHours.js":"node_modules/date-fns/getHours.js","./getISODay.js":"node_modules/date-fns/getISODay.js","./getISOWeek.js":"node_modules/date-fns/getISOWeek.js","./getISOWeekYear.js":"node_modules/date-fns/getISOWeekYear.js","./getISOWeeksInYear.js":"node_modules/date-fns/getISOWeeksInYear.js","./getMilliseconds.js":"node_modules/date-fns/getMilliseconds.js","./getMinutes.js":"node_modules/date-fns/getMinutes.js","./getMonth.js":"node_modules/date-fns/getMonth.js","./getOverlappingDaysInIntervals.js":"node_modules/date-fns/getOverlappingDaysInIntervals.js","./getQuarter.js":"node_modules/date-fns/getQuarter.js","./getSeconds.js":"node_modules/date-fns/getSeconds.js","./getTime.js":"node_modules/date-fns/getTime.js","./getUnixTime.js":"node_modules/date-fns/getUnixTime.js","./getWeek.js":"node_modules/date-fns/getWeek.js","./getWeekOfMonth.js":"node_modules/date-fns/getWeekOfMonth.js","./getWeekYear.js":"node_modules/date-fns/getWeekYear.js","./getWeeksInMonth.js":"node_modules/date-fns/getWeeksInMonth.js","./getYear.js":"node_modules/date-fns/getYear.js","./hoursToMilliseconds.js":"node_modules/date-fns/hoursToMilliseconds.js","./hoursToMinutes.js":"node_modules/date-fns/hoursToMinutes.js","./hoursToSeconds.js":"node_modules/date-fns/hoursToSeconds.js","./interval.js":"node_modules/date-fns/interval.js","./intervalToDuration.js":"node_modules/date-fns/intervalToDuration.js","./intlFormat.js":"node_modules/date-fns/intlFormat.js","./intlFormatDistance.js":"node_modules/date-fns/intlFormatDistance.js","./isAfter.js":"node_modules/date-fns/isAfter.js","./isBefore.js":"node_modules/date-fns/isBefore.js","./isDate.js":"node_modules/date-fns/isDate.js","./isEqual.js":"node_modules/date-fns/isEqual.js","./isExists.js":"node_modules/date-fns/isExists.js","./isFirstDayOfMonth.js":"node_modules/date-fns/isFirstDayOfMonth.js","./isFriday.js":"node_modules/date-fns/isFriday.js","./isFuture.js":"node_modules/date-fns/isFuture.js","./isLastDayOfMonth.js":"node_modules/date-fns/isLastDayOfMonth.js","./isLeapYear.js":"node_modules/date-fns/isLeapYear.js","./isMatch.js":"node_modules/date-fns/isMatch.js","./isMonday.js":"node_modules/date-fns/isMonday.js","./isPast.js":"node_modules/date-fns/isPast.js","./isSameDay.js":"node_modules/date-fns/isSameDay.js","./isSameHour.js":"node_modules/date-fns/isSameHour.js","./isSameISOWeek.js":"node_modules/date-fns/isSameISOWeek.js","./isSameISOWeekYear.js":"node_modules/date-fns/isSameISOWeekYear.js","./isSameMinute.js":"node_modules/date-fns/isSameMinute.js","./isSameMonth.js":"node_modules/date-fns/isSameMonth.js","./isSameQuarter.js":"node_modules/date-fns/isSameQuarter.js","./isSameSecond.js":"node_modules/date-fns/isSameSecond.js","./isSameWeek.js":"node_modules/date-fns/isSameWeek.js","./isSameYear.js":"node_modules/date-fns/isSameYear.js","./isSaturday.js":"node_modules/date-fns/isSaturday.js","./isSunday.js":"node_modules/date-fns/isSunday.js","./isThisHour.js":"node_modules/date-fns/isThisHour.js","./isThisISOWeek.js":"node_modules/date-fns/isThisISOWeek.js","./isThisMinute.js":"node_modules/date-fns/isThisMinute.js","./isThisMonth.js":"node_modules/date-fns/isThisMonth.js","./isThisQuarter.js":"node_modules/date-fns/isThisQuarter.js","./isThisSecond.js":"node_modules/date-fns/isThisSecond.js","./isThisWeek.js":"node_modules/date-fns/isThisWeek.js","./isThisYear.js":"node_modules/date-fns/isThisYear.js","./isThursday.js":"node_modules/date-fns/isThursday.js","./isToday.js":"node_modules/date-fns/isToday.js","./isTomorrow.js":"node_modules/date-fns/isTomorrow.js","./isTuesday.js":"node_modules/date-fns/isTuesday.js","./isValid.js":"node_modules/date-fns/isValid.js","./isWednesday.js":"node_modules/date-fns/isWednesday.js","./isWeekend.js":"node_modules/date-fns/isWeekend.js","./isWithinInterval.js":"node_modules/date-fns/isWithinInterval.js","./isYesterday.js":"node_modules/date-fns/isYesterday.js","./lastDayOfDecade.js":"node_modules/date-fns/lastDayOfDecade.js","./lastDayOfISOWeek.js":"node_modules/date-fns/lastDayOfISOWeek.js","./lastDayOfISOWeekYear.js":"node_modules/date-fns/lastDayOfISOWeekYear.js","./lastDayOfMonth.js":"node_modules/date-fns/lastDayOfMonth.js","./lastDayOfQuarter.js":"node_modules/date-fns/lastDayOfQuarter.js","./lastDayOfWeek.js":"node_modules/date-fns/lastDayOfWeek.js","./lastDayOfYear.js":"node_modules/date-fns/lastDayOfYear.js","./lightFormat.js":"node_modules/date-fns/lightFormat.js","./max.js":"node_modules/date-fns/max.js","./milliseconds.js":"node_modules/date-fns/milliseconds.js","./millisecondsToHours.js":"node_modules/date-fns/millisecondsToHours.js","./millisecondsToMinutes.js":"node_modules/date-fns/millisecondsToMinutes.js","./millisecondsToSeconds.js":"node_modules/date-fns/millisecondsToSeconds.js","./min.js":"node_modules/date-fns/min.js","./minutesToHours.js":"node_modules/date-fns/minutesToHours.js","./minutesToMilliseconds.js":"node_modules/date-fns/minutesToMilliseconds.js","./minutesToSeconds.js":"node_modules/date-fns/minutesToSeconds.js","./monthsToQuarters.js":"node_modules/date-fns/monthsToQuarters.js","./monthsToYears.js":"node_modules/date-fns/monthsToYears.js","./nextDay.js":"node_modules/date-fns/nextDay.js","./nextFriday.js":"node_modules/date-fns/nextFriday.js","./nextMonday.js":"node_modules/date-fns/nextMonday.js","./nextSaturday.js":"node_modules/date-fns/nextSaturday.js","./nextSunday.js":"node_modules/date-fns/nextSunday.js","./nextThursday.js":"node_modules/date-fns/nextThursday.js","./nextTuesday.js":"node_modules/date-fns/nextTuesday.js","./nextWednesday.js":"node_modules/date-fns/nextWednesday.js","./parse.js":"node_modules/date-fns/parse.js","./parseISO.js":"node_modules/date-fns/parseISO.js","./parseJSON.js":"node_modules/date-fns/parseJSON.js","./previousDay.js":"node_modules/date-fns/previousDay.js","./previousFriday.js":"node_modules/date-fns/previousFriday.js","./previousMonday.js":"node_modules/date-fns/previousMonday.js","./previousSaturday.js":"node_modules/date-fns/previousSaturday.js","./previousSunday.js":"node_modules/date-fns/previousSunday.js","./previousThursday.js":"node_modules/date-fns/previousThursday.js","./previousTuesday.js":"node_modules/date-fns/previousTuesday.js","./previousWednesday.js":"node_modules/date-fns/previousWednesday.js","./quartersToMonths.js":"node_modules/date-fns/quartersToMonths.js","./quartersToYears.js":"node_modules/date-fns/quartersToYears.js","./roundToNearestHours.js":"node_modules/date-fns/roundToNearestHours.js","./roundToNearestMinutes.js":"node_modules/date-fns/roundToNearestMinutes.js","./secondsToHours.js":"node_modules/date-fns/secondsToHours.js","./secondsToMilliseconds.js":"node_modules/date-fns/secondsToMilliseconds.js","./secondsToMinutes.js":"node_modules/date-fns/secondsToMinutes.js","./set.js":"node_modules/date-fns/set.js","./setDate.js":"node_modules/date-fns/setDate.js","./setDay.js":"node_modules/date-fns/setDay.js","./setDayOfYear.js":"node_modules/date-fns/setDayOfYear.js","./setDefaultOptions.js":"node_modules/date-fns/setDefaultOptions.js","./setHours.js":"node_modules/date-fns/setHours.js","./setISODay.js":"node_modules/date-fns/setISODay.js","./setISOWeek.js":"node_modules/date-fns/setISOWeek.js","./setISOWeekYear.js":"node_modules/date-fns/setISOWeekYear.js","./setMilliseconds.js":"node_modules/date-fns/setMilliseconds.js","./setMinutes.js":"node_modules/date-fns/setMinutes.js","./setMonth.js":"node_modules/date-fns/setMonth.js","./setQuarter.js":"node_modules/date-fns/setQuarter.js","./setSeconds.js":"node_modules/date-fns/setSeconds.js","./setWeek.js":"node_modules/date-fns/setWeek.js","./setWeekYear.js":"node_modules/date-fns/setWeekYear.js","./setYear.js":"node_modules/date-fns/setYear.js","./startOfDay.js":"node_modules/date-fns/startOfDay.js","./startOfDecade.js":"node_modules/date-fns/startOfDecade.js","./startOfHour.js":"node_modules/date-fns/startOfHour.js","./startOfISOWeek.js":"node_modules/date-fns/startOfISOWeek.js","./startOfISOWeekYear.js":"node_modules/date-fns/startOfISOWeekYear.js","./startOfMinute.js":"node_modules/date-fns/startOfMinute.js","./startOfMonth.js":"node_modules/date-fns/startOfMonth.js","./startOfQuarter.js":"node_modules/date-fns/startOfQuarter.js","./startOfSecond.js":"node_modules/date-fns/startOfSecond.js","./startOfToday.js":"node_modules/date-fns/startOfToday.js","./startOfTomorrow.js":"node_modules/date-fns/startOfTomorrow.js","./startOfWeek.js":"node_modules/date-fns/startOfWeek.js","./startOfWeekYear.js":"node_modules/date-fns/startOfWeekYear.js","./startOfYear.js":"node_modules/date-fns/startOfYear.js","./startOfYesterday.js":"node_modules/date-fns/startOfYesterday.js","./sub.js":"node_modules/date-fns/sub.js","./subBusinessDays.js":"node_modules/date-fns/subBusinessDays.js","./subDays.js":"node_modules/date-fns/subDays.js","./subHours.js":"node_modules/date-fns/subHours.js","./subISOWeekYears.js":"node_modules/date-fns/subISOWeekYears.js","./subMilliseconds.js":"node_modules/date-fns/subMilliseconds.js","./subMinutes.js":"node_modules/date-fns/subMinutes.js","./subMonths.js":"node_modules/date-fns/subMonths.js","./subQuarters.js":"node_modules/date-fns/subQuarters.js","./subSeconds.js":"node_modules/date-fns/subSeconds.js","./subWeeks.js":"node_modules/date-fns/subWeeks.js","./subYears.js":"node_modules/date-fns/subYears.js","./toDate.js":"node_modules/date-fns/toDate.js","./transpose.js":"node_modules/date-fns/transpose.js","./weeksToDays.js":"node_modules/date-fns/weeksToDays.js","./yearsToDays.js":"node_modules/date-fns/yearsToDays.js","./yearsToMonths.js":"node_modules/date-fns/yearsToMonths.js","./yearsToQuarters.js":"node_modules/date-fns/yearsToQuarters.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _dateFns = require("date-fns");
var date = "1996-09-13 10:00:00";
document.body.textContent = "".concat((0, _dateFns.formatDistanceToNow)(new Date(date)), " ago");
},{"date-fns":"node_modules/date-fns/index.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "35274" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/parcel-experiment.e31bb0bc.js.map