// this is showing you how you use it with react for example
// if your using node or something else you can import using
// @apollo/client/core!
import { gql } from "@apollo/client";
import { apolloClient } from "../../../services/ApolloClient";

const GET_USERS_NFTS = `
  query($request: NFTsRequest!) {
    nfts(request: $request) {
      items {
        contractName
        contractAddress
        symbol
        tokenId
        owners {
          amount
          address
        }
        name
        description
        contentURI
        originalContent {
          uri
          metaType
        }
        chainId
        collectionName
        ercType
      }
    pageInfo {
        prev
        next
        totalCount
    }
  }
}
`;

export const getUsersNfts = (ownerAddress: string) => {
  return apolloClient.query({
    query: gql(GET_USERS_NFTS),
    variables: {
      request: {
        ownerAddress,
        // contractAddress,
        chainIds: [80001],
        limit: 10,
      },
    },
  });
};
