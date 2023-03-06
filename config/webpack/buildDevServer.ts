import { BuildOptions } from './buildTypes'
import { Configuration } from 'webpack-dev-server'

export const buildDevServer = ({ port }: BuildOptions): Configuration => ({
  port,
  open: true,
  historyApiFallback: true,
  hot: true,
})
