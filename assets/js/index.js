var React = require('react');
var ReactDOM = require('react-dom');

var BooksList = React.createClass({
    loadBooksFromServer: function(){
        $.ajax({
            url: this.props.url,
            datatype: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        })
    },

    getInitialState: function() {
        return {data: []};
    },

    componentDidMount: function() {
        this.loadBooksFromServer();
        setInterval(this.loadBooksFromServer,
                    this.props.pollInterval)
    },

    render: function() {
        if (this.state.data) {
            var bookNodes = this.state.data.map(function(book) {
                return <li> {book.title} by {book.author} </li>
            })

        } return (
            <div>
                <h1>Books</h1>
                <ul>
                    {bookNodes}
                </ul>
            </div>
    )
    }

})

ReactDOM.render(<BooksList url='/demo/' pollInterval={1000} />,
document.getElementById('container'))
