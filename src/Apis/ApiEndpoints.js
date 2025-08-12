const baseUrl = import.meta.env.VITE_BASE_URL;

// Comments
const GET_COMMENTS = baseUrl + "/comment/getComments/";
const ADD_COMMENT = baseUrl + "/comment/addComment/";

// Likes
const LIKE_POST = baseUrl + "/like/likePost/";
const UNLIKE_POST = baseUrl + "/like/unlikePost/";
const LIKE_COMMENT = baseUrl + "/like/likeAComment/";
const UNLIKE_COMMENT = baseUrl + "/like/unlikeAComment/";
const LIKE_STORY = baseUrl + "/like/likeStory/";
const UNLIKE_STORY = baseUrl + "/like/unlikeStory/";

// Follows
const FOLLOW = baseUrl + "/follow/follow/";
const UNFOLLOW = baseUrl + "/follow/unfollow/";
const GET_FOLLOWERS = baseUrl + "/follow/getFollowers/";
const GET_FOLLOWINGS = baseUrl + "/follow/getFollowings/";

// Posts
const GET_POST_BY_ID = baseUrl + "/posts/getPost/";
const GET_USER_POSTS = baseUrl + "/posts/getUserPosts/";
const GET_IMAGE_FEED = baseUrl + "/posts/getImagePostsFeed/";
const GET_VIDEO_FEED = baseUrl + "/posts/getVideoPostsFeed/";
const ADD_IMAGE_POST = baseUrl + "/posts/addImagePost/";
const ADD_VIDEO_POST = baseUrl + "/posts/addVideoPost/";

// Profile
const GET_PROFILE = baseUrl + "/users/getUser/";
const GET_LOGGED_IN_USER_PROFILE = baseUrl + "/users/getMyData/";

// Authentication

//otp mobile
const SEND_MOBILE_OTP = baseUrl + "/otp/generateOtpMobile/";
const RESEND_MOBILE_OTP = baseUrl + "/otp/resendOtpMobile/";
const FORGET_PASSWORD_MOBILE_OTP =
  baseUrl + "/otp/ForgetPasswordGenerateOtpMobile";
const FORGET_PASSWORD_EMAIL_OTP =
  baseUrl + "/otp/ForgetPasswordGenerateOtpEmail/";
const VERIFY_MOBILE_OTP = baseUrl + "/otp/verifyOtpMobile/";

//otp email
const SEND_EMAIL_OTP = baseUrl + "/otp/generateOtpEmail/";
const VERIFY_EMAIL_OTP = baseUrl + "/otp/verifyOtpEmail/";

// Reset Password
const RESET_PASSWORD_MOBILE = baseUrl + "/resetPassword/Mobile/";
const RESET_PASSWORD_EMAIL = baseUrl + "/resetPassword/Email/";

// register route
const REGISTER_MOBILE = baseUrl + "/auth/register/mobile/";
const REGISTER_EMAIL = baseUrl + "/auth/register/email/";

//login route
const LOGIN_MOBILE = baseUrl + "/auth/login/mobile/";
const LOGIN_EMAIL = baseUrl + "/auth/login/email/";
const LOGIN_USERID = baseUrl + "/auth/login/userid/";

//Edit userDetails
const EDIT_USERNAME = baseUrl + "/profile/edit/username/";
const EDIT_USERID = baseUrl + "/profile/edit/userid/";
const EDIT_BIO = baseUrl + "/profile/edit/bio/";
const EDIT_PROFILE_PICTURE = baseUrl + "/profile/edit/profile";

// story routes
const ADD_STORY = baseUrl + "/story/addStory/";
const GET_STORIES = baseUrl + "/story/getStories/";
const GET_MY_STORIES = baseUrl + "/story/getMyStories/";

export {
  baseUrl,
  GET_COMMENTS,
  ADD_COMMENT,
  LIKE_POST,
  UNLIKE_POST,
  LIKE_COMMENT,
  UNLIKE_COMMENT,
  LIKE_STORY,
  UNLIKE_STORY,
  FOLLOW,
  UNFOLLOW,
  GET_FOLLOWERS,
  GET_FOLLOWINGS,
  GET_POST_BY_ID,
  GET_USER_POSTS,
  GET_IMAGE_FEED,
  GET_VIDEO_FEED,
  ADD_IMAGE_POST,
  ADD_VIDEO_POST,
  GET_PROFILE,
  GET_LOGGED_IN_USER_PROFILE,
  SEND_MOBILE_OTP,
  RESEND_MOBILE_OTP,
  FORGET_PASSWORD_MOBILE_OTP,
  FORGET_PASSWORD_EMAIL_OTP,
  VERIFY_MOBILE_OTP,
  SEND_EMAIL_OTP,
  VERIFY_EMAIL_OTP,
  RESET_PASSWORD_MOBILE,
  RESET_PASSWORD_EMAIL,
  REGISTER_MOBILE,
  REGISTER_EMAIL,
  LOGIN_MOBILE,
  LOGIN_EMAIL,
  LOGIN_USERID,
  EDIT_USERNAME,
  EDIT_USERID,
  EDIT_BIO,
  EDIT_PROFILE_PICTURE,
  ADD_STORY,
  GET_STORIES,
  GET_MY_STORIES,
};
