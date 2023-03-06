import { WebpackPluginInstance } from 'webpack'
import { BuildOptions } from './buildTypes'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export const buildPlugins = ({ paths, isDev }: BuildOptions): WebpackPluginInstance[] => {
  const plugins: WebpackPluginInstance[] = [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
  ]
  if (isDev) {
    console.log('dev')
  }
  return plugins
}
