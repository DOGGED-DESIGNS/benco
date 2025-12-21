"use server";

import { NextResponse } from "next/server";
import { db } from "../db/connect";

export const createFeature = (name: string, url: string) => {
  try {
    const data = db.ben.create({
      data: {
        des: name,
        url: url,
      },
    });

    return data;
  } catch (err) {
    throw new Error(`${err}`);
  }
};
