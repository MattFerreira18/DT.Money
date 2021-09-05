import { Request, Response } from "express";
import { TransactionsRepository } from "../repositories/TransactionsRepository";

export class TransactionsController {
  constructor(
    private repository: TransactionsRepository,
  ) { }

  async create(req: Request, res: Response): Promise<Response> {
    const {
      title,
      category,
      type,
      amount,
    } = req.body;

    const transactionAlreadyExists = await this.repository.findByTitle(title);

    if (transactionAlreadyExists) {
      return res.status(409).json({
        status: 'error',
        code: 409,
        message: 'transaction already exists',
      });
    }

    if (type !== 'DEPOSIT' && type !== 'WITHDRAW') {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: 'invalid transaction type',
      });
    }

    if (amount < 0) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: 'invalid amount',
      });
    }

    const transaction = await this.repository.create({
      title,
      category,
      type,
      amount,
    });

    return res.status(201).json(transaction);
  }

  async findAll(req: Request, res: Response): Promise<Response> {
    const transactions = await this.repository.findAll();

    return res.status(200).json(transactions);
  }

  async findOne(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const transaction = await this.repository.findById(id);

    if (!transaction) {
      return res.status(404).json({
        status: 'error',
        code: 404,
        message: 'transaction not found',
      });
    }

    return res.status(200).json(transaction);
  }

  async remove(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const transaction = await this.repository.findById(id);

    if (!transaction) {
      return res.status(404).json({
        status: 'error',
        code: 404,
        message: 'transaction not found',
      });
    }

    await this.repository.remove(id);

    return res.status(204).send();
  }
}
