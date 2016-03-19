/**
 * imgur gal hexo tag
 *
 * example:
 * {% imgurgal ryMBU %}
 */

hexo.extend.tag.register('imgurgal', function(args){
  var imgurId = args[0];
  return "<iframe class='imgur-album' style='width: 100%, min-height: 90vh' src='//imgur.com/a/" + imgurId + "/embed'></iframe><a href='https://imgur.com/a/" + imgurId + "'>View gallery on Imgur</a>";
})