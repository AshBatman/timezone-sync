# Timezone Standardizer

**`timezone-sync`** is a Node.js utility package designed to simplify the process of standardizing and converting timezones across systems. It provides common functions for handling datetime conversions and ensuring consistency between UTC and local timezones.

## Features

- **Convert Datetime to UTC**: Easily convert datetime values to UTC format.
- **Format Datetime for Storage**: Standardize datetime format before storing in databases.
- **Convert Datetime to Local Time**: Display datetime values in local timezones.
- **Filter Dates for Backend Queries**: Format date filters for backend APIs.
- **Handle Timezone-Specific Operations**: Get and format dates specific to different timezones.

## Installation

You can install the package via NPM:

```bash
npm install timezone-sync
```

## Usage

The `timezone-sync` package offers several functions to handle timezone conversions and datetime formatting. Below are examples of how to use each function in your Node.js project.

### Importing Functions

First, import the functions you need from the package:

```javascript
const {
    getCurrentDateTime,
    formatDateToUtc,
    formatDateToISOString,
    formatDateToLocalTime,
    formatFilterDates,
    getCurrentDateTimeISOString,
    getUTCTimeStamp,
    getCurrentDateTimeSpecificTimeZone,
    getDateTimeSpecificTimeZone
} = require('timezone-sync');
```

### Examples
#### 1. Get the current date and time in UTC with a specified format.
getCurrentDateTime(format = "YYYY-MM-DD HH:mm:ss")

```javascript
const currentDateTime = getCurrentDateTime();
console.log(currentDateTime); // Output example: "2024-08-25 12:00:00" (UTC)
```

#### 2. Convert a given date to UTC format.
formatDateToUtc(date, format = "YYYY-MM-DD HH:mm:ss")

```javascript
const utcDate = formatDateToUtc('2024-08-25 12:00:00');
console.log(utcDate); // Output example: "2024-08-25 12:00:00"
```

#### 3. Convert a given date to ISO string format.
formatDateToISOString(date)

```javascript
const isoDate = formatDateToISOString('2024-08-25 12:00:00');
console.log(isoDate); // Output example: "2024-08-25T12:00:00.000Z"
```

#### 4. Convert an ISO string date to a local time format.
formatDateToLocalTime(date, format = "YYYY-MM-DD HH:mm:ss")

```javascript
const localDate = formatDateToLocalTime('2024-08-25T12:00:00.000Z');
console.log(localDate); // Output example: "2024-08-25 17:30:00" (local time)
```

#### 5. Format date range filters for backend queries.
formatFilterDates(startDate, endDate)

```javascript
const filters = formatFilterDates('2024-08-01', '2024-08-31');
console.log(filters); // Output example: { startDate: '2024-08-01T00:00:00.000Z', endDate: '2024-08-31T23:59:59.999Z' }
```

#### 6. Get the current date and time in ISO string format.
getCurrentDateTimeISOString()

```javascript
const currentISODateTime = getCurrentDateTimeISOString();
console.log(currentISODateTime); // Output example: "2024-08-25T12:00:00.000Z"
```

#### 7. Get the current UTC timestamp in milliseconds.
getUTCTimeStamp()

```javascript
const utcTimestamp = getUTCTimeStamp();
console.log(utcTimestamp); // Output example: 1692964800000 (example timestamp)
```

#### 8. Get the current date and time in a specific timezone.
getCurrentDateTimeSpecificTimeZone(timeZone, format = "YYYY-MM-DD HH:mm:ss")

```javascript
const dateTimeInSpecificZone = getCurrentDateTimeSpecificTimeZone('Asia/Kolkata');
console.log(dateTimeInSpecificZone); // Output example: "2024-08-25 17:30:00" (Asia/Kolkata)
```

#### 9. Get a formatted date and time specific to a particular timezone.
getDateTimeSpecificTimeZone(date, timeZone, format = "YYYY-MM-DD HH:mm:ss")

```javascript
const specificDateTime = getDateTimeSpecificTimeZone('2024-08-25 12:00:00', 'Asia/Kolkata');
console.log(specificDateTime); // Output example: "2024-08-25 17:30:00" (Asia/Kolkata)
```

