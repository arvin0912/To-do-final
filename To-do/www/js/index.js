var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = function (_React$Component) {
  _inherits(Item, _React$Component);

  function Item(props) {
    _classCallCheck(this, Item);

    var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this, props));

    _this.changeCheck = _this.changeCheck.bind(_this);
    _this.deleteItem = _this.deleteItem.bind(_this);
    return _this;
  }

  _createClass(Item, [{
    key: "changeCheck",
    value: function changeCheck() {
      this.props.changeCheck(this.props.id);
    }
  }, {
    key: "deleteItem",
    value: function deleteItem() {
      this.props.deleteItem(this.props.id);
    }
  }, {
    key: "render",
    value: function render() {
      var id = "item" + this.props.id;
      var checked = this.props.checked === true ? "checked" : "not-checked";
      var checkClass = "circle " + checked;

      var name = this.props.name;
      var outputName = name.length > 22 ? name.substring(0, 24) + "..." : name;
      return React.createElement(
        "div",
        { className: "item", id: id },
        React.createElement("div", { className: checkClass, onClick: this.changeCheck }),
        React.createElement(
          "h2",
          null,
          outputName
        ),
        React.createElement(
          "button",
          { onClick: this.deleteItem },
          "x"
        )
      );
    }
  }]);

  return Item;
}(React.Component);

var ItemList = function (_React$Component2) {
  _inherits(ItemList, _React$Component2);

  function ItemList(props) {
    _classCallCheck(this, ItemList);

    var _this2 = _possibleConstructorReturn(this, (ItemList.__proto__ || Object.getPrototypeOf(ItemList)).call(this, props));

    _this2.changeCheck = _this2.changeCheck.bind(_this2);
    _this2.deleteItem = _this2.deleteItem.bind(_this2);
    return _this2;
  }

  _createClass(ItemList, [{
    key: "changeCheck",
    value: function changeCheck(value) {
      this.props.changeCheck(value);
    }
  }, {
    key: "deleteItem",
    value: function deleteItem(value) {
      this.props.deleteItem(value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var item = this.props.items.map(function (item) {
        return React.createElement(Item, { name: item.text, id: item.id, checked: item.checked, changeCheck: _this3.changeCheck, deleteItem: _this3.deleteItem });
      });
      return React.createElement(
        "ul",
        { className: "itemList" },
        item
      );
    }
  }]);

  return ItemList;
}(React.Component);

var ApplicationNew = function (_React$Component3) {
  _inherits(ApplicationNew, _React$Component3);

  function ApplicationNew(props) {
    _classCallCheck(this, ApplicationNew);

    var _this4 = _possibleConstructorReturn(this, (ApplicationNew.__proto__ || Object.getPrototypeOf(ApplicationNew)).call(this, props));

    _this4.state = {
      items: [{ text: "Wake up", id: "001", checked: true }, { text: "Gym", id: "002", checked: false }, { text: "Lunch", id: "003", checked: false }, { text: "Meal prep", id: "004", checked: false }],
      inputValue: ''
    };
    _this4.checkItem = _this4.checkItem.bind(_this4);
    _this4.deleteItem = _this4.deleteItem.bind(_this4);
    _this4.inputChange = _this4.inputChange.bind(_this4);
    _this4.submitValue = _this4.submitValue.bind(_this4);
    return _this4;
  }

  _createClass(ApplicationNew, [{
    key: "checkItem",
    value: function checkItem(value) {
      var array = this.state.items;
      var index;
      array.map(function (item) {
        return item.id == value ? index = array.indexOf(item) : '';
      });
      var item = this.state.items[index];
      var newCheck = item.checked == true ? false : true;
      item.checked = newCheck;
      this.setState({ items: array });
    }
  }, {
    key: "deleteItem",
    value: function deleteItem(value) {
      var array = this.state.items;
      var index;
      array.map(function (item) {
        return item.id == value ? index = array.indexOf(item) : '';
      });
      array.splice(index, 1);
      this.setState({ items: array });
    }
  }, {
    key: "inputChange",
    value: function inputChange(e) {
      this.setState({ inputValue: e.target.value });
    }
  }, {
    key: "submitValue",
    value: function submitValue(e) {
      e.preventDefault();
      console.log(this.state.inputValue);
      var value = { text: this.state.inputValue, id: Date.now() };
      var newItems = this.state.items.concat(value);
      this.setState({
        items: newItems,
        inputValue: ''
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "My To Do App"
        ),
        React.createElement(
          "form",
          { onSubmit: this.submitValue },
          React.createElement("input", { type: "text", value: this.state.inputValue, onChange: this.inputChange }),
          React.createElement(
            "button",
            null,
            "+"
          )
        ),
        React.createElement(ItemList, { items: this.state.items, deleteItem: this.deleteItem, changeCheck: this.checkItem })
      );
    }
  }]);

  return ApplicationNew;
}(React.Component);

ReactDOM.render(React.createElement(ApplicationNew, null), document.getElementById('app'));