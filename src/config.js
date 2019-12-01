export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_bkilKUbMjA4atuJiJJVhO0NB00QOQILxtX",
  s3: {
    REGION: "us-east-2",
    BUCKET: "my-awesome-example-app-123"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://xksd3qyvna.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_Ya8EaB2Zr",
    APP_CLIENT_ID: "6i2lhm5mc880k899e7hfcbm3bc",
    IDENTITY_POOL_ID: "us-east-2:63d4b254-3dcb-47a8-9039-ed89fdece9ff"
  }
};
