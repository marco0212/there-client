import { SERVER_HOST_URL } from "../../constants";

type UploadImageResponse = {
  data: { imageFilePaths: string[] };
};

export async function uploadImage(
  files: FileList
): Promise<UploadImageResponse> {
  const formData = new FormData();

  for (let i = 0; i < files.length; i++) {
    formData.append("images", files[i]);
  }

  const result = await fetch(`${SERVER_HOST_URL}/upload-images`, {
    body: formData,
    method: "POST",
  });

  return result.json();
}
