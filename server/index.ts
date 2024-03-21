import express, { Express } from 'express';
import { Server } from 'socket.io';
import { JsonDB, Config } from 'node-json-db';
import http from 'http';

const app: Express = express();
const server = http.createServer(app);

const db = new JsonDB(new Config('results', true, false, '/'));
const io = new Server(server, { cors: { origin: ':3000' } });

io.on('connection', (socket) => {
	console.log('a user connected');
	let computerNumber: number;

	socket.on('disconnect', () => {
		console.log('someone disconnected');
		io.emit('computer_disconnected', computerNumber);
	});

	socket.on('computer_connected', (which: number) => {
		io.emit('computer_connected', which);
		computerNumber = which;
	});

	socket.on('computer_disconnected', () => {
		io.emit('computer_disconnected', computerNumber);
	});

	socket.on('question_changed', (current_question) => {
		io.emit('question_changed', current_question, computerNumber);
	});

	socket.on('answers', (answers) => {
		io.emit('answers', answers, computerNumber);
	});

	socket.on('name', (name) => {
		io.emit('name', name, computerNumber);
	});

	socket.on('username', (username) => {
		io.emit('username', username, computerNumber);
	});

	socket.on('school', (school) => {
		io.emit('school', school, computerNumber);
	});

	socket.on('city', (city) => {
		io.emit('city', city, computerNumber);
	});

	socket.on('save_results', async (name, result) => {
		await db.push('/results[]', { name, result }, true);
		const results = await db.getData('/results');
		io.emit('results', results);
	});

	socket.on('get_results', async () => {
		const results = await db.getData('/results');
		socket.emit('results', results);
	});

	socket.on('reset', () => {
		db.delete('/results');
		io.emit('results', []);
	});
});

server.listen(4000, '0.0.0.0', () => console.log('test'));
