/** @jsx React.DOM */
var Menu = React.createClass({displayName: "Menu",
  render: function() {

    return(
      React.createElement("nav", {className: "navbar navbar-default navbar-fixed-top"}, 
      React.createElement("div", {className: "container"}, 
        React.createElement("div", {className: "navbar-header"}, 
          React.createElement("button", {type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#navbar", "aria-expanded": "false", "aria-controls": "navbar"}, 
            React.createElement("span", {className: "sr-only"}, "Toggle navigation"), 
            React.createElement("span", {className: "icon-bar"}), 
            React.createElement("span", {className: "icon-bar"}), 
            React.createElement("span", {className: "icon-bar"})
          ), 
          React.createElement("a", {className: "navbar-brand", href: "#"}, "Siyasal Prizma")
        ), 
        React.createElement("div", {id: "navbar", className: "navbar-collapse collapse"}, 
          React.createElement("ul", {className: "nav navbar-nav"}, 
            React.createElement("li", {className: "active"}, React.createElement("a", {href: "#"}, "Home")), 
            React.createElement("li", null, React.createElement("a", {href: "#about"}, "About")), 
            React.createElement("li", null, React.createElement("a", {href: "#contact"}, "Contact"))
          ), 
          React.createElement("ul", {className: "nav navbar-nav navbar-right"}, 
            React.createElement("li", null, React.createElement("a", {href: "../navbar/"}, "Default")), 
            React.createElement("li", null, React.createElement("a", {href: "../navbar-static-top/"}, "Static top")), 
            React.createElement("li", {className: "active"}, React.createElement("a", {href: "./"}, "Fixed top ", React.createElement("span", {className: "sr-only"}, "(current)")))
          )
        )
      )
    )

  );
  }
});

var App = React.createClass({displayName: "App",
    render: function() {
      return (
        React.createElement("div", null, 
          React.createElement(Menu, null), 
          React.createElement(AddEvents, null)
        )
      );
    }
});

var EventRoot = React.createClass({displayName: "EventRoot",
    render: function() {
      return (
        React.createElement("div", {className: "row"}, 
        React.createElement("div", {className: "col-xs-8 col-xs-offset-1"}, 
    React.createElement("ul", {className: "list-group"}, 
    React.createElement("li", {className: "list-group-item"}, "Cras justo odio"), 
    React.createElement("li", {className: "list-group-item"}, "Dapibus ac facilisis in"), 
    React.createElement("li", {className: "list-group-item"}, "Morbi leo risus"), 
    React.createElement("li", {className: "list-group-item"}, "Porta ac consectetur ac"), 
    React.createElement("li", {className: "list-group-item"}, "Vestibulum at eros")
  )
  )
  )
      )
    }
});

var AddEvents = React.createClass({displayName: "AddEvents",
  render: function() {
    return (
      React.createElement("div", {className: "row"}, 
      React.createElement("div", {className: "col-xs-8 col-xs-offset-1"}, 
      React.createElement("form", null, 
        React.createElement("div", {className: "form-group"}, 
          React.createElement("label", {for: "title"}, "Haber Başlığı"), 
          React.createElement("input", {type: "text", className: "form-control", id: "title", placeholder: "Başlık"})
        ), 
        React.createElement("div", {className: "form-group"}, 
          React.createElement("label", {for: "body"}, "Haber"), 
          React.createElement("textarea", {className: "form-control", rows: "3", id: "body", placeholder: "Haber Metni"})
        ), 
        React.createElement("button", {type: "submit", class: "btn btn-default"}, "Kaydet")
      )
      )
      )
    )
  }
});

React.render(React.createElement(App, null), document.getElementById("content"));
