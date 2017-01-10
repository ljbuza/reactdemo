import React from 'react';
import ReactDOM from 'react-dom';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.onUserInput(this.filterTextInput.value);
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              id="search"
              placeholder="Search..."
              value={this.props.filterText}
              ref={input => this.filterTextInput = input}
              onChange={this.handleChange}
            />
          </div>
        </div>
      </form>
    );
  }
}

SearchBox.propTypes = {
  onUserInput: React.PropTypes.func,
  filterText: React.PropTypes.string,
};

class SearchableBooksTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      data: [],
    };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  componentDidMount() {
    this.loadBooksFromServer();
        // setInterval(this.loadBooksFromServer,
        //             this.props.pollInterval)
  }

  loadBooksFromServer() {
    fetch(this.props.url, {
      method: 'get',
    })
    .then(response => response.json())
    .then((data) => {
      this.setState({ data });
    });
  }

  handleUserInput(filterText) {
    this.setState({
      filterText,
    });
  }

  render() {
    return (
      <div>
        <SearchBox
          filterText={this.state.filterText}
          onUserInput={this.handleUserInput}
        />
        <BooksTable
          books={this.state.data}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}

class BooksTable extends React.Component {
  // constructor(props) {
  //   super(props);
  //  }

  render() {
    const bookRows = [];
    this.props.books.forEach((book) => {
      if (book.title.indexOf(this.props.filterText) === -1) {
        return;
      }
      bookRows.push(<tr className={this.state.active ? 'active' : ''}><td> {book.title} </td><td> {book.author} </td></tr>);
    });
    return (
      <div>
        <table className="col-sm-8 table table-striped">
          <thead>
            <tr><th>Title</th><th>Author</th></tr>
          </thead>
          <tbody>
            {bookRows}
          </tbody>
        </table>
      </div>
    );
  }
}

SearchableBooksTable.propTypes = {
  url: React.PropTypes.string,
};

SearchableBooksTable.defaultProps = {
  url: '/demo/',
  pollInterval: 1000,
};

ReactDOM.render(
  <SearchableBooksTable />,
  document.getElementById('container'),
);
