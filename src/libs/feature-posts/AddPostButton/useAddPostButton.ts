import { useState } from "react";
import { usePostSceneContext } from "../../provider-posts";
import { uploadImage } from "../../utils-media";

export function useAddPostButton() {
  const { setPhotos } = usePostSceneContext();
  const [loading, setLoading] = useState(false);

  const selectPhotos = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.currentTarget.files) {
      throw new Error("Not found file");
    }

    setLoading(true);
    const result = await uploadImage(event.currentTarget.files);
    setPhotos(result.data.imageFilePaths);
    setLoading(false);
  };

  return {
    loading,
    selectPhotos,
  };
}
