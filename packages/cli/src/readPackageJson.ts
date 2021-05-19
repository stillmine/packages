import fs from 'fs/promises';

interface PackageJson {
  name: string;
  version: string;
  dependencies?: Dependencies;
  peerDependencies?: Dependencies;
}

type Dependencies = Record<string, string>;

export async function readPackageJson(filePath: string): Promise<PackageJson | undefined> {
  try {
    const pkg = await fs.readFile(filePath, 'utf-8');

    return JSON.parse(pkg);
  } catch (error) {
    console.error(error);
  }
}
