import { gql } from "@apollo/client";

export const PHOTO_UPLOAD = gql`
  mutation photoUpload($normalFile: Upload!, $compressedFile: Upload!) {
    photoUpload(normalFile: $normalFile, compressedFile: $compressedFile) {
      normalUrl
      compressedUrl
    }
  }
`;

export const DESIGN_UPLOAD = gql`
  mutation designUpload($normalFile: Upload!, $compressedFile: Upload!) {
    photoUpload(normalFile: $normalFile, compressedFile: $compressedFile) {
      normalUrl
      compressedUrl
    }
  }
`;
