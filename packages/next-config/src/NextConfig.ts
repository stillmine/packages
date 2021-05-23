import { Configuration } from 'webpack';

export type NextConfig = Partial<{
  assetPrefix: string;
  basePath: string;
  compression: boolean;
  distDir: string;
  env: Record<string, unknown>;
  exportPathMap: unknown;
  future: {
    webpack5: boolean;
  };
  generateBuildId: unknown;
  generateEtags: boolean;
  headers: unknown;
  onDemandEntries: unknown;
  pageExtensions: string[];
  poweredByHeader: boolean;
  publicRuntimeConfig: Record<string, unknown>;
  reactStrictMode: boolean;
  redirects: unknown;
  rewrites: unknown;
  serverRuntimeConfig: Record<string, unknown>;
  trailingSlash: boolean;
  typescript: {
    ignoreBuildErrors: boolean;
  };
  webpack: Configuration;
}>;
