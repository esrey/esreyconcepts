import React, {Component} from 'react';

export class List extends Component {
  render () {
    return (
      <div>
      <div class="section valign-wrapper">
    <div class="row valign">
      <div class="col s12 m10 offset-m1">
        <div class="row">
          <div class="col s12"><h2 class="section-title">About us</h2></div>
          <div class="col s12 m6 l4">
            <h4><i class="icon-light-bulb"></i></h4>
            <p class="caption">We specialize in business mitigation and maintenance.</p>
          </div>
          <div class="col s12 m6 l4">
            <h4><i class="icon-bolt"></i></h4>
            <p class="caption">On-site and virtual work management.</p>
          </div>
          <div class="col s12 m6 l4">
            <h4><i class="icon-rocket"></i></h4>
            <p class="caption">Degress and certifications in Science, Technology, and the Arts.</p>
          </div>
          <div class="col s12 m6 l4">
            <h4><i class="icon-settings"></i></h4>
            <p class="caption">Always a step ahead from the pack.</p>
          </div>
          <div class="col s12 m6 l4">
            <h4><i class="icon-umbrella"></i></h4>
            <p class="caption">Brand protection and revitalization.</p>
          </div>
          <div class="col s12 m6 l4">
            <h4><i class="icon-compass"></i></h4>
            <p class="caption">Let us map out your direction to success.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
      </div>
    )
  }
}

export default List
