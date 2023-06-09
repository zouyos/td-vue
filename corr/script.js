Vue.createApp({
  //data est une méthode
  data() {
    return {
      message: "!dlroW olleH",
      prenom: "Tim",
      pays: ["Egypt", "France", "Argentine", "Inde"],
      couleur: "vert",
      nouveauPays: "",
    };
  },
  //methods est un attribut qui corespond a un objet
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
    changeCouleur() {
      if (this.couleur == "vert") {
        this.couleur = "violet";
      } else {
        this.couleur = "vert";
      }
    },
  },
  computed: {
    ecrireMsg() {
      return this.message.split("").reverse().join("");
    },
  },
}).mount("#root");
