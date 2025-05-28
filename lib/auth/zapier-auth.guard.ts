import { NextResponse } from 'next/server';
import { serverInstance as rollbar } from '../rollbar';

export class UnauthorizedException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'UnauthorizedException';
  }
}

export function validateZapierAuth(request: Request): boolean {
  rollbar.info(`Validating Zapier Auth`);

  const authHeader = request.headers.get('authorization');

  if (!authHeader) {
    rollbar.error('Unauthorized: missing required Basic auth');
    throw new UnauthorizedException('Unauthorized: missing required Basic auth');
  }

  if (!authHeader.startsWith('Basic ')) {
    rollbar.error('Unauthorized: invalid auth format');
    throw new UnauthorizedException('Unauthorized: invalid auth format');
  }

  const zapierToken = authHeader.split('Basic ')[1];
  const expectedToken = process.env.ZAPIER_WEBHOOK_TOKEN;

  if (!expectedToken) {
    rollbar.error('Unauthorized: ZAPIER_WEBHOOK_TOKEN not configured');
    throw new Error('ZAPIER_WEBHOOK_TOKEN not configured');
  }

  if (zapierToken !== expectedToken) {
    rollbar.error('Unauthorized: invalid auth token');
    throw new UnauthorizedException('Unauthorized: invalid auth token');
  }
  rollbar.info('Zapier Auth validated successfully');
  return true;
}

export function handleAuthError(error: unknown) {
  if (error instanceof UnauthorizedException) {
    return NextResponse.json(
      { error: error.message },
      { status: 401 }
    );
  }

  return NextResponse.json(
    { error: 'Internal server error' },
    { status: 500 }
  );
}