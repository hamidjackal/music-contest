import { Request, Response, NextFunction } from 'express';
import { NotAuthorizedError } from '../errors/not-authorized-error';
export declare const requireAuth: (req: Request, res: Response, next: NextFunction) => NotAuthorizedError | undefined;
