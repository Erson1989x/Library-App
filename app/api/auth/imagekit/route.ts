import { ImageKit } from "imagekitio-next";
import config from "@/lib/config";
import { NextResponse } from "next/server";

const {
  env: {
    imagekit: { publicKey, privateKey, urlEndpoint },
  },
} = config;

const imageKit = new ImageKit({
  publicKey: publicKey,
  privateKey: privateKey,
  urlEndpoint: urlEndpoint,
});

export async function GET() {
    return NextResponse.json(imageKit.getAuthentificationParameters());
}