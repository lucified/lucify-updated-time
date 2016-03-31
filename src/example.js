
import React from 'react';
import UpdatedTime from './updated-time';

export default class Example extends React.Component {

  render() {
    return (
      <div>
        <p>The flow towards Europe (dev):</p>
        <p>
          <UpdatedTime
          prefix='Updated on '
          metaDataUrl='http://dev.lucify.com/embed/the-flow-towards-europe-updating/lucify-metadata.json' />
        </p>
        <p>The flow towards Europe (prod):</p>
        <p>
          <UpdatedTime
          prefix='Updated on '
          metaDataUrl='http://www.lucify.com/embed/the-flow-towards-europe-updating/lucify-metadata.json' />
        </p>
      </div>
    );
  }

}

Example.prototype.displayName = 'Example';
