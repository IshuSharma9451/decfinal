export const hasBeenAdded = (id) => {
    const Watchlist = localStorage.getItem("Watchlist");
    if (Watchlist) {
      let arr = JSON.parse(Watchlist);
      if (arr.includes(id)) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  };