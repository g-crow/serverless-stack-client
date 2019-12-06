const dev = {
  STRIPE_KEY: "pk_test_bkilKUbMjA4atuJiJJVhO0NB00QOQILxtX",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-ppdpr6z8sbc4"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://vmlh3od7m5.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_dRWW7oBaG",
    APP_CLIENT_ID: "6c24sqeg58mnlqsrvlmabqfatp",
    IDENTITY_POOL_ID: "us-east-2:7ea3d7c0-805c-4315-aefa-8c2e8fa82ecf"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_bkilKUbMjA4atuJiJJVhO0NB00QOQILxtX",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-vlc2k8xuqvgd"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://4e3olesiih.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_ypJN0B4uW",
    APP_CLIENT_ID: "7vt89o1m1dgd0fuuf8at5q9nfr",
    IDENTITY_POOL_ID: "us-east-2:c1ba1b24-195f-4ae8-9438-ff4eef951670"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
