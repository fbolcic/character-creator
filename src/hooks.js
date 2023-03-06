import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

export function useGeneratedImage() {
  const [imageUrl, setImageUrl] = useState("");
  const [status, setStatus] = useState("idle");

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  async function getImageUrl(prompt) {
    if (!prompt) {
      setStatus("idle");
      return;
    }

    setStatus("fetching");

    try {
      const response = await openai.createImage({
        prompt,
        n: 1,
        size: "256x256",
      });

      const imageUrl = response.data.data[0].url;
      setImageUrl(imageUrl);
    } catch (error) {
      setStatus("error");
      return;
    }

    setStatus("success");
  }

  const isIdle = status === "idle";
  const isLoading = status === "fetching";
  const isError = status === "error";
  const isSuccess = status === "success";

  return { imageUrl, isIdle, isLoading, isError, isSuccess, getImageUrl };
}
