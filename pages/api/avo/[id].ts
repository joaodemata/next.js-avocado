import { NextApiRequest, NextApiResponse } from 'next'
import DB from '@database'

const allAvos = async (_req: NextApiRequest, _res: NextApiResponse) => {
  const db = new DB()

  const id = _req.query.id as string
  const avo = await db.getById(id)

  _res.status(200).json(avo)
}

export default allAvos
