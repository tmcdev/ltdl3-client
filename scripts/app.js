(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
(function () {
    'use strict';

    module.exports = React.createClass({displayName: 'exports',
        render: function() {
            return (
                React.DOM.div( {id:"footer"}, 
                    React.DOM.div( {className:"container text-muted text-center small"}, 
                        React.DOM.p(null, "© 2014 Regents of the University of California"),
                        React.DOM.p(null, React.DOM.a( {href:"http://glyphicons.com/"}, "Glyphicons"), " are used on this page.")
                    )
                )
            );
        }
    });
}());

},{}],2:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
(function () {
    'use strict';

    module.exports = React.createClass({displayName: 'exports',
        render: function() {
            var style = {
                position: 'absolute',
                top: '0',
                right: '0',
                border: '0',
            };
            return (
                React.DOM.a( {href:"https://github.com/Trott/ltdl3-client"}, 
                React.DOM.img( {style:style, src:"https://camo.githubusercontent.com/a6677b08c955af8400f44c6298f40e7d19cc5b2d/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677261795f3664366436642e706e67", alt:"Fork me on GitHub", 'data-canonical-src':"https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png"} )
                )
            );
        }
    });
}());

},{}],3:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
var SearchBuilderComponent = require('./SearchBuilderComponent.jsx');

(function () {
    'use strict';

    module.exports = React.createClass({displayName: 'exports',
        add: function (index) {
            var components = this.state.components;
            components.push(SearchBuilderComponent( {key:"comp"+(index+1), index:index+1, add:this.add, remove:this.remove}));
            this.setState({
                components: components
            });
        },
        remove: function (index) {
            var components = this.state.components;
            delete(components[index]);
            this.setState({
                components: components
            });
        },
        getInitialState: function () {
            return {
                components: [SearchBuilderComponent( {key:"comp0", index:0, add:this.add, remove:this.remove})]
            }
        },
        render: function() {
            return (
                React.DOM.div( {className:"jumbotron"}, 
                    React.DOM.form( {role:"form"}, 
                        React.DOM.div(null, 
                            this.state.components
                        ),
                        React.DOM.div( {className:"pull-right"}, 
                            React.DOM.button( {type:"submit", className:"btn btn-default"}, "Search ", React.DOM.span( {className:"glyphicon glyphicon-search"}))
                        )
                    )
                )
            );
        }
    });
}());

},{"./SearchBuilderComponent.jsx":4}],4:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
var searchBuilderFilterType = require('./searchBuilderFilterType.jsx');
var searchBuilderFilterPhrase = require('./searchBuilderFilterPhrase.jsx');
var searchBuilderTextBox = require('./searchBuilderTextBox.jsx');
var searchBuilderAdd = require('./searchBuilderAdd.jsx');

(function () {
    'use strict';

    module.exports = React.createClass({displayName: 'exports',
        focusTextBox: function () {
            this.refs.textBox.focus();
        },
        setTextBox: function (value) {
            this.refs.textBox.value(value);
        },
        componentDidMount: function () {
            this.focusTextBox();
        },
        render: function() {
            return (
                React.DOM.div( {className:"form-group"}, 
                    React.DOM.div( {className:"input-group"}, 
                        searchBuilderFilterType( {focusTextBox:this.focusTextBox, setTextBox:this.setTextBox}),
                        searchBuilderFilterPhrase( {focusTextBox:this.focusTextBox}),
                        searchBuilderTextBox( {ref:"textBox"}),
                        searchBuilderAdd( {index:this.props.index, add:this.props.add, remove:this.props.remove})
                    )
                )
            );
        }
    });
}());


},{"./searchBuilderAdd.jsx":9,"./searchBuilderFilterPhrase.jsx":11,"./searchBuilderFilterType.jsx":12,"./searchBuilderTextBox.jsx":13}],5:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
var GithubRibbon = require('./GithubRibbon.jsx');
var SearchBuilder = require('./SearchBuilder.jsx');
var Footer = require('./Footer.jsx');

var app = app || {};

(function () {
    'use strict';

/* TODO: Subcomponents use data- attributes. Use props instead. */

    var LtdlApp = React.createClass({displayName: 'LtdlApp',
        render: function () {
            return (
                React.DOM.div( {className:"container"}, 
                    GithubRibbon(null),
                    React.DOM.h1(null, "LTDL3 Search Builder Prototype"),
                    SearchBuilder(null),
                    Footer(null)
                )
            );
        }
    });

    React.renderComponent(
        LtdlApp(null),
        document.getElementById('content')
    );
}());

},{"./Footer.jsx":1,"./GithubRibbon.jsx":2,"./SearchBuilder.jsx":3}],6:[function(require,module,exports){
module.exports=require(1)
},{}],7:[function(require,module,exports){
module.exports=require(2)
},{}],8:[function(require,module,exports){
module.exports=require(3)
},{"./SearchBuilderComponent.jsx":4}],9:[function(require,module,exports){
/**
 * @jsx React.DOM
 */

// TODO: magic value plusOrMinus = "plus" or "minus" should be booleanized or enumed

(function () {
    'use strict';

    module.exports = React.createClass({displayName: 'exports',
        getInitialState: function () {
            return {
                plusOrMinus: "plus",
                boolean: ""
            }
        },
        add: function (event) {
            this.setState({boolean: event.target.getAttribute('data-boolean')});

            if (this.state.plusOrMinus === "plus") {
                this.setState({plusOrMinus: "minus"});
                this.props.add(this.props.index);
            }
        },
        remove: function (event) {
            if (this.state.plusOrMinus === "minus") {
                this.props.remove(this.props.index);
            }
        },
        render: function () {
            var revisePulldownStyle = {display: "inherit"};
            var toggleClass = "";
            if (this.state.plusOrMinus === "plus") {
                revisePulldownStyle = {display: "none"}
                toggleClass = "dropdown-toggle"
            }
            return (
                React.DOM.div( {className:"input-group-btn"}, 
                    React.DOM.button( {style:revisePulldownStyle, type:"button", className:"btn btn-default dropdown-toggle", 'data-toggle':"dropdown"}, this.state.boolean, " ", React.DOM.span( {className:"caret"})),
                    React.DOM.button( {type:"button", onClick:this.remove, className:"btn btn-default {toggleClass}", 'data-toggle':"dropdown"}, React.DOM.span( {className:"glyphicon glyphicon-" + this.state.plusOrMinus})),
                    React.DOM.ul( {className:"dropdown-menu dropdown-menu-right", role:"menu"}, 
                        React.DOM.li(null, React.DOM.a( {'data-boolean':"AND", onClick:this.add, href:"#"}, "AND")),
                        React.DOM.li(null, React.DOM.a( {'data-boolean':"OR", onClick:this.add, href:"#"}, "OR")),
                        React.DOM.li(null, React.DOM.a( {'data-boolean':"NOT", onClick:this.add, href:"#"}, "NOT"))
                    )
                )
            )
        }
    });
}());

},{}],10:[function(require,module,exports){
module.exports=require(4)
},{"./searchBuilderAdd.jsx":9,"./searchBuilderFilterPhrase.jsx":11,"./searchBuilderFilterType.jsx":12,"./searchBuilderTextBox.jsx":13}],11:[function(require,module,exports){
/**
 * @jsx React.DOM
 */

(function () {
    'use strict';

    module.exports = React.createClass({displayName: 'exports',
        getInitialState: function () {
            return {filterPhrase: "for any of the words"};
        },
        handleClick: function (event) {
            this.setState({filterPhrase: event.target.getAttribute('data-value')});
            this.props.focusTextBox();
        },
        render: function() {
            return (
                React.DOM.div( {className:"input-group-btn"}, 
                    React.DOM.button( {type:"button", className:"btn btn-default dropdown-toggle", 'data-toggle':"dropdown"}, 
                        this.state.filterPhrase, " ", React.DOM.span( {className:"caret"})
                    ),
                    React.DOM.ul( {className:"dropdown-menu", role:"menu"}, 
                        React.DOM.li(null, React.DOM.a( {'data-value':"for any of the words", onClick:this.handleClick, href:"#"}, "for any of the words")),
                        React.DOM.li(null, React.DOM.a( {'data-value':"for all of the words", onClick:this.handleClick, href:"#"}, "for all of the words")),
                        React.DOM.li(null, React.DOM.a( {'data-value':"for the exact phrase", onClick:this.handleClick, href:"#"}, "for the exact phrase"))
                    )
                )
            );
        }
    });
}());

},{}],12:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
(function () {
    'use strict';

    module.exports = React.createClass({displayName: 'exports',
        getInitialState: function () {
            return {filterType: "Everything"};
        },
        handleClickType: function (event) {
            this.setState({filterType: event.target.getAttribute('data-type')});
            this.props.focusTextBox();
        },
        handleClickValue: function (event) {
            this.props.setTextBox(event.target.getAttribute('data-text-value'))
            this.handleClickType(event);
        },
        render: function() {
            return (
                React.DOM.div( {className:"input-group-btn"}, 
                    React.DOM.button( {type:"button", className:"btn btn-default dropdown-toggle", 'data-toggle':"dropdown"}, 
                        this.state.filterType, " ", React.DOM.span( {className:"caret"})
                    ),
                    React.DOM.ul( {className:"dropdown-menu", role:"menu"}, 
                        React.DOM.li(null, React.DOM.a( {'data-type':"Everywhere", onClick:this.handleClickType, href:"#"}, "Everywhere")),
                        React.DOM.li(null, React.DOM.a( {'data-type':"Title", onClick:this.handleClickType, href:"#"}, "Title")),
                        React.DOM.li(null, React.DOM.a( {'data-type':"Person", onClick:this.handleClickType, href:"#"}, "Person")),
                        React.DOM.li(null, React.DOM.a( {'data-type':"Organization", onClick:this.handleClickType, href:"#"}, "Organization")),
                        React.DOM.li( {className:"dropdown-submenu"}, 
                            React.DOM.a( {'data-type':"Type", onClick:this.handleClickType, href:"#"}, "Type"),
                            React.DOM.ul( {className:"dropdown-menu ltdl-filter-what-phrase"}, 
                                React.DOM.li(null, React.DOM.a( {'data-type':"Type", 'data-text-value':"Letter", onClick:this.handleClickValue, href:"#"}, "Letter")),
                                React.DOM.li(null, React.DOM.a( {'data-type':"Type", 'data-text-value':"Email", onClick:this.handleClickValue, href:"#"}, "Email")),
                                React.DOM.li(null, React.DOM.a( {'data-type':"Type", 'data-text-value':"Report", onClick:this.handleClickValue, href:"#"}, "Report")),
                                React.DOM.li(null, React.DOM.a( {'data-type':"Type", 'data-text-value':"Ad", onClick:this.handleClickValue, href:"#"}, "Ad")),
                                React.DOM.li(null, React.DOM.a( {'data-type':"Type", 'data-text-value':"Video", onClick:this.handleClickValue, href:"#"}, "Video")),
                                React.DOM.li(null, React.DOM.a( {'data-type':"Type", 'data-text-value':"Memo", onClick:this.handleClickValue,href:"#"}, "Memo")),
                                React.DOM.li(null, React.DOM.a( {'data-type':"Type", 'data-text-value':"Newsletter", onClick:this.handleClickValue, href:"#"}, "Newsletter")),
                                React.DOM.li(null, React.DOM.a( {'data-type':"Type", 'data-text-value':"Journal", onClick:this.handleClickValue, href:"#"}, "Journal")),
                                React.DOM.li(null, React.DOM.a( {'data-type':"Type", 'data-text-value':"Invoice", onClick:this.handleClickValue, href:"#"}, "Invoice")),
                                React.DOM.li(null, React.DOM.a( {'data-type':"Type", 'data-text-value':"Financial", onClick:this.handleClickValue, href:"#"}, "Financial")),
                                React.DOM.li(null, React.DOM.a( {'data-type':"Type", 'data-text-value':"Agenda", onClick:this.handleClickValue, href:"#"}, "Agenda")),
                                React.DOM.li(null, React.DOM.a( {'data-type':"Type", 'data-text-value':"Form", onClick:this.handleClickValue, href:"#"}, "Form")),
                                React.DOM.li(null, React.DOM.a( {'data-type':"Type", 'data-text-value':"Article", onClick:this.handleClickValue, href:"#"}, "Article")),
                                React.DOM.li(null, React.DOM.a( {'data-type':"Type", 'data-text-value':"Audio", onClick:this.handleClickValue, href:"#"}, "Audio")),
                                React.DOM.li(null, React.DOM.a( {'data-type':"Type", 'data-text-value':"Graphics", onClick:this.handleClickValue, href:"#"}, "Graphics")),
                                React.DOM.li(null, React.DOM.a( {'data-type':"Type", onClick:this.handleClickType, href:"#"}, "Other"))
                            )
                        ),
                        React.DOM.li( {className:"dropdown-submenu"}, 
                            React.DOM.a( {'data-type':"Brand Name", onClick:this.handleClickType, href:"#"}, "Brand Name"),
                            React.DOM.ul( {className:"dropdown-menu ltdl-filter-what-phrase"}, 
                                React.DOM.li(null, React.DOM.a( {'data-type':"Brand Name", 'data-text-value':"Camel", onClick:this.handleClickValue, href:"#"}, "Camel")),
                                React.DOM.li(null, React.DOM.a( {'data-type':"Brand Name", 'data-text-value':"Marlboro", onClick:this.handleClickValue, href:"#"}, "Marlboro")),
                                React.DOM.li(null, React.DOM.a( {'data-type':"Brand Name", 'data-text-value':"Viriginia Slims", onClick:this.handleClickValue, href:"#"}, "Virginia Slims")),
                                React.DOM.li(null, React.DOM.a( {'data-type':"Brand Name", 'data-text-value':"Skoal", onClick:this.handleClickValue, href:"#"}, "Skoal")),
                                React.DOM.li(null, React.DOM.a( {'data-type':"Brand Name", 'data-text-value':"Garcia Y Vega", onClick:this.handleClickValue, href:"#"}, "Garcia Y Vega")),
                                React.DOM.li(null, React.DOM.a( {'data-type':"Brand Name", 'data-text-value':"More", onClick:this.handleClickValue, href:"#"}, "More")),
                                React.DOM.li(null, React.DOM.a( {'data-type':"Brand Name", 'data-text-value':"Winston", onClick:this.handleClickValue, href:"#"}, "Winston")),
                                React.DOM.li(null, React.DOM.a( {'data-type':"Brand Name", onClick:this.handleClickType,  href:"#"}, "Other"))
                            )
                        ),
                        React.DOM.li(null, React.DOM.a( {'data-type':"Bates Number", onClick:this.handleClickType, href:"#"}, "Bates Number")),
                        React.DOM.li(null, React.DOM.a( {'data-type':"ID Number", onClick:this.handleClickType, href:"#"}, "ID Number")),
                        React.DOM.li( {className:"divider"}),
                        React.DOM.li( {className:"dropdown-submenu"}, 
                            React.DOM.a( {href:"#"}, "More"),
                            React.DOM.ul( {className:"dropdown-menu"}, 
                                React.DOM.li(null, React.DOM.a( {'data-type':"Text", onClick:this.handleClickType, href:"#"}, "Text")),
                                React.DOM.li(null, React.DOM.a( {'data-type':"Metadata", onClick:this.handleClickType, href:"#"}, "Metadata")),
                                React.DOM.li(null, React.DOM.a( {'data-type':"Keyword", onClick:this.handleClickType, href:"#"}, "Keyword")),
                                React.DOM.li(null, React.DOM.a( {'data-type':"Notes", onClick:this.handleClickType, href:"#"}, "Notes"))
                            )
                        )
                    )
                )
            );
        }
    });
}());

},{}],13:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
(function () {
    'use strict';

    module.exports = React.createClass({displayName: 'exports',
        focus: function () {
            this.refs.textInputElement.getDOMNode().focus();
        },
        value: function (value) {
            this.refs.textInputElement.getDOMNode().value = value;
        },
        render: function () {
            return (
                React.DOM.input( {ref:"textInputElement", className:"form-control", type:"text", placeholder:"Tip: use (*) or (?) to find word variants like legislat* and wom?n"})
            )
        }
    });
}());

},{}]},{},[5,6,7,8,9,10,11,12,13])