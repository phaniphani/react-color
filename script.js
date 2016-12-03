
var ColorDropdown = React.createClass({
  propTypes: {
    value: React.PropTypes.string
  },
  getInitialState: function() {
    return {
    // text: this.props.text,
      value: this.props.value,
    };
  },
  
  _onSelect: function(ev) {
    this.setState({
      value: ev.target.value
    });
  },

  render: function() {
    return React.DOM.div("ColorDropdown",
      React.DOM.select({
        name: "Color",
        onChange: this._onSelect
      }, 
      React.DOM.option({value: "Blue"}, 'Blue'),
      React.DOM.option({value: "Red"}, 'Red'),
      React.DOM.option({value: "Gree"}, 'Green'),
      React.DOM.option({value: "Yellow"}, 'Yellow'),
      React.DOM.option({value: "White"}, 'White'),
      React.DOM.option({value: "Black"}, 'Black'),
      React.DOM.option({value: "Cyan"}, 'Cyan'),
      React.DOM.option({value: "Violet"}, 'Violet'),
      React.DOM.option({value: "Purple"}, 'Purple')
      ),
      React.DOM.h3(null, this.state.value)
    );
  }
});

ReactDOM.render(React.createElement(ColorDropdown, {value: "Blue"}), document.getElementById("root"));