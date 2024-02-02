function useUnixTimeToDate(unixTime) {
  const date = new Date(unixTime * 1000);

  const month = date.getMonth() + 1; // getMonth() is zero-based
  const day = date.getDate();
  const year = date.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
}

export default useUnixTimeToDate;
