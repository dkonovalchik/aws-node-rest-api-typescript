import { Handler, Context } from 'aws-lambda';

import dotenv from 'dotenv';
import path from 'path';
const dotenvPath = path.join(__dirname, '../../', '.env');
dotenv.config({
  path: dotenvPath,
});

import { books } from './model';
import { BooksController } from './controller/books';

const booksController = new BooksController(books);

export const create: Handler = (event: any, context: Context) => {
  return booksController.create(event, context);
};

export const update: Handler = (event: any, context: Context) => {
  return booksController.update(event, context);
}

export const find: Handler = (event: any, context: Context) => {
  return booksController.find(event, context);
}

export const findOne: Handler = (event: any, context: Context) => {
  return booksController.findOne(event, context);
};

export const deleteOne: Handler = (event: any, context: Context) => {
  return booksController.deleteOne(event, context);
}