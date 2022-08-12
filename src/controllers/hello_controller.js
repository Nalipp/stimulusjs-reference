// src/controllers/hello_controller.js
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    // console.log('connecting...', this.element); 
  }

  static targets = [ "name" ];

  greet() {
    console.log('name...', this.name);
  }

  get name() {
    return this.nameTarget.value;
  }
}
