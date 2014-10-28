meteor-accounts-linkedin
============================

A meteor package for LinkedIn's login service.

*Install Package*

`meteor add jonperl:accounts-linkedin`

*Retrieve Additional Data*

This is how to get all the profile fields. Make sure to remove what you do not need to stay in line w/ their [API terms](https://developer.linkedin.com/documents/linkedin-apis-terms-use).

````javascript
var accessToken = user.services.linkedin.accessToken;
// http://developer.linkedin.com/documents/profile-fields
var basicProfileFields = ['first-name', 'last-name', 'maiden-name', 'formatted-name', 'phonetic-first-name',
        'phonetic-last-name', 'formatted-phonetic-name', 'headline', 'location',
        'industry', 'num-connections', 'num-connections-capped', 'summary',
        'specialties', 'positions', 'picture-url', 'picture-urls::(original)', 'site-standard-profile-request'],
    emailFields = ['email-address'],
    fullProfileFields = ['last-modified-timestamp', 'proposal-comments', 'associations', 'interests', 'publications',
        'patents', 'languages', 'skills', 'certifications', 'educations',
        'courses', 'volunteer', 'three-current-positions', 'three-past-positions', 'num-recommenders',
        'recommendations-received', 'following', 'job-bookmarks', 'suggestions', 'date-of-birth'],
    contactInfoFields = ['phone-numbers', 'bound-account-types', 'im-accounts', 'main-address', 'twitter-accounts', 'primary-twitter-account'];

var requestUrl = 'https://api.linkedin.com/v1/people/~:(' + _.union(basicProfileFields, emailFields, fullProfileFields, contactInfoFields).join(',') + ')';

var response = HTTP.get(requestUrl, {
    params: {
        oauth2_access_token: accessToken,
        format: 'json'
    }
});
````
