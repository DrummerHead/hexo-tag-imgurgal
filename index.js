/**
 * imgur gal hexo tag
 *
 * example:
 * {% imgurgal ryMBU %}
 */

hexo.extend.tag.register('imgurgal', function(args){
  var imgurId = args[0];
  return "<iframe class='imgur-album' src='//imgur.com/a/' + imgurId + '/embed'></iframe>"
})