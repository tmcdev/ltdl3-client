/**
 * @jsx React.DOM
 */
var app = app || {};

(function () {
    'use strict';

    var searchBuilderPhraseFilter = app.searchBuilderPhraseFilter;
    var searchBuilderTextBox = app.searchBuilderTextBox;

    app.SearchBuilderComponent = React.createClass({
        focusTextBox: function () {
            this.refs.textBox.focus();
        },
        render: function() {
            return (
                <div className="form-group ltdl-search-builder-component">
                    <div className="input-group">
                        <div className="input-group-btn">
                            <button type="button" className="btn btn-default dropdown-toggle ltdl-filter-what" data-toggle="dropdown">
                                Everywhere <span className="caret"></span>
                            </button>
                            <ul className="dropdown-menu ltdl-filter-what" role="menu">
                                <li><a className="show-in-button" href="#">Everywhere</a></li>
                                <li><a className="show-in-button" href="#">Title</a></li>
                                <li><a className="show-in-button" href="#">Person</a></li>
                                <li><a className="show-in-button" href="#">Organization</a></li>
                                <li className="dropdown-submenu">
                                    <a className="hoist-to-button" href="#">Type</a>
                                    <ul className="dropdown-menu ltdl-filter-what-phrase">
                                        <li><a className="show-in-search-box" href="#">Letter</a></li>
                                        <li><a className="show-in-search-box" href="#">Email</a></li>
                                        <li><a className="show-in-search-box" href="#">Report</a></li>
                                        <li><a className="show-in-search-box" href="#">Ad</a></li>
                                        <li><a className="show-in-search-box" href="#">Video</a></li>
                                        <li><a className="show-in-search-box" href="#">Memo</a></li>
                                        <li><a className="show-in-search-box" href="#">Newsletter</a></li>
                                        <li><a className="show-in-search-box" href="#">Journal</a></li>
                                        <li><a className="show-in-search-box" href="#">Invoice</a></li>
                                        <li><a className="show-in-search-box" href="#">Financial</a></li>
                                        <li><a className="show-in-search-box" href="#">Agenda</a></li>
                                        <li><a className="show-in-search-box" href="#">Form</a></li>
                                        <li><a className="show-in-search-box" href="#">Article</a></li>
                                        <li><a className="show-in-search-box" href="#">Audio</a></li>
                                        <li><a className="show-in-search-box" href="#">Graphics</a></li>
                                        <li><a className="show-in-button" data-ltdl-text="Type" href="#">Other</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown-submenu">
                                    <a className="hoist-to-button" href="#">Brand Name</a>
                                    <ul className="dropdown-menu ltdl-filter-what-phrase">
                                        <li><a className="show-in-search-box" href="#">Camel</a></li>
                                        <li><a className="show-in-search-box" href="#">Marlboro</a></li>
                                        <li><a className="show-in-search-box" href="#">Virginia Slims</a></li>
                                        <li><a className="show-in-search-box" href="#">Skoal</a></li>
                                        <li><a className="show-in-search-box" href="#">Garcia Y Vega</a></li>
                                        <li><a className="show-in-search-box" href="#">More</a></li>
                                        <li><a className="show-in-search-box" href="#">Winston</a></li>
                                        <li><a className="show-in-button" data-ltdl-text="Brand Name" href="#">Other</a></li>
                                    </ul>
                                </li>
                                <li><a className="show-in-button" href="#">Bates Number</a></li>
                                <li><a className="show-in-button" href="#">ID Number</a></li>
                                <li className="divider"></li>
                                <li className="dropdown-submenu">
                                    <a href="#">More</a>
                                    <ul className="dropdown-menu">
                                        <li><a className="show-in-button" href="#">Text</a></li>
                                        <li><a className="show-in-button" href="#">Metadata</a></li>
                                        <li><a className="show-in-button" href="#">Keyword</a></li>
                                        <li><a className="show-in-button" href="#">Notes</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <searchBuilderPhraseFilter focusTextBox={this.focusTextBox}/>
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

