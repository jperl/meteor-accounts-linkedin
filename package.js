Package.describe({
    name: 'jonperl:accounts-linkedin',
    summary: 'Login service for LinkedIn accounts',
    version: '1.0.0',
    git: 'https://github.com/jperl/meteor-accounts-linkedin'
});

Package.on_use(function (api) {
    api.versionsFrom('METEOR@0.9.2');

    api.use('accounts-base', ['client', 'server']);
    // Export Accounts (etc) to packages using this one.
    api.imply('accounts-base', ['client', 'server']);
    api.use('accounts-oauth', ['client', 'server']);
    api.use('jonperl:linkedin@1.0.0', ['client', 'server']);

    api.add_files('linkedin.js');
    api.add_files(['linkedin_login_button.css'], 'client');
});