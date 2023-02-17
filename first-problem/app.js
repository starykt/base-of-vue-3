const app = Vue.createApp({
  data() {
    return {
      name: 'gabrela',
      age: 19,
      linkImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRflLEOzLGRF0vIOh5z_Ok3YltVvS1QPE1xb8ApZaHzcySCsz5gVNSH_1iFJSysZUO1As&usqp=CAU'
    };
  },
  methods: {
    randomizeNumber() {
      const randomNumber = Math.random(0, 1);
      return randomNumber;
    }
  }
});

app.mount('#assignment');