import { Configuration } from 'webpack';

export type NextConfig = Partial<{
  assetPrefix: string;
  basePath: string;
  compression: boolean;
  distDir: string;
  env: Record<string, unknown>;
  eslint: {
    ignoreDuringBuilds: boolean;
  };
  exportPathMap: unknown;
  future: {};
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
  webpack5: boolean;
}>;
