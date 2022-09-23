var now = new Date();
var today = {
  year: now.getFullYear(),
  month: now.getMonth() + 1,
  date: now.getDate(),
  hour: now.getHours(),
  minute: now.getMinutes(),
};
var todayString = today.year + "/" + today.month + "/" + today.date;

var matchDays = [
  {
    matchday: 1,
    date: "2022/9/7",
    url: "https://www.uefa.com/uefachampionsleague/fixtures-results/#/md/35203",
  },
  {
    matchday: 2,
    date: "2022/9/13",
    url: "https://www.uefa.com/uefachampionsleague/fixtures-results/#/md/35204",
  },
  {
    matchday: 3,
    date: "2022/10/4",
    url: "https://www.uefa.com/uefachampionsleague/fixtures-results/#/md/35205",
  },
  {
    matchday: 5,
    date: "2022/10/25",
    url: "https://www.uefa.com/uefachampionsleague/fixtures-results/#/md/35207",
  },
  {
    matchday: 4,
    date: "2022/10/11",
    url: "https://www.uefa.com/uefachampionsleague/fixtures-results/#/md/35206",
  },
  {
    matchday: 6,
    date: "2022/11/1",
    url: "https://www.uefa.com/uefachampionsleague/fixtures-results/#/md/35208",
  },
];

var matchdayArrays = [
  new Date(matchDays[0].date),
  new Date(matchDays[5].date),
  new Date(matchDays[1].date),
  new Date(matchDays[3].date),
  new Date(matchDays[2].date),
  new Date(matchDays[4].date),
  new Date(todayString),
];
var prevMatchDate, nextMatchDate;
var nextMatch, prevMatch;

matchdayArrays.sort((a, b) => a - b);

for (var i = 0; i < matchdayArrays.length; i++) {
  if (matchdayArrays[i] + "" === new Date(todayString) + "") {
    prevMatchDate = matchdayArrays[i - 1];
    nextMatchDate = matchdayArrays[i + 1];
  }
}
matchDays.forEach((element) => {
  // console.log( ,);

  if (
    prevMatchDate.toLocaleDateString() ===
    new Date(element.date).toLocaleDateString()
  ) {
    prevMatch = {
      matchday: element.matchday,
      url: element.url,
    };
  }
  if (
    nextMatchDate.toLocaleDateString() ===
    new Date(element.date).toLocaleDateString()
  ) {
    nextMatch = {
      matchday: element.matchday,
      url: element.url,
    };
  }
});

export { prevMatch, nextMatch };

