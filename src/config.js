export const api_url =

  process.env.REACT_APP_ENV_CONFIG === "development"

    ? "https://jio-clickstream-product-suggestion.extensions.jiox0.de"
    : "";