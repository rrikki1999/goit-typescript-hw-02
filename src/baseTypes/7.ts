/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Week {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}

function isWeekend(day: Week): boolean {
  return day === Week.SATURDAY || day === Week.SUNDAY;
}


const today: Week = Week.MONDAY;
console.log(isWeekend(today)); 
