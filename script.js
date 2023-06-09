Vue.createApp({
  data() {
    return {
      message: "!dlroW olleH",
      prenom: "Hamza",
      pays: ["Egypt", "France", "Argentine", "Inde"],
      // pays2: this.toUpperPays,
      couleur: "vert",
      nouveauPays: "",
    };
  },
  methods: {
    ajoutPays() {
      let nom = document.querySelector("#inputPays").value;
      this.pays.push(nom);
      document.querySelector("#inputPays").value = "";
    },
    ajoutPays2() {
      this.pays.push(this.nouveauPays);
      this.nouveauPays = "";
    },
    changeColor() {
      if (this.couleur == "vert") {
        this.couleur = "violet";
      } else {
        this.couleur = "vert";
      }
    },
  },
  computed: {
    reecrireMsg() {
      return this.message.split("").reverse().join("");
    },
    toUpperPays() {
      return this.pays.map((item) => item.toUpperCase());
    },
  },
}).mount("#root");
