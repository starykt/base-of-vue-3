const app = Vue.createApp({
  data() {
    return {
      output: '',
      output2:''
    };
  },
  methods: {
    showAlert() {
      alert('Cuidado com o local onde você clica!');
    },
    updateValue(event) {
      this.output = event.target.value;
    },
    updateValue2(event) {
      this.output2 = event.target.value;
    }
  }
});

app.mount('#assignment');