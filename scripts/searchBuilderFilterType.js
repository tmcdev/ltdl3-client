/**
 * @jsx React.DOM
 */
var app = app || {};

(function () {
    'use strict';

    app.searchBuilderFilterType = React.createClass({displayName: 'searchBuilderFilterType',
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
