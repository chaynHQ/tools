import { NextResponse } from 'next/server';

export class UnauthorizedException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'UnauthorizedException';
  }
}

export function validateZapierAuth(request: Request): boolean {
  const authHeader = request.headers.get('authorization');

  if (!authHeader) {
    throw new UnauthorizedException('Unauthorized: missing required Basic auth');
  }

  if (!authHeader.startsWith('Basic ')) {
    throw new UnauthorizedException('Unauthorized: invalid auth format');
  }

  const zapierToken = authHeader.split('Basic ')[1];
  const expectedToken = process.env.ZAPIER_WEBHOOK_TOKEN;

  if (!expectedToken) {
    throw new Error('ZAPIER_WEBHOOK_TOKEN not configured');
  }

  if (zapierToken !== expectedToken) {
    throw new UnauthorizedException('Unauthorized: invalid auth token');
  }

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