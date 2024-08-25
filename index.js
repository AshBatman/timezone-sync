const moment = require('moment');
const momentTz = require('moment-timezone');

// Backend Functions

/**
 * Get current time in UTC.
 * @param {string} format - Date format (default: "YYYY-MM-DD HH:mm:ss").
 * @returns {string} - Formatted UTC date.
 */
function getCurrentDateTime(format = "YYYY-MM-DD HH:mm:ss") {
    return moment.utc().format(format);
}

/**
 * Format date to UTC before storing.
 * @param {string|Date} date - Date to format.
 * @param {string} format - Date format (default: "YYYY-MM-DD HH:mm:ss").
 * @returns {string} - Formatted UTC date.
 */
function formatDateToUtc(date, format = "YYYY-MM-DD HH:mm:ss") {
    return moment.utc(date).format(format);
}

// Frontend Functions

/**
 * Convert date to ISO string before sending to backend.
 * @param {string|Date} date - Date to convert.
 * @returns {string} - ISO string.
 */
function formatDateToISOString(date) {
    return moment(date).utc().toISOString();
}

/**
 * Format ISO string to local time for display.
 * @param {string} date - ISO string to convert.
 * @param {string} format - Date format (default: "YYYY-MM-DD HH:mm:ss").
 * @returns {string} - Formatted local date.
 */
function formatDateToLocalTime(date, format = "YYYY-MM-DD HH:mm:ss") {
    return moment(date).format(format);
}

/**
 * Format filter dates for backend queries.
 * @param {string} startDate - Start date (YYYY-MM-DD).
 * @param {string} endDate - End date (YYYY-MM-DD).
 * @returns {Object} - Formatted start and end dates.
 */
function formatFilterDates(startDate, endDate) {
    const startDateAndTime = startDate + " 00:00:00";
    const endDateAndTime = endDate + " 23:59:59.999";
    return {
        startDate: moment(startDateAndTime).toISOString(),
        endDate: moment(endDateAndTime).toISOString()
    };
}

// Other Common Functions

/**
 * Format date to ISO string.
 * @param {string|Date} date - Date to format.
 * @returns {string} - ISO string.
 */
function formatDateToISOString(date) {
    return moment(date).utc().toISOString();
}

/**
 * Get current date and time in ISO format.
 * @returns {string} - ISO string.
 */
function getCurrentDateTimeISOString() {
    return moment.utc().toISOString();
}

/**
 * Get current UTC timestamp.
 * @returns {number} - UTC timestamp in milliseconds.
 */
function getUTCTimeStamp() {
    return moment.utc().valueOf();
}

/**
 * Get current date and time specific to a time zone.
 * @param {string} timeZone - Time zone (e.g., "America/New_York").
 * @param {string} format - Date format (default: "YYYY-MM-DD HH:mm:ss").
 * @returns {string} - Formatted date.
 */
function getCurrentDateTimeSpecificTimeZone(timeZone, format = "YYYY-MM-DD HH:mm:ss") {
    return momentTz.tz(timeZone).format(format);
}

/**
 * Get date and time specific to a time zone.
 * @param {string|Date} date - Date to convert.
 * @param {string} timeZone - Time zone (e.g., "America/New_York").
 * @param {string} format - Date format (default: "YYYY-MM-DD HH:mm:ss").
 * @returns {string} - Formatted date.
 */
function getDateTimeSpecificTimeZone(date, timeZone, format = "YYYY-MM-DD HH:mm:ss") {
    return momentTz(date).tz(timeZone).format(format);
}

module.exports = {
    getCurrentDateTime,
    formatDateToUtc,
    formatDateToISOString,
    formatDateToLocalTime,
    formatFilterDates,
    formatDateToISOString,
    getCurrentDateTimeISOString,
    getUTCTimeStamp,
    getCurrentDateTimeSpecificTimeZone,
    getDateTimeSpecificTimeZone
};
