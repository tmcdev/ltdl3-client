/**
 * @jsx React.DOM
 */
var app = app || {};

(function () {
    'use strict';

    app.searchBuilderAdd = React.createClass({
        getInitialState: function () {
            return {
                plusOrMinus: "plus"
            }
        },
        add: function (event) {
            if (this.state.plusOrMinus === "plus") {
                console.dir(event.target.getAttribute('data-boolean'));
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
            return (
                <div className="input-group-btn">
                    <button type="button" onClick={this.remove} className="btn btn-default dropdown-toggle" data-toggle="dropdown"><span className={"glyphicon glyphicon-" + this.state.plusOrMinus}></span></button>
                    <ul className="dropdown-menu dropdown-menu-right" role="menu">
                        <li><a data-boolean="AND" onClick={this.add} href="#">AND</a></li>
                        <li><a data-boolean="OR" onClick={this.add} href="#">OR</a></li>
                        <li><a data-boolean="NOT" onClick={this.add} href="#">NOT</a></li>
                    </ul>
                </div>
            )
        }
    });
}());
