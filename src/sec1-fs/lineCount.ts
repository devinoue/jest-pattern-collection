/**
 * https://qiita.com/vimyum/items/4ded9de3b784afd31025
 */
import * as fs from 'fs'

export default function lineCount(path: string): number {
  const data = fs.readFileSync(path, 'utf-8') // ■このメソッドをmock化したい
  return data.split('\n').length
}
