import AdminDataRow from './AdminDataRow';
import questions from '../questions.json';
import { socket } from '../socket';

const Admin = () => {
	const NUM_COMPUTERS = 19;

	const reset = () => {
		socket.emit('reset');
	};

	return (
		<div className="admin">
			<style></style>
			<br />
			<br />
			<br />
			<h1>Dane</h1>
			<table>
				<thead>
					<tr>
						<th>no.</th>
						<th>connected</th>
						<th>name</th>
						<th>username</th>
						<th>school</th>
						<th>city</th>
						<th>question</th>
						{questions.map((questionData, i) => (
							<th key={i}>Q{i + 1}</th>
						))}
						<th>Result</th>
					</tr>
				</thead>
				<tbody>
					{[...Array(NUM_COMPUTERS)].map((r, i) => (
						<AdminDataRow key={i} which={i} />
					))}
				</tbody>
			</table>
			<button onClick={reset}>Reset</button>
		</div>
	);
};

export default Admin;
