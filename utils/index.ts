import continueWithSocialAuth from "./continue-with-social-auth";

//function continueWithSocialAuth(provider: string, redirect: string)
export const continueWithGoogle = () => continueWithSocialAuth('google-oauth2', 'google');
export const continueWithFacebook = () => continueWithSocialAuth('facebook', 'facebook');