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
- [Advanced]("#advanced)
  * [Class:searchgoogle](#classsearchgoogle)
    + [searchgoogle.queue](#searchgooglequeue)

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
* [Result]
    ```js
    [
  {
    title: 'Tom and Jerry, xem sẽ cười như ngày xưa - YouTube',
    href: 'https://www.youtube.com/watch?v=PWsAsfWunEc',
    content: 'hya lắm.'
  },
  {
    title: 'Tom & Jerry | The Tom & Jerry Rewind | Classic Cartoon ...',
    href: 'https://www.youtube.com/watch?v=LaFtAcIrGWA',
    content: 'We have curated some of the most loved Tom & Jerry moments this year into a mega compilation for you to ...'
  },
  {
    title: 'Tom and Jerry - Phim hoạt hình Tom và Jerry - Part 10 ...',
    href: 'https://www.youtube.com/watch?v=4mZMvREdg2I',
    content: 'Tom and Jerry - Phim hoạt hình Tom và Jerry - Part 10 Just Ducky T&J Movie ...'
  },
  {
    title: 'Tom & Jerry | Best of Little Quacker | Classic Cartoon ...',
    href: 'https://www.youtube.com/watch?v=AGBjI0x9VbM',
    content: 'Jerry is always around to help keep Little Quacker out of trouble - especially from Tom! WB Kids is the home of ...'
  },
  {
    title: 'Tom and Jerry Show - Tập 5 - Phim Hoạt Hình Tiếng Việt ...',
    href: 'https://www.youtube.com/watch?v=d71y_Him938',
    content: 'Tải ứng dụng POPS để xem hoạt hình và chương trình thiếu nhi hay: http://bit.ly/ungdungPOPS ▶️ Xem ngay nhiều nội dung ...'   
  }
]
    ```
## Advanced

### Class: searchgoogle

#### searchgoogle.queue

options.keyword : Keyword not empty

options.quantity : Must be a number greater than 0 less than 11
