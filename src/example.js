
import React from 'react';
import UpdatedTime from './updated-time';

export default class Example extends React.Component {

  render() {
    return <UpdatedTime
      prefix='Updated on'
      metaDataUrl='http://dev.lucify.com/embed/the-flow-towards-europe-updating/lucify-metadata.json' />;
  }

}

Example.prototype.displayName = 'Example';
