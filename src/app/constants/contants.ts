import { HttpLink } from "@apollo/client/link/http";

const mumbaiTestnet = new HttpLink({ uri: "https://api-mumbai.lens.dev/" });
const localhost = new HttpLink({ uri: "http://0.0.0.0:8545/" });

export const NETWORK = {
  localhost,
  mumbaiTestnet,
};

export enum KEYS {
  LENS_TOKENS = "LENS_TOKENS",
  ACCESS_TOKEN = "ACCESS_TOKEN",
  REFRESH_TOKEN = "REFRESH_TOKEN",
  PRNTS_PUBLIC_KEY = "PUBLIC_KEY",
  PRNTS_USER_HANDLE = "USER_HANDLE",
  PRNTS_PRIVATE_KEY = "PRNTS_PRIVATE_KEY",
}
