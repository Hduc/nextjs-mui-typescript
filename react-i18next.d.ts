import common from './src/locales/vi/common.json'
import 'next-i18next'
export interface MyResource{
    common:typeof common
}

declare  module 'next-i18next'{
    interface Resource extends MyResource{}
}