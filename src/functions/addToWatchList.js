import { toast } from "react-toastify";
export const addToWatchlist = (id) => {
  let items = localStorage.getItem("Watchlist");
  if (items) {
    let arr = JSON.parse(items);
    if (!arr.includes(id)) {
      arr.push(id);
      localStorage.setItem("Watchlist", JSON.stringify(arr));
    }
  } else {
    var arr = JSON.stringify([id]);
    localStorage.setItem("Watchlist", arr);
  }
  toast.success(
    `${id.slice(0, 1).toUpperCase() + id.slice(1)} - Added To The Watchlist!`
  );
};