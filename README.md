# So, You Want a Book Excerpt Website

## Getting Started

1. Fork this repo.
2. Clone it
3. Run `npm install`
4. Run `eleventy --serve` and the site will be up and running locally—by default, at [localhost:8080](localhost:8080). The built site is in `_site`, and the source—the stuff you’ll want to change—is in `_src`

## Editing Your Website


### Metadata

Most of the information for your site is in `/_src/_data/metadata.json`. You might need to re-run your local dev server after changing these values.

*`title`*
It’s the title of your book.

*`description`*
This is used in the “description” `meta` tag—it gets used in previews and search results. Use something like “available 1/1/1900!” 

*`cta`*
The text in the big call-to-action link below the excerpt. “Pre-orders  start 1/1/1900,” “pre-order it today,” “buy it now,” something along those lines.

*`url`*
The URL for this excerpt site.

*`abaurl`*
The canonical URL for the book on abookapart.com

*`author`*
It’s you.

### `theme`

*`color`*
Your book cover color.

*`colordark`*
This color is used for your excerpt page footer and some small accents. When in doubt: black goes with everything.

*`cover`*
The path to your book cover. You can snag the one from the ABA page for your book and drop it into `/_src/_assets/img/`.

*`teaser`*
The preview image that pops up when you drop a link to your excerpt site onto Slack or Twitter. For example:
![](https://everydayinformationarchitecture.com/_assets/img/book-tease.jpg)

### `headings`

The headings for the `blurbs` and `bio` blocks in the footer.

### The Book Excerpt

Contained within `/_src/index.md`; nothin’ to it.

### Your Bio

Contained within `/_src/bio.md`.

### Blurbs

Each one is in a stand-alone markdown file inside `/_src/blurbs/`. There’s an example file in there now—for multiple blurbs, just copy that file (filenames don’t matter) and fill out the blurber’s `name`, job `title` (“author of thing,” “designer at place), and a `site` to link their name to.
