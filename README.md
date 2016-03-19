# Hexo Imgur gallery tag

[Hexo](https://hexo.io/) tag plugin for adding [Imgur](http://imgur.com/) galleries to your posts using the old and better embedding system.

## Installing

```
npm install hexo-tag-imgurgal --save
```

## Usage


```
{% imgurgal [galleryId]%}
```

Example:

```
{% imgurgal ryMBU %}
```

Will output:

```
<iframe class='imgur-album' style='width: 100%, min-height: 90vh' src='//imgur.com/a/ryMBU/embed'></iframe><a href='https://imgur.com/a/ryMBU'>View gallery on Imgur</a>
```