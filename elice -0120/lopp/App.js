let ladder = {
    step: 0,
    up() {
      this.step = this.step + 1;
      return this.step;
    },
    down() {
      this.step = this.step - 1;
      return this.step;
    },
    showStep() {
      alert(this.step);
    },
  };
  
  export default ladder;