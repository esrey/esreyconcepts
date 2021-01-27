import React, {Component} from 'react';

export class Navbar extends Component {
  render () {
    return (
      <div>
      <nav class="navbar dark absolute">
        <div class="nav-wrapper">
          <a href="horizontal-half.html" class="brand-logo"><i class="material-icons md-48">power</i>
          </a>

        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li class="active"><a class="dropdown-trigger" href="#!" data-target="pages">Pages<i class="material-icons right">arrow_drop_down</i></a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="team.html">Team</a></li>
          <li><a href="docs/about.html">Docs</a></li>
          <li><a href="#">Buy Now!</a></li>
        </ul>

        <ul id="pages" class="dropdown-content">
               <li><a class="active" href="horizontal-half.html">Home</a></li>
               <li><a href="sierra.html">Zoom Out</a></li>
               <li><a href="circle-reveal.html">Circle Reveal</a></li>
               <li><a href="phone-wall.html">Phone Wall</a></li>
               <li><a href="element-transitions.html">Element Transitions</a></li>
               <li><a href="basic-elements.html">Basic Elements</a></li>
               <li><a href="card-shuffle.html">Shuffle</a></li>
               <li><a href="postcards.html">Postcards</a></li>
             </ul>

             <a href="#" data-target="slide-out" class="sidenav-trigger button-collapse right"><i class="material-icons white-text">menu</i></a>
   </div>
 </nav>
 <ul id="slide-out" class="sidenav">
      <li class="no-padding">
        <ul class="collapsible collapsible-accordion">
          <li class="bold">
            <a class="collapsible-header waves-effect waves-teal active">Pages</a>
            <div class="collapsible-body">
              <ul>
                <li><a class="active" href="horizontal-half.html">Home</a></li>
                <li><a href="sierra.html">Zoom Out</a></li>
                <li><a href="circle-reveal.html">Circle Reveal</a></li>
                <li><a href="phone-wall.html">Phone Wall</a></li>
                <li><a href="element-transitions.html">Element Transitions</a></li>
                <li><a href="basic-elements.html">Basic Elements</a></li>
                <li><a href="card-shuffle.html">Shuffle</a></li>
                <li><a href="postcards.html">Postcards</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </li>
      <li><a class="waves-effect waves-teal" href="blog.html">Blog</a></li>
      <li><a class="waves-effect waves-teal" href="team.html">Team</a></li>
      <li><a class="waves-effect waves-teal" href="docs/about.html">Docs</a></li>
      <li><a class="waves-effect waves-teal" href="#">Buy Now!</a></li>
    </ul>




      </div>
    )
  }
}

export default Navbar
