'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.position = position;
exports.offset = offset;
exports.parseHTML = parseHTML;
exports.getWindowsHeightWidth = getWindowsHeightWidth;
exports.removeDom = removeDom;
function position(target) {
  return {
    top: target.offsetTop,
    left: target.offsetLeft
  };
}

function offset(target) {
  var top = 0;
  var left = 0;
  var tmpTarget = target;
  while (tmpTarget.offsetParent) {
    top += tmpTarget.offsetTop;
    left += tmpTarget.offsetLeft;
    tmpTarget = tmpTarget.offsetParent;
  }
  return {
    top: top,
    left: left
  };
}

function parseHTML(string) {
  var context = document.implementation.createHTMLDocument('div');

  var base = context.createElement('base');
  base.href = document.location.href;
  context.head.appendChild(base);

  context.body.innerHTML = string;
  return context.body.children[0];
}

function getWindowsHeightWidth() {
  var body = document.body;
  var html = document.documentElement;
  var height = Math.max(body.offsetHeight, body.scrollHeight, html.clientHeight, html.offsetHeight, html.scrollHeight);
  var width = Math.max(body.offsetWidth, body.scrollWidth, html.clientWidth, html.offsetWidth, html.scrollWidth);
  return {
    height: height,
    width: width
  };
}

function removeDom(el) {
  el.parentNode.removeChild(el);
}