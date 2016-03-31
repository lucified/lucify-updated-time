
import React from 'react';
import d3 from 'd3';
import moment from 'moment';


export default class UpdatedTime extends React.Component {

  displayName: 'UpdatedTime'

  constructor(props) {
    super(props);
    this.state = {
      stamp: null
    };
  }

  static propTypes = {
    metaDataUrl: React.PropTypes.string.isRequired,
    format: React.PropTypes.func,
    prefix: React.PropTypes.node,
    suffix: React.PropTypes.node
  }

  static defaultProps = {
    format: date => {
      return (
        <span>
          {moment(date).format('MMM D, YYYY')}
        </span>
      );
    },
    prefix: 'Updated ',
    suffix: ''
  }

  componentDidMount() {
    d3.json(this.props.metaDataUrl, data => {
      if (data) {
        this.setState({stamp: new Date(parseInt(data.stampUpdated)*1000)});
      }
    });
  }

  getUpdatedTime() {
    if (!this.state.stamp) {
      return <span />;
    }
    return (
      <span>
        {this.props.prefix}
        {this.props.format(this.state.data)}
        {this.props.suffix}
      </span>
    );
  }

  render() {
    return (
      <span>{this.getUpdatedTime()}</span>
    );
  }

}

UpdatedTime.prototype.displayName = 'UpdatedTime';
