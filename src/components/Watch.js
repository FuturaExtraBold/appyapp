import React, { Component } from 'react';
import $ from 'jquery';
// import TweenMax from 'gsap/TweenMax';

import Item from './Item';

class Watch extends Component {

  componentDidMount() {
    let $window = $(window);
    let $items = $(".item");
    let windowWidth = 0;
    let windowHeight = 0;
    let itemWidth;
    let itemHeight;

    $window.on("scroll", updateItems);

    function updateItems() {
      let scale;
      let thisItem;
      let scrollTop = $window.scrollTop();
      let itemCenter = 0;
      let itemTop = 0;
      let windowCenter = windowHeight / 2;
      let itemAbsoluteCenter = 0;
      $items.each((index) => {
        thisItem = $items.eq(index);
        itemCenter = thisItem.outerHeight() / 2;
        itemTop = thisItem.offset().top;
        itemAbsoluteCenter = itemTop + itemCenter - scrollTop;
        scale = itemAbsoluteCenter / windowCenter;
        let scale2 = (windowHeight - itemAbsoluteCenter) / 100;
        console.log("scale2:", scale2);
        thisItem.css("transform", "scale(" + scale + ")");
      });
      // console.log("windowWidth:", windowWidth);
    }

    function updateWindowSize() {
      windowWidth = $window.outerWidth();
      windowHeight = $window.outerHeight();
    }

    updateWindowSize();
    updateItems();
  }

  render() {
    let items = [];
    for (let a = 0; a < 200; a++) {
      items.push(<Item key={ a } />);
    }
    return (
      <section className="watch">
        { items }
        <div className="center center--h"></div>
        <div className="center center--v"></div>
      </section>
    );
  }
}

export default Watch;
