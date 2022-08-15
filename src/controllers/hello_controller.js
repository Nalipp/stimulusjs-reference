// src/controllers/hello_controller.js
import { Controller } from "@hotwired/stimulus";

// simple version

// export default class extends Controller {
//   static targets = [ "name", "message", "message2" ];

//   greet() {
//     const nameVal = this.nameTarget.value;
//     this.messageTarget.innerHTML = `Hello ${this.name}`;
//   }

//   get name() {
//     return this.nameTarget.value;
//   }
// }

// advanced version

export default class extends Controller {
  static values = { punctuation: { type: String, default: "." } };
  static targets = [ "name", "excitmentBtn", "message" ];

  greet() {
    const nameVal = this.nameTarget.value;
    this.messageTarget.innerHTML = `Hello ${this.name}${this.punctuationValue}`;
    this.excitmentBtnTarget.hidden = false;
  }

  excitedToggle() {
    this.punctuationValue = this.punctuationValue === "." ? "!" : ".";
    this.greet();
  }

  get name() {
    return this.nameTarget.value;
  }
}
