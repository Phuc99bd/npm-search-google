<p align="center">
  <a href="https://github.com/Phuc99bd/npm-search-googole/">
    <img alt="Node.js" src="https://raw.githubusercontent.com/bda-research/node-crawler/master/crawler_primary.png" width="400"/>
  </a>
</p>


# npm-search-googole

## CRAWLER DATA TOP GOOGLE IS BASED ON KEYWORD

## Table of Contents

- [Get started](#get-started)
  * [Install](#install)
  * [Basic usage](#basic-usage)
- [Advanced]("#avanced)
  * [Class: searchgoogle](#search-google)
    + [searchgoogle.queue](#search-google-queue)

# Get started

## Install

```sh
$ npm i npm-search-google
```

## Basic usage
```js
var searchGoogle = require("search-keyword-google/disk/search-keyword-google");
var search = new searchGoogle();
search.queue({
    keyword: "Tom and jerry",
    quantity: 5
}, function(data) {
    console.log(data);
})
```
## Advanced

### Class: searchgoogle

#### searchgoogle.queue

options.keyword : Keyword not empty
options.quantity : Must be a number greater than 0 less than 11
