fetch('contributions.json')
  .then((response) => response.json())
  .then((data) => {
    const weeks = data.data.user.contributionsCollection.contributionCalendar.weeks;
    const graph = document.getElementById('graph');

    weeks.forEach((week) => {
      week.contributionDays.forEach((day) => {
        const cell = document.createElement('div');
        cell.className = 'day';
        cell.style.backgroundColor = day.color;
        cell.title = `${day.date}: ${day.contributionCount} contributions`;
        graph.appendChild(cell);
      });
    });
  });
