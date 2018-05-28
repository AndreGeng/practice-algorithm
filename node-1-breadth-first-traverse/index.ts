import { readdir, lstatSync } from 'fs';
import { resolve } from 'path';

const rootDir = resolve(__dirname, 'test-folder');

export const readDir = (folderPath: string) => {
  return new Promise((resolveP, rejectP) => {
    readdir(folderPath, (err, files) => {
      const queue = new Array();
      if (err) {
        console.error(err);
        rejectP();
        return;
      }
      files.forEach((file: string) => {
        const filePath = resolve(folderPath, file);
        const fileStat = lstatSync(filePath);
        if(fileStat.isFile()) {
          console.log(file);
        } else if (fileStat.isDirectory()) {
          queue.push(filePath);
        }
      });
      if (queue.length > 0) {
        const result = Promise.all(queue.map((item) => readDir(item)));
        resolveP(result);
      } else {
        resolveP();
      }
    });
  });
};
