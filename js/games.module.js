import { DisplayContent } from "./ui.module.js";
import { Details } from "./datails.module.js";

export class Games {
  constructor() {
    this.getGames("mmorpg");
    document.querySelectorAll(".menu a").forEach((item) => {
      item.addEventListener("click", (e) => {
        document.querySelector(".menu .active").classList.remove("active");
        e.target.classList.add("active");
        this.getGames(e.target.dataset.category);
      });
    });
    this.displayDataGame = new DisplayContent();
  }

  async getGames(category) {
    const loading = document.querySelector(".loading");
    loading.classList.remove("d-none");
    try {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };

      let response = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
        options
      );

      const data = await response.json();
      this.displayDataGame.displayGames(data);
      this.getID();
    } catch {
      console.error("Couldn't Fetch The data", error);
    }
    loading.classList.add("d-none");
  }

  showDetails(gameID) {
    const details = new Details(gameID);
    document.getElementById("games").classList.add("d-none");
    document.getElementById("detailsB").classList.remove("d-none");
  }

  getID() {
    document.querySelectorAll(".card").forEach((item) => {
      item.addEventListener("click", () => {
        const id = item.dataset.id;
        this.showDetails(id);
      });
    });
  }
}

const game = new Games();
console.log(game.getGames("mmorpg"));
