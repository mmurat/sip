/** @jsx React.DOM */
var Menu = React.createClass({

  handleAddEvent: function() {
    return renderComponent.AddEvents;
  },

  render: function() {
    return(
      <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Siyasal Prizma</a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li onClick={this.handleAddEvent} className="active"><a href="#">Haber Ekle</a></li>
            <li><a href="#about">Haber Listesi</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="../navbar/">Default</a></li>
            <li><a href="../navbar-static-top/">Static top</a></li>
            <li className="active"><a href="./">Fixed top <span className="sr-only">(current)</span></a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
  }
});

var App = React.createClass({
    render: function() {
      return (
        <div>
          <Menu />
          <AddEvents />
        </div>
      );
    }
});

var EventRoot = React.createClass({
    render: function() {
      return (
        <div className="row">
        <div className="col-xs-8 col-xs-offset-1">
    <ul className="list-group">
    <li className="list-group-item">Cras justo odio</li>
    <li className="list-group-item">Dapibus ac facilisis in</li>
    <li className="list-group-item">Morbi leo risus</li>
    <li className="list-group-item">Porta ac consectetur ac</li>
    <li className="list-group-item">Vestibulum at eros</li>
  </ul>
  </div>
  </div>
      )
    }
});

var AddEvents = React.createClass({

  handleSubmit: function(e) {
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: '/api/addNews',
      data: {
        event: {
          title: React.findDOMNode(this.refs.title).value.trim(),
          body: React.findDOMNode(this.refs.body).value.trim(),
          source: React.findDOMNode(this.refs.source).value.trim()
      }
    },
      success: function(data) {
        console.log(data);
      }

    });
  },


  render: function() {
    return (
        <div className="row">
            <div className="col-xs-8 col-xs-offset-1">
                <form onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <label for="title">Haber Başlığı</label>
                        <input type="text" ref="title" className="form-control" id="title" placeholder="Başlık" />
                    </div>
                    <div className="form-group">
                        <label for="body">Haber</label>
                        <textarea className="form-control" ref="body" rows="3" id="body" placeholder="Haber Metni"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="source">Haber Kaynaği</label>
                        <input type="text" ref="source" className="form-control" ref="source" id="source" placeholder="Haber Kaynağı" />
                    </div>

                    <button type="submit" class="btn btn-default">Kaydet</button>
                </form>
        </div>
    </div>
    );
  }
});

var renderComponent = {
  addNews: function() {
    console.log(this);
    return React.render(<AddEvents />, document.getElementById("content"));
  }
};

React.render(<App />, document.getElementById("content"));
