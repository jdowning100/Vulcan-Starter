Package.describe({
  name: 'example-forms',
});

Package.onUse(function (api) {

  api.use([
    // vulcan core
    'vulcan:core@1.8.9',

    // vulcan packages
    'vulcan:forms@1.8.9',
    'vulcan:accounts@1.8.9',
    'vulcan:forms-upload@1.8.9',

    // third-party packages
    'fourseven:scss@4.5.0',
  ]);

  api.addFiles('lib/stylesheets/style.scss');

  api.mainModule('lib/server/main.js', 'server');
  api.mainModule('lib/client/main.js', 'client');

});
