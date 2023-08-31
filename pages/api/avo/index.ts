import { IncomingMessage, ServerResponse } from 'http'
import DB from '@database'

const allAvos = async (_req: IncomingMessage, _res: ServerResponse) => {
  const db = new DB()
  const allEntries = await db.getAll()

  _res.statusCode = 200
  _res.setHeader('Content-type', 'application/json')
  _res.end(JSON.stringify({ length: allEntries.length, data: allEntries }))
}

export default allAvos
