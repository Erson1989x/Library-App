"use client";
import React, { useRef, useState } from "react";
import { IKImage, ImageKitProvider, IKUpload } from "imagekitio-next";
import config from "@/lib/config";
import upload from "@/public/icons/upload.svg";
import Image from "next/image";
import { toast } from "@/hooks/use-toast";
const {
  env: {
    imagekit: { publicKey, privateKey, urlEndpoint },
  },
} = config;

const authenticator = async () => {
  try {
    const res = await fetch(`${config.env.apiEndpoint}/api/auth`);
    if (!res.ok) {
      const errorText = await res.text();

      throw new Error(
        `Failed to authenticate: ${res.statusText}: ${errorText}`
      );
    }
    const data = await res.json();

    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    throw new Error(`Failed to authenticate: ${message}`);
  }
};
const ImageUpload = ({
  onFileChange,
}: {
  onFileChange: (filePath: string) => void;
}) => {
  const IKUploadRef = useRef(null);
  const [file, setFile] = useState<{ filePath: string } | null>(null);

  const onError = (error: any) => {
    console.log("error");
    toast({
      title: "Image upload failed",
      description: `Your image cannot be uploaded please try again`,
      variant: "destructive",
    });
  };

  const onSuccess = (res: any) => {
    setFile(res);
    onFileChange(res.filePath);
    toast({
      title: "Image uploaded successfully",
      description: `${res.filePath} uploaded successfully`,
    });
  };
  return (
    <ImageKitProvider
      publicKey={publicKey}
      authenticator={authenticator}
      urlEndpoint={urlEndpoint}
    >
      <IKUpload
        className="hidden"
        ref={IKUploadRef}
        onSuccess={onSuccess}
        onError={onError}
        fileName="test.png"
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          if (IKUploadRef.current) {
            // @ts-ignore
            IKUploadRef.current.click();
          }
        }}
        className="upload-btn"
      >
        <Image
          src={upload}
          alt="upload"
          width={20}
          height={20}
          className="object-contain"
        />
        <p className="text-base text-light-100">Upload a file</p>
        {file && <p className="upload-filename"> {file.filePath} </p>}
      </button>
      {file && (
        <IKImage
          alt={file.filePath}
          path={file.filePath}
          width={500}
          height={500}
        />
      )}
    </ImageKitProvider>
  );
};

export default ImageUpload;
