import { DisplayContent } from "./ui.module.js";

export class Details {
  constructor(id) {
    this.displayDetails = new DisplayContent();

    document.getElementById("btnClose").addEventListener("click", () => {
      document.getElementById("games").classList.remove("d-none");
      document.getElementById("detailsB").classList.add("d-none");
    });

    this.getDetails(id);
  }

  async getDetails(idGames) {
    const loading = document.querySelector(".loading");
    loading.classList.remove("d-none");
    try {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      };

      let response = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGames}`,
        options
      );
      let data = await response.json();
      this.displayDetails.displayDetails(data);
      loading.classList.add("d-none");
    } catch {
      console.error("Couldn't Fetch The data", error);
    }
  }
}
