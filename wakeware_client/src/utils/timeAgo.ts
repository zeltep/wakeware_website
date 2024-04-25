function timeAgo(date: Date): string {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    
  const intervals = {
      year: Math.floor(seconds / 31536000),
      month: Math.floor(seconds / 2592000),
      day: Math.floor(seconds / 86400),
      hour: Math.floor(seconds / 3600),
      minute: Math.floor(seconds / 60)
  };

  if (intervals.year > 1) {
      return `${intervals.year} years ago`;
  } else if (intervals.month > 1) {
      return `${intervals.month} months ago`;
  } else if (intervals.day > 1) {
      return `${intervals.day} days ago`;
  } else if (intervals.hour > 1) {
      return `${intervals.hour} hours ago`;
  } else if (intervals.minute > 1) {
      return `${intervals.minute} minutes ago`;
  } else {
      return `${seconds} seconds ago`;
  }
}

export default timeAgo
