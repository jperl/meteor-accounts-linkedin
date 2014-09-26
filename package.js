Package.describe({
  name: 'jonperl:accounts-linkedin',
  summary: 'Login service for LinkedIn accounts',
  version: '1.1.0',
  git: 'https://github.com/jperl/meteor-accounts-linkedin'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@0.9.2');

  var both = ['web', 'server'];

  api.use([
    'accounts-base', 'accounts-oauth',
    'jonperl:linkedin@1.1.0'
  ], both);
  
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', both);

  api.addFiles('linkedin.js', both);
  api.addFiles('linkedin_login_button.css', 'web');
});