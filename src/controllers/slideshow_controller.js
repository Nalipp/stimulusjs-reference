import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static values = { curidx: { type: Number, default: 2} }
  static targets = ["slide"];

  previous() {
    if (this.curidxValue > 1) this.curidxValue -= 1;
  }

  next() {
    if (this.curidxValue < 3) {
      this.curidxValue += 1;
    } else {
      this.curidxValue = 0;
    }
  }

  curidxValueChanged() {
    this.showCurrentSlide()
  }

  showCurrentSlide() {
    this.slideTargets.forEach((ele, idx) => {
      if (idx === this.curidxValue) {
        console.log(idx, ele) 
      }
      ele.hidden = idx != this.curidxValue;
    });
  }
}
