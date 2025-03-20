import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: '2433867e14054151a8fe33c097fe3f33'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: '4dfbafca0dc84c149f33e3361af82885'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '5c4eb7ddf67048b3a70e2ac201f52d02'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'ca49861f9f384472ab4bb13f98ba40e8'
                    }
                }
            }
        }
    }
}
