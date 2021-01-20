import React, {Component} from 'react';


export class Header extends Component {
  render () {
    return (
      <div>
      <div class="header full-height horizontal-half-transition">

  <div class="phone-preview-sizer">
    <div class="phone-preview"></div>
  
  </div>
  <div class="horizontal-half-wrapper right-side active">
    <div class="header-background white"></div>
    <div class="header-wrapper row valign-wrapper">
      <div class="col s12 m8 offset-m2 valign">
        <h1>Esrey Concepts</h1>
        <span class="tagline">Where </span>
        <button class="read-more"><i class="icon-caret-down"></i></button>
      </div>
    </div>
  </div>
  <div class="horizontal-half-wrapper">
    <div class="header-background white"></div>
    <div class="header-wrapper row valign-wrapper">
      <div class="col s12 m8 offset-m2 valign">
        <h1>Innovation </h1>
        <span class="tagline">Meets </span>
        <button class="read-more"><i class="icon-caret-down"></i></button>
      </div>
    </div>
  </div>
  <div class="horizontal-half-wrapper right-side">
    <div class="header-background white"></div>
    <div class="header-wrapper row valign-wrapper">
      <div class="col s12 m8 offset-m2 valign">
        <h1>Success</h1>
        <span class="tagline">©</span>
        <button class="read-more"><i class="icon-caret-down"></i></button>
      </div>
    </div>
  </div>
</div>




      </div>
    )
  }
}

export default Header
