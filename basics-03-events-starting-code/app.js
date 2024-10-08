const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    add(num){
      //this.counter++; // add 1
      //this.counter += num;
      this.counter = this.counter + num;
    },
    remove(num){
      //this.counter--; // remove 1
      //this.conuter -= num;
      this.counter = this.counter - num;
    },
    setName(event, lastName){
      this.name = event.target.value + ' ' + lastName; 
    },
    submitForm(){
      alert('submitted');
    },
    confirmedInput(){
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');
