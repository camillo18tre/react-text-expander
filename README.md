# react-text-expander

A React component, compatible with Next.js > 13, for managing long blocks of text that may need to be truncated for display purposes.

## Features

- Truncates multiline text to a specified number of lines.
- Users can click a "Show more" link to reveal the full text, and a "Show less" link to truncate it again.
- Customizable "Show more" and "Show less" text.

## Installation

```bash
npm install react-text-expander
```

or

```bash
yarn add react-text-expander
```

## Usage

```
import TextExpander from 'react-text-expander';

<TextExpander lines={3} showMoreLabel="Read more" showLessLabel="Show less">
    Your text goes here...
</TextExpander>
```

## Props

| Prop            |  Type  | Default | Description                                                        |
| --------------- | :----: | :-----: | :----------------------------------------------------------------- |
| children        |  node  |    -    | The content that needs to be truncated.                            |
| lines           | number |    3    | The number of lines to display before truncation.                  |
| showLessLabel   | string | "less"  | The text to display for the "show less" option.                    |
| showMoreLabel   | string | "more"  | The text to display for the "show more" option.                    |
| textClassName   | string |    -    | The class to be applied to the text container.                     |
| textStyle       | object |    -    | The inline styles to be applied to the text container.             |
| buttonClassName | string |    -    | The class to be applied to the show more/show less button.         |
| buttonStyle     | object |    -    | The inline styles to be applied to the show more/show less button. |
| isExpanded      |  bool  |  false  | The initial state of the text, if it's expanded or truncated.      |

## License

This project is licensed under the terms of the MIT license.

## Contributing

Interested in contributing? You can fork the repository and submit a pull request. For any issues, reports, or suggestions, please open an issue.
