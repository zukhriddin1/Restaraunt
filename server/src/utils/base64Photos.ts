import fs from "fs";
import fsPromises from "fs/promises";
import path from "path";
const base64Photos = async (base64: string) => {
  const splited = base64.split(",");
  const base64Data = splited[1];
  const start = splited[0];

  path.join();
  const exstname = start.slice(start.indexOf("/") + 1, -7);
  const filName = "./uploads/photo-" + new Date().getTime() + "." + exstname;

  if (fs.existsSync(path.join(__dirname, "../", "uploads"))) {
    await fsPromises.writeFile(
      path.join(__dirname, "../", filName),
      base64Data,
      "base64"
    );
  } else {
    await fsPromises.mkdir(path.join(__dirname, "../", "uploads"));
    await fsPromises.writeFile(
      path.join(__dirname, "../", filName),
      base64Data,
      "base64"
    );
  }
  return filName;
};

export default base64Photos;
