import type { RequestHandler } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';

const METABASE_SECRET_KEY = '9c1832938b0ff6dd916d5fb43e1cc58d2b335edcb0a94f77cd469c701138f5af';

export const GET: RequestHandler = () => {
  const payload = {
    resource: { dashboard: 3 },
    params: {},
    exp: Math.floor(Date.now() / 1000) + 10 * 60 // 10 mins expiration
  };

  const token = jwt.sign(payload, METABASE_SECRET_KEY);

  return new Response(JSON.stringify({ token }), {
    headers: { 'Content-Type': 'application/json' }
  });
};