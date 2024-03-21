import { useEffect, useState } from "react";
import { socket } from "../socket";
import questions from "../questions.json";

const AdminDataRow = (props: { which: number }) => {
	const [isConnected, setIsConnected] = useState(false);
	const [currentQuestion, setCurrentQuestion] = useState("none");
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [school, setSchool] = useState("");
	const [city, setCity] = useState("");
	const [answers, setAnswers] = useState([]);
	const [score, setScore] = useState(0);

	useEffect(() => {
		socket.on("computer_connected", (which) => {
			if (which == props.which) {
				setIsConnected(true);
			}
		});
		socket.on("computer_disconnected", (which) => {
			if (which == props.which) {
				setIsConnected(false);
				setCurrentQuestion("none");
				setAnswers([]);
				setName("");
				setUsername("");
				setSchool("");
				setCity("");
			}
		});
		socket.on("question_changed", (question, computer) => {
			if (computer == props.which) {
				setCurrentQuestion(question);
			}
		});
		socket.on("answers", (question, computer) => {
			if (computer == props.which) {
				setAnswers(question);
			}
		});
		socket.on("name", (question, computer) => {
			console.log(question, computer);
			if (computer == props.which) {
				setName(question);
			}
		});
		socket.on("username", (question, computer) => {
			if (computer == props.which) {
				setUsername(question);
			}
		});
		socket.on("school", (question, computer) => {
			if (computer == props.which) {
				setSchool(question);
			}
		});
		socket.on("city", (question, computer) => {
			if (computer == props.which) {
				setCity(question);
			}
		});
		return () => {
			socket.off("computer_connected");
			socket.off("computer_disconnected");
			socket.off("question_changed");
			socket.off("answers");
			socket.off("name");
			socket.off("username");
			socket.off("school");
			socket.off("city");
		};
	}, []);

	useEffect(() => {
		let correct = 0;
		questions.forEach((questionData, i) => {
			if (answers[i] === questionData.correctAnswer) {
				correct += 1;
			}
		});
		setScore(correct);
	}, [answers]);

	return (
		<tr>
			<td>{props.which + 1}</td>
			<td>{isConnected ? "yes" : "no"}</td>
			<td>{name}</td>
			<td>{username}</td>
			<td>{school}</td>
			<td>{city}</td>
			<td>{currentQuestion ?? "none"}</td>
			{questions.map((questionData, i) => (
				<td key={i}>{questionData.answers[answers[i]]}</td>
			))}
			<td>{score}</td>
		</tr>
	);
}

export default AdminDataRow;