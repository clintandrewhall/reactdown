"use strict";

var React     = require('react');
var assign    = Object.assign || require('object-assign');

function Wrapper() {
  return Array.prototype.slice.call(arguments, 1);
}

var Reactdown = React.createClass({
  displayName: 'Reactdown',
  render: function() {
    return React.DOM.div(null, this.props.children);
  }
});

function merge(a, b) {
  return assign({}, a, b);
}

module.exports = {
  Wrapper: Wrapper,
  Reactdown: Reactdown,
  merge: merge,
};
