# My personal website (http://sean.dillingh.am)

My portfolio and blog, built using [Middleman](http://middlemanapp.com/).

## Dependencies

This project uses [Slim](http://slim-lang.com/) and [SCSS](http://sass-lang.com/) for making markup and stylesheets more fun and powerful. It also relies on Thoughtbot's [Bourbon](http://bourbon.io/) & [Neat](http://neat.bourbon.io/) SASS libraries, though the Neat dependency isn't essential and should be removed at some point.

## Installation

From the terminal: 

```
bundle install
```

## Getting Started

To run the site locally, use Middleman's command to fire up a web server:

```
bundle exec middleman server
```

Once you're done doing local development, run Middleman's build command:

```
bundle exec middleman build
```