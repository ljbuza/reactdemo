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
              ref={(input) => this.filterTextInput = input}
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
    };
    this.handleUserInput = this.handleUserInput.bind(this);
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
        <BooksTable />
      </div>
    );
  }
}

class BooksTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
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
      // console.log('got data', data);
      this.setState({ data });
    });

    // $.ajax({
    //   url: this.props.url,
    //   datatype: 'json',
    //   cache: false,
    //   success: function (data) {
    //     this.setState({ data });
    //   }.bind(this),
    // });
  }

  render() {
    if (this.state.data) {
      this.bookRows = this.state.data.map(
         book => <tr><td> {book.title} </td><td> {book.author} </td></tr>);
    } return (
      <div>
        <table className="col-sm-8 table table-striped">
          <thead>
            <tr><th>Title</th><th>Author</th></tr>
          </thead>
          <tbody>
            {this.bookRows}
          </tbody>
        </table>
      </div>
    );
  }
}

BooksTable.propTypes = {
  url: React.PropTypes.string,
};

BooksTable.defaultProps = {
  url: '/demo/',
  pollInterval: 1000,
};

ReactDOM.render(
  <SearchableBooksTable />,
  document.getElementById('container')
);
//   loadBooksFromServer: () => {
//     $.ajax({
//       url: this.props.url,
//       datatype: 'json',
//       cache: false,
//       success: (data) => {
//           this.setState({data: data});
//         }.bind(this)
//       // error: (xhr, status, err) => {
//       //     console.error(this.props.url, status, err.toString());
//       //   }.bind(this)
//     })
//   },

