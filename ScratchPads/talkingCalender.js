const talkingCalendar = function(date) {
  // Your code here
  // YYYY/MM/DD

  const year = date.substring(0,4);
  const month = date.substring(5,7);
  const day = date.substring(8,10);

  return `${getMonthName(month)} ${getDay(day)}, ${year}`;
};
const getMonthName = function(month) {
  switch (month) {
  case "01":
    return 'January';
  case "02":
    return 'Feburary';
  case "03":
    return 'March';
  case "04":
    return 'April';
  case "05":
    return 'May';
  case "06":
    return 'June';
  case "07":
    return 'July';
  case "08":
    return 'Augest';
  case "09":
    return 'September';
  case "10":
    return 'October';
  case "11":
    return 'Novemeber';
  case "12":
    return 'December';
  }
  return "Invalid Month";
};
const getDay = function(day) {
  if (day === "01" || day === "21")
    day += "st";
  else if (day === "02" || day === "22")
    day += "nd";
  else if (day === "03" || day === "23")
    day += "rd";
  else
    day += "th";
  
  if (day[0] === '0')
    day = day.replace('0', '');
  return day;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));