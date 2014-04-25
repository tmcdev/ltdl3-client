/**
 * @jsx React.DOM
 */
var app = app || {};

(function () {
    'use strict';

    var searchBuilderFilterType = app.searchBuilderFilterType;
    var searchBuilderFilterPhrase = app.searchBuilderFilterPhrase;
    var searchBuilderTextBox = app.searchBuilderTextBox;

    app.SearchBuilderComponent = React.createClass({
        focusTextBox: function () {
            this.refs.textBox.focus();
        },
        setTextBox: function (value) {
            this.refs.textBox.value(value);
        },
        render: function() {
            return (
                <div className="form-group ltdl-search-builder-component">
                    <div className="input-group">
                        <searchBuilderFilterType focusTextBox={this.focusTextBox} setTextBox={this.setTextBox}/>
                        <searchBuilderFilterPhrase focusTextBox={this.focusTextBox}/>
                        <searchBuilderTextBox ref="textBox"/>
                        <div className="input-group-btn ltdl-search-plus">
                            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown"><span className="glyphicon glyphicon-plus"></span></button>
                            <ul className="dropdown-menu dropdown-menu-right" role="menu">
                                <li><a className="ltdl-search-add" href="#">AND</a></li>
                                <li><a className="ltdl-search-add" href="#">OR</a></li>
                                <li><a className="ltdl-search-add" href="#">NOT</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            );
        }
    });
}());

