declare module 'ali-oss' {
  type OssClientOptions = {
    accessKeyId: string
    accessKeySecret: string
    bucket: string
    region: string
    endpoint?: string
    secure?: boolean
  }

  type PutOptions = {
    mime?: string
    headers?: Record<string, string>
  }

  type CORSRule = {
    allowedOrigin: string[]
    allowedMethod: string[]
    allowedHeader?: string[]
    exposeHeader?: string[]
    maxAgeSeconds?: number
  }

  type CORSResult = {
    rules: CORSRule[]
  }

  class OSS {
    constructor(options: OssClientOptions)
    put(name: string, file: Buffer, options?: PutOptions): Promise<unknown>
    head(name: string): Promise<unknown>
    putBucketCORS(bucket: string, rules: CORSRule[]): Promise<unknown>
    getBucketCORS(bucket: string): Promise<CORSResult>
  }

  export = OSS
}
