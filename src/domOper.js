/* eslint-disable   prefer-destructuring  */
/**
 * 替代 jQuery().position()
 * @param target
 * @returns {{top: number, left: number}}
 */
export function position(target) {
  return {
    top: target.offsetTop,
    left: target.offsetLeft,
  };
}

/**
 * 替代jquery().offset()
 * @param target
 * @returns {{top: number, left: number}}
 */
export function offset(target) {
  let top = 0;
  let left = 0;
  let tmpTarget = target;
  while (tmpTarget.offsetParent) {
    top += tmpTarget.offsetTop;
    left += tmpTarget.offsetLeft;
    tmpTarget = tmpTarget.offsetParent;
  }
  return {
    top,
    left,
  };
}

// Native 解析字符串为 DOM 节点数组.
export function parseHTML(string) {
  const context = document.implementation.createHTMLDocument('div');

  // Set the base href for the created document so any parsed elements with URLs
  // are based on the document's URL
  const base = context.createElement('base');
  base.href = document.location.href;
  context.head.appendChild(base);

  context.body.innerHTML = string;
  return context.body.children[0];
}

/**
 * 替代 $(document).height()
 */
export function getWindowsHeightWidth() {
  // Native
  const body = document.body;
  const html = document.documentElement;
  const height = Math.max(
    body.offsetHeight,
    body.scrollHeight,
    html.clientHeight,
    html.offsetHeight,
    html.scrollHeight
  );
  const width = Math.max(
    body.offsetWidth,
    body.scrollWidth,
    html.clientWidth,
    html.offsetWidth,
    html.scrollWidth
  );
  return {
    height,
    width,
  };
}

export function removeDom(el) {
  el.parentNode.removeChild(el);
}
