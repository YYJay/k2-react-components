'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var Menu = _interopDefault(require('antd/lib/menu'));
var Dropdown = _interopDefault(require('antd/lib/dropdown'));
var Icon = _interopDefault(require('antd/lib/icon'));

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};



var set = function set(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};

var NavList$1 = function (_React$Component) {
  inherits(NavList, _React$Component);

  function NavList(props) {
    classCallCheck(this, NavList);

    var _this = possibleConstructorReturn(this, (NavList.__proto__ || Object.getPrototypeOf(NavList)).call(this, props));

    _this.state = {
      current: '',
      currentKey: ''
    };

    _this.handlerClick = _this.handlerClick.bind(_this);
    _this.subMenuClick = _this.subMenuClick.bind(_this);
    return _this;
  }

  createClass(NavList, [{
    key: 'handlerClick',
    value: function handlerClick(e) {
      var _this2 = this;

      var subMenus = [];
      this.props.navList && this.props.navList.map(function (list) {
        !list.dropMenu || list.dropMenu.length === 0 ? subMenus.push(list.name) : _this2.setState({
          currentKey: e.key
        });
      });
      subMenus.map(function (item) {
        e.key === item ? function () {
          _this2.setState({
            current: e.key
          });
          e.item.props.clickEvent && e.item.props.clickEvent(e.key);
        }() : '';
      });
    }
  }, {
    key: 'subMenuClick',
    value: function subMenuClick(e) {
      var newCurrent = this.state.currentKey;
      this.setState({
        current: newCurrent
      });
      e.item.props.clickEvent && e.item.props.clickEvent(e.key);
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this3 = this;

      this.props.navList ? this.props.navList.map(function (item) {
        item.active ? _this3.setState({
          current: item.name
        }) : '';
      }) : '';
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return React.createElement(
        'div',
        { className: 'nav__list' },
        React.createElement(
          Menu,
          { onClick: this.handlerClick,
            selectedKeys: [this.state.current],
            mode: 'horizontal'
          },
          this.props.navList && this.props.navList instanceof Array ? this.props.navList.map(function (list) {
            if (list.name && list.dropMenu) {
              var menu = React.createElement(
                Menu,
                { onClick: _this4.subMenuClick },
                list.dropMenu.map(function (dp) {
                  return React.createElement(
                    Menu.Item,
                    { clickEvent: list.menuClick, key: dp },
                    dp
                  );
                })
              );
              return React.createElement(
                Menu.Item,
                {
                  key: list.name },
                React.createElement(
                  Dropdown,
                  { overlay: menu, trigger: ['click'] },
                  React.createElement(
                    'span',
                    { className: 'nav__list_dp', style: { textAlign: 'center' } },
                    list.name,
                    '\xA0\xA0',
                    React.createElement(Icon, { type: 'down' })
                  )
                )
              );
            }
            return React.createElement(
              Menu.Item,
              { clickEvent: list.menuClick, key: list.name },
              React.createElement(
                'span',
                { className: 'nav__list_dp', style: { textAlign: 'center' } },
                list.name
              )
            );
          }) : ''
        )
      );
    }
  }]);
  return NavList;
}(React.Component);

module.exports = NavList$1;
//# sourceMappingURL=index.js.map
