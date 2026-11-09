import { chromium } from "playwright";
import { writeFile } from "node:fs/promises";

const browser = await chromium.launch({
  executablePath:
    "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  headless: true,
});
try {
  const page = await browser.newPage();
  await page.goto("http://127.0.0.1:5173/");
  const data = await page.evaluate(async () => {
    const image = new Image();
    image.src = "/profile.png";
    await image.decode();
    const canvas = document.createElement("canvas");
    canvas.width = Math.min(1000, image.naturalWidth);
    canvas.height = Math.round(
      (image.naturalHeight * canvas.width) / image.naturalWidth,
    );
    canvas.getContext("2d").drawImage(image, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL("image/webp", 0.86).split(",")[1];
  });
  await writeFile("public/profile.webp", Buffer.from(data, "base64"));
  console.log(
    `Optimized portrait: ${Buffer.from(data, "base64").length} bytes`,
  );
} finally {
  await browser.close();
}
