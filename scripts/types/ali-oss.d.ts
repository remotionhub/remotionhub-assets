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

  class OSS {
    constructor(options: OssClientOptions)
    put(name: string, file: Buffer, options?: PutOptions): Promise<unknown>
  }

  export = OSS
}
