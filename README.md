
# `lucify-updated-time`

This is a simple React component designed for showing an update time for an embedded visualisation, using metadata fetched from an URL.

Due to its general nature it might be useful also in some other usage scenarios.

## Props

- `metaDataUrl`: URL to json file with a field `stampUpdated`, that contains an unix timestamp reflecting when a resource has been last updated (required)
- `prefix`: Markup to display before the human friendly date/time (optional, defaults to `Updated `)
- `suffix`: Markup to display after the human-friendly date/time (optional, defaults to `null`)
- `format`: Function that converts a Date to (optional, defaults to a function formatting dates as e.g. `31 March 2016`)

## License

MIT

