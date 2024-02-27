import { toast } from "react-toastify";

export const removeFromWatchlist = (id) => {
  if (window.confirm("Are you sure you want to remove this coin")) {
    let items = localStorage.getItem("Watchlist");
    let arr = JSON.parse(items);
    localStorage.setItem(
      "Watchlist",
      JSON.stringify(arr.filter((item) => item !== id))
    );
    toast.success(
      `${
        id.slice(0, 1).toUpperCase() + id.slice(1)
      } removed from the Watchlist!`
    );
  } else {
    toast.error("Couldnt remove the coin from the Watchlist!");
  }
};